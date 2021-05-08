const { Link } = ReactRouterDOM

const tabs = [
    'inbox',
    'send'
    // 'compose'
]
export function MailSideNav (props) {
   
        return (
            <section className="email-sidenav flex column">
                {tabs.map((tab, i)=> {
                    return <button onClick={()=> props.tab(tab)} key={i} >{tab}</button>
                })}
               <Link to="/mails/compose"><button>+Compose</button></Link>
               {/* <Link to="/mail/inbox"><button>Inbox</button></Link>
               <Link to="/mail/send"><button>Send</button></Link> */}
            </section>
        )
    
}