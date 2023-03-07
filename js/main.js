let about = $('#About').offset().top
let our = $('#our').offset().top
let gallery = $('#gallery').offset().top
let blog = $('#blog').offset().top
let contact = $('#contact').offset().top
$(window).scroll(() => {
    let scroll = $(window).scrollTop()
    if (scroll >= about - 50) {
        $('.navbar').css('background-color', 'black')
        document.querySelector('.active').classList.remove('active')
        $('#myabout').addClass('active')
    } else {
        $('.navbar').css('background-color', 'transparent')
        document.querySelector('.active').classList.remove('active')
        $('#myHome').addClass('active')
    }
    if (scroll >= our) {
        document.querySelector('.active').classList.remove('active')
        $('#myour_offer').addClass('active')
    }
    if (scroll >= gallery) {
        document.querySelector('.active').classList.remove('active')
        $('#mygallery').addClass('active')
    }
    if (scroll >= blog) {
        document.querySelector('.active').classList.remove('active')
        $('#myblog').addClass('active')
    }
    if (scroll >= contact) {
        document.querySelector('.active').classList.remove('active')
        $('#mycontact').addClass('active')
    }

})