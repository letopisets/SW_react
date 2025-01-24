
import './App.css'
import Header from './components/body/header.jsx'
import Content from './components/body/content.jsx'
import Footer from './components/body/footer.jsx'
import {navItems} from "./utils/contsants.js";
import {useState} from "react";
function App() {
    const [page, setPage] = useState(navItems[0]);

  return (
    <div className="container-fluid">
      <Header changePage={setPage} />
      <Content page={page} />
      <Footer/>
    </div>
  )
}

export default App
