const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import {Home} from './pages/home.jsx'

// Simple React Component
export function App() {
    return <section className="app">
       <h1>My App</h1>
       <Home/>
    </section>
}

