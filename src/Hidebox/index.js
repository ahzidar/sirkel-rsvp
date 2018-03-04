import React from 'react';
import PropTypes from 'prop-types';

export default class Hidebox extends React.Component{

	static propTypes = {
      cek: PropTypes.bool,
      onClick: PropTypes.func
    };

	render(){
		return(
	    <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" checked={this.props.cek} onClick={this.props.onClick}/> Hide those who haven't responded 
          </label>
        </div>

			);
	}

}

