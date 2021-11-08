import styled from "styled-components";

const CardStyled = styled.article `
   padding: 1rem;
  background-color: snow;
  box-shadow: 3px 3px 10px lightgray;
  text-align: left;
    
`
const IconStyled = styled.div`
  color: white;
  background-color: #138ee5;
  padding: 0.4rem 1.3rem;
  font-size: 3rem;
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    background-color: #138ee5;
    height: 10px;
    width: 10px;
    
    bottom: -9px;
    transform: rotate(45deg) translateX(-50%);
    left: 50%
  }

`
const ServiceTitle = styled.h3 `
  color: #2b2bb2;
  margin: 0.8rem 0;
`
const ServiceText = styled.p `
color: gray;
`

const ServiceLink = styled.a`
  color: #2b2bb2;
  text-decoration: none;
`


function ServiceCard() {
    return (<CardStyled>
            <IconStyled>
                <i className="fa fa-id-badge" aria-hidden="true"></i>
            </IconStyled>
            <ServiceTitle>UI & UX Design</ServiceTitle>
            <ServiceText>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</ServiceText>
            <ServiceLink href='/'>Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></ServiceLink>

        </CardStyled>
    );
}

export default ServiceCard;
