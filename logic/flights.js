function Flights()
{    
    let calcFlights = function calculateNumberOfFlights(numberOfPassengers, flightCapacity) 
    {       
        let numberOfFlights =0;
        alert("inside calcFlights");
        if ((numberOfPassengers <= 0)&&(!Number.isInteger(numberOfPassengers)))  {
            throw new Error("The number of passengers must be a positive integer");            
        }
        if ((flightCapacity <= 0)&&(!Number.isInteger(numberOfPassengers))) {
            throw new Error("The capacity of the flight must be a positive integer");            
        }
        else if (numberOfPassengers % flightCapacity == 0)
                numberOfFlights= (numberOfPassengers / flightCapacity);
        else
                numberOfFlights= Math.floor(numberOfPassengers / flightCapacity) + 1; 
        
        return numberOfFlights;       
    }
           
    let checkDistance = function checkAircraftRevision(distanceLimit, arrDistance) 
    {         
        alert("inside function2");
        let totalDistance = 0;

        for (let i = 0; i < arrDistance.length; i++)
            totalDistance += arrDistance[i]; //totalDistance=arrDistance.reduce((a,b) => a+b);

        if (totalDistance <= distanceLimit / 2) { 
            return "The revision needs to be done within the next 3 months"; 
        }
        else if ((totalDistance > distanceLimit / 2) && (totalDistance <= 3*distanceLimit / 4)) {
            return "The revision needs to be done within the next 2 months";
        }
        else if ((totalDistance <= distanceLimit) && (totalDistance > 3*distanceLimit / 4)) {
            return "The revision needs to be done within the next month";
        }
        else if (totalDistance > distanceLimit)
            throw new Error("Total Distance exceeds the distance limit");
    } 
    return {calculateNumberOfFlights, checkAircraftRevision};    
}

module.exports ={Flights};
//export default {Flights};






