import React from 'react';

import PropTypes from 'prop-types';

export default class Counter extends React.Component{

	static propTypes = {
    attending: PropTypes.number,
    unconfirmed: PropTypes.number,
    total: PropTypes.number
  };

	render(){
		return(
	    <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>{this.props.attending}</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>{this.props.unconfirmed}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{this.props.total}</td>
            </tr>
          </tbody>
        </table>

			);
	}

}

