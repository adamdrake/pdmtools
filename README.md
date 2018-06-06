# Personal Data Management Tools

Bookmarklets to help you manage your personal data on social media.

Drag the links to your bookmarks toolbar to "install," then navigate to the relevant page and click the bookmarklet to use it.

You must be logged in to your account. The bookmarklets do not collect any data, only help to click buttons in your browser. They will delete your data in the same way that you would with manual clicking. The data will not be backed up or recoverable via the bookmarklet. 

## Twitter

__Delete all your tweets older than a certain number of hours:__ <a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/twitter/delete-tweets.js'); document.body.appendChild(jsCode);}());">ephemeral bookmarklet</a>

* Works on your Twitter profile page: https://twitter.com/_username_

## LinkedIn

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-posts.js'); document.body.appendChild(jsCode);}());">Delete all your LinkedIn posts</a>

* Works on: https://www.linkedin.com/in/_username_/detail/recent-activity/

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-messages.js'); document.body.appendChild(jsCode);}());">Delete all your LinkedIn messages</a>

* Works on: https://linkedin.com/messaging/

<a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.githubusercontent.com/adamdrake/pdmtools/master/linkedin/delete-connections.js'); document.body.appendChild(jsCode);}());">Delete all your LinkedIn connections</a>

* Works on: https://linkedin.com/search/results/people/?facetNetwork=["F"]

(apply additional search filters as desired before using bookmarklet)