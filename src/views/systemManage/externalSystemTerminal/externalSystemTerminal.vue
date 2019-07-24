<template>
  <div class="est-container">
    <div class="est-l-container">
       <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：部门名称"></el-input>
        <el-button icon="el-icon-search">查询</el-button>
      </div>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="mT10"></el-tree>
    </div>
    <div class="est-r-container">
      <div class="input-search">
        <el-input v-model="input" placeholder="可查询字段：成员编号，名称以及状态"></el-input>
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
        prop="accountName"
        label="账户名称"
       >
      </el-table-column>
      <el-table-column
        prop="accountNo"
        label="账户编号"
       >
      </el-table-column>
      <el-table-column
        prop="externalSystemUserNo"
        label="外部系统用户编号"
        >
      </el-table-column>
      <el-table-column
        prop="nationalStandardCode"
        label="国标编码"
       >
      </el-table-column>
      <el-table-column
        prop="lastTimeOnline"
        label="最后上线时间">
      </el-table-column>
      <el-table-column
        prop="externalSystemType"
        label="外部系统类型">
      </el-table-column>
      <el-table-column
        prop="isSoundRecode"
        label="是否开启录音">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="membershipStatus"
        label="成员状态">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
             <el-button
            size="mini"
            @click="handleDel(scope.$index, scope.row)">删除</el-button>
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

    </div>
    <EditComponent :show4.sync="show4"></EditComponent>
  </div>
</template>

<script>
import EditComponent from './edit'
export default {
  data(){
    return {
      input:'',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
        }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
        }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      currentPage:2,
      tableData:[{
        accountName:'447',
        accountNo:'gbf',
        externalSystemUserNo:'gfd',
        nationalStandardCode:'sdf',
        lastTimeOnline:'sd',
        externalSystemType:'df',
        isSoundRecode:'df',
        remarks:'fds',
        membershipStatus:'s6665',
      },{
        accountName:'447',
        accountNo:'gbf',
        externalSystemUserNo:'gfd',
        nationalStandardCode:'sdf',
        lastTimeOnline:'sd',
        externalSystemType:'df',
        isSoundRecode:'df',
        remarks:'fds',
        membershipStatus:'s6665',
      }],
      show4:false
    }
  },
  methods:{
    handleNodeClick(data) {
      console.log(data);
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
    handleEdit(index,row){
        this.show4 = true
    },
    handleDel(index,row){
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
    }
  },
  components:{
    EditComponent
  }
}
</script>
<style lang="scss" scoped>
  .est-container{
    display:flex;
    height: calc(100vh - 70px);
    .est-l-container{
      width:30%;
      border-right:1px solid #ccc;
      padding-right:50px;
      box-sizing: border-box;
      .input-search{
        display: flex;
        justify-content: space-between;
        .el-input{
          width:70%;
        }
      }
    }
    .est-r-container{
      width:70%;
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
  }
</style>