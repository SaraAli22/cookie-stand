'use strict';

 let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm"];
let tableEl=document.getElementById('container');
let store = [];
function Store(storeName, minCustPerHour, maxCustPerHour,avgCustCookies) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHourt =maxCustPerHour;
    this.avgCustCookies = avgCustCookies;
    this.randomCustPerHour= [],
    this.salesPerHour=[],
    this.totalPerHour= 0,
    store.push(this);

}

console.log(store);

Store.prototype.getrandomCustPerHour = function () {
    for (let hour = 0; hour < hours.length; hour++) {
      this.randomCustPerHour.push(Math.floor(getRandomArbitrary(this.minCustPerHour,this.maxCustPerHourt)));
        /*this.randomCustPerHour.push(PerHour);*/
// console.log(this.randomCustPerHour)
    }
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
Store.prototype.GetsalesPerHour = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        let Hhour = Math.ceil(this.avgCustCookies * this.randomCustPerHour[hour]);
        this.salesPerHour.push(Hhour);
        this.totalPerHour += this.salesPerHour[hour];
 console.log (this.totalPerHour);
    }

};

Store.prototype.render = function () {
    let rowEl = document.createElement('tr');
    tableEl.appendChild(rowEl);

    let dataEl = document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = this.storeName;
    for (let hour= 0; hour< hours.length; hour++) {
        let tdEl = document.createElement('td');
        rowEl.appendChild(tdEl);
        tdEl.textContent = this.salesPerHour[hour];
    }
    let tdEl = document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent = this.totalPerHour;
    console.log(this.totalPerHour);
}


let divEl = document.getElementById('div');
let articleEl = document.createElement('article');
divEl.appendChild(articleEl);
/*let tableEl = document.createElement('table');*/
articleEl.appendChild(tableEl);




function TableHeader() {
    let rowEl2 = document.createElement('tr');
    tableEl.appendChild(rowEl2);
    let tableHeader = document.createElement('th');
    rowEl2.appendChild(tableHeader);
    tableHeader.textContent = " ";
    for (let hour = 0; hour < hours.length; hour++) {
        let thEl = document.createElement('th');
        rowEl2.appendChild(thEl);
        thEl.textContent = hours[hour];
    }

    let th2 = document.createElement('th')
    rowEl2.appendChild(th2);
    th2.textContent = 'Daily Location Total'
}

function LastRow() {
    let rowEl3 = document.createElement('tr');
    tableEl.appendChild(rowEl3);
    let thEl3 = document.createElement('th');
    rowEl3.appendChild(thEl3);
    thEl3.textContent = 'Totals';

    let Total = 0;
    for (let hour = 0; hour < hours.length; hour++) {
        let PerhourTotal = 0;
        for (let j = 0; j < store.length; j++) {
            PerhourTotal = PerhourTotal + store[j].salesPerHour[hour];
            Total += store[j].salesPerHour[hour];
        }

        let thEl3 = document.createElement('th');
        rowEl3.appendChild(thEl3);
        thEl3.textContent = PerhourTotal;
    }

   let thEl4 = document.createElement('th');
    rowEl3.appendChild(thEl4);
    thEl4.textContent = Total;
}


TableHeader();

let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getrandomCustPerHour();
seattle.GetsalesPerHour();
seattle.render();

let tokyo =new Store('Tokyo', 3, 24, 1.2);
tokyo.getrandomCustPerHour();
tokyo.GetsalesPerHour();
tokyo.render();

let dubai =new Store('Dubai', 11, 38, 3.7);
dubai.getrandomCustPerHour();
dubai.GetsalesPerHour();
dubai.render();


let paris =new Store('Paris', 20, 38, 2.3);
paris.getrandomCustPerHour();
paris.GetsalesPerHour();
paris.render();


let lima =new Store('Lima', 2, 16, 4.6);
lima.getrandomCustPerHour();
lima.GetsalesPerHour();
lima.render();

LastRow();