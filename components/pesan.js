function Pesan({ message, title, time, image }) {
    var warna = 'red'
    if (title === 'Informasi') {
        warna = 'blue'
    } else if (title === 'Peringatan') {
        warna = 'yellow'
    }
    return (
        <div>
            <img src={`${image}.jpg`} width="200" />
            <h3 style={{ color: warna }}>{`${title} ${time * 1}`}</h3>
            <p className="title border-white">{message}</p>
        </div>
    )
}
export default Pesan