<template>
  <div class="dpt-container">
    <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：部门编号，部门名称"></el-input>
        <el-button icon="el-icon-search" class="mL10">查询</el-button>
    </div>
     <br>
      <!-- 表格内容区域 -->
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
        label="部门编号"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="group2"
        label="单位代码"
       >
      </el-table-column>
      <el-table-column
        prop="group3"
        label="所属域"
        >
      </el-table-column>
      <el-table-column
        prop="group4"
        label="部门名称"
       >
      </el-table-column>
      <el-table-column
        prop="group5"
        label="权限集">
      </el-table-column>
      <el-table-column
        prop="group6"
        label="可用组">
      </el-table-column>
      <el-table-column
        prop="group7"
        label="上级部门">
      </el-table-column>
       <el-table-column
        prop="group8"
        label="PDT外部系统部门">
      </el-table-column>
       <el-table-column
        prop="group9"
        label="金鹏外部系统部门">
      </el-table-column>
       <el-table-column
        prop="group10"
        label="值守外部系统组">
      </el-table-column>
       <el-table-column
        prop="group11"
        label="值守警务通组">
      </el-table-column>
       <el-table-column
        prop="group12"
        label="值守基地台">
      </el-table-column>
      <el-table-column
        prop="group13"
        label="值守电话号码">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
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
          group7:"66",
          group8:"66",
          group9:"66",
          group10:"66",
          group11:"66",
          group12:"66",
          group13:"66",
        }]
      }
    },
    methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
    }
  }
</script>
<style lang="scss" scoped>
 .dpt-container{
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