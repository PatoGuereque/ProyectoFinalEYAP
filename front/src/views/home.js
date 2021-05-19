import { Typography } from "@material-ui/core";
import React from "react";
import primera from './images/primera.jpg';
import ultima from './images/ultima.jpg';

const Home = () => {
  return (
	<div style={{position: 'flexible'}}> 
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		<div class="w3-content" style={{'max-width':'2000px'}}>

			<div class="w3-display-container w3-center">
				<img src={primera} alt="primera" style={{'width':'100%','display': 'block'}}/>
				<div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small" >
				  <h3 style={{'color':'black'}}>Pasteleria Name</h3>
				  <p style={{'color':'black'}}><b>Una delicia que nunca olvidaras</b></p>    
				</div>
			</div>

			<div class="w3-container w3-content w3-center w3-padding-64" style={{'max-width':'800px'}} id="band">
				<h2 class="w3-wide">La Pasteleria</h2>
				<p class="w3-opacity"><i>Amamos crear comida</i></p>
				<p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
				  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>


		<img src={ultima} alt="foto de final" class="w3-image w3-greyscale-min" style={{width:'100%'}}/>

		<footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
		  <i class="fa fa-facebook-official w3-hover-opacity"></i>
		  <i class="fa fa-instagram w3-hover-opacity"></i>
		  <i class="fa fa-snapchat w3-hover-opacity"></i>
		  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
		  <i class="fa fa-twitter w3-hover-opacity"></i>
		  <i class="fa fa-linkedin w3-hover-opacity"></i>
		</footer>
		</div>
	</div> 
  );
};

export default Home;
