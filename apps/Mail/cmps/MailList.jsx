import {MailPerview} from './MailPreview.jsx'
export function MailList({emails,onToggleRead,deleteMail}) {

    return (
        <div  className="mail-list clean-list">
            {emails.map(email=>< MailPerview email={email} key={email.id} onToggleRead={onToggleRead} deleteMail={deleteMail}/>)}
        </div>
    )
}