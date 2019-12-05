import React,{Component} from 'react';
import Header from './components/header';
import Book from './components/books';
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Header />
      <Book />
    </div>
  );
  }
}

export default App;
