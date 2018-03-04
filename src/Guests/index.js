import React from 'react';
import PropTypes from 'prop-types';


//Component
import GuestRespond from './GuestRespond';
import GuestPending from './GuestPending';

export default class Guest extends React.Component{

  static propTypes = {
      pendingName: PropTypes.string,
      listOfGuests: PropTypes.array,
      onClick:PropTypes.func,
      onClickD: PropTypes.func,
      onEditName: PropTypes.func,
    };

  render(){


//klo ga ada nilainya guestPending akan kosong nilainya
    var guestPending = <GuestPending name={this.props.pendingName}/>
    if (this.props.pendingName === "") {
      guestPending = "";
    }

    return(
      <ul>

          {guestPending}

          {
            this.props.listOfGuests.map(
              (guest, index) => {
                console.log(guest.name)
                return(

                <GuestRespond

                 name={guest.name}
                 isChecked={guest.isConfirm}
                 // onClick guestResponds Props : onCLick
                 // this.props.onClick punya guest
                 // untuk setiap guest respond yang di render memiliki fungsi onclick dengan index sesuai urutan urtan item
                 onClick={() => {this.props.onClick(index)}}
                 onClickD={(e) => {this.props.onClickD(index)}}
                 onEditName={(name) => {this.props.onEditName(name, index)}}

           
                 />
                );
              }
            )
          }

         
        </ul>
      );
  }
}