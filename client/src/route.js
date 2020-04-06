import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import App from './App'
import Created from '../src/components/Created'

const routes = [
  {
    path: '/app',
    component: App
  },
  {
    path: '/created',
    component: Created
  },
  {
    path: '/edit/:id',
    component: Created
  },
  {
    path: '/delete/:id',
    component: Created
  }
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
]
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
function BasicRouter () {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact path='/'
            component={App}
          />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default BasicRouter
