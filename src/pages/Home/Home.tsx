import { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/functions'; // Assuming you have this utility
import './Home.css';
import { Product, ALL_PRODUCTS } from '../../assets/products';
import { BRANDS } from '../../assets/brands';
import { FiSend } from "react-icons/fi";
import { FaFacebook, FaYoutube, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

function Home() {

      const duplicatedBrands = [...BRANDS, ...BRANDS];

      const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);
      const [bestSellers, setBestSellers] = useState<Product[]>([]);

      useEffect(() => {
            const sortedBySalesAsc = [...ALL_PRODUCTS].sort((a, b) => a.sales - b.sales);
            const discounted = sortedBySalesAsc.slice(0, 5).map((product) => {
                  const discountedPrice = (parseFloat(product.price) * 0.9).toFixed(2);
                  return { ...product, discounted_price: discountedPrice };
            });
            setDiscountedProducts(discounted);

            const sortedBySalesDesc = [...ALL_PRODUCTS].sort((a, b) => b.sales - a.sales);
            const best = sortedBySalesDesc.slice(0, 5);
            setBestSellers(best);
      }, []);

      return (
      <div className="home-main-container fade-in">
            {/* Small navbar */}
            <div className="home-navbar">
                  <div className="home-navbar-links">
                        <a href="#home" className="home-link">Inicio</a>
                        <a href="/admin" className="home-link">Admin</a>
                  </div>
            </div>

            {/* Banner with logo and company statement */}
            <div className="home-banner">
                  <img
                        className="home-logo"
                        src="images/logo_big.png"
                        alt="Home Logo"
                  />
                  <div className="home-title">
                        <div className="home-title-main archivo-black">Bienvenido a AGEPSA</div>
                        <div className="home-title-secondary">Los mejores repuestos de motores para buses</div>
                  </div>
            </div>

            {/* Explanation / Company Info */}
            <section className="agepsa-info fade-in">
                  <div className="agepsa-info-main archivo-black">¿Por qué AGEPSA?</div>
                  <div className="agepsa-info-text">
                        En AGEPSA somos líderes en la industria de repuestos para motores de
                        buses. Ofrecemos calidad, durabilidad y el mejor soporte para asegurar
                        que tu flota se mantenga en el camino. ¡Confía en nosotros para
                        mantener tu negocio en movimiento!
                  </div>
            </section>

            {/* Contact section */}
            <div className="contact-section fade-in">
                  <div className="contact-text ">Contacte con nosotros</div>
                  <a
                        className="whatsapp-button"
                        href="https://wa.me/51999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                  >
                        <FaWhatsapp size={20}/> WhatsApp
                  </a>
            </div>

            {/* Brands list */}
            <div className="brands-section">
                  <div className="brands-title archivo-black">Nuestras lineas</div>
                  <div className="brands-carousel">
                        {duplicatedBrands.map((brand) => (
                              <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="brand-image"
                              />
                        ))}
                  </div>
            </div>

            {/* Discounted products section */}
            <section className="products-section fade-in">
                  <div className="products-section-title archivo-black">Productos en Descuento (10% OFF)</div>
                  <div className="products-grid">
                        {discountedProducts.map((product) => (
                              <div key={product.id} className="product-card discount-card">
                                    <img
                                          src={product.image}
                                          alt={product.name}
                                          className="product-image"
                                    />
                                    <div className="product-info">
                                          <div className="product-info-title">{product.name} {product.brand}</div>
                                          <div className="product-info-text original-price">Antes: S/.{formatNumber(product.price)}</div>
                                          <div className="product-info-text discounted-price">Ahora: S/.{formatNumber(product.discounted_price || '0')}</div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>

            {/* Best sellers section */}
            <section className="products-section fade-in">
                  <div className="products-section-title archivo-black">¡Los Más Vendidos!</div>
                  <div className="products-grid">
                        {bestSellers.map((product) => (
                              <div key={product.id} className="product-card bestseller-card">
                                    <img
                                          src={product.image}
                                          alt={product.name}
                                          className="product-image"
                                    />
                                    <div className="product-info">
                                          <div className="product-info-title">{product.name} {product.brand}</div>
                                          <div className="product-info-text best-price">S/.{formatNumber(product.price)}</div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>

            {/* Contact form */}
            <div className="contact-container">
                  <div className="contact-image">
                        <img
                              className="home-logo"
                              src="images/logo_big.png"
                              alt="Home Logo"
                        />
                  </div>
                  <form className="contact-form">
                        <div className="contact-title archivo-black">Contáctenos</div>
                        <input type="text" name="name" className="contact-info" placeholder="Nombre" />
                        <input type="text" name="name" className="contact-info" placeholder="Teléfono" />
                        <input type="text" name="name" className="contact-info" placeholder="Correo electrónico" />
                        <input type="text" name="name" className="contact-info" placeholder="Mensaje" />
                        <div className="contact-button"><FiSend /> Enviar correo</div>
                  </form>
            </div>

            {/* Footer */}
            <div className="footer-container">
                  <div className="footer-content">
                        <div className="footer-info">
                              <div className="footer-text">
                                    <div>SEDE CENTRAL LOS OLIVOS</div>
                                    <div>SEDE SAN LUIS / LIMA</div>
                                    <div>SEDE PIURA</div>
                                    <div>SEDE – TRUJILLO</div>
                                    <div>SEDE CARABAYLLO / LIMA</div>
                              </div>
                              <div className="footer-contact">
                                    <div>Central Olivos</div>
                                    <div>(01) 522 6765</div>
                                    <div>(01) 521 4585</div>
                                    <div>999 773 727 - 999 300 308</div>
                                    <div>central.ventas@agepsa.com.pe</div>
                              </div>
                              <div className="footer-icons">
                                    <div className="footer-icon"><FaFacebook /></div>
                                    <div className="footer-icon"><FaYoutube /></div>
                                    <div className="footer-icon"><FaWhatsapp /></div>
                                    <div className="footer-icon"><FaLinkedin /></div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      );
}

export default Home;
