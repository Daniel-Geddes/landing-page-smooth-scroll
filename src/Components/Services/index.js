import React from 'react';
import Icon1 from '../../Images/svg-4.svg';
import Icon2 from '../../Images/svg-5.svg';
import Icon3 from '../../Images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP 
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id = 'services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
