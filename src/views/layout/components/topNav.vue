<template>
  <div class="top-nav-container">
    <div class="top-nav-logo">
        <img src="../../../assets/images/logo.png" alt="">
    </div>
    <div>
      <el-button>zhangsan</el-button>
      <el-button>退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
};
</script>

<style scoped lang="scss">
.top-nav-container {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  height: 50px;
  // border-bottom: 1px solid #e6e6e6;
  padding: 0 50px 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top-nav-logo{
    height:100%;
    img{
      height:100%;
    }
  }
}
</style>