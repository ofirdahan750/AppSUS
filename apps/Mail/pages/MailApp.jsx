


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
    onToggleRead = (currEmail) => {
        this.setState((pervState) => ({
            emails:pervState.emails.map(email => {
                if (email === currEmail) {
                    return { ...email, isRead: !email.isRead }
                }
                return email;
            })}))
        EmailService.save(currEmail)
        }
    

    render() {
        const { emails } = this.state;
        return (
            <main className="email-section flex">
                <MailSideNav />
                {emails && <MailList emails={emails} onToggleRead={this.onToggleRead} />}
                {!emails || (!emails.length) && <div>No email to show..</div>}
            </main>
        )
    }


}