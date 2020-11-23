var activePage = "skills";

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
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId) {
    hidePreviewPage();
    document.getElementById(pageId).style.display = "";
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function inItMenu(){
    console.warn("prepare clicks on links");
    document.addEventListener("click", function(e){
        var link = e.target;
        if( link.matches("#top-menu-bar a")){
            var id = link.getAttribute("data-page");
            showPage(id)
        }
    })
}

inItMenu();

showPage(activePage);

var skills = [ 
    { name: "HTML", endorsements: 15 },
    { name: "CSS", endorsements: 5 }, 
    { name: "JavaScript", endorsements: 20 },
    { name: "Java", endorsements: 2 }
];

var skillsLi = skills.map(function(skill){
    var endorsements = ` <span>&middot; ${skill.endorsements}</span>`;
    return "<li>" + skill.name + endorsements + "</li>";
});

//to doo add fauvorite skills
var ul = document.querySelector("#skills ul");
ul.innerHTML =  skillsLi.join("");