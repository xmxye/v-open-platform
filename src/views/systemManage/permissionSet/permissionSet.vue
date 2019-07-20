<template>
  <div class="pms-container">
    <div class="input-search">
    <el-input v-model="input" placeholder="可查询字段：权限集名称"></el-input>
    <el-button icon="el-icon-search" class="mL10">查询</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 50%"
      class="mT10"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="permissionSetName"
        label="权限集名称"
        width="180">
      </el-table-column>
      <el-table-column label="详情">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="toDetail(scope.$index, scope.row)">查看</el-button>
        </template>
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
    <!-- 修改权限集的对话框 -->
    <el-dialog title="修改权限集名称" :visible.sync="editDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="权限集名称" :label-width="formLabelWidth" prop="permissionSetName">
          <el-input v-model="form.permissionSetName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
    <Detail :show.sync="show"></Detail>
  </div>
</template>

<script>
  import Detail from './detail'
  export default {
    data() {
      return {
        tableData: [{
          permissionSetName: 'zhangshan',
        },
        {
          permissionSetName: 'zhangshan',
        }],
        editDialogFormVisible: false,
        form: {
          permissionSetName: '',
        },
        formLabelWidth: '120px',
        input:'',
        show:false
      }
    },
    created(){
      console.log("created", this.parentMsg )
    },
    methods: {
      toDetail(index, row){
          // console.log(index, row);
          this.show = true;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.editDialogFormVisible = true;
      },
      handleDel(index, row) {
        console.log(index, row);
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
      submit(){
        this.editDialogFormVisible = false;
      }
    },
    components:{
      Detail
    }
  }
</script>
<style lang="scss" scoped>
  .pms-container{
    .el-dialog{
        width:30% !important;
    }
    .input-search{
       display: flex;
       .el-input{
        width:30%;
      }
    }
  }
</style>