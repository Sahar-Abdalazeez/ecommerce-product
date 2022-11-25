import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png'

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px; 
  margin-bottom: 70px; 
  border-bottom: solid 1px hsl(220, 14%, 75%); 
`;

const LeftContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center; 
`;

const Logo = styled.img`
  width:150px;
  height: 30px;
  margin-right: 70px;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  align-items:center ;
  justify-content: space-between;
  width: 40%;

`;

const MenuItem = styled.a`
  color: gray;
  font-size: 16px;
  text-decoration: none;
  margin-right:8px;
`;

const RightContainer = styled.div`
  display: flex;
  width: 10%;
  justify-content:center ;
  align-items: center;
  margin-left: auto;
  
`;

const CartIcon = styled.img`
  width:24px;
  height: 24px;
    margin-right: 20px;

`;

const Avatar = styled.img`
  width:40px;
  height: 40px;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <Logo src={logo} />
                <MenuItemsContainer>
                    <MenuItem href='#'>Collection</MenuItem>
                    <MenuItem href='#'>Men</MenuItem>
                    <MenuItem href='#'>Women</MenuItem>
                    <MenuItem href='#'>About</MenuItem>
                    <MenuItem href='#'>Contact</MenuItem>

                </MenuItemsContainer>
            </LeftContainer>

            <RightContainer>
                <CartIcon src={cart} />
                <Avatar src={avatar} />
            </RightContainer>
        </HeaderContainer>
    )
}