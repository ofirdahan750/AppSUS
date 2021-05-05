const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHome } from '../pages/AppHome.jsx'
import { KeepApp } from '../apps/Keep/KeepApp.jsx'
import { about } from '../pages/about.jsx'

export class AppMain extends React.Component {
    render() {
        return (
            <Router>
            <main className="main-app">
                <Switch>
                    <Route component={KeepApp} path="/keep" />
                    <Route component={about} path="/about" />
                    <Route component={AppHome} path="/" />
                </Switch>
            </main>
            </Router>
        )
    }
}

// export const AppMain = withRouter(_AppMain)