import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";

import { FiUpload } from "react-icons/fi"

import { api } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function EditMeal() {
    const navigate = useNavigate()
    const params = useParams()

    async function fetchMeals() {
        const response = await api.get(`/meals/${params.id}`)
        return response.data
    }

    useEffect(() => {
        const data = fetchMeals()
        const [ name, setName ] = useState(data.name)
        const [ description, setDescription ] = useState(data.descripton)
        const [ price, setPrice ] = useState(data.price)
        const [ category, setCategory ] = useState(data.category)
    }, [])

    async funcion updateMeal() {
        await api.put(`/meals/${params.id}`, {
            name,
            description,
            price,
            category
        })
    }

    return(
        <Container>
            <AdminHeader />
            <main>

            <GoBack />
            <h1>Editar prato</h1>

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
                        <input type="text" placeholder={name} onChange(e => setName(e.target.value))/>
                    </div>
                    <div className="categoria normal">
                        <label>Categoria</label>
                        <select value={category}>
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
                        <input type="text" placeholder={price} onChange(e => setPrice(e.target.value))/>
                    </div>
                </div>
                <div className="third normal">
                        <label>Descrição</label>
                        <textarea type="text" placeholder={description} onChange(e => setPrice(e.target.value))/>
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
