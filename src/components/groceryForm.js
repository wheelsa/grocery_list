import React from 'react'

export default class GroceryForm extends React.Component{

  state = {grocery: '', qty:''}

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.grocery)
    console.log(this.state.qty)
    this.props.addToList(this.state.grocery, this.state.qty)
    this.setState({grocery:'', qty:''})
  }

  handleChangeGrocery = e =>{
    this.setState({
      grocery: e.target.value
    })
    console.log(e.target.value)
  }

  handleChangeQty = e =>{
    this.setState({
      qty: e.target.value
    })
    console.log(e.target.value)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.grocery} onChange={this.handleChangeGrocery} required placeholder="Add Grocery Item" />
        <input value={this.state.qty} onChange={this.handleChangeQty} required placeholder="Add QTY" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}