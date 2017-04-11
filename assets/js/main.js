var imgs = document.querySelectorAll(".img")
imgs.forEach(function(e){
	e.addEventListener("click", showModal)
	function showModal() {
		var modal = document.getElementById("modal");
 		modal.style.display="block";
 		var imgModal = document.getElementById("imgModal");
 		imgModal.src = e.src;
 		console.log(e.src);
 		
	}
})

var close = document.getElementById("close");
close.addEventListener("click",closeModal);
function closeModal(){
 modal.style.display="none";	
}
