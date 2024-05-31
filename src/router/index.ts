import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from "vue-router";
import Content from "../components/Portfolio/Content.vue";
import Shop from "../components/Shop/Shop.vue";

const routes: RouteRecordRaw[] = [
    {path: "/", component: Content, name: "homepage"},
    {path: "/shop", component: Shop, name: "shop"}
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router