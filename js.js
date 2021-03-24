var play = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var XorO = 0,
    player = 1;

function start(){
    document.getElementById("field").style.display = "table";
    document.getElementById("play-btn").style.display = "none";
}

function add2A(data) {
    var store = data.split('-');
    play[store[0]][store[1]] = player;
    console.log(play);
    if (player == 1) {
        player = 2;
        return;
    }
    if (player == 2) {
        player = 1;
        return;
    }
}

function check() {
    for (var i = 0; i < 3; i++) {
        var dem = 0;
        for (var j = 0; j < 3; j++){
            if(play[i][j]==1)
                dem++;
        }
        if(dem==3)
            return 1;
    }
    for (var i = 0; i < 3; i++) {
        var dem = 0;
        for (var j = 0; j < 3; j++){
            if(play[i][j]==2)
                dem++;
        }
        if(dem==3)
            return 1;
    }
    for (var i = 0; i < 3; i++) {
        var dem = 0;
        for (var j = 0; j < 3; j++){
            if(play[j][i]==1)
                dem++;
        }
        if(dem==3)
            return 1;
    }
    for (var i = 0; i < 3; i++) {
        var dem = 0;
        for (var j = 0; j < 3; j++){
            if(play[j][i]==2)
                dem++;
        }
        if(dem==3)
            return 1;
    }
    var dem=0
    for(var i =0;i<3;i++){
        if(play[i][i]==1)
            dem++;
    }
    if(dem==3)
        return 1;
    dem=0;
    for(var i =0;i<3;i++){
        if(play[i][i]==2)
            dem++;
    }
    if(dem==3)
        return 1;
    if((play[2][0]==1&&play[1][1]==1&&play[2][0]==1)||(play[2][0]==2&&play[1][1]==2&&play[2][0]==2))
        return 1;
    return 0;
}

$(function () {
    $(".square").click(function () {
        if ($(this).hasClass("ticked"))
            alert("Ô này đã được chọn !!");
        else {
            add2A($(this).children().text());
            var text = "O";
            $(this).addClass("ticked");
            if (XorO % 2 == 1)
                text = "Y";
            $(this).text(text);
            if(check())
                alert("Người chơi "+text+" chiến thắng !!");
            XorO++;
        }
    });
});