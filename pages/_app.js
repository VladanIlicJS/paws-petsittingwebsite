import { AuthContextProvider } from '../components/context/AuthContext'
import Navbar from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
    
    <AuthContextProvider>

      <Navbar/>
      <Component {...pageProps} />
      
    </AuthContextProvider>
    </>
  ) 
 
}

export default MyApp
