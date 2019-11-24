import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completUrl = `https://johndow.com.br${url}`
  return (
    <S.CommentWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="rhalyny"
        identifier={completUrl}
        title={title}
        url={completUrl}
      />
    </S.CommentWrapper>
  )
}

Comment.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
