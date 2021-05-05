import { keepService } from './services/keep-service.js'
// import { NotePreview } from './cmps/NotePreview.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: null

    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes() {
        keepService.query()
        .then((notes)=>this.setState({notes}))
    }

    render() {
        const { notes } = this.state
        return (
            <section>
            <NoteList/>
            </section>
        )
    }


}
