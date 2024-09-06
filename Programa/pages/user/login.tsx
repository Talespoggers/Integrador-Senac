import {useState} from "react";
import Link from "next/link";
import  styles  from "@/styles/login.module.css";
import { setCookie , getCookie } from "cookies-next";
import { useRouter } from "next/router";


export default function login(){
    const router = useRouter();


    const [formData , setFormData] = useState({

        email :"",
        password: ""
    });

    function handleFormeEdit(event:any , field:string){
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    }

    async function formSubmit(event:any){
        event.preventDefault();
        try{
            const response = await fetch(`/api/user/login` , {
                method: 'POST',
                headers : {'Content-type' : 'application/json' },
                body : JSON.stringify(formData)
            });

            const responseJson = await response.json();

            alert(` ${responseJson.message} `)


            if( response.status== 200){
                setCookie('authorization' , responseJson.token);
                router.push(`/`);
            }
            
        }

        catch(err){
            console.log(err)

        }
    }

    return(
        <main>
            <div className={styles.conteiner}>
                <h1 className={styles.h1}>LOGIN</h1>
                <form >
                    <input className={styles.input} type="email" placeholder="Email"/>
                    <br />
                    <br />

                    <input className={styles.input}  type="password" placeholder="Senha"/>
                    <br />
                    <br />

                    <button className={styles.input1}  type="submit">Entrar</button>
                    <br />

                </form>
            </div>
        </main>
    )
}

