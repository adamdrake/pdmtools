# Personal Data Management Tools

Bookmarklets to help you manage your personal data on social media.

## Usage 

Drag the links to your bookmarks toolbar to "install," then navigate to the relevant page and click the bookmarklet to use it.

You must be logged in to your account. The bookmarklets do not collect any data, only help to click buttons in your browser. They will delete your data in the same way that you would with manual clicking. The data will not be backed up or recoverable via the bookmarklet. 

## Twitter

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/twitter/delete-tweets.js'); document.body.appendChild(jsCode);}());">__Delete all your tweets older than a certain number of hours__</a> (the ephemeral bookmarklet)

* Works on your Twitter profile page: https://twitter.com/_username_
* A pop-up prompt will ask you to input the hours, e.g. "24"

## LinkedIn

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-posts.js'); document.body.appendChild(jsCode);}());">__Delete all your LinkedIn posts__</a>

* Works on: https://www.linkedin.com/in/_username_/detail/recent-activity/

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-messages.js'); document.body.appendChild(jsCode);}());">__Delete all your LinkedIn messages__</a>

* Works on: https://linkedin.com/messaging/

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-connections.js'); document.body.appendChild(jsCode);}());">__Delete all your LinkedIn connections__</a>

* Works on: https://linkedin.com/search/results/people/?facetNetwork=["F"]
* You can apply additional search filters as desired before using bookmarklet