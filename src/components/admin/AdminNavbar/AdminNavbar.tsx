import './AdminNavbar.css';

function AdminNavbar() {
      return (
            <div className="navbar-main-cont">
                  <div className="navbar-left">
                        <div className="navbar-brand">AGEPSA</div>
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