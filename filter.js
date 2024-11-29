// JavaScript source code


class FilterableItem {
    constructor(ele, filterNames) {
        this.content = ele;
        if (JSON.parse(sessionStorage.getItem(this.content.className + document.title))) {
            this.filterNames = new Map(JSON.parse(sessionStorage.getItem(this.content.className + document.title)));
        }
        else {
            this.filterNames = new Map();
        }

        this.updateFilters(filterNames);
    }

    updateVisibility() {
        let visible = true;
        for (const value of this.filterNames.values()) {
            if (value == true) {
                visible = false;
            }
        }

        if (visible) {
            $(this.content).fadeIn();
        }
        else {
            $(this.content).fadeOut();
        }

        this.saveFilters();
    }

    updateFilters(filterNames) {
        let classnames;

        // create array of all classnames
        classnames = this.content.className.split(' ');
        for (let str of classnames) {
            if (filterNames.has(str)) {
                if (!this.filterNames.has(str)) {
                    this.filterNames.set(str, false);
                }
            }
        }

        this.updateVisibility();
    }

    saveFilters() {
        sessionStorage.setItem(this.content.className + document.title, JSON.stringify(Array.from(this.filterNames.entries())));
    }
}

class Filter{
    constructor(filterNames = null, filterableEles = null) {
        this.filterNames = new Set(filterNames);
        this.filterableItems = new Set();

        if (filterableEles != null) {
            this.addFilterableItems(filterableEles);
        }  
    }

    addFilter(...filterNames) {
        for (let name of filterNames) {
            this.filterNames.add(name);
        }
        this.updateFilters();
    }

    addFilterableItems(eleList) {
        let newItem;

        for (let ele of eleList) {
            newItem = true;
            for (const item of this.filterableItems) {
                if (item.content == ele) {
                    newItem = false;
                }
            }     
            if (newItem) {
                this.filterableItems.add(new FilterableItem(ele, this.filterNames));
            }
        }
    }

    toggleFilter(filterName) {
        if (this.filterNames.has(filterName)) {
            for (const item of this.filterableItems) {
                if (item.filterNames.has(filterName)) {
                    item.filterNames.set(filterName, !(item.filterNames.get(filterName)));
                    item.updateVisibility();
                }
            }
        }
        else {
            console.log("Error: Could not toggle filter. Filter " + filterName + " not found");
        }
    }

    updateFilters() {
        for (let item of this.filterableItems) {
            item.updateFilters(this.filterNames);
        }
    }
}