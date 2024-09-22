/*   STEP 1   */
export const leagueID = "1063295156176134144"; // your league ID
export const leagueName = "Arizona Keeper League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Established in 2014, the Arizona Keeper League has been the battleground for fantasy football supremacy for over a decade. This highly competitive league features 16 dedicated team owners, each vying for glory and bragging rights.</p>

<p>League Overview<br>
- Founded: 2014<br>
- Teams: 16<br>
- Format: Keeper League</p>

<p>The Arizona Keeper League isn't just a fantasy football competition; it's a tradition that has stood the test of time. For ten seasons and counting, our league has brought together friends, rivals, and football enthusiasts from across the Grand Canyon State.</p>

<p>Our 16-team format ensures that every roster decision counts and every waiver wire pickup could be the difference between championship glory and bitter defeat. With the keeper aspect adding an extra layer of strategy, owners must balance short-term success with long-term planning.</p>

<p>Our league has crowned several champions since its inception. Here's a list of our past winners:</p>

<p>- 2014: Adam Polson - The C.J. Andersons<br>
- 2015: Matt McDermand - Matt McD's Championship Nips<br>
- 2016: Martin Cisneros - Eazy Es<br>
- 2017: Mark Huerta - For Whom the Bell Tolls<br>
- 2018: Martin Cisneros - Eazy Es<br>
- 2019: Alan Ayon - One Nation Under GODwin<br>
- 2020: Martin Cisneros - Eazy Es<br>
- 2021: Joe Krawzyk - Kings Kupp<br>
- 2022: Matt Blumenreich - Bucking Broncos<br>
- 2023: Adam Polson - The Stack</p>

