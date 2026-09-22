<template>
    <BasicLayout :theme="'blue'">
        <div class="navigation">
            <div class="navigation__sub-menu">
                <div class="navigation__sub-menu_button-box">
                    <BasicButton v-for="item in menu" :key="item.label" :data="item"/>
                </div>
            </div>
        </div>
        <div class="navigation__sub-menu">
            <span class="navigation__sub-menu__title">Recritment</span>
            <div class="navigation__sub-menu__button-box">
                <BasicButton v-for="item in menu" :key="item.label" :data="item"/>
            </div>
        </div>
        <div class="navigation__sub-menu">
            <span class="navigation__sub-menu__title">Organization</span>
            <div class="navigation__sub-menu__button-box">
                <BasicButton v-for="item in menu" :key="item.label" :data="item"/>
            </div>
        </div>
    </BasicLayout>
</template>

<script setup lang="ts">
    import BasicLayout from '@/components/atoms/layout/BasicLayout.vue';
    import BasicButton from '@/components/atoms/button/BasicButton.vue';

const menu = [
    {
        icon: 'Dashboard',
        label: 'Dashboard',
    },
    {
        icon: 'indox',
        label: 'indox'
    },
    {
        icon: 'Calendar',
        label: 'Calendar'
    }
]
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    gap : 40px;
    &__sub-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;

        &_title {
            font-size: 12px;
            font-family: 'SUITE-Regular';
            color: $color-white-000;
        }

        &_button-box {
            width: calc(100% - 24px);
        }
    }
}

</style>