import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {randomArray} from './utils/randomArray'
import Box from "./Box"

class App extends Component {
  constructor(props){
    super(props)
    const arr = Array.from(new Array(15)).map((_,i)=> i+1 )
    arr.push('')
    this.state={
      data:randomArray(arr),
      completed:false
    }
  }

  renderUlChildren(){
    const {data,completed} = this.state,children=[];
    const handleClick = (item) => {
      let itemIndex = data.indexOf(item),emptyIndex = data.indexOf('');
      if(completed)
      return
      if(itemIndex + 4 !== emptyIndex && itemIndex - 4 !== emptyIndex && itemIndex + 1 !== emptyIndex && itemIndex - 1 !== emptyIndex)
      return
      data[itemIndex] = ''
      data[emptyIndex] = item

      this.setState({
        data
      })
      if(this.state.data.toString() === [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''].toString()){
        this.setState({
          completed:true
        })
        console.log(123);
        alert('成功')
      }

    }
    data.forEach((item,i) => {
      if(item){
        children.push(<li className='notempty' onClick={() => handleClick(item)}><div className='box'>{item}</div></li>)
      }else {
        children.push(<li ><div className='empty'>&nbsp;</div></li>)
      }

      i+1%4 === 0 ? children.push(<br/>) : null;
    })
    return children
  }

  componentDidMount(){
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
          <ul>
            {this.renderUlChildren()}
          </ul>
      </div>
    );
  }
}

export default App;
