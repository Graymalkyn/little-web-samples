var React = require('react');

class GroceryList extends React.Component {

  constructor(){
    super();

    this.groceryList = [
      {id:1, name: 'sausage'},
      {id:2, name: 'shrimp'},
      {id:3, name: 'Texjoy'},
      {id:4, name: 'Dr Pepper'},
      {id:5, name: 'steak'},
      {id:6, name: 'Tostitos'},
      {id:7, name: 'cheese'},
      {id:8, name: 'gum'}
    ];

  }

  render() {

    return (
      <ul>
        {this.groceryList.map(function(list){
          return <li key={list.id}>{list.name}</li>
        })}
      </ul>
    )
  }



}

module.exports = GroceryList;
