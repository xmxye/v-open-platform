<template>
  <div class="bg-container">
    <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：组编号，组名称，所属部门，所属域"></el-input>
        <el-button icon="el-icon-search" class="mL10">查询</el-button>
    </div>
     <br>
      <!-- ?????? -->
       <el-table
      :data="tableData"
      border
      style="width: 100%;"
      class="table-adapt mT10"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="group1"
        label="组编号"
        sortable
        width="130"
       >
      </el-table-column>
      <el-table-column
        prop="group2"
        label="组名称"
        width="130"
       >
      </el-table-column>
      <el-table-column
        prop="group3"
        label="是否开启录音"
        width="130"
       >
      </el-table-column>
      <el-table-column
        prop="group4"
        width="130"
        label="所属部门">
      </el-table-column>
      <el-table-column
        prop="group5"
        width="130"
        label="所属域">
      </el-table-column>
      <el-table-column
        prop="group6"
        width="130"
        label="是否为响应组">
      </el-table-column>
    </el-table>
    <!-- ?? -->
    <div class="block fixedBottom">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        input:'',
        currentPage:1,
        tableData:[{
          group1:"33",
          group2:"55",
          group3:"66",
          group4:"77",
          group5:"1",
          group6:"126",
        }]
      }
    },
    methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
  }
</script>
<style lang="scss" scoped>
 .bg-container{
  padding-left:20px;
  box-sizing: border-box;
  .input-search{
    display: flex;
    .el-input{
      width:30%;
    }
  }
  .table-adapt{
    height:calc(100vh - 180px);
    overflow: auto;
  }
  .fixedBottom{
    position: fixed;
    bottom: 0;
    height:50px;
  }
 }
</style>