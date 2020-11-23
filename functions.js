var activePage = "home";

function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista"); 
    }
}

function hidePreviewPage(){
    hide(activePage);
}

function showPage(pageId) {
    hidePreviewPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId
}

function inItMenu(){
    console.warn("prepare clicks on links");
    document.addEventListener("click", function(e){
        var link = e.target;
        if( link.matches("#top-menu-bar a")){
            var id = link.innerHTML.toLowerCase();
            showPage(id)
        }
    })
}

inItMenu();

showPage(activePage);

var skills = [ 
    "HTML",
    "CSS", 
    "JavaScript",
    "Java"
];

var skillsLi = skills.map(function(skill){
    return "<li>" + skill + "</li>";
});

//to doo add fauvorite skills
var ul = document.querySelector("#skills ul");
ul.innerHTML =  skillsLi.join("");