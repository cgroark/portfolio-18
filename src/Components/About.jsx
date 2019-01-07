import React, {Component} from 'react';

class About extends Component {
	render(){
		return(
 			<div className="row">
              <div className="col-md-8">
                <h1>About</h1>
                <p>I'm a full-stack web developer with experience building websites and untangling problems and developing efficient systems and tools in the private and non-profit sectors.</p>
                <hr />
                <p>Working with diverse teams of developers and UX designers, I’ve applied my experience with front-end and back-end technologies to build responsive websites that provide a seamless interaction for users. Prior to engineering, I worked for consulting firms and non-profits where I garnered experience managing programs, teams, budgets and business development processes. When I'm not writing code, you'll find me on my bike or in the Cascades.</p>
              </div>
              <div className="col-md-4">
                <img src="/images/BW-Colin.jpg" alt="headshot of Colin Groark" />
              </div>
            </div>
			)
	}
}

export default About;