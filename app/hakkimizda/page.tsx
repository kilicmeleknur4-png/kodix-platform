import Link from "next/link";
import styles from "./hakkimizda.module.css";

const terimler = ["</>", "{ }", "git push", "npm run dev", "API", "const x = 1;", "<div />"];

const teknolojiler = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Python", "Git", "SQL", "Node.js", "API",
];
const serit = [...teknolojiler, ...teknolojiler];

const kodSatirlari = [1, 2, 3, 4, 5, 6, 7];

export default function HakkimizdaSayfasi() {
  return (
    <main className={styles.sayfa}>
      <div className={styles.izgara}></div>
      <span className={`${styles.isik} ${styles.isik1}`}></span>
      <span className={`${styles.isik} ${styles.isik2}`}></span>

      <div className={styles.terimler} aria-hidden="true">
        {terimler.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className={styles.icerik}>
        <section className={styles.hero}>
          <div>
            <h1 className={styles.baslik}>Hakkımızda</h1>
            <span className={styles.yazan}>$ npm run ogren</span>
            <p className={styles.kisa}>
              Kod yazmayı, tasarlamayı ve üretmeyi herkes için erişilebilir kılıyoruz.
            </p>
          </div>

          <div className={styles.laptop} aria-hidden="true">
            <div className={styles.ekran}>
              <div className={styles.noktalar}>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className={styles.kodlar}>
                {kodSatirlari.map((n) => (
                  <div key={n}></div>
                ))}
              </div>
              <div className={styles.imlecKutu}></div>
            </div>
            <div className={styles.taban}></div>
          </div>
        </section>

        <section className={styles.terminal}>
          <div className={styles.terminalBas}>
            <i></i>
            <i></i>
            <i></i>
            <span>hakkimizda.txt</span>
          </div>
          <div className={styles.terminalIc}>
            <div className={`${styles.komut} ${styles.s1}`}>$ cat kimiz.txt</div>
            <p className={`${styles.metin} ${styles.s2}`}>
              Kodix, yazılım ve teknoloji öğrenmek isteyenlerle
               bilgisini paylaşmak isteyen eğitmenleri buluşturan bir online eğitim 
               platformudur. Amacımız, herkesin kendi hızında, kendi alanında yeni
                beceriler kazanabileceği erişilebilir bir öğrenme ortamı sunmaktır.
            </p>
            <div className={`${styles.komut} ${styles.s3}`}>$ cat nasil.txt</div>
            <p className={`${styles.metin} ${styles.s4}`}>
              Eğitmenlerimiz kendi kurslarını oluşturur, öğrenciler diledikleri kursa
              kayıt olur ve öğrendiklerini gerçek beceriye dönüştürür.
            </p>
          </div>
        </section>

        <div className={styles.serit} aria-hidden="true">
          <div className={styles.seritIc}>
            {serit.map((t, i) => (
              <span key={i} className={styles.chip}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <section className={styles.sayilar}>
          <div className={styles.sayiKart}>
            <span className={styles.sayi}>100+</span>
            <span className={styles.sayiEtiket}>Kurs</span>
          </div>
          <div className={styles.sayiKart}>
            <span className={styles.sayi}>50+</span>
            <span className={styles.sayiEtiket}>Eğitmen</span>
          </div>
          <div className={styles.sayiKart}>
            <span className={styles.sayi}>5000+</span>
            <span className={styles.sayiEtiket}>Öğrenci</span>
          </div>
        </section>

        <h2 className={styles.baslikKucuk}>Nasıl Çalışır?</h2>
        <section className={styles.adimlar}>
          <div className={styles.adim}>
            <span className={styles.adimIkon}>💻</span>
            <h3>Kursunu Seç</h3>
            <p>İlgini çeken konuyu kurslar arasından bul.</p>
          </div>
          <div className={styles.adim}>
            <span className={styles.adimIkon}>⚙️</span>
            <h3>Kodla ve Dene</h3>
            <p>Kendi hızında ilerle, öğrendiğini hemen uygula.</p>
          </div>
          <div className={styles.adim}>
            <span className={styles.adimIkon}>🚀</span>
            <h3>Projeni Yayınla</h3>
            <p>Öğrendiklerini gerçek projelere dönüştür.</p>
          </div>
        </section>

        <div className={styles.butonAlani}>
          <Link href="/kurslar" className={styles.buton}>
            &gt; kurslara_git()
          </Link>
        </div>
      </div>
    </main>
  );
}