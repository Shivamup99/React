import React from 'react';
const Pro1list =(props)=>{
	return(
		<div className="pro1  ma4  bg-light-purple  dib  pa4 tc">
		<img src="fir.jfif"/>
		<h1 className="">{props.name}</h1>
		<h2><p> {props.work}</p> </h2>
		</div>
		)
}
export default Pro1list;