<template>
    <div class="add-rights-container">
        <el-dialog title="添加权限集" :visible.sync="aRBDialogFormVisible" @close="$emit('update:show1', false)">
        <el-form :model="form">
            <el-form-item label="权限集名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
                <!-- 终端类型，权限集合 添加 删除的位置 -->
            <div class="add-rights-panel-container mT10">
                <div class="panel">
                    <el-form-item label="终端类型" :label-width="formLabelWidth" style="margin-bottom:0">
                        <el-select v-model="form.terminalTypeRights" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!-- 存放权限集合 -->
                <div class="panel mL10">
                    <label>权限集合</label>
                    <el-select v-model="value1" multiple placeholder="请选择">
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button class="mL10">添加</el-button>
                <el-button class="mL10">删除</el-button>
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
                terminalTypeRights:''     
            },
            formLabelWidth:'120px',
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
           value1:''
        }
    },
   props:["show1"],
   watch:{
       show1(){
        this.aRBDialogFormVisible = this.show1
      }
   },
   created(){
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

