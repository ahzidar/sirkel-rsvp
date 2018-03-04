import React, { Component } from 'react';
import * as firebase from 'firebase';


//Component
import Header from './Header';
import Hidebox from './Hidebox';
import Counter from './Counter';
import Guests from './Guests';


class App extends Component 
{

  constructor(){
    super(); //buat manggil import

    this.state = {
      guestForm: "",
      isHideUnconfirmed: false,
      listOfGuests: [],
      phone: "Susi Susanti",
      
    };
    
    //inisialisasi guestssRef
    this.guestsRef = firebase.database().ref('Guests');

  }

//OnClick =>
// isConfirm yang klik => !ishideconfirmed
// guest index berapa yang klik

//Fungsi yang di panggil setelah fungsi render selesai
componentDidMount(){

  //update nilai title sesuai firebase
  //membuat preferensi

  // const titleRef = firebase.database().ref().child('Guests');
  // get guest database reference
  this.guestsRef.on('value', (snapshot) => {
    console.log(snapshot.val());
    if (snapshot.val()) {

      this.setState({
      listOfGuests: snapshot.val(),
    });

    }else{

      this.setState({
      listOfGuests: [],
    });

    }
    
  });

}

onIsConfirmChange = (index) => {
    this.state.listOfGuests[index].isConfirm = !this.state.listOfGuests[index].isConfirm;
    this.guestsRef.set(this.state.listOfGuests);
  }

// create delete func

onDeleteGuests = (index) => {
  //parsing delete index
  this.state.listOfGuests.splice(index, 1);
  //biar di render ulang pke setState
  // this.setState(this.state);
  this.guestsRef.set(this.state.listOfGuests);
}


  onChangeGuestForm = (value) => {
    this.setState({
      guestForm: value,
    });
  }

  onClickHideForm = () => {
    this.setState({
      isHideUnconfirmed: !this.state.isHideUnconfirmed,
    });
  }

// EditName

onEditName = (name, index) => {

  this.state.listOfGuests[index].name = name;
  this.guestsRef.set(this.state.listOfGuests);

}
onAddGuests = (e) => {
 e.preventDefault();


 var newGuest = {
    name: this.state.guestForm,
    isConfirm: false,
    // isEdit: false,
  }
  
  this.state.listOfGuests.unshift(newGuest);
  this.state.guestForm = "";
  this.setState(this.state);
  this.guestsRef.set(this.state.listOfGuests);
}


  render() 
  {
    // true
    // this.state.listOfGuests.filter((guest, i) => {return !guest.isConfirm}).length
    //false
    //this.state.listOfGuests


    var listOfGuests = this.state.listOfGuests;
    //true
    if (this.state.isHideUnconfirmed){
    listOfGuests = this.state.listOfGuests.filter((guest, i) => {return !guest.isConfirm});

    }

    return (
      <div className="App">
      
     
      <Header 
      value={this.state.guestForm} 
      onChangeValue={this.onChangeGuestForm} 
      onSubmit={this.onAddGuests}
      phone={this.state.phone}/>

      <div className="main">

      <Hidebox 
      cek={this.state.isHideUnconfirmed} 
      onClick={this.onClickHideForm}/>

      <Counter
      attending={this.state.listOfGuests.filter((guest, i) => {return guest.isConfirm}).length}
      unconfirmed={this.state.listOfGuests.filter((guest, i) => {return !guest.isConfirm}).length}
      total={this.state.listOfGuests.length}/>

      <Guests 
      pendingName={this.state.guestForm} 
      listOfGuests={listOfGuests}

      // untuk cek data di console onClick={(e) => console.log("hii")}
      onClick={this.onIsConfirmChange}

      //send delete funct to index.js di geust, jd nanti onCLickDnya di buat di protypes
      onClickD={this.onDeleteGuests}
      onEditName={this.onEditName}
      />
    

      </div>
    </div>
    );
  }
}

export default App;