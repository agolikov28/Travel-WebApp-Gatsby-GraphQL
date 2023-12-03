import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"

const Images = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
        
    `);
  
  return (
    <ImageContainer>
      <h1>Our Popular Destinations</h1>
      <ImageGrid>
      {data.allFile.edges.map((image, key) => {
        <DestImg
        classname='image-item'
        fluid={image.node.childImageSharp.fluid}
        
        />

      })}
      </ImageGrid>
    </ImageContainer>

  )
}

export default Images

const ImageContainer = styled.div `
  
`
const ImageGrid = styled.div `
  
`
const DestImg = styled(GatsbyImage) `
  
`

