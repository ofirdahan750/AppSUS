
import { eventBusService } from '../../../services/event-bus-service.js'

import { EmailService } from '../services/mail-service.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailSideNav } from '../cmps/MailSideNav.jsx'
export class MailApp extends React.Component {

    state = {
        emails: null
    }
    loadMail() {
        EmailService.query()
            .then((emails) => this.setState({ emails }))
    }

    componentDidMount() {
        this.loadMail()
    }
    onToggleRead = (email) => {
        email.isRead = !email.isRead
        EmailService.save(email)
        this.loadMail()
    }
    render() {
        const { emails } = this.state
        return (
            <main className="email-section flex">
                <MailSideNav />
                {emails && <MailList emails={emails}  onToggleRead={this.onToggleRead}/>}
                {!emails || (!emails.length) && <div>No email to show..</div>}
            </main>
        )
    }


}