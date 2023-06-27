import icon from '../../images/icon-burger.png';
import { Wrapper, Img } from './Logo.styled';

export const Logo = () => {
  return (
    <Wrapper>
      <Img src={icon} alt="icon" width={100} />
    </Wrapper>
  )
};