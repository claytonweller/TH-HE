# Hotel Engine Github API

Live app: https://clayton-he.herokuapp.com/

API: https://clayton-he.herokuapp.com/api/github

## We have to know about pull requests!

This is a simple API to learn some basic info about pull requests at a given repo.

You can access it through GET or POST, or you can use the simple front end interface.

It will return an array of pullrequest objects including

- user : who made the request
- number : the number of the request
- commitCount : the number of commits on the request
- commentCount : the number of comments on the request

## GET

Requires two queries 'owner' and 'repo'

EX github URL : http://github.com/OWNER/REPO

EX query: https://clayton-he.herokuapp.com/api/github/?owner=OWNER&&repo=REPO

## POST

Requires a body json object with keys 'owner' and 'repo'

EX github URL : http://github.com/OWNER/REPO

EX body : {owner: 'OWNER', repo: 'REPO'}

_Enjoy!_
