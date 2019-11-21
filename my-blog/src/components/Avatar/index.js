import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <S.AvartWrapper
      fluid={avatarImage.childImageSharp.fluid}
      className="foo"
      style={{ width: 60 }}
    />
  )
}

export default Avatar
