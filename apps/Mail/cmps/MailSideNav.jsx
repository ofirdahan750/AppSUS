const { Link } = ReactRouterDOM
export class MailSideNav extends React.Component {
    render() {
        return (
            <section className="email-sidenav flex column">
               <Link to="/mail/Compose"><button>+Compose</button></Link>
               <Link to="/mail/Inbox"><button>Inbox</button></Link>
               <Link to="/mail/Send"><button>Send</button></Link>

            </section>
        )
    }
}