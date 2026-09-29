"use client";

import { useState } from "react";

export default function KayitSayfasi() {
  const [isim, setIsim] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Kayıt denemesi:", isim, email, sifre);
  }

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      {/* Sol taraf — tanıtım */}
      <div
        style={{
          background: "linear-gradient(160deg, #1e1e2f 0%, #4f46e5 100%)",
          color: "white",
          padding: "80px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "0.95rem", opacity: 0.8, marginBottom: "12px" }}>
          🎓 Eğitmen Başvurusu
        </p>
        <h1 style={{ fontSize: "2.2rem", lineHeight: 1.25, marginBottom: "20px" }}>
          Bildiğini paylaş,<br />gelir elde et.
        </h1>
        <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: 1.7, marginBottom: "36px", maxWidth: "380px" }}>
          Binlerce öğrenciye ulaş, kendi kursunu oluştur, kendi hızında
          büyüt. Eğitmenlerimizin %70&apos;i ilk ayında ilk kazancını elde ediyor.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Kendi fiyatını sen belirle",
            "Video, PDF, quiz — istediğin formatta içerik",
            "Ödemeler her ay otomatik hesabına yatar",
          ].map((madde) => (
            <div key={madde} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "0.95rem" }}>{madde}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sağ taraf — form */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "360px", display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: "4px" }}>Hesabını oluştur</h2>
          <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "12px" }}>
            2 dakikada başvurunu tamamla.
          </p>

          <input
            type="text"
            placeholder="Ad Soyad"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "13px",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Başvuruyu Gönder
          </button>

          <p style={{ fontSize: "0.85rem", color: "#999", textAlign: "center", marginTop: "8px" }}>
            Zaten hesabın var mı?{" "}
            <a href="/giris" style={{ color: "#4f46e5", textDecoration: "none" }}>
              Giriş yap
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "0.95rem",
};