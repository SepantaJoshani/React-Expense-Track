import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props)=>{
    

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found No Expanses</h2>
    }

    return (
        <ul className="expenses-list" >
            {props.items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
        </ul>
    )
}

export default ExpensesList