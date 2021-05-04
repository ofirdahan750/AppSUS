const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

// Simple React Component
export function App() {
   return (
      <Router>
         <AppHeader />
         <Switch>
            <Route component={KeepApp} path="/keep" />
            {/* <Route component={AboutUs} path="/about" /> */}
            {/* <Route component={Home} path="/" /> */}
         </Switch>
      </Router>
   )
}