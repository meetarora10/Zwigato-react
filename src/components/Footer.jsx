import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-light text-center' style={{position:'relative',top:'48px'}}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-center">
        <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
        </Link>
        <span className="text-muted">&copy; 2025 Zwigato, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
        </ul>
        </footer>
    </div>
  )
}
export default Footer