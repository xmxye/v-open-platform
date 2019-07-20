<template>
    <v-selectpage :data="list" key-field="id" show-field="name" ></v-selectpage>
</template>
<script>
export default {
    data(){
        return {
            list: [
                {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
                {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
            ]
        }
    }
}
</script>
