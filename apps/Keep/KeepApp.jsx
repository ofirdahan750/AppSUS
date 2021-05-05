import { keepService } from './services/keep-service.js'
// import { NotePreview } from './cmps/NotePreview.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: null,
        note: null,

    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        let notes = keepService.notesQuery()
        notes.then(notes => {
            this.setState({ notes })
            // console.log(this.state.notes)
        })
    }

    render() {
        const { notes } = this.state
        console.log(notes);

        return (
            <section className="note-preview" >
                { notes && 
                notes.map(note => {
                    <h1>
                        {this.state.notes}
                    </h1>
                })}
            </section>
        )
    }


}
