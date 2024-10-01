
'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Page() {
    const [movie,setMovie] = useState([])


   useEffect(() => {
    apiMovie.get('/tv/on_the_air').then(resultado => {
        setMovie(resultado.data.results)
    })
   },[])

    return (
        <Pagina tnav="Series" titulo="No Ar">

<Container>
     <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-3 p-2 m-2">
      
    {movie.map(item =>(
      <Col className='mb-3'>
          <Card className='h-100' >
          <Card.Img className="img-fluid " variant="top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
          <Card.Body className="">
            <Card.Title className="justify-content-center">{item.name}</Card.Title>
            <Card.Text>
          <p>{item.original_name}</p>
          <p>Popularidade: {item.popularity}</p>
        </Card.Text>
          <Button href= {`/tv/${item.id}`}	 variant="danger"> Ver Detalhes</Button>
          </Card.Body>
        </Card></Col>
      ))}
     </Row> </Container>
        </Pagina>
    )

}
