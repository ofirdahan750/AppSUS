const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM


// import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import {AppMain} from './cmps/AppMain.jsx'
 
// Simple React Component
export function App() {
   return (
      <Router>
         <AppHeader />
         <AppMain />
         <AppFooter />
      </Router>
   )
}

{/* <Switch>
<Route component={KeepApp} path="/keep" />
</Switch> */}