import React, {Component} from "react";
import {Map, accessToken} from 'mapbox-gl';
import layers from "@/js/layers";
import IconFont from "@/components/iconfont";

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './index.less'

export default class MapBox extends Component{
  constructor(props){
    super(props)
    this.state = {currentClick: ''}
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount(){
    // 我的token
    accessToken = 'pk.eyJ1IjoiZGF2aWR0YWlpaSIsImEiOiJjbDR6bjR1Y3kwMTd0M2tueHJiaHA0OTAwIn0.17RGvp_n-yoXvjjxEXPEfw'
    const mapbox = new Map({
      container: 'mapbox',
      style: 'mapbox://styles/davidtaiii/cl54005wc000r15pjrnkokyf0', // 基础地图
      center: [114.02728, 22.5675],
      zoom: 15
    })
    // 标注我的位置
    mapbox.on("load", layers.locationMark(mapbox))
  }

  onClickHandler(currentClick){
    this.setState({currentClick})
    // currentClick.includes('icon-map')? this.setState({animation: `translateY(0) 1s`}): this.setState({animation: `translateY(15.85rem)`})
  }

  render(){
    const {currentClick} = this.state
    return <div id="mapbox" className="map-box">
      <section className="layer-control">
        <IconFont onClickHandler={this.onClickHandler} render={() => <i className="iconfont icon-map" style={{color: '#666'}}></i>} />
        <IconFont onClickHandler={this.onClickHandler} render={() => <i className="iconfont icon-location" style={{color: '#666'}}></i>} />
      </section>
      {currentClick.includes('icon-map') && 
        <section className="layer-panel"></section>}
    </div>
  }
}