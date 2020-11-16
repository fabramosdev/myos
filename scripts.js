const card = document.getElementById("os_card");
let os = "Desconhecido";

if (navigator.appVersion.indexOf('Win') != -1) os = "Windows";
if (navigator.appVersion.indexOf('Mac') != -1) os = "MacOs";
if (navigator.appVersion.indexOf('X11') != -1) os = "UNIX";
if (navigator.appVersion.indexOf('Linux') != -1) os = "Linux";

card.innerHTML = (`Seu Sistema: ${os}`);