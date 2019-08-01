<template>
  <div class="pms-detail-container">
    <el-dialog title="权限集详情" :visible.sync="outerVisible" :show="show"
      @close="$emit('update:show', false)">
        <!-- 第一层内部表格 -->
        <el-button icon="el-icon-plus" @click="handleTerminalType1">添加终端类型</el-button>
        <el-table :data="gridData">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="terminalType" label="终端类型名称" width="130"></el-table-column>
          <el-table-column property="rightsBox" label="权限集合" width="300"></el-table-column>
          <el-table-column label="修改">
            <template slot-scope="scope">
              <el-button
                size="mini"
                class="el-icon-edit"
                @click="handleEditOne(scope.$index, scope.row)"></el-button>
            </template>
          </el-table-column>
          <!-- 删除 -->
          <el-table-column label="删除">
            <template slot-scope="scope">
              <el-button
                size="mini"
                class="el-icon-delete" 
                @click="handleDelOne(scope.$index, scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
        class="add-terminal-type"
        width="30%"
        title="修改终端类型"
        :visible.sync="innerVisible"
        append-to-body>
          <label>权限集合</label>
          <el-select v-model="rightsBoxSelect" multiple placeholder="请选择" class="mL10">
            <el-option
              v-for="item in rBSOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = false">取 消</el-button>
            <el-button type="primary">确定</el-button>
          </div>
        </el-dialog>

        <!-- ................................................ -->
        <el-dialog
          class="add-terminal-type"
          width="30%"
          title="添加终端类型"
          :visible.sync="innerVisible1"
          append-to-body>
            <label>终端类型</label>
            <el-select v-model="value" placeholder="请选择" class="mL10">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <br>
            <label>权限集合</label>
            <el-select v-model="rightsBoxSelect" multiple placeholder="请选择" class="mL10 mT10">
              <el-option
                v-for="item in rBSOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
              <el-button @click="innerVisible1 = false">取 消</el-button>
              <el-button type="primary">确定</el-button>
            </div>
        </el-dialog>

        <!-- ....................... -->
    </el-dialog>
   </div> 
</template>
<script>
  export default {
    data() {
      return {
        outerVisible: this.show,
        innerVisible: false,
        innerVisible1:false,
        gridData: [{
          terminalType: 'pc终端',
          rightsBox: '组说话功能, 组呼听功能, 个呼功能',
          },{
          terminalType: 'pc终端',
          rightsBox: '组说话功能, 组呼听功能, 个呼功能, 组扫描功能, 图像请求功能, 图像推送功能, 发送消息',
        }],  //第一层
        rightsBoxSelect:[],
        rBSOptions: [{
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
        options1: [{
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
          value: ''
      };
    },
    props:["show"],
    watch:{
      show(){
        this.outerVisible = this.show
      }
    },
    methods:{
      handleEditOne(index, row){
        this.innerVisible = true
      },
      handleDelOne(index, row){
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
      handleTerminalType1(){
        this.innerVisible1 = true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pms-detail-container{
    .add-terminal-type{
      .el-dialog{
        .el-dialog__body{
          text-align: center !important;
        }
      }
    }
  }
</style>