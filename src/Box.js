import React,{PureComponent,Fragment} from 'react';
import './App.css';

class Box extends PureComponent {

  render(){
    return(
      <Fragment>
        <li key = {1}>
          <div>
            1
          </div>
        </li>
      </Fragment>
    )
  }
}


export default Box
