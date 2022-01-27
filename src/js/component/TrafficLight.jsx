import React, { useState, useEffect } from "react";
import "../component/TrafficLight.css";

const TrafficLight = () => {
	const [color, setColor] = useState({
		red: "",
		yellow: "",
		green: "",
	});
	/*
	const changeColor = () => {
		if(onClick == setColor("glow")){
			onClick == setColor("noGlow")
	}*/

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 luces" id="semaforo">
						<div className="row">
							<div
								className={`col-md-12 luces ${color.red}`}
								onClick={() => {
									setColor({
										red: "glow",
										yellow: "",
										green: "",
									});
								}}
								id="red"></div>
						</div>
						<div className="row">
							<div
								className={`col-md-12 luces ${color.yellow}`}
								id="yellow"
								onClick={() => {
									setColor({
										red: "",
										yellow: "glow",
										green: "",
									});
								}}></div>
						</div>
						<div className="row">
							<div
								className={`col-md-12 luces ${color.green}`}
								id="green"
								onClick={() => {
									setColor({
										red: "",
										yellow: "",
										green: "glow",
									});
								}}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
