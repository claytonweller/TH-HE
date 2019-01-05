function manageApp() {
  getButtonClick();
  postButtonClick();
}

function urlToObject(url) {
  // There is DEFINITELY a better way to do this.
  // But since this is a back end focused thing I won't spend time on it right now.
  // TODO add more logic for a robust breakdown of urls
  let urlSections = url.split("/");
  return {
    owner: urlSections[urlSections.length - 2],
    repo: urlSections[urlSections.length - 1]
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
