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
let seattle = {
    storeName: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCustCookies: 6.3,
    randomCustPerHour: [],
    salesPerHour: [],
    totalPerHour: 0,
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
seattle.randomCustNumber();
seattle.salesCookies();
seattle.render();
