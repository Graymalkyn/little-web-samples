var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;

var GroceryList = require('./js/grocery-list.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />
        <GroceryList />

      </div>;
  }
}

render(<App/>, document.getElementById('app'));
