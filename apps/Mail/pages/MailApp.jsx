import { EmailService } from '../services/mail-service.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailSearch } from '../cmps/MailSearch.jsx'
import { MailSort } from '../cmps/MailSort.jsx'
import { MailSideNav } from '../cmps/MailSideNav.jsx'
import { EmailCompose } from './EmailCompose.jsx'


const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {
    state = {
        emails: [],
        searchSelect: 'all',
        currentTab: 'inbox'
    }

    loadMail() {
        EmailService.query()
            .then((emails) => {
                let sortedEmail = this.sortEmail('date', emails)
                this.setState({ emails: sortedEmail })
            })
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
        const { searchSelect } = this.state

        EmailService.query()
            .then((emails) => this.setState({ emails: this.filterEmail(val.toLowerCase(), searchSelect, emails) }))
    }
    handleSelect = (val) => {
        this.setState({ searchSelect: val })
    }
    filterEmail = (val, prop, emails) => {
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
    handleSort = (val) => {
        const { emails } = this.state;
        this.setState({
            emails: this.sortEmail(val, emails)
        })
    }
    sortEmail = (val, emails) => {

        let sortEmail
        if (val === 'date') sortEmail = emails.sort((a, b) => b.timeStamp - a.timeStamp)
        if (val === 'title') sortEmail = emails.sort((a, b) => a.title.localeCompare(b.title))
        return sortEmail
    }

    handleTab = (tab) => {
        this.setState({ currentTab: tab })
    }

    // checkTab = (tab) => {
    //     const { emails } = this.state
    //     switch (tab) {
    //         case 'inbox':
    //             return emails ?
    //                 <MailList emails={emails} onToggleRead={this.onToggleRead} deleteMail={this.deleteMail} />
    //                 : <div>No email to show..</div>
    //         case 'compose':
    //             return <EmailCompose />
    //         case 'send':
    //             return <EmailCompose />
    //         default:
    //             break;
    //     }
    // }
    deleteMail = (emailId) => {
        EmailService.remove(emailId).then((emails) => {
            let sortedEmail = this.sortEmail('date', emails)
            this.setState({ emails: sortedEmail })
        })
    }
    render() {
        const { emails, currentTab } = this.state;

        // let content = this.checkTab(currentTab)
        return (
            <main className="email-section flex">
                <MailSearch search={this.handleSearch} select={this.handleSelect} />
                <MailSort sort={this.handleSort} />
                <MailSideNav tab={this.handleTab} />
                { emails.length > 0 ?
                    <MailList emails={emails} onToggleRead={this.onToggleRead} deleteMail={this.deleteMail} />
                    : <div>No email to show..</div>}
            </main>
        )
    }


}