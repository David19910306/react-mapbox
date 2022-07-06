import Pulsing from "@/js/plushingDot";
const layers = {}

/**标注我的位置 */
layers.locationMark = function (mapbox) {
  return function () {
    mapbox.addImage('pulsing', new Pulsing(100, mapbox), {
      pixelRatio: 2
    })
    mapbox.addLayer({
      id: 'points', // 图层id，自定义
      type: 'symbol', // 图层类型symbol代表icon图标或者是字体标注
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: mapbox.getCenter().toArray()
            }
          }]
        }
      },
      layout: {
        'icon-image': 'pulsing'
      }
    })
  }
}

/**加载电子地图 */
layers.digitalMap = function (mapbox) {
  return function () {

  }
}


export default layers