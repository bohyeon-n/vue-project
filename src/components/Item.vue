<template>

<div class="box" v-on:click="onPostClick(post.no)">
  <div class="box__header">
    <div class="category-name">
      {{categoryName}}
    </div>
    <div class="post-no">
      no.{{post.no}}
    </div>
  </div>
  <div class="box__content">
    <div class="info">
      <p class="email ">
        {{post.email}}
      </p>
      |
      <p class="date">
        {{post.updated_at}}
      </p>

    </div>
    <div class="content">
      <div class="content-title ellipsis">
        {{post.title}}
      </div>
      <div class="content-body ellipsis">
        {{post.contents}}
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
export default {
  name: 'Item',
  props: ['post', 'categoryName'],
  data() {
    return {}
  },
  methods: {
    onPostClick: function(id) {
      this.$router.push({ name: 'Post', params: { id } })
    }
  },
  destroyed() {},
  mounted() {}
}
</script>
<style lang="less">
@content-size: 8rem;
@sub-color: #fff;
.box {
  background: @sub-color;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 0.5rem;
    .category-name {
      color: gray;
    }
  }
  &__content {
    .info {
      padding-top: 0.3rem;
      display: flex;
      p {
        padding: 0 0.5rem;
        &:nth-child(2) {
          color: gray;
        }
      }
    }
    .content {
      height: @content-size;
      padding: 0.5rem;
      &-title {
        font-weight: 700;
        padding-bottom: 1rem;
      }
      .ellipsis {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
