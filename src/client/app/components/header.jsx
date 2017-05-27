
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container page-header">
        <h1>React Quiz
          <br/>
          <br/>
          <small>{this.props.headerText}</small>
        </h1>
      </div>
    );
  }
}

export default Header;