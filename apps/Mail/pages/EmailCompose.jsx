import { EmailService } from '../services/mail-service.js'
export class EmailCompose extends React.Component {

    state = {
        // to: '',
        title: '',
        from:'',
        text: '',
        // date: ''

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {from, title, text}= this.state

        let currentDate = Date.now()

        if(!from || !title || !text) {
            return
        }

        let newEmail  =  {
            'from': from,
            'title': title,
            'text': text, //txt body
            'timeStamp': currentDate,
            'date': new Date(currentDate).toISOString(),
            'isRead': true,//IS THE MAIL READ,
            'type': 'send'
        }
        
       EmailService.post(newEmail).then(()=> {
        this.props.history.push('/mails')
       })

 
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        console.log(this.props.history)

        return (
            <section className="email-compose">
                <h1>Email Compose!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="from" type="text" placeholder="To:" onChange={this.handleChange} />
                    <input name="title" type="text" placeholder="Title" onChange={this.handleChange} />
                    <textarea name="text" rows="18" cols="50" placeholder="email text" onChange={this.handleChange}  ></textarea>
                    <button type="submit">send</button>

                </form>
            </section >
        )
    }
}


