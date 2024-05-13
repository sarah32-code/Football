"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City" }
];

window.onload = function () {
    loadTeams();
};

function loadTeams() {
    let select = document.getElementById("teamSelect");
    let defaultOption = document.createElement("option");
    defaultOption.text = "Select a team";
    defaultOption.value = "";
    select.appendChild(defaultOption);

    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
        let option = document.createElement("option");
        option.value = team.code;
        option.text = team.name;
        select.appendChild(option);
    }
}

function showTeamInfo(teamCode) {
    let selectedTeam;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].code === teamCode) {
            selectedTeam = teams[i];
            break;
        }
    }
    let messageBox = document.getElementById("teamInfo");
    if (selectedTeam) {
        messageBox.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}.`;
    } else {
        messageBox.innerHTML = "Please select a team.";
    }
}