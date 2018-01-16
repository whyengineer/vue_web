<template>
    <Table :stripe="true" :columns="columns" :data="data" :row-class-name="rowClassName"  ></Table>
</template>
<script>
    export default {
        props:{
            data:{
                type:Array,
                default:[]
            }
        },
        data () {
            return {
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '买入数量',
                        key: 'buy'
                    },
                    {
                        title: '卖出数量',
                        key: 'sell'
                    },
                    {
                        title: '价格(USDT)',
                        key: 'price'
                    }
                ],
            }
        },
         methods: {
            rowClassName (row, index) {
                
                if (index === 0) {
                    return 'the-newest-info'
                } 
                return ''
            }
        }
    }
</script>
<style>
    .ivu-table .the-newest-info td{
        color:blue;
        font-weight: bolder;
    }
</style>