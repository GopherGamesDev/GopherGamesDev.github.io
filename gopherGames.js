//
//      Author: Mike Adams
//      Last Edited: 11/26/24
//

let links = document.getElementsByTagName('a');
let currentPage = location.href;
const filters = ["filter1", "filter2", "filter3", "filter4", "filter5"];
let contentFilter = null;

for (let i = 0; i < links.length; i++) {
    if (currentPage == links[i].href) {
        links[i].classList.add("current");
    }
}

if (document.getElementById("dropdownSwitch") != null) {
    dropdownSwitch = document.getElementById("dropdownSwitch")
    filterMenu = document.getElementById("filterMenu");
    filterArrow = document.getElementById("filterArrow");

    dropdownSwitch.addEventListener("click", function () {
        filterMenu.classList.toggle("show");
        filterArrow.classList.toggle("rotate90");
    });
}

for (filter of filters) {
    if (document.getElementById(filter) !== null) {
        if (contentFilter == null) {
            contentFilter = new Filter(filters);
        }

        contentFilter.addFilterableItems(document.getElementsByClassName(filter));

        if (sessionStorage.getItem(filter + " state " + document.title)) {
            document.getElementById(filter).checked = (sessionStorage.getItem(filter + " state " + document.title) == "true");
        }

        document.getElementById(filter).addEventListener('change', function (filter) {
            return (function () {
                contentFilter.toggleFilter(filter);
                sessionStorage.setItem(filter + " state " + document.title, document.getElementById(filter).checked);
            });
        }(filter));  
    }
}

if (document.getElementById("subscribeBanner") !== null) {
    document.getElementById("subButton").addEventListener("click", subscribe);
}

function subscribe() {
    let subscriberEmail = document.getElementById("subEmail").value.trim();
    let re = new RegExp(/^[^@]+@[^@]+\.[^@]+$/);

    try {
        if (subscriberEmail === "yourEmail@example.com") throw "Please enter a valid email";
        if (subscriberEmail === "") throw "Please enter a valid email";
        if (!(re.test(subscriberEmail))) throw "Please enter a valid email";

        document.getElementById("subErr").innerHTML = "Sorry! This is currently for demonstrative purposes only."
    }
    catch (err) {
        document.getElementById("subErr").innerHTML = err;
    }
}