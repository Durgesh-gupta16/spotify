<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="spotify.css">
    <title>Spotify</title>
</head>
<body>
    <nav>
        <ul>
            <li class="brand"><img src="C:\Users\Durgesh\Downloads\all image\spotify-logo.png" alt="spotify">Spotify</li>
            <li>Home</li>
            <li>Search</li>
            <li>PlayList</li>
        </ul>
    </nav>

    <div class="container">
        <div class="songList"> 
            <h1>New PlayList</h1>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="1" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="2" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="3" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="4" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="5" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="6" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="7" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
            <div>
                <div class="songItem">
                    <img class="img" alt="1" >
                    <span class="SongName"></span>
                    <span class="songListPlay"><span class="timeStamp">06:34<i id="8" class="songItemPlay fa-solid fa-play"></i></span></span>
                </div>
            </div>
        </div>
        <div class="songBanner"></div>
    </div>

    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value="0"max="100">
        <div class="icons">
            <i class="fa-solid fa-backward" id="previous"></i>
            <i class="fa-solid fa-play" id="masterPlay"></i>
            <i class="fa-solid fa-forward" id="next"></i>
          <!-- FontQwesome Icon -->
        </div>
        <div class="songInfo">
            <img src="C:\Users\Durgesh\Downloads\all image\giphy.gif" id="gif"><h2> Andekhi Anjani si</h2>
        </div>
    </div>
    

    <script src="https://kit.fontawesome.com/a0d49f4399.js" crossorigin="anonymous"></script>
    <script src="spotify.js"></script>
</body>
</html>
