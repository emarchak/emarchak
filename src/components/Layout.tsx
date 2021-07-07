import React from "react"
import Footer from "./Footer"
import { layoutWrapper } from './scss/Layout.module.scss'


type LayoutProps = React.PropsWithChildren<{
  hideFooter?: boolean
}>

const Layout = ({ hideFooter, children }: LayoutProps) => {
  return (
    <>
      <div className={layoutWrapper}>
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer />}
    </>
  )
}

export default Layout
