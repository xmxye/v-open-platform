<template>
    <div class="edit-terminalEquipment-container">
        <el-dialog title="修改终端成员" :visible.sync="etcDialogFormVisible" @close="$emit('update:show3', false)">
            <!-- <el-form :model="form">
                <el-form-item label="终端账号" :label-width="formLabelWidth">
                    <v-selectpage :data="sample1" :tb-columns="showFields" :rtl="false" style="display:inline-block"></v-selectpage>
                </el-form-item>
                <el-form-item label="设备类型" :label-width="formLabelWidth" >
                    <el-select v-model="form.equipType" placeholder="请选择">
                        <el-option label="设备类型一" value="equipType1"></el-option>
                        <el-option label="设备类型二" value="equipType2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否自动上报GPS" :label-width="formLabelWidth" >
                    <el-select v-model="form.GPS" placeholder="请选择">
                        <el-option label="打开" value="open"></el-option>
                        <el-option label="关闭" value="close"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="GPS默认扫描频率(秒)：" :label-width="formLabelWidth">
                    <el-input v-model="form.scan" autocomplete="off" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="可见区域" :label-width="formLabelWidth" >
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="当前组可见" value="region1"></el-option>
                        <el-option label="当前域可见" value="region2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否开启录音" :label-width="formLabelWidth" >
                    <el-select v-model="form.soundRecording" placeholder="请选择">
                        <el-option label="打开" value="soundRecording1"></el-option>
                        <el-option label="关闭" value="soundRecording2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="业务优先级" :label-width="formLabelWidth" >
                    <el-select v-model="form.priority" placeholder="请选择">
                        <el-option 
                        v-for="item in optionsPriority" 
                        :label="item.label" 
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="呼叫模式" :label-width="formLabelWidth" >
                    <el-select v-model="form.callMode" placeholder="请选择">
                        <el-option label="全双工" value="callMode1"></el-option>
                        <el-option label="半双工" value="callMode2"></el-option>
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
                <el-button @click="$emit('update:show3', false)">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </div> -->
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            etcDialogFormVisible:this.show3,
        //     form:{
        //         name:'',
        //         equipType:'',
        //         GPS:'',
        //         scan:'',
        //         region:'',
        //         soundRecording:'',
        //         priority:'',
        //         callMode:''   
        //     },
        //     formLabelWidth:'180px',
        //     options1: [{
        //         value: '选项1',
        //         label: '黄金糕'
        //         }, {
        //         value: '选项2',
        //         label: '双皮奶'
        //         }, {
        //         value: '选项3',
        //         label: '蚵仔煎'
        //         }, {
        //         value: '选项4',
        //         label: '龙须面'
        //         }, {
        //         value: '选项5',
        //         label: '北京烤鸭'
        //    }],
        //    value1:'',
        //    sample1: [
        //         {id:1 ,name:'The People\'s Republic of China',desc:'中华人民共和国'},
        //         {id:2 ,name:'United States of America',desc:'美利坚合众国'},
        //         ],
        //         showFields:[
        //             {title: 'id',data: 'id'},
        //             {title: 'name',data: 'name'},
        //             // {title: 'desc',data: 'desc'},
        //     ],
        //     textarea2:'',
        //     optionsPriority: [{
        //         value: '1',
        //         label: '1'
        //         }, {
        //         value: '2',
        //         label: '2'
        //         }, {
        //         value: '3',
        //         label: '3'
        //         },{
        //         value: '4',
        //         label: '4'
        //         }, {
        //         value: '5',
        //         label: '5'
        //         }, {
        //         value: '6',
        //         label: '6'
        //         },{
        //         value: '7',
        //         label: '7'
        //         }, {
        //         value: '8',
        //         label: '8'
        //         },{
        //         value: '9',
        //         label: '9'
        //     }],
        }
    },
   props:["show3"],
   watch:{
       show3(){
        this.etcDialogFormVisible = this.show3
      }
   },
  
}
</script>
<style lang="scss" scoped>
    .edit-terminalEquipment-container{
        
    }
</style>

