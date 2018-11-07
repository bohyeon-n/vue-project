<template>
<div class="ad-box">
  <div class="ad-box__title">
   sponsored
  </div>
  <div class="row">
    <div class="col-md-6 col-xs-12">
      <img class="img-responsive" v-bind:src="`http://comento.cafe24.com/public/images/` +this.$props.ad.img" alt="">
    </div>
    <div class="col-md-6 col-xs-12">
      <div class="title ellipsis">
        {{ad.title}}
      </div>
      <div class="contents ellipsis">
        {{ad.contents}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getAdsImg } from '../service/postsService'
export default {
  name: 'Ad',
  destroyed() {},
  mounted() {},

  props: ['ad']
}
</script>
<style lang="less" scoped>
@desktop: ~'only screen and (min-width: 960px)';
@tablet: ~'only screen and (min-width: 720px) and (max-width: 959px)';
@mobile: ~'only screen and (max-width: 480px)';

.ad-box {
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  &__title {
    text-align: center;
    padding-bottom: 1rem;
    font-weight: 500;
  }
  .row {
    div {
      width: 100%;
      height: auto;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      border: 1px solid #e0e0e0;
    }
    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &.title {
        font-weight: 800;
        padding-top: 1rem;
        text-align: center;
      }
      &.contents {
        @media @desktop {
          padding-top: 2rem;
        }
      }
    }
  }
}
</style>
