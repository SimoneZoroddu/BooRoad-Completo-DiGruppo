import travels from "../data/travel"
import { Link } from "react-router-dom"





export default function HomePage({ travelArray }) {

    
    // sarebbe utile ordinare i viaggi a seconda della data di inizio, in ordine decrescente

    return (
        <>
            <h1 className="text-center p-3 text-success">Lista Viaggi</h1>
            <div className="container mb-3">
                <div className="d-flex justify-content-end"><Link className="btn btn-warning text-info-emphasis my-3" to="/travels/addTravel">Add Travel</Link></div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        travelArray.map(travel => (
                            <div className="col text-center" key={travel.id}>
                                <div className="card h-100 card_hover" >
                                    <img src={`https://placehold.co/600x400?text=${travel.title.replace(" ", "+")}`} className="card-img-top " alt={travel.title} />
                                    <div className="card-body">
                                        <h4 className="card-title text-primary mb-0">{travel.title}</h4>
                                        <div className="mb-2 text-secondary">{travel.destination}</div>
                                        <div className="">DA: {travel.startDate} A: {travel.endDate}</div>
                                        <p className="card-text text-info">{travel.description}</p>
                                        <Link to={`/travels/${travel.id}`} className="btn btn-warning text-info-emphasis">Dettagli Viaggio</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}