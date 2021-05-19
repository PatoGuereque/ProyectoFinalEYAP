import { Typography } from "@material-ui/core";
import React from "react";
import primera from './images/primera.jpg'; 

const Promociones = () => {
  return (
	<div style={{'background-color':'#E7D8C9'}}> 
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		
		<div class="w3-content" style={{'max-width':'2000px'}}>

			<div class="w3-center w3-display-container" style = {{'display':'grid', 'grid-template-columns':'1fr 1fr', 'grid-template-rows':'auto', 'grid-gap':'20px'}}>
				<div>
					<img src={primera} alt="primera" style={{'width':'75%'}}/>
				</div>
				<div>
					<img src={primera} alt="primera" style={{'width':'75%'}}/>
				</div>
				<div>
					<img src={primera} alt="primera" style={{'width':'75%'}}/>
				</div>
				<div>
					<img src={primera} alt="primera" style={{'width':'75%'}}/>
				</div>
				<div>
					<img src={primera} alt="primera" style={{'width':'75%'}}/>
				</div>
				
			</div>
			
		</div>
	</div> 
  );
};

export default Promociones;
