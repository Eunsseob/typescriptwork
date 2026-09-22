<template>
    <div class="page">
        <BasicLayout>
            <div class="page__container">
                <section class="page__container_navigation"></section>
                <Navigation />  
                <section class="page__container_notification"></section>
            </div>
        </BasicLayout>
    </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/components/atoms/layout/BasicLayout.vue'
import Navigation from '@/components/organisms/Navigation.vue'
</script>

<style lang="scss" scoped>
    .page {
        display: flex;
        align-items: center;
        justify-content: center;
    
        width: 100%;
        height: 100vh;

        background-color: $color-black-900;

        &__container {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 69vw;
            height: 61vh;

            &__navigation {
                width: 20%;
                height: 100%;
            }

            &__notification {
                width: 80%;
                height: 100%;
            }
        }
    }
</style>