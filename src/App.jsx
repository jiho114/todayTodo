import "./App.css";
import './scss/style.scss'
import 'antd/dist/antd.css';

import { RecommendProvider } from "./context/Recommend";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer'

function App() {
  return (
    <RecommendProvider>
      <Header />
      <Main />
      <Footer/>
    </RecommendProvider>
  );
}

export default App;
