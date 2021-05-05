const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

// Simple React Component
export function App() {
   return (
      <Router>
         <AppHeader />
         <Switch>
            <Route component={KeepApp} path="/keep" />
         </Switch>
         <AppFooter />
      </Router>
   )
}