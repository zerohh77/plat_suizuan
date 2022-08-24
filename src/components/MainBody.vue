<template>
  <div style="height: 100%">
    <el-container>

      <el-container  style="height: 100%; border: 5px solid #eee">
          <el-aside width="178px" class="aside" style="height: 100%">
            <my-aside></my-aside>
          </el-aside>

        <el-main class="main">
          <my-main></my-main>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>


<script>
import MyMain from "@/components/MyMain";
import MyAside from "@/components/MyAside";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MainBody",
  components:{
    MyAside,
    MyMain
  },
}
</script>

<style scoped>
html,
body,
.el-container {
  height: 100vh;
}
</style>