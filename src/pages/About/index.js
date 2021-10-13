import React from 'react';
import { Layout } from '../../layout/Layout';
import { Section, SectionTitle, SectionDivider} from '../../styles/GlobalComponents';
import {Img, FlexContainer} from "./styles.js";
import Technologies from "../../components/Technologies/Technologies";
const About = () => {
    return (
        <Layout>
            <Section nopadding>
                <FlexContainer>
                    <div>
                        <SectionTitle main>About Me</SectionTitle>
                        <Img src = "../images/James_Guo.jpg"/>
                    </div>
                    
                    <Technologies />
                </FlexContainer>
            </Section>
        </Layout>
    );
};

export default About;