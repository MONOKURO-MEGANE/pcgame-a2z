import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from '@emotion/react'

export const Header = () => {
  const siteSummary = css`
    width: 100%;
    height: auto;
    text-align: right;
    background-color: #66ffaf;
    margin: auto;
    padding: 5px;
    font-size: clamp(.6rem, 1vw, .9rem);
    font-weight: normal;
  `
  const siteTitleContainer = css`
    position: relative;
    margin: 0;
    padding: 0;
    h2 {
      position: absolute;
      width: 100%;
      height: auto;
      margin: 0 auto;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      /* letter-spacing: 14px; */
      text-shadow: 0 20px 10px #40404080;
      font-size: clamp(4vmin, 8vw, 16vmax);
      font-weight: bold;
    }
  `
  return (
    <header>
      <h1 css={siteSummary}>ゲーム用パソコンの購入方法から、高画質ゲームに必要な各種パーツの解説やPCゲームを始めるなら知っておきたいゲーム配信サイトまで！</h1>
      <div css={siteTitleContainer}>
        <StaticImage style={{width:"100%",height:"auto",aspectRatio:"5/1"}} src="../images/header_image.png" alt="" />
        <h2>PCゲームのAtoZ</h2>
      </div>
    </header>
  )
}
