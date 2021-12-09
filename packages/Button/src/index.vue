<!--
 * @Author: zxx
 * @Date: 2021-09-30 10:56:10
 * @LastEditors: zxx
 * @LastEditTime: 2021-12-09 14:02:30
 * @FilePath: \styleguidist-vuecli3-demo\packages\Button\src\index.vue
 * @Description: some description
-->
<template>
  <div class="x-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .x-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>

