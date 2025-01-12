import './AdminNavbar.css';

function AdminNavbar() {
      return (
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
            </div>
      )
}

export default AdminNavbar