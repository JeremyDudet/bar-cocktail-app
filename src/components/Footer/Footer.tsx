import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">crafted</SocialLogo>
          <WebsiteRights>jeremy dudet - developer © 2021</WebsiteRights>
          <SocialIcons>
            {/* <SocialIconLink href='/' target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink> */}
            {/* <SocialIconLink href='/' target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink> */}
            <SocialIconLink
              href="https://github.com/JeremyDudet"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            {/* <SocialIconLink href='/' target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink> */}
            {/* <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink> */}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
