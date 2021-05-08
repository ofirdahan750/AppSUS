import { EmailService } from '../services/mail-service.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailSearch } from '../cmps/MailSearch.jsx'
import {MailSort} from '../cmps/MailSort.jsx'
import { MailSideNav } from '../cmps/MailSideNav.jsx'
export class MailApp extends React.Component {
    state = {
        emails: null,
        searchSelect: 'all'
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
            emails: pervState.emails.map(email => {
                if (email === currEmail) {
                    return { ...email, isRead: !email.isRead }
                }
                return email;
            })
        }))
        EmailService.save(currEmail)
    }
    handleSearch = (val) => {
        const {searchSelect } = this.state

        EmailService.query()
        .then((emails) =>  this.setState({ emails: this.filterEmail(val.toLowerCase(), searchSelect,emails) }))
    }
    handleSelect = (val) => {
        this.setState({ searchSelect: val })
    }
    filterEmail = (val, prop,emails) => {
        if (prop === 'all') {
            return emails.filter(email => {
                return (
                    email.text.toLowerCase().includes(val) ||
                    email.from.toLowerCase().includes(val) ||
                    email.title.toLowerCase().includes(val)
                )
            })
        }
        return emails.filter(email => email[prop].toLowerCase().includes(val))
    }


    render() {
        const { emails } = this.state;
        return (
            <main className="email-section flex">
                <MailSearch search={this.handleSearch} select={this.handleSelect} />
                <MailSort/>
                <MailSideNav />
                {emails && <MailList emails={emails} onToggleRead={this.onToggleRead} />}
                {!emails || (!emails.length) && <div>No email to show..</div>}
            </main>
        )
    }


}