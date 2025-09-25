// Data

const data = [
    {
        "id": "s1",
        "title": "Sahiba",
        "artist": "Aditya Rikhari",
        "duration": "3:03",
        "release_date": "2023-12-19",
        "genre": "Indie Pop",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e020a47bbe7141fdfe0eb2cdba7",
        "url": './songs/shahiba.mp3.mp3'
    },

    {
        "id": "s2",
        "title": "Pal Pal",
        "artist": "AFUSIC",
        "duration": "2:27",
        "release_date": "2025-02-18",
        "genre": "Pakistani Pop",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e0285c5968be0d0d9c545241124",
        "url": './songs/palpal.mp3.mp3'
    },

    {
        "id": "s3",
        "title": "High On You",
        "artist": "Jind Universe",
        "duration": "2:20",
        "release_date": "2024-12-12",
        "genre": "Love Song",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e02aa37058328313bebc50d17d2",
        "url": './songs/highonyou.mp3.mp3'
    },

    {
        "id": "s4",
        "title": "Jhol",
        "artist": "Maanu",
        "duration": "4:38",
        "release_date": "2024-06-14",
        "genre": "Pakistani Pop",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e021344800458a38197bfc721f3",
        "url": './songs/jhol.mp3.mp3'
    },

    {
        "id": "s5",
        "title": "Afsos",
        "artist": "Anuv Jain, AP Dhillon",
        "duration": "3:11",
        "release_date": "2025-01-30",
        "genre": "Sad Song",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e028537cf974af2c408bdd8e1a6",
        "url": './songs/afsos.mp3.mp3'
    },

    {
        "id": "s6",
        "title": "At Peace",
        "artist": "Karan Aujla",
        "duration": "2:52",
        "release_date": "2025-06-26",
        "genre": "Gangster",
        "cover_image": "https://i.scdn.co/image/ab67616d00001e02786a26c64ff6b997a9552910",
        "url": './songs/atpeace.mp3.mp3'
    }
]

// Collecting Data 

const container = document.querySelector('.wrap')
container.innerHTML = data.map((card) => {
    return `
        <div class="card">
            <img src="${card.cover_image}" alt="${card.id}">
            <h3>${card.title}</h3>
            <p>${card.artist}</p>
            <div class="play">
                <i class="fa-solid fa-play" style="color: #000000;"></i>
            </div>
        </div>
    `
}).join('');

// Card Elements

const cards = document.querySelectorAll(".card");
const audio = new Audio(); 
let currentSongIndex = 0;
let isPlaying = false;

// Playbar elements

const trackName = document.querySelector(".track-name");
const artistName = document.querySelector(".artist-name");
const albumCover = document.querySelector(".album-cover img");

const playBtn = document.querySelector(".play-button #play");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// Progress bar

const progressBar = document.querySelector(".progress-bar");
const progressFill = document.querySelector(".progress-fill");
const currentTimeEl = document.querySelectorAll(".time")[0];
const durationEl = document.querySelectorAll(".time")[1];

// Volume bar

const volumeBar = document.querySelector(".volume-bar");
const volumeFill = document.querySelector(".volume-fill");

// Load song into playbar

function loadSong(index) {
  const song = data[index];
  currentSongIndex = index;

  trackName.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.cover_image;
  audio.src = song.url;
}

// Play song

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.className = "icon-pause";
}

// Pause song

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.className = "icon-play";
}

// Next song

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % data.length;
  loadSong(currentSongIndex);
  playSong();
}

// Previous song

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + data.length) % data.length;
  loadSong(currentSongIndex);
  playSong();
}

// Card click → load and play

cards.forEach((card, idx) => {
  card.addEventListener("click", () => {
    loadSong(idx);
    playSong();
  });
});

// Play / Pause

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

// Next / Previous

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Progress update

audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;

  // Progress bar

  const progressPercent = (currentTime / duration) * 100;
  progressFill.style.width = `${progressPercent}%`;

  // Current time

  let min = Math.floor(currentTime / 60);
  let sec = Math.floor(currentTime % 60);
  if (sec < 10) sec = "0" + sec;
  currentTimeEl.textContent = `${min}:${sec}`;

  // Duration

  if (!isNaN(duration)) {
    let dmin = Math.floor(duration / 60);
    let dsec = Math.floor(duration % 60);
    if (dsec < 10) dsec = "0" + dsec;
    durationEl.textContent = `${dmin}:${dsec}`;
  }
});

// Seek

progressBar.addEventListener("click", (e) => {
  const barWidth = progressBar.offsetWidth;
  const clickX = e.offsetX;
  const newTime = (clickX / barWidth) * audio.duration;

  audio.currentTime = newTime;
});

// Volume control

volumeBar.addEventListener("click", (e) => {
  const barWidth = volumeBar.offsetWidth;
  const clickX = e.offsetX;
  const newVolume = clickX / barWidth;

  audio.volume = newVolume;
  volumeFill.style.width = `${newVolume * 100}%`;
});