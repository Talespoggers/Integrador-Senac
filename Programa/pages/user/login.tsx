import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { register } from "module";


export default function login() {
    const router = useRouter();


    const [formData, setFormData] = useState({

        email: "",
        password: ""
    });

    function handleFormeEdit(event: any, field: string) {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    }

    async function formSubmit(event: any) {
        event.preventDefault();
        try {
            const response = await fetch(`/api/user/login`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const responseJson = await response.json();

            alert(` ${responseJson.message} `)


            if (response.status == 200) {
                setCookie('authorization', responseJson.token);
                router.push(`/`);
            }

        }

        catch (err) {
            console.log(err)

        }
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.e}>e</h1>
            <div className={styles.conteiner}>
                <h1 className={styles.login}>LOGIN</h1>
                <form >
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(event) => handleFormeEdit(event, "email")}
                    />
                    <br />
                    <br />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={(event) => handleFormeEdit(event, "password")}
                    />
                    <br />
                    <br />


                    <button className={styles.entrar} type="submit">Entrar</button>
                    <br />
                    <br />

                    <Link className={styles.link} href={`/user/register`}> Registrar-se</Link>

                </form>
            </div>
        </main>
    )
}

