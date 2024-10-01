
'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap"

export default function Page({ params }) {
    const [tv, setTv] = useState([])
    const [actor, setActor] = useState([])
    useEffect(() => {
        apiMovie.get(`/tv/${params.tv_id}/season/${params.season_number}/episode/${params.episodes_id}`).then(resultado => {
            setTv(resultado.data)
        })
        apiMovie.get(`/tv/${params.tv_id}/credits`).then(resultado => {
            setActor(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina tnav="Detalhes" titulo={tv.name}>

            {
                tv.id &&

                <Container>
                    <Row className="mt-3">
                        <Col sm={4}>
                            <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + tv.poster_path} />
                        </Col>
                        <Col sm={8}>
                            <p><b>Título original: </b>{tv.original_name}</p>
                            <p><b>Popularidade: </b>{tv.popularity}</p>
                            <p><b>Data de Lançamento: </b>{tv.release_date}</p>
                            <p><b>Orçamento: </b>{tv.budget}</p>
                            {tv.genres &&
                                <p><b>Gêneros: </b>
                                    {tv.genres.map(item => item.name).join(', ')}
                                </p>}
                            <p><b>Sinopse: </b>{tv.overview}</p>
                        </Col>
                        <Col className="mt-3" sm={12}>
                            

                           

                        </Col>  
                    </Row>
                </Container>

            }



        </Pagina>
    )

}
