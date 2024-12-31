console.log("Welcome to Spotify")

//initialize the variables
let SongIndex = 0;
let audioElement = new Audio(`songs/Bol.mp3`);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    {SongName: "Andekhi ANJANI SI",filePath:"songs/song1.mp3" , coverPath: "Valam-Made-in-china.jpg"},
    {SongName: "Barbadiyaan",filePath: "songs/barbadiyan.mp3", coverPath: "Barbaadiyan.jpg"},
    {SongName: "Bol Na Halke Halke",filePath: "songs/Bol.mp3", coverPath: "Bol Na Halke Halke.jpg"},
    {SongName: "Rangeeni ",filePath: "songs/Rangeeni.mp3", coverPath: "rangeeni.jpg"},
    {SongName: "Valam (Unplugged) ",filePath: "songs/Valam.mp3", coverPath: "Valam-Made-in-china.jpg"},
    {SongName: "Piya Ji Ke Muski",filePath: "songs/Piya.mp3", coverPath: "piya-ji-ke.jpg"},
    {SongName: "Super Khiladi 4",filePath: "songs/super.mp3", coverPath: "Valam-Made-in-china.jpg"},
    {SongName: "Bol Na Halke Halke",filePath: "songs/Bol.mp3", coverPath: "Bol Na Halke Halke.jpg"},

]

 //songs[8]={SongName: "Bol Na Halke Halke",filePath: "songs/Bol.mp3", coverPath: "Bol Na Halke Halke.jpg"},
//  console.log(songs.length);
//  console.log(songs[8])
//  songs.forEach((i)=>{
//     console.log(i);
 //});
songItems.forEach((element,i)=>{
    element.getElementsByClassName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
  //  element.getElementsByClassName('SongItemPlay')[0]= songs[i].filePath;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-solid,fa-play');
      masterPlay.classList.add('fa-pause-Circle');
      gif.style.opacity=1;
      console.log("playing")
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-Circle');
        masterPlay.classList.add('fa-solid,fa-play');
        gif.style.opacity=0;
        console.log("paused")
    }
});
    //listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update Seeekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-solid,fa-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            SongIndex = parseInt(e.target.id);
            // e.target.classList.remove("fa-solid,fa-play");
            // e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${SongIndex}.mp3`;
            //audioElement.currentTime = 0;
            if(audioElement.paused ){
                audioElement.play();
                masterPlay.classList.remove('fa-solid,fa-play');
                masterPlay.classList.add('fa-pause-Circle');
                gif.style.opacity=1;
                console.log("playing")
              }else{
                  audioElement.pause();
                  masterPlay.classList.remove('fa-pause-Circle');
                  masterPlay.classList.add('fa-solid,fa-play');
                  gif.style.opacity=0;
                  console.log("paused")
              }
            
        })
});

document.getElementById("next").addEventListener('click',()=>{
    if(SongIndex > 9){
        SongIndex = 0;
    }else{
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid,fa-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener('click',()=>{
    if(SongIndex <= 0){
        SongIndex = 0;
    }else{
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-solid,fa-play');
    masterPlay.classList.add('fa-pause-circle');
})