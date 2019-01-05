const baseReq = [
  {
    url: "https://api.github.com/repos/hapijs/hapi/pulls/3892",
    id: 235678166,
    node_id: "MDExOlB1bGxSZXF1ZXN0MjM1Njc4MTY2",
    html_url: "https://github.com/hapijs/hapi/pull/3892",
    diff_url: "https://github.com/hapijs/hapi/pull/3892.diff",
    patch_url: "https://github.com/hapijs/hapi/pull/3892.patch",
    issue_url: "https://api.github.com/repos/hapijs/hapi/issues/3892",
    number: 3892,
    state: "open",
    locked: false,
    title: "Clarify flags parameter usage for server method functions",
    user: {
      login: "adamhamlin",
      id: 18332856,
      node_id: "MDQ6VXNlcjE4MzMyODU2",
      avatar_url: "https://avatars1.githubusercontent.com/u/18332856?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adamhamlin",
      html_url: "https://github.com/adamhamlin",
      followers_url: "https://api.github.com/users/adamhamlin/followers",
      following_url:
        "https://api.github.com/users/adamhamlin/following{/other_user}",
      gists_url: "https://api.github.com/users/adamhamlin/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adamhamlin/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adamhamlin/subscriptions",
      organizations_url: "https://api.github.com/users/adamhamlin/orgs",
      repos_url: "https://api.github.com/users/adamhamlin/repos",
      events_url: "https://api.github.com/users/adamhamlin/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adamhamlin/received_events",
      type: "User",
      site_admin: false
    },
    body:
      "Issue: https://github.com/hapijs/discuss/issues/751\r\n\r\nJust a short docs update",
    created_at: "2018-12-04T04:42:56Z",
    updated_at: "2018-12-04T04:42:56Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: "e9cdbe2d296a902233ac8ae4af6e43d741a9404b",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [],
    milestone: null,
    commits_url: "https://api.github.com/repos/hapijs/hapi/pulls/3892/commits",
    review_comments_url:
      "https://api.github.com/repos/hapijs/hapi/pulls/3892/comments",
    review_comment_url:
      "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/hapijs/hapi/issues/3892/comments",
    statuses_url:
      "https://api.github.com/repos/hapijs/hapi/statuses/10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
    head: {
      label: "adamhamlin:method-flags-clarification",
      ref: "method-flags-clarification",
      sha: "10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
      user: {
        login: "adamhamlin",
        id: 18332856,
        node_id: "MDQ6VXNlcjE4MzMyODU2",
        avatar_url: "https://avatars1.githubusercontent.com/u/18332856?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/adamhamlin",
        html_url: "https://github.com/adamhamlin",
        followers_url: "https://api.github.com/users/adamhamlin/followers",
        following_url:
          "https://api.github.com/users/adamhamlin/following{/other_user}",
        gists_url: "https://api.github.com/users/adamhamlin/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/adamhamlin/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/adamhamlin/subscriptions",
        organizations_url: "https://api.github.com/users/adamhamlin/orgs",
        repos_url: "https://api.github.com/users/adamhamlin/repos",
        events_url: "https://api.github.com/users/adamhamlin/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/adamhamlin/received_events",
        type: "User",
        site_admin: false
      },
      repo: {
        id: 160296819,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjAyOTY4MTk=",
        name: "hapi",
        full_name: "adamhamlin/hapi",
        private: false,
        owner: {
          login: "adamhamlin",
          id: 18332856,
          node_id: "MDQ6VXNlcjE4MzMyODU2",
          avatar_url: "https://avatars1.githubusercontent.com/u/18332856?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/adamhamlin",
          html_url: "https://github.com/adamhamlin",
          followers_url: "https://api.github.com/users/adamhamlin/followers",
          following_url:
            "https://api.github.com/users/adamhamlin/following{/other_user}",
          gists_url: "https://api.github.com/users/adamhamlin/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/adamhamlin/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/adamhamlin/subscriptions",
          organizations_url: "https://api.github.com/users/adamhamlin/orgs",
          repos_url: "https://api.github.com/users/adamhamlin/repos",
          events_url:
            "https://api.github.com/users/adamhamlin/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/adamhamlin/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/adamhamlin/hapi",
        description: "Server Framework  for Node.js",
        fork: true,
        url: "https://api.github.com/repos/adamhamlin/hapi",
        forks_url: "https://api.github.com/repos/adamhamlin/hapi/forks",
        keys_url: "https://api.github.com/repos/adamhamlin/hapi/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/adamhamlin/hapi/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/adamhamlin/hapi/teams",
        hooks_url: "https://api.github.com/repos/adamhamlin/hapi/hooks",
        issue_events_url:
          "https://api.github.com/repos/adamhamlin/hapi/issues/events{/number}",
        events_url: "https://api.github.com/repos/adamhamlin/hapi/events",
        assignees_url:
          "https://api.github.com/repos/adamhamlin/hapi/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/adamhamlin/hapi/branches{/branch}",
        tags_url: "https://api.github.com/repos/adamhamlin/hapi/tags",
        blobs_url:
          "https://api.github.com/repos/adamhamlin/hapi/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/adamhamlin/hapi/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/adamhamlin/hapi/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/adamhamlin/hapi/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/adamhamlin/hapi/statuses/{sha}",
        languages_url: "https://api.github.com/repos/adamhamlin/hapi/languages",
        stargazers_url:
          "https://api.github.com/repos/adamhamlin/hapi/stargazers",
        contributors_url:
          "https://api.github.com/repos/adamhamlin/hapi/contributors",
        subscribers_url:
          "https://api.github.com/repos/adamhamlin/hapi/subscribers",
        subscription_url:
          "https://api.github.com/repos/adamhamlin/hapi/subscription",
        commits_url:
          "https://api.github.com/repos/adamhamlin/hapi/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/adamhamlin/hapi/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/adamhamlin/hapi/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/adamhamlin/hapi/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/adamhamlin/hapi/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/adamhamlin/hapi/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/adamhamlin/hapi/merges",
        archive_url:
          "https://api.github.com/repos/adamhamlin/hapi/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/adamhamlin/hapi/downloads",
        issues_url:
          "https://api.github.com/repos/adamhamlin/hapi/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/adamhamlin/hapi/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/adamhamlin/hapi/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/adamhamlin/hapi/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/adamhamlin/hapi/labels{/name}",
        releases_url:
          "https://api.github.com/repos/adamhamlin/hapi/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/adamhamlin/hapi/deployments",
        created_at: "2018-12-04T04:28:47Z",
        updated_at: "2018-12-04T04:28:51Z",
        pushed_at: "2018-12-04T04:36:00Z",
        git_url: "git://github.com/adamhamlin/hapi.git",
        ssh_url: "git@github.com:adamhamlin/hapi.git",
        clone_url: "https://github.com/adamhamlin/hapi.git",
        svn_url: "https://github.com/adamhamlin/hapi",
        homepage: "hapijs.com",
        size: 12738,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA="
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master"
      }
    },
    base: {
      label: "hapijs:master",
      ref: "master",
      sha: "13f417db967be5dca2d82bc3dcf19cb736ea26c8",
      user: {
        login: "hapijs",
        id: 3774533,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
        avatar_url: "https://avatars1.githubusercontent.com/u/3774533?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/hapijs",
        html_url: "https://github.com/hapijs",
        followers_url: "https://api.github.com/users/hapijs/followers",
        following_url:
          "https://api.github.com/users/hapijs/following{/other_user}",
        gists_url: "https://api.github.com/users/hapijs/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hapijs/subscriptions",
        organizations_url: "https://api.github.com/users/hapijs/orgs",
        repos_url: "https://api.github.com/users/hapijs/repos",
        events_url: "https://api.github.com/users/hapijs/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/hapijs/received_events",
        type: "Organization",
        site_admin: false
      },
      repo: {
        id: 2163263,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTYzMjYz",
        name: "hapi",
        full_name: "hapijs/hapi",
        private: false,
        owner: {
          login: "hapijs",
          id: 3774533,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
          avatar_url: "https://avatars1.githubusercontent.com/u/3774533?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hapijs",
          html_url: "https://github.com/hapijs",
          followers_url: "https://api.github.com/users/hapijs/followers",
          following_url:
            "https://api.github.com/users/hapijs/following{/other_user}",
          gists_url: "https://api.github.com/users/hapijs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hapijs/subscriptions",
          organizations_url: "https://api.github.com/users/hapijs/orgs",
          repos_url: "https://api.github.com/users/hapijs/repos",
          events_url: "https://api.github.com/users/hapijs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hapijs/received_events",
          type: "Organization",
          site_admin: false
        },
        html_url: "https://github.com/hapijs/hapi",
        description: "Server Framework  for Node.js",
        fork: false,
        url: "https://api.github.com/repos/hapijs/hapi",
        forks_url: "https://api.github.com/repos/hapijs/hapi/forks",
        keys_url: "https://api.github.com/repos/hapijs/hapi/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/hapijs/hapi/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/hapijs/hapi/teams",
        hooks_url: "https://api.github.com/repos/hapijs/hapi/hooks",
        issue_events_url:
          "https://api.github.com/repos/hapijs/hapi/issues/events{/number}",
        events_url: "https://api.github.com/repos/hapijs/hapi/events",
        assignees_url:
          "https://api.github.com/repos/hapijs/hapi/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/hapijs/hapi/branches{/branch}",
        tags_url: "https://api.github.com/repos/hapijs/hapi/tags",
        blobs_url: "https://api.github.com/repos/hapijs/hapi/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/hapijs/hapi/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/hapijs/hapi/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/hapijs/hapi/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/hapijs/hapi/statuses/{sha}",
        languages_url: "https://api.github.com/repos/hapijs/hapi/languages",
        stargazers_url: "https://api.github.com/repos/hapijs/hapi/stargazers",
        contributors_url:
          "https://api.github.com/repos/hapijs/hapi/contributors",
        subscribers_url: "https://api.github.com/repos/hapijs/hapi/subscribers",
        subscription_url:
          "https://api.github.com/repos/hapijs/hapi/subscription",
        commits_url: "https://api.github.com/repos/hapijs/hapi/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/hapijs/hapi/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/hapijs/hapi/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/hapijs/hapi/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/hapijs/hapi/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/hapijs/hapi/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/hapijs/hapi/merges",
        archive_url:
          "https://api.github.com/repos/hapijs/hapi/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/hapijs/hapi/downloads",
        issues_url: "https://api.github.com/repos/hapijs/hapi/issues{/number}",
        pulls_url: "https://api.github.com/repos/hapijs/hapi/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/hapijs/hapi/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/hapijs/hapi/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/hapijs/hapi/labels{/name}",
        releases_url: "https://api.github.com/repos/hapijs/hapi/releases{/id}",
        deployments_url: "https://api.github.com/repos/hapijs/hapi/deployments",
        created_at: "2011-08-06T00:35:39Z",
        updated_at: "2019-01-04T20:45:14Z",
        pushed_at: "2018-12-17T15:38:07Z",
        git_url: "git://github.com/hapijs/hapi.git",
        ssh_url: "git@github.com:hapijs/hapi.git",
        clone_url: "https://github.com/hapijs/hapi.git",
        svn_url: "https://github.com/hapijs/hapi",
        homepage: "hapijs.com",
        size: 12798,
        stargazers_count: 10608,
        watchers_count: 10608,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1093,
        mirror_url: null,
        archived: false,
        open_issues_count: 19,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA="
        },
        forks: 1093,
        open_issues: 19,
        watchers: 10608,
        default_branch: "master"
      }
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3892"
      },
      html: {
        href: "https://github.com/hapijs/hapi/pull/3892"
      },
      issue: {
        href: "https://api.github.com/repos/hapijs/hapi/issues/3892"
      },
      comments: {
        href: "https://api.github.com/repos/hapijs/hapi/issues/3892/comments"
      },
      review_comments: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3892/comments"
      },
      review_comment: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}"
      },
      commits: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3892/commits"
      },
      statuses: {
        href:
          "https://api.github.com/repos/hapijs/hapi/statuses/10ae6690272f0271dfb6ad1d86ce0b7d4c498758"
      }
    },
    author_association: "NONE"
  },
  {
    url: "https://api.github.com/repos/hapijs/hapi/pulls/3882",
    id: 232135330,
    node_id: "MDExOlB1bGxSZXF1ZXN0MjMyMTM1MzMw",
    html_url: "https://github.com/hapijs/hapi/pull/3882",
    diff_url: "https://github.com/hapijs/hapi/pull/3882.diff",
    patch_url: "https://github.com/hapijs/hapi/pull/3882.patch",
    issue_url: "https://api.github.com/repos/hapijs/hapi/issues/3882",
    number: 3882,
    state: "open",
    locked: false,
    title: "Add validation for cookies (alt impl)",
    user: {
      login: "dominykas",
      id: 505619,
      node_id: "MDQ6VXNlcjUwNTYxOQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/505619?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dominykas",
      html_url: "https://github.com/dominykas",
      followers_url: "https://api.github.com/users/dominykas/followers",
      following_url:
        "https://api.github.com/users/dominykas/following{/other_user}",
      gists_url: "https://api.github.com/users/dominykas/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dominykas/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/dominykas/subscriptions",
      organizations_url: "https://api.github.com/users/dominykas/orgs",
      repos_url: "https://api.github.com/users/dominykas/repos",
      events_url: "https://api.github.com/users/dominykas/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dominykas/received_events",
      type: "User",
      site_admin: false
    },
    body:
      "Closes #3832.\r\nAn alternative for https://github.com/hapijs/hapi/pull/3881.\r\n",
    created_at: "2018-11-19T22:40:46Z",
    updated_at: "2018-11-19T22:40:46Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: "05e9842c2091988725775c7024fc00ab7a6875d1",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [],
    milestone: null,
    commits_url: "https://api.github.com/repos/hapijs/hapi/pulls/3882/commits",
    review_comments_url:
      "https://api.github.com/repos/hapijs/hapi/pulls/3882/comments",
    review_comment_url:
      "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/hapijs/hapi/issues/3882/comments",
    statuses_url:
      "https://api.github.com/repos/hapijs/hapi/statuses/f785fa08d9043548f8725aa1b6993c0023182750",
    head: {
      label: "dominykas:validate-cookies-alt",
      ref: "validate-cookies-alt",
      sha: "f785fa08d9043548f8725aa1b6993c0023182750",
      user: {
        login: "dominykas",
        id: 505619,
        node_id: "MDQ6VXNlcjUwNTYxOQ==",
        avatar_url: "https://avatars1.githubusercontent.com/u/505619?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/dominykas",
        html_url: "https://github.com/dominykas",
        followers_url: "https://api.github.com/users/dominykas/followers",
        following_url:
          "https://api.github.com/users/dominykas/following{/other_user}",
        gists_url: "https://api.github.com/users/dominykas/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/dominykas/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/dominykas/subscriptions",
        organizations_url: "https://api.github.com/users/dominykas/orgs",
        repos_url: "https://api.github.com/users/dominykas/repos",
        events_url: "https://api.github.com/users/dominykas/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/dominykas/received_events",
        type: "User",
        site_admin: false
      },
      repo: {
        id: 157988086,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTc5ODgwODY=",
        name: "hapi",
        full_name: "dominykas/hapi",
        private: false,
        owner: {
          login: "dominykas",
          id: 505619,
          node_id: "MDQ6VXNlcjUwNTYxOQ==",
          avatar_url: "https://avatars1.githubusercontent.com/u/505619?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dominykas",
          html_url: "https://github.com/dominykas",
          followers_url: "https://api.github.com/users/dominykas/followers",
          following_url:
            "https://api.github.com/users/dominykas/following{/other_user}",
          gists_url: "https://api.github.com/users/dominykas/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dominykas/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dominykas/subscriptions",
          organizations_url: "https://api.github.com/users/dominykas/orgs",
          repos_url: "https://api.github.com/users/dominykas/repos",
          events_url: "https://api.github.com/users/dominykas/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dominykas/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/dominykas/hapi",
        description: "Server Framework  for Node.js",
        fork: true,
        url: "https://api.github.com/repos/dominykas/hapi",
        forks_url: "https://api.github.com/repos/dominykas/hapi/forks",
        keys_url: "https://api.github.com/repos/dominykas/hapi/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/dominykas/hapi/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/dominykas/hapi/teams",
        hooks_url: "https://api.github.com/repos/dominykas/hapi/hooks",
        issue_events_url:
          "https://api.github.com/repos/dominykas/hapi/issues/events{/number}",
        events_url: "https://api.github.com/repos/dominykas/hapi/events",
        assignees_url:
          "https://api.github.com/repos/dominykas/hapi/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/dominykas/hapi/branches{/branch}",
        tags_url: "https://api.github.com/repos/dominykas/hapi/tags",
        blobs_url:
          "https://api.github.com/repos/dominykas/hapi/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/dominykas/hapi/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/dominykas/hapi/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/dominykas/hapi/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/dominykas/hapi/statuses/{sha}",
        languages_url: "https://api.github.com/repos/dominykas/hapi/languages",
        stargazers_url:
          "https://api.github.com/repos/dominykas/hapi/stargazers",
        contributors_url:
          "https://api.github.com/repos/dominykas/hapi/contributors",
        subscribers_url:
          "https://api.github.com/repos/dominykas/hapi/subscribers",
        subscription_url:
          "https://api.github.com/repos/dominykas/hapi/subscription",
        commits_url:
          "https://api.github.com/repos/dominykas/hapi/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/dominykas/hapi/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/dominykas/hapi/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/dominykas/hapi/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/dominykas/hapi/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/dominykas/hapi/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/dominykas/hapi/merges",
        archive_url:
          "https://api.github.com/repos/dominykas/hapi/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/dominykas/hapi/downloads",
        issues_url:
          "https://api.github.com/repos/dominykas/hapi/issues{/number}",
        pulls_url: "https://api.github.com/repos/dominykas/hapi/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/dominykas/hapi/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/dominykas/hapi/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/dominykas/hapi/labels{/name}",
        releases_url:
          "https://api.github.com/repos/dominykas/hapi/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/dominykas/hapi/deployments",
        created_at: "2018-11-17T13:39:32Z",
        updated_at: "2018-11-17T13:39:35Z",
        pushed_at: "2018-11-19T22:38:04Z",
        git_url: "git://github.com/dominykas/hapi.git",
        ssh_url: "git@github.com:dominykas/hapi.git",
        clone_url: "https://github.com/dominykas/hapi.git",
        svn_url: "https://github.com/dominykas/hapi",
        homepage: "hapijs.com",
        size: 12810,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA="
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master"
      }
    },
    base: {
      label: "hapijs:master",
      ref: "master",
      sha: "82f287053e12495c45746b3cffc1cb5c9f9ee81b",
      user: {
        login: "hapijs",
        id: 3774533,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
        avatar_url: "https://avatars1.githubusercontent.com/u/3774533?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/hapijs",
        html_url: "https://github.com/hapijs",
        followers_url: "https://api.github.com/users/hapijs/followers",
        following_url:
          "https://api.github.com/users/hapijs/following{/other_user}",
        gists_url: "https://api.github.com/users/hapijs/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/hapijs/subscriptions",
        organizations_url: "https://api.github.com/users/hapijs/orgs",
        repos_url: "https://api.github.com/users/hapijs/repos",
        events_url: "https://api.github.com/users/hapijs/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/hapijs/received_events",
        type: "Organization",
        site_admin: false
      },
      repo: {
        id: 2163263,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTYzMjYz",
        name: "hapi",
        full_name: "hapijs/hapi",
        private: false,
        owner: {
          login: "hapijs",
          id: 3774533,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MzM=",
          avatar_url: "https://avatars1.githubusercontent.com/u/3774533?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hapijs",
          html_url: "https://github.com/hapijs",
          followers_url: "https://api.github.com/users/hapijs/followers",
          following_url:
            "https://api.github.com/users/hapijs/following{/other_user}",
          gists_url: "https://api.github.com/users/hapijs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hapijs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hapijs/subscriptions",
          organizations_url: "https://api.github.com/users/hapijs/orgs",
          repos_url: "https://api.github.com/users/hapijs/repos",
          events_url: "https://api.github.com/users/hapijs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hapijs/received_events",
          type: "Organization",
          site_admin: false
        },
        html_url: "https://github.com/hapijs/hapi",
        description: "Server Framework  for Node.js",
        fork: false,
        url: "https://api.github.com/repos/hapijs/hapi",
        forks_url: "https://api.github.com/repos/hapijs/hapi/forks",
        keys_url: "https://api.github.com/repos/hapijs/hapi/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/hapijs/hapi/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/hapijs/hapi/teams",
        hooks_url: "https://api.github.com/repos/hapijs/hapi/hooks",
        issue_events_url:
          "https://api.github.com/repos/hapijs/hapi/issues/events{/number}",
        events_url: "https://api.github.com/repos/hapijs/hapi/events",
        assignees_url:
          "https://api.github.com/repos/hapijs/hapi/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/hapijs/hapi/branches{/branch}",
        tags_url: "https://api.github.com/repos/hapijs/hapi/tags",
        blobs_url: "https://api.github.com/repos/hapijs/hapi/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/hapijs/hapi/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/hapijs/hapi/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/hapijs/hapi/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/hapijs/hapi/statuses/{sha}",
        languages_url: "https://api.github.com/repos/hapijs/hapi/languages",
        stargazers_url: "https://api.github.com/repos/hapijs/hapi/stargazers",
        contributors_url:
          "https://api.github.com/repos/hapijs/hapi/contributors",
        subscribers_url: "https://api.github.com/repos/hapijs/hapi/subscribers",
        subscription_url:
          "https://api.github.com/repos/hapijs/hapi/subscription",
        commits_url: "https://api.github.com/repos/hapijs/hapi/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/hapijs/hapi/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/hapijs/hapi/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/hapijs/hapi/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/hapijs/hapi/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/hapijs/hapi/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/hapijs/hapi/merges",
        archive_url:
          "https://api.github.com/repos/hapijs/hapi/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/hapijs/hapi/downloads",
        issues_url: "https://api.github.com/repos/hapijs/hapi/issues{/number}",
        pulls_url: "https://api.github.com/repos/hapijs/hapi/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/hapijs/hapi/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/hapijs/hapi/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/hapijs/hapi/labels{/name}",
        releases_url: "https://api.github.com/repos/hapijs/hapi/releases{/id}",
        deployments_url: "https://api.github.com/repos/hapijs/hapi/deployments",
        created_at: "2011-08-06T00:35:39Z",
        updated_at: "2019-01-04T20:45:14Z",
        pushed_at: "2018-12-17T15:38:07Z",
        git_url: "git://github.com/hapijs/hapi.git",
        ssh_url: "git@github.com:hapijs/hapi.git",
        clone_url: "https://github.com/hapijs/hapi.git",
        svn_url: "https://github.com/hapijs/hapi",
        homepage: "hapijs.com",
        size: 12798,
        stargazers_count: 10608,
        watchers_count: 10608,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1093,
        mirror_url: null,
        archived: false,
        open_issues_count: 19,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA="
        },
        forks: 1093,
        open_issues: 19,
        watchers: 10608,
        default_branch: "master"
      }
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3882"
      },
      html: {
        href: "https://github.com/hapijs/hapi/pull/3882"
      },
      issue: {
        href: "https://api.github.com/repos/hapijs/hapi/issues/3882"
      },
      comments: {
        href: "https://api.github.com/repos/hapijs/hapi/issues/3882/comments"
      },
      review_comments: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3882/comments"
      },
      review_comment: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/comments{/number}"
      },
      commits: {
        href: "https://api.github.com/repos/hapijs/hapi/pulls/3882/commits"
      },
      statuses: {
        href:
          "https://api.github.com/repos/hapijs/hapi/statuses/f785fa08d9043548f8725aa1b6993c0023182750"
      }
    },
    author_association: "CONTRIBUTOR"
  }
];
const commitReq1 = [
  {
    sha: "10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
    node_id:
      "MDY6Q29tbWl0MTYwMjk2ODE5OjEwYWU2NjkwMjcyZjAyNzFkZmI2YWQxZDg2Y2UwYjdkNGM0OTg3NTg=",
    commit: {
      author: {
        name: "Adam C Hamlin",
        email: "achamlin@gmail.com",
        date: "2018-12-04T04:22:42Z"
      },
      committer: {
        name: "Adam C Hamlin",
        email: "achamlin@gmail.com",
        date: "2018-12-04T04:22:42Z"
      },
      message: "Clarify flags parameter usage for server method functions",
      tree: {
        sha: "1707a8a87196b2e7afbb6229133aafc3cd78ac37",
        url:
          "https://api.github.com/repos/hapijs/hapi/git/trees/1707a8a87196b2e7afbb6229133aafc3cd78ac37"
      },
      url:
        "https://api.github.com/repos/hapijs/hapi/git/commits/10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null
      }
    },
    url:
      "https://api.github.com/repos/hapijs/hapi/commits/10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
    html_url:
      "https://github.com/hapijs/hapi/commit/10ae6690272f0271dfb6ad1d86ce0b7d4c498758",
    comments_url:
      "https://api.github.com/repos/hapijs/hapi/commits/10ae6690272f0271dfb6ad1d86ce0b7d4c498758/comments",
    author: {
      login: "adamhamlin",
      id: 18332856,
      node_id: "MDQ6VXNlcjE4MzMyODU2",
      avatar_url: "https://avatars1.githubusercontent.com/u/18332856?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adamhamlin",
      html_url: "https://github.com/adamhamlin",
      followers_url: "https://api.github.com/users/adamhamlin/followers",
      following_url:
        "https://api.github.com/users/adamhamlin/following{/other_user}",
      gists_url: "https://api.github.com/users/adamhamlin/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adamhamlin/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adamhamlin/subscriptions",
      organizations_url: "https://api.github.com/users/adamhamlin/orgs",
      repos_url: "https://api.github.com/users/adamhamlin/repos",
      events_url: "https://api.github.com/users/adamhamlin/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adamhamlin/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "adamhamlin",
      id: 18332856,
      node_id: "MDQ6VXNlcjE4MzMyODU2",
      avatar_url: "https://avatars1.githubusercontent.com/u/18332856?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adamhamlin",
      html_url: "https://github.com/adamhamlin",
      followers_url: "https://api.github.com/users/adamhamlin/followers",
      following_url:
        "https://api.github.com/users/adamhamlin/following{/other_user}",
      gists_url: "https://api.github.com/users/adamhamlin/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adamhamlin/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adamhamlin/subscriptions",
      organizations_url: "https://api.github.com/users/adamhamlin/orgs",
      repos_url: "https://api.github.com/users/adamhamlin/repos",
      events_url: "https://api.github.com/users/adamhamlin/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adamhamlin/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "13f417db967be5dca2d82bc3dcf19cb736ea26c8",
        url:
          "https://api.github.com/repos/hapijs/hapi/commits/13f417db967be5dca2d82bc3dcf19cb736ea26c8",
        html_url:
          "https://github.com/hapijs/hapi/commit/13f417db967be5dca2d82bc3dcf19cb736ea26c8"
      }
    ]
  }
];
const commitReq2 = [
  {
    sha: "f785fa08d9043548f8725aa1b6993c0023182750",
    node_id:
      "MDY6Q29tbWl0MTU3OTg4MDg2OmY3ODVmYTA4ZDkwNDM1NDhmODcyNWFhMWI2OTkzYzAwMjMxODI3NTA=",
    commit: {
      author: {
        name: "Dominykas Blyžė",
        email: "hello@dominykas.com",
        date: "2018-11-19T22:37:53Z"
      },
      committer: {
        name: "Dominykas Blyžė",
        email: "hello@dominykas.com",
        date: "2018-11-19T22:37:53Z"
      },
      message: "Add validation for cookies. Closes #3832",
      tree: {
        sha: "98029ffc366a17dc0872b21618ea8fdfc568d204",
        url:
          "https://api.github.com/repos/hapijs/hapi/git/trees/98029ffc366a17dc0872b21618ea8fdfc568d204"
      },
      url:
        "https://api.github.com/repos/hapijs/hapi/git/commits/f785fa08d9043548f8725aa1b6993c0023182750",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\niQIzBAABCAAdFiEEKIyBGgPHKK9+Tj4k/XwPg4PkIWcFAlvzO0EACgkQ/XwPg4Pk\nIWfBDw/5Aav8tjtN83n0rQDgpQj+5HkwUjNzvbVdLZOcQrKfMth5DI4bu5Xak2fP\nhTtYzmqpzd/Tk7PmHGJ4fkI/+V84vgQsyvfLjmmRVkN0MotIorArwMte+ALtJUbU\nv8NbNptb/ofrZZ3WNUFeOolaazM5ZwrHrPIxJ5GkC1NnIECxAWgthQvLvO8ITbP8\n6Spx8XrJwV1ZHN9F2lKDDPEOO5OqCLWX1wYj8QaW+hrUTI87nha7xTGP03mejpzc\nLugkEvBQVYOT723xS/cu6NeCBTosqsnTIA0B2IzcJOK9my960Jh/CXQPU62ERl3i\njXUY18oxAtqZhGZsDYjXObozK7gi17Nyn6uptsi16OnsSd3DRGv/iB+uy1qhYMJz\n1oUq4rroJEWlawwaHpPkkZ+4UoiqyBy+znHPj0ZcmXfDd+0AVy6M8ZdmIH9EVe7N\niMcKKz8YCIvQkBL8ESF9azSfcvdzTbJPppnVQhG0NiFY7FKy6zkJa1d+nOefiFoW\niB1MiuKwJ7DpQem0hqq0qcNsealdnP0jJqe616KUuYXNAiUdOs5EYAMh+Vvg0C7t\nyuEctcBmVWuRqLMZ1XH/kaoZGF5nrqPthOrDv2290f/pRUNwwUCUq1SNaRLcA6IZ\n5gPGgmLN1RkrfrAFnslhoCj26HyNynJi9cJYoSzhLcoXw+27fGY=\n=T+bs\n-----END PGP SIGNATURE-----",
        payload:
          "tree 98029ffc366a17dc0872b21618ea8fdfc568d204\nparent 164f97faadd63b13b7e802f7f881a3420a77697d\nauthor Dominykas Blyžė <hello@dominykas.com> 1542667073 +0200\ncommitter Dominykas Blyžė <hello@dominykas.com> 1542667073 +0200\n\nAdd validation for cookies. Closes #3832\n"
      }
    },
    url:
      "https://api.github.com/repos/hapijs/hapi/commits/f785fa08d9043548f8725aa1b6993c0023182750",
    html_url:
      "https://github.com/hapijs/hapi/commit/f785fa08d9043548f8725aa1b6993c0023182750",
    comments_url:
      "https://api.github.com/repos/hapijs/hapi/commits/f785fa08d9043548f8725aa1b6993c0023182750/comments",
    author: {
      login: "dominykas",
      id: 505619,
      node_id: "MDQ6VXNlcjUwNTYxOQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/505619?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dominykas",
      html_url: "https://github.com/dominykas",
      followers_url: "https://api.github.com/users/dominykas/followers",
      following_url:
        "https://api.github.com/users/dominykas/following{/other_user}",
      gists_url: "https://api.github.com/users/dominykas/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dominykas/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/dominykas/subscriptions",
      organizations_url: "https://api.github.com/users/dominykas/orgs",
      repos_url: "https://api.github.com/users/dominykas/repos",
      events_url: "https://api.github.com/users/dominykas/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dominykas/received_events",
      type: "User",
      site_admin: false
    },
    committer: {
      login: "dominykas",
      id: 505619,
      node_id: "MDQ6VXNlcjUwNTYxOQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/505619?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dominykas",
      html_url: "https://github.com/dominykas",
      followers_url: "https://api.github.com/users/dominykas/followers",
      following_url:
        "https://api.github.com/users/dominykas/following{/other_user}",
      gists_url: "https://api.github.com/users/dominykas/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dominykas/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/dominykas/subscriptions",
      organizations_url: "https://api.github.com/users/dominykas/orgs",
      repos_url: "https://api.github.com/users/dominykas/repos",
      events_url: "https://api.github.com/users/dominykas/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dominykas/received_events",
      type: "User",
      site_admin: false
    },
    parents: [
      {
        sha: "164f97faadd63b13b7e802f7f881a3420a77697d",
        url:
          "https://api.github.com/repos/hapijs/hapi/commits/164f97faadd63b13b7e802f7f881a3420a77697d",
        html_url:
          "https://github.com/hapijs/hapi/commit/164f97faadd63b13b7e802f7f881a3420a77697d"
      }
    ]
  }
];

const commentReq = ["NOPE", "YUP"];

module.exports = { baseReq, commentReq, commitReq1, commitReq2 };
