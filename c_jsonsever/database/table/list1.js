// 营销分类
var Mock = require('mockjs')

const list = Mock.mock({
  'list|10':[{
	  		'id|+1':1,
	  		'userName':'@cname',
	  		'sex|1-2':1,
	  		'age|10-40':10,
	  		'state|1-5':1,
	  		'birthday':'2000-01-01',
	  		'address':'江西省南昌市',
	  		'time':'09:00'
	  	}]
}).list;

module.exports = list;
