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
    "managerID": "472122103215157248",
    "name": "Matt Mcdermand",
    "location": "Brooklyn, NY",
    "bio": "You can't spell dispensary without nips. I like both.",
    "photo": "/managers/matt_m.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Andrew Boravay",
      "link": 5,
      "image": "/managers/boravay.jpeg"
    },
    "favoritePlayer": 2078,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Just look at the nips. They'll tell you everything you need to know.",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "364549014668136448",
    "name": "Alan Ayon",
    "location": "San Diego, CA",
    "bio": "Still dreaming of One Nation Under GODwin.",
    "photo": "/managers/alan.jpeg",
    "fantasyStart": 2018,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Mark Huerta",
      "link": 2,
      "image": "/managers/mark.jpeg"
    },
    "favoritePlayer": 6786,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Feed CeeDee",
    "tradingScale": 8,
    "preferredContact": "Text"
  },
  {
    "managerID": "412010593113886720",
    "name": "Mark Huerta",
    "location": "Blacksburg, VA",
    "bio": "I'm 0-3 against Eazy Es in the finals.",
    "photo": "/managers/mark.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Martin Cisneros",
      "link": 15,
      "image": "/managers/martin.jpeg"
    },
    "favoritePlayer": 3294,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "I never miss a toilet scouting session. Consistency is key. If I'm on the Loo you better believe I'm in my scouting groove.",
    "tradingScale": 8,
    "preferredContact": "Text"
  },
  {
    "managerID": "601205387269570560",
    "name": "Joe Krawzyk",
    "location": "Phoenix, AZ",
    "bio": "I'm the commish bitch.",
    "photo": "/managers/joe.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      "name": "Adam Polson",
      "link": 11,
      "image": "/managers/adam.jpeg"
    },
    "favoritePlayer": 4039,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Whateva, I do what I want!",
    "tradingScale": 7,
    "preferredContact": "FaceTime"
  },
  {
    "managerID": "463483985771622400",
    "name": "Jordan Walker",
    "location": "Phoenix, AZ",
    "bio": "Mr. Toilet Bowl, I'm the shit.",
    "photo": "/managers/jordan.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      "name": "Ty Callahan",
      "link": 14,
      "image": "/managers/ty.jpeg"
    },
    "favoritePlayer": 7525,
    "valuePosition": "TE",
    "rookieOrVets": "Rookies",
    "philosophy": "Bare minimum",
    "tradingScale": 1,
    "preferredContact": "Phone Call"
  },
  {
    "managerID": "83617934131740672",
    "name": "Andrew Boravay",
    "location": "Phoenix, AZ",
    "bio": "I stay game ready.",
    "photo": "/managers/boravay.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Matt Mcdermand",
      "link": 0,
      "image": "/managers/matt_m.jpeg"
    },
    "favoritePlayer": 167,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Win the waiver wire",
    "tradingScale": 0,
    "preferredContact": "Discord"
  },
  {
    "managerID": "94902624901808128",
    "name": "Andrew Carlson",
    "location": "Phoenix, AZ",
    "bio": "I'm the Chief Keef.",
    "photo": "/managers/andrew.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyg",
    "mode": "Win Now",
    "rival": {
      "name": "Nick Heitzman",
      "link": 10,
      "image": "/managers/nick.jpeg"
    },
    "favoritePlayer": 7543,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Build through the draft",
    "tradingScale": 6,
    "preferredContact": "Discord"
  },
  {
    "managerID": "473908768065712128",
    "name": "Matt Blumenreich",
    "location": "Stanford, CT",
    "bio": "Go Bucking Broncos",
    "photo": "/managers/matt_b.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      "name": "Brandon Wellbourn",
      "link": 8,
      "image": "/managers/brandon.jpeg"
    },
    "favoritePlayer": 6794,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Nowhere to go but up",
    "tradingScale": 9,
    "preferredContact": "Text"
  },
  {
    "managerID": "473589039220387840",
    "name": "Brandon Wellbourn",
    "location": "Phoenix, AZ",
    "bio": "They me poppa doc.",
    "photo": "/managers/brandon.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Matt Blumenreich",
      "link": 7,
      "image": "/managers/matt_b.jpeg"
    },
    "favoritePlayer": 3321,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "You don't need a team when you have the best keepers.",
    "tradingScale": 4,
    "preferredContact": "Text"
  },
  {
    "managerID": "473564782994124800",
    "name": "Zach Decke",
    "location": "Phoenix, AZ",
    "bio": "BBQ master and fantasy football guru.",
    "photo": "/managers/zach.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      "name": "Matt Carroll",
      "link": 13,
      "image": "/managers/matt_c.jpeg"
    },
    "favoritePlayer": 4866,
    "valuePosition": "QB",
    "rookieOrVets": "Vets",
    "philosophy": "Younghoe",
    "tradingScale": 4,
    "preferredContact": "Text"
  },
  {
    "managerID": "458785993529487360",
    "name": "Nick Heitzman",
    "location": "Phoenix, AZ",
    "bio": "Lik Ma Rich Dick",
    "photo": "/managers/nick.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Josh Brown",
      "link": 12,
      "image": "/managers/josh.jpeg"
    },
    "favoritePlayer": 11632,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Always be wheeling and dealing",
    "tradingScale": 5,
    "preferredContact": "Text"
  },
  {
    "managerID": "472168988340645888",
    "name": "Adam Polson",
    "location": "Phoenix, AZ",
    "bio": "They call me MR. Two Time",
    "photo": "/managers/adam.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Joe Krawzyk",
      "link": 3,
      "image": "/managers/joe.jpeg"
    },
    "favoritePlayer": 1466,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "I do this",
    "tradingScale": 4,
    "preferredContact": "Text"
  },
  {
    "managerID": "473908369271287808",
    "name": "Josh Brown",
    "location": "Seattle, WA",
    "bio": "Seahawks fan trying to bring home the trophy.",
    "photo": "/managers/josh.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      "name": "Nick Heitzman",
      "link": 10,
      "image": "/managers/nick.jpeg"
    },
    "favoritePlayer": 6904,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Build a balanced roster",
    "tradingScale": 5,
    "preferredContact": "Discord"
  },
  {
    "managerID": "381887544524132352",
    "name": "Matt Carroll",
    "location": "Los Angeles, CA",
    "bio": "Pacific time zone fantasy dominator.",
    "photo": "/managers/matt_c.jpeg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Zach Decke",
      "link": 9,
      "image": "/managers/zach.jpeg"
    },
    "favoritePlayer": 7049,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Pick up the dogs",
    "tradingScale": 4,
    "preferredContact": "Text"
  },
  {
    "managerID": "601205387269570560",
    "name": "Ty Callahan",
    "location": "Phoenix, AZ",
    "bio": "They call me MR. Bachelor",
    "photo": "/managers/ty.jpeg",
    "fantasyStart": 2014,
    "mode": "Rebuild",
    "rival": {
      "name": "Jordan Walker",
      "link": 4,
      "image": "/managers/jordan.jpeg"
    },
    "favoritePlayer": 8150,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "Go big or go home",
    "tradingScale": 3,
    "preferredContact": "Text"
  },
  {
    "managerID": "341628238017105920",
    "name": "Martin Cisneros",
    "location": "Buenos Aires, ARG",
    "bio": "3X Champ",
    "photo": "/managers/martin.jpeg",
    "fantasyStart": 2016,
    "mode": "Dynasty",
    "rival": {
      "name": "nobody",
      "link": null,
      "image": "question.png"
    },
    "favoritePlayer": 3164,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Classified",
    "tradingScale": 5,
    "preferredContact": "Text"
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
    
