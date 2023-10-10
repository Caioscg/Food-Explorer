import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";

import { FiUpload } from "react-icons/fi"

import { useState } from "react";

export function AddMeal() {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ category, setCategory ] = useState("")

    const [ingredients, setIngredients] = useState([]) // array de ing
    const [newIngredients, setNewIngredients] = useState("") // o nome do novo ing

    return(
        <Container>
            <AdminHeader />
            <main>

            <GoBack />
            <h1>Adicionar prato</h1>

            <Form>

                <div className="first">
                    <label className="normal image" htmlFor="food">Imagem do prato
                        <p>
                            <FiUpload size={24}/>
                            Selecione imagem
                        </p>
                        <input type="file" id="food"/>
                    </label>
                    <div className="nome normal">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder="Ex.: Salada Ceasar" 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="categoria normal">
                        <label>Categoria</label>
                        <select onChange={e => setCategory(e.target.value)}>
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
                        <input 
                            type="text" 
                            placeholder="R$ 00,00" 
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="third normal">
                        <label>Descrição</label>
                        <textarea 
                            type="text" 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                            onChange={e => setDescription(e.target.value)}
                        />
                </div>
                <button>Salvar alterações</button>
                </Form>
            </main>

            <Footer />
        </Container>
    )
}