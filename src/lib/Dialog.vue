<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="screw-dialog-overlay" @click="onClickOverlay"></div>
      <div class="screw-dialog-wrapper">
        <div class="screw-dialog">
          <header><slot name="title"/><span class="screw-dialog-close" @click="close"></span></header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang='ts'>
import Button from "./Button.vue";
import Icon from "./Icon.vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    onClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {Icon, Button},
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.onClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel?.() !== false){
        close()
      }
    };
    return {close, onClickOverlay, ok, cancel};
  }
};
</script>

<style lang='scss'>
$radius: 4px;
$border-color: #d9d9d9;
.screw-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 8px fade-out(grey, 0.4);
  min-width: 20em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $border-color;
    align-items: center;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

}

</style>