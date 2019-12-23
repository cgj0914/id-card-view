<template>
    <div>
        <id-card-view  :person="person"></id-card-view>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                person:{
                    name:'陈贵杰',
                    nation:'汉',
                    address:'河北省嘿嘿了额还哈哈哈鹅湖陈英村65号',
                    photo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577077627271&di=258fe9bd561b499e45456fb7b225c16e&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Forj360%2F4cfce1actw1ei6xkweojbj21kw1kw1kx.jpg',
                    id:'13092319951214261X'
                },
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    
</style>
