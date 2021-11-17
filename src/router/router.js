import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import SavedPage from "@/pages/SavedPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/save',
        component: SavedPage
    }
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})


export default  router;