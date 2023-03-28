import React from 'react';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            SAVANT
          </SocialLogo>
          <WebsiteRights>NEED GPU FOR KJSCE HACK 7.0 </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;