import { Header } from './components/Header'
import Entry from './components/Entry'
import { Footer } from './components/Footer';
import data from './data'; 

const newdata = data.map((item) => (
    <Entry key={item.id}
    entry ={item}
    />
  )
)

function App() {

  return (
    <>
      <Header />
      <div className ="card-holder">
        {newdata}
      </div>
      <Footer />
    </>
  )
}

export default App

