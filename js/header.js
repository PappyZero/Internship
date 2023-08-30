document.getElementById("ho_me"),addEventListener("click", function()
{
    document.getElementById("ho_me").classList.add("active");
    document.getElementById("bro_wse").classList.remove("sign_in_up li a");
    // document.getElementById("upd_ate").classList.remove("active");
});

document.getElementById("bro_wse"),addEventListener("click", function()
{
    // document.getElementById("ho_me").classList.remove("active");
    document.getElementById("bro_wse").classList.add("active");
    // document.getElementById("upd_ate").classList.remove("active");
});

document.getElementById("upd_ate"),addEventListener("click", function()
{
    // document.getElementById("ho_me").classList.remove("active");
    // document.getElementById("bro_wse").classList.remove("active");
    document.getElementById("upd_ate").classList.add("active");
});