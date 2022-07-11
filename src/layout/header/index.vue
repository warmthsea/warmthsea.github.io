<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { useAwait } from "@/hooks/await";

const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(async () => {
  await useAwait(6000);
  let timer: NodeJS.Timer = setInterval(() => {
    toggleDark();
  }, 300);
  await useAwait(2200);
  timer && clearTimeout(timer);
});

</script>

<template>
  <div class="header_index">
    <div class="header_info">
      <div class="header_logo">warmthsea</div>
      <div class="header_icon">
        <el-button :icon="isDark ? 'MoonNight' : 'Sunny'" @click="toggleDark()" text bg circle>
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.header_index {
  height: var(--vp-header-height);
  border-bottom: 1px solid var(--vt-c-text-dark-2);

  .header_info {
    max-width: 1024px;
    padding: 0 16px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .header_logo {
      font-size: var(--vp-header-logo-font-size);
      font-weight: bold;
      color: transparent;
      background: var(--vp-home-hero-name-background);
      -webkit-background-clip: text;
    }

    .header_icon {
      cursor: pointer;
    }
  }
}
</style>
