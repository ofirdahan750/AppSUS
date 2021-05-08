const { Link } = ReactRouterDOM
export class MailPerview extends React.Component {

    toggleRead(clickSource) {
        const { email } = this.props
        if (clickSource === 'button-mail' || clickSource === 'open-mail' && !email.isRead) this.props.onToggleRead(email)
    }


    render() {
        const { email } = this.props
        if (email) return (
            <div className={`email-preview ${email.isRead ? 'is-unread' : 'is-read'}`} onClick={() => this.toggleRead('open-mail')}>
                <Link to={`/mail/${email.id}`}>
                <div>{ email.from} || { `${email.title.substring(0, 20)}..`}
                </div>
                </Link>
                <button onClick={() => this.toggleRead('button-mail')} className={`email-preview ${email.isRead ? 'far fa-envelope-open' : 'fas fa-envelope-open'}`}></button>
            </div >
        )
        else return <div>loading...</div>
    }
}
