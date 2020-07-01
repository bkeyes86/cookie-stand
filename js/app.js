'use strict';
console.log('app.js is connected.');




// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


var storeHours = ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];










function random(min, max){
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
function Shop(name, minCustPerHour,maxCustPerHour, avgCookiesPerSale) {
  this.shopName = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
 
}
Shop.prototype.getCustPerHour = function(){
  for(var i = 0; i < storeHours.length; i++) {
    this.customersEachHour[i] = random(this.minCustPerHour, this.maxCustPerHour);
    
  }
};
Shop.prototype.getCookiePerHour = function(){
  this.getCustPerHour();
  
  for(var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour[i] = Math.floor(this.customersEachHour[i] * this.avgCookies);
    
  }
 
};
Shop.prototype.totalDailyCookies = function(){
  this.getCookiePerHour()
  var totalCookies = 0;
  for(var i = 0; i < this.cookiesEachHour.length; i++){
    totalCookies += this.cookiesEachHour[i]
  }
  return totalCookies;
}
Shop.prototype.render = function(){
  this.getCookiePerHour()
  var shopTable = document.getElementById('shop-table');
  var shopRow = document.createElement('tr');
  var shopName = document.createElement('td');
  shopName.textContent = this.shopName;
  shopRow.appendChild(shopName)
  shopTable.appendChild(shopRow);
  

  
    
  

  
  for(var i = 0; i < storeHours.length; i++){
    var td = document.createElement('td')
    td.textContent = this.cookiesEachHour[i]
    shopRow.appendChild(td)
   

  }
  var tdTotal = document.createElement('td')
  tdTotal.textContent = this.totalDailyCookies()
  shopRow.appendChild(tdTotal)
}
var th = document.createElement('th')
    
var seattleShop = new Shop ('Seattle', 23, 65, 6.3);
var tokyoShop = new Shop ('Tokyo', 3, 24, 1.2);
var dubaiShop = new Shop ('Dubai', 11, 38, 3.7);
var parisShop = new Shop ('Paris', 20, 38, 2.3);
var limashop = new Shop ('Lima', 2, 16, 4.6);
var allShops = [seattleShop, tokyoShop, dubaiShop, parisShop, limashop];
for(var i = 0; i < allShops.length; i++){
  allShops[i].render();
}

function handleFormSubmitted(event){

event.preventDefault();
var nameInput = document.getElementById('name');
var nameValue = nameInput['value'];
var minCustPerHourInput = document.getElementById('minCustPerHour');
var minCustPerHourValue = Number(minCustPerHourInput['value']);
var maxCustPerHourInput = document.getElementById('maxCustPerHour');
var maxCustPerHourValue = Number(maxCustPerHourInput['value']);
var avgCookiesPerSaleInput = document.getElementById('avgCookiesPerSale');
var avgCookiesPerSaleValue = Number(avgCookiesPerSaleInput['value']);
var newShop = new Shop(nameValue,minCustPerHourValue, maxCustPerHourValue, avgCookiesPerSaleValue);


newShop.render();

}
var formElement = document.getElementById('new-shops')
formElement.addEventListener('submit', handleFormSubmitted);



