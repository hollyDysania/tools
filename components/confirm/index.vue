<!-- 移动端弹窗conifrm mt-button是mint-ui组件可改为原生button及修改样式 -->
<template>
  <transition name="confirm-fade">
    <div
      class="confirm"
      v-show="confirmShow"
      @click.stop
    >
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <div class="title">
            <p class="text">{{title}}</p>
          </div>
          <div class="operate">
            <mt-button
              type="default"
              @click="confirm"
              class="submit"
            >{{confirmBtnText}}</mt-button>
            <mt-button
              type="default"
              @click="cancel"
              class="cancel"
            >{{cancelBtnText}}</mt-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    // 弹窗标题
    title: {
      type: String,
      default: ''
    },
    // 左侧按钮文字
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    // 右侧按钮文字
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    // 弹窗显示
    confirmShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    cancel() {
      // 与父组件.sync对应 达到同步
      this.$emit('update:confirmShow', false)
      // 发布cancel时间给父组件
      this.$emit('cancel')
    },
    confirm() {
      // 与父组件.sync对应 达到同步
      this.$emit('update:confirmShow', false)
      // 发布confirms事件给父组件
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped lang="scss">
.confirm {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.3);
  &.confirm-fade-enter-active {
    animation: confirm-fadein 0.3s;
  }
  .confirm-content {
    animation: confirm-zoom 0.3s;
  }
}
.confirm-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.confirm-content {
  padding: 0.5rem;
  width: 5.8rem;
  border-radius: 10px;
  background: #fff;
  text-align: center;
}
.title {
  margin: 0 auto;
  position: relative;
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 0.7rem;
  .text {
    position: relative;
    display: inline-block;
    padding: 0 0.2rem;
    font-size: 0.29rem;
    color: rgb(28, 28, 28);
    font-weight: 600;
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 49%;
      background: rgb(28, 28, 28);
      width: 0.28rem;
      height: 0.04rem;
    }
    &::before {
      left: -0.2rem;
    }
    &::after {
      right: -0.2rem;
    }
  }
}
.operate {
  .cancel,
  .submit {
    width: 100%;
    font-size: 0.29rem;
  }
  .cancel {
    background-color: #fff;
  }
  .submit {
    background-color: rgb(112, 147, 229);
    color: #fff;
    margin-bottom: 0.2rem;
  }
}

@keyframes confirm-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes confirm-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>