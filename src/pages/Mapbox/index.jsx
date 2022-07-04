import React, {Component} from "react";
import {Map, accessToken} from 'mapbox-gl'

import './index.less'

export default class MapBox extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    // 我的token
    accessToken = 'pk.eyJ1IjoiZGF2aWR0YWlpaSIsImEiOiJjbDR6bjR1Y3kwMTd0M2tueHJiaHA0OTAwIn0.17RGvp_n-yoXvjjxEXPEfw'
    const mapbox = new Map({
      container: 'mapbox',
      style: 'mapbox://styles/davidtaiii/cl54005wc000r15pjrnkokyf0',
      center: [114.028, 22.568],
      zoom: 15
      // projection: 'equirectangular'
    })
    // 标注我的位置
    mapbox.on("load", function(){
      console.log('load')
    })
  }

  render(){
    return <div id="mapbox" className="map-box"></div>
  }
}