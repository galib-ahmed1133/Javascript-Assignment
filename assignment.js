// https://github.com/galib-ahmed1133/Javascript-Assignment



function kilometerToMeter(kilometer) {          // Kilometer To Meter Conversation
    
    var meter = kilometer * 1000;
    return meter;
    
}
var result = kilometerToMeter();
return result;



function budgetCalculator(clock, phone, laptop) {       // Budget Calculator

    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = clockPrice + phonePrice + laptopPrice;
    return total;
}
    var budget = budgetCalculator();
    return budget;




function hotelCost (days) {                             // Hotel Living Cost

        var cost = 0;
        if(days <= 10){
            cost = days * 100;
        }
        else if(days <= 20) {

        var firstTenDays = 10 * 100;
        var remainDays = days - 10;
        var secondTenDays = remainDays * 80;
            cost = firstTenDays + secondTenDays; 
    
        }
        else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainDays = days - 20;
        var increasingDays = remainDays * 50;
            cost = firstTenDays + secondTenDays + increasingDays;
        }
        return cost;
}
    var totalCost = hotelCost();
    return totalCost;




function megaFriend (names) {                       //Highest Character Name
    var max = names[0];
    for(i = 0; i < names.length; i++){
        var character = names[i];
        if(character.length > max.length){          
            max = character;
            
        }
        
    }
    return max;
}

var highestCharacter = megaFriend([])
return highestCharacter;

