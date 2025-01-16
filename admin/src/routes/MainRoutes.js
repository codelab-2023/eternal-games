import { lazy } from 'react'

import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')))

const Games = Loadable(lazy(() => import('views/games/List')))
const Game = Loadable(lazy(() => import('views/games/game')))

const Categories = Loadable(lazy(() => import('views/categories/List')))
const Category = Loadable(lazy(() => import('views/categories/category')))

const Websites = Loadable(lazy(() => import('views/websites/List')))
const Website = Loadable(lazy(() => import('views/websites/website')))

const Privacy = Loadable(lazy(() => import('views/privacy/Privacy')))
const TermsAndCondition = Loadable(lazy(() => import('views/termsAndCondition/TermsCondition')))

const Feature = Loadable(lazy(() => import('views/feature/List')))
const Trending = Loadable(lazy(() => import('views/trending/List')))

const MainRoutes = {
  path: '/',
  element: <MainLayout/>,
  children: [
    {
      path: '/',
      element: <DashboardDefault/>
    },
    {
      path: 'dashboard',
      element: <DashboardDefault/>
    },
    {
      path: 'feature',
      element: <Feature/>
    },
    {
      path: 'trending',
      element: <Trending/>
    },
    {
      path: 'games/:id',
      element: <Game/>
    },
    {
      path: 'games',
      element: <Games/>
    },
    {
      path: 'categories/:id',
      element: <Category/>
    },
    {
      path: 'categories',
      element: <Categories/>
    },
    {
      path: 'privacy',
      element: <Privacy/>
    },
    {
      path: 'terms-condition',
      element: <TermsAndCondition/>
    },
    {
      path: 'websites',
      element: <Websites/>
    },
    {
      path: 'websites/:id',
      element: <Website/>
    }
  ]
}

export default MainRoutes
