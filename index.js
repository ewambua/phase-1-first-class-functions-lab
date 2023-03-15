// Code your solution in this file!

// Returns first two drivers:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice (0,2)
}

// Returns last two drivers:
const returnLastTwoDrivers = function(drivers){
    return drivers.slice (-2)
}

// Selects drivers:
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// Creates a fare multipler:
function createFareMultiplier(){
    return function fareMultiplier(value){
        return (value ** 2)
    }
}

// Fare doubler:
const fareDoubler = function(value){
    return value * 2
}

// Fair Tripler:
const fareTripler = function(value){
    return value * 3
}

// Select Different Drivers:
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }