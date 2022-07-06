import React, {Component} from "react";
import "./index.less";

export default class IconFont extends Component{
  constructor(props){
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  // 按钮点击, currentTarget是绑定事件的元素，target是触发事件的元素
  onClickHandler(event){
    this.props.onClickHandler(event.target.className)
  }

  render(){
    return <div className="iconfont-container" onClick={this.onClickHandler}>{this.props.render()}</div>
  }
}