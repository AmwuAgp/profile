const SIZE = 140; // 枚数
var tmp = {};
    function loadImageToTmp(){
        for(var i=1;i<=SIZE;i++){
            const _i = i;
            const img = new Image();
            tmp[_i] = null;
            img.src = "anim/img ("+_i+").png"; // 連続するファイル名
            img.addEventListener("load",()=>{
                tmp[_i] = img;
            })
        }
    }