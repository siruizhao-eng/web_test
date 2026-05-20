$(document).ready(function () {
    $("#loading").fadeOut(1200);
});

function closeAll() {
    $("#about_container").fadeOut(300);
    $("#work_container").fadeOut(300);
    $("#contact_container").fadeOut(300);
    $("#projects_container").fadeOut(300);
}

function showabout() {
    closeAll();
    $("#about_container").fadeIn(300);
}

function showwork() {
    closeAll();
    $("#work_container").fadeIn(300);
}

function showcontact() {
    closeAll();
    $("#contact_container").fadeIn(300);
}

function showprojects() {
    closeAll();
    $("#projects_container").fadeIn(300);
}

function closeabout() {
    $("#about_container").fadeOut(300);
}

function closework() {
    $("#work_container").fadeOut(300);
}

function closecontact() {
    $("#contact_container").fadeOut(300);
}

function closeprojects() {
    $("#projects_container").fadeOut(300);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAll();
    }
});
