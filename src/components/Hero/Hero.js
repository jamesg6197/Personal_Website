import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm James...
      </SectionTitle>
      <SectionText>
          I am a Student, Software Engineer, and Algorithms Enthusiast. I love building tangible applications that were once just mere ideas.
      </SectionText>
      <Button onClick = {() => window.location = '#Footer'}> Get in Contact </Button>
    </LeftSection>
  </Section>
);

export default Hero;