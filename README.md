# Hotel Engine Github API

## We have to know about pull requests!

This is a simple you can access it through GET or POST, or you can use the simple front end interface.
It will return an array of pullrequest objects including

- user : who made the request
- number : the number of the request
- commitCount : the number of commits on the request
- commentCount : the number of comments on the request

## GET

Requires two queries 'owner' and 'repo'
EX github URL : http://github.com/OWNER/REPO
EX query: BASE?owner=OWNER&&repo=REPO

## POST

Requires a body json object with keys 'owner' and 'repo'
EX github URL : http://github.com/OWNER/REPO
EX body : {owner: 'OWNER', repo: 'REPO'}

<Enjoy>
