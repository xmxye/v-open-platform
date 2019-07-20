<template>
  <div class="news-record-container">
    <span class="demonstration">开始时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <span class="demonstration mL5">终止时间</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <span class="demonstration mL5">消息类型</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <!-- 选择部门 -->
    <span class="mL5">选择部门</span>
    <v-selectpage :data="list" key-field="id" show-field="name" aria-placeholder="请选择"></v-selectpage>

    <!-- 终端类型 -->
    <span class="mL5">终端类型</span>
    <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="true"></v-selectpage>
    <el-button class="mL5">查询</el-button>
    <br>
    <!-- 表格内容区域 -->
       <el-table
      :data="tableData"
      border
      style="width: 100%;margin-top:10px"
      class="table-adapt"
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="messageSender"
        label="消息发送者"
       >
      </el-table-column>
      <el-table-column
        prop="messageRecipients"
        label="消息接受者（组/个人）"
       >
      </el-table-column>
      <el-table-column
        prop="subDepartments"
        label="所属部门"
        >
      </el-table-column>
      <el-table-column
        prop="platformName"
        label="平台名称"
       >
      </el-table-column>
      <el-table-column
        prop="terminalType"
        label="终端类型">
      </el-table-column>
      <el-table-column
        prop="messageTime"
        label="消息时间">
      </el-table-column>
      <el-table-column
        prop="speechStartTime"
        label="语音开始时间">
      </el-table-column>
      <el-table-column
        prop="speechEndTime"
        label="语音结束时间">
      </el-table-column>
      <el-table-column
        prop="messageCategory"
        label="消息类别">
      </el-table-column>
      <el-table-column
        prop="messageType"
        label="消息类型">
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handlePlay(scope.$index, scope.row)">播放</el-button>
             <el-button
            size="mini"
            @click="handleDownload(scope.$index, scope.row)">下载</el-button>
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
</template>
<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
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
      list: [
          {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
          {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
          {id:3 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
          {id:4 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
      ],
      sample1: [
          {id:1 ,name:'The People\'s Republic of China',desc:'中华人民共和国'},
          {id:2 ,name:'United States of America',desc:'美利坚合众国'},
      ],
      showFields:[
          {title: 'id',data: 'id'},
          {title: 'name',data: 'name'},
          // {title: 'desc',data: 'desc'},
      ],
      tableData: [{
        messageSender:'hkii',
        messageRecipients:'99',
        subDepartments:'4142',
        platformName:'11',
        terminalType:'447',
        messageTime:'4445',
        speechStartTime:'77',
        speechEndTime:'14',
        messageCategory:'144',
        messageType:'131',
        },{
        messageSender:'hkii',
        messageRecipients:'99',
        subDepartments:'4142',
        platformName:'11',
        terminalType:'447',
        messageTime:'4445',
        speechStartTime:'77',
        speechEndTime:'14',
        messageCategory:'144',
        messageType:'131',
      }],
      currentPage: 3
    }
  },
  methods:{
    handlePlay(index,row){
      console.log(index,row)
    },
    handleDownload(index,row){
      console.log(index,row)
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
  .news-record-container{
    div.v-dropdown-caller.v-dropdown-caller--full-width {
    display: inline-block;
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