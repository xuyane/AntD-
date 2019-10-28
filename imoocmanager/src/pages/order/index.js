import React from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
// import BaseForm from '../../components/BaseForm'
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component{
  state = {

  }
  componentDidMount(){
      this.requestList()
  }
  requestList = ()=>{
    let _this = this;
    axios.ajax({
        url:'/order/list',
        data:{
            params: this.params
        }
    }).then((res)=>{
        let list = res.result.item_list.map((item, index) => {
            item.key = index;
            return item;
        });
        this.setState({
            list,
            pagination: Utils.pagination(res, (current) => {
                _this.params.page = current;
                _this.requestList();
            })
        })
    })
}
  render(){
    return (
      <div>

      </div>
    )
  }
}