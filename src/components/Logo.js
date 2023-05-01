import styled from "styled-components";
const Logo = () => {
  return <wrapper>erez Gadjets</wrapper>;
};
const wrapper = styled.h3`
  margin-buttom: 0;

  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
    font-weight: bold;
  }
`;
export default Logo;
