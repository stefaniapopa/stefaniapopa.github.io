function hide(id){
    // document.getElementById(id).style.display = 'none';
    var el = document.getElementById(id);
    console.info("hide" + id, el);
    if (el){
        el.style.display="none";
    } else {
        console.error("elementul nu exista");
    }
}

function hideAllPages(){
    hide("home");
    hide("languages");
    hide("project");
    hide("skills");
}

function showHome(){
    hideAllPages();
    document.getElementById('home').style.display = '';
}

function showSkills(){
    hideAllPages();
    document.getElementById('skills').style.display = '';
}

function showProjects(){
    hideAllPages();
    document.getElementById("project").style.display = "";
}

function showLanguages(){
    hideAllPages();
    document.getElementById("languages").style.display = "";
}
