import {createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 타입 스크립트 + 뷰 프로젝트
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@pages/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router