import React from 'react';
import {
    FaFacebook, 
    FaTwitter, 
    FaLinkedin , 
    FaStackOverflow, 
    FaInstagram
} from 'react-icons/fa'
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
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    WebSiteRights

} from './footer.element'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    join our exclusive membership to receive
                    the letest news and trends .
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder='Your Email'/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>  
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How to Work it</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destination</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                        <FooterLink to='/'>Address</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Videos</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Stack Overflow</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' >
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebSiteRights>ULTRA &copy; 2022</WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' area-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' area-label='LinkedIn'>
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' area-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' area-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' area-label='Stack-Overflow'>
                            <FaStackOverflow/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;