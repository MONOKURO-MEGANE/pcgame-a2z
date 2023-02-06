import React from "react"
import { css } from '@emotion/react'

export const Footer = () => {
  const copyright = css`
    background-color: #ff632a;
    p {
      width: fit-content;
      height: auto;
      margin: 0 auto;
      padding: 0.3rem;
      font-size: clamp(.6rem, 1.6vw, 1.4rem);
      font-weight: normal;
    }
  `
  return (
    <footer>
      <div css={copyright}>
        <p>&copy; { new Date().getFullYear() } MONOKURO-MEGANE All Rights Reserved.</p>
      </div>
    </footer>
  )
}
