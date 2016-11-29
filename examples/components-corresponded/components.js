let ybxs = Vue.component('ybxs',{
	template:'<div>请输入您的姓名：<br><input v-on:change="inputName()" type="text" v-model="userName"/></div>',
	data:function(){
		return {userName:''}
	},
	methods:{
		inputName:function(){
			let _this = this;
			eventCenter.$emit('nameChange',_this.userName);
		}
	}
});
let ybxsBrother = Vue.component('ybxsBrother',{
	template:'<div>请选择<b class="text-danger">{{pname}}</b>出生日期：{{selectYear}}<br><select v-model="selectYear" v-on:change="selectYears()"><option v-for="item in years" :value="item">{{item}}</option></select></div>',
	data:function(){
		return {selectYear:'',years:[1989,1990,1991,1992,1993,1994,1995,1996]}
	},
	props:['pname'],
	methods:{
		selectYears:function(){
			let _this = this;
			eventCenter.$emit('yearChange',_this.selectYear);
		}
	}
});


let eventCenter = new Vue();
eventCenter.$on('nameChange',function(data){
	father.name = data;
});
eventCenter.$on('yearChange',function(data){
	father.births = data;
});
