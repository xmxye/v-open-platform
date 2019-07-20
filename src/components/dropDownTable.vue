<template>
  <!-- 存放所属部门的table容器 -->
  <div class="select-table-container">
    <!-- 查询的头部 -->
    <div class="search-container">
      <el-input v-model="inputOwnDepart" placeholder="请输入查询条件"></el-input>
      <el-button icon="el-icon-search" class="research-btn">查询</el-button>
    </div>
    <!-- 查询的内容显示区域 -->
    <div>
      <el-table
        :data="tableDataOwnDepart"
        style="width: 100%">
        <div v-for="(x,i) in columnList" :key="i">
          <el-table-column
            :prop="x.prop"
            :label="x.label"
            :width="x.width">
          </el-table-column>
        </div>
      </el-table>
    </div>
    <!-- 底部分页区域 -->
    <div class="block paginationBlock">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage2"
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
        currentPage2:2,
        inputOwnDepart:'',
        columnList:[{
          prop:'date',label:'部门编号',width:80
        },{
          prop:'name',label:'部门名称',width:440
        }]
      }
    },
    methods:{
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
</style>