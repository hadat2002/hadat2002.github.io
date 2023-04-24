// đóng mỏ form login, register
const showModalRegister = document.querySelector('#js-show-modal-register');
const closeModalRegister = document.querySelector('#js-close-modal-register');
const showModalLogin = document.querySelector('#js-show-modal-login');
const closeModalLogin = document.querySelector('#js-close-modal-login');
showModalRegister.addEventListener('click', function(){
    document.querySelector('.modal-register.modal').style.display = 'flex';
})

closeModalRegister.addEventListener('click', function(){
    document.querySelector('.modal-register.modal').style.display = 'none';
})

showModalLogin.addEventListener('click', function(){
    document.querySelector('.modal-login.modal').style.display = 'flex';
})

closeModalLogin.addEventListener('click', function(){
    document.querySelector('.modal-login.modal').style.display = 'none';
})


// slider ---------------------------------
const rightBtn = document.querySelector('.slider-btn-right'); // lấy btn-right
const leftBtn = document.querySelector('.slider-btn-left'); // lấy btn-left
const imgNumber = document.querySelectorAll('.slider-content-top img'); // biến lấy hết thẻ img
const imgNumberLi = document.querySelectorAll('.slider-content-bottom li'); // biến lấy ra hết thẻ li là con sl-bttom
// console.log(imgNumber.length);
let index = 0;
function removeActive() { // hàm xóa active
    let imgActive = document.querySelector('.slider-active');
    imgActive.classList.remove("slider-active");
}
// console.log(rightBtn);
rightBtn.addEventListener("click", function() { // bắt sk click vào btn right
    index = index+1; // cho index + 1
    if (index > imgNumber.length-1) { // nếu index lớn hơn số lượng img-1 cho index = 0 qua về img 1
        index = 0;
    }
    removeActive();
    document.querySelector(".slider-content-top").style.right = index * 100+"%"; // thêm style right vào slider-content-top và tính toán 
    imgNumberLi[index].classList.add("slider-active");// thêm active vào li

})

leftBtn.addEventListener("click", function() {
    index = index-1;
    if (index < 0) {
        index = imgNumber.length-1;
    }
    removeActive();
    document.querySelector(".slider-content-top").style.right = index * 100+"%";
    imgNumberLi[index].classList.add("slider-active");

})
// slider 1 ---------------------------------

// console.log(imgNumberLi);

imgNumberLi.forEach(function(image, index) { // foreach trả về callback phần từ mảng + index
    image.addEventListener("click", function() { // image là từng li được lấy
        document.querySelector(".slider-content-top").style.right = index * 100+"%";
        removeActive();
        image.classList.add("slider-active")
    })
})

/*chạy tự đông slider*/
/*
function imgAuto (){
    index = index+1;
    if (index > imgNumber.length-1) {
        index = 0;
    }
    removeActive();
    // console.log(index); 
    document.querySelector(".slider-content-top").style.right = index * 100+"%";
    imgNumberLi[index].classList.add("slider-active");
}
setInterval(imgAuto, 5000);
*/

//----------------------------------------------------------------------------------
//slider-product
const rightBtntwo = document.querySelector('.slider-product-btn-right__two'); // lấy btn-right
const leftBtntwo = document.querySelector('.slider-product-btn-left__two'); // lấy btn-left
var indextwo = 0;
const imgNumbertwo = document.querySelectorAll('.slider-product-container__warp .slider-product__list'); // biến lấy hết slider list

rightBtntwo.addEventListener("click", function() { // bắt sk click vào btn right
    indextwo = indextwo+1; // cho index + 1
    if (indextwo > imgNumbertwo.length-1) { // nếu index lớn hơn số lượng img-1 cho index = 0 qua về img 1
        indextwo = 0;
    }
    document.querySelector(".slider-product-container__warp").style.right = indextwo * 100+"%"; // thêm style right vào slider-content-top và tính toán 
})

leftBtntwo.addEventListener("click", function() {
    indextwo = indextwo-1;
    if (indextwo < 0) {
        indextwo = imgNumbertwo.length-1;
    }
    document.querySelector(".slider-product-container__warp").style.right = indextwo * 100+"%";
})


function renderView(scourerses){
    
}