<template>
  <div class="hello">
    <h2>一番赏模拟器</h2>
    <div>初始干预概率：</div>
    <input v-model="a.lotteryDraw.GKScale" type="number" />
    <div>干预概率倍率： (0不干预)</div>
    <input v-model="a.lotteryDraw.概率倍率" />
    <div>总计：{{a.total}}剩余：{{a.len}}</div>
    <div v-for="(item, idx) in a.slots" :key="idx">
      <a>{{item.name}} {{item.good.name}}</a>x{{item.count}} <span>几率：{{a.scale(item.type).scaleStr}}</span><i @click="addItem(item.type)">&nbsp;&nbsp;&nbsp;+ 添加</i>
    </div>
    <div>
      <a>{{a.last.name}} {{a.last.good.name}}</a>
    </div>
    <div>
      <br />
      <div>箱子初始预期：预期出手办概率{{a.lotteryDraw.scaleStr}} 预期每{{a.lotteryDraw.everyOutGood}}发出一手办</div>
      <div>每次不出手办将叠加几率{{a.lotteryDraw.everyOutGoodScaleStr}}</div>
    </div>
    <div>
      当前中手办叠加几率 {{a.lotteryDraw.GKScaleStr}} 每次抽完后将按照叠加几率增减
    </div>

    <br />

    <button @click="loop80" type="button" class="btn btn-primary">来一发</button>
    <button @click="refresh" type="button" class="btn btn-primary">刷新</button>

    <div>
      <div v-for="(item, idx) in a.lotteryDraw.records" :key="'wdwdw' + idx">
        <div v-if="item.indexOf('手办') > -1" :key="'qwdqwd' + item">您在{{idx}}次{{item}}</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
import { A, SlotType } from './a'
import { watchEffect } from '@vue/runtime-core'
export default {
  props: {
    GKScale: {
      type: Number,
      required: true
    },
    概率倍率: {
      type: Number,
      required: true
    },
  },
  setup(props: any) {
    let a = reactive(new A())
    const addItem = (type: SlotType) => {
      a.addItem(type)
    }

    watchEffect(() => {
      a.lotteryDraw.GKScale = props.GKScale
      a.lotteryDraw.概率倍率 = props.概率倍率
    })

    let refresh = () => {
      window.location.reload()
    }

    const loop80 = async () => {
      for (let i = 0; i < 80; i++) {
        a.lotteryDrawFn()
      }
    }

    return {
      msg: 'dwqqwd',
      a,
      addItem,
      refresh,
      loop80
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
