
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LayOut from './components/LayOut'

function App() {
  return (
    <div className='pt-100px lg:pt-9vh'>
      <Header />
      <div className='container-box overflow-hidden'>
        <LayOut />
      </div>
      <Footer />
    </div>
  )
}

export default App
