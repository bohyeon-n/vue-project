<template>
  <div class="popup">
    <div class="popup__message">
      <div class="p">
        지금 가입하면 꿈꾸던 기업에 재직 중인 <br/>
      </div>
      <div class="p">
        현직자와 <span>익명</span>으로 대화할 수 있습니다. 
      </div>
    </div>
    <div class="popup__btn">
      <div class="btn-pc">
        <button class="btn join">
          SNS계정으로 빠른 회원 가입 
        </button>
        <span>또는</span>  
        <button class="btn login">로그인</button>
      </div>
      <div class="btn-mobile">
        <button class="btn join">회원가입</button>
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  name: 'JoinPopupBottom'
}
</script>
<style lang="less">
@desktop: ~'only screen and (min-width: 481px)';
@mobile: ~'only screen and (max-width: 480px)';
@btn-color: #00c854;
@main-color: rgb(233, 235, 238);
.popup {
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  text-align: center;
  border: 1px solid #e0e0e0;
  &__message {
    margin-bottom: 1rem;
    @media @desktop {
      display: flex;
      flex-direction: columns;
      justify-content: center;
    }
    .p {
      &:nth-child(2) {
        span {
          color: red;
        }
      }
    }
  }
  &__btn {
    button {
      &.join {
        background: @btn-color;
      }
      background: @main-color;
    }
    .btn-pc {
      span {
        margin: 0 1rem;
      }
      @media @mobile {
        display: none;
      }
      .login {
        width: 8rem;
      }
    }
    .btn-mobile {
      .btn {
        width: 80%;
      }
      display: none;
      @media @mobile {
        display: block;
      }
    }
  }
}
</style>