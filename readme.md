**OVERALL INFO**<br/>
When you make a change in Newsroom, make sure you copy/paste all of the HTML over again (everything within the <body> tags). Make sure not to copy/paste over the Javascript reference links above the HTML. (`<div class="wrap-collapsible">` is the first line in the collapsible graphic, `<div id="graphic-container">` is the start of the master.)

There can be NO INLINE JS in Newsroom. What you should do is upload all of the necessary JS files into the draft as "Internal Use Only" attachments, and then add `<script>` tags to the top of the draft. If there is a runner file (a file that triggers all of the others to act and load the page properly), that should be placed at the bottom of the draft with `defer` in the `<script>` tag. All of the dependencies should have `assets.law360news.com` at the beginning of their URLs.

**COLLAPSIBLE GRAPHIC**<br/>
This is probably the simplest part of the entire graphic. It's 30 individual charts, all rendered in Highcharts. Each function corresponds a different div, which each contain one chart. Documentation can be found at https://www.highcharts.com/docs/index. `<div class="wrap-collapsible"> is the first line in the collapsible graphic to copy/paste into NR.

Top dependencies are `highcharts.js` (The Highcharts library itself), `accessibility.js` (Highcharts extension), and `collapsible.js` (controls the animated collapse action). `runner.js`, which contains the bulk of the project (it's the file described in the file above, with 30 functions defining 30 corresponding charts), goes at the bottom, with a `defer` attribute, like so:

`<script type="text/javascript" src="https://assets.law360news.com/1339000/1339080/runner.js" defer></script>`

**MASTER GRAPHIC**<br/>
All the Javascript for the master graphic. `Aggregate-data.json` is the source file. <div id="graphic-container"> is the first line of the master graphic to copy/paste into NR.

Top dependencies are `numeral.js` (for number formatting), `countup.js` (for animated number counts), `buddy-methods.js` (various extraneous functions to help with small things, think of it as the junk drawer of the entire project), and `index.js` (which contains the bulk of the project, and where you'll probably be doing the most work.) `runner.js`, which sets the dropdown values when the page loads and triggers `index.js`, goes at the bottom, with a `defer` attribute, like so:

`<script type="text/javascript" src="https://assets.law360news.com/1347000/1347416/runner.js" defer></script>`

**DATA PROCESSING FOR MASTER GRAPHIC**<br/>
The Python which processes the data for the master graphic. Takes a CSV of the survey data (each line = one response), tallies counts and averages, and puts it into machine-readable JSON. `Q23-Bucketed.csv` is the up to date file. All of the others Excels and CSVs are older versions, and should not be pushed to the site in any form. To rerun the data processing script and spit out new JSON, go to the `data-processing-for-master` folder in Terminal and enter `python3 runner.py` or `python runner.py`. There's no `buddy-methods.py`, I just put all the extra methods in `runner.py`
