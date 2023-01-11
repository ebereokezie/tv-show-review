television_shows = TelevisionShow.create([
    {
        title: "Game of Thrones",
        season: 1,
        episode: 2,
        description: "Having agreed to become the Kings Hand, Ned leaves Winterfell with daughters Sansa and Arya, while Catelyn stays behind in Winterfell. Jon Snow heads north to join the brotherhood of the Nights Watch. Tyrion decides to forego the trip south with his family, instead joining Jon in the entourage heading to the Wall. Viserys bides his time in hopes of winning back the throne, while Daenerys focuses her attention on learning how to please her new husband, Drogo.",
        picture_url: "https://tv-fanatic-res.cloudinary.com/iu/s--eKSBwOhv--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371219651/game-of-thrones-screen-shot.png"
    },
    {
        title: "How I Met Your Mother",
        season: 3,
        episode: 4,
        description: "Barney and Ted compete for a girl. Robin is dating someone new.",
        picture_url: "https://m.media-amazon.com/images/M/MV5BMjAyOTE3NDA0Ml5BMl5BanBnXkFtZTgwNTM5MDMyMjE@._V1_.jpg"
    },
    {
        title: "How To Get Away With Murder",
        season: 2,
        episode: 5,
        description: "Asher discovers not everything is what it seems when you work for Annalise. Meanwhile, Frank is presented with a situation that hits close to home, and Wes search to find out more about Rebeccas disappearance culminates into an explosive confrontation.",
        picture_url: "https://tv-fanatic-res.cloudinary.com/iu/s--C6CAjq_l--/f_auto,q_auto/v1444658113/gathering-around-how-to-get-away-with-murder"
    }, 
    {
        title: "Breaking Bad",
        season: 5,
        episode: 6,
        description: "Walt, Jesse, and Mike struggle over the future of their business, as occupational hazards weigh on Jesse.",
        picture_url: "https://pyxis.nymag.com/v1/imgs/27c/474/752801bc9ff192c67712c653d983299341-19-BreakingBad.rsquare.w700.jpg"
    },  
    {
        title: "Power",
        season: 4,
        episode: 7,
        description: "Tasha seeks her own redemption",
        picture_url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F08%2Fpower-407-recap-2000.jpg&q=60"
    }
])

users = User.create([
    {
        username: "Brian Griffin",
        password_digest: "iAmOnFamilyGuy"
    },
    {
        username: "Tom Brady",
        password_digest: "SevenTimeChamp"
    }
])

reviews = Review.create([
   {
    comment: "This is a great episode",
    rating: 4,
    television_show_id: TelevisionShow.first.id,
    user_id: User.first.id
    },
    {
    comment: "This is a bad episode",
    rating: 2,
    television_show_id: TelevisionShow.second.id,
    user_id: User.second.id
    }
])


