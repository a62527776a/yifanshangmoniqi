<template>
  <div class="hello">
    <h2>一番赏模拟器</h2>
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

    <button @click="a.lotteryDrawFn()" type="button" class="btn btn-primary">来一发</button>

    <div>
      <div v-for="(item, idx) in a.lotteryDraw.records" :key="idx">{{item}}</div>
    </div>

  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
import { A, SlotType } from './a'
export default {
  setup() {
    const a = reactive(new A())
    const addItem = (type: SlotType) => {
      a.addItem(type)
    }
    return {
      msg: 'dwqqwd',
      a,
      addItem
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
