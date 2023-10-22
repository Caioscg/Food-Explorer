import { Container, Form } from "./styles";

import { GoBack } from "../../../components/GoBack";
import { AdminHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/footer";
import { AddIngredients } from "../../../components/AddIngredients";
import { AdminMenu } from "../menu";

import { FiUpload } from "react-icons/fi"

import { api } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import PropagateLoader from "react-spinners/PropagateLoader";

export function EditMeal() {
    const navigate = useNavigate()
    const params = useParams()

    const [ loading, setLoading] = useState(false)

    const menuPage = useRef(null)

    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ category, setCategory ] = useState("")
    const [avatarFile, setAvatarFile] = useState("")
    const [avatarChange, setAvatarChange] = useState(0)

    const [ data, setData ] = useState({})
    
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

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
        setAvatarChange(1)
    }

    useEffect(() => {
        async function fetchMeals() {
            try {
                setLoading(true)
                const response = await api.get(`/meals/${params.id}`)
                
                const meal = response.data
                
                setName(meal.name)
                setDescription(meal.description)
                setCategory(meal.category)
                setPrice(meal.price)
                setIngredients(meal.ingredients.map((ing) => ing.name))
                setAvatarFile(meal.avatar)
                
                setData(meal)
                setLoading(false)
                
            } catch {
                if (error.response) {
                    alert(error.response.data.message)
                }
                else {
                    alert("Não foi possível cadastrar o prato.")
                }
            }
        }
        fetchMeals()
    }, [])

    async function updateMeal() {
        if (name == "") setName(data.name)

        if (description == "") setDescription(data.description)

        if (price == "") setPrice(data.price)

        if (isNaN(Number(price))) return alert("Dê um preço ao prato!")

        if (ingredients.length == 0) return alert("Adicione ingredientes ao prato!")

        if (newIngredient) return alert("Você tem um ingrediente no campo de adicionar não salvo! Clique para salvá-lo")

        setLoading(true)
        try {
            await api.put(`/meals/${params.id}`, {
                name,
                description,
                price,
                category,
                ingredients
            })

            if (avatarChange) {
                const fileUploadForm = new FormData() // criando arquivo
                fileUploadForm.append("avatar", avatarFile)  // adicionando no campo "avatar" a foto

                await api.patch(`/meals/avatar/${params.id}`, fileUploadForm)
            }
            setLoading(false)
            alert("Prato atualizado com sucesso!")
            
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

    async function deleteMeal() {
        const confirmation = window.confirm("Deseja realmente excluir o prato?")

        if (confirmation) {
            await api.delete(`/meals/${params.id}`)
            navigate("/")
        }
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
                            <h1>Editar prato</h1>
                
                            <Form>
                
                                <div className="first">
                                    <label className="normal image" htmlFor="food">Imagem do prato
                                        <p>
                                            <FiUpload size={24}/>
                                            Selecione imagem
                                        </p>
                                        <input type="file" id="food" onChange={handleAvatar}/>
                                    </label>
                                    <div className="nome normal">
                                        <label>Nome</label>
                                        <input type="text" placeholder={name == "" ? data.name : name} onChange={e => setName(e.target.value)}/>
                                    </div>
                                    <div className="categoria normal">
                                        <label>Categoria</label>
                                        <select value={category} onChange={e => setCategory(e.target.value)}>
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
                                        <input type="text" placeholder={price == "" ? data.price : price} onChange={e => setPrice(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="third normal">
                                        <label>Descrição</label>
                                        <textarea type="text" placeholder={description == "" ? data.description : description} onChange={e => setDescription(e.target.value)}/>
                                </div>
                                <div className="btns">
                                    <div className="excluir" onClick={deleteMeal}>Excluir prato</div>
                                    <div className="salvar" onClick={updateMeal}>Salvar alterações</div>
                                </div>
                            </Form>
                        </main>
                }
                
                    

            <Footer />
            
        </Container>
    )
}
