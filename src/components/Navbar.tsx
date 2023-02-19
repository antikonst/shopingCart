import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShopingCartContext"

export const Navbar = () => {

  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"><g><path d="M28.18,24.79H27a3.35,3.35,0,0,0-6.41,0H15.52a3.35,3.35,0,0,0-6.41,0h-.7a1.46,1.46,0,0,1-1-2.5,1.41,1.41,0,0,1,1-.42,1,1,0,0,0,.27-.05,1,1,0,0,0,.29,0H27.33a1,1,0,0,0,1-.79l2.54-11.9a1,1,0,0,0-1-1.21H7.22L6.5,4.76a.93.93,0,0,0,0-.09,1.11,1.11,0,0,0-.18-.33,1,1,0,0,0-.15-.14L6,4.11A1,1,0,0,0,5.79,4L5.62,4l-.1,0H2.13a1,1,0,0,0,0,2h2.6l.72,3.2h0L7.74,19.93A3.47,3.47,0,0,0,5,23.32a3.47,3.47,0,0,0,3.46,3.47h.7a3.35,3.35,0,0,0,6.41,0H20.6a3.35,3.35,0,0,0,6.41,0h1.17a1,1,0,0,0,0-2ZM28.64,10l-2.11,9.9H9.77L7.66,10ZM12.32,27.16a1.38,1.38,0,1,1,1.37-1.37A1.37,1.37,0,0,1,12.32,27.16Zm11.49,0a1.38,1.38,0,1,1,1.37-1.37A1.37,1.37,0,0,1,23.81,27.16Z" /></g>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)'
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}