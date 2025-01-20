const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'calender', component: () => import('pages/CalendarPage.vue') },
      { path: '', component: () => import('pages/BudgetPage.vue') },
      { path: '', component: () => import('pages/ClubMessages.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
