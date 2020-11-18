import React from 'react';
import 'tachyons';
import './Pro1.css'
import Pro1list from './Pro1list';

const Pro1 = (props) => {
	return (
		<div>
		<h1><center>Welcome To React World</center></h1>
		<Pro1list id="1" name="Shivam" work="WebDeveloper" />
		<Pro1list id="1" name="Shivam" work="Dramer"  />
		<Pro1list  id="1" name="Shivam" work="Worker" />
		<Pro1list  id="1" name="Shivam" work="Technical" />
		<button>Subscribe</button>
		</div>
		)
}
export default Pro1; 