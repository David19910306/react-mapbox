import React, {Component} from "react";
import mapboxgl from 'mapbox-gl'

import './index.less'

export default class MapBox extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    // 我的token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWR0YWlpaSIsImEiOiJjbDR6bjR1Y3kwMTd0M2tueHJiaHA0OTAwIn0.17RGvp_n-yoXvjjxEXPEfw'
    new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/davidtaiii/cl54005wc000r15pjrnkokyf0',
      center: [114.028, 22.568],
      zoom: 15
    })
  }

  render(){
    return <div id="mapbox" className="map-box"></div>
  }
}