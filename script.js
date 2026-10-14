const skills=[
{title:"Programming & Web Development",items:["Java","Python","MATLAB","HTML","CSS","JavaScript"]},
{title:"Databases & Networking Tools",items:["SQL","MySQL Workbench","Cisco Packet Tracer","Postman"]},
{title:"Creative Media",items:["Adobe Premiere Pro","Filmora","OBS Studio","YouTube Management","Content Creation"]},
{title:"Business & Systems Administration",items:["Manager.io","WhatsAuto","Linux Ubuntu","Kali Linux","Dual-Boot Administration"]}
];
const projects=[
{mark:"JAVA",title:"Vehicle Rental Management System",type:"Software Development",desc:"A comprehensive Java-based application using Object-Oriented Programming, custom data structures, and sorting algorithms to efficiently manage vehicle rental operations.",tags:["Java","OOP","Data Structures","Algorithms"]},
{mark:"FILM",title:"More Than Enough — Short Film",type:"Creative Media",desc:"An educational short film created for a university assignment to raise awareness about food waste. I handled scriptwriting, directing, and complete video/audio editing.",tags:["Scriptwriting","Direction","Video Editing","Audio Editing"]},
{mark:"DATA",title:"Academic Research Project",type:"Research & Analytics",desc:"A mini research study analyzing podcast and educational video consumption patterns among university students, from Google Forms data collection through analysis and final presentation.",tags:["Google Forms","Data Collection","Analysis","Presentation"]},
{mark:"WEB",title:"Ranowin Digital Catalog System",type:"Web & Business Systems",desc:"Ongoing development of a dynamic digital catalog and operational workflow for Ranowin Enterprises, including Google Sheets synchronization and customer communication automation.",tags:["HTML","CSS","JavaScript","Google Sheets","Automation"]}
];
function tagList(items,cls){return '<div class="'+cls+'">'+items.map(function(x){return '<span>'+x+'</span>';}).join('')+'</div>';}
document.getElementById("skillsGrid").innerHTML=skills.map(function(s){return '<article class="glass card reveal"><small>SKILL SET</small><h3>'+s.title+'</h3>'+tagList(s.items,"skill-items")+'</article>';}).join('');
document.getElementById("projectsGrid").innerHTML=projects.map(function(p){return '<article class="glass card reveal"><div class="project-mark">'+p.mark+'</div><small>'+p.type.toUpperCase()+'</small><h3>'+p.title+'</h3><p>'+p.desc+'</p>'+tagList(p.tags,"project-tags")+'</article>';}).join('');
const io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target);}});},{threshold:.1});
document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});
const menu=document.getElementById("navLinks");
document.getElementById("menuBtn").onclick=function(){menu.classList.toggle("open");};
document.querySelectorAll(".nav-links a").forEach(function(a){a.onclick=function(){menu.classList.remove("open");};});
const themeBtn=document.getElementById("themeBtn");
if(localStorage.getItem("vidun-theme")==="light")document.body.classList.add("light");
function icon(){themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼";}
icon();
themeBtn.onclick=function(){document.body.classList.toggle("light");localStorage.setItem("vidun-theme",document.body.classList.contains("light")?"light":"dark");icon();};
document.getElementById("facebookLink").onclick=function(e){e.preventDefault();};
document.getElementById("year").textContent=new Date().getFullYear();