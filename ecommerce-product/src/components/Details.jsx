import styled from 'styled-components';
import { Counter } from '../components/Counter';
import { AddToCartButton } from '../components/AddToCartButton';

const Container = styled.div`
  /* background-color: lightblue; */
  width: 50%;
  padding: 100px;
`;

const Company = styled.div`
  color: hsl(26, 100%, 55%);
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align:left ;
  font-family: 'Bold';
`;

const Title = styled.div`
  font-family: 'Bold';
  font-size: 40px;
  margin-bottom: 30px;
  text-transform: capitalize;
  text-align:left ;
  font-weight: 700;
  width: 84%;

`;

const Description = styled.div`
  color: hsl(219, 9%, 45%);
  text-align:left;
  width: 90%;
  font-size: 18px;
  font-family: 'Medium';
  line-height: 1.5;

`;

const Price = styled.div`
  text-align:left ;
  font-family: 'Bold';
  margin-top: 20px;
  font-size: 32px;
`;

const OldPrice = styled.del`
  text-align:right;
  font-family: 'Bold';
  margin-top: 10px;
  font-size: 20px;
  color: hsl(220, 14%, 75%);
  display: flex;
  margin-bottom: 40px;
`;

const CounterButtonContainer = styled.div`
  display: flex;
`;

//TODO: right format for the old price  
export const Details = ({ title, company, description, price, oldPrice }) => {
  return (
    <Container>
      <Company>{company}</Company>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>${price}</Price>
      <OldPrice>${oldPrice}</OldPrice>
      <CounterButtonContainer>
        <Counter />
        <AddToCartButton style={{ marginLeft: 20 }} />
      </CounterButtonContainer>
    </Container>
  )
}