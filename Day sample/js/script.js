

$(function() {

    // 메인 메뉴에 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function() {
        $('.submenu').stop().slideDown()
    })

    // 메인 메뉴에 마우스 벗어났을 때
    $('.mainmenu').on('mouseout', function() {
        $('.submenu').stop().slideUp()
    })

    // 탭 메뉴 클릭
    $('.tab-menu').on('click', function() {
        $('.tab-menu').removeClass('active')
        $(this).addClass('active')
    })

    // 탭 전환 - 1
    $('.tab-menu:first').on('click', function() {
        $('#tab-con-1').show()
        $('#tab-con-2').hide()
    })
    
    // 탭 전환 - 2
    $('.tab-menu:nth-of-type(2)').on('click', function() {
        $('#tab-con-1').hide()
        $('#tab-con-2').show()
    })


    // 공지사항의 첫번째 글 클릭
    $('.notice li:first').on('click', function() {
        $('#popup').toggleClass('active')
    })

    // 팝업 닫기 클릭
    $('#popup .btn').on('click', function() {
        $('#popup').toggleClass('active')
    })

})