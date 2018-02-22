window.onload = function() {
	new Vue({
		el:".container",
		data:{
			dataList:[],
			search:"",
			now:-1
		},
		methods:{
			get:function(ev){
				if(ev.keyCode==38 || ev.keyCode==40)return;
				if(ev.keyCode==13){
				    window.open('https://www.baidu.com/s?wd='+this.search);
				    this.search='';
				}
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
					wd:this.search},{jsonp:'cb'}).then(function(res){
						this.dataList=res.data.s;
				});
			},
			mouse:function(arr){
				this.now=arr;
			},
			leave:function(){
				this.now=-1;
			},
			changeDown:function(){
	            this.now++;
	            if(this.now==this.dataList.length)this.now=-1;
	            this.search=this.dataList[this.now];
	        },
	        changeUp:function(){
	            this.now--;
	            if(this.now==-2)this.now=this.dataList.length-1;
	            this.search=this.dataList[this.now];
	        },
	        select:function(str){
	        	// console.log(str);
	        	this.search=str;
	        },
	        find:function(){
	        	window.open('https://www.baidu.com/s?wd='+this.search);
	        	this.search='';
	        }
		}
	});
}