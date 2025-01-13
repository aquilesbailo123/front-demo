import './AdminNavbar.css';
import { useState } from 'react';
import { MdOutlineSegment } from "react-icons/md";

function AdminNavbar() {
      const [isOpen, setIsOpen] = useState(false);
      return (
            <>
                  <div className="navbar-main-cont">
                        <div className="navbar-left">
                              <a href="/" className="navbar-brand">AGEPSA</a>
                        </div>
                        <div className="navbar-links">
                              <a href="/" className="navbar-link">Inicio</a>
                              <a href="/admin" className="navbar-link">Panel</a>
                              <a href="/dashboard" className="navbar-link">Dashboard</a>
                              <a href="/sales-management" className="navbar-link">Gestión</a>
                              <a href="/notifications" className="navbar-link">Notificaciones</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="navbar-collapse-icon">
                              <MdOutlineSegment size={25} />
                        </div>
                  </div>
                  <div className={`navbar-hidden-list ${isOpen ? 'list-open' : 'list-hidden'}`}>
                        <a href="/" className="navbar-link">Inicio</a>
                        <a href="/admin" className="navbar-link">Panel</a>
                        <a href="/dashboard" className="navbar-link">Dashboard</a>
                        <a href="/sales-management" className="navbar-link">Gestión</a>
                        <a href="/notifications" className="navbar-link">Notificaciones</a>
                  </div>
            </>
      )
}

export default AdminNavbar