

import { EmailService } from '../services/mail-service.js'
import { MailList } from '../cmps/MailList.jsx'
export class MailApp extends React.Component {
    state = {
        mails: null
    }
    loadMail() {
        EmailService.query()
            .then((mails) => this.setState({mails}))
    }

    componentDidMount() {
        this.loadMail()
    }
    render() {
        const {mails} =this.state
        return (
            <section>
                <h1>Welcome to email</h1>
                <MailList mails={mails} />
            </section>
        )
    }
}