import React from 'react'
import Groceries from './groceries';
import GroceryForm from './groceryForm';
// import Footer from './Footer';

export default class GroceryList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      list: [
        {grocery: 'lettuce', qty:'a head', inCart: true},
        {grocery: 'bacon', qty:'1lb', inCart: false},
      ]
    }
   
  }

  // setFilter = (filter) => {
  //   this.setState({ filter })
  // }

  renderList(){
    return this.state.list.map((grocery, i) => (
      <Groceries
       key={`grocerylistitem-${i}`}
       item = {grocery.grocery}
       qty = {grocery.qty}
       inCart = {grocery.inCart}
       groceryClicked = {()=> this.handleGroceryClicked(i)} />
    ))
  }

  addToList = (grocery, qty) => {
    const newGrocery = {grocery: grocery, qty: qty, inCart: false}
    this.setState({
      list: [newGrocery, ...this.state.list]
    })
  }

  handleGroceryClicked(index){
    const { list } = this.state
    const newList = list.map ((grocery, i) => {
      if (i === index){
        return{
          ...grocery,
          inCart: !grocery.inCart
        }
      }
      return grocery
    })
    this.setState({
      list: newList
    })
  }

  // visibleItems = () => {
  //   const{ list, filter } = this.state;
  //   switch(filter){
  //     case 'Active':
  //       return list.filter( grocery => !grocery.complete )
  //     case 'Complete':
  //       return list.filter(grocery => grocery.complete)
  //     default:
  //       return list;
  //   }
  // }



  render(){
    // const {list, filter} = this.state;

    return(
      <div> 
        <div> 
         <GroceryForm addToList={this.addToList} />
         {this.renderList()}
        </div>
        {/* <div>
          <Footer filter={filter} setFilter={this.setFilter} />
        </div> */}
      </div>
    )
  }

}