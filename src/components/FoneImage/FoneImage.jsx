import foneImg from '../../images/fone-picture.png';
import { Img, Wrapper } from './FoneImage.styled';

export const FoneImage = ()=>{
    return <Wrapper>
    <Img src={foneImg} alt="tweet card background"/>
    </Wrapper>
}