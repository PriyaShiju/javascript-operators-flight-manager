module.exports = function flights()
{    
    
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity)
    {
     
        let numberOfFlights =0;
        
        if ((numberOfPassengers <= 0) || (!Number.isInteger(numberOfPassengers)))  {
            throw new Error("The number of passengers must be a positive integer value");            
        }
        if ((flightCapacity <= 0) || (!Number.isInteger(flightCapacity))) {
            throw new Error("The capacity of the flight must be a positive integer value");            
        }
        else if (numberOfPassengers % flightCapacity == 0)
                numberOfFlights= (numberOfPassengers / flightCapacity);
        else
                numberOfFlights= Math.floor(numberOfPassengers / flightCapacity) + 1; 
        
        return numberOfFlights;       
    }
           
    function checkAircraftRevision(distanceLimit, arrDistance) 
    {         
        
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
//{flights};
//export default {Flights};