<p>Our champions showcase the league's creativity and competitiveness. Noteworthy are Martin Cisneros's early dynasty (2016-2020) and the recent emergence of new champions. Remarkably, Adam Polson claimed both the inaugural 2014 and latest 2023 titles with different teams.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [

[
  {
    "roster": 1,
    "name": "Matt Mcdermand",
    "tookOver": null,
    "location": "Brooklyn, NY",
    "bio": "You can't spell dispensary without nips. I like both.",
    "photo": "/managers/matt_m.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "az",
    "mode": "Win Now",
    "rival": {
      "name": "Andrew Boravay",
      "link": #,
      "image": "/managers/boravay.jpg"
    },
    "favoritePlayer": 2078,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Just look at the nips. They'll tell you everything you need to know.",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "roster": 2,
    "name": "Alan Ayon",
    "tookOver": null,
    "location": "San Diego, CA",
    "bio": "Still dreaming of One Nation Under GODwin.",
    "photo": "/managers/alan.jpg",
    "fantasyStart": 2018,
    "favoriteTeam": "dal",
    "mode": "Win Now",
    "rival": {
      "name": "Mark Huerta",
      "link": #,
      "image": "/managers/mark.jpg"
    },
    "favoritePlayer": 6786,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Feed CeeDee",
    "tradingScale": 8,
    "preferredContact": "Text"
  },
  {
    "roster": 3,
    "name": "Mark Huerta",
    "tookOver": null,
    "location": "Blacksburg, VA",
    "bio": "I'm 0-3 against Eazy Es in the finals.",
    "photo": "/managers/mark.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "dal",
    "mode": "Win Now",
    "rival": {
      "name": "Martin Cisneros",
      "link": #,
      "image": "/managers/martin.png"
    },
    "favoritePlayer": 3294,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "I never miss a toilet scouting session. Consistency is key. If I'm on the Loo you better believe I'm in my scouting groove.",
    "tradingScale": 8,
    "preferredContact": "Text"
  },
  {
    "roster": 4,
    "name": "Joe Krawzyk",
    "tookOver": null,
    "location": "Phoenix, AZ",
    "bio": "I'm the commish bitch.",
    "photo": "/managers/joe.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nor",
    "mode": "Rebuild",
    "rival": {
      "name": "Adam Polson",
      "link": #,
      "image": "/managers/adam.jpg"
    },
    "favoritePlayer": 4039,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Whateva, I do what I want!",
    "tradingScale": 7,
    "preferredContact": "FaceTime"
  },
  {
    "roster": 5,
    "name": "Jordan Walker",
    "tookOver": null,
    "location": "Phoenix, AZ",
    "bio": "Mr. Toilet Bowl, I'm the shit.",
    "photo": "/managers/jordan.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "phi",
    "mode": "Rebuild",
    "rival": {
      "name": "Ty Callahan",
      "link": #,
      "image": "/managers/ty.jpg"
    },
    "favoritePlayer": 7525,
    "valuePosition": "TE",
    "rookieOrVets": "Rookies",
    "philosophy": "Bare minimum",
    "tradingScale": 1,
    "preferredContact": "Phone Call"
  },
  {
    "roster": 6,
    "name": "Manager 6",
    "tookOver": null,
    "location": "Dallas",
    "bio": "Always ready to make a trade.",
    "photo": "/managers/manager6.jpg",
    "fantasyStart": 2012,
    "favoriteTeam": "dal",
    "mode": "Win Now",
    "rival": {
      "name": "Manager 7",
      "link": 7,
      "image": "/managers/manager7.jpg"
    },
    "favoritePlayer": 4981,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Win the waiver wire",
    "tradingScale": 9,
    "preferredContact": "Discord"
  },
  {
    "roster": 7,
    "name": "Manager 7",
    "tookOver": 2023,
    "location": "Green Bay",
    "bio": "Packers fan in a sea of rivals.",
    "photo": "/managers/manager7.jpg",
    "fantasyStart": 2018,
    "favoriteTeam": "gb",
    "mode": "Rebuild",
    "rival": {
      "name": "Manager 6",
      "link": 6,
      "image": "/managers/manager6.jpg"
    },
    "favoritePlayer": 2133,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Build through the draft",
    "tradingScale": 4,
    "preferredContact": "Sleeper"
  },
  {
    "roster": 8,
    "name": "Manager 8",
    "tookOver": null,
    "location": "Philadelphia",
    "bio": "Reigning league Toilet Bowl champion.",
    "photo": "/managers/manager8.jpg",
    "fantasyStart": 2017,
    "favoriteTeam": "phi",
    "mode": "Rebuild",
    "rival": {
      "name": "The Toilet Bowl",
      "link": null,
      "image": "/managers/question.png"
    },
    "favoritePlayer": 4040,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "Nowhere to go but up",
    "tradingScale": 7,
    "preferredContact": "WhatsApp"
  },
  {
    "roster": 9,
    "name": "Manager 9",
    "tookOver": 2019,
    "location": "San Francisco",
    "bio": "Tech entrepreneur and fantasy addict.",
    "photo": "/managers/manager9.jpg",
    "fantasyStart": 2013,
    "favoriteTeam": "sf",
    "mode": "Dynasty",
    "rival": {
      "name": "Manager 10",
      "link": 10,
      "image": "/managers/manager10.jpg"
    },
    "favoritePlayer": 4983,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Cutting edge strategies",
    "tradingScale": 8,
    "preferredContact": "Text"
  },
  {
    "roster": 10,
    "name": "Manager 10",
    "tookOver": null,
    "location": "Kansas City",
    "bio": "BBQ master and fantasy football guru.",
    "photo": "/managers/manager10.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "kc",
    "mode": "Win Now",
    "rival": {
      "name": "Manager 9",
      "link": 9,
      "image": "/managers/manager9.jpg"
    },
    "favoritePlayer": 1234,
    "valuePosition": "QB",
    "rookieOrVets": "Vets",
    "philosophy": "High risk, high reward",
    "tradingScale": 9,
    "preferredContact": "Phone"
  },
  {
    "roster": 11,
    "name": "Manager 11",
    "tookOver": 2020,
    "location": "New Orleans",
    "bio": "Fantasy football is my second job.",
    "photo": "/managers/manager11.jpg",
    "fantasyStart": 2016,
    "favoriteTeam": "no",
    "mode": "Win Now",
    "rival": {
      "name": "Manager 12",
      "link": 12,
      "image": "/managers/manager12.jpg"
    },
    "favoritePlayer": 3198,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Always be wheeling and dealing",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "roster": 12,
    "name": "Manager 12",
    "tookOver": null,
    "location": "Baltimore",
    "bio": "Casual player with beginner's luck.",
    "photo": "/managers/manager12.jpg",
    "fantasyStart": 2021,
    "favoriteTeam": "bal",
    "mode": "Rebuild",
    "rival": {
      "name": "Manager 11",
      "link": 11,
      "image": "/managers/manager11.jpg"
    },
    "favoritePlayer": 5849,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Trust your gut",
    "tradingScale": 3,
    "preferredContact": "Email"
  },
  {
    "roster": 13,
    "name": "Manager 13",
    "tookOver": 2022,
    "location": "Pittsburgh",
    "bio": "Steelers fan trying to bring home the trophy.",
    "photo": "/managers/manager13.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "pit",
    "mode": "Dynasty",
    "rival": {
      "name": "Manager 14",
      "link": 14,
      "image": "/managers/manager14.jpg"
    },
    "favoritePlayer": 4866,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Build a balanced roster",
    "tradingScale": 6,
    "preferredContact": "Discord"
  },
  {
    "roster": 14,
    "name": "Manager 14",
    "tookOver": null,
    "location": "Denver",
    "bio": "Mountain time zone fantasy dominator.",
    "photo": "/managers/manager14.jpg",
    "fantasyStart": 2011,
    "favoriteTeam": "den",
    "mode": "Win Now",
    "rival": {
      "name": "Manager 13",
      "link": 13,
      "image": "/managers/manager13.jpg"
    },
    "favoritePlayer": 4029,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "Stream defenses and kickers",
    "tradingScale": 5,
    "preferredContact": "Text"
  },
  {
    "roster": 15,
    "name": "Manager 15",
    "tookOver": 2023,
    "location": "Las Vegas",
    "bio": "High roller in fantasy and real life.",
    "photo": "/managers/manager15.jpg",
    "fantasyStart": 2019,
    "favoriteTeam": "lv",
    "mode": "Rebuild",
    "rival": {
      "name": "Manager 16",
      "link": 16,
      "image": "/managers/manager16.jpg"
    },
    "favoritePlayer": 6801,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "Go big or go home",
    "tradingScale": 8,
    "preferredContact": "WhatsApp"
  },
  {
    "roster": 16,
    "name": "Manager 16",
    "tookOver": null,
    "location": "Nashville",
    "bio": "Country music lover and fantasy football fanatic.",
    "photo": "/managers/manager16.jpg",
    "fantasyStart": 2015,
    "favoriteTeam": "ten",
    "mode": "Dynasty",
    "rival": {
      "name": "Manager 15",
      "link": 15,
      "image": "/managers/manager15.jpg"
    },
    "favoritePlayer": 4988,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Slow and steady wins the race",
    "tradingScale": 4,
    "preferredContact": "Carrier Pigeon"
  }
]
    
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
