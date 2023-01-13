import { useState } from 'react'
import Footer from './components/footer/Footer'
import MainBody from './components/main-section/MainBody'

function App() {
  return (
    <div className="flex flex-col justify-between h-screen bg-greenBg">
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
