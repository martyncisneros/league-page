/*   STEP 1   */
export const leagueID = "1063295156176134144"; // your league ID
export const leagueName = "Arizona Keeper League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const slothStatsEmbed = `
<div style="width: 100%; overflow-x: auto;">
  <iframe src="https://www.slothstats.com/report?leagueId=1063295156176134144&startWeek=1&endWeek=3&page=1" style="width: 1px; min-width: 100%; height: 1200px; border: none;"></iframe>
</div>
`;

export const homepageText = `
<style>
  .slothstats-container {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
</style>

<div class="slothstats-container">
  ${slothStatsEmbed}
</div>

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
export const managers = [
  /*
  {
    "managerID": "472122103215157248",
    "name": "Matt Mcdermand",
    "location": "Brooklyn, NY",
    "bio": "You can't spell dispensary without nips. I like both.",
    "photo": "/managers/matt_m.jpeg",
    "fantasyStart": 2014,
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
  // ... (other manager objects)
  */
];

/*   !!  !!  IMPORTANT  !!  !! */
/*
Below is the most up to-date version of a manager. Please leave this commented out
and don't delete it. This will be updated if any fields are added, removed or changed
and will allow updates without causing merge conflicts
*/

/*
{
  "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
  "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
  "name": "Your Name",
  "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
  "location": "Brooklyn", // (optional)
  "bio": "Lorem ipsum...",
  "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
    name: "Rival", // Can be anything (usually your rival's name)
    link: 6, // manager array number within this array, or null to link back to all managers page
    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  },
  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Your fantasy team's philosophy", // (optional)
  "tradingScale": 10, // 1 - 10 (optional)
  "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
},
*/
