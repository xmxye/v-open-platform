export default {
    install(Vue) {
      Vue.mixin({
        data(){
            return {

            }
        },  
        created() {
         
        },
        methods:{
            openMessage(type,message,duration = 3000){
                let title = '消息';
                let messageType = 'info';
                switch(type){
                    case 0: messageType = 'error';title = '错误'; break
                    case 1: messageType = 'success'; title = '成功';break
                    case 2: messageType = 'info'; title = '消息';break
                }
                this.$message({
                    showClose: true,
                    type: messageType,
                    message: message,
                    duration: duration
                }); 
            },
            openWarning(message = '确认要执行这步操作吗？') {
                return new Promise((resolve, reject) => {
                    this.$confirm(message, '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        resolve()
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                        reject()
                    });
                })
            },
            // 导出
            // exportAll(x,y) {
            //     // 导出全部
            //     let r = qs.stringify({
            //         intentOrderType: x,
            //         activityId: y,
            //     })
            //     window.open(apiURL + "/sixeco-order/api/intentOrder/exportIntentOrderList?" + r);
            // },
        }
      })
    }
  }