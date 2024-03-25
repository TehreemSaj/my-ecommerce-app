import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import HomeMainSection from './components/HomeMainSection';
import Footer from './components/Footer';
import Productpage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomeMainSection} />
          <Route path="/products" component={Productpage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
