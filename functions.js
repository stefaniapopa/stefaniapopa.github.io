function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista"); 
    }
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        console.info("i=", i, pages[i]);
        var id = pages[i].id;
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "";
}

function inItMenu(){
    console.warn("prepare clicks on links");
    document.addEventListener("click", function(e){
        var link = e.target;
        if( link.matches("#top-menu-bar a")){
            var id = link.innerHTML.toLowerCase();
            console.info("click", id);
            showPage(id)
        }
    })
}

inItMenu();

showPage("skills");

var skills = [ "HTML", "CSS", "JavaScript", "Java"];

//to doo add fauvorite skills
var ul = document.querySelector("#skills ul");
ul.innerHTML = "<li>" + skills[0] + "</li>"+
                "<li>" + skills[1] + "</li>"+
                "<li>" + skills[2] + "</li>"+
                "<li>" + skills[3] + "</li>";