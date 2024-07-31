// 乱数生成
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function YJYarimasune() {
    var Random = getRandomInt(2);
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
    var Random = getRandomInt(2);
    if (Random >= 1) {
        var audioElement = document.getElementById('KMRStop_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
    else {
        var audioElement = document.getElementById('KMRWhyDoYouNeedToSeeIt_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}
function MURYes() {
    var Random = getRandomInt(2);
    if (Random >= 1) {
        var audioElement = document.getElementById('MURPocchama_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
    else {
        var audioElement = document.getElementById('MURYes_audio');
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}
