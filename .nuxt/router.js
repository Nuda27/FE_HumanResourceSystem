import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16c2bb4a = () => interopDefault(import('..\\pages\\companies\\index.vue' /* webpackChunkName: "pages/companies/index" */))
const _3caf2b46 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ba244054 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7307882f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6bd91010 = () => interopDefault(import('..\\pages\\companies\\_id\\index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _7c96d0df = () => interopDefault(import('..\\pages\\companies\\_id\\employees\\index.vue' /* webpackChunkName: "pages/companies/_id/employees/index" */))
const _01ac5ba7 = () => interopDefault(import('..\\pages\\companies\\_id\\roles\\index.vue' /* webpackChunkName: "pages/companies/_id/roles/index" */))
const _01ce7b0e = () => interopDefault(import('..\\pages\\companies\\_id\\teams\\index.vue' /* webpackChunkName: "pages/companies/_id/teams/index" */))
const _2c55ba6e = () => interopDefault(import('..\\pages\\companies\\_id\\employees\\add.vue' /* webpackChunkName: "pages/companies/_id/employees/add" */))
const _30fdddd6 = () => interopDefault(import('..\\pages\\companies\\_id\\employees\\finish.vue' /* webpackChunkName: "pages/companies/_id/employees/finish" */))
const _ca71920e = () => interopDefault(import('..\\pages\\companies\\_id\\employees\\role.vue' /* webpackChunkName: "pages/companies/_id/employees/role" */))
const _4736ad60 = () => interopDefault(import('..\\pages\\companies\\_id\\employees\\team.vue' /* webpackChunkName: "pages/companies/_id/employees/team" */))
const _65415194 = () => interopDefault(import('..\\pages\\companies\\_id\\roles\\add.vue' /* webpackChunkName: "pages/companies/_id/roles/add" */))
const _daffb746 = () => interopDefault(import('..\\pages\\companies\\_id\\teams\\add.vue' /* webpackChunkName: "pages/companies/_id/teams/add" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/companies",
    component: _16c2bb4a,
    name: "companies"
  }, {
    path: "/login",
    component: _3caf2b46,
    name: "login"
  }, {
    path: "/register",
    component: _ba244054,
    name: "register"
  }, {
    path: "/",
    component: _7307882f,
    name: "index"
  }, {
    path: "/companies/:id",
    component: _6bd91010,
    name: "companies-id"
  }, {
    path: "/companies/:id/employees",
    component: _7c96d0df,
    name: "companies-id-employees"
  }, {
    path: "/companies/:id/roles",
    component: _01ac5ba7,
    name: "companies-id-roles"
  }, {
    path: "/companies/:id/teams",
    component: _01ce7b0e,
    name: "companies-id-teams"
  }, {
    path: "/companies/:id/employees/add",
    component: _2c55ba6e,
    name: "companies-id-employees-add"
  }, {
    path: "/companies/:id/employees/finish",
    component: _30fdddd6,
    name: "companies-id-employees-finish"
  }, {
    path: "/companies/:id/employees/role",
    component: _ca71920e,
    name: "companies-id-employees-role"
  }, {
    path: "/companies/:id/employees/team",
    component: _4736ad60,
    name: "companies-id-employees-team"
  }, {
    path: "/companies/:id/roles/add",
    component: _65415194,
    name: "companies-id-roles-add"
  }, {
    path: "/companies/:id/teams/add",
    component: _daffb746,
    name: "companies-id-teams-add"
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
