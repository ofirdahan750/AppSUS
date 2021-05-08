// import { EmailService } from '../../Mail/services/mail-service.js'
// import { eventBusService } from '../../../services/event-bus-service.js'
export class MailPerview extends React.Component {

    toggleRead(clickSource) {
        const { email } = this.props
        if (clickSource === 'open-mail') console.log('need to go mail')
            if (clickSource === 'button-mail' || clickSource === 'open-mail' && !email.isRead) this.props.onToggleRead(email)

    }


    render() {
        const { email } = this.props
        if (email) return (
            <div className={`email-preview ${email.isRead ? 'is-unread' : 'is-read'}`} onClick={() => this.toggleRead('open-mail')}>
                { email.from} || { `${email.title.substring(0, 20)}..`} || { email.hour}:{email.min}
                <button onClick={() => this.toggleRead('button-mail')} className={`email-preview ${email.isRead ? 'far fa-envelope-open' : 'fas fa-envelope-open'}`}></button>
            </div >
        )
        else return <div>loading...</div>
    }
}
