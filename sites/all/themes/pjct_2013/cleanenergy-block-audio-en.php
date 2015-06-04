<script type="text/javascript" src="http://cdn.wbur.org/javascript/jquery.jplayer.min.js"></script>
		<link rel="stylesheet" type="text/css" href="http://cdn.wbur.org/css/jquery.jplayer.css" media="screen">
			<div id="wbur-player-1" class="jp-jplayer" style="width: 0px; height: 0px;"><img id="jp_poster_0" style="width: 0px; height: 0px; display: none;"><object id="jp_flash_0" name="jp_flash_0" data="http://cdn.wbur.org/flash/Jplayer.swf" type="application/x-shockwave-flash" width="1" height="1" tabindex="-1" style="width: 0px; height: 0px;"><param name="flashvars" value="jQuery=jQuery&amp;id=wbur-player-1&amp;vol=0.8&amp;muted=false"><param name="allowscriptaccess" value="always"><param name="bgcolor" value="#000000"><param name="wmode" value="window"></object></div>    
	<div itemscope="" itemtype="http://schema.org/AudioObject" id="wbur-player-wrap-1" class="jp-audio">
	    <div class="jp-type-single">
	        <div class="jp-gui jp-interface">
	            <div class="jp-controls clearfix">
	            
	                <div class="wbur-jp-playpause">
	                	<div class="wbur-jp-playpause-pad">
	                		<div class="wbur-jp-playpause-wrap">
		                        <div class="wbur-jp-play"><a href="javascript:;" class="jp-play google-event" data:ga-category="Audio Player" data:ga-action="Click" data:ga-label="Play" tabindex="1" style="display: block;">play</a></div>
		                        <div class="wbur-jp-pause"><a href="javascript:;" class="jp-pause google-event" data:ga-category="Audio Player" data:ga-action="Click" data:ga-label="Pause" tabindex="1" style="display: none;">pause</a></div>
	                        </div>
	                    </div>
	                </div>
	                
	                <div class="wbur-jp-scrub clearfix">
	                    <div itemprop="description" class="wbur-jp-title">A message from Peter Julian on the campaign for Clean Energy &nbsp;</div>
	                    <div class="jp-progress">
	                        <div class="jp-seek-bar" style="width: 100%;">
	                            <div class="jp-play-bar" style="width: 3.3509700176366843%; overflow: hidden;"></div>
	                        </div>
	                    </div>
	                    <div class="jp-time-holder clearfix">
	                        <div class="jp-current-time">0:07</div>
	                        <div class="jp-time-sep">/</div>
	                        <div class="jp-duration">04:02</div>
	                    </div>
	                </div>
	                
	                <div class="wbur-jp-volume clearfix">
	                    <div class="wbur-jp-muteunmute">
	                    	<div class="wbur-jp-muteunmute-wrap">
		                        <a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a>
		                        <a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute" style="display: none;">unmute</a>
	                        </div>
	                    </div>                 
	                    <div class="jp-volume-bar">
	                        <div class="jp-volume-bar-value" style="width: 100%;"></div>
	                    </div>
	                </div>	
	            </div>	            
	        </div>	        
			        
	    </div>        
	</div>
		
	<script type="text/javascript">
		jQuery(document).ready(function(){
			var set50per = false;
			var set30sec = false;
			var set95per = false;	
			jQuery("#wbur-player-1").jPlayer({			
				cssSelectorAncestor: "#wbur-player-wrap-1",
				ready: function () {
					jQuery(this).jPlayer("setMedia", {"title":"A message from Peter Julian on the campaign for Clean Energy","duration":"04:02","mp3":"http://audio.wbur.org/storage/2013/11/hereandnow_1105_earth-like-planets.mp3","oga":"http://audio.wbur.org/storage/2013/11/hereandnow_1105_earth-like-planets.ogg"});
				},
				timeupdate: function (event){
					var percent = event['jPlayer']['status']['currentPercentRelative'];
					var duration = event['jPlayer']['status']['duration'];
					var audioListenedSec = event['jPlayer']['status']['currentTime'];
					if(duration == 0 || audioListenedSec == 0) return;
					if(!set30sec && audioListenedSec >= 30) {
						_gaq.push(['_trackEvent', 'Audio Player', '30 seconds listened','A message from Peter Julian on the campaign for Clean Energy']);
						set30sec = true;
					}
					if(!set50per && percent > 50) {
						_gaq.push(['_trackEvent', 'Audio Player', '50pct Listened','A message from Peter Julian on the campaign for Clean Energy']);
						set50per = true;
					}
					if(!set95per && percent > 95) {
						_gaq.push(['_trackEvent', 'Audio Player', '95pct listened','A message from Peter Julian on the campaign for Clean Energy']);
						set95per = true;
					}
				},
				swfPath: "http://cdn.wbur.org/flash/Jplayer.swf",			
				supplied: "mp3,oga",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: false,
				timeFormat: { 'padMin' : false, 'padHour' : false, 'showMin' : true },
				solution: "flash,html"
			});
			
		});
		//I AM BATMAN
	</script>   