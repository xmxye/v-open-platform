<template>
  <div class="tne-container">
    <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：关联账号,主通话组,状态"></el-input>
        <el-button icon="el-icon-search" class="mL10">查询</el-button>
        <el-button icon="el-icon-plus" class="mL10" @click.native="handleTerminalE">添加</el-button>
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
        label="邀请码"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="group2"
        label="关联账号"
       >
      </el-table-column>
      <el-table-column
        prop="group3"
        label="关联账号编号"
        >
      </el-table-column>
      <el-table-column
        prop="group4"
        label="成员状态"
       >
      </el-table-column>
      <el-table-column
        prop="group5"
        label="终端类型">
      </el-table-column>
      <el-table-column
        prop="group6"
        label="唯一标识">
      </el-table-column>
      <el-table-column
        prop="group7"
        label="当前组">
      </el-table-column>
       <el-table-column
        prop="group8"
        label="主通话组">
      </el-table-column>
       <el-table-column
        prop="group9"
        label="最后上线时间">
      </el-table-column>
       <el-table-column
        prop="group10"
        label="呼叫模式">
      </el-table-column>
       <el-table-column
        prop="group11"
        label="是否上报GPS">
      </el-table-column>
       <el-table-column
        prop="group12"
        label="是否开启录音">
      </el-table-column>
      <el-table-column
        prop="group14"
        label="备注">
      </el-table-column>
       <el-table-column
        prop="group15"
        label="申请邀请码">
      </el-table-column>
       <el-table-column
        prop="group16"
        label="遥毙/解除">
      </el-table-column>
      <el-table-column label="修改">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
      <!-- 删除 -->
      <el-table-column label="删除">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-delete" 
            @click="handleDel(scope.$index, scope.row)"></el-button>
        </template>
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
    <AddTerminalE :show2.sync="show2"></AddTerminalE>
    <EditTerminalE :show3.sync="show3"></EditTerminalE>
  </div>
</template>

<script>
import AddTerminalE from './add'
import EditTerminalE from './edit'
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
          group14:"66",
          group15:"66",
          group16:"66"
        }],
        show2:false,
        show3:false
      }
    },
    methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      handleEdit(index, row){
          this.show3 = true
      },
      handleDel(index, row){
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleTerminalE(){
          this.show2 = true
      }
    },
    components:{
      AddTerminalE,
      EditTerminalE
    }
  }
</script>
<style lang="scss" scoped>
 .tne-container{
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