
function createQuoteLink() {
  var button = $(document.createElement('button'))
    .addClass('update-info')
    .addClass('os-quote-button')
    .addClass('quote-post')
    .text('Quote')
    .click(makeQuote);
  var li = $(document.createElement('li'))
    .addClass('update-info')
    .append(button);
  return li;
}

function makeQuote() {
  var post = $(this).parents('h2.post');
  if (post.length == 0) {
    post = $(this).parents('li.post.reply');
  }
  insertQuote(post.OpenStudyQuoteText());
}

function insertQuote(body) {
  $('textarea#reply-body').insertAtCaret(body).fireEvent('keyup');
}

$.fn.extend({
  insertAtCaret: function(myValue){
    return this.each(function(i) {
      if (document.selection) {
        //For browsers like Internet Explorer
        this.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        this.focus();
      } else if (this.selectionStart || this.selectionStart == '0') {
        //For browsers like Firefox and Webkit based
        var startPos = this.selectionStart;
        var endPos = this.selectionEnd;
        var scrollTop = this.scrollTop;
        this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
        this.focus();
        this.selectionStart = startPos + myValue.length;
        this.selectionEnd = startPos + myValue.length;
        this.scrollTop = scrollTop;
      } else {
        this.value += myValue;
        this.focus();
      }
    });
  },
  
  fireEvent: function (event) {
    return this.each(function(i) {
      if (document.createEventObject) {
        var evt = document.createEventObject();
        return this.fireEvent("on" + event, evt);
      } else {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true);
        return !this.dispatchEvent(evt);
      }
    });
  }
});