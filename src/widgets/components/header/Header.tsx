import { Container } from "../container/Container";
import Logo from './assets/Logo.svg';
import { Nav } from "../nav/Nav";
import './styles/Header.styled.scss';
import { RightNav } from "../right-nav/rightNav";

export const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="wrapper">
                    <Logo />
                    <Nav />
                    <RightNav />
                </div>
            </Container>
        </header>
    )
}