import { Container, Logo, Form } from "./styles";

import { Link } from "react-router-dom"

import logoHeader from "../../assets/logo-header.svg"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import PropagateLoader from "react-spinners/PropagateLoader";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [ loading, setLoading ] = useState(false)

    const { signIn } = useAuth()

    function handleSignIn() {
        setLoading(true)

        signIn({ email, password })

        setLoading(false)
    }

    return(
        <Container>
            {   
                loading ? <PropagateLoader
                            color={"#065E7C"}
                            loading={loading}
                            size={25}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className="spinner"
                        />
                :
                <main>
                    <Logo>
                        <img src={logoHeader} alt="Logo Food Explorer" />
                        <h1>food explorer</h1>
                    </Logo>
                    <Form className="scale-up-center">
                        <h2>Faça login</h2>
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
                        <div onClick={handleSignIn} className="login">
                            Entrar
                        </div>
                        <Link to="/register">
                            Criar uma conta
                        </Link>
                    </Form>
                </main>
            }
            
        </Container>
    )
}