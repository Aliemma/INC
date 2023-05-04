import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"


function Layout({children}) {
  return (
    <>
       <Head>
        <title>Impact Nutrition Consult</title>
        <meta name="description" content='Impact your Health'/>
        <link rel="icon" href="/Image/INC Logo.svg" />
      </Head>
    
      <Navbar/> 
      <div >{children} </div>
      <Footer/>
   
    </>
  )
}

export default Layout
