<script>
    let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">FANTASY FOOTBALL KEEPER LEAGUE</h1>
    
    <h2 class="noUnderscore">OFFICIAL BYLAWS</h2>
    
    <p>The following rules govern the Fantasy Football Keeper League ("the league") and remain in effect unless amended as provided herein.</p>
    
    <ol>
        <li bind:this={one}>The league consists of sixteen (16) teams, with Joe Krawczyk serving as league commissioner ("the commissioner").</li>
        
        <li bind:this={two}>The annual team fee is $100.</li>
        
        <li bind:this={three}>
            <p>The commissioner establishes the payout structure of the league on a year-to-year basis.</p>
            <p class="subBlock">a. [TWC Note] Current payout structure is as follows:</p>
            <ul class="subBlock">
                <li>Top Points: $100</li>
                <li>First: $1,000</li>
                <li>Second: $400</li>
                <li>Third: $100</li>
            </ul>
        </li>
        
        <li bind:this={four}>Scoring rules and roster settings are established on the league's ESPN webpage ("ESPN"). Tiebreakers are further established on ESPN.</li>
        
        <li bind:this={five}>Each team may keep up to three (3) players from their most recent roster ("keepers").</li>
        
        <li bind:this={six}>Keepers must be set by 10 pm EST on the Sunday before the annual fantasy football draft ("draft").</li>
        
        <li bind:this={seven}>The draft is set for the Sunday of Labor Day weekend, at a time mutually agreed upon by league participants on the league's GroupMe chat ("GroupMe").</li>
        
        <li bind:this={eight}>The draft order is set based on team record from the most recent season. Draft rounds are completed in a serpentine manner, with the team selecting last in a round possessing the first pick in the subsequent round, subject to the exceptions provided in paragraphs 9 and 10. The team with the worst record from the most recent season selects first in the even numbered rounds, while the team with the best record from the most recent season selects first in the odd numbered rounds, subject to the exceptions provided in paragraphs 9 and 10.</li>
        
        <li bind:this={nine}>The first three rounds—designated as keeper rounds—are not set in a serpentine manner. For keeper rounds, the team with the worst record from the most recent season selects first in each of keeper rounds, assuming ability to draft in a particular round as described in paragraph 11. The serpentine process starts in the fourth round.</li>
        
        <li bind:this={ten}>A draft lottery determines the first four (4) picks of each keeper round as well as all other even numbered rounds. Accordingly, the draft lottery also necessarily determines the last four (4) picks of odd numbered rounds.</li>
        
        <li bind:this={eleven}>The draft lottery percentages are 40%/30%/20%/10% for the last place, second-to-last place, third-to-last place, and fourth-to-last place finishers, respectively.</li>
        
        <li bind:this={twelve}>The first three rounds of the draft are keeper rounds. For instance, if a team keeps two (2) players, it cannot select in the first two keeper rounds, but retains the right to draft a player from the available draft pool in the third keeper round.</li>
        
        <li bind:this={thirteen}>Draft picks are freely transferable. Draft pick trades are limited to draft picks for the following season and must be posted by one of the transacting teams to GroupMe and Facebook. In addition to pre-draft trades, a team may trade draft picks during the draft or even agree-in-principle to a trade, subject to the availability of a certain player with the contemplated pick. A team cannot trade a draft pick that it does not possess. For instance, if a team has two (2) keepers, its first available draft pick to trade is for the third keeper round.</li>
        
        <li bind:this={fourteen}>Each team starts the season with $100 Free Agent Acquisition Budget ("FAAB").</li>
        
        <li bind:this={fifteen}>The Free Agent Acquisition deadline is 12 pm EST on each Wednesday, Thursday, Friday, Saturday, Sunday, and Monday.</li>
        
        <li bind:this={sixteen}>The free agent acquisition tiebreaker is based on inverse standings.</li>
        
        <li bind:this={seventeen}>The tiebreaker for a matchup (tie score) is determined by ESPN.</li>
        
        <li bind:this={eighteen}>The team receiving the lowest score for a weekly matchup, including the playoffs, is required to publish a league note—to GroupMe or ESPN—before kickoff of the first scheduled Sunday game (in the United States) for that week. Punishment for a non-excused, untimely note is $1 FAAB per hour from the posting deadline.</li>
        
        <li bind:this={nineteen}>If a player is accidently dropped from a roster, the commissioner shall reverse the accidental transaction upon prompt request by a team.</li>
        
        <li bind:this={twenty}>The trade deadline is set for the last day before week ten (10) of the NFL season.</li>
        
        <li bind:this={twentyOne}>Trades automatically process without the requirement of league approval. In his discretion, the commissioner will veto manifestly unfair trades, including but not limited to collusion, such as trading players with the intent to subsequently trade any so acquired player back to its prior team.</li>
        
        <li bind:this={twentyTwo}>The top six (6) teams make the playoffs, with the top two teams receiving bye weeks. The playoff matchups are based on regular season standings, with total fantasy points scored as the tiebreaker.</li>
        
        <li bind:this={twentyThree}>Rule amendments must be proposed to the commissioner on GroupMe or Facebook. The commissioner may also propose rule amendments on GroupMe or Facebook.</li>
        
        <li bind:this={twentyFour}>Following a rule amendment proposal, the commissioner will create a voting poll on a voting platform of the commissioner's choosing. The commissioner shall notify teams about pending votes on GroupMe and Facebook. Voting polls are set for forty-eight (48) hours, and all teams are expected to vote.</li>
        
        <li bind:this={twentyFive}>A "non-material" rule amendment requires a simple majority of nine (9) votes. A "non-material" rule amendment is every rule amendment or other league modification not specially defined as "material" in paragraph 25 or otherwise designated by the commissioner as "material." A "non-material" rule amendment becomes effective immediately.</li>
        
        <li bind:this={twentySix}>A "material" rule amendment requires a super-majority of eleven (11) votes. A "material" rule amendment is a rule amendment that concerns the following subject matter:
            <ul>
                <li>Addition of a new team as a replacement for a withdrawing team</li>
                <li>Annual team fee</li>
                <li>League Expansion</li>
                <li>Draft lottery/order</li>
                <li>Number of keepers</li>
            </ul>
            <p>Moreover, the commissioner, in his discretion, may designate a rule amendment as "material." A "material" rule amendment does not become effective until the following season, with the exception of (1) the number of keepers on a team and (2) draft lottery/order, which require the completion of an entire keeper league season before implementation.</p>
        </li>
        
        <li bind:this={twentySeven}>If team participation for a particular vote is inadequate (less than twelve (12) votes casted), the commissioner, in his discretion, can find that the required number of votes would have been casted for a rule amendment if all teams had voted.</li>
        
        <li bind:this={twentyEight}>These official bylaws will be revised as needed based on rule amendments or other significant changes in the league. The updated official bylaws will be posted to GroupMe and Facebook.</li>
    </ol>

    <p>Dated: November __ 2020</p>

    <p class="right">
        <span class="underscore">/s/ [signature here]</span><br>
        Joe Krawczyk<br>
        League Commissioner
    </p>

    <div class="subBlock">
        <p>Example 1: If a "material" rule amendment is approved in week 4 of the 2018 season, it will become effective for the 2019 season, with the exception of (1) the number of keepers on a team and (2) draft lottery/order, which will become effective for the 2020 season.</p>
        <p>Example 2: If a "material" rule amendment is approved in the offseason after the 2018 season, but before the start of the 2019 season, it will become effective for the 2019 season, with the exception of (1) the number of keepers on a team and (2) draft lottery/order, which will become effective for the 2020 season. The triggering event for the start of a season is the date when keepers are officially set as provided in paragraph 6.</p>
        <p>Example 3: If a "material" rule amendment is approved at any time after the triggering event as provided in Example 2 but before the first week of the season, it will become effective the same as announced in Example 1.</p>
    </div>
</div>
