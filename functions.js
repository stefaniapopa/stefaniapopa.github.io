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

function show(id) {
    var elm = document.getElementById(id);
    if (elm) {
        elm.style.display = '';
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


function showHome() {
    hideAllPages();
    show("home");
}

function showSkills() {
    hideAllPages();
    show("skills")
}

function showProjects() {
    hideAllPages();
    show("project");
}

function showLanguages() {
    hideAllPages();
    show("languages");
}
