import React from 'react';
import PropTypes from 'prop-types';



export default class GuestRespond extends React.Component{

   static propTypes = {
    name : PropTypes.string,
    isChecked: PropTypes.bool,
    onClickD: PropTypes.func,
    onEditName: PropTypes.func,
    
  };

//kalau mau konstraktor ada props di masukin propsnya

 constructor(props){
    super(props); //buat manggil import

    this.state = {
      isEdit: false,
      // name: this.props.name,
      
    };

  }


 onEditChange = (index) => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
    // if (this.state.isEdit) {
    //   this.props.onChangeName = this.state.name;
    // }
  }

// onChangeName = (value) => {
//     this.setState({
//       name: value,
//     });
//   }

  //state isEdit
  //function : toggleEdit
  // ubah state isEdit


 


  render(){
    var classRespond = "";
    if (this.props.isChecked) {
      classRespond = "responded";
    }

    //var editForm
    var editForm, editText;
    if (this.state.isEdit) {
      editForm=<input 
                type="text" 
                value={this.props.name}

                //value di bawah udh fix value
                onChange={(e) => this.props.onEditName(e.target.value)} />;
      editText="save";

    }

    else{

      editForm=<span>{this.props.name}</span>;
      editText="edit";
    }

    return(
      <li className={classRespond}>
    

            {editForm}
      
            <label>
              <input 
              type="checkbox" 
              checked={this.props.isChecked}
              onClick={this.props.onClick}/> Confirmed
            </label>
          
            <button
            onClick={this.onEditChange}>{editText}</button>
            
            <button 
            onClick={this.props.onClickD}>remove</button>
      </li>
      );
  }
}