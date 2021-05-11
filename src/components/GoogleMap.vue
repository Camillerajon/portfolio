<template>
  <div class="google-map-area section" id="support">
    <GmapMap
      :center="{ lat: 46.227638, lng: 2.213749 }"
      :zoom="5"
      map-type-id="terrain"
    >
    </GmapMap>
    <div class="contact-info">
      <div class="contact-info__list address">
        <i class="fa fa-home"></i>
        <p>Marseille, France</p>
      </div>
         <div class="contact-info__list phone">
        <i class="fa fa-phone"></i>
        <a href="tel:+00123456789">+(33)770025487</a>
      </div>
      <div class="contact-info__list linkedin">
        <i class="fa fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/camille-rajon-4182b484/" target="_blank">Linkedin Profile</a>
      </div>
         <div class="contact-info__list email">
        <i class="fa fa-envelope"></i>
        <a href="mailto:camillerajon@gmail.com" target="_blank">camillerajon@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAEu4HjE2YTgvykVgnb-Eoyw3Hu-oe6Ms4",
  },
});
export default {
  name: "GoogleMap",
};
</script>
