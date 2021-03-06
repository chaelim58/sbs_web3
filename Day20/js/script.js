$(function() {
    $('#fullpage').fullpage({
        // 2.옵션 지정
        // 섹션(슬라이드) 배경색
        sectionsColor: ['#AB46D2', '#55D8C1', '##0984e3', '#fdcb6e', '#ccddff'],
        // 스크롤 속도
        scrollingSpeed: 500,
        // 연결 링크 (메뉴)
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'footer'],
        // 스크롤바 여부
        scrollBar: true,
        // 키보드 사용 여부
        keyboardScrolling: true,
        // 네비게이션 여부
        navigation: true,
        // 네비게이션 위치
        navigationPosition: 'right',
        // 페이지 내 슬라이드 화살표 여부
        controlArrows: true,

                // 이벤트
                // 페이지 이동 시
                onLeave: function(origin, destination, direction) {
                    console.log('onLeave : 페이지 이동')
                    // origin       : 이동 전 페이지 (원래 있었던 섹션의 정보)
                    // destination  : 이동 후 페이지 (이동하는 다음 섹션에 대한 정보)
                    // direction    : 방향 (up/down)
                    console.log('---------------------------');
                    console.log('orgin: ' + origin);
                    console.log('destination: ' + destination);
                    console.log('direction: ' + direction);
                    console.log('---------------------------');


                    // 2번째 페이지를 떠날 때, 글씨 색 변경
                    if( origin == 2 ){
                        $('#section1 h1').animate({color : 'red'}, 1000)
                    }


                },
                // 페이지 로드(이동) 후
                afterLoad: function(origin, destination, direction) {
                    console.log('afterload : 페이지 로드 후');
                    // 2번째 페이지가 로드되고 나서, 글씨 색 변경
                    if( destination == 2 ) {
                        $('#section1 h1').animate({color : 'white'}, 1000)
                    }
                }
    })
  })