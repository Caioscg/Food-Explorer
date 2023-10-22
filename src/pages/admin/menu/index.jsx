import { Container, Input } from "./styles";

import { FiX } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

import { Footer } from "../../../components/footer";
import { MenuOption } from "../../../components/MenuOption";

import { useAuth } from "../../../hooks/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AdminMenu({ onClick }) {
    const { signOut, searchForMeal } = useAuth()

    const [ search, setSearch ] = useState("")

    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    function handleNewMeal() {
        navigate("/add")
    }

    useEffect(() => {
        searchForMeal(search)
    }, [search])

    return(
        <Container>
            <header>
                <FiX size={24} onClick={onClick}/>
                <span>Menu</span>
            </header>
            <main>
                <Input>
                    <BsSearch size={19.5}/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => setSearch(e.target.value)}/>
                </Input>

                <div className="sections">
                    <MenuOption title="Novo Prato" onClick={handleNewMeal}/>
                    <MenuOption title="Sair" onClick={handleSignOut}/>
                </div>
            </main>
            <Footer />
        </Container>
    )
}