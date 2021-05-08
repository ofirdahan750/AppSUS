const { NavLink, withRouter } = ReactRouterDOM
class _MailPerview extends React.Component {

    state = {
        showEmail: false
    }

    toggleRead(clickSource) {
        const { email } = this.props
        if (clickSource === 'button-mail' || clickSource === 'open-mail' && !email.isRead) {
            this.props.onToggleRead(email)
        } 

        this.setState((prev)=> {
            return {
                showEmail: !prev.showEmail
            }
        })
    }

    replyMail =(emailId)=> {
        this.props.history.push(`/mails/compose?id=${emailId}`)
    }


    render() {
        const { email } = this.props
        if (email) return (
            <div className={`email-preview ${email.isRead ? 'is-unread' : 'is-read'}`} >

                <div onClick={() => this.toggleRead('open-mail')}>{email.from} <br />
                    {`${email.title.substring(0, 20)}..`} <br />
                    {email.date}
                </div>

                <div>
                    {this.state.showEmail ? <span> {email.text} </span>: null}
                </div>

                <button onClick={() => this.toggleRead('button-mail')} className={`email-preview ${email.isRead ? 'far fa-envelope-open' : 'fas fa-envelope-open'}`}></button>
                <button onClick={() => this.props.deleteMail(email.id)} className={"fas fa-trash-alt"}></button>
                <button onClick={() => this.replyMail(email.id)} className={"fas fa-reply"}></button>
            </div >
        )
        else return <div>loading...</div>
    }
}

export const MailPerview= withRouter(_MailPerview)
