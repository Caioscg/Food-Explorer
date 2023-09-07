import { Container, Logo, Form } from "./styles";

import logoHeader from "../../assets/logo-header.svg"

export function SignIn() {
    return(
        <Container>
            <Logo>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h2>Faça login</h2>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div className="senha">
                    <label htmlFor="senha">Senha</label>
                    <input type="text" id="senha" placeholder="No mínimo 6 caracteres"/>
                </div>
                <button>
                    Entrar
                </button>
                <a>
                    Criar uma conta
                </a>
            </Form>
        </Container>
    )
}