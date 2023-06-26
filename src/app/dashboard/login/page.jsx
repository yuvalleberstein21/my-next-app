"use client"
import React from "react";
import styles from './page.module.css';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Login = () => {

  const session = useSession();
  const router = useRouter()

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password });

  }

  return (


    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <Link href="/dashboard/register">Don't have an account? Register Here</Link>
        <button className={styles.button}>Login</button>
      </form>

      <button className={styles.button_google} onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
