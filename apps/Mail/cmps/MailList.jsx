export function MailList(props) {
    function test() {
        console.log(props)
    }
    return (
        <div className="mail-list clean-list">
           <pre>{test()}  </pre> 
             </div>
    )
}