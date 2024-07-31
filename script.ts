// function example() :void {
//     const audioElement = document.getElementById('btn_audio') as HTMLAudioElement;
//     audioElement.currentTime = 0; //連続クリックに対応
//     audioElement.play(); //クリックしたら音を再生
// }

// 乱数生成
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let Random = getRandomInt(2);

function YJYarimasune() :void {
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
    const audioElement = document.getElementById('KMRWhyDoYouNeedToSeeIt_audio') as HTMLAudioElement;
    audioElement.currentTime = 0; //連続クリックに対応
    audioElement.play(); //クリックしたら音を再生
}

function MURYes() :void {
    const audioElement = document.getElementById('MURYes') as HTMLAudioElement;
    audioElement.currentTime = 0; //連続クリックに対応
    audioElement.play(); //クリックしたら音を再生
}