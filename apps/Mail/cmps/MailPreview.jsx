// import { EmailService } from "../services/mail-service";


export class MailPerview extends React.Component {
    state = {
        setEmail: {
            email: null,
            titleTrim: '',
            previewClass: '',
            isRead: null
        }
    }

    componentDidMount() {
        const { email } = this.props
        this.setState(
            {
                setEmail: {
                    email,
                    titleTrim: `${email.title.substring(0, 20)}..`,
                    previewClass: (email.isRead) ? 'is-read' : '',
                    isRead: email.isRead
                }
            }
        )
    }
    toggleRead (email) {
        // const { email } = this.state.setEmail
        console.log(email)
        // this.setState(
        //     {
        //         ...email,
        //         isRead: (email.isRead = !email.isRead)
        //     }
        // )
    }
    render() {
        const { email, titleTrim, previewClass } = this.state.setEmail
        if (email) return (
            <div className={previewClass} onClick={() => this.toggleRead(this)}>
                { email.from} || { titleTrim} || { email.hour}:{email.min}
            </div >
        )
        else return <div>loading...</div>
    }

}
