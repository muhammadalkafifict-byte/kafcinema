// SWIPER
new Swiper(".swiper", {
  slidesPerView:2,
  spaceBetween:20,
  loop:true
});

// SEAT
const container = document.getElementById("seats");
let total = 0;

for(let i=0;i<30;i++){
  let seat = document.createElement("div");
  seat.classList.add("seat");

  seat.onclick=()=>{
    seat.classList.toggle("selected");

    if(seat.classList.contains("selected")){
      total += 50000;
    } else {
      total -= 50000;
    }

    document.getElementById("total").innerText = total;
  }

  container.appendChild(seat);
}