// function example() :void {
//     const audioElement = document.getElementById('btn_audio') as HTMLAudioElement;
//     audioElement.currentTime = 0; //連続クリックに対応
//     audioElement.play(); //クリックしたら音を再生
// }
// 乱数生成
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var Random = getRandomInt(2);
function YJYarimasune() {
    // Main
    if (Random >= 1) {
        var audioElement = document.getElementById('YJYarimasune_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
    else {
        var audioElement = document.getElementById('YJThis_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}
function KMRWhyDoYouNeedToSeeIt() {
    var audioElement = document.getElementById('KMRWhyDoYouNeedToSeeIt_audio');
    audioElement.currentTime = 0; //連続クリックに対応
    audioElement.play(); //クリックしたら音を再生
}
function MURYes() {
    var audioElement = document.getElementById('MURYes');
    audioElement.currentTime = 0; //連続クリックに対応
    audioElement.play(); //クリックしたら音を再生
}
