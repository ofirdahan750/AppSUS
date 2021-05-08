const { Route, Switch } = ReactRouterDOM

import { AppHome } from '../pages/AppHome.jsx'
import { KeepApp } from '../apps/Keep/KeepApp.jsx'
import { MailApp } from '../apps/Mail/pages/MailApp.jsx'
import { about } from '../pages/about.jsx'
import { EmailCompose } from '../apps/Mail/pages/EmailCompose.jsx'

export function AppMain() {
        return (
            <main className="main-app">
                <Switch>
                    <Route component={EmailCompose} exact path="/mails/compose" />
                    <Route component={MailApp} exact path="/mails" />
                    <Route component={KeepApp} exact path="/keep" />
                    <Route component={about} exact path="/about" />
                    <Route component={AppHome} exact path="/" />
                </Switch>
            </main>
        )
    }


// export const AppMain = withRouter(_AppMain)