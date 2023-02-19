import React from "react"
import { Meta } from "../components/meta"
import { Layout } from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <Meta pageTitle="トップページ" pageDesc="PCゲームを始めるために必要なパーツを具体的に扱うとともに、入門者や初心者にどのパーツがPCゲームを楽しむ上で何故必要なのかを簡単に紹介している。" />
      <Layout>

      </Layout>
    </React.Fragment>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
