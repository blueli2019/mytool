<template>
    <div id="nav">
        <ul>
			<!-- :是v-bind的缩写,绑定属性,Class绑定的是对象,里面是键值对,值表示判断条件,多个class用逗号隔开 -->
            <li :class="{'curr':item.ctr,'moren':true}" v-for="(item) in logdata" :key="item.id" @click="handleClick(item);">{{item.txt}}</li>
            
        </ul>
    </div>

</template>
<script>
export default {
    name:'Navlist',
    props:{
        msg:String
    },
    data(){
        return{
            logdata:[{txt:'登录',ctr:false},{txt:'注册',ctr:false}],
			curr:true
        };
    },
//  created：在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

// mounted：在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    // created() {
        
    // },
    // 挂载完成后执行
    // mounted() {
    // },
    methods:{
        handleClick(data){
			this.logdata.forEach(function(ele){ele.ctr=false;});
            window.console.log(this.$data.logdata);
			data.ctr=!data.ctr;
			
        }
    },
	watch:{}

}
</script>
<style lang="scss" scoped>
 $color:#f45124;
 $actived:#9024f4;
 $dafaultC:rgba(0,0,0,.5);
#nav{
    width: 400px;
    height: 800px;
    margin: 0 auto;
    background-color: #dddddd;
    font-size: 18px;
    color: $color;
    ul{
        list-style-type: none;
        margin:0;padding:0;
        li{
        display: inline-block;
         background-color: $dafaultC;
         margin-left:2px;
         padding: 10px; 
         border-radius: 4px;
         box-shadow: 1px 1px 0 rgba(0,0,0 ,.5);
        }
        .curr{
            background: $actived;

        }
    
    }
}
</style>