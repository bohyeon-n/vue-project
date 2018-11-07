<template>

<div class="box" v-on:click="onPostClick(post.no)">
  <div class="box__header">
    <div class="category-name">
      {{categoryName}} 
    </div>
    <div class="post-no">
      {{post.no}}
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
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  &__content {
    .info {
      display: flex;
      p {
        padding: 0 1rem;
      }
    }
    .content {
      height: @content-size;

      .ellipsis {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
