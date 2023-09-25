import { Container, Logo, Form } from "./styles";

import { Link } from "react-router-dom";

import logoHeader from "../../assets/logo-header.svg"

export function SignUp() {
    return(
        <Container>
            <Logo>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h2>Crie sua conta</h2>
                <div className="name">
                    <label htmlFor="name">Seu nome</label>
                    <input type="text" id="name" placeholder="Exemplo: Maria da Silva"/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div className="senha">
                    <label htmlFor="senha">Senha</label>
                    <input type="text" id="senha" placeholder="No mínimo 6 caracteres"/>
                </div>
                <button>
                    Criar conta
                </button>
                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}