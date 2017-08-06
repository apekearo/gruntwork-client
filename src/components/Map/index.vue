<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function (lat, lon, mapID= "map") {
    return {
      mapName: this.name + "-map",
    }
  },
  mounted:function(){
      const element = document.getElementById(this.mapName)
      const options = {
          zoom:7,
          center: new google.maps.LatLng(32.0704, -97.5013)
          }
      const map = new google.maps.Map(element, options);
  // var markers = locations.map(function(location, i) {
  //       return new google.maps.Marker({
  //           position: location,
  //           label: labels[i % labels.length]
  //       });
  //   });
  //   var markerCluster = new MarkerClusterer(map, markers, {
  //       imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  //   });
  }
};
</script>
<style scoped>
.google-map {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>