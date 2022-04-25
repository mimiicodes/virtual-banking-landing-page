import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1 title="right?">Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button to="continue" smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get Started { hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
