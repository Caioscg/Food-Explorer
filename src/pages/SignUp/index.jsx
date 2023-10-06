import { Container, Logo, Form } from "./styles";

import { Link } from "react-router-dom";

import logoHeader from "../../assets/logo-header.svg"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        console.log(name)

        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
            <Logo>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form className="scale-up-center">
                <h2>Crie sua conta</h2>
                <div className="name">
                    <label htmlFor="name">Seu nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Exemplo: Maria da Silva" 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="senha">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="createAccount" onClick={handleSignUp}>
                    Criar conta
                </div>
                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}