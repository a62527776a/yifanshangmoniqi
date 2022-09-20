<template>
    <div>初始干预概率：</div>
    <input v-model="GKScale" type="number" />
    <div>干预概率倍率： (0不干预)</div>
    <input v-model="概率倍率" />
    <button @click="exec" type="button" class="btn btn-primary">执行50次</button>
  <HelloWorld ref="doms" :GKScale="GKScale" :概率倍率="概率倍率" v-for="item in 50" :key="item" />
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
import HelloWorld from './components/HelloWorld.vue';
import { getCurrentInstance, onMounted } from '@vue/runtime-core';

export default {
  name: '',
  components: {
    HelloWorld
  },
  setup() {
    const GKScale = ref(1)
    const 概率倍率 = ref(1)
    const doms: any = ref(null)
    let currentInstance: any = ''

    onMounted(() => {
        currentInstance = getCurrentInstance()
    })

    const sleep = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 50)
      })
    }

    const exec = async () => {
      for (let i = 0; i < currentInstance.refs.doms.length; i++) {
        await sleep()
        currentInstance.refs.doms[i].loop80()
      }
    }

    return {
      GKScale,
      概率倍率,
      exec,
      doms
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
