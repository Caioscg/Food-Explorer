import { Container, Input } from "./styles";

import { FiX } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

import { Footer } from "../../../components/footer";
import { MenuOption } from "../../../components/MenuOption";

export function UserMenu() {
    return(
        <Container>
            <header>
                <FiX size={24}/>
                <span>Menu</span>
            </header>
            <main>
                <Input>
                    <BsSearch size={19.5}/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes"/>
                </Input>

                <div className="sections">
                    <MenuOption title="Sair"/>
                </div>
            </main>
            <Footer />
        </Container>
    )
}