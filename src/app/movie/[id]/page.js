
'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Page({ params }) {
    const [movie, setMovie] = useState({})
    const [actor, setActor] = useState([])
    useEffect(() => {
        apiMovie.get(`/movie/${params.id}`).then(resultado => {
            setMovie(resultado.data)
        })
        apiMovie.get(`/movie/${params.id}/credits`).then(resultado => {
            setActor(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina tnav="Detalhes" titulo={movie.title}>

            {
                movie.id &&

                <Container>
                   <Row className="mt-3">
                    <Col sm={4}>
                        <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
                    </Col>
                    <Col sm={8}>
                        <p><b>Título original: </b>{movie.original_title}</p>
                        <p><b>Popularidade: </b>{movie.popularity}</p>
                        <p><b>Data de Lançamento: </b>{movie.release_date}</p>
                        <p><b>Orçamento: </b>{movie.budget}</p>
                        <p><b>Gêneros: </b>
                            {movie.genres.map(item => item.name).join(', ')}
                        </p>
                        <p><b>Sinopse: </b>{movie.overview}</p>
                    </Col>
                    <Col className="mt-3" sm={12}>
                        <h1>Elenco</h1>

                        <Row>
                            {actor.map(item => (
                                <Col className="mb-3" sm={2}>
                                <Link href={`/person/${item.id}`}>
                                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
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
