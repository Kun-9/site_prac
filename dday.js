//디데이 종료 일자 설정
var countDownDate = new Date("July 28, 2021 00:00:00").getTime();
// 1초마다 갱신되도록 함수 생성,실행
var x = setInterval(function() { // 오늘 날짜 등록

    var now = new Date().getTime(); // 종료일자에서 현재일자를 뺀 시간
    var distance = countDownDate - now; // 각 변수에 일, 시, 분, 초를 등록
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000); //id가 d-day인 HTML코드에 내용 삽입
    if(h < 0&& m < 0&& s < 0) document.getElementById("d-day").innerHTML = "D-DAY <br><br> ㅎ 유섭이 생축 ㅎ" ;
    else {
        document.getElementById("d-day").innerHTML = "SEED's BIRTH <br><br>" + h + "H " + m + "M " + s + "S";
    }
});
