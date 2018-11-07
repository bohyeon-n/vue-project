<template>
  <div class="comment-item">
    <div class="header">
      <span>{{comment.email}}</span>
      <span>{{comment.updated_at}}</span>
    </div>
    <div class="content">
      {{comment.contents}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  data: function() {
    return {}
  },
  props: ['comment']
}
</script>
<style lang="less">
@main-color: rgb(233, 235, 238);
.comment-item {
  background: @main-color;
  padding: 1rem;
  span {
    font-size: 0.9rem;
    &:nth-child(1) {
      font-weight: 500;
    }
    &:nth-child(2) {
      color: gray;
    }
  }
  .content {
    padding-left: 1rem;
  }
}
</style>
