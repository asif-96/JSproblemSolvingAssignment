// Github Link: 



// Kilometer to meter conversion
function kilometerToMeter(kiloMeterValue) {
    if (kiloMeterValue < 0) {
        return "Kilometer can't be negative";
    }
    else {
        return kiloMeterValue * 1000;
    }
}
// console.log(kilometerToMeter(1.5));





// Budget Calculator
function budgetCalculator(watchQuantiy, phoneQuantiy, laptopQuantiy) {
    if (watchQuantiy < 0 || phoneQuantiy < 0 || laptopQuantiy < 0) {
        return "Quantiy can't be negative!";
    }
    else {
        return watchQuantiy * 50 + phoneQuantiy * 100 + laptopQuantiy * 500;
    }
}
// console.log(budgetCalculator(2, 7, 2));





// Hotel cost calculate
function hotelCost(days) {
    var totalHotelCost;
    if (days < 0) {
        return "Days can't be negative";
    }
    else {
        if (days < 11) {
            totalHotelCost = 100 * days;
        }
        else if (days < 21) {
            var first_10_Days = 10 * 100;
            days = (days - 10) * 80;
            totalHotelCost = first_10_Days + days;
        }
        else if (days > 20) {
            var first_10_Days = 10 * 100;
            var second_10_Days = 10 * 80;
            days = (days - 20) * 50;
            totalHotelCost = first_10_Days + second_10_Days + days;
        }

        return totalHotelCost;
    }
}
// console.log(hotelCost(27));





// Calculate max length of word/name as MegaFriend
function megaFriend(arr) {
    if (arr[0] == " ") {
        return "Invalid word!";
    }
    else {
        let maxLength = arr[0].length;
        var value;
        let j = 0;
        for (var i = 1; i < arr.length; i++) {
            if(arr[i] == " "){
                value = "Invalid word!";
                return value;
                // break;
            }
            else if(arr[i].length > maxLength) {
                maxLength = arr[i].length
                j = i;
                value = arr[j];
            }
        }
        return value;
    }
}
// console.log(megaFriend(["Tofo", "Qurashi", "Samun", "Ruhulullah", "Muntasir"]));