import styled from "styled-components";
import cart from '../assets/images/icon-white-cart.svg';

const Conatiner = styled.button`
display : flex;
flex: 1;
width: 100%;
height: 50px;
border-radius: 10px;
justify-content: center;
align-items: center;
background-color:  hsl(26, 100%, 55%) ;
`;

const CartIcon = styled.img`
  margin-right: 15px;
`;

const ButtonText = styled.div`
  color: white;
  font-size: 16px;
  font-family: 'Bold';

`;


export const AddToCartButton = ({ style }) => {
  return (
    <Conatiner style={style}>
      <CartIcon src={cart} />
      <ButtonText>Add To Cart</ButtonText>
    </Conatiner >
  )

}