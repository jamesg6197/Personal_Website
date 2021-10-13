import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText, SubSectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, FlexContainer, Img } from './ExperiencesStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Experiences = () => (
  <Section nopadding id = "Experiences">
  <SectionTitle main>Experiences</SectionTitle>
    <SectionText> I've had work experience in the E-Commerce, Research, and Aerospace Industries...</SectionText>
    <FlexContainer> 
      <Img src = '/images/iherb.png'/>
      <div>
        <SubSectionTitle>iHerb, LLC - Machine Learning Engineer</SubSectionTitle>
        <SectionText> Optimizing Tensorflow Models, developing internal packages, building ML Platform </SectionText>
      </div>
    </FlexContainer>
    <FlexContainer> 
      <Img src = '/images/ucla.png' />
      <div>
      <SubSectionTitle>UCLA Anderson School of Management - Research Assistant</SubSectionTitle>
      <SectionText> Implementing university political ideology algorithms, FEC Data Analysis and Cleaning, Basic ML and Pandas </SectionText>
      </div>
    </FlexContainer>
    <FlexContainer>
    <Img src = '/images/boeing.png' />
      <div>
        <SubSectionTitle>Boeing - Software Engineer</SubSectionTitle>
        <SectionText> Docker, Building Project Management Systems, Satellites </SectionText>
      </div>
    </FlexContainer>
    <SectionDivider />
  </Section>
);

export default Experiences;
