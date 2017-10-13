import React from "react";
export default function ListDemo(props) {
    function List(props){
        return(
            <li>{props.number}</li> 
        )
    }
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
      <List key={index} number ={number}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
