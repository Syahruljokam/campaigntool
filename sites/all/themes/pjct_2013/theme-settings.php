<?php



function PJCT_2013_form_system_theme_settings_alter(&$form, $form_state) {
	
  // The default values for the theme variables
  //require_once 'theme-settings-defaults.php';
 //$defaults = getThemeSettingsDefaults();

  // Merge the saved variables and their default values
  //$settings = array_merge($defaults, $saved_settings);

  // Create the form widgets using Forms API
  $form['codewise_skin_name'] = array(
    '#type' => 'textfield',
    '#title' => t('Codewise Skin Name'),
    '#default_value' => theme_get_setting('codewise_skin_name')
  );
   $form['copyright_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Copyright Text'),
    '#default_value' => theme_get_setting('copyright_text')
  );
   
   
  
  
	$form['header'] = array(
		'#type' => 'fieldset',
		'#title' => t('Header Section'),
		'#collapsible' => true,
	);
	$form['header']['logo'] = array(
		'#type' => 'fieldset',
		'#title' => t('Header Logo'),
		'#collapsible' => true,
	);
	
	$form['header']['logo']['header_logo_alt_text'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Img ALT Text'),
	    '#default_value' => theme_get_setting('header_logo_alt_text')
	);
	$form['header']['logo']['header_logo_link_url'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Logo Link URL'),
	    '#default_value' => theme_get_setting('header_logo_link_url')
	);
	$form['header']['logo'][] = array(
	    '#type' => 'markup',
	    '#value' => t('<p>Note: Image upload/url specified above in \'Logo image settings\'</p>'),
	);
	
	
	$form['footer'] = array(
		'#type' => 'fieldset',
		'#title' => t('Footer Section'),
		'#collapsible' => true,
	);
	$form['footer']['footer_show_copyright'] = array(
	    '#type' => 'checkbox',
	    '#title' => t('Display copyright/logo/text (the copyright div) in footer'),
	    '#default_value' => theme_get_setting('footer_show_copyright')
		//'#description' => t('Display copyright text in footer'),
  	);
	$form['footer']['logo'] = array(
		'#type' => 'fieldset',
		'#title' => t('Footer Logo'),
		'#collapsible' => true,
	);
	$form['footer']['logo']['footer_logo_use'] = array(
 		'#type' => 'checkbox',
	    '#title' => t('Use a footer logo'),
	    '#default_value' => theme_get_setting('footer_logo_use')
	);
  		$form['footer']['logo']['footer_logo_use_default'] = array(
	    '#type' => 'checkbox',
	    '#title' => t('Use the default logo'),
	    '#default_value' => theme_get_setting('footer_logo_use_default')
	);
	$form['footer']['logo']['footer_logo_default_url'] = array(
	    '#type' => 'item',
	    '#title' => t('Default logo'),
	    '#value' =>  ''	//$defaults['footer_logo_default_url']
	);
	$form['footer']['logo']['footer_logo_custom_url'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Path to custom logo'),
	    '#default_value' => theme_get_setting('footer_logo_custom_url'),
   		'#description' => t('Example: /media/images/logos/logo.jpg'),
	);
	$form['footer']['logo']['footer_logo_upload'] = array(
	    '#type' => 'file',
	    '#title' => t('Upload logo image'),
	    '#default_value' => theme_get_setting('footer_logo_upload')
	);
	
	
	$form['footer']['footer_show_copyright_text'] = array(
	    '#type' => 'checkbox',
	    '#title' => t('Display copyright text in footer'),
	    '#default_value' => theme_get_setting('footer_show_copyright_text')
		//'#description' => t('Display copyright text in footer'),
  	);
	$form['footer']['footer_javascriptWarning'] = array(
	    '#type' => 'textarea',
	    '#title' => t('Javascript Warning'),
	    '#default_value' => theme_get_setting('footer_javascriptWarning')
	);
	
	
	
	$form['social'] = array(
		'#type' => 'fieldset',
		'#title' => t('Social Media'),
		'#collapsible' => true,
	);
	$form['social']['social_facebook_url'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Facebook URL'),
	    '#default_value' => theme_get_setting('social_facebook_url'),
   		'#description' =>  '',
	);
	$form['social']['social_twitter_url'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Twitter URL'),
	    '#default_value' => theme_get_setting('social_twitter_url'),
   		'#description' =>  '',
	);
	$form['social']['social_youtube_url'] = array(
	    '#type' => 'textfield',
	    '#title' => t('YouTube URL'),
	    '#default_value' => theme_get_setting('social_youtube_url'),
   		'#description' =>  '',
	);
	
	
  
  	$form['meta'] = array(
		'#type' => 'fieldset',
		'#title' => t('Meta Section'),
		'#collapsible' => true,
	);
	$form['meta']['meta_ie8fix'] = array(
	    '#type' => 'checkbox',
	    '#title' => t('Enable IE8 -> IE7 Compatibility Mode'),
	    '#default_value' => theme_get_setting('meta_ie8fix'),
		'#description' => t('Enable the X-UA-Compatible meta tag'),
  	);
	$form['meta']['meta_description'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Description'),
	    '#default_value' => theme_get_setting('meta_description'),
		'#maxlength' => 256,
  	);
  	$form['meta']['meta_keywords'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Keywords'),
	    '#default_value' => theme_get_setting('meta_keywords'),
	   	'#description' => t('Seperated by comma'),
		'#maxlength' => 256,
  	);
  	$form['meta']['meta_copyright'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Copyright'),
	    '#default_value' => theme_get_setting('meta_copyright'),
	   	'#description' => t('Example: Copyright (c) 2009 COMPANY NAME. All rights reserved.'),
		'#maxlength' => 256,
  	);
	

  
	$form['ga'] = array(
		'#type' => 'fieldset',
		'#title' => t('Google Analytics'),
		'#collapsible' => true,
	);
	
   	$form['ga']['ga_show'] = array(
	    '#type' => 'checkbox',
	    '#title' => t('Enabled'),
	    '#default_value' => theme_get_setting('ga_show')
  	);
   	$form['ga']['ga_id'] = array(
	    '#type' => 'textfield',
	    '#title' => t('ID'),
	    '#default_value' => theme_get_setting('ga_id'),
	   	'#description' => t('Format: UA-12345-6'),
  	);
  	$form['ga']['ga_version'] = array(
	    '#type' => 'radios',
	    '#title' => t('Version'),
	    '#default_value' => theme_get_setting('ga_version'),
	   	'#description' => t('Select the version of GA code to use, new or old.'),
	  	'#options' => array('newer'=>'Newer', 'new' => 'New', 'old' => 'Old'),
  	);
  	
            
  	
	 $form['#submit'][] = 'PJCT_2013_settings_submit';
	 
	 
  // Return the additional form widgets
  return $form;
}



