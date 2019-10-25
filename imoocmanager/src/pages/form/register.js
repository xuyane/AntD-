import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Card title="注册表单">
            <Form layout="horizontal">
              <FormItem label="用户名">
                {
                  getFieldDecorator('username',{
                    initialVale:'',
                    rules:[
                      {
                        required:true,
                        message:'用户名不能为空'
                      }
                    ]
                  })(
                    <Input placeholder="请输入用户名" />
                  )
                }
              </FormItem>
              <FormItem label="密码">
                  {
                      getFieldDecorator('userPwd', {
                          initialValue: ''
                      })(
                          <Input type="password" placeholder="请输入密码" />
                      )
                  }
              </FormItem>
            </Form>
          </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister)