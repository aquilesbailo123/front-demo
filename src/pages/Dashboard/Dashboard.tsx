import { useMemo } from 'react';
import './Dashboard.css';
import { Product, ALL_PRODUCTS } from '../../assets/products';
import {
      LineChart,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      PieChart,
      Pie,
      Cell,
      ResponsiveContainer,
      BarChart,
      Bar,
} from 'recharts';

// Colores para el gráfico de pastel
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

/**
 * Dashboard principal para el área de Ventas / Operaciones.
 */
function Dashboard() {
      // Cálculo de estadísticas con useMemo para optimizar
      const stats = useMemo(() => {
            const sortedBySalesDesc = [...ALL_PRODUCTS].sort((a, b) => b.sales - a.sales); // Mayor a menor
            const sortedBySalesAsc = [...ALL_PRODUCTS].sort((a, b) => a.sales - b.sales); // Menor a mayor

            // Total de ventas (sumando "sales" como número de ítems vendidos)
            const totalSales = ALL_PRODUCTS.reduce((acc, p) => acc + p.sales, 0);

            // Stock total
            const totalStock = ALL_PRODUCTS.reduce((acc, p) => acc + p.stock, 0);

            // Producto más vendido
            const bestSeller = sortedBySalesDesc[0];

            // Top 5 más vendidos
            const top5 = sortedBySalesDesc.slice(0, 5);

            // Top 5 menos vendidos
            const bottom5 = sortedBySalesAsc.slice(0, 5);

            // Ventas por Categoría
            const salesByCategoryMap: { [key: string]: number } = {};
            
            ALL_PRODUCTS.forEach((p: Product) => {
                  const categoryKey = String(p.category);
                  if (salesByCategoryMap[categoryKey]) {
                        salesByCategoryMap[categoryKey] += p.sales;
                  } else {
                        salesByCategoryMap[categoryKey] = p.sales;
                  }
            });
            const salesByCategory = Object.keys(salesByCategoryMap).map((key) => ({
                  name: key,
                  value: salesByCategoryMap[key],
            }));

            // Ventas Mensuales (Simulación)
            const salesMonthly = [
                  { month: 'Ene', sales: 4000 },
                  { month: 'Feb', sales: 3000 },
                  { month: 'Mar', sales: 5000 },
                  { month: 'Abr', sales: 4000 },
                  { month: 'May', sales: 6000 },
                  { month: 'Jun', sales: 7000 },
                  { month: 'Jul', sales: 5000 },
                  { month: 'Ago', sales: 4000 },
                  { month: 'Sep', sales: 3000 },
                  { month: 'Oct', sales: 2000 },
                  { month: 'Nov', sales: 4000 },
                  { month: 'Dic', sales: 5000 },
            ];

            // Satisfacción del Cliente (Distribución)
            const satisfactionLevelsMap: { [key: string]: number } = {
                  "1": 0,
                  "2": 0,
                  "3": 0,
                  "4": 0,
                  "5": 0,
            };

            ALL_PRODUCTS.forEach((p) => {
                  const level = String(p.customer_satisfaction); // "1", "2", "3", "4", or "5"
                  if (satisfactionLevelsMap[level] !== undefined) {
                  satisfactionLevelsMap[level] += 1;
                  }
            });

            const customerSatisfaction = Object.keys(satisfactionLevelsMap).map((level) => ({
                  satisfactionLevel: level,
                  value: satisfactionLevelsMap[level],
            }));

            return {
                  totalSales,
                  totalStock,
                  bestSeller,
                  top5,
                  bottom5,
                  salesByCategory,
                  salesMonthly,
                  customerSatisfaction,
            };
      }, []);

      return (
            <div className="dashboard-main-container">

                  {/* NAVBAR */}
                  <div className="dashboard-navbar">
                        <div className="dashboard-navbar-left">
                              <div className="dashboard-navbar-brand">AGEPSA</div>
                        </div>
                        <div className="dashboard-navbar-links">
                              <a href="/" className="dashboard-navbar-link">Inicio</a>
                              <a href="/manager" className="dashboard-navbar-link">Gestión</a>
                              <a href="/admin" className="dashboard-navbar-link">Admin</a>
                        </div>
                  </div>

                  {/* Título Principal */}
                  <div className="dashboard-title">Dashboard de Ventas y Operaciones</div>

                  {/* Tarjetas (Indicadores Clave) */}
                  <div className="dashboard-cards-section">
                        <div className="dashboard-card">
                              <div className="dashboard-card-title">Total de Ventas</div>
                              <div className="dashboard-card-value">{stats.totalSales}</div>
                              <div className="dashboard-card-note">Productos vendidos en total</div>
                        </div>
                        <div className="dashboard-card">
                              <div className="dashboard-card-title">Stock Disponible</div>
                              <div className="dashboard-card-value">{stats.totalStock}</div>
                              <div className="dashboard-card-note">Suma de todo el inventario</div>
                        </div>
                        <div className="dashboard-card">
                              <div className="dashboard-card-title">Más Vendido</div>
                              <div className="dashboard-card-value">
                                    {stats.bestSeller?.name || '—'}
                              </div>
                              <div className="dashboard-card-note">
                                    Ventas: {stats.bestSeller?.sales || 0}
                              </div>
                        </div>
                  </div>

                  {/* Sección de 4 Gráficas Interactivas */}
                  <div className="dashboard-charts-grid">
                        {/* Gráfica 1: Ventas Mensuales */}
                        <div className="dashboard-chart-box">
                              <div className="dashboard-chart-title">Ventas Mensuales</div>
                              <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={stats.salesMonthly}>
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="month" />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Line type="monotone" dataKey="sales" stroke="#0ea5e9" activeDot={{ r: 8 }} />
                                    </LineChart>
                              </ResponsiveContainer>
                        </div>

                        {/* Gráfica 2: Ventas por Categoría */}
                        <div className="dashboard-chart-box">
                              <div className="dashboard-chart-title">Ventas por Categoría</div>
                              <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                          <Pie
                                                data={stats.salesByCategory}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                label
                                          >
                                                {stats.salesByCategory.map((_, index) => (
                                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                          </Pie>
                                          <Tooltip />
                                          {/* <Legend /> */}
                                    </PieChart>
                              </ResponsiveContainer>
                        </div>

                        {/* Gráfica 3: Proyección de Ventas */}
                        <div className="dashboard-chart-box">
                              <div className="dashboard-chart-title">Proyección de Ventas</div>
                              <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={stats.salesMonthly}>
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="month" />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Bar dataKey="sales" fill="#82ca9d" />
                                    </BarChart>
                              </ResponsiveContainer>
                        </div>

                        {/* Gráfica 4: Distribución de Satisfacción del Cliente */}
                        <div className="dashboard-chart-box">
                              <div className="dashboard-chart-title">Distribución de Satisfacción del Cliente</div>
                              <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                          <Pie
                                                data={stats.customerSatisfaction}
                                                dataKey="value" // Update this to match your data field
                                                nameKey="satisfaction" // Update this to match your data field
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                label
                                          >
                                          {stats.customerSatisfaction.map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                          ))}
                                          </Pie>
                                          <Tooltip />
                                    </PieChart>
                              </ResponsiveContainer>
                        </div>

                  </div>

                  {/* Sección: Top 5 Más Vendidos */}
                  <div className="dashboard-top-products-section">
                        <div className="dashboard-section-title">Top 5 Productos Más Vendidos</div>
                        <div className="dashboard-top-table">
                              <div className="dashboard-top-table-header">
                                    <div className="top-col col-name">Producto</div>
                                    <div className="top-col col-brand">Marca</div>
                                    <div className="top-col col-sales">Ventas</div>
                                    <div className="top-col col-price">Precio</div>
                                    <div className="top-col col-stock">Stock</div>
                              </div>
                              {stats.top5.map((product) => (
                                    <div className="dashboard-top-table-row" key={product.id}>
                                          <div className="top-col col-name">{product.name}</div>
                                          <div className="top-col col-brand">{product.brand}</div>
                                          <div className="top-col col-sales">{product.sales}</div>
                                          <div className="top-col col-price">S/.{product.price}</div>
                                          <div className="top-col col-stock">{product.stock}</div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  {/* Sección: Top 5 Menos Vendidos */}
                  <div className="dashboard-bottom-products-section">
                        <div className="dashboard-section-title">Top 5 Productos Menos Vendidos</div>
                        <div className="dashboard-bottom-table">
                              <div className="dashboard-bottom-table-header">
                                    <div className="bottom-col col-name">Producto</div>
                                    <div className="bottom-col col-brand">Marca</div>
                                    <div className="bottom-col col-sales">Ventas</div>
                                    <div className="bottom-col col-price">Precio</div>
                                    <div className="bottom-col col-stock">Stock</div>
                              </div>
                              {stats.bottom5.map((product) => (
                                    <div className="dashboard-bottom-table-row" key={product.id}>
                                          <div className="bottom-col col-name">{product.name}</div>
                                          <div className="bottom-col col-brand">{product.brand}</div>
                                          <div className="bottom-col col-sales">{product.sales}</div>
                                          <div className="bottom-col col-price">S/.{product.price}</div>
                                          <div className="bottom-col col-stock">{product.stock}</div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
}

export default Dashboard;
