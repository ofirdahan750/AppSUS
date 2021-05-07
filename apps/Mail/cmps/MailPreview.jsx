import { EmailService } from '../../Mail/services/mail-service.js'
import { eventBusService } from '../../../services/event-bus-service.js'


export class MailPerview extends React.Component {
    
    state = {
        setEmail: {
            titleTrim: '',
            previewClass: '',
        }

    }

    componentDidMount() {
        const { email } = this.props
        this.setState(
            {
                setEmail: {
                    titleTrim: `${email.title.substring(0, 20)}..`,
                    previewClass: (email.isRead) ? 'is-read' : ''
                }
               
            }
        )

    }
    toggleRead(email) {

        this.props.onToggleRead(email)
    }


    render() {
        const {email} =this.props
        const { titleTrim, previewClass } = this.state.setEmail
        if (email) return (
            <div className={previewClass} onClick={() => this.toggleRead(email)}>
                { email.from} || { titleTrim} || { email.hour}:{email.min}
            </div >
        )
        else return <div>loading...</div>
    }

}
