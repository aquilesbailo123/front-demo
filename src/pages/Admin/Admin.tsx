import './Admin.css';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar/AdminNavbar';
import { FaTachometerAlt, FaShoppingCart, FaBell, FaStore, FaTools } from 'react-icons/fa';

// Datos de ejemplo: asesor, estadísticas, etc.
const ADMIN_INFO = {
      advisorName: 'Juan Pérez',
      advisorTitle: 'Asesor de Ventas Senior',
      year: new Date().getFullYear(),
};

function Admin() {
      // Ejemplo para manejar estado si deseas modificarlo dinámicamente
      const [totalSales, setTotalSales] = useState('S/. 120,000');
      const [stock, setStock] = useState('980 items');
      const [pendingOrders, setPendingOrders] = useState('32');

      useEffect(() => {
            setTotalSales('S/. 120,000');
            setStock('980 items');
            setPendingOrders('32');
      }, [])

      return (
            <div className="admin-main-container">
                  <AdminNavbar/>

                  {/* Título principal */}
                  <div className="admin-title archivo-black">Panel Administrador AGEPSA</div>
                   
                  {/* Información del asesor */}
                  <div className="admin-advisor-container">
                        <div className="admin-advisor-name">{ADMIN_INFO.advisorName}</div>
                        <div className="admin-advisor-title">{ADMIN_INFO.advisorTitle}</div>
                  </div>

                  {/* Sección de resumen e indicadores */}
                  <div className="admin-summary">
                        <div className="admin-summary-title archivo-black">Indicadores Clave</div>
                        <div className="admin-summary-content">
                              <div className="admin-indicator">
                                    <div className="admin-indicator-label">Total de Ventas</div>
                                    <div className="admin-indicator-value">{totalSales}</div>
                              </div>
                              <div className="admin-indicator">
                                    <div className="admin-indicator-label">Stock Disponible</div>
                                    <div className="admin-indicator-value">{stock}</div>
                              </div>
                              <div className="admin-indicator">
                                    <div className="admin-indicator-label">Órdenes Pendientes</div>
                                    <div className="admin-indicator-value">{pendingOrders}</div>
                              </div>
                        </div>
                  </div>

                  {/* Sección de servicios */}
                  <div className="admin-services">
                  <h2 className="admin-services-title archivo-black">Servicios Disponibles</h2>
                  <div className="admin-services-links">
                        <a href="/dashboard" className="admin-service-button">
                              <FaTachometerAlt className="admin-service-icon" />
                              <div>Dashboard</div>
                        </a>
                        <a href="/sales-management" className="admin-service-button">
                              <FaShoppingCart className="admin-service-icon" />
                              <div>Sistema de Gestión de Ventas</div>
                        </a>
                        <a href="/notifications" className="admin-service-button">
                              <FaBell className="admin-service-icon" />
                              <div>Notificaciones</div>
                        </a>
                        <a href="/" className="admin-service-button">
                              <FaStore className="admin-service-icon" />
                              <div>Marketplace</div>
                        </a>
                        <a href="/mekanico" className="admin-service-button">
                              <FaTools className="admin-service-icon" />
                              <div>Mekanico</div>
                        </a>
                  </div>
            </div>

                  {/* Footer */}
                  <div className="admin-footer">
                        <div>© {ADMIN_INFO.year} AGEPSA. Todos los derechos reservados.</div>
                  </div>
            </div>
      );
}

export default Admin;
