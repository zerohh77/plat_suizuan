<template>
  <div style="height: 100%">
    <el-container>
      <el-container>
        <div>
          <el-header style="text-align: right; font-size: 15px">
          <span>user</span>
          </el-header>
        </div>
        <br/>
        <div style="width:100%;overflow:hidden;height: 60%">

          <div style="width:24%;float:left;text-align:center;border:solid 2px #c9c9c9;border-radius: 15px;
          height: 90%;padding-top:1%;padding-bottom:1%;background-color: #ECFFFF">
              <span style="width:100%">WorkFlow</span>
            <br/>
            <br/>
            <el-image  style="width: 80%; height: 80%"
                       :src="require('@/assets/WorkFlow_demo.jpeg')"></el-image>
          </div>

          <div style="width:74%;float:right;text-align:center;border:solid #9D9D9D;border-radius: 30px ;
          height: 90%;padding-bottom:1%;padding-top:1%;background-color: #ECF5FF">
            <span>PlotShow</span>
            <br/>
            <br/>
              <el-image  style="width: 80%; height: 80%"
                         :src="require('@/assets/pic1.jpg')"></el-image>
          </div>

        </div>
        <br/>
        <el-footer>
          <div style="width:100%;float:left;text-align:center;border:solid 2px #808080;border-radius: 2px">
            <div style="padding-top:5%;padding-bottom:5%">
              <span style="width:100%;color:#c9c9c9">Console</span>
              <div style="height: 10px;width: 100%">
              </div>
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "MyMain",
  data() {
    return {
      fits: 'fill',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #46A3FF;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
  height: 100%;
}

.el-container {
  height: 100%;
}
</style>