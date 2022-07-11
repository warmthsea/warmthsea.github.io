<script setup lang="ts">
import { useTypedJS } from "@/composables";
import { useAwait } from "@/hooks/await";

const target = ref();
const TypedJS = useTypedJS(target, {
  typeSpeed: 125,
  backSpeed: 100,
  smartBackspace: false,
  startDelay: 100,
  backDelay: 1500,
  showCursor: false,
  loop: true,
  strings: [
    "这是我的个人网站",
    "欢迎你到来",
    "我有时间就更新",
    "我还没想好我要做成什么样",
    "先来一堆你好吧",
    "Hello,", "こんにちは,", "Hola,", "你好,", "नमस्ते,", "Bonjour,", "Привет"],
});

onMounted(async () => {
  await useAwait(6000);
  TypedJS.stop();
  await useAwait(2800);
  TypedJS.start();
});
</script>

<template>
  <div class="main_index">
    <div class="main_back"></div>
    <div ref="target">
    </div>
  </div>
</template>

<style lang="scss" scope>
.main_index {
  max-width: var(--vp-max-width);
  margin-left: auto;
  margin-right: auto;

  padding: 2rem 16px;
  padding-bottom: 25vh;
  height: calc(100vh - var(--vp-header-height));

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 38px;
  text-align: center;

  .main_back {
    position: absolute;
    top: 40%;
    left: 50%;
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    filter: blur(40px);
    transform: translate(-50%, -50%);
  }
}
</style>
