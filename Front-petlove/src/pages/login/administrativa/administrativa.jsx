import { useState } from "react";
import "./administrativa.css";

export default function Administrativa({ onLogout }) {
  const [alerts] = useState([
    { title: "Patrulha em movimento", area: "Centro", status: "Monitorando" },
    { title: "Câmera 12 fora do ar", area: "Pinheiros", status: "Atenção" },
    { title: "Alerta de tráfego", area: "Marginal", status: "Resolvido" },
  ]);

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div>
          <h2>Segurança SP</h2>
          <p>Painel administrativo</p>
        </div>

        <nav className="admin-nav">
          <a href="#" className="active">Visão geral</a>
          <a href="#">Câmeras</a>
          <a href="#">Equipes</a>
          <a href="#">Relatórios</a>
          <a href="#">Configurações</a>
        </nav>

        <button type="button" className="logout-button" onClick={onLogout}>
          Sair do painel
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Administração central</p>
            <h1>Gerenciamento da segurança urbana</h1>
          </div>
          <div className="admin-user">Usuário: Administrador</div>
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
            <h3>Equipes em ação</h3>
            <div className="stat-value">8</div>
          </div>
          <div className="stat-card">
            <h3>Resposta média</h3>
            <div className="stat-value">4.8 min</div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel large-panel">
            <h2>Monitoramento por região</h2>
            <div className="map-card">
              <div className="map-overlay">
                <div className="map-badge">Cobertura urbana</div>
                <div>
                  <h3>Central de operações</h3>
                  <p>Controle das principais zonas da cidade de São Paulo.</p>
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
          </div>
        </section>

        <section className="content-grid secondary-grid">
          <div className="panel">
            <h2>Atalhos administrativos</h2>
            <div className="shortcut-list">
              <button type="button">Enviar equipe</button>
              <button type="button">Gerar relatório</button>
              <button type="button">Atualizar câmeras</button>
            </div>
          </div>

          <div className="panel">
            <h2>Status operacional</h2>
            <ul className="status-list">
              <li><span>Infraestrutura</span><strong>Normal</strong></li>
              <li><span>Rede</span><strong>Estável</strong></li>
              <li><span>Segurança física</span><strong>Monitorada</strong></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
