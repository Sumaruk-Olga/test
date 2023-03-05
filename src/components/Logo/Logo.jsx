import logo from '../../images/Logo.svg';
import { Wrapper } from './Logo.styled';

export const Logo = ()=>{
    return <Wrapper>
        <img src={logo} alt='logo' />
    </Wrapper>
}