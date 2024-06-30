<script setup lang="ts">
const title = ref('Hello')
</script>

<template>
  <view class="center flex-col">
    <image class="logo w-200" src="/static/logo.png" />
    <view class="text-area">
      <text class="color-[--primary-color] active:(bg-gray-400 font-medium)">
        {{ title }}
      </text>
    </view>
    <wd-button type="primary">
      主要按钮
    </wd-button>
  </view>
</template>

<style></style>
