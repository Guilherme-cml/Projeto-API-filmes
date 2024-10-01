
'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Page({ params }) {
    const [movie, setMovie] = useState([])
    const [actor, setActor] = useState([])
    useEffect(() => {
        apiMovie.get(`/person/${params.id}/movie_credits`).then(resultado => {
            setMovie(resultado.data.cast)
        })
        apiMovie.get(`/person/${params.id}`).then(resultado => {
            setActor(resultado.data)
        })
    }, [])

    return (
        <Pagina tnav="" titulo={actor.name}>

            {
                actor.id &&

                <Container>
                   <Row className="mt-3">
                    <Col sm={4}>
                        <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + actor.profile_path} />
                    </Col>
                    <Col sm={8}>
                        <p><b>Local Nascimento: </b>{actor.place_of_birth}</p>
                        <p><b>Data de Lançamento: </b>{actor.birthday}</p>
                        <p><b>Orçamento: </b>{movie.budget}</p>
                        {/* <p><b>Gêneros: </b>
                            {movie.genres.map(item => item.name).join(', ')}
                        </p> */}
                        <p><b>Biografia: </b>{actor.biography}</p>
                    </Col>
                    <Col className="mt-3" sm={12}>
                        <h1>Elenco</h1>

                        <Row>
                            {movie.map(item => (
                                <Col className="mb-3" sm={2}>
                                <Link href={`/movie/${item.id}`}>
                                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Link>
                                </Col>
                            ))}
                        </Row>

                    </Col>
                </Row>
                </Container>

            }



        </Pagina>
    )

}
