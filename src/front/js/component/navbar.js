import React, { useState, useContext, useEffect } from "react";
import {Context} from '../store/appContext'
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
    const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					
						<button 
							className="btn btn-danger"
							onClick={ () => {
								actions.logout()
							}}
						>	
							Logout
						</button>
					
				</div>
			</div>
		</nav>
	);
};
