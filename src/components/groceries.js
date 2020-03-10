import React from 'react'

const Groceries = ({item, qty, inCart, groceryClicked})=> (
  <div
    onClick={groceryClicked}
    style={ inCart ? styles.complete : styles.remaining} >
    Item: {item} <br />
    Qty: {qty}
  </div>
  )

  const styles ={
    remaining: {cursor: 'pointer', margin: '5px', 
    padding: '5px', border:'1px solid', color: 'red',
    fontWeight:'bold'},
    complete:  {cursor: 'pointer',margin: '5px', 
    padding: '5px', border:'1px solid', color: 'green', textDecoration:'line-through',
   }
  }

export default Groceries