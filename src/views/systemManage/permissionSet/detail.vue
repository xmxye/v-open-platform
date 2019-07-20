<template>
  <div class="pms-detail-container">
    <el-dialog title="外层 Dialog" :visible.sync="outerVisible" :show="show"
      @close="$emit('update:show', false)">
        <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:show', false)">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
        </div>
    </el-dialog>
   </div> 
</template>
<script>
  export default {
    data() {
      return {
        outerVisible: this.show,
        innerVisible: false
      };
    },
    props:["show"],
    // computed:{
    //     message1:{
    //         get(){
    //             return this.message;
    //         },
    //         set(val){
    //            this.message1 = val
    //         }
    //     }
    // },
    watch:{
      show(){
        this.outerVisible = this.show
      }
    },
    methods:{
        // close(){
        //     this.message1 = false
        // },
        // cancel(){
        //     this.message1 = false
        // },
        
    }
  }
</script>

<style lang="scss" scoped>
  .pms-detail-container{

  }
</style>