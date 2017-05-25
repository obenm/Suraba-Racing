#pragma strict

function Start(){

}

var WheelFR : WheelCollider;
var WheelFL : WheelCollider;
var WheelRR : WheelCollider;
var WheelRL : WheelCollider;

var Speed = 1000;
var Braking = 200;
var Turning = 20;

function Update(){
	// This code makes the car go forward
	WheelRR.motorTorque = Input.GetAxis("Vertical") * Speed;
	WheelRL.motorTorque = Input.GetAxis("Vertical") * Speed;

	WheelRR.brakeTorque = 0;
	WheelRL.brakeTorque = 0;

	// This code makes the car turn
	WheelFL.steerAngle = Input.GetAxis("Horizontal") * Turning;
	WheelFR.steerAngle = Input.GetAxis("Horizontal") * Turning;

	// This code puts brakes on the car
	if(Input.GetKey(KeyCode.Space)){
		WheelRL.brakeTorque = Braking;
		WheelRR.brakeTorque = Braking;
	}
}