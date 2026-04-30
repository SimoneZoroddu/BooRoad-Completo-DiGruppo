import travels from "../data/travel";
import { useParams } from "react-router-dom";
import profile from "../img/profile.webp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ParticipantPage() {
    const { participantId } = useParams();

    const [participant, setParticipant] = useState({});

    const [travelId, setTravelId] = useState("");

    useEffect(() => {
        // Cerca il partecipante attraverso tutti i viaggi
        for (const travel of travels) {
            const found = travel.participants.find(p => p.id === Number(participantId));


            if (found) {
                setTravelId(travel.id);
                console.log(travelId)
                setParticipant(found);
                return; // esci appena trovato
            }
        }
        // Se non trovato, imposta un oggetto vuoto (evita undefined)
        setParticipant({});
        console.log('Participant non trovato per id', participantId);
    }, [participantId]);

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-end mt-5"><Link className="btn btn-warning text-info-emphasis" to={`/travels/${travelId}`}>Go back</Link></div>
                <div className=" d-flex justify-content-center align-items-center mt-3">

                    <div className="card custom-card shadow">

                        <div className="row g-0 align-items-center">

                            {/* IMMAGINE */}
                            <div className="col-md-4 text-center p-3">
                                <img src={profile} className="img-fluid img-user" alt="Foto partecipante" />
                            </div>

                            {/* DATI PARTECIPANTE*/}
                            <div className="col-md-8 p-4">
                                <h3 className="fw-bold mb-3">{participant?.name}</h3>

                                <div>
                                    <strong>Email:</strong>
                                    <p>{participant?.email}</p>
                                </div>

                                <div>
                                    <strong>Telefono:</strong>
                                    <p className="number">{participant?.telefono}</p>
                                </div>

                                <div>
                                    <strong>Codice Fiscale:</strong>
                                    <p>{participant?.codice_fiscale}</p>
                                </div>

                                <div>
                                    <strong>Emergenza:</strong>
                                    <p className="number">{participant?.numero_emergenza}</p>
                                </div>

                                <div className="d-flex gap-2 mt-4">
                                    <a href="#" className="btn btn-primary w-100">Chiama</a>
                                    <a href="#" className="btn btn-danger w-100">Emergenza</a>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
