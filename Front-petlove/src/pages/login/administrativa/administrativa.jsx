import { useState } from "react";
import "./dashboard.css";

export default function Dashboard({ onLogout }) {
  const [alerts] = useState([
    { title: "Patrulha em movimento", area: "Centro", status: "Monitorando" },
    { title: "Camera 12 fora do ar", area: "Pinheiros", status: "Atencao" },
    { title: "Alerta de tráfego", area: "Marginal", status: "Resolvido" },
  ]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>Dashboard de Segurança</h1>
            <p>São Paulo • Monitoramento em tempo real</p>
          </div>
          <div className="user-chip">
            <button type="button" className="logout-button" onClick={onLogout}>
              Sair
            </button>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Alarmes ativos</h3>
            <div className="stat-value">24</div>
          </div>
          <div className="stat-card">
            <h3>Câmeras online</h3>
            <div className="stat-value">186</div>
          </div>
          <div className="stat-card">
            <h3>Rotas seguras</h3>
            <div className="stat-value">92%</div>
          </div>
          <div className="stat-card">
            <h3>Resposta média</h3>
            <div className="stat-value">4.8 min</div>
          </div>
        </section>

        <section className="main-grid">
          <div className="panel">
            <h2>Mapa de monitoramento</h2>
            <div className="map-card">
              <div className="map-overlay">
                <div className="map-badge">Cobertura urbana</div>
                <div>
                  <h2>Monitoramento inteligente</h2>
                  <p>Visão completa das principais regiões da cidade.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2>Alertas recentes</h2>
            <div className="alert-list">
              {alerts.map((item, index) => (
                <div className="alert-item" key={index}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.area}</span>
                  </div>
                  <div className="status">{item.status}</div>
                </div>
              ))}
            </div>

            <div className="action-row">
              <button type="button">Ver relatório</button>
              <button type="button">Enviar equipe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
