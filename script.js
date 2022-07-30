;(function(){
    const month = document.querySelectorAll('.month')
    const anual = document.querySelectorAll('.anual')
    const btn = document.querySelector('.slider')

    btn.addEventListener("click", function(){


        for (let i=0; i < anual.length; i++) {

            if (anual[i].style.display === "none") {
                anual[i].style.display = "inline-flex";
            } else {
                anual[i].style.display = "none";
            }

            anual[i].classList.toggle('.month')
        }

        for (let j=0; j< month.length; j++) {
            if (month[j].style.display === "inline-flex") {
                month[j].style.display = "none";
            } else {
                month[j].style.display = "inline-flex";
            }

            month[j].classList.toggle('.month')
        }
    })
})()