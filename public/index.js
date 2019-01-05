function manageApp() {
  getButtonClick();
  postButtonClick();
}

function urlToObject(url) {
  let urlSections = url.split("/");
  return {
    owner: urlSections[3],
    repo: urlSections[4]
  };
}

function getButtonClick() {
  $("#get-button").click(function(e) {
    event.preventDefault();
    let { owner, repo } = urlToObject($("#url-input").val());
    if (!owner || !repo) {
      return $("#error").html("missing owner or repo");
    }
    $.ajax({
      url: `/api/gitHub/?owner=${owner}&&repo=${repo}`,
      type: "GET"
    })
      .then(pulls => {
        displayPullRequests(pulls);
      })
      .catch(err => {
        console.log(err);
        $("#error").html(err.responseJSON.message);
      });
  });
}

function postButtonClick() {
  $("#post-button").click(function(e) {
    event.preventDefault();
    let { owner, repo } = urlToObject($("#url-input").val());
    if (!owner || !repo) {
      return $("#error").html("missing owner or repo");
    }
    $.ajax({
      url: `/api/gitHub/`,
      type: "POST",
      data: JSON.stringify({ owner, repo }),
      contentType: "application/json"
    })
      .then(pulls => {
        displayPullRequests(pulls);
      })
      .catch(err => {
        console.log(err);
        $("#error").html(err.responseJSON.message);
      });
  });
}

function displayPullRequests(pulls) {
  let allPulls = pulls.map(pull => pullTemplate(pull));
  $("#pulls").html(
    "<li>Pull # - user - commit count - comment count</li>" + allPulls.join("")
  );
}

function pullTemplate(pull) {
  return `
    <li>${pull.number} - ${pull.user} - ${pull.commitCount} - ${
    pull.commentCount
  }</li>
  `;
}

$(manageApp());
