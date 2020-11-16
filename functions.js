function hide(id) {
    // document.getElementById(id).style.display = 'none';
    var el = document.getElementById(id);
    //console.info("hide" + id, el);
    if (el) {
        el.style.display = "none";
    } else {
        // console.error("elementul nu exista"); 
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

function showHome() {
    showPage("home");
}

function showSkills() {
    showPage("skills")
}

function showProjects() {
    showPage("project");
}

function showLanguages() {
    showPage("languages");
}
