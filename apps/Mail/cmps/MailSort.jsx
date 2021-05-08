export function MailSort() {
    return (
        <div className="mail-sort">
            <label htmlFor="SORTBY">Sort by</label>
            <select>
                <option value="data">Sort by:date</option>
                <option value="title">Sort by:title</option>
            </select>
        </div>
    )
}