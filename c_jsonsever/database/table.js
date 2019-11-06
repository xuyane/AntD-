var Mock = require('mockjs')
var res = Mock.mock({
	  'res':[{
	  	'code':0,
	  	'result':[{
	  	'page':3,
	  	'page_size':10,
	  	'total_count':60,
	  	'page_count':6,
	  	'item_list':[
		  		{'field': 'id', 'title': 'ID', 'align': 'center','width':'100'}
		      ,{'field': 'username', 'title': '用户名','align': 'center' ,'width':'100'}
		      ,{'field': 'sex', 'title': '性别','templet': '#sexTpl','align': 'center'  ,'width':'100' }
		      ,{'field': 'city', 'title': '城市','align': 'center' ,'width':'100' } 
		      ,{'field': 'sign', 'title': '签名','align': 'center' ,'width':'100' }
		      ,{'field': 'experience', 'title': '积分', 'align': 'center' ,
						templet:'<div><span title="{{d.experience}}">{{d.experience}}</span></div>','width':'290'}
		      ,{'field': 'score', 'title': '评分', 'align': 'center' ,'width':'100'}
		      ,{'field': 'classify', 'title': '职业','align': 'center' ,'width':'200'}
		      ,{'field': 'wealth', 'title': '财富', 'toolbar': '#barDemo','align': 'center' ,'width':'100'}
	  	]
	  }]
	  
	  }]
})

module.exports = res