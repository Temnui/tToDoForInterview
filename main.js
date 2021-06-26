const uri = 'https://uxcandy.com/~shapoval/test-task-backend/v2/?';

let curUrl = new URL(window.location.href);
let data = {}

function getDataFromUrl() {
    curUrl.searchParams('page') ? data.page = +curUrl.searchParams('page') : data.page = 1;
    curUrl.searchParams('sortBy') ? data.sortBy = curUrl.searchParams('sortBy') : data.sortBy = 'username';
    curUrl.searchParams('sortType') ? data.sortType = curUrl.searchParams('sortType') : data.sortType = 'desc';
}
