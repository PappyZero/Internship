
// Slider
let slider_Container = document.querySelector(".slider_container");
let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");
let slide_Width = slides[0].clientWidth;

let slideindex = 0;

// Function
function show_Slider(index)
{
    if(index < 0)
    {
        index = slides.length - 1;
    }

    else if(index >= slides.length)
    {
        index = 0;
    }

    slider_Container.style.transform = `translateX(-${slide_Width * index}px)`;
    slideindex = index;

    // Updating the slider based on the indicator.
    indicators.forEach((indicator, i) =>
    {
        if(i === index)
        {
            indicator.classList.add("active");
        }

        else
        {
            indicator.classList.remove("active");
        }
    });

    //  Function for the next Slide.
    function nextSlide()
    {
        show_Slider(slideindex + 1);
    }
    
    // For the auto rolling of the slides every 3 seconds.
    setInterval(nextSlide, 3000); 
}
