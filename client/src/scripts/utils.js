export function sortItems(data, sortBy) {
    let unsortedItems = [...data];
    let sortedItems = [];
    if (sortBy == "Price-high-low") {
        sortedItems = unsortedItems.sort((a, b) => { return b.price - a.price; });
    } else if (sortBy == "Price-low-high") {
        sortedItems = unsortedItems.sort((a, b) => { return a.price - b.price; });
    } else if (sortBy == "Release-new-old") {
        sortedItems = unsortedItems.sort((a, b) => { return new Date(b.releaseDate) - new Date(a.releaseDate); });
    } else if (sortBy == "Release-old-new") {
        sortedItems = unsortedItems.sort((a, b) => { return new Date(a.releaseDate) - new Date(b.releaseDate); });
    } else if (sortBy == "Alpha-a-z") {
        sortedItems = unsortedItems.sort((a, b) => {
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });
    } else if (sortBy == "Alpha-z-a") {
        sortedItems = unsortedItems.sort((a, b) => {
            if(a.title > b.title) { return -1; }
            if(a.title < b.title) { return 1; }
            return 0;
        });
    }
    return sortedItems;
}

export function toggleHidden (target){
    document.getElementById(target).classList.toggle("hidden");
}