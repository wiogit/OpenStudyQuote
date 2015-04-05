$.fn.extend({
    OpenStudyCopyText: function() {
        var clone = this.find('p.body').first().clone();
        var inlineTex = clone.find('script[type="math/tex"]');
        var displayTex = clone.find('script[type="math/tex; mode=display"]');
        var inlineCode = clone.children('code');
        var blockCode = clone.find('pre code');
        
        inlineTex.each(function() {
            var id = $(this).attr('id');
            clone.find('#' + id + '-Frame').remove();
            var rawTex = $(this).text();
            var showTex = '\\(' + rawTex + '\\)';
            $(this).text(showTex);
        });
        
        displayTex.each(function() {
            var id = $(this).attr('id');
            clone.find('#' + id + '-Frame').remove();
            var rawTex = $(this).text();
            var showTex = '\\[' + rawTex + '\\]';
            $(this).text(showTex);
        });
        
        inlineCode.each(function() {
            var rawCode = $(this).text();
            $(this).text('`' + rawCode + '`');
        });
        
        blockCode.each(function() {
            var rawCode = $(this).text();
            $(this).text('```\n' + rawCode + '```\n');
        });
        
        return clone.text();
    },
    OpenStudyQuoteText: function() {
        var user = this.find('a.username').text();
        var head = '\\(\\color{blue}{\\text{Originally Posted by}}\\) @' + user;
        var body = this.OpenStudyCopyText();
        body = $.trim(body);
        var foot = '\\(\\color{blue}{\\text{End of Quote}}\\)';
        return [head, body, foot].join('\n') + '\n';
    }
});
