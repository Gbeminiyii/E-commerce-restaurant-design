import React from 'react'
import { FeatureContainer, FeatureContainerButton, FeatureContainerDesc, FeatureContainerHead, FeatureContainerText } from './FeatureComponents'

const Feature = () => {
  return (
    <FeatureContainer>
        <FeatureContainerText>
            <FeatureContainerHead>
                Pizza of the Day
            </FeatureContainerHead>
            <FeatureContainerDesc>
            Truffle alfredo topped with 24 carat gold dust.
            </FeatureContainerDesc>
            <FeatureContainerButton>
                Order Now
            </FeatureContainerButton>
        </FeatureContainerText>
    </FeatureContainer>
  )
}

export default Feature