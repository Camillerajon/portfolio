<template>
  <section class="service-area section-padding pb-0 bg-color-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <span class="water-text">{{ data.skills.sectionTitleWaterText }}</span>
            <h2 class="title">{{ data.skills.sectionTitle }}</h2>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="row mtn-30">
            <div class="col-md-6 mt-30" v-for="details in data.skills.details" :key="details.id">
              <div class="service-item">
                <div class="service-item__icon">
                  <span>{{ details.techonology }}</span>
                </div>
                <div class="service-item__content">
                  <b-progress :max="max">
                    <b-progress-bar
                      :value="details.progress"
                      :label="details.progress + '%'"
                      variant="info"
                      :key="details.id"
                      striped
                      :animated="animate"
                    ></b-progress-bar>
                  </b-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from "vue-simple-progress";
import data from "../data/skills.json";
export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      data,
      animate: true,
      max: 100,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.service-item__content{
  padding-bottom: 70px;
}
</style>
