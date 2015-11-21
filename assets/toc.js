// inspiration:
// * https://jsfiddle.net/gableroux/S2SMK/
// * http://gregfranko.com/jquery.tocify.js/
$(function() {
  var $toc = $('#toc');

  // essentially a media query for Bootstrap's col-sm-* breakpoint – make the table of contents "sticky" on wider screen sizes
  if ($(window).width() >= 768) {
    $toc.addClass('sticky');
  }

  var getAnchor = function(el) {
    if (el.id) {
      return el.id;
    } else {
      var text = $(el).text();
      return text.toLowerCase().replace(/\s+/, '-').replace(/[^\w\-]+/, '');
    }
  };

  var $context = $('<ul></ul>');
  $toc.append($context);

  var $prevNav;
  var prevNavLevel;

  $('h2,h3,h4').each(function(i, el) {
    var anchor = getAnchor(el);
    var text = $(el).text();

    var $newNav = $('<li><a href="#' + anchor + '">' + text + '</a></li>');

    $context.append($newNav);

    $prevNav = $newNav;
  });

  $('.sticky').Stickyfill();
});
