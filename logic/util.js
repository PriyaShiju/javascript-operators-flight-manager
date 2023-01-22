function Util() {
    let totalPassengers = function calculateTotalDistributedPassengers(objDistributedSeats) 
    {
        let totalDistributedPassengers =0;
        for (let i=0;i<objDistributedSeats.length;i++)
        {
            totalDistributedPassengers +=objDistributedSeats[i].value;
        }
        return totalDistributedPassengers;

    }
    function calculateTotalNumberOfPassengers(arrNumbers){
        let totalPassengers =0;
        for (let i=0;i<arrNumbers.length;i++)
        {
            totalPassengers +=arrNumbers[i].value;
        }
        return totalPassengers;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}; 
}
module.exports = {Util};
