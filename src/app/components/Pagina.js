import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {

console.log(props.tnav)
const prop = props.tnav ? props.tnav: 'Projeto Aula'
// let prop = props.tnav
// if(prop === ''){
//   prop = 'Projeto Aula'}
    return (
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
              <Container>
              <Navbar.Brand href="#">{prop}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/movie/now_playing">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/movie/upcoming">Lançamentos</NavDropdown.Item>
            <NavDropdown.Item href="/movie/popular">Populares</NavDropdown.Item>
            </NavDropdown> 
                <NavDropdown title="Series" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tv/ontheair">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/tv/upcoming">Lançamentos</NavDropdown.Item>
            <NavDropdown.Item href="/tv/popular">Populares</NavDropdown.Item>
            </NavDropdown> 
          
              </Nav>
          </Container>
          </Navbar>
        
            <h1 className="container p-3">{props.titulo}</h1>
    
          
      
          <Container>
            {props.children}
          </Container>
        </>
    )

}
