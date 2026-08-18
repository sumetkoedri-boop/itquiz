import { useState } from "react";
import "./App.css";

type Tab = "character" | "profile" | "system";

const BASE = import.meta.env.BASE_URL;

const characterImage = `${BASE}character.png`;

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

          {/* LEFT */}
          <div className="character-visual">

            <div className="scan-line"></div>

            <div className="scan-text">
              SYSTEM ONLINE
            </div>

            <div className="character-id">
              ID // 001
            </div>

            <img
              className="character-image"
              src={characterImage}
              alt="ตัวละคร"
            />

            <div className="scan-status">
              <span className="status-dot"></span>
              CHARACTER VERIFIED
            </div>

          </div>

          {/* RIGHT */}
          <div className="character-info">

            <p className="eyebrow">
              CHARACTER IDENTIFICATION
            </p>

            <h1>KAIRO</h1>

            <h2>CYBER WARRIOR</h2>

            <div className="divider"></div>

            <div className="info-grid">

              <div>
                <span>AGE</span>
                <strong>21</strong>
              </div>

              <div>
                <span>CLASS</span>
                <strong>WARRIOR</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="active-status">
                  ACTIVE
                </strong>
              </div>

              <div>
                <span>LEVEL</span>
                <strong>47</strong>
              </div>

            </div>

            <div className="profile-box">

              <p className="eyebrow">
                PROFILE
              </p>

              <p>
                Kairo คือ Cyber Warrior
                ผู้ได้รับการเสริมร่างกายด้วยเทคโนโลยี
                แห่งอนาคต สามารถควบคุมพลังงานและใช้อาวุธ
                พลังงานขั้นสูงในการต่อสู้
              </p>

            </div>

          </div>

        </section>
      )}

      {/* PROFILE */}
      {activeTab === "profile" && (
        <section className="content-section">

          <div className="section-heading">

            <p className="eyebrow">
              BIOMETRIC ANALYSIS
            </p>

            <h1>CHARACTER PROFILE</h1>

          </div>

          <div className="stats-panel">

            <div className="stat">

              <div className="stat-header">
                <span>STRENGTH</span>
                <strong>85%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "85%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>SPEED</span>
                <strong>72%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "72%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>DEFENSE</span>
                <strong>80%</strong>
              </div>

              <div className="bar">
                <div style={{ width: "80%" }}></div>
              </div>

            </div>

            <div className="stat">

              <div className="stat-header">
                <span>ENERGY</span>
                <strong>91%</strong>
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
                <h2>ENERGY CONTROL</h2>
                <p>
                  สามารถควบคุมและรวบรวมพลังงาน
                  เพื่อเพิ่มประสิทธิภาพในการต่อสู้
                </p>
              </div>

              <div className="ability">
                <span>02</span>
                <h2>CYBER ENHANCEMENT</h2>
                <p>
                  ระบบเสริมร่างกายช่วยเพิ่มความเร็ว
                  และความแข็งแกร่งของร่างกาย
                </p>
              </div>

              <div className="ability">
                <span>03</span>
                <h2>TACTICAL SCAN</h2>
                <p>
                  วิเคราะห์ข้อมูลของศัตรู
                  และค้นหาจุดอ่อนแบบเรียลไทม์
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
                LEVEL 04
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
          SECURITY LEVEL: 04
        </span>

      </footer>

    </main>
  );
}

export default Home;