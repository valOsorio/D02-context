import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar expand='lg' data-bs-theme='dark' className='navigation'>
      <Container>
        {/* <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-item nav-link' to='/'>Home</Link>
            <Link className='nav-item nav-link' to='/favoritos'>Favoritos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
