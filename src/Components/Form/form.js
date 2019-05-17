import React, {Component} from 'react'
import axios from 'axios';
import './form.css'


//=========Stateful Component========

class Form extends Component {
  constructor(props){
  super(props);
  this.state = {
    image:'',
    product:'',
    price:''
  }
}



// =====Makes a request to the server and grabs everything from the class
componentDidMount(){
  this.handleGetForm()
}




// =======State with initial values for the inputs========
handleProduct(val){
  this.setState({
    product: val
  })
}

handleImage(val){
  this.setState({
    image: val
  })
}
 handlePrice(val){
   this.setState({
     price: val
   })
 }

handleGetForm = () => {
  axios.get('')
  .then(res => {
    this.setState({
      form: res.data
    })
  })
}



// ========Update State================
handleUpdateProduct = (data) => {
  this.setState({
    form:data
  })
}

handleDeleteForm = (data) =>{
  this.setState({
    form:data
  })
}


 render(){
  // const mapForm = this.state.form.map((element, i) => {
  //   return(
  //     <showProducts key={i}
  //       image={element}
  //       updateForm={this.handleUpdateForm}
  //       deleteForm={this.handleDeleteForm}/>
  //   )
  // }
  // )
   return(
     <div className='body1'>
     <div className='form'>
       <p>Image URL:</p>
      <input type='text' onChange={(e) => this.handleImage(e.target.value)}
      value={this.state.formImage}
      placeholder='Enter Image URL'/>
      <p>Product Name:</p>
      <input type='text'
      onChange={(e)=> this.handleProduct(e.target.value)}
      value={this.state.product}
      placeholder='Enter Product Name'/>
      <p>Price:</p>
       <input type='text'
      onChange={(e)=> this.handlePrice(e.target.value)}
      value={this.state.price}
      placeholder='Enter Price'/>
        <div className='form-buttons'>
        <button>Cancel</button>
        <button onClick={this.handleUpdateProduct}>Add to Inventory</button>
        </div>
     </div>
     </div>
     
   )
 }
}



export default Form;