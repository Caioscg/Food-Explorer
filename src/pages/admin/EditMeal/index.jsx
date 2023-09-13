import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";

import { FiUpload } from "react-icons/fi"

export function EditMeal() {
    return(
        <Container>
            <AdminHeader />
            <main>

            <GoBack />
            <h1>Editar prato</h1>

            <Form>


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
                        <input type="text" placeholder="Salada Ceasar"/>
                    </div>
                    <div className="categoria normal">
                        <label>Categoria</label>
                        <select>
                            <option>Refeição</option>
                            <option>Sobremesa</option>
                            <option>Bebida</option>
                        </select>
                    </div>
                </div>
                <div className="second">
                    <div className="ingredientes normal">
                        <label>Ingredientes</label>
                        <div className="add">
                            <AddIngredients value="Pão Naan"/>
                            <AddIngredients 
                                isNew 
                                placeholder="Adicionar"
                            />
                        </div>
                    </div>
                    <div className="preco normal">
                        <label>Preço</label>
                        <input type="text" placeholder="R$ 00,00"/>
                    </div>
                </div>
                <div className="third normal">
                        <label>Descrição</label>
                        <textarea type="text" placeholder="A Salada César é uma opção refrescante para o verão."/>
                </div>
                <div className="btns">
                    <button className="excluir">Excluir prato</button>
                    <button className="salvar">Salvar alterações</button>
                </div>
                </Form>
            </main>

            <Footer />
        </Container>
    )
}