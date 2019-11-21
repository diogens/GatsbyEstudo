import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />

        <S.ProfileAuthor>
          <h1>{title}</h1>

          <S.ProfilePosition>
            <p>{position}</p>
          </S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        <p>{description}</p>
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

/* const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            position
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    )}
  />
) */

export default Profile
