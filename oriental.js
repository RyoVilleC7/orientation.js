
//ウィンドウサイズ取得
var windowSize = {
    w: innerWidth,
    h: innerHeight
}
    
//デバイスの向き取得
var angle = screen && screen.orientation && screen.orientation.angle;
if ( angle === undefined ) { angle = window.orientation; };

//要素生成＆挿入
var cautionElem = document.createElement('div');
cautionElem.setAttribute('id', 'cautionElem');
cautionElem.innerText = 'デバイスを横向きにしてください';

//フラグ
var orientationFlg = false;

function getDeviceDirection (){
    
    if( angle === 0 && !orientationFlg){
        cautionElem.style.display = 'none';
        orientationFlg = true;
      } else if(!orientationFlg){
        cautionElem.style.display = 'block';
        orientationFlg = true;
      }
    
    document.body.insertBefore(cautionElem, document.body.firstChild);
    
    window.addEventListener('orientationchange', () => {
    
        angle = window.orientation;
        orientationFlg = false;
    
        if( angle === 0 && !orientationFlg){
            cautionElem.style.display = 'none';
            orientationFlg = true;
          } else if(!orientationFlg){
            cautionElem.style.display = 'block';
            orientationFlg = true;
          }
    });
};

//初回判定
if(windowSize.w <= 450 || windowSize.h <= 450){
    getDeviceDirection();
}


//リサイズ判定
window.addEventListener('resize', function (){

    windowSize.w = innerWidth;
    windowSize.h = innerHeight;

    if(windowSize.h <= 450){
        getDeviceDirection();
    }
})