import React, { useEffect, useState } from 'react'
import './style.css'
import Header from './Header';
import Table from 'react-bootstrap/Table';
import { RiDeleteBin7Line } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { REMOVE,ADD,DLT } from '../redux/actions/action'
const CardDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(data);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);
  const compareId = () => {
    let compareData = getdata.filter((el) => {
      return el.id == id
    });
    setData(compareData);
  }
  const send = (el) => {
    console.log("Hello")
    dispatch(ADD(el));
  }
  const remove = (id) => {
    dispatch(REMOVE(id));
    navigate('/order');
  }
  const dlt = (item) => {
    dispatch(DLT(item));
  }
  useEffect(() => {
    compareId();
  }, [id])
  return (
    <>
      <Header />
      <div className='container mt-2' style={{ color: 'black',boxShadow:'0px 1px 1px solid black' }}>
        <h2 className='text-center' style={{fontFamily:'Montserrat'}}>Item Details : </h2>
        <section className="container2 mt-2">
          <div className="details">
            {
              data.map((e) => {
                return (
                  <>
                    <div className="itemsImg">
                      <img src={e.imgdata} alt="" srcset="" />
                    </div>
                    <div className="table">
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant Name : </strong>{e.rname}</p>
                            <p><strong>Price : </strong>₹ {e.price}</p>
                            <p><strong>Dishes : </strong>{e.address}</p>
                            <p><strong>Total : </strong>₹ {e.price*e.qnty}</p>
                            <div className="mt-3 d-flex justify-content-evenly align-items-center" style={{cursor:'pointer',backgroundColor:'grey',width:'75px'}}>
                              <button style={{width:'55px',border:'none',fontSize:'20px'}} onClick={e.qnty <=1 ? ()=>remove(e.id) : ()=>dlt(e)}>-</button>
                              <span style={{fontSize:'20px',margin:'0px 4px 0px 4px'}}>{e.qnty}</span>
                              <button style={{width:'55px',border:'none',fontSize:'20px'}} onClick={()=>send(e)}>+</button>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating : </strong><span style={{ backgroundColor: 'green', borderRadius: '6px' }}> {e.rating} ★</span></p>
                            <p><strong>Review : </strong>{e.somedata}</p>
                            <p><strong>Remove : </strong><RiDeleteBin7Line color='red' fontSize='24px' cursor='pointer' onClick={() => remove(e.id)} /></p>
                          </td>
                        </tr>

                      </Table>
                    </div>
                  </>

                )
              })
            }
          </div>
        </section>
      </div>
    </>

  )
}
export default CardDetails
