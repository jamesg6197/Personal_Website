import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiReact} from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style = {{display : "flex", alignItems: "center", color:
      "#61DBFB", marginBottom: "20px"}}>
          <DiReact size = "3rem" /> <Span>James</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "/">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "/#Projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "/#Experiences">
          <NavLink>Experiences</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "Blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "About">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
          <SocialIcons href ="https://github.com/jamesg6197">
            <AiFillGithub size = "3rem"/>
          </SocialIcons>
        <SocialIcons href ="https://www.linkedin.com/in/jamesg6197/">
          <AiFillLinkedin size = "3rem"/>
        </SocialIcons>
        <SocialIcons href ="https://www.instagram.com/jamessguo/">
          <AiFillInstagram size = "3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
