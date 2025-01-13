// Notifications.tsx

import AdminNavbar from '../../components/admin/AdminNavbar/AdminNavbar';
import AdminBack from '../../components/admin/AdminBack/AdminBack';
// Ejemplo de íconos de react-icons
import { FaShoppingCart, FaExclamationTriangle, FaEnvelopeOpenText } from 'react-icons/fa';
import './Notifications.css';

interface NotificationItem {
      id: number;
      type: 'order' | 'stock' | 'general';
      title: string;
      description: string;
      dateTime: string;
      read: boolean;
}

export default function Notifications() {
      const notifications: NotificationItem[] = [
            {
                  id: 1,
                  type: 'order',
                  title: 'Nuevo Pedido Realizado',
                  description: 'Se ha realizado un nuevo pedido (#0001) con 5 artículos.',
                  dateTime: '2025-02-10 09:30',
                  read: false,
            },
            {
                  id: 2,
                  type: 'stock',
                  title: 'Producto Agotado',
                  description: 'El producto XYZ se quedó sin stock.',
                  dateTime: '2025-02-10 10:15',
                  read: false,
            },
            {
                  id: 3,
                  type: 'general',
                  title: 'Notificación de Sistema',
                  description: 'La base de datos se ha actualizado correctamente.',
                  dateTime: '2025-02-10 11:00',
                  read: true,
            },
            {
                  id: 4,
                  type: 'order',
                  title: 'Pedido Pendiente de Envío',
                  description: 'El pedido (#0002) está listo para ser enviado.',
                  dateTime: '2025-02-10 11:20',
                  read: false,
            },
            {
                  id: 5,
                  type: 'stock',
                  title: 'Stock Bajo',
                  description: 'El producto ABC tiene menos de 10 unidades disponibles.',
                  dateTime: '2025-02-10 12:00',
                  read: false,
            },
      ];

      function handleMarkAsRead(id: number) {
            console.log(`Marcando notificación ${id} como leída.`);
      }
      function handleDismiss(id: number) {
            console.log(`Eliminando notificación ${id}.`);
      }

      function renderIcon(type: NotificationItem['type']) {
            switch (type) {
                  case 'order':
                        return <FaShoppingCart className="notification-icon" />;
                  case 'stock':
                        return <FaExclamationTriangle className="notification-icon" />;
                  default:
                        return <FaEnvelopeOpenText className="notification-icon" />;
            }
      }

      return (
            <div className="notifications-main-container">
                  <AdminNavbar />
                  <AdminBack />

                  <div className="notifications-title archivo-black">Notificaciones</div>
                  {/* <div className="notifications-subtitle">
                        Estas notificaciones se generan de manera automática y se envían por correo.
                        Aquí puedes verlas y administrarlas.
                  </div> */}

                  <div className="notifications-list-container">
                        {notifications.map((item) => (
                              <div
                                    key={item.id}
                                    className={`notification-item ${item.read ? 'read' : 'unread'}`}
                              >
                                    <div className="notification-left">
                                          {renderIcon(item.type)}
                                          <div className="notification-info">
                                                <div className="notification-title">{item.title}</div>
                                                <div className="notification-description">
                                                      {item.description}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="notification-right">
                                          <div className="notification-datetime">{item.dateTime}</div>
                                          <div className="notification-actions">
                                                {!item.read && (
                                                      <div
                                                            className="notification-button mark-read-btn"
                                                            onClick={() => handleMarkAsRead(item.id)}
                                                      >
                                                            Marcar como leído
                                                      </div>
                                                )}
                                                <div
                                                      className="notification-button dismiss-btn"
                                                      onClick={() => handleDismiss(item.id)}
                                                >
                                                      Eliminar
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}
