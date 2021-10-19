import Card from "../components/card"
import Pesan from "../components/pesan"

function Home() {
  return (
    <div>
      <h1>Welcome To COCONUT</h1>
      <Pesan
        message="Hari ini akan diadakan vaksin masal" title="Informasi"
        tampil={false} image="https://imgur.com/Xq0zu5S" time={1} /> </div>
  )
}
export default Home