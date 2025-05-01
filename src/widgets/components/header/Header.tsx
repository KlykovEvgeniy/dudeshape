import { useEffect, useState } from "react";
import { Container } from "../container/Container";
import { Nav } from "../nav/Nav";
import { RightNav } from "../right-nav/rightNav";
import { useWindowSize } from "@uidotdev/usehooks";
import { Logo } from "../../../shared";
import Close from './assets/close.svg';
import './styles/Header.styled.scss';

export const Header = () => {
    const { width } = useWindowSize();
    const [isVis, setVis] = useState<boolean>(false);

    useEffect(() => {
        if (width > 768) {
            setVis(true)
        } else if(width <= 768) {
            setVis(false)
        }
    }, [width]);

    const handleClick = () => {
        const styles = document.body.style
        if(isVis){
            setVis(false);
            styles.overflowY = 'visible'
        }else{
            setVis(true);
            styles.overflowY = 'hidden'
        }
    };

    return (
        <header className="header">
            <Container>
                <div className="wrapper">
                    <Logo />
                    {isVis && <Nav />}
                    {width > 768 &&
                        <RightNav />
                    }
                    <button onClick={handleClick} className="close" type="button"><Close /></button>
                </div>
            </Container>
        </header>
    )
}