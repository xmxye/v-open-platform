<template>
    <div class="edit-est-container">
        <el-dialog title="修改外部系统成员" :visible.sync="etcDialogFormVisible" @close="$emit('update:show4', false)">
            <el-form :model="form">
                <el-form-item label="国际编码" :label-width="formLabelWidth">
                    <el-input v-model="form.internationalNo" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="业务优先级" :label-width="formLabelWidth" >
                    <el-select v-model="form.priority" placeholder="请选择">
                        <el-option 
                        v-for="(item,index) in optionsPriority"
                        :key="index" 
                        :label="item.label" 
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 6}"
                        placeholder="请输入内容"
                        v-model="textarea2" style="width:200px">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('update:show4', false)">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            etcDialogFormVisible:this.show4,
            form:{
                internationalNo:'',
                priority:'',
            },
            formLabelWidth:'180px',
            textarea2:'',
            optionsPriority: [{
                value: '1',
                label: '1'
                }, {
                value: '2',
                label: '2'
                }, {
                value: '3',
                label: '3'
                },{
                value: '4',
                label: '4'
                }, {
                value: '5',
                label: '5'
                }, {
                value: '6',
                label: '6'
                },{
                value: '7',
                label: '7'
                }, {
                value: '8',
                label: '8'
                },{
                value: '9',
                label: '9'
            }],
        }
    },
   props:["show4"],
   watch:{
       show4(){
        this.etcDialogFormVisible = this.show4
      }
   },
  
}
</script>
<style lang="scss">
.edit-est-container{
    .el-dialog{
        width:30% !important;
    }
}
</style>
<style lang="scss" scoped>
.edit-est-container{
    
}
</style>

