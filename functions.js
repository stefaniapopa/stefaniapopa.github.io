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


function showHome(){
    hide("languages");
    hide("project");
    hide("skills");
    document.getElementById('home').style.display = '';
}

function showSkills(){
    hide("home");
    hide("project");
    hide("languages");
    document.getElementById('skills').style.display = '';
}

function showProjects(){
    hide("skills");
    hide("home");
    hide("languages");
    document.getElementById("project").style.display = "";
}

function showLanguages(){
    hide("skills");
    hide("home");
    hide("project");
    document.getElementById("languages").style.display = "";
}
