<?php

//Additional variables exposed to our templates
//function _phptemplate_variables($hook, $vars){		//definition for D5
function PJCT_2013_preprocess_html(&$vars){		//definition for D6
	//require_once 'theme-settings-defaults.php';
  	//$defaults = getThemeSettingsDefaults();
  
  	drupal_add_css('/sites/all/themes/pjct_2013/style.css', array('group' => CSS_THEME, 'preprocess' => FALSE));
  	drupal_add_css('/sites/all/themes/pjct_2013/custom.css', array('group' => CSS_THEME, 'preprocess' => FALSE));
  
	$vars['codewise_skin_name'] = theme_get_setting('codewise_skin_name');
	$vars['copyright_text'] = theme_get_setting('copyright_text');
	
	$vars['header_logo_alt_text'] = theme_get_setting('header_logo_alt_text');
	$vars['header_logo_link_url'] = theme_get_setting('header_logo_link_url');
	
	$vars['ga_show'] = theme_get_setting('ga_show');
	$vars['ga_id'] = theme_get_setting('ga_id');
	$vars['ga_version'] = theme_get_setting('ga_version');
		
	$vars['meta_description'] = theme_get_setting('meta_description');
	$vars['meta_keywords'] = theme_get_setting('meta_keywords');
	$vars['meta_copyright'] = theme_get_setting('meta_copyright');
	$vars['meta_ie8fix'] = theme_get_setting('meta_ie8fix');
	
	$vars['footer_javascriptWarning'] = theme_get_setting('footer_javascriptWarning');	
	//$vars['footer_logo_url'] = theme_get_setting('footer_logo_url');
	$vars['footer_show_copyright_text'] = theme_get_setting('footer_show_copyright_text');
	$vars['footer_show_copyright'] = theme_get_setting('footer_show_copyright');
	
	$vars['footer_logo_url'] = '';
	if(theme_get_setting('footer_logo_use')){
		$tmp = theme_get_setting('footer_logo_custom_url');
		if(theme_get_setting('footer_logo_use_default') == true || empty($tmp)){
			$vars['footer_logo_url'] = $defaults['footer_logo_default_url'];
		}else{
			$vars['footer_logo_url'] = theme_get_setting('footer_logo_custom_url');
		}
	}
		
	
    
	//return $vars;
}

function PJCT_2013_process_html(&$vars){
	foreach (array('head', 'styles', 'scripts') as $replace) {
        if (!isset($vars[$replace])) {
            continue;
        }

        //make any absolute incluides from the same domain, relative.
        $vars[$replace] = str_ireplace("http://" . $_SERVER['HTTP_HOST'], '', $vars[$replace]);
    }
}


function PJCT_2013_preprocess_page(&$vars){		//make same vars available in page.tpl
	PJCT_2013_preprocess_html($vars);
}



//Override video_filter module theme function. To add "title" attribute for accessibility.
function PJCT_2013_video_filter_iframe($variables) {		
  $video = $variables['video'];
  $classes = video_filter_get_classes($video);
  //$output = '<iframe iframe_url="' . $video['source'] . '" width="' . $video['width'] . '" height="' . $video['height'] . '" longdesc="" class="api ' . implode(' ', $classes) . '" frameborder="0" title="Embedded ' . $video['codec']['name'] . ' Video"></iframe>';

  //Fix for IE causing error with dom manipulation that codewise is doing, from http://stackoverflow.com/questions/13023098/math-is-undefined-error-in-an-embed-object
  if (preg_match('/MSIE 9.0/', $_SERVER['HTTP_USER_AGENT'])) { /*for IE 9.0 generate with objace tag*/ 
     $output = '<object type="application/x-shockwave-flash" data="' . $video['source'] . '" width="' . $video['width'] . '" height="' . $video['height'] . '">
      <param name="movie" value="' . $video['source'] . '" />
      </object>';
     
  } else { /*rest of all browsers,in iframe*/
      $output = '<iframe iframe_url="' . $video['source'] . '" width="' . $video['width'] . '" height="' . $video['height'] . '" longdesc="" class="api ' . implode(' ', $classes) . '" frameborder="0" title="Embedded ' . $video['codec']['name'] . ' Video"></iframe>';
 }
 
 
  return $output;
}


function PJCT_2013_page_alter(&$page) {
	// Remove all the region wrappers.
	foreach (element_children($page) as $key => $region) {
	if (!empty($page[$region]['#theme_wrappers'])) {
	$page[$region]['#theme_wrappers'] = array_diff($page[$region]['#theme_wrappers'], array('region'));
	}
	}
	// Remove the wrapper from the main content block.
	if (!empty($page['content']['system_main'])) {
	$page['content']['system_main']['#theme_wrappers'] = array_diff($page['content']['system_main']['#theme_wrappers'], array('block'));
	}
}
