/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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

  $("form").submit(function (event) {
    event.preventDefault();

    const tweetLength = $('#tweet-text').val().length;

    if (tweetLength > 140) {
      return alert("Tweet cannot be longer than 140 characters!");
    }

    if (tweetLength < 1 ) {
      return alert ("Tweet cannot be blank!");
    } 
  
    $.ajax ({
      url: "/tweets",
      type: "POST",
      data: $('form').serialize()
    })

  })

  const loadTweets = () => {
    $.ajax ("/tweets", {
      method: "GET",
    }). then(function (tweets) {
      renderTweets(tweets);
    })
  }

  loadTweets();

});

