import React from 'react';

const nav_show=()=>{
    document.body.classList.toggle('navigation-is-open');
}


const NavBar = () => {
    return (<div className="col-md-2  bg-dark navbar" >
      	<a href="#cd-nav" className="cd-nav-trigger" onClick={nav_show}> Menu 
		<span className="cd-nav-icon"></span>

		<svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
			<circle fill="transparent" stroke="#656e79" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
		</svg>
	</a>
	
	<div id="cd-nav" className="cd-nav">
		<div className="cd-navigation-wrapper" id="cd-navigation-wrapper">
			<div className="cd-half-block">
				<h2 className="text-white" >Navigation</h2>

				<nav>
					<ul className="cd-primary-nav">
						<li><a href="#0" className="selected">Home</a></li>
						<li><a href="#0">Our services</a></li>
						<li><a href="#0">Our projects</a></li>
						<li><a href="#0">Contact us</a></li>
					</ul>
				</nav>
			</div>
	
		</div> 
	</div> 
    </div>);
};

export default NavBar;