<template>
  <div class="hero hero__banner bg-color-grey">
    <div class="container custom-container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="hero__content">
            <h5 class="hero__content--subtitle" v-html="data.hero.subTitle">{{ data.hero.subTitle }}</h5>
            <h1 class="hero__content--title">
              {{ data.hero.title }}
            </h1>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="hero__thumb">
        
            <div class="hero__thumb--two">
              <v-lazy-image :src="data.hero.image" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/hero.json";
export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.hero {
  &__content {
    color: $theme-color-primary;
    max-width: 570px;
    float: right;

    @media #{$md-device} {
      max-width: 330px;
      padding-top: 75px;
    }
    @media #{$sm-device} {
      max-width: 472px;
      margin: auto;
      float: none;
      text-align: center;
      padding-top: 130px;
    }

    &--subtitle {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 30px;
      font-family: $heading-font;
      span {
        color: $white;
      }
      animation: type 2s steps(19);
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid $white;
      @keyframes type {
        0% {
          width: 0ch;
        }
        100% {
          width: 19ch;
        }
      }
      // res
      @media #{$sm-device} {
        margin-bottom: 15px;
        font-size: 25px;
      }
    }
    &--title {
      font-size: 50px;
      font-weight: 700;
      font-family: $heading-font;
      animation: pulse;
      animation-delay: 2s;
      animation-duration: 2s;

      // res
      @media #{$md-device, $sm-device} {
        font-size: 36px;
      }
      @media #{$xs-device} {
        font-size: 30px;
      }
    }
  }
  &__thumb {
    margin-top: 100px;
    // res
    @media #{$sm-device} {
      margin-top: 30px;
    }
    &--one {
      position: absolute;
      top: 100px;
      right: 100px;
      // res
      @media #{$sm-device} {
        top: 0;
        right: 0;
      }
    }
    &--two {
      position: relative;
    }
  }
}
</style>
