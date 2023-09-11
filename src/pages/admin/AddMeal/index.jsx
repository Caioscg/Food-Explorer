import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";

import { FiUpload } from "react-icons/fi"

export function AddMeal() {
    return(
        <Container>
            <AdminHeader />

            <Form>

                <GoBack />

                <h1>Adicionar prato</h1>
                <div className="first">
                    <label className="normal" htmlFor="food">Imagem do prato
                        <p>
                            <FiUpload size={24}/>
                            Selecione imagem
                        </p>
                        <input type="file" id="food"/>
                    </label>
                    <div className="nome normal">
                        <label>Nome</label>
                        <input type="text" placeholder="Ex.: Salada Ceasar"/>
                    </div>
                    <div className="categoria normal">
                        <label>Categoria</label>
                        <input type="text" placeholder="Refeição"/>
                    </div>
                </div>
                <div className="second">
                    <div className="ingredientes normal">
                        <label>Ingredientes</label>
                        <input type="text" placeholder="Refeição"/>
                    </div>
                    <div className="preco normal">
                        <label>Preço</label>
                        <input type="text" placeholder="R$ 00,00"/>
                    </div>
                </div>
                <div className="third normal">
                        <label>Descrição</label>
                        <textarea type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                </div>
                <button>Salvar alterações</button>
            </Form>

            <Footer />
        </Container>
    )
}