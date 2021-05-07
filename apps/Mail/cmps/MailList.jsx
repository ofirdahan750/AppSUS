import {MailPerview} from './MailPreview.jsx'
export function MailList({emails,onToggleRead}) {

    return (
        <div  className="mail-list clean-list">
            {emails.map(email=>< MailPerview email={email} key={email.id} onToggleRead={onToggleRead}/>)}
        </div>
    )
}