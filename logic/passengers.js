module.exports = function passengers()
{
    function checkFlightCapacity(flightCapacity,arrPassengers) 
    {
        let totalPassengers = 0;

        for (let i = 0; i < arrPassengers.length; i++)
        totalPassengers += arrPassengers[i]; // totalPassengers = arrPassengers((a,b)=> a+b);

        if (totalPassengers<flightCapacity ) 
            return totalPassengers;
        else 
            throw new Error ("Number of Passengers exceeds Flight Capacity");
    }
    
    function distributeAllSeatsToAllPassengers(nrOfVIPPassengers,nrOfRegularPassengers, nrOfFlights,nrOfBusinessSeatsPerFlight, nrOfEconomySeatsPerFlight)
    {
         
         this.vipPassengersWithBusinessSeats=0;
         this.vipPassengersWithEconomySeats=0;
         this.regularPassengersWithBusinessSeats=0;
         this.regularPassengersWithEconomySeats=0;

         nrOfBusinessSeats = nrOfBusinessSeatsPerFlight * nrOfFlights;
         nrOfEconomySeats = nrOfEconomySeatsPerFlight * nrOfFlights;    

         
         console.log("VIP & Business seat " + nrOfVIPPassengers + " ," + nrOfBusinessSeats + ", " +nrOfBusinessSeatsPerFlight );
         this.vipPassengersWithBusinessSeats = AllocateSeats(nrOfVIPPassengers,nrOfBusinessSeats,nrOfBusinessSeatsPerFlight);
        
        console.log("VIP & Economy seat " + nrOfVIPPassengers + ", " + nrOfEconomySeats + " ," +nrOfEconomySeatsPerFlight );
        this.vipPassengersWithEconomySeats=AllocateSeats(nrOfVIPPassengers,nrOfEconomySeats,nrOfEconomySeatsPerFlight);

        console.log("Regular & Business seat " + nrOfEconomySeats + ", " + nrOfBusinessSeats + ", " +nrOfBusinessSeatsPerFlight );
        this.regularPassengersWithBusinessSeats= AllocateSeats(nrOfRegularPassengers,nrOfBusinessSeats,nrOfBusinessSeatsPerFlight);

        console.log("Regular & Economy seat " + nrOfEconomySeats + ", " + nrOfEconomySeats + ", " +nrOfEconomySeatsPerFlight );
        this.regularPassengersWithEconomySeats = AllocateSeats(nrOfRegularPassengers,nrOfEconomySeats,nrOfEconomySeatsPerFlight); 
       
        return this;
               
    }

     function  AllocateSeats(nrOfPassengers,nrOfSeats, nrSeatsPerFlight)
    {
        let passengerAllocatedSeats=0;
        
        while(nrOfPassengers > 0)
        {
            if (nrOfSeats >0)
            {
                if (nrOfPassengers >= nrOfSeats)
                {
                    if (nrOfSeats > nrSeatsPerFlight)
                    {                        
                        nrOfPassengers -= nrSeatsPerFlight;                        
                        passengerAllocatedSeats += nrSeatsPerFlight;
                        nrOfSeats -= nrSeatsPerFlight;
                        //console.log("nrOfSeats > nrSeatsPerFlight" + passengerAllocatedSeats);
                    }
                    else
                    {                        
                        nrOfPassengers -= nrOfSeats;                    
                        passengerAllocatedSeats += nrOfSeats;
                        nrOfSeats = 0;
                        //console.log("else nrOfSeats > nrSeatsPerFlight" + passengerAllocatedSeats);
                    }
                }
                else
                {               
                        
                    nrOfSeats -= nrOfPassengers;
                    passengerAllocatedSeats += nrOfPassengers;
                    nrOfPassengers = 0;
                    //console.log("nrOfPassengers >= nrOfSeats" + passengerAllocatedSeats);
                }
            }
            else
                break;
        }

        return passengerAllocatedSeats;
    } 
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};   
}

//module.exports = {passengers};