<template>
  <div class="platformInfo-m-container">
    <el-table
      :data="tableData"
      border
      style="width: 50%"
      :default-sort = "{prop: 'userAccount', order: 'descending'}"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="userAccount"
        label="用户账号"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="ownUnits"
        label="所属单位"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="topDepartment"
        label="顶级部门">
      </el-table-column>
      <el-table-column
        prop="maxRights"
        label="最大权限集"
        :formatter="formatter">
      </el-table-column>
      <el-table-column label="修改">
      <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑信息的对话框 -->
    <el-dialog title="编辑第三方平台账号" :visible.sync="editDialogFormVisible">
      <el-form :model="form" :rules="platformAccountRules">
        <el-form-item label="用户账号" :label-width="formLabelWidth" prop="userAccount">
          <el-input v-model="form.userAccount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账户密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          userAccount: 'zhangshan',
          ownUnits: '张三部门',
          topDepartment:'',
          maxRights:'pc端权限',
        },
        {
          userAccount: 'zhangshan',
          ownUnits: '张三部门',
          topDepartment:'',
          maxRights:'pc端权限',
        }],
        editDialogFormVisible: false,
        form: {
          userAccount: '',
          password: '',
        },
        formLabelWidth: '120px',
        //定义平台账户的规则
        platformAccountRules: {
          userAccount: [
            {
              required: true,
              message: "请输入用户账号",
              trigger: "blur"
            },
            { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
          ],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }
      }
    },
    methods: {
      formatter(row, column) {
        return row.maxRights;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.editDialogFormVisible = true;
      },
    }
  }
</script>
<style lang="scss">
  .platformInfo-m-container{
    .el-dialog{
        width:25% !important;
    }
  }
</style>