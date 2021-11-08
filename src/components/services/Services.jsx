import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const Section = styled.section`
  max-width: 800px;
  margin: 3% auto;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
  'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const TitleTop = styled.h4`
  text-transform: uppercase;
  color: #271de8;
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  max-width: 650px;
  margin: 0 auto 1.5rem ;
`;
const CardContainer = styled.div`
display: flex;
  gap: 1rem;
`
function Services() {
    return (
        <Section>
            <TitleTop>Services</TitleTop>
            <MainTitle>
                This is My Expertise, The Services I'll Provide My Clients
            </MainTitle>
            <CardContainer className='card-container'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </CardContainer>
        </Section>
    );
}

export default Services;
