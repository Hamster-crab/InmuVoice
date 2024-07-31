// 乱数生成
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function YJYarimasune() :void {
    let Random = getRandomInt(2);
    // Main
    if (Random >= 1) {
    const audioElement = document.getElementById('YJYarimasune_audio') as HTMLAudioElement;
    audioElement.currentTime = 0; //連続クリックに対応
    audioElement.play(); //クリックしたら音を再生
    } else {
        const audioElement = document.getElementById('YJThis_audio') as HTMLAudioElement;
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}

function KMRWhyDoYouNeedToSeeIt() :void {
    let Random = getRandomInt(2);
    if (Random >= 1) {
        const audioElement = document.getElementById('KMRStop_audio') as HTMLAudioElement;
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    } else {
        const audioElement = document.getElementById('KMRWhyDoYouNeedToSeeIt_audio') as HTMLAudioElement;
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}

function MURYes() :void {
    let Random = getRandomInt(2);
    if (Random >= 1) {
        const audioElement = document.getElementById('MURPocchama_audio') as HTMLAudioElement;
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    } else {
        const audioElement = document.getElementById('MURYes_audio') as HTMLAudioElement;
        audioElement.currentTime = 0; //連続クリックに対応
        audioElement.play(); //クリックしたら音を再生
    }
}