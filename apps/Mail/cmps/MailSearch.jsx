const options = [
    { val: 'all', txt: 'ALL' },
    { val: 'text', txt: 'By Text' },
    { val: 'from', txt: 'By From' },
    { val: 'title', txt: 'By Title' }
]
export function MailSearch(props) {
    return (
        <div>
            <input type="text" onChange={(ev) => props.search(ev.target.value)} />
            <select onChange={(ev) => { (props.select(ev.target.value)) }}>
                {options.map(option => <option value={option.val} key={option.val}>{option.txt}</option>)}
            </select>
        </div>
    )
}