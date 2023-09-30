import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _720cd112 = () => interopDefault(import('..\\pages\\employees\\index.vue' /* webpackChunkName: "pages/employees/index" */))
const _0f2e5658 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6da82388 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _388f254c = () => interopDefault(import('..\\pages\\roles\\index.vue' /* webpackChunkName: "pages/roles/index" */))
const _384ae67e = () => interopDefault(import('..\\pages\\teams\\index.vue' /* webpackChunkName: "pages/teams/index" */))
const _88b7a93e = () => interopDefault(import('..\\pages\\employees\\add.vue' /* webpackChunkName: "pages/employees/add" */))
const _2b7037fa = () => interopDefault(import('..\\pages\\employees\\finish.vue' /* webpackChunkName: "pages/employees/finish" */))
const _15723734 = () => interopDefault(import('..\\pages\\employees\\role.vue' /* webpackChunkName: "pages/employees/role" */))
const _bc934a66 = () => interopDefault(import('..\\pages\\employees\\team.vue' /* webpackChunkName: "pages/employees/team" */))
const _129a39a9 = () => interopDefault(import('..\\pages\\roles\\add.vue' /* webpackChunkName: "pages/roles/add" */))
const _5089f260 = () => interopDefault(import('..\\pages\\teams\\add.vue' /* webpackChunkName: "pages/teams/add" */))
const _2ec131bd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/employees",
    component: _720cd112,
    name: "employees"
  }, {
    path: "/login",
    component: _0f2e5658,
    name: "login"
  }, {
    path: "/register",
    component: _6da82388,
    name: "register"
  }, {
    path: "/roles",
    component: _388f254c,
    name: "roles"
  }, {
    path: "/teams",
    component: _384ae67e,
    name: "teams"
  }, {
    path: "/employees/add",
    component: _88b7a93e,
    name: "employees-add"
  }, {
    path: "/employees/finish",
    component: _2b7037fa,
    name: "employees-finish"
  }, {
    path: "/employees/role",
    component: _15723734,
    name: "employees-role"
  }, {
    path: "/employees/team",
    component: _bc934a66,
    name: "employees-team"
  }, {
    path: "/roles/add",
    component: _129a39a9,
    name: "roles-add"
  }, {
    path: "/teams/add",
    component: _5089f260,
    name: "teams-add"
  }, {
    path: "/",
    component: _2ec131bd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
