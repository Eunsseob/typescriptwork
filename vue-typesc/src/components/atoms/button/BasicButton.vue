<template>
  <div class="basic-button">
    <img
      :src="iconSrc"
      alt=""
      class="basic-button__icon"
    />
    <span class="basic-button__label">{{ data.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'

interface Button {
  icon: string
  label: string
}
interface Props {
  data: Button
}

const props = defineProps<Props>()
const { data } = toRefs(props)

const iconSrc = computed(
  () => new URL(`../../../assets/icons/${data.value.icon}.svg`, import.meta.url).href
)
</script>

<style lang="scss" scoped>
.basic-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 24px);
  height: 50px;

  padding-left: 24px;
  gap: 16px;

  cursor: pointer;

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__label {
    padding-top: 4px;

    font-size: 18px;
    font-family: 'MBC1961GulimM';

    color: $color-white-000;
  }

  &:hover {
    width: 100%;

    background-color: rgba($color-white-000, 0.1);
    border-radius: 12px;
  }
}
</style>