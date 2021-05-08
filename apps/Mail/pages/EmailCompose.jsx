import { EmailService } from '../services/mail-service.js'
export class EmailCompose extends React.Component {

    state = {
        values: {
        },
        mode: 'create',
        title: '',
        from: '',
        text: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { from, title, text, mode } = this.state
        console.log(from, title,text, mode)

        let currentDate = Date.now()

        if (!from.trim() || !title.trim() || !text.trim()) {
            return
        }

        let newEmail = {
            'from': from,
            'title': title,
            'text': text, //txt body
            'timeStamp': currentDate,
            'date': new Date(currentDate).toISOString(),
            'isRead': true,//IS THE MAIL READ,
            'type': 'send'
        }
        EmailService.post(newEmail).then(() => {
            this.props.history.push('/mails')
        })
        // if (mode === 'create') {
        // } else {
        //   alert('replay')
        // }
    }

    componentDidMount() {
        const { search } = this.props.history.location
        let qureyParam = search.split("=")[1]
        if (qureyParam) {
            EmailService.getById(qureyParam).then((email) => {
                console.log(email)
                this.setState({
                    mode: 'reply',
                    title: 'Re:' + email.title,
                    from: email.from,
                    text: 'Re:' + email.text,
                })
            })

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        const { from, text, title } = this.state
        return (
            <section className="email-compose">
                <h1>Email Compose!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="from" type="text" placeholder="To:" value={from} onChange={this.handleChange} />
                    <input name="title" type="text" placeholder="Title" value={title} onChange={this.handleChange} />
                    <textarea name="text" rows="18" cols="50" value={text} placeholder="email text" onChange={this.handleChange}  ></textarea>
                    <button type="submit">send</button>
                </form>
            </section >
        )
    }
}


