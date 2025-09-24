// const main = async (token)=> {
// let a =  await fetch("https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks",{
//   method: "GET", 
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${token}` 
//   }
// });

// let response = await a.json();

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//   )).items;
// }

//   const topTracks = await getTopTracks();
//   console.log(
//     topTracks?.map(
//       ({name, artists}) =>
//         `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     )
//   );
// }

// const token = 'BQDzdEep-HP1M8KsRZglrNt5Urf78RyV4cV2vqJY1baNwGKoyUntX0GU0GdYVhIw3-OCUNG014gBrGLBO7iKsnas0Kpg39mKwQXhRFC5Kak9bo1L2CNqAFEWRb0_iZ5AlWwuSdgZ_790i1vukVkm-TsaSusGiWCPUgS1ekv0yBAK_QY2PHUc9Za6mGb8OX7IOJ__WNYDufV4O1uxzmNH_XLitWJkSAf4v9N8RRLaOPiCSrei693gAXRZLzTx_t2xejk258DBaHJEBO0sd5_8TIFRq0rYCvgQb4wbojt2Wep-BD_YIb_W4V2CmlRcqf-d';

// main(token);

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
 
    `;
}).join('');


document.querySelectorAll('.card').forEach((card, idx) => {
    card.addEventListener('click', (e) => {
         e.preventDefault();
        const audio = new Audio(data[idx].url);
        audio.play();
    });
});

