import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {console.log('asd');

    return (
      <div>Hello World</div>
    );
  }
}
ReactDOM.render(
    <App />
  , document.querySelector('.container'));
