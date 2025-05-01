import './styles/rightNav.styled.scss';
import { Menu, Search } from '../../../features';

export const RightNav = () => {
    return (
        <div className="right-nav">
            <Search />
            <Menu />
        </div>
    )
}