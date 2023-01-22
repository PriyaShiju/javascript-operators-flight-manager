function Passengers() {
    let capacity = function checkFlightCapacity(flightCapacity,arrPassengers) 
    {
        let totalPassengers = 0;

        for (let i = 0; i < arrPassengers.length; i++)
        totalPassengers += arrPassengers[i]; // totalPassengers = arrPassengers((a,b)=> a+b);

        if (totalPassengers<flightCapacity ) 
            return totalPassengers;
        else 
            throw new Error ("Number of Passengers exceeds Flight Capacity");
    }
    let distributeseats = function distributeAllSeatsToAllPassengers
    (nrOfVIPPassengers,nrOfRegularPassengers, nrOfFlights,nrOfBusinessSeats, nrOfEconomySeats)
    {
         let objDistributedSeats;
         objDistributedSeats.vipPassengersWithBusinessSeats=0, objDistributedSeats.vipPassengersWithEconomySeats=0;
         objDistributedSeats.regularPassengersWithBusinessSeats=0, objDistributedSeats.regularPassengersWithEconomySeats=0;

        if ((nrOfBusinessSeats>0) || (nrOfEconomySeats>0))
        {
            if (nrOfBusinessSeats >= nrOfVIPPassengers)
            {
                for(let i=0; i<nrOfVIPPassengers; i++)
                {
                    console.log("Business seat is assigned to VIP Passenger "+i+1);
                    objDistributedSeats.vipPassengersWithBusinessSeats++;
                    nrOfBusinessSeats--;
                }
                if  (nrOfRegularPassengers >0) //if still Business seats are available
                {
                    for(let i=0; i<nrOfRegularPassengers; i++)
                    {
                        if (nrOfBusinessSeats >0)
                        {
                            console.log("Business seat is assigned to Regular Passenger "+i+1);
                            objDistributedSeats.regularPassengersWithBusinessSeats++;
                            nrOfBusinessSeats--;
                        }
                        else if (nrOfEconomySeats >0)
                        {
                            console.log("Economy seat is assigned to Regular Passenger "+i+1);
                            objDistributedSeats.regularPassengersWithEconomySeats++;
                            nrOfEconomySeats--;
                        }
                    } 
                }               
            }
            else if (nrOfBusinessSeats < nrOfVIPPassengers)             {                
                for(let i=0; i<nrOfVIPPassengers; i++)
                {
                    if (nrOfBusinessSeats >0)
                    {
                        console.log("Business seat is assigned to VIP Passenger "+i+1);
                        objDistributedSeats.vipPassengersWithBusinessSeats++;
                        nrOfBusinessSeats--;
                    }
                    else if (nrOfEconomySeats >0)
                    {
                        console.log("Economy seat is assigned to VIP Passenger "+i+1);
                        objDistributedSeats.this.vipPassengersWithEconomySeats++;
                        nrOfEconomySeats--;
                    }
                }       
            } 
            return objDistributedSeats;
        }
    }//end of function distributeAllSeatsToAllPassengers
    
}

module.exports = {Passengers};