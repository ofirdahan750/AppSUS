import {MailPerview} from './MailPreview.jsx'
export function MailList({emails}) {
    console.log({emails})
    return (
        <div  className="mail-list clean-list">
            {emails.map(email=>< MailPerview email={email} key={email.id}/>)}
        </div>
    )
}