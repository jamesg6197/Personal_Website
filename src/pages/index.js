import Experiences from '../components/Experiences/Experiences';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
         <BgAnimation /> 
      </Section> 
      <Projects />
      <Experiences />
    </Layout>
  );
};

export default Home;
