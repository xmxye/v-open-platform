<template>
  <div class="bg-container">
    <div class="input-search">
        <el-input v-model="input" placeholder="??????????????????????"></el-input>
        <el-button icon="el-icon-search" class="mL10">??</el-button>
        <el-button icon="el-icon-plus">??</el-button>
        <el-button icon="el-icon-plus">????</el-button>
        <el-button icon="el-icon-download">????????</el-button>
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
        label="???"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="group2"
        label="???"
       >
      </el-table-column>
      <el-table-column
        prop="group3"
        label="??????"
       >
      </el-table-column>
      <el-table-column
        prop="group4"
        label="????">
      </el-table-column>
      <el-table-column
        prop="group5"
        label="???">
      </el-table-column>
      <el-table-column
        prop="group6"
        label="??????">
      </el-table-column>
      <el-table-column label="??" width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">??</el-button>
             <el-button
            size="mini"
            @click="handleDel(scope.$index, scope.row)">??</el-button>
        </template>
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

      },
      handleEdit(){

      },
      handleDel(){

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