'use strict';
console.log('app.js is connected.');




// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


var storehours = ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//console.log(global var for store hours)


// var Seattle = {
//   //console.log(name of object)
//   name: 'Seattle',
//console.log(store name)
//   minCustPerHour:23,
//   //console.log(minimum customers per hour)
//   maxCustPerHour: 65,
//   //console.log(maximum customers per hour)
//   avgCookiesPerSale: 6.3,
//   //console.log(average cookies sold per sale)
//   customersEachHour:[],
//   //console.log(how many customers each hour)
//   cookiesEachHour:[],
//   //console.log(how many cookies sold each hour)
//   totalDailyCookies: 0,
//   //console.log(how many total cookies sold daily)
//   calcCustomersEachHour:function(){
//     //console.log(function to calculate how many customers each hour)
//     for(var i = 0; i < hours.length;i++) {
//       //console.log(for loop that goes through the store hours array)
//       this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

//     }
//   },
//   calcCookiesEachHour: function() {
//     //console.log(function to calculate cookies sold each hour)
//     this.calcCustomersEachHour();
//     for(var i = 0; i < hours.length;i++) {
//       //console.log(for loop that goes through store hours array)
//       var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;    
//     }
//   },
//   render() {

//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('Seattle');
//     for(var i = 0;i < hours.length; i++) {
//       var listItem = document.createElement('li');
      
//       listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
// };
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1))+ min;
// }
// var allShops = [Seattle];

// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// };


// //from code provided by craig

// var Tokyo = {
//   name: 'Tokyo',
//   minCustPerHour: 3,                                                                      
//   maxCustPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   customersEachHour:[],
//   cookiesEachHour:[],
//   totalDailyCookies: 0,
//   calcCustomersEachHour:function(){
//     for(var i = 0; i < hours.length;i++) {
//       this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomersEachHour();
//     for(var i = 0; i < hours.length;i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;    
//     }
//   },
//   render() {

//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('Tokyo');
//     for(var i = 0;i < hours.length; i++) {
//       var listItem = document.createElement('li');
      
//       listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
// };
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1))+ min;
// }
// var allShops = [Tokyo];

// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// };


// var Dubai = {
//   name: 'Dubai',
//   minCustPerHour: 11,                                                                      
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   customersEachHour:[],
//   cookiesEachHour:[],
//   totalDailyCookies: 0,
//   calcCustomersEachHour:function(){
//     for(var i = 0; i < hours.length;i++) {
//       this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomersEachHour();
//     for(var i = 0; i < hours.length;i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;    
//     }
//   },
//   render() {

//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('Dubai');
//     for(var i = 0;i < hours.length; i++) {
//       var listItem = document.createElement('li');
      
//       listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
// };
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1))+ min;
// }
// var allShops = [Dubai];

// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// };


// var Paris = {
//   name: 'Paris',
//   minCustPerHour: 20,                                                                      
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   customersEachHour:[],
//   cookiesEachHour:[],
//   totalDailyCookies: 0,
//   calcCustomersEachHour:function(){
//     for(var i = 0; i < hours.length;i++) {
//       this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomersEachHour();
//     for(var i = 0; i < hours.length;i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;    
//     }
//   },
//   render() {

//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('Paris');
//     for(var i = 0;i < hours.length; i++) {
//       var listItem = document.createElement('li');
      
//       listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
// };
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1))+ min;
// }
// var allShops = [Paris];

// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// };


// var Lima = {
//   name: 'Lima',
//   minCustPerHour: 2,                                                                      
//   maxCustPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   customersEachHour:[],
//   cookiesEachHour:[],
//   totalDailyCookies: 0,
//   calcCustomersEachHour:function(){
//     for(var i = 0; i < hours.length;i++) {
//       this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomersEachHour();
//     for(var i = 0; i < hours.length;i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;    
//     }
//   },
//   render() {

//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('Lima');
//     for(var i = 0;i < hours.length; i++) {
//       var listItem = document.createElement('li');
  
//       listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
// };
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1))+ min;
// }
// var allShops = [Lima];

// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// };



function Shop(minCustPerHour,maxCustPerHour, avgCookiesPerSale, customersEachHour, cookiesEachHour, totalDailyCookies) {
  this.name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  
}
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
Shop.prototype.getCustEachHour = function(){
  var randomIndex = (Math.random() * this.customersEachHour.length);
  return this.customersEachHour[i];
};
Shop.prototype.getCookieEachHour = function(){
  var randomIndex = Math.floor(Math.random() * this.cookiesEachHour.length);
  return this.cookiesEachHour[i];
};
Shop.prototype.render = function(){
  var parentElement = document.getElementById('shopCookies');
  var article = document.createElement('article'); parentElement.appendChild(article);
  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);
  var shopPara = document.createElement('p');
  


}
var seattleShop = new Shop ('Seattle', 23, 65, 6.3);
var tokyoShop = new Shop ('Tokyo', 3, 24, 1.2);
var dubaiShop = new Shop ('Dubai', 11, 38, 3.7);
var parisShop = new Shop ('Paris', 20, 38, 2.3);
var limashop = new Shop ('Lima', 2, 16, 4.6);








