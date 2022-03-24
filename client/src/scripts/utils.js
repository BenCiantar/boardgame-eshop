export function sortItems(data, sortBy) {
    let sortedItems = [];
    if (sortBy == "Price-high-low") {
        sortedItems = data.sort((a, b) => { return b.price - a.price; });
    } else if (sortBy == "Price-low-high") {
        sortedItems = data.sort((a, b) => { return a.price - b.price; });
    } else if (sortBy == "Release-new-old") {
        sortedItems = data.sort((a, b) => { return b.release - a.release; });
    } else if (sortBy == "Release-old-new") {
        sortedItems = data.sort((a, b) => { return a.release - b.release; });
    } else if (sortBy == "Alpha-a-z") {
        sortedItems = data.sort((a, b) => {
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });
    } else if (sortBy == "Alpha-z-a") {
        sortedItems = data.sort((a, b) => {
            if(a.title > b.title) { return -1; }
            if(a.title < b.title) { return 1; }
            return 0;
        });
    }
    return sortedItems;
}