import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ตัวอย่าง Login
    if (username === "admin" && password === "1234") {
      navigate("/home");
    } else {
      alert("ACCESS DENIED\nชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <main className="login-page">

      {/* Scan Effect */}
      <div className="login-scan"></div>

      {/* Background HUD */}
      <div className="hud hud-1"></div>
      <div className="hud hud-2"></div>

      {/* Top System */}
      <header className="login-header">

        <div className="system-status">
          <span className="status-light"></span>
          SYSTEM ONLINE
        </div>

        <div className="system-code">
          SYS // 07-ALPHA
        </div>

      </header>

      {/* Main */}
      <section className="login-container">

        {/* Left Side */}
        <div className="login-intro">

          <div className="intro-line"></div>

          <p className="login-eyebrow">
            CLASSIFIED DATABASE
          </p>

          <h1>
            CHARACTER
            <span>DATABASE</span>
          </h1>

          <p className="intro-description">
            ระบบฐานข้อมูลตัวละครแห่งอนาคต
            <br />
            กรุณายืนยันตัวตนเพื่อเข้าสู่ระบบ
          </p>

          <div className="system-info">

            <div>
              <span>SYSTEM</span>
              <strong>ONLINE</strong>
            </div>

            <div>
              <span>DATABASE</span>
              <strong>SECURE</strong>
            </div>

            <div>
              <span>SECURITY</span>
              <strong>LEVEL 04</strong>
            </div>

          </div>

        </div>

        {/* Login Box */}
        <div className="login-box">

          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          <div className="login-box-header">

            <div>
              <span className="small-label">
                SYSTEM ACCESS
              </span>

              <h2>AUTHENTICATION</h2>
            </div>

            <div className="access-number">
              001
            </div>

          </div>

          <div className="login-divider"></div>

          <form onSubmit={handleLogin}>

            <label>
              USER ID
            </label>

            <div className="input-wrapper">

              <span>&gt;_</span>

              <input
                type="text"
                placeholder="ENTER USER ID"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                required
              />

            </div>

            <label>
              ACCESS CODE
            </label>

            <div className="input-wrapper">

              <span>◆</span>

              <input
                type="password"
                placeholder="ENTER ACCESS CODE"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <button
              type="submit"
              className="access-button"
            >
              <span>ACCESS SYSTEM</span>
              <span>→</span>
            </button>

          </form>

          <div className="login-status">

            <span className="status-light"></span>

            CONNECTION SECURE

            <span className="status-right">
              ENCRYPTED
            </span>

          </div>

        </div>

      </section>

      {/* Bottom */}
      <footer className="login-footer">

        <span>
          © 2026 CHARACTER DATABASE
        </span>

        <span>
          SYSTEM VERSION 1.0.4
        </span>

        <span>
          ALL SYSTEMS OPERATIONAL
        </span>

      </footer>

    </main>
  );
}

export default Login;