import { useMemo, useState } from "react";
import "./login.css";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.trim().length >= 6, [password]);
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      setError("Informe um email válido.");
      return;
    }

    if (!isPasswordValid) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setError("");
    alert(mode === "login" ? "Login realizado com sucesso!" : "Conta criada com sucesso!");
  };

  return (
    <div className="login-page">
      <div className="background"></div>

      <div className="login-container">
        <div className="logo">
          <div className="shield">🛡️</div>
          <h1>Security</h1>
          <p>Sistema Inteligente de Segurança</p>
        </div>

        <div className="mode-switch" role="tablist" aria-label="Modo de autenticação">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setError("");
            }}
          >
            Entrar
          </button>
          <button
            type="button"
            className={mode === "create" ? "active" : ""}
            onClick={() => {
              setMode("create");
              setError("");
            }}
          >
            Criar conta
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>

            <a href="/">Esqueci minha senha</a>
          </div>

          {error ? <p className="form-error">{error}</p> : null}

          <button type="submit" disabled={!isFormValid}>
            {mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <div className="footer">
          Protegido por criptografia SSL 256 bits
        </div>
      </div>
    </div>
  );
}