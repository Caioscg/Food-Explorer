import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";

import { FiUpload } from "react-icons/fi"

import { useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export function AddMeal() {
    const navigate = useNavigate()

    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ category, setCategory ] = useState("")

    const [ingredients, setIngredients] = useState([]) // array de ing
    const [newIngredient, setNewIngredient] = useState("") // o nome do novo ing

    function handleAddIngredients() {
        if (newIngredient) {
            setIngredients(prev => [...prev, newIngredient])
            setNewIngredient("")
        }
    }

    function handleRemoveIngredients(deleted) {
        setIngredients(prev => prev.filter(ing => ing !== deleted))
    }

    async function handleNewMeal() {
        if (!name) return alert("Dê um nome ao prato!")

        if (!description) return alert("Dê uma descrição ao prato!")

        if (!price) return alert("Dê um preço ao prato!")

        if (!category) return alert("Dê uma categoria ao prato!")

        if (!ingredients) return alert("Adicione ingredientes ao prato!")

        try {
            api.post("/meals", {
                name,
                description,
                price,
                category,
                ingredients
            })
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível cadastrar o prato.")
            }
        }

        navigate("/")
    }

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
                            {
                                ingredients.map((ing, index) => (
                                    <AddIngredients
                                        key={String(index)}
                                        value={ing}
                                        onClick={() => handleRemoveIngredients(ing)}
                                    />
                                ))
                            }
                            <AddIngredients 
                                isNew 
                                placeholder="Adicionar"
                                onChange={e => setNewIngredient(e.target.value)}
                                value={newIngredient}
                                onClick={handleAddIngredients}
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
                <div className="button" onClick={handleNewMeal}>Salvar alterações</div>
                </Form>
            </main>

            <Footer />
        </Container>
    )
}