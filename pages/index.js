import Card from "../components/card"
import Pesan from "../components/pesan"

function Home() {
  const listUser = [
    {
      username: 'ahyar',
      email: 'ahy@gmail.com'
    },
    {
      username: 'tin',
      email: 'tin@coconut.org'
    }
  ]
  return (
    <div>
      {/* <h1>List Member</h1> */}
      <Pesan
        message="Hari ini akan diadakan vaksin masal" title="Informasi"
        tampil={false}
        image="https://imgur.com/Xq0zu5S"
        time={1}
        />


      {/* {
        listUser.map(item =>
          <Card item={item} />
        )
      } */}
    </div>
  )
}
export default Home