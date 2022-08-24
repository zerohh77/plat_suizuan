<template>
  <div style="margin-top: 20px;height: 100%" class="aside">
    <el-row class="tac" style="height: 100%">
      <el-col :span="24">
        <el-menu
            :uniqueOpened="true"
            :default-openeds="['2','3']"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#97CBFF"
            text-color="#00000"
            active-text-color="#FFFFFF"
            style="height: 100%"
        >
          <el-sub-menu index="2">
            <template #title>
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">数据预处理</el-menu-item>
              <el-menu-item index="2-2">地震属性提取</el-menu-item>
              <el-menu-item index="2-3">子波提取</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <i class="el-icon-location"></i>
              <span>资料处理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">频谱拓展</el-menu-item>
              <el-menu-item index="3-2">层速度估计</el-menu-item>
              <el-menu-item index="3-3">层位标定</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <i class="el-icon-location"></i>
              <span>构造解释</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">断裂提取</el-menu-item>
              <el-menu-item index="4-2">特殊岩体识别</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <i class="el-icon-location"></i>
              <span>岩石物理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">岩石物理分析</el-menu-item>
              <el-menu-item index="5-2">地质力学分析</el-menu-item>
              <el-menu-item index="5-3">各向异性参数提取</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="6">
            <template #title>
              <i class="el-icon-location"></i>
              <span>钻前预测</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">弹性参数预测</el-menu-item>
              <el-menu-item index="6-2">地层压力预测</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },

}
</script>
<style>
html,
body,
#app,
.el-container{
  height: 100%;
}
</style>