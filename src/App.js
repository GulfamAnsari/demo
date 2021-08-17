import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { Component } from 'react';
import { Games } from './Games/Games';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Component -> constrictor");
    this.state = {
      value: 1
    }
  }

  changeState = () => {
    this.setState( { value: 2 })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parent -> getDerivedStateFromProps ');
    return null;
  }

  componentDidMount = () => {
    console.log("Parent Component -> Componentdid Mount");
  }

  shouldComponentUpdate = () => {
    console.log('Parent -> Should Component Update ');
  }
  
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Parent -> getSnapshotBeforeUpdate');
  }

  componentDidUpdate = () => {
    console.log('Parent -> componentDidUpdate');
  }

  render() {
    console.log('Parent -> Render ');
    return (
      <div className="App">
        {/* <FunctionalComponent componenttype="Functional" />
        <FunctionalComponent componenttype="Functional">Children compoen of functional component</FunctionalComponent>
        <ClassComponent componenttype="Class" />
        <button onClick={() => {this.changeState();}}>Change Satte</button> */}
        <Games />
      </div>
    );
  }
}

export default App;
