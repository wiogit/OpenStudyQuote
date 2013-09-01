var var_regex = /\(\?(.+?)\)/m;
var esc_regex = /\(\\(\\*)\?/;

$(document).ready(function() {
  setInterval(checkForLinks, 500);
  $('body').mouseup(mouseUp);
  $('body').mousemove(mouseMove);
});

function checkForLinks() {
  var question = $('h2.post').first();
  var replies = $('ol.replies li.post.reply');
  if (question.length > 0) {
    if (question.find('.os-quote-button').length == 0) {
      question.find('ul.update-info').append(createQuoteLink());
    }
  }
  replies.each(function () {
    if($(this).find('.os-quote-button').length == 0) {
      $(this).find('ul.update-info').append(createQuoteLink());
    }
  });
}
