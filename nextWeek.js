
let e = new Date();

for (i = 1; i <= dayLen; i++) 
{
document.write(dayNames[d.getDay()] + (d.getDate()) + monthNames[d.getMonth()] + d.getFullYear() + "<br>" + "<br>");
d.setDate(new Date().getDate() + 7 + i);
}