function PJCT_2013_settings_submit($form, &$form_state) {
  $settings = array();
  
  //drupal_set_message(print_r($file,true));
  
  
  if(isset($form['footer']['logo']['footer_logo_upload']['#default_value']) && $form['footer']['logo']['footer_logo_upload']['#default_value'] != ''){
 	$previous = 'public://' . $form['footer']['logo']['footer_logo_upload']['#default_value'];
  }else{
  	$previous = null;
  }
  
   $file = file_save_upload('footer_logo_upload');
   
  if ($file) {
    $parts = pathinfo($file->filename);
    $destination = 'public://' . $parts['basename'];
    $file->status = FILE_STATUS_PERMANENT;
    
    //drupal_set_message(print_r($file,true));
   
    if(file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
		$_POST['footer_logo_custom_url'] = $form_state['values']['footer_logo_custom_url'] =  '/' . variable_get('file_public_path', conf_path() . '/files')  .  '/' . file_uri_target($destination);
		$_POST['footer_logo_use_default'] = $form_state['values']['footer_logo_use_default'] = false;
		
		
      //$_POST['footer_logo_upload'] = $form_state['values']['footer_logo_upload'] = $destination;
      // If new file has a different name than the old one, delete the old
      if($previous && $destination != $previous && file_exists($previous)) {
        drupal_unlink($previous);
      }
    }
  } else {
    // Avoid error when the form is submitted without specifying a new image
    //$_POST['footer_logo_custom_url'] = $form_state['values']['footer_logo_custom_url'] = $previous;
  }
}

?>
