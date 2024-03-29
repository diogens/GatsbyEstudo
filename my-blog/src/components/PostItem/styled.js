import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  color: #8899a6;
  display: flex;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`
export const PostItemWrapper = styled.section`
  align-items: "center";
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`
export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : "#1fa1f2")};
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`
export const PostItemDate = styled.time`
  font-size: 0.9rem;
`
export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p``
