import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";

export function AddMeal() {
    return(
        <Container>
            <AdminHeader />

            <Form>

                <GoBack />

                <h1>Adicionar prato</h1>
                <div className="first">
                    <div className="image">
                        <label>Imagem do prato</label>
                        <input type="file" />
                    </div>
                    <div className="name">
                        <label>Nome</label>
                        <input type="text" placeholder="Ex.: Salada Ceasar"/>
                    </div>
                    <div className="categoria">
                        <label>Categoria</label>
                        <input type="text" placeholder="Refeição"/>
                    </div>
                </div>
                <div className="second">
                    <div className="ingredientes">
                        <label>Ingredientes</label>
                        <input type="text" placeholder="Refeição"/>
                    </div>
                    <div className="preco">
                        <label>Preço</label>
                        <input type="text" placeholder="R$ 00,00"/>
                    </div>
                </div>
                <div className="third">
                        <label>Descrição</label>
                        <textarea type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                </div>
                <button>Salvar alterações</button>
            </Form>

            <Footer />
        </Container>
    )
}