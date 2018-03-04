import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class List extends Component
{

	static propTypes = {
		arrayOfBuah: PropTypes.array,

	}
	render()
	{
		return(
		<ListGroup>
          {
          	this.props.arrayOfBuah.map((buah, index) => {
          			return(
          				<ListGroupItem>{buah}</ListGroupItem>
          				);
          		  }
          		)
          }
        </ListGroup>
        );

	}

}

