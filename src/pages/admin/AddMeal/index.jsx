import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";
import { AdminMenu } from "../menu";

import { FiUpload } from "react-icons/fi"

import { useState, useRef } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

import PropagateLoader from "react-spinners/PropagateLoader";

export function AddMeal() {
    const navigate = useNavigate()

    const [ loading, setLoading] = useState(false)

    const menuPage = useRef(null)

    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ category, setCategory ] = useState("Refeição")

    const [ingredients, setIngredients] = useState([]) // array de ing
    const [newIngredient, setNewIngredient] = useState("") // o nome do novo ing

    const [avatarFile, setAvatarFile] = useState(null)

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

    async function handleNewMeal() {

        if (!name) return alert("Dê um nome ao prato!")

        if (!description) return alert("Dê uma descrição ao prato!")

        if (!price || isNaN(Number(price))) return alert("Dê um preço ao prato!")

        if (ingredients.length == 0) return alert("Adicione ingredientes ao prato!")

        if (newIngredient) return alert("Você tem um ingrediente no campo de adicionar não salvo! Clique para salvá-lo")

        if (!avatarFile) return alert("Adicione uma foto ao prato!")

        setLoading(true)

        try {
            await api.post("/meals", {
                name,
                category,
                description,
                price,
                ingredients
            })

            const response = await api.get(`/meals?name=${name}`)
            
            const meal_id = response.data[0].id
            
            const fileUploadForm = new FormData() // criando arquivo
            fileUploadForm.append("avatar", avatarFile)  // adicionando no campo "avatar" a foto

            await api.patch(`/meals/avatar/${meal_id}`, fileUploadForm)

            setLoading(true)

            alert("Prato criado com sucesso!")

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

    function openMenu() {
        menuPage.current.id="visible"
    }

    function closeMenu() {
        menuPage.current.id="not-visible"
    }

    return(
        <Container>
            <AdminHeader onClick={openMenu}/>
            <div className="mob" ref={menuPage}>
                <AdminMenu onClick={closeMenu}/>
            </div>

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

                    <GoBack />
                    <h1>Adicionar prato</h1>

                    <Form>

                        <div className="first">
                            <label className="normal image" htmlFor="food">Imagem do prato
                                <p>
                                    <FiUpload size={24}/>
                                    Selecione imagem
                                </p>
                                <input 
                                    type="file" 
                                    id="food"
                                    onChange={handleAvatar}
                                />
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
            }

            <Footer />
        </Container>
    )
}
