function Userprofil({ nama, alamat }) {
    const styleAddress = {
        color: 'black'
    }
    return (
        <div>
            {
                nama !== 'Joko' &&
                <>
                    <h3 style={{ color: 'red' }}>Name: {nama}</h3>
                    <h3 style={styleAddress}>Address: {alamat}</h3>
                    <hr />
                </>
            }
        </div>
    )
}
export default Userprofil