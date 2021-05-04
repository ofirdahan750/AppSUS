import { keepService } from './services/keep-service.js'

export class KeepApp extends React.Component {
    state = {
        notes: []
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        let notes = keepService.notesQuery()
        notes.then(notes => {
            this.setState({ notes } , () => {
                console.log(this.state);
            }) 
        })
    }
    render() {
        return (
            <section>
                <h1>hello</h1>
            </section>
        )
    }


}
