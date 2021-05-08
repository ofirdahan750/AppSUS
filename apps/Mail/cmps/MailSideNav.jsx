const { Link } = ReactRouterDOM
export class MailSideNav extends React.Component {
    render() {
        return (
            <section class="mail-sidenav">
               <Link> <button>+Compose</button></Link>
                <button>Inbox</button>
                <button>Send</button>
            </section>
        )
    }
}