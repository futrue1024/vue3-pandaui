<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">

         <pre class="code language-html"
              v-html="html"/>
    </div>
  </div>
</template>

<script lang='ts'>
import {ref,computed} from "vue";
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";

const Prism = (window as any).Prism;
export default {
  props: {
    component: Object
  },
  components: {Button},
  setup(props) {
    const codeVisible = ref(false);
     const html = computed(()=>{
       return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
     })
    return {Prism,codeVisible,html};
  }
};
</script>

<style lang='scss' scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre{
      margin: 0;
    }
    @media (max-width: 500px) {
      width: 360px;
    }
  }
}
</style>