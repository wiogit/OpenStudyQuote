var var_regex = /\(\?(.+?)\)/m;
var esc_regex = /\(\\(\\*)\?/;

$(document).ready(function() {
  setInterval(checkForLinks, 500);
});

function checkForLinks() {
  var questions = $('h2.post');
  var replies = $('ol.replies li.post.reply');
  questions.each(function () {
    if($(this).find('.os-quote-button').length == 0) {
      $(this).find('ul.update-info li.report-container').after(createQuoteLink());
      $(this).find('ul.update-info li.report-container').after(createCopyLink());
    }
  })
  replies.each(function () {
    if($(this).find('.os-quote-button').length == 0) {
      $(this).find('ul.update-info li.report-container').after(createQuoteLink());
      $(this).find('ul.update-info li.report-container').after(createCopyLink());
    }
  });
}
