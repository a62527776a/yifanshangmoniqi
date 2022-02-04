enum GoodsType {
    时尚小垃圾 = '时尚小垃圾',
    手办 = '手办'
}

enum LotteryNumber {
    one = 1,
    three = 3,
    five = 5,
    all = 'all'
}

class Goods {
    goodType: GoodsType;
    
    public get name(): string {
        return this.goodType.toString()
    }
    
    constructor (goodType: GoodsType) {
        this.goodType = goodType;
    }
}

export enum SlotType {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    H = 'H',
    I = 'I',
    J = 'J',
    K = 'K',
    L = 'L',
    M = 'M',
    N = 'N',
    Last = 'Last'
}

class Slot {
    type: SlotType
    total: number
    count: number

    good: Goods

    get name () {
        return this.type + '赏'
    }

    constructor (type: SlotType, good: Goods, total: number) {
        this.type = type
        this.total = total
        this.count = total
        this.good = good
    }
}

export class A {
    _slots: Map<SlotType, Slot> = new Map();

    last = new Slot(SlotType.Last, new Goods(GoodsType.手办), 1)

    lotteryDraw = new LotteryDraw()

    len = 0;
    total = 0;
    GKLen = 0;
    lajiLen = 0;

    numbers() {
        let len = 0;
        let total = 0;
        this.GKLen = 0;
        this.lajiLen = 0
        this._slots.forEach((item) => {
            total += item.total
            if (item.count > 0) {
                len += item.count
                if (item.good.goodType == GoodsType.手办) {
                    this.GKLen += item.count
                } else {
                    this.lajiLen += item.count
                }
            }
        })
        this.len = len;
        this.total = total;
        this.expectitionGKExec()
    }
    
    public get slots(): IterableIterator<Slot> {
        return this._slots.values()
    }
    
    addItem (type: SlotType) {
        const slot = this._slots.get(type)
        if (slot) {
            slot.count += 1
            slot.total += 1
        }
        this.numbers()
    }

    // 比例
    scale(type: SlotType) {
        const slot = this._slots.get(type)
        if (slot) {
            const scale = slot.count / this.len
            return {
                scale: scale,
                scaleStr: (scale * 100).toFixed(2) + '%'
            }
        } else {
            return {
                scale: 0,
                scaleStr: '0%'
            }
        }
    }

    lotteryDrawFn () {
        const slot = this.lotteryDraw.lottry(this.slots, this.GKLen, this.lajiLen)
        if (slot && slot.type) {
            this.delGoods(slot.type)
            this.lotteryDraw.updateGKScale(slot, this.lotteryDraw.everyOutGoodScale)
            this.numbers()
        }
    }

    delGoods (type: SlotType) {
        const slot = this._slots.get(type)
        if (slot) {
            slot.count -= 1
            this.lotteryDraw.records.unshift(`您抽中了${slot.name}${slot.good.name}`)
        }
    }

    constructor () {
        this._slots.set(SlotType.A, new Slot(SlotType.A, new Goods(GoodsType.手办), 4))
        this._slots.set(SlotType.B, new Slot(SlotType.B, new Goods(GoodsType.手办), 4))
        this._slots.set(SlotType.C, new Slot(SlotType.C, new Goods(GoodsType.时尚小垃圾), 16))
        this._slots.set(SlotType.D, new Slot(SlotType.D, new Goods(GoodsType.时尚小垃圾), 26))
        this._slots.set(SlotType.E, new Slot(SlotType.E, new Goods(GoodsType.时尚小垃圾), 30))
        this.numbers()
    }

    // 预期出手办概率 为手办件数 / 总数
    expectitionGKExec () {
        let gkLen = 0;
        let totalLen = 0;
        this._slots.forEach(item => {
            if (item.good.goodType == GoodsType.手办) {
                gkLen += item.count
            }
            totalLen += item.count
        })
        const scale = gkLen / totalLen
        this.lotteryDraw.updateScale(totalLen, scale)
    }
}


class LotteryDraw {
    GKScale = 0 // 怒气值

    
    public get GKScaleStr() : string {
        return (this.GKScale * 100).toFixed(2) + '%'
    }
    

    records: string[] = []

    scale = 0 // 预期出手办概率
    scaleStr = ''
    everyOutGood = 0 // 预期每8发出一发手办
    everyOutGoodScale = 0 // 每次不出手办预期叠加概率
    everyOutGoodScaleStr = ''

    updateGKScale (slot: Slot, scale: number) {
        if (slot.good.goodType == GoodsType.手办) {
            this.GKScale -= 1 - (scale / 100)
        } else {
            this.GKScale += (scale / 100)
        }
    }

    lottry (slots: IterableIterator<Slot>, gkLen: number, lajiLen: number) {
        const random = Math.random();
        let scale = 0;
        let result;
        let lastSlot;
        const len = gkLen + lajiLen
        for (const slot of slots) {
            if (slot.count == 0) continue
            scale += slot.count / len
            // 如果有怒气值干预
            if (this.GKScale != 0) {
                let currentScale = 0 // 怒气值干预的概率
                if (slot.good.goodType == GoodsType.手办) {
                    currentScale = this.GKScale / gkLen
                    scale += currentScale
                } else {
                    currentScale = this.GKScale / lajiLen
                    scale -= currentScale
                }
            }
            console.log('scale', scale, random)
            lastSlot = slot
            if (scale <= 0) continue
            if (random <= scale) {
                result = slot
                break
            }
        }
        if (random > scale) result = lastSlot
        console.log(result)
        return result
    }

    updateScale(totalLen: number, scale: number) {
        this.scale = scale
        this.scaleStr = (scale * 100).toFixed(2) + '%',
        this.everyOutGood = totalLen / (totalLen * scale)
        this.everyOutGoodScale = (100 / this.everyOutGood)
        this.everyOutGoodScaleStr = this.everyOutGoodScale + '%'
    }
}