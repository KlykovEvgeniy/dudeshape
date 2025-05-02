import { Container } from '../container/Container'
import chair from './assets/chair.jpg';
import { Button } from '../../../shared';
import './styles/Hero.styled.scss';

export const Hero = () => {
    return (
        <section className='hero'>
            <Container>
                <div className="wrapper-hero">
                <img src={chair} alt="chair" />
                    <div className="hero__main">
                        <h1 className='title'>We Help You Make Modern Furniture</h1>
                        <p className="hero__text">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                        <Button text='Explore More' colorBg='white' color='#154444' />
                    </div>
                </div>
            </Container>
        </section>
    )
}