const uri = 'https://uxcandy.com/~shapoval/test-task-backend/v2/?';

let curUrl = new URL(window.location.href);
let data = {}

function getDataFromUrl() {
    //get parameters from URL if it exist, otherwise set blank data
    if ()
    curUrl.searchParams.get('page') ? data.page = +curUrl.searchParams.get('page') : data.page = 1;
    curUrl.searchParams.get('sortBy') ? data.sortBy = curUrl.searchParams.get('sortBy') : data.sortBy = 'username';
    curUrl.searchParams.get('sortType') ? data.sortType = curUrl.searchParams.get('sortType') : data.sortType = 'desc';
    // put plank data into URL
}
getDataFromUrl();

function insertUrlParam(key, value) {
    data[key] = value;
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({path: newurl}, '', newurl);
    }
}

console.log('refreshed');
