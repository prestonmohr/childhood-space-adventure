const title = document.createElement('div');
title.style.position = 'fixed';
title.style.top = '5px';
title.style.left = '36px';
title.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
title.style.padding = '5px 10px';
title.style.borderRadius = '20px';
title.style.fontSize = '12px';
title.style.fontFamily = 'Arial, Helvetica, sans-serif';
title.style.color = 'rgba(255, 255, 255, 0.75)';
title.style.zIndex = '999999';
title.textContent = `childhood-space-adventure`;
document.body.appendChild(title);

const backArrow = document.createElement('div');
backArrow.style.position = 'fixed';
backArrow.style.top = '5px';
backArrow.style.left = '5px';
backArrow.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
backArrow.style.padding = '5px 10px';
backArrow.style.borderRadius = '20px';
backArrow.style.fontSize = '12px';
backArrow.style.fontFamily = 'Arial, Helvetica, sans-serif';
backArrow.style.color = 'rgba(255, 255, 255, 0.75)';
backArrow.style.zIndex = '999999';
var linkGit = document.createElement("a");
linkGit.href = "https://github.com/prestonmohr/childhood-space-adventure";
linkGit.textContent = "<";
linkGit.target="_blank"
linkGit.style.fontSize = '12px';
linkGit.style.fontFamily = 'Arial, Helvetica, sans-serif';
linkGit.style.color = 'rgba(255, 255, 255, 0.75)';
linkGit.style.textDecoration = 'none';
backArrow.appendChild(linkGit);
document.body.appendChild(backArrow);

const displayPalette = document.createElement('div');
displayPalette.style.position = 'fixed';
displayPalette.style.bottom = '5px';
displayPalette.style.left = '5px';
displayPalette.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayPalette.style.padding = '5px 10px';
displayPalette.style.borderRadius = '20px';
displayPalette.style.fontSize = '12px';
displayPalette.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayPalette.style.color = 'rgba(255, 255, 255, 0.75)';
displayPalette.style.zIndex = '999999';
displayPalette.textContent = "spacescape";
document.body.appendChild(displayPalette);

const displayCredit = document.createElement('div');
displayCredit.style.position = 'fixed';
displayCredit.style.bottom = '5px';
displayCredit.style.right = '5px';
displayCredit.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayCredit.style.padding = '5px 10px';
displayCredit.style.borderRadius = '20px';
displayCredit.style.fontSize = '12px';
displayCredit.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayCredit.style.color = 'rgba(255, 255, 255, 0.75)';
displayCredit.style.zIndex = '999999';
var link = document.createElement("a");
link.href = "https://www.prestonmohr.com";
link.textContent = "preston mohr";
link.target="_blank"
link.style.fontSize = '12px';
link.style.fontFamily = 'Arial, Helvetica, sans-serif';
link.style.color = 'rgba(255, 255, 255, 0.75)';
link.style.textDecoration = 'none';
displayCredit.appendChild(link);
document.body.appendChild(displayCredit);

const displayYear = document.createElement('div');
displayYear.style.position = 'fixed';
displayYear.style.bottom = '33px';
displayYear.style.right = '5px';
displayYear.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayYear.style.padding = '5px 10px';
displayYear.style.borderRadius = '20px';
displayYear.style.fontSize = '12px';
displayYear.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayYear.style.color = 'rgba(255, 255, 255, 0.75)';
displayYear.style.zIndex = '999999';
displayYear.textContent = '2023';
document.body.appendChild(displayYear);
