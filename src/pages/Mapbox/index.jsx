import React, {Component} from "react";
import {Map, accessToken} from 'mapbox-gl'
import Pulsing from "@/js/plushingDot";
import IconFont from "@/components/iconfont";

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
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
      center: [114.02728, 22.5675],
      zoom: 15
    })
    // 标注我的位置
    mapbox.on("load", function(){
      // console.log(mapbox.getCenter())
      mapbox.addImage('pulsing', new Pulsing(100, mapbox), {pixelRatio: 2})
      mapbox.addLayer({
        id: 'points',  // 图层id，自定义
        type: 'symbol',  // 图层类型symbol代表icon图标或者是字体标注
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{type: 'Feature', geometry: {type: 'Point', coordinates: mapbox.getCenter().toArray()}}]
          }
        },
        layout: {
          'icon-image': 'pulsing'
        }
      })
    })
  }

  render(){
    return <div id="mapbox" className="map-box">
      <section className="layer-control">
        <IconFont render={() => <i className="iconfont icon-map" style={{color: '#666'}}></i>} />
        <IconFont render={() => <i className="iconfont icon-location" style={{color: '#666'}}></i>} />
      </section>
    </div>
  }
}