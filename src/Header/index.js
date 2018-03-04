import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component{

  //value: guestForm
  //omChangeValue: setState(guestForm)

    static propTypes = {
      value: PropTypes.string,
      onChangeValue: PropTypes.func,
      onSubmit: PropTypes.func,
      phone: PropTypes.string,

    };

	render(){
		return(
	  <header>
        <h1>RSVP</h1>
        <p>{this.props.phone}</p>
        <form onSubmit={this.props.onSubmit}>
            <input type="text" 
               value={this.props.value} 
               placeholder="Invite Someone" 
               onChange={(e) => this.props.onChangeValue(e.target.value)}/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>

			);
	}

}

