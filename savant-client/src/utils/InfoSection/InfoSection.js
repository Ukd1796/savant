import React, {useEffect,useState} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate,Link } from 'react-router-dom';

 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const [active,setActive] = useState(false);
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
        if(user) {
          setActive(true);
        } 
      },[user]);
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            {
                            !active ?
                            <Button big fontBig primary={primary} onClick={handleGoogleSignIn}>
                                Get Started
                            </Button>
                            :
                            <Link to="/workspace">
                            <Button big fontBig primary={primary}>
                                Start Researching
                            </Button>
                            </Link>
                            }
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;