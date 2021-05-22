
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



Store.prototype.getrandomCustPerHour = function () {
    for (let hour = 0; i < hours.length; hour++) {
      PerHour=this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
        this.randomCustPerHour= [].push(PerHour);

    }
}


Store.prototype.salesPerHour = function () {
    for (let hour = 0; i < hours.length; hour++) {
        let Hhour = Math.ceil(this.avgCustCookie * this.randomCustPerHour[hour]);
        this.salesPerHour.push(perhour);
        this.totalPerHour += Hhour;

    }

}

Store.prototype.render = function () {
    let tableC = document.createElement('tr');
    tableEl.appendChild(tableC);

    let body = document.createElement('td');
    tableC.appendChild(body);
    Information.textContent = this.storeName;
    for (let hour= 0; i < hours.length; hour++) {
        let tdEl = document.createElement('td');
        tableC.appendChild(tdEl);
        tdEl.textContent = this.salesPerHour[hour];
    }
    let tdEl = document.createElement('td');
    tableC.appendChild(tdEl);
    tdEl.textContent = this.totalPerHourtotal;
}


let divEl = document.getElementById('Container');
let articleEl = document.createElement('article');
divEl.appendChild(articleEl);
let tableEl = document.createElement('table');
articleEl.appendChild(tableEl);




function tableHeader() {
    let tableC = document.createElement('tr');
    tableEl.appendChild(tableC);
    let tableHeader = document.createElement('th');
    tableC.appendChild(tableHeader);
    tableHeader.textContent = " ";
    for (let hour = 0; hour < hours.length; hour++) {
        let thEl = document.createElement('th');
        tableC.appendChild(thEl);i
        thEl.textContent = hours[hour];
    }

    let th2 = document.createElement('th')
    tableC.appendChild(th2);
    th2.textContent = 'Daily Location Total'
}

function LastRow() {
    let tableC = document.createElement('tr');
    tableEl.appendChild(tableC);
    let Data = document.createElement('td');
    tableC.appendChild(body);
    Data.textContent = 'Totals';

    let Total = 0;
    for (let hour = 0; i < hours.length; hour++) {
        let PerhourTotal = 0;
        for (let i = 0; i < Store.length; i++) {
            PerhourTotal = PerhourTotal + Store[j].salesPerHour[i];
            Total += Store[i].salesPerHour[i];
        }

        let tdElement = document.createElement('td');
        tableC.appendChild(tdElement);
        tdElement.textContent = PerhourTotal;
    }

    let tdElement = document.createElement('td');
    tableC.appendChild(tdElement);
    tdElement.textContent = Total;
}


tableHeader();

let seattle = Store('Seattle', 23, 65, 6.3);
seattle.getrandomCustPerHour();
seattle.salesPerHour();
seattle.render();

let tokyo =Store('Tokyo', 3, 24, 1.2);
tokyo.getrandomCustPerHour();
tokyo.salesPerHour();
tokyo.render();

let dubai =Store('Dubai', 11, 38, 3.7);
dubai.getrandomCustPerHour();
dubai.salesPerHour();
dubai.render();


let paris =Store('Paris', 20, 38, 2.3);
paris.getrandomCustPerHour();
paris.salesPerHour();
paris.render();


let lima =Store('Lima', 2, 16, 4.6);
lima.getrandomCustPerHour();
lima.salesPerHour();
lima.render();

LastRow();