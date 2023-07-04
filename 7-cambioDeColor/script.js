function ToggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle("active");
    const navigation =document.querySelector('.navigation');
    navigation.classList.toggle('active')
}
function ImgSlider(parametro){
    document.getElementById('slider').src=parametro;
}