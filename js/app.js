'use strict';
console.log('app.js is connected.');




// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


var storehours = ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var Seattle = {
  name: 'Seattle',
  minCustPerHour:23,                                     maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies: 0,
  calcCustomersEachHour:function(){
    for(var i = 0; i < hours.length;i++) {
      this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length;i++) {
      var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;    
    }
  },
  render() {

    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('Seattle');
    for(var i = 0;i < hours.length; i++) {
      var listItem = document.createElement('li');
      
      listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
    unorderedList.appendChild(listItem);
  }
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
var allShops = [Seattle];

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
};


//from code provided by craig

var Tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,                                                                      
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies: 0,
  calcCustomersEachHour:function(){
    for(var i = 0; i < hours.length;i++) {
      this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length;i++) {
      var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;    
    }
  },
  render() {

    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('Tokyo');
    for(var i = 0;i < hours.length; i++) {
      var listItem = document.createElement('li');
      
      listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
    unorderedList.appendChild(listItem);
  }
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
var allShops = [Tokyo];

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
};


var Dubai = {
  name: 'Dubai',
  minCustPerHour: 11,                                                                      
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies: 0,
  calcCustomersEachHour:function(){
    for(var i = 0; i < hours.length;i++) {
      this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length;i++) {
      var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;    
    }
  },
  render() {

    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('Dubai');
    for(var i = 0;i < hours.length; i++) {
      var listItem = document.createElement('li');
      
      listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
    unorderedList.appendChild(listItem);
  }
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
var allShops = [Dubai];

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
};


var Paris = {
  name: 'Paris',
  minCustPerHour: 20,                                                                      
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies: 0,
  calcCustomersEachHour:function(){
    for(var i = 0; i < hours.length;i++) {
      this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length;i++) {
      var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;    
    }
  },
  render() {

    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('Paris');
    for(var i = 0;i < hours.length; i++) {
      var listItem = document.createElement('li');
      
      listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
    unorderedList.appendChild(listItem);
  }
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
var allShops = [Paris];

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
};


var Lima = {
  name: 'Lima',
  minCustPerHour: 2,                                                                      
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies: 0,
  calcCustomersEachHour:function(){
    for(var i = 0; i < hours.length;i++) {
      this.customersEachHour.push(random(this.minCustPerHour,this.maxCustPerHour));

    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length;i++) {
      var oneHour = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;    
    }
  },
  render() {

    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('Lima');
    for(var i = 0;i < hours.length; i++) {
      var listItem = document.createElement('li');
  
      listItem.textContent = hour[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total:' + this.totalDailyCookies + 'cookies';
    unorderedList.appendChild(listItem);
  }
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+ min;
}
var allShops = [Lima];

function renderAllShops() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
};










