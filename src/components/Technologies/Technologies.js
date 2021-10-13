import React from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import { DiFirebase, DiPython} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Button } from './TechnologiesStyles';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a languages and technologies through developing Algorithms, building applications, and Machine Learning...
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experiece with Python, C, C++, React.js, Swift, Java, SQL, Lisp, Git, Bash, Latex
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            Experience with Kubernetes, Tensorflow, Emacs, VSCode, Microsoft Office, Jupyter Notebook
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider divider />
    <SectionTitle>Resume</SectionTitle>
    <List>
      <ListItem>
        <Document file = "../../Files/Resume_James_Guo_2021.pdf">
          <Page scale = "0.5" pageNumber ={1}>
          </Page>
        </Document>
      </ListItem>
      <ListItem>
      <Button href = "../../Files/Resume_James_Guo_2021.pdf">Download</Button>
      </ListItem>
    </List>
    <SectionDivider divider/>
  </Section>
);

export default Technologies;
