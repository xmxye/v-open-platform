<template>
  <div class="esg-container">
    <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：组编号，组名称"></el-input>
        <el-button icon="el-icon-search" class="mL10">查询</el-button>
        <!-- <el-button icon="el-icon-plus">添加</el-button>
        <el-button icon="el-icon-plus">批量添加</el-button>
        <el-button icon="el-icon-download">下载批量添加模板</el-button> -->
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
        label="组编号"
        width="130"
        sortable
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
        label="外部系统组类型"
        width="130"
        >
      </el-table-column>
      <el-table-column
        prop="group4"
        label="是否开启录音"
        width="130"
       >
      </el-table-column>
      <el-table-column
        prop="group5"
        width="130"
        label="所属部门">
      </el-table-column>
      <el-table-column
        prop="group6"
        width="130"
        label="所属域">
      </el-table-column>
      <el-table-column
        prop="group7"
        width="130"
        label="是否为响应组">
      </el-table-column>
      <!-- <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
             <el-button
            size="mini"
            @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
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
        }]
      }
    },
    methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      // handleEdit(){

      // },
      // handleDel(){

      // }
    }
  }
</script>
<style lang="scss" scoped>
 .esg-container{
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