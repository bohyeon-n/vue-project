<template >
  <div >
    <joinPopup-component :closePopup="closePopup"></joinPopup-component>
    <div class="post">
      <div class="post-box">
        <div class="post__title">
          {{detail.title}}
        </div>
        <div class="post__email-and-date">
          <span>{{detail.email}}</span>
          <span>{{detail.updated_at}}</span>
        </div>
        <div class="post__content">
          {{detail.contents}}
        </div>
        <div class="comment-count">댓글:{{comments.length}}</div>
      </div>
    </div>
    <div class="comment">
      <div v-if="comments.length > 0">
        <div class="comment-list">
          <div v-for="comment in comments" :key="comment.no">
            <comment-component :comment='comment'></comment-component>
          </div>
        </div>
      </div>
      <div class="comment-message" v-else>
        가장 처음 댓글을 달아보세요.
      </div>
    </div>
    <div v-if="!popupActive">
      <joinPopupBottom-component></joinPopupBottom-component>
    </div>
  </div>
</template>

<script>
import JoinPopup from './JoinPopup'
import JoinPopupBottom from './JoinPopupBottom'
import Comment from './Comment'
import { getPostDetail } from '../service/postsService'
export default {
  name: 'Post',
  components: {
    'joinPopup-component': JoinPopup,
    'joinPopupBottom-component': JoinPopupBottom,
    'comment-component': Comment
  },
  methods: {
    closePopup: function() {
      this.popupActive = false
    }
  },
  data: function() {
    return {
      detail: [],
      comments: [],
      popupActive: true
    }
  },
  async mounted() {
    const postRes = await getPostDetail(this.$route.params.id)
    this.detail = postRes.data.detail.article
    this.comments = postRes.data.detail.replies
  }
}
</script>
<style lang="less">
@desktop: ~'only screen and (min-width: 960px)';
@tablet: ~'only screen and (min-width: 720px) and (max-width: 959px)';
@mobile: ~'only screen and (max-width: 480px)';
.post {
  background: #fff;
  padding: 1rem;
  .post-box {
    @media @desktop {
      width: 70%;
      margin: auto;
    }
  }

  &__title {
    font-weight: 900;
  }
  &__email-and-date {
    padding-top: 0.5rem;
    span {
      &:nth-child(2) {
        color: gray;
        &:before {
          margin: 0 0.5rem;
          content: '';
          height: 100%;
          border: 1px solid gray;
        }
      }
    }
  }
  &__content {
    padding-top: 3rem;
  }
  .comment-count {
    padding-top: 3rem;
  }
}
.comment-message {
  padding: 1rem;
  height: 10rem;
}
.comment {
  @media @desktop {
    width: 70%;
    margin: auto;
  }
}
</style>
