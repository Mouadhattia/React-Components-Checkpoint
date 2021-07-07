import {  Nav} from 'react-bootstrap';
const NavbarPage = () => {
    return   <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Accueil</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Messages</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Log out
      </Nav.Link>
    </Nav.Item>
  </Nav>
   };
   export default NavbarPage;