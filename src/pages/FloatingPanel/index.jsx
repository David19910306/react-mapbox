import React, {Component} from "react";
import { FloatingPanel, SearchBar } from 'antd-mobile'

import './index.less'

export default class Floating extends Component{
  constructor(props){
    super(props)
    this.state = {}
  } 

  render(){ 
    return (
      <FloatingPanel className="floating-panel" anchors={[65, window.innerHeight * 0.3, window.innerHeight * 0.85]}>
        <SearchBar className="search-bar" placeholder="搜索地点或地址"></SearchBar>
      </FloatingPanel>
    )
  }
}