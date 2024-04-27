import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Badge from '@mui/material/Badge';
import { FaShoppingCart } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux'
// import { height } from '@mui/system';
import { RiDeleteBin7Line } from "react-icons/ri";
import { REMOVE } from '../redux/actions/action'

const Header = () => {
  const data = useSelector((state) => state.cartreducer.carts);
  console.log(data);
  const[price,setPrice]=useState(0);
  const dispatch=useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => { 
    setAnchorEl(null);
  };
  const remove =(id)=>{
    dispatch(REMOVE(id));
  }
  const totalPrice = () =>{
    let total=0;
    data.map((el,k)=>{
      total=el.price*el.qnty+total;
    });
    setPrice(total);
  }
  useEffect(()=>{
    totalPrice();
  },[totalPrice])
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{ height: "65px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
          <Nav className="me-auto">
            <NavLink to="/order" className="text-decoration-none text-light">Menu</NavLink>
          </Nav>
          <Badge badgeContent={data.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <FaShoppingCart color='white' fontSize='25px' cursor='pointer' />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            data.length ?
              <div className="presentCart">
                <Table>
                  <tbody style={{fontFamily:'Quicksand'}}>
                    {
                      data.map((el) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/details/${el.id}`} onClick={handleClose}>
                                  <img src={el.imgdata} style={{width:'100px', height:'100px',cursor:'pointer'}} alt="" />
                                </NavLink>
                              </td>
                              <td>
                                <p>Price : ₹ {el.price}</p>
                                <p>Qunatity : {el.qnty}</p>
                              </td>
                              <td>
                                <RiDeleteBin7Line color='red' fontSize='24px' cursor='pointer' style={{marginTop:'20px'}} onClick={()=>remove(el.id)} />
                              </td>
                            </tr>
                          </>
                        )
                      }) 
                    }
                    <p className='text-center'>Total : ₹ {price}</p>
                  </tbody>
                </Table>
              </div> :
              <div className="emptyCart">
                <ImCross cursor='pointer' onClick={handleClose} style={{ marginLeft: '86px', marginTop: '13px' }} />
                <p>Cart is empty!!</p>
              </div>
          }
        </Menu>
      </Navbar>
    </>
  )
}

export default Header
