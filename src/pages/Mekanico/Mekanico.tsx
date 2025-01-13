// Mekanico.tsx

import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar/AdminNavbar';
import AdminBack from '../../components/admin/AdminBack/AdminBack';
// Puedes usar un ícono de react-icons como referencia (opcional)
// import { FaTools } from 'react-icons/fa';
import './Mekanico.css';

export default function Mekanico() {
      return (
            <div className="mekanico-main-container">

                  {/* Small navbar */}
                  <div className="home-navbar">
                        <div className="home-navbar-links">
                              <a href="#home" className="home-link">Inicio</a>
                              <a href="/admin" className="home-link">Admin</a>
                        </div>
                  </div>

                  {/* Título */}
                  <div className="mekanico-title archivo-black">Mekanico</div>

                  {/* Sección de descripción principal */}
                  <div className="mekanico-description">
                        <div className="mekanico-icon-box">
                              <img
                                    src="/images/logo_big.png"
                                    alt="Mekanico Icon"
                                    className="mekanico-icon"
                              />
                        </div>
                        <div className="mekanico-text-box">
                              <div className="mekanico-subtitle">Herramienta de Gestión Inteligente</div>
                              <div className="mekanico-text">
                                    Mekanico es una herramienta sin costo diseñada para clientes estratégicos
                                    de Agespa, especialmente aquellos que más compran. Esta solución permite
                                    predecir la demanda de repuestos automotrices, optimizando el inventario y
                                    reduciendo costos por exceso o falta de piezas. Con Mekanico, tus clientes
                                    podrán planificar de manera inteligente, mejorar la eficiencia en la
                                    gestión de partes y ofrecer un servicio más rápido y confiable.
                              </div>
                        </div>
                  </div>

                  {/* Sección de beneficios o puntos destacados */}
                  <div className="mekanico-features">
                        <div className="mekanico-feature-card">
                              <div className="mekanico-feature-title">Predicción de Demanda</div>
                              <div className="mekanico-feature-detail">
                                    Utiliza un sistema inteligente para estimar las necesidades futuras de
                                    repuestos, evitando costos innecesarios.
                              </div>
                        </div>
                        <div className="mekanico-feature-card">
                              <div className="mekanico-feature-title">Control de Stock Automatizado</div>
                              <div className="mekanico-feature-detail">
                                    Mantén el inventario en niveles óptimos y reduce el tiempo de reposición
                                    con alertas en tiempo real.
                              </div>
                        </div>
                        <div className="mekanico-feature-card">
                              <div className="mekanico-feature-title">Análisis en Profundidad</div>
                              <div className="mekanico-feature-detail">
                                    Obtén reportes y métricas clave para tomar decisiones estratégicas basadas
                                    en datos reales.
                              </div>
                        </div>
                  </div>

                  {/* Sección final (Call To Action o información adicional) */}
                  <div className="mekanico-cta">
                        <div className="mekanico-cta-title">¿Listo para optimizar tu gestión de repuestos?</div>
                        <div className="mekanico-cta-subtitle">
                              Comienza a usar Mekanico y lleva tu servicio al siguiente nivel.
                        </div>
                        {/* Botón de acción (placeholder) */}
                        <div className="mekanico-cta-button" onClick={() => {}}>
                              Empezar con Mekanico
                        </div>
                  </div>
            </div>
      );
}
