import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state ={
    ninjas:[
      {name:'SUjit', age:'22', belt:'black', id :1},
      {name:'Baljit', age:'122', belt:'cblack', id :2},
      {name:'jSUjit', age:'222', belt:'dblack', id :3},
      {name:'vSUjit', age:'322', belt:'vblack', id :4},
      {name:'SlUjit', age:'422', belt:'mblack', id :5}
    ]
  }
  componentDidMount(){
    console.log('Component Mounted')

  }
  componentDidUpdate(prevProps,prevState){
    console.log('Component Updated');
    console.log(prevProps, prevState);

  }
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas:ninjas
    })

  }
  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter(ninja =>{ 
    return  ninja.id!==id
  });
    this.setState({
      ninjas:ninjas
    })


}
  render(){

  return (
    <div className="App">
  
        <h1>Hello</h1>
        <Ninjas ninjas = {this.state.ninjas} deleteNinja= {this.deleteNinja}/>
        <AddNinja addNinja ={this.addNinja}/>
 
    </div>
  );
  }
}

export default App;
