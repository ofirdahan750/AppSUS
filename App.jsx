const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'

// Simple React Component
export function App() {
     return (
        <Router>
        <AppHeader />
        </Router>
     )
}