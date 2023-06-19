
// function to calculate speed
function checkSpeed(Speed){
    const SpeedLimit = 70;
    const demeritPoint = 5;
    const points = 12;
//if car speed is below or equal to speed limit
    if (Speed <= SpeedLimit) {
        return "Ok";
// if the car speed is above the speed limit 
    }else {
    const excessSpeed = carSpeed - SpeedLimit;
    const demeritPoints = Math.floor(excessSpeed /demeritPoint);
    }
//if demerit points are above 12 return license suspended to the user
    if (demeritPoints > points) {
    return "License Suspended"
    } else {
    return "Points:" + demeritPoints;
    }
    }