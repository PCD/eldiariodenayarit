(function ($) {
  $(document).ready(function($) {
    $('#section-header, #section-content').wrapAll('<div class="shadow-box"/>');

    $('.buttons.social').each(function(){
      path = $(this).html();
      $(this).html(social_buttons(path));
    });
  });

}) (jQuery);

function social_buttons(path) {
  output = "<div class=\"buttons\">";
  output += "<ul>";
  output += "<li class='first'><div class=\"facebook-like-button\"><fb:like send=\"false\" href=\"" + path + "\" layout=\"button_count\" width=\"450\" show_faces=\"false\"></fb:like></div></li>";
  output += "<li><div class=\"twitter-retweet\"><a href=\"https://twitter.com/share\" data-url=\"" + path + "\" class=\"twitter-share-button\" data-lang=\"en\" data-count=\"none\">tweet</a>";
  output += "<li class='last'><div class=\"more\"><a href=\"" + path + "\">Leer Mas</a></div></li>";
  output += "</ul>";
  output += "</div>";
  return output;
}