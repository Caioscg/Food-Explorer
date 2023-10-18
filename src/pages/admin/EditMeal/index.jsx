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

    const [newIngredient, setNewIngredient] = useState("")
    
    async function fetchMeals() {
        const response = await api.get(`/meals/${params.id}`)
        return response.data
    }

    function handleAddIngredients() {
        if (newIngredient) {
            setIngredients(prev => [...prev, newIngredient])
            setNewIngredient("")
        }
    }

    function handleRemoveIngredients(deleted) {
        setIngredients(prev => prev.filter(ing => ing !== deleted))
    }

    function handleAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)
    }

    useEffect(() => {
        const data = fetchMeals()
        
        const [ name, setName ] = useState(data.name)
        const [ description, setDescription ] = useState(data.descripton)
        const [ price, setPrice ] = useState(data.price)
        const [ category, setCategory ] = useState(data.category)
        const [ingredients, setIngredients] = useState([data.ingredients)
        const [avatarFile, setAvatarFile] = useState(data.avatar)
    }, [])

    async funcion updateMeal() {
        if (!name) setName(data.name)
        if (!description) setName(data.description)
        if (!price) setName(data.price)
        if (!category) setName(data.category)
        if (!ingredients) setIngredients(data.ingredients)
        if (!avatarFile) setAvatarFile(data.avatar)

        try {
            await api.put(`/meals/${params.id}`, {
                name,
                description,
                price,
                category,
                ingredients
            })

            const fileUploadForm = new FormData() // criando arquivo
            fileUploadForm.append("avatar", avatarFile)  // adicionando no campo "avatar" a foto

            await api.patch(`/meals/avatar/${params.id}`, fileUploadForm)

            alert("Prato atualizado com sucesso!")
            
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível cadastrar o prato.")
            }
        }
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
                            <input type="file" id="food" onChange(handleAvatar)/>
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
