// JQuery Twitter Feed. Coded by www.webdevdoor.com (2012) and modified from https://twitter.com/javascripts/blogger.js
//Augmented and changed/fixed by NG.
function embedTwitter(options){	
    var displaylimit = options.displayLimit;
    var twitterprofile = options.profileName;
    var screenname = options.screenName;
    var showdirecttweets = false;
    var showretweets = options.showRetweets;
    var showtweetlinks = true;
    var showprofilepic = true;
    
    var callback = options.callback;
 
    var headerHTML = '';
    var loadingHTML = '';
    //headerHTML += '<a href="https://twitter.com/" ><img src="/twitter/images/twitter-bird-light.png" width="34" style="float:left;padding:3px 12px 0px 6px" alt="twitter bird" /></a>';
   // headerHTML += '<h1>'+screenname+' <br /><span style="font-size:13px"><a target="_parent" href="https://twitter.com/'+twitterprofile+'" >@'+twitterprofile+'</a></span></h1>';
    loadingHTML += '<div id="loading-container"><img src="' + Drupal.settings.tlm_twitter_loading_image + '" width="32" height="32" alt="tweet loader" /></div>';
 
    $(options.containingDiv).html(headerHTML + loadingHTML);
 
    $.getJSON(options.jsonUrl +'?'+Math.random(),
        function(feeds) {
            //alert(feeds);
            var feedHTML = '';
            var displayCounter = 1;
            
            //The case where its a search, the feeds are inside the statuses object.
            if(feeds.statuses){
            	feeds=feeds.statuses;
            }
            for (var i=0; i<feeds.length; i++) {
                var tweetscreenname = feeds[i].user.name;
                var tweetusername = feeds[i].user.screen_name;
                var profileimage = feeds[i].user.profile_image_url_https;
                var status = feeds[i].text;
                var isaretweet = false;
                var isdirect = false;
                var tweetid = feeds[i].id_str;
 
                //If the tweet has been retweeted, get the profile pic of the tweeter
                if(typeof feeds[i].retweeted_status != 'undefined'){
                   profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
                   tweetscreenname = feeds[i].retweeted_status.user.name;
                   tweetusername = feeds[i].retweeted_status.user.screen_name;
                   tweetid = feeds[i].retweeted_status.id_str
                   isaretweet = true;
                 };
 
                 //Check to see if the tweet is a direct message
                 if (feeds[i].text.substr(0,1) == "@") {
                     isdirect = true;
                 }
 
                //console.log(feeds[i]);
 
                 if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) {
                    if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
                        if (showtweetlinks == true) {
                            status = addlinks(status);
                        }
 
                        if (displayCounter == 1) {
                            feedHTML += headerHTML;
                        }
 
                        feedHTML += '<div class="twitter-article">';
                        feedHTML += '<div class="twitter-pic"><a href="https://twitter.com/'+tweetusername+'" class="external"><img src="'+profileimage+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" /></a></div>';
                        feedHTML += '<div class="twitter-text"><p><span class="tweetprofilelink"><strong><a href="https://twitter.com/'+tweetusername+'" class="external">'+tweetscreenname+'</a></strong> <a href="https://twitter.com/'+tweetusername+'" class="external">@'+tweetusername+'</a></span><span class="tweet-time"><a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'" class="external">'+relative_time(feeds[i].created_at)+'</a></span><br/>'+status+'</p></div>';
                        feedHTML += '</div>';
                        displayCounter++;
                    }
                 }
            }
 
            
            if(displayCounter == 1){
            	feedHTML += 'No tweets. Pas de tweets.';
            }
            
            
            $(options.containingDiv).html(feedHTML);
            
            if(options.callback){
	            options.callback()
	    	}
    }); 
}


//Function modified from Stack Overflow
function addlinks(data) {
    //Add link to all http:// links within tweets
    data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
        return '<a href="'+url+'" class="external">'+url+'</a>';
    });

    //Add link to @usernames used within tweets
    data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
        return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" class="external">'+reply.charAt(0)+reply.substring(1)+'</a>';
    });
    return data;
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return '1m';
  } else if(delta < 120) {
    return '1m';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + 'm';
  } else if(delta < (120*60)) {
    return '1h';
  } else if(delta < (24*60*60)) {
    return (parseInt(delta / 3600)).toString() + 'h';
  } else if(delta < (48*60*60)) {
    //return '1 day';
    return shortdate;
  } else {
    return shortdate;
  }
};
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
