import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}