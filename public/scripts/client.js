/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = (tweets) => {
    tweets.forEach(singleTweet => {
      const $tweet = createTweetElement(singleTweet);
      $('#old-tweets').prepend($tweet);
    });
  }

  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article class="prev-tweets">
      <header>
        <div id="users">
          <img id="avi" src="${tweet.user.avatars}" alt="avatar">
          <label class="username" for="user-name">${tweet.user.name}</label>
        </div>
        <label id="handle" for="user-handle">${tweet.user.handle}</label>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
        ${tweet.created_at}
        <div id="socialBadges">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    `);
    return $tweet
  }

renderTweets(data);

});