import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../application/Home/home'
import Recommend from '../application/Recommend/recommend'
import Signers from '../application/Signers/signers'
import Rank from '../application/Rank/rank'

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={'/recommend'}></Redirect>
        )
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/signers',
        component: Signers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
]