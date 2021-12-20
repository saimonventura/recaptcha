import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Home() {
  const [key, setKey] = useState("");
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

        <input
          onChange={({ currentTarget: { value } }) => {
            setKey(value);
          }}
          type="text"
          placeholder="Public Key"
        />

        {key ? (
          <ReCAPTCHA
            onExpired={() => {
              setToken("");
            }}
            onChange={(token) => {
              navigator.clipboard.writeText(token);
              setToken(token);
              snackbarControl.show("Token copiado para o clipboard");
            }}
            sitekey={key}
          />
        ) : null}

        {token ? (
          <>
            <h2>token</h2>
            <p>{token}</p>
          </>
        ) : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
