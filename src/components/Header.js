import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer';
export default function Header() {
    let data=useCart();
    const navigate = useNavigate();
    const handlelogout = ()=>{
        localStorage.removeItem("authtoken");
        navigate('/login');
    }
    const [cartview,setcartview] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success text-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                (localStorage.getItem("authtoken"))?
                                <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                            </li>
                                :""
                            }

                        </ul>
                        <div className='d-flex'>
                        {
                                (localStorage.getItem("authtoken"))?
                                <div>
                                <div className='btn bg-white text-success mx-2' onClick={()=>{setcartview(true)}}>
                                    My Cart
                                    {data.length?
                                    <Badge pill bg="danger" className='ms-2'>{data.length}</Badge>
                                    :""
                                    }
                                </div>
                                
                                {cartview?<Modal onClose={()=>{setcartview(false)}}><Cart></Cart></Modal>:null}

                                <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
                                    Logout
                                </div>
                                </div>
                                :
                                <>
                            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
