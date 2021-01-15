import React from 'react'
import { // we style and define the tags in the elements.js, then we arrange them here. 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle,
  ImgWrapper,
  Img,
  MainButton
} from './InfoSection.elements'
import { Container } from '../../globalStyles'
import { Link } from 'react-router-dom'


const InfoSection = ({ 
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  lightText,
  primary,
  start,
  img,
  alt
 }) => {
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
                <Link to='/browse'>
                  <MainButton big fontBig primary={primary}>
                    {buttonLabel}
                  </MainButton>
                </Link>
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

export default InfoSection
