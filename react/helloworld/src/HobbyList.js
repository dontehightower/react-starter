import React, {Component} from 'react';


class HobbyList extends React.Component {
  render() {
    const hobbies = ['Take Pics', 'View Pics', 'Travel'];
    const liStyle = { fontSize: '1.5 em' };
    return (
      <ul>
        {hobbies.map((h, i) => {
          return <li key={i} style={liStyle}>{h}</li>
        })}
      </ul>
    );
  }
}

export default HobbyList;