<template>
    <div class="add-rights-container">
        <el-dialog title="添加权限集" :visible.sync="aRBDialogFormVisible" @close="closeDialog">
        <el-form :model="form">
            <el-form-item label="权限集名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
                <!-- 终端类型，权限集合 添加 删除的位置 -->
            <div class="add-rights-panel-container mT10" v-for="(itemList,index) in form.list" :key="index">
                <div class="panel">
                    <el-form-item label="终端类型" :label-width="formLabelWidth" style="margin-bottom:0">
                        <el-select v-model="form.list[index].type" placeholder="请选择">
                            <el-option
                            v-for="(item,i) in itemList.list1"
                            :key="item.i"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!-- 存放权限集合 -->
                <div class="panel mL10">
                    <label>权限集合</label>
                    <el-select v-model="form.list[index].type2" multiple placeholder="请选择">
                        <el-option
                        v-for="item in itemList.list2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button class="mL10" @click.native="addList">添加</el-button>
                <el-button class="mL10" @click.native="delList(index)">删除</el-button>
            </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:show1', false)">取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            aRBDialogFormVisible:this.show1,
            form:{
                name:'',
                // terminalType:'',
                //终端类型  权限集合
                value1:[],
                list:[{
                    list1: [{
                        value: '终端类型1',
                        label: '终端类型1'
                        }, {
                        value: '终端类型2',
                        label: '终端类型2'
                    }],
                    list2:[{
                         value: '权限集合1',
                        label: '权限集合1'
                        }, {
                        value: '权限集合2',
                        label: '权限集合2'
                    }],
                    type:'',
                    type2:[]
                 }]
                // options1: [{
                //     value: '选项1',
                //     label: '黄金糕'
                //     }, {
                //     value: '选项2',
                //     label: '双皮奶'
                // }]
            },
            formLabelWidth:'120px',
        }
    },
   props:["show1"],
  
   watch:{
       show1(){
        this.aRBDialogFormVisible = this.show1
      },
      
   },
   methods:{
       addList(){
           const obj = {list1: [{
                        value: '终端类型1',
                        label: '终端类型1'
                        }, {
                        value: '终端类型2',
                        label: '终端类型2'
                    }],
                    list2:[{
                        value: '权限集合1',
                        label: '权限集合1'
                        }, {
                        value: '权限集合2',
                        label: '权限集合2'
                    }],
                    type:'',
                    type2:[]
                    }
           this.form.list = [...this.form.list,obj]
       },
       delList(i){
          console.log('index的测试',i);
            if(this.form.list.length <= 1){
                alert('至少一条,不能在删除了');
                return
            }else{
                this.form.list.splice(i, 1);
           }
       },
       destroyed () {
       },
       closeDialog(){
           this.$emit('update:show1', false);
           this.form.list.forEach((item,index)=>{
              item.type = '';
              item.type2=[];
           })
            this.form.list.length = 1;
       },
      
   }
}
</script>
<style lang="scss" scoped>
    .add-rights-container{
        .add-rights-panel-container{
                display:flex;
                justify-content: flex-start;
                align-items: center;
            .panel{

            }
        }
    }
</style>

