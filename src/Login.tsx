import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "12345678") {
        navigate("/home");
      } else {
        alert("ACCESS DENIED\nชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        setIsLoading(false);
      }
    }, 700);
  };

  return (
    <main className="login-page">

      {/* Background Grid */}
      <div className="login-grid"></div>

      {/* Scan Line */}
      <div className="login-scan"></div>

      {/* Decorative HUD */}
      <div className="hud hud-1">
        <span>01</span>
        <div></div>
      </div>

      <div className="hud hud-2">
        <div></div>
        <span>SYS</span>
      </div>

      {/* Top Bar */}
      <header className="login-header">

        <div className="system-status">
          <span className="status-light"></span>
          SYSTEM ONLINE
        </div>

        <div className="system-title">
          CHARACTER DATABASE
        </div>

        <div className="system-code">
          SYS // 07-ALPHA
        </div>

      </header>

      {/* Main Content */}
      <section className="login-container">

        {/* LEFT */}
        <div className="login-intro">

          <div className="intro-line"></div>

          <p className="login-eyebrow">
            // CLASSIFIED DATABASE
          </p>

          <h1>
            CHARACTER
            <span>DATABASE</span>
          </h1>

          <p className="intro-description">
            ระบบฐานข้อมูลตัวละครแห่งอนาคต
            <br />
            เข้าถึงข้อมูลตัวละครได้จากระบบกลาง
          </p>

          {/* System Information */}
          <div className="system-info">

            <div className="info-item">
              <span>SYSTEM</span>
              <strong>
                <i></i>
                ONLINE
              </strong>
            </div>

            <div className="info-item">
              <span>DATABASE</span>
              <strong>SECURE</strong>
            </div>

            <div className="info-item">
              <span>SECURITY</span>
              <strong>LEVEL 04</strong>
            </div>

          </div>

          {/* Decorative Code */}
          <div className="terminal-text">
            <span>&gt;</span> INITIALIZING DATABASE...
            <br />
            <span>&gt;</span> ENCRYPTION: ACTIVE
            <br />
            <span>&gt;</span> WAITING FOR AUTHENTICATION_
          </div>

        </div>

        {/* RIGHT LOGIN */}
        <div className="login-box">

          {/* Corner Decorations */}
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          {/* Box Header */}
          <div className="login-box-header">

            <div>
              <span className="small-label">
                SYSTEM ACCESS
              </span>

              <h2>
                AUTHENTICATION
              </h2>
            </div>

            <div className="access-number">
              001
            </div>

          </div>

          <div className="login-divider"></div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>

            <label htmlFor="username">
              USER ID
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                &gt;_
              </span>

              <input
                id="username"
                type="text"
                placeholder="ENTER USER ID"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                autoComplete="username"
                required
              />

            </div>

            <label htmlFor="password">
              ACCESS CODE
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                ◆
              </span>

              <input
                id="password"
                type="password"
                placeholder="ENTER ACCESS CODE"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
                required
              />

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="access-button"
              disabled={isLoading}
            >

              <span>
                {isLoading
                  ? "AUTHENTICATING..."
                  : "ACCESS SYSTEM"}
              </span>

              <span className="button-arrow">
                →
              </span>

            </button>

          </form>

          {/* Connection Status */}
          <div className="login-status">

            <div>
              <span className="status-light"></span>
              CONNECTION SECURE
            </div>

            <span className="status-right">
              ENCRYPTED
            </span>

          </div>

        </div>

      </section>

      {/* Bottom Status */}
      <footer className="login-footer">

        <span>
          © 2026 CHARACTER DATABASE
        </span>

        <span>
          SYSTEM VERSION 1.0.4
        </span>

        <span className="footer-online">
          ● ALL SYSTEMS OPERATIONAL
        </span>

      </footer>

    </main>
  );
}

export default Login;