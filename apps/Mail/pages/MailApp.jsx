

import { EmailService } from '../services/mail-service.js'
import { MailList } from '../cmps/MailList.jsx'
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
    render() {
        const { emails } = this.state
        return (
            
            <section>
                <h1>Welcome to email</h1>
                {emails && <MailList emails={emails} />}
                {!emails || (!emails.length) && <div>No email to show..</div>}
            </section>
        )
    }


}