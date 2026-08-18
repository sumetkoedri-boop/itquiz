import { useState } from "react";
import "./App.css";

type Tab = "character" | "profile" | "system";

const BASE = import.meta.env.BASE_URL;

const characterImage = `${BASE}X.jpg`;

const tabs: { id: Tab; label: string }[] = [
  { id: "character", label: "CHARACTER" },
  { id: "profile", label: "PROFILE" },
  { id: "system", label: "SYSTEM" },
];

function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("character");

  return (
    <main className="site-shell">

      {/* TOP BAR */}
      <header className="topbar">

        <div className="brand">
          <span className="brand-logo">SR</span>

          <span>CHARACTER DATABASE</span>
        </div>

        <nav className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

      </header>

{/* CHARACTER */}
{activeTab === "character" && (
  <section className="character-panel">

    {/* LEFT - CHARACTER IMAGE */}
    <div className="character-visual">

      <div className="visual-corner corner-tl"></div>
      <div className="visual-corner corner-tr"></div>
      <div className="visual-corner corner-bl"></div>
      <div className="visual-corner corner-br"></div>

      <div className="visual-header">
        <span>VISUAL DATABASE</span>
        <span>ID // 001</span>
      </div>

      <div className="scan-line"></div>

      <div className="scan-text">
        SYSTEM ONLINE
      </div>

      <div className="character-id">
        CHARACTER // 001
      </div>

      {/* IMAGE FRAME */}
      <div className="characterImage">

        <div className="image-grid"></div>

        <img
            className="character-image"
            src={characterImage}
            alt="X"
        />

        <div className="image-overlay"></div>

        <div className="image-label top">
          BIO-SCAN ACTIVE
        </div>

        <div className="image-label bottom">
          IMAGE VERIFIED
        </div>

      </div>

      <div className="scan-status">
        <span className="status-dot"></span>
        CHARACTER VERIFIED
      </div>

    </div>


    {/* RIGHT - CHARACTER INFORMATION */}
    <div className="character-info">

      <div className="info-header-line">
        <span className="eyebrow">
          CHARACTER IDENTIFICATION
        </span>

        <span className="info-number">
          001
        </span>
      </div>

      <h1>X</h1>

      <h2>???</h2>

      <div className="divider"></div>


      {/* CHARACTER DATA BOX */}
      <div className="character-data-box">

        <div className="box-title">
          <span>CHARACTER DATA</span>
          <span>LIVE</span>
        </div>

        <div className="info-grid">

          <div>
            <span>AGE</span>
            <strong>22</strong>
          </div>

          <div>
            <span>CLASS</span>
            <strong>???</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="active-status">
              ACTIVE
            </strong>
          </div>

          <div>
            <span>LEVEL</span>
            <strong>???</strong>
          </div>

        </div>

      </div>


      {/* PROFILE TEXT BOX */}
      <div className="profile-box">

        <div className="profile-box-header">
          <span>PROFILE</span>
          <span>// DATA 001</span>
        </div>

        <p>
          ไร้ข้อมูล บุคคลที่ปรากฏมาคว้าอันดับที่ 1 และขึ้นเป็น X อย่างง่ายดาย
        </p>

        <div className="profile-line"></div>

        <div className="profile-status">
          <span>THREAT LEVEL</span>
          <strong>HIGH</strong>
        </div>

      </div>


      {/* BOTTOM DATA */}
      <div className="quick-data">

        <div>
          <span>ORIGIN</span>
          <strong>Chinese</strong>
        </div>

        <div>
          <span>TYPE</span>
          <strong>Human</strong>
        </div>

        <div>
          <span>SYNC</span>
          <strong>100%</strong>
        </div>

      </div>

    </div>

  </section>
)}

      {/* PROFILE */}
      {activeTab === "profile" && (
        <section className="content-section">

          <div className="section-heading">

            <p className="eyebrow">
              Normal
            </p>

            <h1>CHARACTER PROFILE</h1>

          </div>

          <div className="stats-panel">

            <div className="stat">

              <div className="stat-header">
                <span>STRENGTH</span>
                <strong>100%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "85%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>SPEED</span>
                <strong>100%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "72%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>DEFENSE</span>
                <strong>100%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "80%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>ENERGY</span>
                <strong>100%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "91%" }}></div>
              </div>

            </div>

          </div>

          <div className="ability-panel">

            <p className="eyebrow">
              SPECIAL ABILITIES
            </p>

            <div className="abilities">

              <div className="ability">
                <span>01</span>
                <h2>Zero to null</h2>
                <p>
                  สามารถควบคุมและเปลี่ยนแปลงความเป็นจริงด้วยการดีดนิ้ว
                </p>
              </div>

              <div className="ability">
                <span>02</span>
                <h2>TELEPORT</h2>
                <p>
                  เคลื่อนย้ายด้วยการดีดนิ้ว
                </p>
              </div>

              <div className="ability">
                <span>03</span>
                <h2>wall 4</h2>
                <p>
                  มองทะลุกำแพงที่4
                </p>
              </div>

            </div>

          </div>

        </section>
      )}

      {/* SYSTEM */}
      {activeTab === "system" && (
        <section className="system-panel">

          <div className="system-header">

            <span className="status-dot"></span>

            SYSTEM STATUS: ONLINE

          </div>

          <div className="system-content">

            <p className="eyebrow">
              DATABASE INFORMATION
            </p>

            <h1>CHARACTER DATABASE</h1>

            <div className="system-lines">

              <p>
                <span>SYSTEM</span>
                CHARACTER DATABASE v1.0
              </p>

              <p>
                <span>DATABASE</span>
                #001
              </p>

              <p>
                <span>SECURITY</span>
                LEVEL 10
              </p>

              <p>
                <span>STATUS</span>
                <strong>OPERATIONAL</strong>
              </p>

            </div>

          </div>

        </section>
      )}

      {/* FOOTER */}
      <footer className="hud-footer">

        <span>
          SYSTEM MESSAGE:
        </span>

        <strong>
          CHARACTER DATA VERIFIED
        </strong>

        <span className="security">
          SECURITY LEVEL: 10
        </span>

      </footer>

    </main>
  );
}

export default Home;