<script>
    let one, oneOne, oneTwo, oneThree, oneFour, oneFive, oneSix, oneSeven, oneEight, oneNine, oneTen;
    let two, twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix, twoSeven, twoEight, twoNine, twoTen;
    let three, threeOne;

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
        
        <!-- Continue with the rest of the bylaws... -->
        
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
