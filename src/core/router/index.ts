import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@layouts/MainLayout.vue';
export const routes = [
  {
    path: '/',
    component: MainLayout,
    requiresAuth: true,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@features/home/views/index.vue'),
        meta: {
          requiresAuth: true,
          headerTitle: 'Dashboard',
          searchConfig: {},
          storeConfig: {},
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page Not Found',
    component: () => import('@pages/not-found/index.vue'),
  },

  {
    path: '/error',
    name: 'Error',
    component: () => import('@pages/error/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async () => {
  // check auth
});

export default router;
