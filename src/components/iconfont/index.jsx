import React, {Component} from "react";
import "./index.less";

export default class IconFont extends Component{
  constructor(props){
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  // 按钮点击, currentTarget是绑定事件的元素，target是触发事件的元素
  onClickHandler(event){
    switch(event.target.className){
      case 'iconfont icon-map':
        console.log('pp'); break
      case 'iconfont icon-location':
        console.log('oo'); break
    }
  }

  render(){
    return <div className="iconfont-container" onClick={this.onClickHandler}>{this.props.render()}</div>
  }
}