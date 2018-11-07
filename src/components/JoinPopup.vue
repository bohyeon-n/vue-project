<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="title">회원가입</h4>
        </div>
        <div class="modal-body">
          <div class="message-box">
              지금 가입하면 꿈꾸던 기업에 재직 중인 현직지와 <br/>
              <span>익명</span>으로 대화할 수 있습니다.
          </div>
          <div class="join-btn facebook">
            페이스북 계정으로 회원가입
          </div>
          <div class="join-btn google">
            구글 계정으로 회원가입 
          </div>
          <div class="join-btn naver">
            네이버 계정으로 회원가입
          </div>
  
        </div>
        <div class="modal-footer">
          <button type="button" v-on:click="this.$props.closePopup" class="btn" data-dismiss="modal">나중에 하기</button>
        </div>
      </div> <!--modal-content--> 
    </div> <!--modal-dialog-->
  </div> <!--modal-->
</template>
<script>
export default {
  name: 'JoinPopup',
  mounted() {
    $('#myModal').modal('show')
  },
  props: ['closePopup']
}
</script>
<style lang="less" scoped>
@modal-background: rgba(0, 0, 0, 0.7);
@facebook-color: #3b5998;
@google-color: #ea4335;
@naver-color: #00bd39;

@desktop: ~'only screen and (min-width: 960px) and (max-width: 1199px)';
@tablet: ~'only screen and (min-width: 720px) and (max-width: 959px)';
@mobile: ~'only screen and (max-width: 480px)';

.modal {
  background: @modal-background;
  text-align: center;
}
.modal-content {
  margin-top: 5rem;
  min-height: 85vh;
  max-width: 70rem;
  @media @mobile {
    max-width: 85vw;
    margin: auto;
  }
}
.modal-header {
  margin: auto;
  border-style: none;
}
.modal-body {
  .message-box {
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 3rem;
    font-weight: 900;
    span {
      color: red;
    }
  }
  .join-btn {
    font-weight: 700;
    border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    &.facebook {
      background: @facebook-color;
    }
    &.google {
      background: @google-color;
    }
    &.naver {
      background: @naver-color;
    }
  }
}
.modal-footer {
  margin: auto;
  border-style: none;
}
</style>
