import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pics.css';

class Pics extends Component {
  render() {
    return (<div className="card">
      <h2 className="name">Pics</h2>
      <img src="https://source.unsplash.com/random"
           alt ="cool random pictures" />
      <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies</h5>
      <HobbyList />
    </div>);
  }
}

export default Pics;