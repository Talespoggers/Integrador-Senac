import React, { useState } from "react";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import styles from "@/styles/register.module.css"
import Link from "next/link";

export default function Register() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        cPassword: "",
        userName: "",
        name: "",
    });

    function handleFormEdit(event: React.ChangeEvent<HTMLInputElement>, field: string) {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    }

    async function formSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (formData.password !== formData.cPassword) {
            alert("As senhas não correspondem");
            return;
        }
      
        try {
            const response = await fetch(`/api/user/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(formData),
            });
      
            const responseJson = await response.json();
            alert(`${responseJson.message}`);
      
            if (response.status === 200) {
                setCookie("authorization", responseJson.token);
                router.push(`/user/login`);
            }
        } catch (err) {
            console.log(err);
        }
      }
      

    return (
        
        
        <main className={styles.main}>
            <div className={styles.conteiner}>
                <h3 className={styles.h3}>Registre-se</h3>
                <br /><br />
                <form className={styles.form} onSubmit={formSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(event) => handleFormEdit(event, "email")} />
                        <br />
                        <br />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={(event) => handleFormEdit(event, "password")}
                    />
                    <br />
                    <br />

                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Confirmar Senha"
                        value={formData.cPassword}
                        onChange={(event) => handleFormEdit(event, "cPassword")}
                    />
                    <br />
                    <br />

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Nome de Usuario"
                        value={formData.userName}
                        onChange={(event) => handleFormEdit(event, "userName")}
                    /> 
                    <br />
                    <br />

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={(event) => handleFormEdit(event, "name")}
                    />
                    <br />
                    <br />

                    <button
                        className={styles.input1}
                        type="submit"
                    >Registrar</button>
                    <br />
                    <br />

                    <Link href={`/`}>Voltar</Link>

                </form>
            </div>


        </main>
    );
}
