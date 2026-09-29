// app/layout.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}   {/* ← burası her sayfanın kendi içeriği, page.tsx'ten gelir */}
        <Footer />
      </body>
    </html>
  );
}