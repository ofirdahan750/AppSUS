// import { EmailService } from "../services/mail-service";


export function MailPerview({email}) {
        const titleTrim = email.title.substring(0, 9) + '...'
    
        return  (
            <div>
      {email.from} ||{titleTrim} || {email.hour}:{email.min}
            </div>
        )
    
    
}
