"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { GITHUB_API_ACCESS_TOKEN } = require("../config");

const router = express.Router();
const jsonParser = bodyParser.json();
router.use(jsonParser);
const baseURL = "https://api.github.com/repos/";

// Without access tokens the API is limited to 60
// Requests per minute... which is not enough!
const headers = {
  headers: {
    Authorization: "token " + GITHUB_API_ACCESS_TOKEN,
    "Content-Type": "application/json"
  }
};

// We can handle JSON

router.post("/", (req, res) => {
  const { owner, repo } = req.body;
  findThePulls(owner, repo)
    .then(_res => res.status(200).json(_res))
    .catch(err => {
      res.status(500).json({ message: "something went wrong on the server" });
    });
});

// Or standard queries

router.get("/", (req, res) => {
  const { owner, repo } = req.query;
  findThePulls(owner, repo)
    .then(_res => res.status(200).json(_res))
    .catch(err => {
      res.status(500).json({ message: "something went wrong on the server" });
    });
});

function findThePulls(owner, repo, res) {
  // First we get all of the pull requests
  if (!owner || !repo) {
    throw res.status(400).json({ err: "Missing Queries" });
  }

  return axios
    .get(baseURL + `${owner}/${repo}/pulls`, headers)
    .then(ghRes => {
      if (!ghRes.data[0]) {
        throw res
          .status(404)
          .json({ err: "This repo doesn't exist or has no pull requests" });
      }
      // Then we map over each one to get the number of commits
      const promises = ghRes.data.map(pull => {
        return axios
          .get(
            baseURL + `${owner}/${repo}/pulls/${pull.number}/commits`,
            headers
          )
          .then(subRes => {
            return {
              number: pull.number,
              user: pull.user.login,
              commitCount: subRes.data.length
            };
          })
          .catch(err => err);
      });
      return Promise.all(promises);
    })
    .then(pullArr => {
      // Then we map over those to get the number of commments
      const promises = pullArr.map(pull => {
        return axios
          .get(
            baseURL + `${owner}/${repo}/pulls/${pull.number}/comments`,
            headers
          )
          .then(subRes => {
            pull.commentCount = subRes.data.length;
            return pull;
          })
          .catch(err => err);
      });
      return Promise.all(promises);
    })
    .then(pullArr => {
      // Then we rejoice as our API call worked
      return pullArr;
    })
    .catch(err => {
      // Or sob...
      return err;
    });
}

module.exports = { router, findThePulls };
