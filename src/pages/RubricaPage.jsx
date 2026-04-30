import travels from "../data/travel"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"

export default function RubricaPage() {
    const { id } = useParams()
    console.log(id)

    const [travel, setTravel] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        const singleTravel = travels.find(travel => travel.id == id)
        console.log(singleTravel)
        setTravel(singleTravel)
    }, [id])

    const filteredNames = travel?.participants?.filter(names =>
        names.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div className="container">
            <h1 className="text-center p-3 text-success">Rubrica partecipanti</h1>

            <SearchBar onSearch={setSearch} />

            <div className="row">
                <div className="col">
                    <table className="table table-striped">
                        <thead className="">
                            <tr>
                                <th>NUMERO</th>
                                <th>NOME COGNOME</th>
                                <th>INFO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredNames?.map((partecipant, index) => (
                                    <tr key={partecipant.id}>
                                        <td>{index + 1}</td>
                                        <td>{partecipant.name}</td>
                                        <td><Link
                                            to={`/participants/${partecipant.id}`}
                                            className="btn btn-warning text-info-emphasis btn-sm" >
                                            Vai al profilo
                                        </Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}