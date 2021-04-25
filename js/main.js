const links = document.querySelectorAll(".scroll_to");
links.forEach((item)=>{
	item.addEventListener("click", ()=>{
		const el = document.getElementById(item.getAttribute("data-link"));
		el.scrollIntoView({behavior:"smooth", block:"end"})
	})
})
function ScrollToFrameworks(){
	var sf = document.getElementById("Frameworks");
sf.scrollIntoView({behavior:"smooth", block:"end"});
}