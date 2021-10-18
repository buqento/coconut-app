import React from "react"
import Footer from "../components/footer"
import Userprofil from "../components/userprofil"

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json })
            })
    }

    render() {
        const members = [
            {
                nik: "1234567890",
                nama: "ahyar",
                tgl_lahir: "20/10/2010",
                jenis_kelamin: "L",
                alamat: "Panakukang",
                foto: "foto_ahyar.jpg"
            },
            {
                nik: "1234567899",
                nama: "tin",
                tgl_lahir: "16/03/2000",
                jenis_kelamin: "P",
                alamat: "Paopao",
                foto: "foto_tin.jpg"
            },
        ]









        const profiles = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            },
        ]
        const { data } = this.state
        return (
            <div>
                {
                    profiles.map(item => <div>
                        <Userprofil
                            nama={item.name}
                            alamat={item.address.city}
                        />
                    </div>)
                }
                <Footer />
            </div>
        )
    }
}
export default Profile