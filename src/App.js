import { Component } from "react";
import Navbar from './components/Navbar';
import Card from './components/Card';
import '../src/App.css';

import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";

class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <Navbar />
          <div className="hola">
            
              <Card width={11} title={'Balance actual'}/>
              
            
            <Card width={12} title={'Ultimos registrados'}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;