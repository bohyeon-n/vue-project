<template>
  <div class="list">
    <div v-if='modal === true'>
      <modal-component :closeModal="closeModal" :categories="categories" :filtering="filtering"></modal-component>
    </div>
    <div class="list-header">
      <button type="button" class="btn " data-toggle="button" aria-pressed="false" autocomplete="off"
        v-on:click="modal=true"
      >
         필터
      </button>
      <div class="order">
        <div class="btn" v-bind:class="{active: order === 'asc'}" v-on:click="order='asc';init('asc')">오름차순</div>
        <div class="btn" v-bind:class="{active: order === 'desc'}" v-on:click="order='desc';init('desc')">내림차순</div>
      </div>
    </div>
     <div v-for="(post, index) in posts" :key="post.no">
      <div v-if='index % 3 === 0 && index !== 0 && ads[(index/3) -1]'>
        <ad-component :ad='ads[(index/3) -1 ]'></ad-component>
      </div>
      <item-component :post='post' v-bind:categoryName="categories[post.category_no -1].name"></item-component>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

import Ad from './Ad'
import Item from '@/components/Item.vue'
import Modal from './Modal'
import {
  getAds,
  getPosts,
  getCategory,
  getFilteredPosts
} from '../service/postsService'
export default {
  name: 'List',
  components: {
    'item-component': Item,
    'ad-component': Ad,
    'modal-component': Modal
  },
  data: function() {
    return {
      posts: [],
      ads: [],
      categories: [],
      order: 'asc',
      modal: false,
      postPage: 1,
      adPage: 1,
      category: null
    }
  },
  methods: {
    init: function(order) {
      axios.all([getPosts(1, order), getAds(1, 10), getCategory()]).then(
        axios.spread((postsRt, adsRt, categoryRt) => {
          this.ads = adsRt.data.list
          this.posts = postsRt.data.list
          this.categories = categoryRt.data.list
        })
      )
    },

    closeModal: function() {
      this.modal = false
    },
    filtering: async function(category) {
      const filteredPosts = await getFilteredPosts(1, category, this.order)
      this.posts = filteredPosts.data.list
      this.category = category
    },
    getMorePosts: async function() {
      const morePosts =
        this.category === null
          ? await getPosts(++this.postPage, this.order)
          : await getFilteredPosts(++this.postPage, this.category, this.order)
      this.posts = [...this.posts, ...morePosts.data.list]
      this.isNeedMoreAds() && this.getMoreAds()
    },
    getMoreAds: async function() {
      const moreAds = await getAds(++this.adPage, 10)
      this.ads = [...this.ads, ...moreAds.data.list]
    },
    isNeedMoreAds: function() {
      const currentAdsCount = this.ads.length
      const currentPostsCount = this.posts.length
      return currentPostsCount / 3 > currentAdsCount
    },
    handleScroll: function() {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        this.getMorePosts()
      }
    }
  },
  mounted() {
    this.init()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less">
@desktop: ~'only screen and (min-width: 960px) and (max-width: 1199px)';
@tablet: ~'only screen and (min-width: 720px) and (max-width: 959px)';
@mobile: ~'only screen and (max-width: 480px)';

.list {
  width: 80%;
  margin: 2rem auto;
  @media @mobile {
    width: 95%;
  }
}
.list-header {
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  padding-bottom: 1rem;
  .order {
    .btn {
      &.active {
        color: red;
      }
    }
  }
}
</style>
