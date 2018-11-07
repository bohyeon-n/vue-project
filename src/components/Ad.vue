<template>
<div class="ad-box">
  sponsored
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
.ad-box {
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  .row {
    div {
      width: 100%;
      height: auto;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
