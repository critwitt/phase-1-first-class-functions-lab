// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr) {
    return arr.slice(arr.length-2, arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare*multiplier
    }
}

function fareDoubler(fare) {
    const doubledFare = createFareMultiplier(2);
    return doubledFare(fare)
}

function fareTripler(fare) {
    const tripledFare = createFareMultiplier(3);
    return tripledFare(fare)
}

function selectDifferentDrivers (allDrivers, selectedDrivers) {
    return selectedDrivers(allDrivers)
}