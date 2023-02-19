import React from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
        <main>{ children }</main>
      <Footer />
    </React.Fragment>
  )
}
