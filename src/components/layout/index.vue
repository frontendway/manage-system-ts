<template>
  <div class="layout-outer">
    <div class="header-outer">
      header
    </div>
    <div class="container-outer">
      <div class="menu-outer">
        <dynamic-Menus />
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DynamicMenus from './menus/index.vue'

</script>

<style lang="scss" scoped>
.layout-outer{
  height: 100%;
  .header-outer{
    height: 80px;
  }
  .container-outer{
    height: calc(100% - 80px);
    display: flex;
    .menu-outer{
      width: 200px;
      flex-shrink: 0;
    }
    .container{
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
