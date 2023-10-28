"use client"
import { useState } from "react";

export default function LoginUsers() {
    //Mensagem de status
    const [msg, setMsg] = useState("");

    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })
    //preenchimento dos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({...usuario,[name]:value})
    }
    //envio das informações
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/base/base-user-api", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            if(response.ok){
                const result = await response.json();
                console.log(result.status)
                if(result.status == "ok"){
                    setMsg("Login efetuado com sucesso!")
                    setTimeout(() => {
                        setMsg("");
                    }, 5000);
                } else {
                    setMsg("Login ou senha incorretos")
                    setTimeout(() => {
                        setMsg("");
                    }, 5000); 
                }
            }
            console.log(users);
        }catch(error){
            console.log(error);
        }
    }
    //Recuperar o usuário que está em nossa base json.
    

  return (
    <div>
        <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>
        <h2 className="bg-red-300 text-red-700 text-center text-lg">{msg}</h2>
        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Usuário:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}