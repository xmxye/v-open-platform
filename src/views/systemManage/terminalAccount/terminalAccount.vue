<template>
  <div class="terminal-acount-container">
    <div class="input-search">
      <el-input v-model="input" placeholder="可查询字段：账号编号，账号名称"></el-input>
      <el-button icon="el-icon-search" class="research-btn">查询</el-button>
      <el-button icon="el-icon-plus" @click="handleAdd()">添加</el-button>
    </div>
    <div class="terminal-acount-table-container">
    <el-table
      :data="tableData"
      border
      style="width: 80%"
      :default-sort = "{prop: 'userAccount', order: 'descending'}"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="userAccount"
        label="所属部门"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="ownUnits"
        label="账号编号"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="topDepartment"
        label="账号名称">
      </el-table-column>
      <el-table-column
        prop="maxRights"
        label="账号所属"
        sortable>
      </el-table-column>
      <el-table-column
        prop="topDepartment"
        label="权限集">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
             <el-button
            size="mini"
            @click="handleDelOpen(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑终端账号的对话框 -->
    <el-dialog title="编辑终端账号" :visible.sync="editAccountDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所属部门" :label-width="formLabelWidth">
           <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="false" style="display:inline-block"></v-selectpage>
        </el-form-item>
        <el-form-item label="账号名称" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属部门" :label-width="formLabelWidth">
           <v-selectpage :data="list" key-field="id" show-field="name" aria-placeholder="请选择" style="display:inline-block"></v-selectpage>
        </el-form-item>
         <el-form-item label="资源部门" :label-width="formLabelWidth">
           <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="false" style="display:inline-block"></v-selectpage>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editAccountDialogFormVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
<!-- ------------------------------------------------------------------------------------------- -->
    <!-- 添加终端账号的对话框 -->
     <el-dialog title="添加终端账号" :visible.sync="addAccountDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号所属" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="所属部门" :label-width="formLabelWidth">
           <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="false" style="display:inline-block"></v-selectpage>
        </el-form-item>
        <el-form-item label="账号编码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号名称" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限集" :label-width="formLabelWidth">
           <v-selectpage :data="list" key-field="id" show-field="name" aria-placeholder="请选择" style="display:inline-block"></v-selectpage>
        </el-form-item>
        <el-form-item label="资源部门" :label-width="formLabelWidth">
           <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="false" style="display:inline-block"></v-selectpage>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addAccountDialogFormVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <!-- ------------------------------------------------------------------------------------------------- -->

  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        input:'',
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
        editAccountDialogFormVisible: false,
        form: {
          userAccount: '',
          password: '',
          phone:'',
          accountName:'',
          specialDepart:''

        },
        formLabelWidth: '120px',
         // 所属部门相关的数据
        currentPage2:2,
        inputOwnDepart:'',
        tableDataOwnDepart: [{
          date: '6662',
          name: '阳逻街派出责任区',
        }, {
          date: '9961',
          name: '武昌区派出责任区',
        },
         {
          date: '9961',
          name: '武昌区派出责任区',
        },
         {
          date: '9961',
          name: '武昌区派出责任区',
        }],
        ownDepartIsShow:false,
        // 权限集相关的数据
        tableDataRights:[{
          date: '6662',
        },{
          date: '禁止个呼',
        },{
          date: 'iphone权限',
        },{
          date: '根部门权限',
        },{
          date: 'test',
        }],
        RightsIsShow:false,
        // 特殊部门相关的数据
         tableDataSpecial: [{
          date: '6662',
          name: '阳逻街派出责任区',
        }, {
          date: '9986',
          name: '武昌区派出责任区',
        },
         {
          date: '9961',
          name: '武昌区派出责任区',
        },
         {
          date: '9961',
          name: '武昌区派出责任区',
        }],
        specialDepartIsShow:false,
        // 添加终端账号
        addAccountDialogFormVisible:false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        sample1: [
          {id:1 ,name:'The People\'s Republic of China',desc:'中华人民共和国'},
          {id:2 ,name:'United States of America',desc:'美利坚合众国'},
        ],
        showFields:[
            {title: 'id',data: 'id'},
            {title: 'name',data: 'name'},
            // {title: 'desc',data: 'desc'},
        ],
        list: [
            {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
            {id:3 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
            {id:4 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
        ],
      }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
        this.editAccountDialogFormVisible = true;
      },
      handleAdd() {
        this.addAccountDialogFormVisible = true;
      },
      handleDelOpen(index, row) {
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
      ownDepartHandler(){
        this.ownDepartIsShow = !this.ownDepartIsShow;
      },
      RightsHandler(){
        this.RightsIsShow = !this.RightsIsShow;
      },
      specialDepartHandler(){
        this.specialDepartIsShow = !this.specialDepartIsShow
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  .terminal-acount-container{
    .input-search{
      display: flex;
      .el-input{
        width:20%;
      }
      .research-btn{
        margin:0 20px 0 10px;
      }
    }
    .terminal-acount-table-container{
      margin-top:10px;
    }
    .select-table-container{
      position: absolute;
      top:40px;
      left:120px;
      width:calc(100%-120px);
      z-index: 99;
      border:1px solid #f5f5f5;
      .search-container{
        display: flex;
      }
      .paginationBlock{
        width:100%;
        background-color: #fff;

      }
    }
  }
</style>