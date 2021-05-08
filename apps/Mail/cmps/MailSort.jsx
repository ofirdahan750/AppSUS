export function MailSort(props) {
    return (
        <div className="mail-sort">
            <label htmlFor="SORTBY">Sort by</label>
            <select  onChange={(ev) => { (props.sort(ev.target.value)) }}>
                <option value="date">Sort by:date</option>
                <option value="title">Sort by:title</option>
            </select>
        </div>
    )
}