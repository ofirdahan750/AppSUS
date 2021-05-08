const { Route, Switch } = ReactRouterDOM

import { AppHome } from '../pages/AppHome.jsx'
import { KeepApp } from '../apps/Keep/KeepApp.jsx'
import { MailApp } from '../apps/Mail/pages/MailApp.jsx'
import { about } from '../pages/about.jsx'

export function AppMain() {
        return (
            <main className="main-app">
                <Switch>
                    {/* <Route component={MailApp} path="/mail/:id" /> */}
                    <Route component={MailApp} path="/mail" />
                    <Route component={KeepApp} path="/keep" />
                    <Route component={about} path="/about" />
                    <Route component={AppHome} path="/" />
                </Switch>
            </main>
        )
    }


// export const AppMain = withRouter(_AppMain)