import avatarLine from '../../images/avatar-line.svg';
import avatar from '../../images/Hansel.png';
import avatarCircle from '../../images/frame.png';
import { AvatarWrapper, Face, LineOne, LineTwo, Circle } from './Avatar.styled';
import { Img } from 'components/FoneImage/FoneImage.styled';

export const Avatar = () =>{
    return <AvatarWrapper>
        <LineOne> 
            <img src={avatarLine} alt='avatar line'/>
        </LineOne>
        <LineTwo> 
            <img src={avatarLine} alt='avatar line'/>
        </LineTwo>
        <Face> 
            <Img src={avatar} alt='avatar' />
        </Face>
        <Circle> 
            <img src={avatarCircle} alt='avatar outline'/>
        </Circle>
    </AvatarWrapper>
}