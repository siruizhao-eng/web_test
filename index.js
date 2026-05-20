window.onload = function () {
    var loading = document.getElementById("loading");
    if (loading) {
        loading.style.display = "none";
    }
};

function closeAll() {
    document.getElementById("about_container").style.display = "none";
    document.getElementById("work_container").style.display = "none";
    document.getElementById("contact_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
}

function showabout() {
    closeAll();
    document.getElementById("about_container").style.display = "block";
}

function showwork() {
    closeAll();
    document.getElementById("work_container").style.display = "block";
}

function showcontact() {
    closeAll();
    document.getElementById("contact_container").style.display = "block";
}

function showprojects() {
    closeAll();
    document.getElementById("projects_container").style.display = "block";
}

function closeabout() {
    document.getElementById("about_container").style.display = "none";
}

function closework() {
    document.getElementById("work_container").style.display = "none";
}

function closecontact() {
    document.getElementById("contact_container").style.display = "none";
}

function closeprojects() {
    document.getElementById("projects_container").style.display = "none";
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAll();
    }
});
