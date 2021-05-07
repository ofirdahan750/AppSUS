import { EmailService } from '../../Mail/services/mail-service.js'
import { eventBusService } from '../../../services/event-bus-service.js'
export class MailPerview extends React.Component {

toggleRead() {
    const { email } = this.props
    this.props.onToggleRead(email)
}


render() {
    const { email } = this.props
    if (email) return (
        <div className={`email-preview ` + email.isRead ? '' : 'is-read'} onClick={() => this.toggleRead(email)}>
            { email.from} || { `${email.title.substring(0, 20)}..`} || { email.hour}:{email.min}
        </div >
    )
    else return <div>loading...</div>
}
}
