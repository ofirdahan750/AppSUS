const { NavLink, withRouter } = ReactRouterDOM


export class _AppHeader extends React.Component {
render() {
  return (
    <header>
    <h1>appsus logo</h1>
    <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/keep">Keep</NavLink></li>
            <li><NavLink to="/about">Maill</NavLink></li>
          </ul>
        </nav>
  </header>

  )
  }
}


export const AppHeader = withRouter(_AppHeader)