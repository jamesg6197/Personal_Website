import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {Section} from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section nopadding id = "Footer">
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Phone </LinkTitle>
          <LinkItem href = "tel:573-818-4468">(573)-818-4468</LinkItem>
        
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href = "mailto:jamesg6197@gmail.com">jamesg6197@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
    </Section>
  );
};

export default Footer;
