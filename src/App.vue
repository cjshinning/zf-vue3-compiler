<template>
  <!-- <div>{{ name }}</div>
  <p>{{ age }}<span><a>{{ age }}</a></span></p>
  <span :[a]="'xxx'"></span> -->

  <!-- <div>
    <template v-if="flag">
      <p>hello world</p>
      <div>{{ xxx }}</div>
    </template>
    <template v-else>
      <div>{{ xxx }}</div>
      <p>hello world</p>
    </template>
  </div> -->

  <!-- <div>
    <span v-for="item in count">{{ item }}</span>
    <div>
      <span>{{ xxx }}</span>
    </div>
  </div> -->

  <!-- <div>
    <div :xxx="xxx"></div>
    <span v-for="item in count">{{ item }}</span>
    <xxx></xxx>
  </div> -->

  <div>
    <div>hello</div>
    <div>world</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
