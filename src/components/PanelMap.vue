<!--
 * @Author: lili11.yang
 * @Date: 2023-06-29 17:50:42
 * @Description: 
 * @LastEditTime: 2023-06-30 15:23:22
-->
<template lang="pug">
.layout-content
  #map
</template>
<script setup>
import * as maptalks from "maptalks";
import {
  MAPNAME,
  TDTileUrl,
  TDRoadUrl,
  layerZIndex,
} from "@/maptalks/config.js";
import { onMounted } from "vue";

onMounted(() => {
  initMap();
});

const initMap = () => {
  const baseLayerObj = {
    spatialReference: {
      projection: "EPSG:3857",
    },
    urlTemplate: TDTileUrl,
    // 用于指定瓦片地图的子域名服务器
    subdomains: ["1", "2", "3", "4", "5"],
  };
  // 底图加载参数
  const mapObj = {
    zoom: 10,
    minZoom: 5,
    maxZoom: 19,
    center: [121.48, 31.24], // 中心经纬度
    // pitch: 50, // 倾斜程度
    zIndex: layerZIndex.baseLayerZindex,
    // 天地图底图
    baseLayer: new maptalks.TileLayer("base", baseLayerObj),
    // 天地图添加注记图层
    layers: new maptalks.TileLayer("road", {
      urlTemplate: TDRoadUrl,
      subdomains: ["1", "2", "3", "4", "5"],
      opacity: 1,
    }),
  };
  window[MAPNAME] = new maptalks.Map("map", mapObj); 
};
</script>

<style scoped lang="scss">
.layout-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  #map {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
