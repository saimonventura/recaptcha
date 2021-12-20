import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Recaptcha</title>
        <meta name="description" content="Recaptcha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Recaptcha</h1>

        <ReCAPTCHA
          onExpired={() => {
            setToken("");
          }}
          onChange={(token) => {
            navigator.clipboard.writeText(token);
            setToken(token);
            alert("Token copiado para o clipboard");
          }}
          sitekey={"6LcwawIaAAAAAHmTEOLMqjIO0lEIEjV1lwSajYqt"}
        />

        {token ? (
          <>
            <h2>token</h2>
            <p>{token}</p>
          </>
        ) : null}
      </main>
    </div>
  );
}
