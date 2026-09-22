<template>
    <div class="basic-layout">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
    .basic-layout {
        display: flex;
        align-items: center;
        justify-content: center;
    
        padding : 20px;

        background-color: $color-white-000;
        border-radius: 24px;
    }
    </style>