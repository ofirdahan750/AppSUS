const { NavLink, withRouter } = ReactRouterDOM


export class _AppHeader extends React.Component {
render() {
  return (
    <header className="main-header">
      <section className="header-warper flex">
        <div className="logo">
    <p>appsus logo</p>
    </div>
    <nav className="main-nav">
          <ul className="clean-list flex space-between">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/keep">Keep</NavLink></li>
            <li><NavLink to="/mail">Mail</NavLink></li>
          </ul>
        </nav>
        </section>
  </header>

  )
  }
}


export const AppHeader = withRouter(_AppHeader)