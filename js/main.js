document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("last-mod").innerHTML = document.lastModified;

const links = [
    {
        label: "Week 01",
        url: "week01/index.html"
    },
    {
        label: "Week 02",
        url: "week02/index.html"
    }
]

let wklnk = "";

links.forEach(function FuncWeekLinks(value) {
    wklnk += "<li> <a href=\"" + value.url + "\"> " + value.label + "</a> </li>"
})

document.getElementById("week-links").innerHTML = wklnk