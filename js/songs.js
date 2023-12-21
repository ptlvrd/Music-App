/**
 * songs.js
 *
 * The app's songs
 */
//adding the image url and caption in assignment 5
window.songs = [
  //arijit singh songs

  {
    songId: "SID-101",
    artistId: "AID-201",
    title: "Phir Aur Kya Chahiye",
    singer: "Arijit Singh",
    year: "2023",
    duration: 216,
    url: "https://youtu.be/8sLS2knUa6Y?si=H_Pvx1gGtt2J8Jsh",
    explicit: true,
    imageUrl:
      "https://madaboutlyrics.com/wp-content/uploads/2023/05/Phir-Aur-Kya-Chahiye-Lyrics-Arijjit-Singh-MADaboutLYRICS.com-Album-Image-1.png",
    caption:
      "Indulge in musical journeys with soul-stirring beats – Listen to this, feel the magic."
  },
  {
    songId: "SID-102",
    artistId: "AID-201",
    title: "Channa Mereya",
    singer: "Arijit Singh",
    year: "2016",
    duration: 346,
    url: "https://youtu.be/bzSTpdcs-EI?si=NSjz9al0nf8onLl4",
    explicit: false,
    imageUrl:
      "https://th.bing.com/th/id/R.9f9f57a4a1660cc05e9187f18df969b3?rik=s168RAX1QX5Asg&riu=http%3a%2f%2fa10.gaanacdn.com%2fimages%2falbums%2f94%2f1745894%2fcrop_480x480_1745894.jpg%3fversion%3d6&ehk=yHdjYyRJ%2b4MjpKYiLTkraKi5ZGB4UMEfUpjAjR4F4cg%3d&risl=&pid=ImgRaw&r=0",
    caption: "Dive into a symphony of emotions – Listen to this, and let the music speak."
  },
  {
    songId: "SID-103",
    artistId: "AID-201",
    title: "Apna Banale Le",
    singer: "Arijit Singh",
    year: "2022",
    duration: 205,
    url: "https://youtu.be/ElZfdU54Cp8?si=MT3MEbiH0BJBfa4d",
    explicit: false,
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/1200x1200bf-60.jpg",
    caption: "Unlock the soundtrack of your moments – Press play and feel the rhythm"
  },
  {
    songId: "SID-104",
    artistId: "AID-201",
    title: "Tera Yaar Hoon Main",
    singer: "Arijit Singh",
    year: "2018",
    duration: 289,
    url: "https://youtu.be/EatzcaVJRMs?si=utnykNu3BVQ018HW",
    explicit: false,
    imageUrl:
      "https://c.saavncdn.com/074/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20180214153942-500x500.jpg",
    caption: "Elevate your mood with musical enchantment – Discover, Listen to this, and unwind."
  },
  {
    songId: "SID-105",
    artistId: "AID-201",
    title: "Agar Tum Saath Ho",
    singer: "Arijit Singh",
    year: "2015",
    duration: 340,
    url: "https://youtu.be/sK7riqg2mr4?si=cNzVnBT-iQH-cOGW",
    explicit: false,
    imageUrl:
      "https://i.pinimg.com/736x/15/f1/a5/15f1a5bb1d5a1b75e7cc6ece9bd02d6e--song-hindi-agar.jpg",
    caption: "Your playlist's new favorite – Hit play and let the vibes take over."
  },
  {
    songId: "SID-106",
    artistId: "AID-201",
    title: "Chaleya",
    singer: "Arijit Singh",
    year: "2023",
    duration: 188,
    url: "https://youtu.be/VAdGW7QDJiU?si=gKDg3R_afIrVjIU-",
    explicit: false,
    imageUrl: "https://th.bing.com/th/id/OIP.sf8puLuq5NCD5cYjmxbg6QAAAA?rs=1&pid=ImgDetMain",
    caption: "Embark on a sonic adventure – This is more than music, it's an experience"
  },
  {
    songId: "SID-107",
    artistId: "AID-201",
    title: "Tere Hawale",
    singer: "Arijit Singh",
    year: "2023",
    duration: 331,
    url: "https://youtu.be/KUpwupYj_tY?si=S9jneCGv91PrjRrq",
    explicit: false,
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1e/d0/a8/1ed0a8aa-a8dd-2730-2481-96438f96ddfc/8903431892119_cover.jpg/1200x1200bf-60.jpg",
    caption: "Tune in to the rhythm of your soul – Press play, and let the melody guide you"
  },

  // Jasleen Royal Songs
  {
    songId: "SID-108",
    artistId: "AID-202", // Jasleen Royal's artistId
    title: "Heeriye",
    singer: "Jasleen Royal",
    year: "2023",
    duration: 194,
    url: "https://youtu.be/RLzC55ai0eo?si=GG8IXmWm57fzU5l-",
    explicit: true,
    imageUrl: "https://th.bing.com/th/id/OIP.5HyocsDQmyF16U3sAf5nbAAAAA?rs=1&pid=ImgDetMain",
    caption: "Crafting moments through melodies – Listen to this, and create memories"
  },
  {
    songId: "SID-109",
    artistId: "AID-202",
    title: "Love You Zindagi",
    singer: "Jasleen Royal",
    year: "2016",
    duration: 206,
    url: "https://youtu.be/bw7bVpI5VcM?si=4rzg-8xjYZU35In9",
    explicit: false,
    imageUrl:
      "https://1.bp.blogspot.com/-fVpnhtcwj7w/WFbNn6--FAI/AAAAAAAAM4g/yweyed-6wBcHKw4gTcb68o3rI43B5DYawCLcB/s1600/Love%2BYou%2BZindagi.jpg",
    caption: "Immerse yourself in soundscapes that resonate – Press play for the perfect escape."
  },
  {
    songId: "SID-110",
    artistId: "AID-202",
    title: "Din Shagna Da",
    singer: "Jasleen Royal",
    year: "2017",
    duration: 216,
    url: "https://youtu.be/1LVpuWpRs3I?si=zqKNcvxbIVsvEgNm",
    explicit: false,
    imageUrl: "https://c.saavncdn.com/427/Best-Of-Anushka-Sharma-Hindi-2017-500x500.jpg",
    caption: "Feel the pulse of the beat – Listen to this, and let the music move you."
  },
  {
    songId: "SID-111",
    artistId: "AID-202",
    title: "Ranjha",
    singer: "Jasleen Royal",
    year: "2021",
    duration: 197,
    url: "https://youtu.be/V7LwfY5U5WI?si=ze995lLb8SiWpe-p",
    explicit: false,
    imageUrl:
      "https://th.bing.com/th/id/R.c577dba1e4d71e61c3a4a00f6272ba91?rik=D4DQPw7OXseuFg&pid=ImgRaw&r=0",
    caption: "Curated tunes for your every mood – Press play and set the vibe right."
  },
  {
    songId: "SID-112",
    artistId: "AID-202",
    title: "Sang Rahiyo",
    singer: "Jasleen Royal",
    year: "2020",
    duration: 213,
    url: "https://youtu.be/8PTOkwze0Vw?si=NkFwSHbtrMhKwwMs",
    explicit: false,
    imageUrl:
      "https://yt3.ggpht.com/a/AATXAJwOE96HBMSFLvsl9eGMz6Q6RFBATnHAIXMeLg=s900-c-k-c0xffffffff-no-rj-mo",
    caption: "Discover the heartbeat of each note – This song, this moment, your soundtrack."
  },
  {
    songId: "SID-113",
    artistId: "AID-202",
    title: "Kho Gaye Hum Kahan",
    singer: "Jasleen Royal",
    year: "2016",
    duration: 118,
    url: "https://youtu.be/vt4jX0iRgCg?si=dzB2o6Hu2r7VpSZw",
    explicit: false,
    imageUrl: "https://th.bing.com/th/id/OIP.4QloYKiVjZs175ZLZ-ONsQHaHa?rs=1&pid=ImgDetMain",
    caption: "Fuel your day with rhythm – Listen to this, and let the music set the pace."
  },
  //shreya goshal songs
  {
    songId: "SID-114",
    artistId: "AID-203",
    title: "Tum Kya Mile",
    singer: "Shreya Goshal",
    year: "2023",
    duration: 202,
    url: "https://youtu.be/taRBVfDRukY?si=PHsvZdn1MPdJQX0O",
    explicit: false,
    imageUrl: "https://pagalfree.com/images/230628015946.jpg",
    caption: "Let the music paint the atmosphere – Listen to this, and color your world"
  },
  {
    songId: "SID-115",
    artistId: "AID-203",
    title: "Hasi",
    singer: "Shreya Goshal",
    year: "2015",
    duration: 193,
    url: "https://youtu.be/UJxutXtHQFI?si=hcUseOqz_JJ41gb1",
    explicit: true,
    imageUrl:
      "https://i.pinimg.com/736x/d0/9b/e6/d09be6acbef97dd913a33bc1c01faf13--karaoke-november.jpg",
    caption: "Your daily dose of musical therapy – Listen to this, and feel the healing power."
  },
  {
    songId: "SID-116",
    artistId: "AID-203",
    title: "Rozana",
    singer: "Shreya Goshal",
    year: "2017",
    duration: 212,
    url: "https://youtu.be/CtgD91Ev4NU?si=wSdmgUsA7iqagJ8D",
    explicit: false,
    imageUrl: "https://th.bing.com/th/id/OIP.Mp6izo8l1ZgkKxCpF0cs6wHaHa?rs=1&pid=ImgDetMain",
    caption: "A symphony for your senses – Press play and let the music tell its story."
  },
  {
    songId: "SID-117",
    artistId: "AID-203",
    title: "Sun Raha Hai Na Tu",
    singer: "Shreya Goshal",
    year: "2013",
    duration: 230,
    url: "https://youtu.be/inEu2qQuGZ8?si=4x34OuWtkTVLjWRt",
    explicit: false,
    imageUrl: "https://i.pinimg.com/originals/d3/0f/17/d30f17d98eb5692344317c1581bcb4a7.jpg",
    caption: "Turn up the volume and let the melody guide your thoughts – Listen to this."
  },
  {
    songId: "SID-118",
    artistId: "AID-203",
    title: "Piya O Re Piya",
    singer: "Shreya Goshal",
    year: "2012",
    duration: 130,
    url: "https://youtu.be/Fm23HC3Rcac?si=uXTCtNBP4xusIjEl",
    explicit: false,
    imageUrl:
      "https://th.bing.com/th/id/R.8c05c7a9d54aadd523cec0737761ef4b?rik=YrGGUKgZ6OkYbw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-wZ51WaujQdo%2fTtZrIlScmTI%2fAAAAAAAAA2w%2f3X-QLAIyADE%2fs1600%2fBollywood%2b%25252C%2btere%2bnaal%2blove%2bho%2bgaya%2b2011%2b%25252C%2bAtif%2bAslam%2bShreya%2bGoshal%2bNew%2bSong.JPG&ehk=8QlV4DSEPUJbvp2340lOA%2fFw6co6YEi4SsmBHJQfalQ%3d&risl=&pid=ImgRaw&r=0",
    caption: "Feel the resonance of each chord – This track, this instant, your harmony."
  },
  {
    songId: "SID-119",
    artistId: "AID-203",
    title: "O Rangrez",
    singer: "Shreya Goshal",
    year: "2017",
    duration: 380,
    url: "https://youtu.be/aYnrl1c1_U0?si=NIj9qSOdgpH9gYoC",
    explicit: false,
    imageUrl: "https://th.bing.com/th/id/OIP.alrDET-bmja_D27x9gpFDwAAAA?rs=1&pid=ImgDetMain",
    caption: "Embark on a sonic journey Press play, and let the music be your guide."
  },
  {
    songId: "SID-120",
    artistId: "AID-203",
    title: "Saibo",
    singer: "Shreya Goshal",
    year: "2017",
    duration: 196,
    url: "https://youtu.be/JeiZTnRfrbM?si=YSs6nNI8qM2N0eZs",
    explicit: false,
    imageUrl: "https://th.bing.com/th/id/OIP.RqOSNCdhUifckOai5jh_VgHaHa?rs=1&pid=ImgDetMain",
    caption: "Every beat tells a story – Press play and immerse yourself in the narrative."
  }
];
