var name = "Ramon Adams"
var role = "Retail Account Executive";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
var biopic = "images/me.jpg";
var formattedbioPic = HTMLbioPic.replace("%data%", biopic);
$("#header").prepend(formattedbioPic);

var bio = {
"name": "Ramon Adams",
"role": "Reatial Account Executive",
"contacts": {
"mobile": "4438754783",
"email": "ramonladams@gmail.com",
"github": "n/A",
"twitter": "n/A",
"location": "GREENSBORO NC"
},
"welcomeMessage":"My name is Ramon Adams , Reatial Account Executive for AT&T",
"skills": ["Great Dad ", "Loving Husband", "A beast on the sticks"]
}

bio.display = function () {
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

};
var work = {
"jobs": [
{
"employer": "AT&T",
"title": "Retail Account Executive",
"location": "GREENSBORO, NC",
"dates": "2010 - Present",
"description": "The best at what i do"
},
{
"employer": "Titan Total Fitness",
"title": "Sales Manaager",
"location": "Happauge, NY",
"dates": "2005 - 2010",
"description": "Sold to everybody"
}
]
}
work.display = function () {
for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedEmployerTitle);
$(".work-entry:last").append(formattedworkLocation);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
};
var projects = {
"projects": [
{
"title": "This is it",
"dates": "2014",
"description": "MY FIRST PROJECT BUT WONT BE MY LAST",
"images": [
"images/att.jpg",
"images/titan.jpg",
]
}
]
}
projects.display = function () {
for (project in projects.projects) {
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedDescription);
if (projects.projects[project].images.length > 0) {
for (image in projects.projects[project].images) {
var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
$(".project-entry:last").append(formattedImage);
}
}
}
}
var education = {
"schools": [
{
//"name": "",
//"city": "",
// leavin out education i have 3/4 required
}
]

};
$(document).click(function (loc) {
var x = loc.pageX;
var y = loc.pageY;
logClicks(x, y);
});


function locationizer(work_obj) {
var locationArray = [];
for (job in work_obj.jobs) {
var newLocation = work_obj.jobs[job].location;
locationArray.push(newLocation);
}
return locationArray;
}
function inName(name) {
name = name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0, 1).toUpperCase() +
name[0].slice(1).toLowerCase();
return name[0] +" " +name[1];
}
bio.display();
work.display();
projects.display();
inName(name);

$("#mapDiv").append(googleMap);


$("#main").append(internationalizeButton);
