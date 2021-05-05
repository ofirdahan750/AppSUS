const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import {AppMain} from './cmps/AppMain.jsx'
 

export function App() {
   return (
      <Router>
         <AppHeader />
         <AppMain />
         <AppFooter />
      </Router>
   )
}

