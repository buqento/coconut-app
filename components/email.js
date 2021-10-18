export default function Email({listData, username, server}) {
    console.log(listData);
    return (
        <>
            <h4>List Email:</h4>
            <hr />
            <ul>
                <li>{username}{server}</li>
            </ul>
        </>
    )
}