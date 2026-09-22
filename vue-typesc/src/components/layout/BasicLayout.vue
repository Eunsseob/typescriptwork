<template>
    <div class="basic-layout">
        <slot />
    </div>
</template>

<script setup lang="ts">
    import {toRefs} from "vue"

    interface Props {
        theme?: string
    }

    const props = defineProps<Props>()
    const { theme } = toRefs(props)
</script>

<style lang="scss" scoped>
    .basic-layout {
        display: flex;
        align-items: center;
        justify-content: center;
    
        padding : 20px;

        background-color: $color-white-000;
        border-radius: 24px;

        &[layout-theme="blue"]{
            background-color: $color-blue-000;
        }
    }
    </style>