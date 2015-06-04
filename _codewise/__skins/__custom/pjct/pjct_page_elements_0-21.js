

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Codewise Presentation Manager - Page Elements Script File,
	Peter Julian, Campaign Tool

Copyright (c) 2004-2013 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Created: 2013-08-16

Revision History:
  0.01	- Initial version. TB, 2013-08-16, ??:??

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Variable declaration */

var e = (evt) ? evt : (window.event) ? window.event : '';

if ((dM) || (window.name == (skinPreference + 'NonFlash'))) {
	FlashPlayerVersionRequired += 10;
};

if (URLProtocol == 'file:') {
	fDPOFL = '';
};

if (isRemotePage) {
	fDPOFL = webServerName;
};

if (is_ipad) {
	isMobileVersion = 0;
};

if (pageType == '') {
	// ?
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
jQuery stuff */

// Exists
$.fn.exists = function() { return (this.length > 0); };

// Has attribute
$.fn.hasAttr = function(attrName) { return (this.attr(attrName) !== undefined); };

// Easy Slider
$.fn.easySlider = function() {};

// Superfish
$.fn.superfish = function() {};

// LiveQuery
$.fn.livequery = function() {};

// Load external script file
CSI_appendScript('src=' + fDPO + mFPO + '_misc\/jquery_extensions.js', 'type=text\/javascript');

// Making document.write safe for use with jQuery's $(document).ready()...
var documentWriteString = '';
$(function() {
	document.write = function(htmlString) {
		documentWriteString = htmlString;
	};

	$('body').append(documentWriteString);
});


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Language preference stuff */

if ($('html').attr('xml:lang')) {
	languagePreference = $('html').attr('xml:lang');

	if ((URLProtocol == 'file:') && (URL.indexOf('_test_page_v2') != -1)) {
//		languagePreference = 'fr';
	};
};
if (languagePreference == 'fr') {
	ui_linkOpensInANewWindow = ui_linkOpensInANewWindow_fr;
	ui_clickToPlayVideo = ui_clickToPlayVideo_fr;
	ui_nextText = ui_nextText_fr;
	ui_prevText = ui_prevText_fr;
	ui_swipeToScroll1Finger = ui_swipeToScroll1Finger_fr;
	ui_swipeToScroll2Fingers = ui_swipeToScroll2Fingers_fr;
	ui_searchFieldWarningText = ui_searchFieldWarningText_fr;
	ui_takeAction = ui_takeAction_fr;
	ui_takeActionFormNameFieldWarningText = ui_takeActionFormNameFieldWarningText_fr;
	ui_takeActionFormFirstNameFieldWarningText = ui_takeActionFormFirstNameFieldWarningText_fr;
	ui_takeActionFormLastNameFieldWarningText = ui_takeActionFormLastNameFieldWarningText_fr;
	ui_takeActionFormEmailFieldWarningText = ui_takeActionFormEmailFieldWarningText_fr;
	ui_takeActionFormPostalFieldWarningText = ui_takeActionFormPostalFieldWarningText_fr;
	ui_takeActionFormWarningText = ui_takeActionFormWarningText_fr;
	ui_changeFontSizeText = ui_changeFontSizeText_fr;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Internal style sheet */

// IE 8 and under
if (is_ie && (!is_ie9up)) {
	if (URLProtocol == 'file:') {
		// For some reason this errors out in IE8... sigh...
		iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.eot); }'; // format("embedded-opentype")

		iSSHTML += ' h1, h2, h3, h4, h5, h6 { font-family: "Pathway Gothic One", "Courier New", sans-serif; }';
	} else {
		iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.eot?iefix) format("embedded-opentype"); }';

		iSSHTML += ' h1, h2, h3, h4, h5, h6 { font-family: "Pathway Gothic One", "Courier New", sans-serif; }';
	};
// Everything else
} else {
	if (is_android) {
		iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.ttf) format("truetype"); }';

	} else if (is_blackberry) {
		iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.svg) format("svg"); }';

	} else {
		iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.eot?iefix) format("embedded-opentype"); src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One\/Pathway_Gothic_One_400.woff) format("woff"); }';
	};
};

iSSHTML += ' span.icon, div.ExpandOMatic span.ExpandOMaticGraphic, a.tooltipIcon, div.sliderNavPanelButtons div.sliderNavPanelButtonsInner button, form#search-block-form input.form-submit, li.primaryNav.menuParent a.primaryNav, span.sf-sub-indicator, div.logoCarouselNavPrev div.logoCarouselNavPrevIcon, div.logoCarouselNavNext div.logoCarouselNavNextIcon { background-image: url(' + fDPO + mFPO + 'media\/images\/icons\/_icon_sprite_01.png); }';

iSSHTML += ' .highslide-loading { background-image: url(' + fDPO + mFPO + '_highslide\/graphics\/loader-white.gif) !important; }';
iSSHTML += ' .closebutton { background-image: url(' + fDPO + mFPO + '_highslide\/graphics\/close_charcoal.png) !important; }';
iSSHTML += ' .closebutton { background-image: url(' + fDPO + mFPO + '_highslide\/graphics\/close_orangish.png) !important; }';
iSSHTML += ' .closebutton:hover { background-image: url(' + fDPO + mFPO + '_highslide\/graphics\/close_charcoal.png) !important; }';
iSSHTML += ' .highslide-controls, .highslide-controls ul, .highslide-controls a { background-image: url(' + fDPO + mFPO + '_highslide\/graphics\/controlbar-greenish.gif) !important; }';

iSSHTML += ' #takeActionHeader { background-image: url(' + fDPO + mFPO + 'media\/images\/logos\/ndp_logo_00_trans.png); }';
iSSHTML += ' #headerContainerOuter, #primaryNavContainer, #bannerContainerOuter, #bannerContainer #bannerTabs div.bannerTabLinkContainer a { background-image: url(' + fDPO + mFPO + 'media\/images\/_gui_sprite_03.jpg); }'; // #footerContainerOuter
iSSHTML += ' #primaryNavContainerInner { background-image: url(' + fDPO + mFPO + 'media\/images\/logos\/ndp_logo_00_trans.png); }';
iSSHTML += ' #primaryNav li ul.secondaryNav { background-image: url(' + fDPO + mFPO + 'media\/images\/_secondary_nav_bg_01.png); }';
iSSHTML += ' #bannerContainer div.slidesOuter { background-image: url(' + fDPO + mFPO + 'media\/images\/icons\/loading_01.gif); }';
iSSHTML += ' #bannerRightColumn { background-image: url(' + fDPO + mFPO + 'media\/images\/_pj_headshot_03.png); }';
iSSHTML += ' div.logoCarouselNavNext { background-image: url(' + fDPO + mFPO + 'media\/images\/_carousel_nav_bg_02.png); }';
// iSSHTML += ' #footerContainerOuter { background-image: url(' + fDPO + mFPO + 'media\/images\/_federal_ndp_site_bg_01.jpg); }';

// Opacity/page animation styles
// iSSHTML += ' #logo, #contentContainer { visibility: hidden; }';
// iSSHTML += ' #logo { opacity: 0; }';
// iSSHTML += ' #contentContainer { opacity: 1; }';

// Language-based
if (languagePreference == 'fr') {
	iSSHTML += ' #takeActionHeader { background-image: url(' + fDPO + mFPO + 'media\/images\/logos\/ndp_logo_00_trans_' + languagePreference + '.png); }';
	//iSSHTML += ' #logoContainer a { position: relative; top: -11px; }';
	//iSSHTML += ' #logoContainer span { position: relative; height: 54px; top: 11px; }';
	iSSHTML += ' #primaryNavContainerInner { background-image: url(' + fDPO + mFPO + 'media\/images\/logos\/ndp_logo_00_trans_' + languagePreference + '.png); }';
};

// Browser-specific styles
if (is_ie) {
	// iSSHTML += ' ? { filter: alpha(opacity=0); }';
	// iSSHTML += ' ? { behavior: url(' + fDPO + mFPO + '_misc\/PIE_v5.htc); }';

	// All versions of IE
	iSSHTML += ' hr { clear: both; width: 100%; margin: 5px 0px 15px 0px; }';
	iSSHTML += ' button, input[type=button], input[type=reset], input[type=submit] { padding: 0px 6px 0px 6px; }';

	iSSHTML += ' #documentFontSizer { padding: 3px 5px 2px 5px; }';

	iSSHTML += ' #primaryNav li ul { vertical-align: bottom; }'; // Is this even necessary for this skin? If so, can it be safely be moved to the main CSS file?

	iSSHTML += ' #bannerContainer #bannerTabs div.bannerTabLinkContainer a { display: block; }'; // Because IE sucks, and can't get the vertical alignment right if these are displayed as table-cells

	// IE9 and higher
	if (is_ie9up) {
		if (is_ie9) {
			// Fix for embedding @font-faces locally for IE9
			if (URLProtocol == 'file:') {
				iSSHTML += ' @font-face { font-family: "Pathway Gothic One"; src: url(' + fDPO + mFPO + 'media\/fonts\/Pathway_Gothic_One_400.eot?iefix) format("embedded-opentype"); }';
			};
		};

		// iSSHTML += ' acronym, button, blockquote, input, li, ol, option, p, select, textarea, th, td, ul { font-size: 12px; }'; // MAY be necessary depending on the font family, e.g. for Open Sans
	};

	// IE9 and lower
	if (!is_ie10up) {
		iSSHTML += ' .greyGradient { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#f8f8f8\', EndColorStr=\'#e8e8e8\')"; }'; /* IE9 & IE8 MUST have double quotes here */
		iSSHTML += ' .greyGradientInverted { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#e8e8e8\', EndColorStr=\'#f8f8f8\')"; }';
		iSSHTML += ' #takeActionRightColumn input[type="submit"] { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#95c00f\', EndColorStr=\'#79a814\')"; }';
		iSSHTML += ' a.styled, a.styled:visited, button.styled, input[type=button].styled, input[type=reset].styled, input[type=submit].styled { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#fefefe\', EndColorStr=\'#cecece\')"; }';
		// iSSHTML += ' div.styled.styledGrey { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#efefef\', EndColorStr=\'#d8d8d8\')"; }';

		iSSHTML += ' #takeActionRightColumn input[type="submit"] { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#95c00f\', EndColorStr=\'#79a814\')"; }';

		iSSHTML += ' #footerContent div.subColumn3.subColumnLast { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#222222\', EndColorStr=\'#141414\')"; }';

		iSSHTML += ' .view-event_list div.viewRow div.viewDateLegend { font-size: 12px; }';
		iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledOrange { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#f5e6ab\', EndColorStr=\'#deb67a\')"; }';
		iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledGreen { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#d9e8a2\', EndColorStr=\'#bbd581\')"; }';
		iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledPurple { -ms-filter: "progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#e1c4ed\', EndColorStr=\'#d3abe5\')"; }';

		// IE8 and lower
		if (!is_ie9up) {
			// iSSHTML += ' a.primaryNav, a.primaryNav:link, a.primaryNav:active, a.primaryNav:hover, a.primaryNav:visited, a.primaryNavOn, a.primaryNavOn:link, a.primaryNavOn:active, a.primaryNavOn:hover, a.primaryNavOn:visited { background: #aaaaaa; }'; // Without sufficient contrast with the background -- or a specific bg color definition such as this -- IE8 decrodes the link text... sigh...

			// iSSHTML += ' #bannerNavPanelButtons #bannerNavPanelButtonsInner button { height: 12px; }'; // Needed in various places, when height has been set to 0px and padding top has been set to what the height "should" be... typically when a bg image is used to replace "text"

			iSSHTML += ' form#search-block-form div.form-item input#search-block-form, form#search-block-form div.form-item input#search-block-form-1, form#search-block-form div.form-item input#edit-search-block-form, form#search-block-form div.form-item input#edit-search-block-form-1, form#search-block-form div.form-item input#edit-search-block-form--2 { padding-top: 6px; padding-bottom: 0px; }';

			// IE8 only
			if (is_ie8) { // Or, should this be is_ie8up?!?
				iSSHTML += ' .highslide-container table { z-index: 1000 !important; }';
			};

			// IE7 and lower
			if (!is_ie8up) {
				iSSHTML += ' img { -ms-interpolation-mode: bicubic; }';

				// iSSHTML += ' body, acronym, button, blockquote, input, li, ol, option, p, select, textarea, th, td, ul { font-family: Arial, sans-serif; }'; // MAY be needed to "remove" a custom web font from body content (other than headings), e.g. for something too lightweight, like Open Sans
				// iSSHTML += ' h2, h3, h4 { font-weight: bold; }';

				iSSHTML += ' ol.flushLeft, ul.flushLeft { margin-left: 0px; }';

				iSSHTML += ' div.tabbed ul.tabbedLinks li.activated a { position: relative; top: 1px; }';

				iSSHTML += ' div.sliderNavPanelButtons div.sliderNavPanelButtonsInner button { height: 20px; }';

				iSSHTML += ' .view-event_list div.viewRow + div.viewRow { padding-top: 6px; }';
				// iSSHTML += ' .latestNews.view-event_list div.viewRow div.viewDateWrapper { margin-bottom: 0px; }';
				iSSHTML += ' .view-event_list div.viewRow div.viewDateLegend div.viewDateWrapper { display: inline-block; float: left; width: 140px; }';
				iSSHTML += ' .view-event_list div.viewRow div.viewDateWrapper div.viewDate { display: inline-block; }';

				iSSHTML += ' #bannerRightColumn { float: right; margin-left: 12px; }'; //  margin-left: -158px;
				iSSHTML += ' #bannerContainer { float: left; }';
				iSSHTML += ' #bannerContainer #bannerTabs div.bannerTabLinkContainer a, #bannerContainer #bannerTabs div.bannerTabLinkContainer a:visited { display: block; }';

				iSSHTML += ' .greyGradient { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#fff8f8f8\', EndColorStr=\'#ffe8e8e8\'); }'; /* IE7 CAN'T have double quotes here, needs a leading "ff" for the alpha value, and shouldn't have the "-ms-" prefix */
				iSSHTML += ' .greyGradientInverted { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ffe8e8e8\', EndColorStr=\'#fff8f8f8\'); }';
				iSSHTML += ' #takeActionRightColumn input[type="submit"] { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ff95c00f\', EndColorStr=\'#ff79a814\'); }';
				iSSHTML += ' a.styled, a.styled:visited, button.styled, input[type=button].styled, input[type=reset].styled, input[type=submit].styled { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#fffefefe\', EndColorStr=\'#ffcecece\'); }';
				// iSSHTML += ' div.styled.styledGrey { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ffefefef\', EndColorStr=\'#ffd8d8d8\'); }';
				iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledOrange { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#fff5e6ab\', EndColorStr=\'#ffdeb67a\'); }';
				iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledGreen { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ffd9e8a2\', EndColorStr=\'#ffbbd581\'); }';
				iSSHTML += ' .view-event_list div.viewRow span.viewDateWrapper span.viewDate.styledPurple { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ffe1c4ed\', EndColorStr=\'#ffd3abe5\'); }';
				iSSHTML += ' #takeActionRightColumn input[type="submit"] { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ff95c00f\', EndColorStr=\'#ff79a814\'); }';
				iSSHTML += ' #footerContent div.subColumn3.subColumnLast { filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr=\'#ff222222\', EndColorStr=\'#ff141414\'); }';

				iSSHTML += ' #utilityNavContainer { margin-top: -68px; }'; // The height of the logo container
				// iSSHTML += ' form#search-block-form div.form-item input#search-block-form, form#search-block-form div.form-item input#search-block-form-1, form#search-block-form div.form-item input#edit-search-block-form, form#search-block-form div.form-item input#edit-search-block-form-1, form#search-block-form div.form-item input#edit-search-block-form--2 { padding-bottom: 1px; }';
				iSSHTML += ' form#search-block-form input.form-text { } form#search-block-form input.form-submit { height: 28px; }';

				iSSHTML += ' #utilityNavContainer { overflow: hidden; }';

				iSSHTML += ' #primaryNav { overflow: hidden !important; }';
				// iSSHTML += ' #primaryNav li ul li ul, #primaryNav li ul li ul li ul { left: 192px; }';
				// iSSHTML += ' a.primaryNav span.sf-sub-indicator { float: none; }';
				// iSSHTML += ' a.secondaryNav span.sf-sub-indicator, a.thirdLevelNav span.sf-sub-indicator { margin-top: -20px; }';

				iSSHTML += ' #footerContainerOuter #footerContainerInner #copyright span#footerUtilityNavWrapper, #footerContainerOuter #footerContainerInner #copyright span#footerUtilityNavWrapper ul { display: inline !important; }';
			};

			// IE6 and lower
			if (!is_ie7up) {
				iSSHTML += ' div.closebutton { background-image: none !important; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' + fDPO + mFPO + '_highslide\/graphics\/close_bluish.png, sizingMethod=scale); }';

				iSSHTML += ' #primaryNavContainer { overflow: hidden; }';
				// iSSHTML += ' a.primaryNav, a.primaryNav:link, a.primaryNav:active, a.primaryNav:hover, a.primaryNav:visited, a.primaryNavOn, a.primaryNavOn:link, a.primaryNavOn:active, a.primaryNavOn:hover, a.primaryNavOn:visited { display: inline-block; }'; // May be necessary... but why, again...?!?

				iSSHTML += ' #footerNav div { margin: 0px 0px 0px 20px; } #footerNav div.first { margin-left: 0px; }';
			};
		};
	};

	// IE7 and higher
	if (is_ie7up) {
		// iSSHTML += ' img { -ms-interpolation-mode: bicubic; }';
	};
};

if (!is_safari5r1) {
	// iSSHTML += ' option, select { font-family: "Pathway Gothic One", Arial, sans-serif; color: #5f5f5f; }'; // For use IF loading web fonts which NEED TO BE excluded from select tags (and possibly option tags too)
};

if (is_webkit) {
	iSSHTML += ' button, input[type=button], input[type=reset], input[type=submit] { padding: 3px 6px 3px 6px; }';
	iSSHTML += ' input[type=button], input[type=reset], input[type=submit] { -webkit-appearance: button; }';
	iSSHTML += ' select, option { -webkit-appearance: menulist-button; border-color: #959595; }'; // border-radius: 0px; -webkit-border-radius: 0px;

	iSSHTML += ' ul.tabs.primary li a { padding: 6px 10px 7px 10px; }';

	iSSHTML += ' #bannerContainer #bannerTabs div.bannerTabLinkContainer a.clipped { height: 48px; padding-top: 3px; }';

	if (is_mac_osx_lion) {
		// iSSHTML += ' html, body { width: 100%; height: 100%; }'; // Optional fix for OSX's new "bounce scrolling"... which doesn't seem to work... sigh...
	};

	if (is_chrome) {
		// ?
	};

	if (is_safari) {
		iSSHTML += ' strong, b, em, i { font-family: sans-serif; font-size: 100%; }'; // "Solves" issue where Safari isn't rendering bold -- and presumably italicized -- text with the Open Sans font we've been using

		if (!is_ipad) {
//			iSSHTML += ' #bannerContainer #bannerTabs div.bannerTabLinkContainer + div.bannerTabLinkContainer { margin-top: 2px; }'; // Is this needed on the live site but not my local dev copy?!?
		};
	};
};
if (is_ipod || is_iphone || is_ipad || is_safari_mobile) {
	iSSHTML += ' input[type="text"], input[type="password"], input.textField, textarea { background-image: url(' + fDPO + mFPO + 'media\/images\/blank\/blank_transparent.gif); }'; // cursor: pointer !important; 

	if (is_ipad) {
		iSSHTML += ' form#search-block-form input.form-text, form#search-block-form input.form-submit { -webkit-appearance: none; -webkit-border-radius: 0px; border-radius: 0px; }';
	};
};

if (is_opera) {
	// ?
};

if ((is_nav) || (is_mozilla)) {
	// ?
};

if (is_firefox) {
	iSSHTML += ' ::-moz-selection { background: #b3d4fc; text-shadow: none; }';

	iSSHTML += ' button::-moz-focus-inner, input[type="button"]::-moz-focus-inner, input[type="reset"]::-moz-focus-inner, input[type="submit"]::-moz-focus-inner { border: none; }';

	iSSHTML += ' .highslide-html div { overflow: hidden !important; }'; // Fixes what, exactly?

	iSSHTML += ' #footerUtilityNav { vertical-align: -25%; }';
};

// Case-specific styles
if (logoCarouselAutomatic) {
	// iSSHTML += ' div.logoCarouselNavPrev div.logoCarouselNavPrevIcon, div.logoCarouselNavNext div.logoCarouselNavNextIcon { visibility: hidden; }';
} else {
	// iSSHTML += ' #logoCarouselOute, #logoCarouselNav { width: 988px; }';
};

// Mobile version styles
if (isMobileVersion) {
	if (URLProtocol == 'file:') {
		iSSHTML += ' body.mobileVersion { width: 320px; border-right: 1px dashed red; }';
		iSSHTML += ' body.mobileVersion.landscape { width: 480px; }';
		iSSHTML += ' #takeActionContainer { max-width: 320px; }';
		iSSHTML += ' body.mobileVersion #takeActionContainer { width: 480px; }';
	};
};

// Embed CSS
wCSSFL('layout', 1); // writeCSSFileLink(CSSFileType)
wCSSFL('mobile', 1); // writeCSSFileLink(CSSFileType)
wCSSFL('print', 1); // writeCSSFileLink(CSSFileType)
wCSSFL('internal', 1); // writeCSSFileLink(CSSFileType)


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Font size */

function PJCT_cDFS() { // changeDocumentFontSize
	for (var loopCounter_documentFontSizes = 0; loopCounter_documentFontSizes < documentFontSizes.length; loopCounter_documentFontSizes++) {
		$_body.removeClass(documentFontSizes[loopCounter_documentFontSizes]);
	};

	if (documentFontSizesIndex == (documentFontSizes.length - 1)) {
		documentFontSizesIndex = 0;
	} else {
		documentFontSizesIndex = (documentFontSizesIndex - 0) + 1;
	};

	storeIntelligentCookie('documentFontSize',documentFontSizesIndex,nextYear,'\/',masterCookieDomain);

	$_body.addClass(documentFontSizes[documentFontSizesIndex]);

	return false;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Image functions/preloading */

var videoPlayIcon = new Image();

if (document.images) {
	videoPlayIcon.src = fDPO + mFPO + 'media\/images\/icons\/video_play_icon_off.png';
};

// var preloadImage_vision = new Image();
function iPL() { // imagePreLoading
	/* 
	if (is_ie && (!is_ie7up)) { // Preload IE6-specific imagery
		preloadImage_vision.src = fDPO + mFPO + 'media\/images\/vision_bg_ie6.png';
	} else {
		preloadImage_vision.src = fDPO + mFPO + 'media\/images\/vision_bg.png';
	};
	*/
};

// Image swap with cross-fade transition
function PJCT_imageSwap(imageId, imageToSwapIn) {
	if ($('img#' + imageId).exists()) {
		$_imageId = $('img#' + imageId);
		// $_imageContainer = $('#' + imageId + 'Container');
		$_imageContainer = $_imageId.parent();

		// If it's IE
		if ($_imageId[0].filters) {
			imageObj = document.getElementById(imageId);

			imageObj.style.filter = 'blendTrans(duration=1)';
			imageObj.filters.blendTrans(duration=1.0).Apply();
			imageObj.filters.blendTrans.Play();

			imageObj.src = imageToSwapIn;

		// If it's not IE
		} else {
			$_imageId.css({
				'opacity': 1
			});

			$_imageContainer.css({
				'background': 'no-repeat center center url(' + imageToSwapIn + ')'
			});

			$_imageId.animate({
				'opacity': 0
			}, 1000, function() {
				$_imageId.attr('src', imageToSwapIn)
			});
		};
	};

	// return false;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Misc functions */

// Scroll to position
function PJCT_sTP(scrollToPoint, scrollDuration, scrollCallback) {
	if (!scrollDuration) {
		scrollDuration = 400;
	};

	if (is_webkit) {
		scrollPageBodySelectorText = 'body';
	};

	$(scrollPageBodySelectorText, top.document).stop().animate({
		scrollTop: scrollToPoint
	}, scrollDuration, function() {
		if (scrollCallback) {
			if (typeof scrollCallback == 'function') {
				scrollCallback();
			};
		};
	});
};

// Scroll to top of the page
function PJCT_sTTOTP() {
	PJCT_sTP(0, 200);
};

// Scroll to menu top
function PJCT_sTMT() {
	if (isMobileVersion && (URLProtocol != 'file:')) {
		PJCT_sTP(Math.ceil($_primaryNav.position().top), 200);
	};
};

// Disable/enable back to top link
function PJCT_sHBTTL() {
	setTimeout(function() {
		if ($(document).height() > $(window).height()) {
			$('li#backToTopLinkContainer a').removeClass('disabled');
		} else {
			$('li#backToTopLinkContainer a').addClass('disabled');
		};
	}, 1000);
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Highslide stuff */

// Load Highslide library
function PJCT_pI_lH() {
	wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + mFPO + '_highslide\/highslide-full.min' + embedScriptTag03HTML + embedScriptTag04HTML);
	wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="scr' + 'een" href="' + fDPO + mFPO + '_highslide\/highslide.css" \/>');
};
PJCT_pI_lH();

var hideHighslideControlsOnMouseOut = true;
	if (is_iphone || is_ipod || is_ipad || is_safari_mobile) {
		hideHighslideControlsOnMouseOut = false;
	};

// Close Highslide content function
function PJCT_closeHighslideContent(objectHandler) {
	return hs.close(objectHandler);
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Navigation functions */

/*
* MenuReworker is a class that takes menu data from the server and 
* converts it to html structures. It then replaces menus in the document.
*
* Usage:
* MenuReworker.initJson(jsonData); will initialize the object and do the work
* of converting JSON data to html structures.
*
* MenuReworker.reworkMenu("menu id"); will update an existing menu with the 
* new html structure for that menu.
*/

var MenuReworker = function() {
	var menus = [];

	// General functions
	/*
	* this function takes link text and formats it based on the rules below.
	*/
	function formatLink(linkText) {
		var formatted_link = '';

		if ((linkText.substring(0, 4) == 'http') || 
				(linkText.substring(0, 5) == 'https') || 
				(linkText.substring(0, 3) == 'ftp') || 
				(linkText.substring(0, 10) == 'javascript') || 
				(linkText.substring(0, 3) == 'tel') || 
				(linkText.substring(0, 6) == 'mailto') || 
				(linkText.substring(0, 1) == '#')) {
			formatted_link = linkText;
		} else {
			if (isRemotePage) {
				// if (linkText.substring(0, 1) == '\/') {
				//	formatted_link = liveServerName + linkText;
				// } else {
					formatted_link = fDPOFL + linkText;
				// };

			} else if (linkText == '') { 
				formatted_link = '\/';

			} else if (linkText.substring(0, 1) == '\/') {
				formatted_link = linkText;

			} else {
				formatted_link = fDPOFL + linkText;
			};
		};

		return formatted_link;
	};

	/*
	* for each instance of the word "Link" in the aggregated ID, remove it
	*/
	function removeWordLinkFromId(aggregatedId) {
		var contextual_id = aggregatedId;

		while (contextual_id.indexOf("Link") !== -1) {
			contextual_id = contextual_id.replace('Link', '');
		};

		return contextual_id;
	};

	/*
	* extra parameters can be supplied in the json.
	* for class parameters, pass the class
	* otherwise loop through the parameters and do a name value pairing in the
	* string as would be expected in html
	*/
	function formatExtraParametersJson(item) {
		var extra_class = '';
		var extra_params = '';
		var src_attribute = '';

		if (item.extra_parameters) {
			if (item.extra_parameters['class']) {
				extra_class = ' ' + item.extra_parameters['class'];
			};

			if (item.extra_parameters['src']) {
				src_attribute = ' ' + formatLink(item.extra_parameters['src']);
			};

			for (var p in item.extra_parameters) {
				if ((p !== 'class') && (p !== 'href') && (p !== 'src')) {
					extra_params += ' ' + p + '="' + item.extra_parameters[p].replace("'","\'").replace('"','\"') + '"';
				};
			};
		};

		return [extra_class, extra_params, src_attribute];
	};

	// General functions end

	// JSON parsing functions
	/*
	* for each menu in the json data, generate the menu in HTML format
	*/
	function parseMenusJson(jsonData, ignoreAfterDepth) {
		for (var menu in jsonData) {
			menus[jsonData[menu].id.split(',')[0]] = parseMenuJson(jsonData[menu], jsonData[menu], 0, 0, '', ignoreAfterDepth);
		};
	};

	/*
	* This is where all the magic happens.	This function recursively generates
	* HTML for the menu from the json.
	*
	* Parameters:
	* object - is the current item in the menu
	* topLevelObject - is the top level menu object from parseMenusJson, it gets	 
	*	 passed all the way down the tree because we need to extract the id for 
	*	 the level from "id" attribute of the object
	* depth is the levels deep we are in the tree
	* count is the level we are at in the current branch
	* aggregatedId is the id that gets added to as we go down the tree
	* ignoreAfterDepth will force the parser to stop at a certain depth in the 
	* tree 
	*/
	function parseMenuJson(object, topLevelObject, depth, count, aggregatedId, ignoreAfterDepth) {
		var menu_html = '';
		var item_id = topLevelObject['id'].split(',')[depth]; // This is the id for the level we are at
		if (depth != 0) { // Don't add the ul for the first level as it is already in the document
			menu_html += '<ul class="' + item_id + '" id="' + removeWordLinkFromId(aggregatedId) + item_id + count + '">';
		};
		var item_count = 0;
		for (var item in object) {
			// if (item !== 'id') {
			if ((item !== 'id') && (item !== 'title')) {
				item_count++;
				var fep = formatExtraParametersJson(object[item]);
				var built_id = aggregatedId + item_id + 'Link' + item_count;

				menu_html += '<li class="' + item_id + '"';
				menu_html += ' id="' + built_id + 'Container"';
				menu_html += '><a href="' + formatLink(object[item].link) + '" class="' + item_id + fep[0] + '"';
				menu_html += ' id="' + built_id + '"';
				menu_html += fep[1] + '>';
				if (fep[2].length > 0) {
					menu_html += '<img alt=" ' + object[item].caption + ' " src="' + fep[2] + '" \/>';
				} else {
					menu_html += object[item].caption;
				};
				menu_html += '<\/a>'; 
				if (object[item].children && ignoreAfterDepth > (depth + 1)) {
					menu_html += parseMenuJson(object[item].children, topLevelObject, depth + 1, item_count, built_id, ignoreAfterDepth );
				};
				menu_html += '<\/li>';
			};
		};

		if (depth != 0) { // Don't add the ul for the first level as it is already in the document
			menu_html += '<\/ul>';
		};

		return menu_html;
	};
	// JSON parsing functions end

	// XML parsing functions
	function parseMenusXml(xmlData) {

	};

	function parseMenuXml(depth) {

	};
	// XML parsing functions end

	return {
		initJson: function(jsonData, ignoreAfterDepth) {
			if (ignoreAfterDepth == null) {
				ignoreAfterDepth = 99999999; // Set it to something outrageous by default
			};

			if (jsonData) {
				var menu_object = eval(jsonData);
				parseMenusJson(menu_object, ignoreAfterDepth);
			};
		},
		initXml: function(xmlData) {
			 parseMenusXml(xmlData);
		},
		reworkMenu: function(menuName, callBack) {
			if (document.getElementById(menuName) && menus[menuName]) {
				document.getElementById(menuName).innerHTML = menus[menuName];
				if (typeof callBack == 'function') {
					callBack();
				};
			};
		}
	};
}();

function getMenuJson() {
	// if (skinSwitcherEnabled || ((URLProtocol.indexOf('file') != -1) && (fN.indexOf('test_page') != -1)) || ((location.hostname + ':' + URLPort) == 'localhost:8888') || (dM)) {
	if (skinSwitcherEnabled || dM || (fN.indexOf('test_page') != -1) || ((location.hostname + ':' + URLPort) == 'localhost:8888')) {
		// For testing locally...
		CSI_appendScript('src=' + fDPO + mFPO + '_menu.json', 'type=text\/javascript', 'onload=PJCT_pI_sLM(1)');

	} else {
		// On the live site...
		CSI_appendScript('src=' + fDPO + '_menu.php?JS[equals]1', 'type=text\/javascript', 'onload=PJCT_pI_sLM(1)');
	};
};

function menuDataCallback(jsonData) {
	MenuReworker.initJson(jsonData, 4);
};

// Initialize the menus
var menuLoader = '';
var menuDataLoadCount = 0;
var menuDataLoadLimit = 5;
function PJCT_pI_mI() {
	if (menuDataLoadCount < menuDataLoadLimit) {
		if (menuLoader != '') {
			getMenuJson();
		};
	} else {
		// Stop trying to load the JSON menu data
		PJCT_pI_sLM(0);
	};

	menuDataLoadCount++;
};

function PJCT_pI_sLM(menuDataLoadSuccess) { // Stop trying to load the JSON menu data
	clearInterval(menuLoader);
	// menuLoader = '';
	// menuDataLoadCount = menuDataLoadLimit;

	if (menuDataLoadSuccess) {
		// alert('The menu data successfully loaded after ' + menuDataLoadCount + ' attempts...');

		// Load the primary nav
		MenuReworker.reworkMenu('primaryNav', PJCT_pI_rNF2);

	} else {
		// alert('The menu data failed to load after ' + menuDataLoadCount + ' attempts...');
	};

	// Restyle the nav
	PJCT_pI_rNF();

	// Overwrite this function
	PJCT_pI_sLM = function() {};
};

// Restyle navigation functions
function PJCT_pI_rNF() {
	// alert('Run all the functions required for restyling the navigation...');
	// gCOT();

	// Reclass menu items
	PJCT_pI_rMI();

	// Highlight navigational items
	PJCT_pI_hN();

	// Show primary nav items
	PJCT_pI_sPNI();

	// Reposition secondary nav containers
	PJCT_pI_rSNC();
};

// Restyle navigation functions, pt. 2
function PJCT_pI_rNF2() {
	if (!(is_ie && !is_ie7up)) {
		jQuery(function(){ jQuery('#primaryNav').superfish(); });
	};
};

// Reclass menu items
function PJCT_pI_rMI() {
	// First utility nav menu items
	$('> li:first', $('#utilityNav')).addClass('first');

	// Last utility nav menu items
	$('> li:last', $('#utilityNav')).addClass('last');

	// First primary nav menu item
	$('a.primaryNav:first').addClass('first');

	// Last primary nav menu item
	$('a.primaryNav:last').addClass('last');

	// First secondary nav menu items
	$('> li:first', $('ul.secondaryNav')).addClass('first');

	// Last secondary nav menu items
	$('> li:last', $('ul.secondaryNav')).addClass('last');

	// First third level nav menu items
	$('> li:first', $('ul.thirdLevelNav')).addClass('first');

	// Last third level nav menu items
	$('> li:last', $('ul.thirdLevelNav')).addClass('last');
};

// Reposition secondary nav containers
function PJCT_pI_rSNC() {
	var zIndexForIE7 = 1000;

	$('#primaryNav li.menuParent ul li.menuParent').hover( function(loopCounter_menuParentListItems) {
		thisMenuLeftOffset = Math.ceil($(this).closest('ul').offset().left);
		if (is_ie && !is_ie8up) {
			// thisMenuLeftOffset += 0;
		};

		if ((thisMenuLeftOffset + ($(this).width() * 2)) > $(document).width()) {
			$('ul', $(this)).css({
				'margin-left': ($(this).width() * -2)
			});
		};

	}, function() {
		
	}).each( function() {
		if (is_ie && !is_ie8up) {
			$(this).css({
				'z-index': zIndexForIE7
			});
			zIndexForIE7 -= 10;
		};
	});

	$('ul.secondaryNav').each( function() {
		if (is_ie && !is_ie8up) {
			// if ($(this).parent().hasClass('primaryNavOn)) {
				$(this).css({
					'margin-left': (($(this).parent().width() + 0) * -1)
					// 'margin-left': (($(this).parent().width() + 1) * -1)
				});
			/* } else {
				$(this).css({
					'margin-left': (($(this).parent().width() + 0) * -1)
					// 'margin-left': (($(this).parent().width() + 1) * -1)
				});
			}; */
		};

		$(this).css({
			'background-position': ($(this).closest('li').outerWidth() - 2) + 'px 0px'
		}); //.attr('title', ($(this).closest('li').outerWidth() - 1));

	}).hover( function() {
		
	}, function() {
		
	});
};

// Highlight a particular navigational item
function PJCT_pI_hNI(linkIdToHighlight, disableLinkSwitch) { // highlightNavItem(linkToHightlight, disableLinkSwitch)
	$('a').each( function() {
		if ($(this).attr('id') == linkIdToHighlight) {
			if ($(this).hasClass('primaryNav')) {
				if (disableLinkSwitch) {
					$(this)
						.addClass('primaryNavOn')
						.closest('li.primaryNav').addClass('primaryNavOn');

					primaryNavItemToHighlight = $(this).attr('id');

				} else {
					if (!$(this).hasClass('primaryNavOn')) {
						$(this)
							.addClass('primaryNavHighlighted')
							.closest('li.primaryNav').addClass('primaryNavHighlighted');
					};
				};

			} else if ($(this).hasClass('secondaryNav')) {
				if (disableLinkSwitch) {
					$(this)
						.addClass('secondaryNavOn')
						.closest('li.secondaryNav').addClass('secondaryNavOn');

					secondaryNavItemToHighlight = $(this).attr('id');

					primaryNavItemToHighlight = $('> a', $(this).closest('li.primaryNav')).attr('id');

				} else {
					if (!$(this).hasClass('secondaryNavOn')) {
						$(this)
							.addClass('secondaryNavHighlighted')
							.closest('li.secondaryNav').addClass('secondaryNavHighlighted');
					};
				};
				$(this)
					.closest('a.primaryNav').addClass('primaryNavHighlighted') // $('> a', $(this).closest('li.primaryNav')).addClass('primaryNavHighlighted');
					.closest('li.primaryNav').addClass('primaryNavHighlighted');

			} else if ($(this).hasClass('thirdLevelNav')) {
				if (disableLinkSwitch) {
					$(this)
						.addClass('thirdLevelNavOn')
						.closest('li.thirdLevelNav').addClass('thirdLevelNavOn')

					thirdLevelNavItemToHighlight = $('> a', $(this).closest('li.secondaryNav')).attr('id');

					secondaryNavItemToHighlight = $('> a', $(this).closest('li.secondaryNav')).attr('id');

					primaryNavItemToHighlight = $('> a', $(this).closest('li.primaryNav')).attr('id');

				} else {
					if (!$(this).hasClass('thirdLevelNavOn')) {
						$(this)
							.addClass('thirdLevelNavHighlighted')
							.parent().addClass('thirdLevelNavHighlighted');
					};
				};
				$(this)
					.closest('a.secondaryNav').addClass('secondaryNavHighlighted')
					.closest('li.secondaryNav').addClass('secondaryNavHighlighted')
					.closest('a.primaryNav').addClass('primaryNavHighlighted')
					.closest('li.primaryNav').addClass('primaryNavHighlighted');

			} else if ($(this).hasClass('fourthLevelNav')) {
				if (disableLinkSwitch) {
					$(this)
						.addClass('fourthLevelNavOn')
						.closest('li.fourthLevelNav').addClass('fourthLevelNavOn')

					fourthLevelNavItemToHighlight = $('> a', $(this).closest('li.fourthLevelNav')).attr('id');

					thirdLevelNavItemToHighlight = $('> a', $(this).closest('li.thirdLevelNav')).attr('id');

					secondaryNavItemToHighlight = $('> a', $(this).closest('li.secondaryNav')).attr('id');

					primaryNavItemToHighlight = $('> a', $(this).closest('li.primaryNav')).attr('id');

				} else {
					if (!$(this).hasClass('fourthLevelNavOn')) {
						$(this)
							.addClass('fourthLevelNavHighlighted')
							.parent().addClass('fourthLevelNavHighlighted');
					};
				};
				$(this)
					.closest('a.thirdLevelNav').addClass('thirdLevelNavHighlighted')
					.closest('li.thirdLevelNav').addClass('thirdLevelNavHighlighted')
					.closest('a.secondaryNav').addClass('secondaryNavHighlighted')
					.closest('li.secondaryNav').addClass('secondaryNavHighlighted')
					.closest('a.primaryNav').addClass('primaryNavHighlighted')
					.closest('li.primaryNav').addClass('primaryNavHighlighted');

			} else if ($(this).hasClass('fifthLevelNav')) {
				$(this)
					.css({
						'text-decoration': 'none',
						'color': '#999999',
						'cursor': 'none'
					});

			} else if ($(this).hasClass('sixthLevelNav')) {
				$(this)
					.css({
						'text-decoration': 'none',
						'color': '#999999',
						'cursor': 'none'
					});

			} else if ($(this).hasClass('utilityNav')) {
				$(this).addClass('utilityNavOn');

			} else if ($(this).hasClass('footerNav')) {
				$(this).addClass('footerNavOn');
			};

			if (disableLinkSwitch) {
				$(this)
					.css({
						'cursor': 'default'
					})
					.bind('mouseover', function() {
						setWindowStatus('');
						return true;
					})
					.bind('click', function() { 
						$(this).trigger('blur');
						setWindowStatus('');
						return false;
					});
			};
		};
	});
};

// Highlight navigational items
function PJCT_pI_hN() { // highlightNavigation
	// Highlight navigational links
	$('a.primaryNav, a.secondaryNav, a.thirdLevelNav, a.fourthLevelNav, a.utilityNav, a.footerNav, a.footerUtilityNav').each( function(loopCounter_linksToHighlight) {
		thisLinkId = $(this).attr('id');
		thisLinkClassName = $(this).attr('class');

		// Assign the link an id if it doesn't already have one
		if ((thisLinkId === '') || (thisLinkId === undefined)) {
			if (thisLinkClassName.indexOf(' ') != -1) {
				$(this).attr('id', 'link' + (loopCounter_linksToHighlight + 1) + '_' + thisLinkClassName.split(' ')[0]);
			} else {
				$(this).attr('id', 'link' + (loopCounter_linksToHighlight + 1) + '_' + thisLinkClassName);
			};
		};
		thisLinkId = $(this).attr('id');

		// Menu parents
		if ($(this).hasClass('primaryNav') || $(this).hasClass('secondaryNav') || $(this).hasClass('thirdLevelNav')) { //hasClass($_CL_pI_hN, 'secondaryNav') || hasClass($_CL_pI_hN, 'thirdLevelNav')) {
			// Ensure the parent <li> has the same className
			if (!($(this).closest('li').hasClass(thisLinkClassName))) {
				$(this).closest('li').addClass(thisLinkClassName);
			};

			// For primary nav items
			if ($(this).hasClass('primaryNav')) {
				// Home link
				if (($(this).text().toLowerCase() == 'home') || ($(this).text().toLowerCase() == 'accueil')) {
					$(this).closest('li').addClass('homeLink').end().addClass('homeLink');
				};
			};

			// Define mouseover and mouseout event handlers for the flyout menu system
			$(this).parent().hover( function() {
				if (is_ie && !is_ie7up) {
					$(this).addClass('hover'); // For IE6's benefit
				};
			}, function() {
				if (is_ie && !is_ie7up) {
					$(this).removeClass('hover');
				};
			});

			// Add menuParent class to parent
			if ($(this).siblings('ul').exists()) {
				if ($(this).siblings('ul').get(0).tagName.toLowerCase() == 'ul') { // || ($(this).next().get(0).tagName.toLowerCase() == 'div')
					$(this).closest('li').addClass('menuParent');
				};
			};
		};

		// Utility nav links
		if ($(this).hasClass('utilityNav')) {
			// ?
		};

		// Footer nav links
		if ($(this).hasClass('footerUtilityNav')) {
			// if (($(this).text().toLowerCase() == 'site credits') || ($(this).text().toLowerCase() == 'cr\u00E9dits du site')) {
			if ($(this).attr('href').toLowerCase().indexOf('site_credits') != -1) {
				$(this).closest('li').attr('id', 'siteCreditsLinkContainer');

				if (isMobileVersion) {
					$(this).attr('target', 'siteCreditsWindow');
				} else {
					$(this).bind('click', function() {
						return hs.htmlExpand(this, { objectType: 'iframe', align: 'center', width: 610, height: 330, wrapperClassName: 'highslide-html-content-site-credits' });
					});
				};

			} else if ($(this).attr('href') == '#topOfPage') {
				$(this).bind('click', function() {
					PJCT_sTTOTP();
					return false;
				}).closest('li').attr('id', 'backToTopLinkContainer');
			};
		};

		// Highlight/disable a link if it points to the current page
		// if ($(this).get(0).href == URLMinusQueryString) {
		if (($(this).get(0).href == URLMinusQueryString) || (is_ie && ((liveServerName + $(this).get(0).href) == URLMinusQueryString))) {
			PJCT_pI_hNI(thisLinkId, 1);
		};
	});

	if (primaryNavItemToHighlight != '') {
		PJCT_pI_hNI(primaryNavItemToHighlight, 0);
	};

	if (secondaryNavItemToHighlight != '') {
		PJCT_pI_hNI(secondaryNavItemToHighlight, 0);
	};

	if (thirdLevelNavItemToHighlight != '') {
		PJCT_pI_hNI(thirdLevelNavItemToHighlight, 0);
	};
};

// Show primary navigation items
function PJCT_pI_sPNI() {
	// alert('Show all of the primary nav items...');

	/*
	$('a.primaryNav').each( function(loopCounter) {
		// Animate the sequential display of the primary nav menu items
		setTimeout( function() {
			$('a.primaryNav').eq(loopCounter).parent().css({
				'visibility': 'visible'
			}).end().animate({
				'opacity': 1
			});
		}, (100 * (loopCounter - 1)));
	});
	*/
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Page initialization and finalization */

// Restyle take action content
function PJCT_pI_rTAC() {
	if ($_takeAction.exists()) {
		if ($_logoLink.exists()) {
			$_takeActionHeader.html('<h2>' + $_logoLink.html() + '<\/h2>');
		} else {
			// if (!($_takeActionHeader.html())) {
				$_takeActionHeader.html('<h2>Peter Julian <span>Member of Parliament, Burnaby-New Westminster<br \/>Official Opposition Energy &amp; Natural Resources Critic<\/span><\/h2>');
			// };
		};

		$_takeAction.prepend($_takeActionHeader);
		$_takeActionContainer.append($_takeAction);
		$_pageContainerInner.append($_takeActionContainer);
	};
};

// Restyle header
function PJCT_pI_rH() {
	if ($_header.exists()) {
		// Grab the top of content container
		if ($_topOfPageAnchorContainer.exists()) {
			$_headerContainerOuter.append($_topOfPageAnchorContainer);
		};

		// Logo
		if ($_logoContainer.exists()) {
			$_headerContainerInner.append($_logoContainer);

			// if (!isMobileVersion) {
		
			// };

			// Restyle logo link
			if (skinSwitcherEnabled) {
				// ?

			} else {
				$_logoLink = $('a:first', $_logoContainer);

				if ($_logoLink.exists()) {
					// If you're not on the home page, load the image map
					if (isHomePage || ($_logoLink.attr('href') == URLMinusQueryString) || ((liveServerName + $_logoLink.attr('href')) == URLMinusQueryString) || (URLMinusQueryString == liveServerName)) {
						$_logo
							.attr('alt', '')
							.attr('title', '');

						$_logoLink
							.removeAttr('href')
							.bind('click', function() {
								// return false;
							});
					};
				};
			};
		};

		// Restyle take action content
		PJCT_pI_rTAC();

		// Utility navigation
		if ($_utilityNav.exists()) {
			// Utility nav links
			$('a', $_utilityNav).each( function() {
				// Take action link
				// if (($(this).text().toLowerCase() == ui_takeAction_en) || ($(this).text().toLowerCase() == ui_takeAction_fr)) {
				if ($(this).attr('href').toLowerCase().indexOf('#takeaction') != -1) {
					$_takeActionLink = $(this);

					$_takeActionLinkIcon = $('<span class="icon takeActionIcon" \/>');
						$_takeActionLinkIcon.hover(function () {
							$('a.takeActionLink', $_utilityNav).addClass('activated');
						}, function() {
							$('a.takeActionLink', $_utilityNav).removeClass('activated');
						}).bind('click', function() {
							// Show/hide take action section
							$_takeActionLink.trigger('click');
						});

					$_takeActionLink
						.hover(function () {
							$_takeActionLinkIcon.addClass('activated');
						}, function() {
							$_takeActionLinkIcon.removeClass('activated');
						})
						.addClass('takeActionLink')
						.bind('click', function() {
							PJCT_showTakeActionContent();

							return false;
						})
						.closest('li')
							.addClass('takeActionLinkContainer')
							.append($_takeActionLinkIcon);

					if (!($_takeAction.exists())) {
						$('li.takeActionLinkContainer').css({
							'visibility': 'hidden'
						});
					};
				};
			});

			// Utility nav itself
			$_utilityNavContainer.append($_utilityNav);

			// Mobile menu
			if (!$_mobileMenuContainer.exists()) {
				$_mobileMenuContainer = $('<div id="mobileMenuContainer" \/>');
			};
			if (isMobileVersion) {
				$_headerContainerInner.append($_mobileMenuContainer);
			} else {
				$_utilityNavContainer.append($_mobileMenuContainer);

				// Font sizer
				if ($_documentFontSizer.exists()) {
					$_mobileMenuContainer.prepend($_documentFontSizer);
				};
			};

			// Search
			if ($_search.exists()) {
				$_searchContainer.append($_search);

				if (isMobileVersion) {

					// Social media links
					if ($_socialMediaLinks.exists()) {
						$_socialMediaLinksContainer.append($_socialMediaLinks);

						$_searchContainer.prepend($_socialMediaLinksContainer);
					};

					$_headerContainerInner.append($_searchContainer);
				} else {
					$('a', $_socialMediaLinks).each( function(loopCounter_socialMediaLinks) {
						$(this).css({
							'opacity': 0,
							'position': 'relative',
							'left': ((($('a', $_socialMediaLinks).size() - loopCounter_socialMediaLinks) * 100) * -1)
						});
					});

					$_utilityNavContainer.append($_searchContainer);
				};
			};

			if (isMobileVersion) {
				$_headerContainerInner.prepend($_utilityNavContainer);
			} else {
				$_headerContainerInner.append($_utilityNavContainer);
			};
		};

		// Restyle signup form
		PJCT_pI_rH_rSUF();

		// Restyle search form
		PJCT_pI_rH_rSF();

		// Restyle document font sizer
		PJCT_pI_rH_rDFS();

		// Add to the DOM
		if (isMobileVersion) {
			$_headerContainerInner.addClass('greyGradient');
		};
		$_headerContainerOuter.append($_headerContainerInner);
		// $_body.append($_headerContainerOuter);
		$_pageContainerInner.append($_headerContainerOuter);

		// Primary navigation
		if ($_primaryNav.exists()) {
			$_primaryNav.addClass('superfish');
			$_primaryNavContainerInner.append($_primaryNav);
			$_primaryNavContainer.append($_primaryNavContainerInner);
			$_headerContainerOuter.append($_primaryNavContainer);

			// Social media links, if "bannerContainer" doesn't exist
			if (!$_bannerContainer.exists() && !isMobileVersion) {
				if ($_socialMediaLinks.exists()) {
					$('a', $_socialMediaLinks).each( function(loopCounter_socialMediaLinks) {
						$(this).css({
							'opacity': 0,
							'position': 'relative',
							'left': ((($('a', $_socialMediaLinks).size() - loopCounter_socialMediaLinks) * 100) * -1)
						});
					});

					$_socialMediaLinksContainer.append($_socialMediaLinks);

					$_primaryNavContainerInner.prepend($_socialMediaLinksContainer);
				};
			};

			// Position header elements
			PJCT_positionHeaderElements();

			// Show social media links
			PJCT_pI_rH_sSML();
		};

		// Junk the old header container
		$_header.remove();
	};
};
	// Reposition header elements
	function PJCT_positionHeaderElements() {
		if (isMobileVersion) {
			return;
		};

		if ($_bannerContainer.exists()) {
			// Header NDP logo
			if ($(window).width() > 1025) {
				$_primaryNavContainerInner.css({
					'background-position': Math.round((($(document).width() - $_headerContainerInner.width() - 138) / 2) + $_headerContainerInner.width()) + 'px 15px' // Page width - primary nav width - logo width (138px) / 2
				});
			} else {
				$_primaryNavContainerInner.css({
					'background': 'none'
				});
			}
		} else {
			// Social media links
			$_socialMediaLinks.attr('title', '').css({
				'margin-right': Math.round((($(document).width() - $_headerContainerInner.width()) / 2) + 138 + 30) // Where 138 = logo width, and 30 = half of the remaining space (60px)
				// marginRight: 100
			});

			// Header NDP logo
			$_primaryNavContainerInner.css({
				'background-position': Math.round((($(document).width() - $_headerContainerInner.width()) / 2) + $_headerContainerInner.width() - 138) + 'px 15px' // Page width - primary nav width - logo width (138px) / 2
			});
		};
	};

	// Restyle header - restyle document font sizer
	function PJCT_pI_rH_rDFS() {
		if ($_documentFontSizer.exists()) {
			$_documentFontSizer
				.html('<span class="smallFontSize">A<\/span><span class="mediumFontSize">A<\/span><span class="largeFontSize">A<\/span><span class="extraLargeFontSize">A<\/span>')
				.attr('title', ' ' + ui_changeFontSizeText + ' ')
				.bind('click', function() {
					$(this).blur();
					PJCT_cDFS();
				})
				.bind('dblclick, selectstart', function() {
					$(this).blur();
					return false;
				});
		};
	};

	// Show social media links
	function PJCT_pI_rH_sSML() {
		setTimeout( function() {
			$('a', $_socialMediaLinks).each( function(loopCounter_socialMediaLinks) {
				$(this).animate({
					'opacity': 1,
					'left': 0
				}, { duration: 400, easing: 'easeOutQuart' });
			});
		}, 800);
	};

	// Restyle header - restyle signup form
	function PJCT_pI_rH_rSUF() {
		// Take action form
		if ($_takeActionForm.exists()) {
			// Initialize the form fields
			$('input[type="text"]', $_takeActionForm).each( function(loopCounter_takeActionFormFields) {
				$(this)
					.attr('initialValue', $(this).val())
					.bind('focus', function() {
						$(this)
							.addClass('activated')
							.removeClass('warning');

						if (($(this).val() == ui_takeActionFormWarningText[loopCounter_takeActionFormFields]) || ($(this).val() == $(this).attr('initialValue'))) {
							$(this).val('');
						};
					})
					.bind('blur', function() {
						if (($(this).val() == '') || ($(this).val() == ' ')) {
							$(this)
								.val($(this).attr('initialValue'))
								.removeClass('activated');
						};
					});
			});

			// Validate the form before submitting it
			if ($_takeActionFormSubmitButton.exists()) {
				$_takeActionFormSubmitButton.bind('click', function() {
					var takeActionFormCanBeSubmitted = 1;

					// Name
					// NG. The form has first AND last name, not just name. This code checks for $_takeActionFormNameField which is not even defined.
					/*
					if (($_takeActionFormNameField.val() == $_takeActionFormNameField.attr('initialValue')) || ($_takeActionFormNameField.val() == ui_takeActionFormNameFieldWarningText) || ($_takeActionFormNameField.val().length <= 4) || ($_takeActionFormNameField.val().indexOf(' ') == -1)) {
						$_takeActionFormNameField.addClass('warning');

						$_takeActionFormNameField
							.val(ui_takeActionFormNameFieldWarningText)
							.css({
								'color': '#f1601f',
								'background-color': '#fcd6a9',
								'border-color': '#f1601f'
							}).delay(1000).animate({
								'color': '#666666',
								'background-color': '#ffffff',
								borderTopColor: '#b6b6b6',
								borderRightColor: '#b6b6b6',
								borderBottomColor: '#b6b6b6',
								borderLeftColor: '#b6b6b6'
							});

						takeActionFormCanBeSubmitted = 0;

					} else {
						$_takeActionFormNameField.removeClass('warning');
					};
					*/

					// First name
					if (($_takeActionFormFirstNameField.val() == $_takeActionFormFirstNameField.attr('initialValue')) || ($_takeActionFormFirstNameField.val() == ui_takeActionFormFirstNameFieldWarningText) || ($_takeActionFormFirstNameField.val().length <= 2)) {
						$_takeActionFormFirstNameField.addClass('warning');

						$_takeActionFormFirstNameField
							.val(ui_takeActionFormFirstNameFieldWarningText)
							.css({
								'color': '#f1601f',
								'background-color': '#fcd6a9',
								'border-color': '#f1601f'
							}).delay(1000).animate({
								'color': '#666666',
								'background-color': '#ffffff',
								borderTopColor: '#b6b6b6',
								borderRightColor: '#b6b6b6',
								borderBottomColor: '#b6b6b6',
								borderLeftColor: '#b6b6b6'
							});

						takeActionFormCanBeSubmitted = 0;

					} else {
						$_takeActionFormFirstNameField.removeClass('warning');
					};
					// Last name
					if (($_takeActionFormLastNameField.val() == $_takeActionFormLastNameField.attr('initialValue')) || ($_takeActionFormLastNameField.val() == ui_takeActionFormLastNameFieldWarningText) || ($_takeActionFormLastNameField.val().length <= 2)) {
						$_takeActionFormLastNameField.addClass('warning');

						$_takeActionFormLastNameField
							.val(ui_takeActionFormLastNameFieldWarningText)
							.css({
								'color': '#f1601f',
								'background-color': '#fcd6a9',
								'border-color': '#f1601f'
							}).delay(1000).animate({
								'color': '#666666',
								'background-color': '#ffffff',
								borderTopColor: '#b6b6b6',
								borderRightColor: '#b6b6b6',
								borderBottomColor: '#b6b6b6',
								borderLeftColor: '#b6b6b6'
							});

						takeActionFormCanBeSubmitted = 0;

					} else {
						$_takeActionFormLastNameField.removeClass('warning');
					};

					// Email
					if (!emailAddressRegExp.test($_takeActionFormEmailField.val())) {
						$_takeActionFormEmailField.addClass('warning');

						$_takeActionFormEmailField
							.val(ui_takeActionFormEmailFieldWarningText)
							.css({
								'color': '#f1601f',
								'background-color': '#fcd6a9',
								'border-color': '#f1601f'
							}).delay(1000).animate({
								'color': '#666666',
								'background-color': '#ffffff',
								borderTopColor: '#b6b6b6',
								borderRightColor: '#b6b6b6',
								borderBottomColor: '#b6b6b6',
								borderLeftColor: '#b6b6b6'
							});

						takeActionFormCanBeSubmitted = 0;
					} else {
						$_takeActionFormEmailField.removeClass('warning');
					};

					// Postal code
					// if (($_takeActionFormPostalField.val() == $_takeActionFormPostalField.attr('initialValue')) || ($_takeActionFormPostalField.val() == ui_takeActionFormPostalFieldWarningText) || (($_takeActionFormPostalField.val().length < 6) || (($_takeActionFormPostalField.val().length == 7) && ($_takeActionFormPostalField.val().indexOf(' ') == -1)))) {
					var tmp = $_takeActionFormPostalField.val().toUpperCase();
					if (!postalCodeRegExp.test(tmp)) {
						$_takeActionFormPostalField.addClass('warning');

						$_takeActionFormPostalField
							.val(ui_takeActionFormPostalFieldWarningText)
							.css({
								'color': '#f1601f',
								'background-color': '#fcd6a9',
								'border-color': '#f1601f'
							}).delay(1000).animate({
								'color': '#666666',
								'background-color': '#ffffff',
								borderTopColor: '#b6b6b6',
								borderRightColor: '#b6b6b6',
								borderBottomColor: '#b6b6b6',
								borderLeftColor: '#b6b6b6'
							});

						takeActionFormCanBeSubmitted = 0;

					} else {
						$_takeActionFormPostalField.removeClass('warning');
					};

					
					// Can the form be submitted?
					if (takeActionFormCanBeSubmitted) {
						$_takeActionForm.submit();
					} else {
						return false;
					};
				});
			};
		};
	};

	// Show/hide take action content
	function PJCT_showTakeActionContent() {
		// Toggle the take action link class
		$_takeActionLinkIcon.closest('li').toggleClass('activated');

		// Toggle the display of the take action content
		$_takeActionContainer
			.stop()
			.slideToggle();

		// Set a cookie to indicate that the take action content has been viewed...? Nah, do this when the content is set to dislay instead
		if ($_takeActionContent.attr('id')) {
			// storeIntelligentCookie('takeAction',$_takeActionContent.attr('id'),nextYear,'\/',masterCookieDomain);
		};
	};

	// Restyle header - restyle search form
	function PJCT_pI_rH_rSF() {
		// Search
		if ($_search.exists()) {
			// Text field
			if ($_searchTextField.exists()) {
				if ($('label:first', $_search).exists()) {
					a1 = $('label:first', $_search).text();

					if (a1.substring((a1.length - 1), (a1.length - 0)) == ':') {
						$_searchTextField.val(a1.substring(0, (a1.length - 1)));
					} else {
						$_searchTextField.val(a1);
					};

					$('label:first', $_search).css({
						'display': 'none'
					});
				};

				$_searchTextField
					.attr('initialValue', $_searchTextField.val())
					.bind('focus', function() {
						$(this)
							.addClass('activated')
							.removeClass('warning');

						if (($(this).val() == ui_searchFieldWarningText) || ($(this).val() == $(this).attr('initialValue'))) {
							$(this).val('');
						};
					})
					.bind('blur', function() {
						if (($(this).val() == '') || ($(this).val() == ' ')) {
							$(this).val($(this).attr('initialValue'));
						};

						$(this)
							.removeClass('activated');
					});
			};

			// Submit button
			if ($_searchSubmitButton.exists()) {
				var searchFieldWarningBorderColour = '#d4d4d4';
				if (isMobileVersion) {
					searchFieldWarningBorderColour = '#b6b6b6';
				};

				$_searchSubmitButton
					.bind('click', function() {
						if ($_searchForm.exists()) {
							if (($_searchTextField.val() == '') || ($_searchTextField.val() == ' ') || ($_searchTextField.val() == ui_searchFieldWarningText) || ($_searchTextField.val() == $_searchTextField.attr('initialValue'))) {
								$_searchTextField
									.addClass('warning')
									.val(ui_searchFieldWarningText)
									.css({
										'color': '#f1601f',
										'background-color': '#fcd6a9',
										borderTopColor: '#f1601f',
										borderLeftColor: '#f1601f'
									}).delay(1000).animate({
										'color': '#999999',
										'background-color': '#ffffff',
										borderTopColor: searchFieldWarningBorderColour,
										borderLeftColor: searchFieldWarningBorderColour
									});

								return false;
							} else {
								$_searchForm.submit();
							};
						};
					});
			};
		};
	};

// Restyle content
function PJCT_pI_rC() {
	// Content
	if ($_content.exists()) {
		// Banner
		if ($_bannerContainer.exists()) {
			$_body.addClass('withBanner');

			$_bannerRightColumn = $('<div id="bannerRightColumn" \/>');

			$_bannerContainerOuter
				.append($('<div class="bannerContainerShim" \/>'))
				.append($_bannerRightColumn)
				.append($_bannerContainer)
				.wrapInner($('<div id="bannerContainerInner" \/>'));
				// .append($('<div class="bannerContainerShim" \/>'));
			$_pageContainerInner.append($_bannerContainerOuter);
		};

		// Grab the top of content container
		if ($_startOfContentAnchorContainer.exists()) {
			$_contentContainerInner.append($_startOfContentAnchorContainer);
		};

		// Bread crumb nav
		if ($_breadCrumbNav.exists()) {
			$_contentContainerInner.append($_breadCrumbNav);
		};

		// Content upper
		if ($_contentUpper.exists()) {
			if ((!isHomePage) && (!($_body.hasClass('front')))) {
				$_contentContainerInner.append($_contentUpper);
			};
		};

		// Left and right columns
		if (pageType != 'fullWidth') {
			// Left column
			if ($_leftColumn.exists()) {
				$_body.addClass('rightColumn');
				$_rightColumnContainer.append($_leftColumn);
			};

			// Right column
			if ($_rightColumn.exists()) {
				$_body.addClass('rightColumn');
				$_rightColumnContainer.append($_rightColumn);
			};

			$_contentContainerInner.append($_rightColumnContainer);
		};

		// Main heading
		if (isMobileVersion) {
			// Move the heading 1 tag to the top of the "content"
			$('#content h1:first')
				.addClass('withoutLeading')
				.prependTo($_contentContainerInner);
		};

		// Add to the DOM
		$_contentContainerInner.append($_content);
		$_contentContainerOuter.append($_contentContainerInner);
		$_contentContainerOuter.append($_contentLower);
		// $_body.append($_contentContainerOuter);
		$_pageContainerInner.append($_contentContainerOuter);

		// Position header NDP logo -- Does this need to be moved to this spot for IE7's benefit?
		// PJCT_positionHeaderElements();

		// Restyle movie containers
		PJCT_pI_rC_rMC();

		// Initialize highslide
		PJCT_pI_rC_iH();

		// Initialize highslide images and galleries
		PJCT_pI_rC_iHIG();

		// Initialize highslide HTML
		PJCT_pI_rC_iHHTMLC();

		// Restyle highslide links
		PJCT_pI_rC_rHL();

		// Restyle form elements
		PJCT_pI_rC_rFE();

		// Restyle tabbed content
		PJCT_pI_rC_rTC();

		// Restyle sliders, pt 1
		PJCT_pI_rC_restyleSliders();

		// Restyle subcolumn content
		PJCT_pI_rC_rSC();

		// Restyle all styled content
		PJCT_pI_rC_rASC();

		// Restyle all ExpandOMatic content
		PJCT_pI_rEOMC();

		// Restyle teaser content
		PJCT_pI_rC_restyleTeaserContent();

		// Restyle content lower carousel
		PJCT_pI_rC_rCLC();
	};
};
	// Restyle content - restyle sliders, pt 1
	function PJCT_pI_rC_restyleSliders() {
		// Banners
		$('div.bannerContainer').each( function() {
			$(this)
				// .addClass('slidesOuter')
				.wrapInner('<div class="slidesOuter"><div class="slides"><\/div><\/div>');

			$('div.banner', $(this)).each( function(loopCounter_banners) {
				$(this)
					.attr('panelIndex', loopCounter_banners)
					.addClass('slide');
			});
		});

		// Does "bannerContainer" exist?
		if ($_bannerContainer.exists()) {
			// If there's more than one banner
			if ($('div.slide', $_bannerContainer).size() > 1) {
				$_bannerContainer.addClass('hasMultipleBanners');
			};

			// Add banner tabs
			$_bannerTabs = $('<div id="bannerTabs" \/>');
			$_bannerContainer.prepend($_bannerTabs);

			// Banner tab content
			$('div.banner', $_bannerContainer).each( function(loopCounter_banners) {
				thisExtraClass = '';
				if (loopCounter_banners === 0) {
					thisExtraClass = ' activated';
				};

				$_bannerTabs.append($('<div class="bannerTabLinkContainer"><a href="#topOfPage" class="bannerTabLink' + thisExtraClass + '" bannerLinkIndex="' + loopCounter_banners + '">' + $('h2:first', $(this)).text() + '<\/a><\/div>'));
			});

			// Banner tab links
			$('div.bannerTabLinkContainer a.bannerTabLink').each( function(loopCounter_bannerTabLinks) {
				if ($(this).height() > 50) {
					$(this).css({
						// 'display': 'block'
					}).addClass('clipped');
				};

				$(this).bind('click', function() {
					if (!($().hasClass('active'))) {
						// Unhighlight all the buttons
						$('div.bannerTabLinkContainer a.bannerTabLink').removeClass('active');

						// Activate this button
						$(this).addClass('active');

						// Click the corresponding button
						$('div.sliderNavPanelButtons button.panelButton', $('#bannerContainerInner')).eq($(this).attr('bannerLinkIndex')).trigger('click');

						// Cancel the link's default behaviour
						return false;
					};
				});
			});

			// Draggability
			if (isMobileVersion) {
				// var bannerDragDirection = 'rtl';
				var bannerDragInitialMousePositionX = 0;
				var bannerDragInitialMousePositionY = 0;

				$('div.bannerImage', $_bannerContainer).bind('dragstart', { 'drop': false }, function(e) {
					bannerDragInitialMousePositionX = e.clientX;
					bannerDragInitialMousePositionY = e.clientY;
				});

				$('div.bannerImage', $_bannerContainer).bind('dragend', { 'drop': false }, function(e) {
					// if ($(scrollPageBodySelectorText, top.document).scrollTop() != 0) {
					if (Math.abs(e.clientY - bannerDragInitialMousePositionY) > Math.abs(e.clientX - bannerDragInitialMousePositionX)) {
						if (e.clientY > bannerDragInitialMousePositionY) { 
							// Scroll up
							PJCT_sTP($(scrollPageBodySelectorText, top.document).scrollTop() - Math.abs(e.clientY - bannerDragInitialMousePositionY));
						} else {
							// Scroll down
							PJCT_sTP($(scrollPageBodySelectorText, top.document).scrollTop() + Math.abs(e.clientY - bannerDragInitialMousePositionY));
						};
					} else {
						if (e.clientX < bannerDragInitialMousePositionX) { 
							// bannerDragDirection = 'rtl';
							$('img.sliderNavNextIcon', $_bannerContainerOuter).trigger('click');
						} else {
							// bannerDragDirection = 'ltr';
							$('img.sliderNavPrevIcon', $_bannerContainerOuter).trigger('click');
						};
					};
				});
			};
		};

		// All slider containers
		$('div.slidesOuter').each( function(loopCounter_sliderContainers) {
			// Slider index
			sliderIndex[loopCounter_sliderContainers] = 0;

			// Colection of slides
			$_slides = $('div.slide', $(this));

			// Number of slides
			sliderLength[loopCounter_sliderContainers] = $_slides.size();

			// Make the banner clickable?
			$_slides.each( function() {
				var $_firstLink = $(' a:first', $(this));
				if ($_firstLink.exists()) { // && !isMobileVersion
					if ($_firstLink.attr('class').indexOf('highslide') != -1) {
						$('img.bannerImage', $(this))
							.css({
								'cursor': 'pointer'
							})
							.bind('click', function() {
								$_firstLink.triggerHandler('click');
							});

					} else {
						if (!($_firstLink).attr('name')) {
							var thisLinkClass = $_firstLink.attr('class');
							if (thisLinkClass) {
								thisLinkClass = thisLinkClass.replace('rightAligned', '');
								thisLinkClass = thisLinkClass.replace('leftAligned', '');
							};

							$(this).attr('linkHref', $_firstLink.attr('href'));
							$(this).attr('linkClass', thisLinkClass);

							var $_newBannerLink = $_firstLink.clone();
							$_newBannerLink.text('');
							$('img.bannerImage', $(this)).wrap($_newBannerLink);
						};
					};
				};
			});

			// If there's more than one banner
			if (sliderLength[loopCounter_sliderContainers] > 1) {
				// Slider nav for each collection of banners - step buttons
				sliderNavStepButtonsTopHTML = '';
				sliderNavStepButtonsTopHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PanelButtonsTop" class="sliderNavPanelButtons"><div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PanelButtonsInnerTop" class="sliderNavPanelButtonsInner">';
				for (var loopCounter_banners = 0; loopCounter_banners < $_slides.size(); loopCounter_banners++) {
					sliderNavStepButtonsTopHTML += '<span class="panelButtonWrapper"><button id="sliderNav' + (loopCounter_sliderContainers + 1) + 'Panel' + (loopCounter_banners + 1) + 'Button" class="panelButton panelButtonTop';
					if (loopCounter_banners == 0) {
						sliderNavStepButtonsTopHTML += ' activated';
					};
					sliderNavStepButtonsTopHTML += '" value="" type="button">' + (loopCounter_banners + 1) + '<\/button><\/span>';
				};
				sliderNavStepButtonsTopHTML += '<\/div><\/div>';

				sliderNavStepButtonsHTML = '';
				sliderNavStepButtonsHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PanelButtons" class="sliderNavPanelButtons"><div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PanelButtonsInner" class="sliderNavPanelButtonsInner">';
				for (var loopCounter_banners = 0; loopCounter_banners < $_slides.size(); loopCounter_banners++) {
					sliderNavStepButtonsHTML += '<span class="panelButtonWrapper"><button id="sliderNav' + (loopCounter_sliderContainers + 1) + 'Panel' + (loopCounter_banners + 1) + 'Button" class="panelButton';
					if (loopCounter_banners == 0) {
						sliderNavStepButtonsHTML += ' activated';
					};
					sliderNavStepButtonsHTML += '" value="" type="button">' + (loopCounter_banners + 1) + '<\/button><\/span>';
				};
				sliderNavStepButtonsHTML += '<\/div><\/div>';

				// Slider nav for each collection of banners - direction buttons
				sliderNavDirectionButtonsTopHTML = '';
				sliderNavDirectionButtonsTopHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'DirectionButtonsTop" class="sliderNavDirectionButtons sliderNavDirectionButtonsTop">';
				sliderNavDirectionButtonsTopHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PrevTop" class="sliderNavPrev"><img id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PrevIconTop" class="sliderNavPrevIcon sliderNavPrevIconTop" src="' + blank_transparent_image.src + '" title=" &lt; ' + ui_prevText + ' " alt="" \/><\/div>';
				sliderNavDirectionButtonsTopHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'NextTop" class="sliderNavNext"><img id="sliderNav' + (loopCounter_sliderContainers + 1) + 'NextIconTop" class="sliderNavNextIcon sliderNavNextIconTop" src="' + blank_transparent_image.src + '" title=" ' + ui_nextText + ' &gt; " alt="" \/><\/div>';
				sliderNavDirectionButtonsTopHTML += '<\/div>';

				sliderNavDirectionButtonsHTML = '';
				sliderNavDirectionButtonsHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'DirectionButtons" class="sliderNavDirectionButtons">';
				sliderNavDirectionButtonsHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'Prev" class="sliderNavPrev"><img id="sliderNav' + (loopCounter_sliderContainers + 1) + 'PrevIcon" class="sliderNavPrevIcon" src="' + blank_transparent_image.src + '" title=" &lt; ' + ui_prevText + ' " alt="" \/><\/div>';
				// sliderNavDirectionButtonsHTML += sliderNavStepButtonsHTML;
				sliderNavDirectionButtonsHTML += '<div id="sliderNav' + (loopCounter_sliderContainers + 1) + 'Next" class="sliderNavNext"><img id="sliderNav' + (loopCounter_sliderContainers + 1) + 'NextIcon" class="sliderNavNextIcon" src="' + blank_transparent_image.src + '" title=" ' + ui_nextText + ' &gt; " alt="" \/><\/div>';
				sliderNavDirectionButtonsHTML += '<\/div>';

				// Add the slider nav to the document
				// $(this).before($(sliderNavStepButtonsTopHTML));
				// $(this).before($(sliderNavDirectionButtonsTopHTML));
				$(this).closest('div.bannerContainer').after($(sliderNavStepButtonsHTML));
				$(this).closest('div.bannerContainer').after($(sliderNavDirectionButtonsHTML));
			};
		});

		// Social media links, if "bannerContainer" exists
		if ($_bannerContainer.exists()) {
			if ($_socialMediaLinks.exists() && !isMobileVersion) {
				$_socialMediaLinksContainer.append($_socialMediaLinks);

				$('div.sliderNavPanelButtons', $_bannerContainerOuter).prepend($_socialMediaLinksContainer);
			};
		};
	};

	// Restyle content - restyle sliders, pt 2
	function PJCT_pI_rC_restyleSliders2() {
		// Initialize the banner sliders
		$('div.slidesOuter').each( function(loopCounter_sliderContainers) {
			sliderVerticalSetting = sliderVertical;
			if ($(this).closest('div.verticalSlider').exists()) {
				sliderVerticalSetting = 1;
			};

			$(this).easySlider({ controlsShow: false, vertical: sliderVerticalSetting, prevId: 'sliderNav' + (loopCounter_sliderContainers + 1) + 'PrevIcon', nextId: 'sliderNav' + (loopCounter_sliderContainers + 1) + 'NextIcon', auto: sliderAutomatic });
		});

		// Slider nav
		$('div.sliderNavDirectionButtons').each( function(loopCounter_sliderNavDirectionContainers) {
			$('div.sliderNavNext').eq(loopCounter_sliderNavDirectionContainers)
				// .before($('div.sliderNavPanelButtons').eq(loopCounter_sliderNavDirectionContainers));
		});
	};

	// Change panel callback, executed once the easySlider mechanism's change panel event completes
	function sliderChangePanelCallback(panelNumber, panelNavNumber) {
		if (panelNavNumber) {
			var panelContainerIndex = panelNavNumber.split('sliderNav')[1] - 1;

			// Reset the corresponding panel nav buttons
			$('#' + panelNavNumber + 'PanelButtons button, #' + panelNavNumber + 'PanelButtonsTop button').each( function() {
				$(this)
					.removeClass('activated');
			});

			// Set the slider index
			sliderIndex[panelContainerIndex] = panelNumber;

			// Highlight the appropriate panel nav button
			$('#' + panelNavNumber + 'PanelButtons button').eq(sliderIndex[panelContainerIndex]).addClass('activated');
			$('#' + panelNavNumber + 'PanelButtonsTop button').eq(sliderIndex[panelContainerIndex]).addClass('activated');

			if ($_bannerContainer.exists()) {
				$('a.bannerTabLink')
					.removeClass('activated')
					.eq(sliderIndex[panelContainerIndex]).addClass('activated');
			};
		};
	};

	// Restyle form elements
	function PJCT_pI_rC_rFE() {
		$('form').livequery( function() { // .not('.unstyled')
			// Unstyled forms
			if (!($(this).hasClass('unstyled'))) {
				$('input.form-submit, input[type=button], input[type=reset], input[type=submit]', $(this)).each( function() {
					if ((!($(this).closest('#search').exists())) && (!($(this).closest('#takeAction').exists()))) {
						$(this)
							.addClass('styled');
					};
				});
			};
		});

		$('form:not(.disabled)').livequery( function() { // .not('.unstyled')
			// Disabled forms
			// if ($(this).hasClass('disabled')) {
				/*
				$('button, button.styled, button.styledSlim, a.styled, a.styledSlim, input[type=button], input[type=reset], input[type=submit], input[type=button].styled, input[type=reset].styled, input[type=submit].styled, input[type=button].styledSlim, input[type=reset].styledSlim, input[type=submit].styledSlim, input[type=file], input[type=checkbox], input[type=radio], select, option, textarea', $(this)).livequery( function() {
					$(this)
						.addClass('disabled')
						.bind('click', function() {
							$(this).blur();

							return false;
						});
				});
				$('select', $(this)).livequery( function() {
					$(this)
						.addClass('disabled')
						.bind('mouseover, mouseout, keydown', function() {
							$(this).blur();

							return false;
						});
				});
				*/
			// };
		});
	};

	// Restyle movie containers
	function PJCT_pI_rC_rMC() {
		$_movieContainerHighslideWrapper = new Array();

		$_movieContainers = new Array();
			$_movieContainerForms = new Array();
				movieF4Vs = new Array();
				movieFLVs = new Array();
				movieMOVs = new Array();
				movieMP4s = new Array();
				movie3GPs = new Array();

				movieIMGs = new Array(); // Poster frame image
				movieFileWidths = new Array();
				movieFileHeights = new Array();
				movieThumbnailImages = new Array();

				movieAutoPlay = new Array();
				movieAutoPlayString = new Array();

			movieTitles = new Array();
			movieDescriptions = new Array();

		$_movieHighslideLinkContainers = new Array();
			$_movieHighslideLinks = new Array();

		$_movieContainerOuterContainers = new Array();
			$_movieContainerTopCaps = new Array();
			$_movieContainerInnerContainers = new Array();
				$_movieWrappers = new Array();
				// $_movieWrappersForegroundImagesForPrint = new Array();
				$_movieWrappersForegroundImages = new Array();
			$_movieContainerBottomCaps = new Array();

		// For each movie container 
		$_movieContainers = $('div.movieContainer');
		$_movieContainers.each( function(loopCounter) {
			// Initialize movie parameter array values
			movieF4Vs[loopCounter] = '';
			movieFLVs[loopCounter] = '';
			movieMOVs[loopCounter] = '';
			movieMP4s[loopCounter] = '';
			movie3GPs[loopCounter] = '';

			movieIMGs[loopCounter] = '';
			movieFileWidths[loopCounter] = 0;
			movieFileHeights[loopCounter] = 0;
			movieAutoPlayString[loopCounter] = '';

			// Movie container forms
			$_movieContainerForms[loopCounter] = $('form:first', $_movieContainers[loopCounter]);

			// For each movie container form input
			$_movieContainerFormInputs = $('input', $_movieContainerForms[loopCounter]);
			$_movieContainerFormInputs.each( function() {
				// Set movie parameter array values
				if ($(this).attr('name') == 'typeSIZE') {
					movieFileWidths[loopCounter] = $(this).val().split('x')[0] * 1;
						if (movieFileWidths[loopCounter] == 640) {
							// addClass($_movieContainers[loopCounter], ' movieContainerLarge');
						};
					movieFileHeights[loopCounter] = $(this).val().split('x')[1] * 1;

				} else if ($(this).attr('name') == 'typeF4V') {
					movieF4Vs[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'typeFLV') {
					movieFLVs[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'typeMOV') {
					movieMOVs[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'typeMP4') {
					movieMP4s[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'type3GP') {
					movie3GPs[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'typeIMG') {
					movieIMGs[loopCounter] = $(this).val();

				} else if ($(this).attr('name') == 'typeAutoPlay') {
					movieAutoPlay[loopCounter] = $(this).val();
				};
			});

			// Create a default posterframe image if necessary
			if (!movieIMGs[loopCounter]) {
				movieIMGs[loopCounter] = fDPO + 'media\/videos\/_default_movie_posterframe_' + movieFileWidths[loopCounter] + 'x' + movieFileHeights[loopCounter] + '.gif';
			};

			// Create all of the necessary elements to cap, contain, and wrap the movie
			$_movieContainerOuterContainers[loopCounter] = $('<div id="movieContainerOuterContainer' + (loopCounter + 1) + '" class="movieContainerOuterContainer" \/>');
				$_movieContainerTopCaps[loopCounter] = $('<div class="movieContainerCapTop" \/>');
				$_movieContainerBottomCaps[loopCounter] = $('<div class="movieContainerBottomTop" \/>');
				$_movieContainerInnerContainers[loopCounter] = $('<div id="movieContainerInnerContainer' + (loopCounter + 1) + '" class="movieContainerInnerContainer" \/>');
					$_movieWrappers[loopCounter] = $('<div id="movieWrapper' + (loopCounter + 1) + '" class="movieWrapper" \/>');

				// Account for the size of the movie container, if it's a highslide video
				if ($(this).parents('div.highslideVideo').exists()) {
					if (movieFileWidths[loopCounter] > 800) {
						$(this).parents('div.highslideVideo').addClass('highslide-html-ultra-wide');

					} else if (movieFileWidths[loopCounter] > 720) {
						$(this).parents('div.highslideVideo').addClass('highslide-html-wide');

					} else if (movieFileWidths[loopCounter] > 640) {
						$(this).parents('div.highslideVideo').addClass('highslide-html-medium-wide');

					} else if (movieFileWidths[loopCounter] > 480) {
						$(this).parents('div.highslideVideo').addClass('highslide-html-content-medium');

					} else if (movieFileWidths[loopCounter] > 320) {
						$(this).parents('div.highslideVideo').addClass('highslide-html-content');
					};
				};

			// If there's a Flash or QuickTime movie to embed...
			if ((((movieF4Vs[loopCounter] != '') || (movieFLVs[loopCounter] != '')) && (flashinstalled == 2) && (flashversion >= FlashPlayerVersionRequired)) || (((movieMOVs[loopCounter] != '') || (movieMP4s[loopCounter] != '')) && QuickTimePlayerInstalled)) {

				// Replace the form with the wrapper
				// $_movieContainerForms[loopCounter].replaceWith($_movieWrappers[loopCounter]);

				// Add the wrapper elements to the movie container form
				$(this).wrap($_movieContainerOuterContainers[loopCounter]);
				// $(this).before($_movieContainerTopCaps[loopCounter]);
				// $(this).after($_movieContainerBottomCaps[loopCounter]);
				$(this).wrap($_movieContainerInnerContainers[loopCounter]);

				// Now embed the actual movie
				// Flash version
				if (((movieF4Vs[loopCounter] != '') || (movieFLVs[loopCounter] != '')) && (flashinstalled == 2) && (flashversion >= FlashPlayerVersionRequired)) {
					movieFileHeights[loopCounter] += movieWrapperHeightOffset;

					// Flash 9.115+?
					if ((movieF4Vs[loopCounter] != '') && ((flashversion >= 10) || ((flashversion == 9) && (FlashPlayerVersionRevision >= 115)))) {
						FlashMovieClip = movieF4Vs[loopCounter];
					} else {
						FlashMovieClip = movieFLVs[loopCounter];
					};

					// Auto-play?
					if ((movieAutoPlay[loopCounter] == 1) || (movieAutoPlay[loopCounter] == 'true')) {
						if (is_ie) {
							$_movieContainerDiv[loopCounter].addClass('autostart');
							movieAutoPlayString[loopCounter] = '&autostart=false';
						} else {
							movieAutoPlayString[loopCounter] = '&autostart=true';
						};
					};

					// Add the movie to the collection of movie clips
					movieClips[movieClipsArrayIndex] = new movieClipsObject(fDPO + mFPO + movieWrapperFileName + '?file=' + FlashMovieClip + '&image=' + movieIMGs[loopCounter] + movieAutoPlayString[loopCounter], $_movieWrappers[loopCounter].attr('id'), FlashPlayerVersionRequired, movieFileWidths[loopCounter], movieFileHeights[loopCounter], 'menu=false,quality=best,wmode=transparent,allowFullScreen=true,allowScriptAccess=sameDomain,bgcolor=#ffffff,volume=50,id=movieClipObject' + (movieClipsArrayIndex + 1));
					movieClipsArrayIndex++;

				// QuickTime version
				} else if (((movieMOVs[loopCounter] != '') || (movieMP4s[loopCounter] != '')) && QuickTimePlayerInstalled) {
					// MOV or MP4?
					if (movieMOVs[loopCounter] != '') {
						QuickTimeMovieClip = movieMOVs[loopCounter];
					} else if (movieMP4s[loopCounter] != '') {
						QuickTimeMovieClip = movieMP4s[loopCounter];
					};

					// Auto-play?
					if ((movieAutoPlay[loopCounter] == 1) || (movieAutoPlay[loopCounter] == 'true')) {
						movieAutoPlayString = 'autoplay=true,';
					};

					// Add the movie to the collection of movie clips
					movieClips[movieClipsArrayIndex] = new movieClipsObject(movieMOVs[loopCounter], $_movieWrappers[loopCounter].attr('id'), QuickTimePlayerVersionRequired, movieFileWidths[loopCounter], movieFileHeights[loopCounter], 'autoplay=true,controller=true,showlogo=false,volume=50,autohref=true,bgcolor=ffffff');
					movieClipsArrayIndex++;

					// Style the movie wrapper
					$_movieWrappers[loopCounter]
						.css({
							'height': (movieFileHeights[loopCounter] + 0) + 'px',
							'cursor': 'pointer',
							// 'background-color': '#d9d9d9',
							'background-position': 'center center',
							'background-repeat': 'no-repeat',
							'background-image': 'url(' + movieIMGs[loopCounter] + ')'
						});

					// Movie wrapper foreground images
					$_movieWrappersForegroundImages[loopCounter] = $('<img \/>');
					$_movieWrappersForegroundImages[loopCounter]
						.addClass('movieWrappersForegroundImage')
						.attr('src', videoPlayIcon.src)
						.attr('alt', ui_clickToPlayVideo)
						.attr('title', ui_clickToPlayVideo)
						.css({
							'margin-top': ((movieFileHeights[loopCounter] - $_movieWrappersForegroundImages[loopCounter].height() - videoPlayIcon.height) / 2) + 'px',
							'margin-left': ((movieFileWidths[loopCounter] - $_movieWrappersForegroundImages[loopCounter].width() - videoPlayIcon.width) / 2) + 'px'
						});
					$_movieWrappers[loopCounter].append($_movieWrappersForegroundImages[loopCounter]);
				};

			// Is there a YouTube version to embed?
			} else if ($('object', $_movieContainerForms[loopCounter]).exists()) {
				if (is_firefox && is_firefox13up) {
					$_thisHighslideMovieObjectWrapper = $('<div class="highslideMovieObjectWrapper" \/>');
					$_thisHighslideMovieObjectWrapper.css({
						'height': movieFileHeights[loopCounter],
						'overflow': 'visible'
					});

					$('object', $_movieContainerForms[loopCounter]).wrap($_thisHighslideMovieObjectWrapper);
					$(this).prepend($('object', $_movieContainerForms[loopCounter]).parent());
				} else {
					$(this).prepend($('object', $_movieContainerForms[loopCounter]));
				};
			};

			// If the movie container includes a heading
			movieTitles[loopCounter] = '';
			if ($('h2:first, h3:first, h4:first', $_movieContainers[loopCounter]).exists()) {
				movieTitles[loopCounter] = $('h2:first, h3:first, h4:first', $_movieContainers[loopCounter]).text();
			};

			// If the movie container includes a description
			movieDescriptions[loopCounter] = '';
			if ($('p:first', $_movieContainers[loopCounter]).exists()) {
				movieDescriptions[loopCounter] = $('p:first', $_movieContainers[loopCounter]).text();
			};

			// Is this a highslide type video?
			if ($(this).parents('div.highslideVideo').exists()) {
				// Ensure that the movie container's parent has an id attribute, which will be used as the "popupId"
				if (!($(this).parents('div.highslideVideo').attr('id'))) {
					$(this).parents('div.highslideVideo').attr('id', 'highslideMovieContainer' + (loopCounter + 1));
				};

				// Create a "highslideHTML" type link to the video
				$_movieHighslideLinks[loopCounter] = $('<a \/>');
					$_movieHighslideLinks[loopCounter]
						.addClass('highslideHTML medium highslideVideoLink')
						.attr('href', fDPOFL + fN)
						.attr('popupId', $(this).parents('div.highslideVideo').attr('id'))
						.bind('click', function() {
// alert(this.className)
							// return false;
						});
				// $_movieHighslideLinks[loopCounter].addClass('medium')

				// Create a container for the link
				$_movieHighslideLinkContainers[loopCounter] = $('<p \/>');
					$_movieHighslideLinkContainers[loopCounter]
						.addClass('highslideVideoLinkContainer');

				// Is there a posterframe image?
				if ($('img', $_movieContainerForms[loopCounter]).exists()) {
					movieThumbnailImages[loopCounter] = $('img', $_movieContainerForms[loopCounter]);
					movieThumbnailImages[loopCounter].addClass('highslideVideoThumbnail');

					// Add alt attribute
					if (movieTitles[loopCounter] != '') {
						if (movieThumbnailImages[loopCounter].attr('alt') == '') {
							movieThumbnailImages[loopCounter]
								.attr('alt', movieTitles[loopCounter].replace(/<.*?>/gi, ''));
						};
					};
					if (movieDescriptions[loopCounter] != '') {
						movieThumbnailImages[loopCounter]
							.attr('alt', movieThumbnailImages[loopCounter].attr('alt') + ' - ' + movieDescriptions[loopCounter].replace(/<.*?>/gi, ''));
					};
					movieThumbnailImages[loopCounter]
						.attr('title', movieThumbnailImages[loopCounter].attr('alt'));

					// Add the image
					$_movieHighslideLinks[loopCounter].append(movieThumbnailImages[loopCounter]);

				// Else is there a title for the movie?
				} else if (movieTitles[loopCounter] != '') {
					$_movieHighslideLinks[loopCounter]
						.text(movieTitles[loopCounter].replace(/<.*?>/gi, ''))
						.attr('title', movieTitles[loopCounter].replace(/<.*?>/gi, ''));

				// Else is there a description for the movie?
				} else if (movieDescriptions[loopCounter] != '') {
					$_movieHighslideLinks[loopCounter]
						.text(movieDescriptions[loopCounter].replace(/<.*?>/gi, ''))
						.attr('title', movieDescriptions[loopCounter].replace(/<.*?>/gi, ''));

				// Otherwise, use some default link text
				} else {
					$_movieHighslideLinks[loopCounter]
						.text(ui_clickToPlayVideo)
						.attr('title', ui_clickToPlayVideo);
				};

				// Add the link to the document
				if ($_movieHighslideLinks[loopCounter].text() != '') {
					$_movieHighslideLinkContainers[loopCounter].append('<strong>View video: <\/strong>');
				};
				$_movieHighslideLinkContainers[loopCounter].append($_movieHighslideLinks[loopCounter]);
				$(this).parent().after($_movieHighslideLinkContainers[loopCounter]);
			};

			// Lastly, replace the form with the wrapper
			$_movieContainerForms[loopCounter].replaceWith($_movieWrappers[loopCounter]);

			// Alas this currently screws up the YouTube movie embedding... sigh...
			// Movie wrapper foreground images, for print
			/* $_movieWrappersForegroundImagesForPrint[loopCounter] = $('<img \/>');
			$_movieWrappersForegroundImagesForPrint[loopCounter]
				.addClass('movieWrapperForegroundImageForPrint')
				.attr('src', movieIMGs[loopCounter]);
			$_movieWrappersForegroundImagesForPrint[loopCounter].prependTo($_movieWrappers[loopCounter].parent()); */
		});
	};
		// Embed movies
		function PJCT_pI_eM() {
			for (loopCounter in movieClips) {
				$_movieClip = $('#' + movieClips[loopCounter].movieClipId);

				if ($_movieClip.exists()) {
					// if (movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.mov') != -1) {
					if ((movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.mov') != -1) || (movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.mp4') != -1) || (movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.m4v') != -1)) {
						if (is_ipod || is_iphone || is_ipad || is_safari_mobile) {
							$_movieClip
								.html('<embed src="' + movieIMGs[loopCounter] + '" href="' + movieClips[loopCounter].movieClipFile + '" target="myself" controller="false" autoplay="false" scale="1" cache="true" type="video\/quicktime" width="' + movieClips[loopCounter].movieClipWidth + '" height="' + movieClips[loopCounter].movieClipHeight + '" pluginspage="http:\/\/www.apple.com\/quicktime\/download\/" \/>');

						} else {
							$_movieClip
								.attr('movieClipIndex', loopCounter)
								.bind('click', function () {
									currentMovieClipIndex = $(this).attr('movieClipIndex');

									$(this).css({
										'background-image': 'none',
										'cursor': 'default'
									});

									embedQuickTimeMovie(movieClips[currentMovieClipIndex].movieClipFile, movieClips[currentMovieClipIndex].movieClipId, movieClips[currentMovieClipIndex].movieClipPlayerVersion, movieClips[currentMovieClipIndex].movieClipWidth, movieClips[currentMovieClipIndex].movieClipHeight, movieClips[currentMovieClipIndex].movieClipParameters);
								});
						};

					} else if ((movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.f4v') != -1) || (movieClips[loopCounter].movieClipFile.toLowerCase().indexOf('.flv') != -1)) {
						$_movieClip
							.css({
								'background-image': 'none'
						});

						embedFlashMovie(movieClips[loopCounter].movieClipFile, movieClips[loopCounter].movieClipId, movieClips[loopCounter].movieClipPlayerVersion, movieClips[loopCounter].movieClipWidth, movieClips[loopCounter].movieClipHeight, movieClips[loopCounter].movieClipParameters);
					};

					$_movieClip
						.parent().parent().parent().css({ // Is this necessary? And if so, make it better, i.e. $_movieClip.closest('div.movieContainerOuter') or some such selector
							'visibility': 'visible'
						});
				};
			};
		};

	// Restyle content - Initialize highslide
	function PJCT_pI_rC_iH() {
		hs.registerOverlay({
			// overlayId: 'highslideControlbar',
			className: 'highslideControlbar',
			// html: '<div class="closebutton" onclick="return hs.close(this);" title=" Close "><\/div>',
			html: '<div class="closebutton" onclick="PJCT_closeHighslideContent(this);" title=" Close "><\/div>',
			position: 'top right',
			useOnHtml: true,
			fade: 2 // fading the semi-transparent overlay looks bad in IE
		});

		hs.align = 'center';
		hs.dimmingDuration = 200;
		hs.dimmingOpacity = 0.75;
		hs.fadeInOut = true;
		hs.graphicsDir = fDPO + mFPO + '_highslide\/graphics\/';
		hs.minWidth = 300;
		// hs.numberOfImagesToPreload = 1;
		// hs.numberPosition = 'caption';
		// hs.outlineType = 'rounded-white';
		// hs.outlineType = 'outer-glow';
		hs.outlineType = 'drop-shadow';
		hs.outlineWhileAnimating = false;
		hs.padToMinWidth = true;
		hs.preserveContent = false;
		hs.showCredits = false;
		hs.transitions = ['expand', 'crossfade'];
		hs.zIndexCounter = 10000;

		// Before expanding 
		hs.Expander.prototype.onBeforeExpand = function() {
			// ?
		};

		// Before closing
		hs.Expander.prototype.onBeforeClose = function() {
			// ?
		};

		/*
		// Highslide "fixed position" popup mod; requires the "Events" component
		// NOTE: If you use this, force { display: none !important; } for ?.move in the highslide.css file, because they're mutually exclusive functionality
		if (!isMobileVersion && (!(is_ie && !is_ie7up))) {
			hs.extend( hs.Expander.prototype, {
				fix: function(on) {
					var sign = on ? -1 : 1,
						stl = this.wrapper.style;

					if (!on) hs.getPageSize(); // recalculate scroll positions

					hs.setStyles (this.wrapper, {
						position: on ? 'fixed' : 'absolute',
						zoom: 1, // IE7 hasLayout bug,
						left: (parseInt(stl.left) + sign * hs.page.scrollLeft) +'px',
						top: (parseInt(stl.top) + sign * hs.page.scrollTop) +'px'
					});

					if (this.outline) {
						stl = this.outline.table.style;
						hs.setStyles (this.outline.table, {
							position: on ? 'fixed' : 'absolute',
							zoom: 1, // IE7 hasLayout bug,
							left: (parseInt(stl.left) + sign * hs.page.scrollLeft) +'px',
							top: (parseInt(stl.top) + sign * hs.page.scrollTop) +'px'
						});
					};

					this.fixed = on; // flag for use on dragging
				},

				onAfterExpand: function() {
					this.fix(true); // fix the popup to viewport coordinates
				},

				onBeforeClose: function() {
					this.fix(false); // unfix to get the animation right
				},

				onDrop: function() {
					this.fix(true); // fix it again after dragging
				},

				onDrag: function(sender, args) {
					// if (this.fixed) { // only unfix it on the first drag event
						this.fix(true);
					// }
				}
			});
		};
		*/
	};

	// Restyle content - Initialize Highslide image galleries
	function PJCT_pI_rC_iHIG() {
		// flickr photosets
		$('div.flickr-photoset').each( function() {
			$(this).wrapInner('<div class="hidden" \/>');

			$('a:first', $(this)).prependTo($(this));
		});

		// Standard highslide galleries
		$('div.highslideImageGallery').each( function(loopCounter_highslideImageGallery) {
			if (!($(this).attr('id'))) {
				$(this).attr('id', ('highslideImageGallery' + (loopCounter_highslideImageGallery + 1)))
			};

			hs.addSlideshow({
				slideshowGroup: $(this).attr('id'),
				interval: slideshowSlideInterval,
				repeat: false,
				useControls: true,
				// fixedControls: 'fit',
				overlayOptions: {
					// className: 'highslideImageGalleryOverlay',
					opacity: 0.75,
					position: 'bottom center',
					// offsetY: -3,
					hideOnMouseOut: hideHighslideControlsOnMouseOut
				}
			});
		});
	};

	// Restyle content - Initialize highslide HTML
	function PJCT_pI_rC_iHHTMLC() {
		$('div.highslideHTML, div.highslideVideo').each(function() {
			$(this).addClass('highslide-html-content');
		});

		$('div.highslidePopup').each(function() {
			$(this).addClass('highslide-html-content-medium');
		});

		$('div.highslide-html-content p:last').addClass('last');
	};

	// Restyle content - Restyle highslide links
	function PJCT_pI_rC_rHL() {
		// Highslide images
		$('a.highslideImage img, a.highslideImageGallery img').livequery( function() {
			// Remove markup from the alt attribute, while preserving it for the caption
			thisAltText = $(this).attr('alt');
			$(this)
				.attr('highslideCaption', thisAltText)
				.attr('alt', thisAltText.replace(/<.*?>/gi, ''));
			if ($(this).attr('title') == '') {
				$(this).attr('title', $(this).attr('alt'))
			};
		});

		// Highslide image links
		$('a.highslideImage').not('a.highslideImageGallery').each( function() {
			// Set y-position
			// targetYCode = 'innerContainer 0px';

			captionCode = '';

			this.onclick = function() {
				// Has the link been disabled?
				if (hasClass(this, 'disabled')) {
					return false;
				};

				// Caption
				captionCode = '';

				// Is the first childNode a tag?
				if (this.childNodes[0].nodeType == 1) {
					if (this.childNodes[0].tagName.toLowerCase() == 'img') {
						// Grab caption contents
						if (this.childNodes[0].getAttribute('highslideCaption') != '') {
							captionCode = this.childNodes[0].getAttribute('highslideCaption');
						};
					};

				// Otherwise it's a text link
				} else if (this.childNodes[0].nodeType == 3) {
					// Grab caption contents
					if (this.title != '') {
						captionCode = this.title;
					};
				};

				// Call highslide method
				return hs.expand(this, { src: this.getAttribute('href'), captionText: captionCode }); // targetY: targetYCode
			};
		});

		// Highslide image gallery links
		$('a.highslideImageGallery').livequery( function() {
			this.onclick = function() {
				// Has the link been disabled?
				if (hasClass(this, 'disabled')) {
					return false;
				};

				// Grab caption contents
				captionCode = '';
				if (this.childNodes[0].nodeType == 1) {
					if (this.childNodes[0].getAttribute('highslideCaption') != '') {
						captionCode = this.childNodes[0].getAttribute('highslideCaption');
					};
				};

				// Associate the gallery with a thumbnail?
				slideshowCode = '';
				thumbnailCode = '';
				$_highslideParentContainer = $(this).closest('div.highslideImageGallery');
					if ($_highslideParentContainer.attr('id')) {
						slideshowCode = $_highslideParentContainer.attr('id');
					};
					if (!($_highslideParentContainer.hasClass('noThumbnail'))) {
						thumbnailCode = $_highslideParentContainer.attr('id') + '_Thumbnail';
					};

				// Call highslide method
				// if (thumbnailCode == '') {
				// 	return hs.expand(this, { slideshowGroup: slideshowCode, thumbnailId: thumbnailCode, captionText: captionCode });
				// } else {
					return hs.expand(this, { slideshowGroup: slideshowCode, captionText: captionCode });
				// };
			};
		});

		// Highslide HTML links
		$('a.highslideHTML').livequery( function() {
			this.onclick = function() {
				// Has the link been disabled?
				if (hasClass(this, 'disabled')) {
					return false;
				};

				// Popup id
				if (!this.getAttribute('popupId')) {
					if ((this.href.indexOf('#') != -1) && (this.href.indexOf('Anchor') != -1)) {
						this.setAttribute('popupId', (this.href.split('#')[1].split('Anchor')[0]));
					};
				};

				// Popup width
				thisPopupWidth = 480;
				if ($(this).hasClass('medium')) {
					thisPopupWidth = 596;

				} else if (($(this).hasClass('medium-wide')) || ($(this).hasClass('mediumWide'))) {
					thisPopupWidth = 640;

				} else if ($(this).hasClass('wide')) {
					thisPopupWidth = 720;

				} else if (($(this).hasClass('ultra-wide')) || ($(this).hasClass('ultraWide')) || ($(this).hasClass('uber-wide')) || ($(this).hasClass('uberWide'))) {
					thisPopupWidth = 940;
				};
				if (isMobileVersion) {
					thisPopupWidth = 300;
				};
// alert(this.className + '\n\n' + thisPopupWidth)
				// Because IE sucks
				// if (?) {
					if (is_ie) {
						window.onerror = function() {
							return true;
						};
					};
				// };

				// Call Highslide method
				// if (is_firefox) {
				//	return hs.htmlExpand(this, { contentId: this.getAttribute('popupId'), width: thisPopupWidth }); //, height: $('#' + this.getAttribute('popupId')).height() // This causes a highslideHTML popup with subcolumns to incorrectly size height

				// } else {
					if (isMobileVersion) {
						return hs.htmlExpand(this, { contentId: this.getAttribute('popupId'), width: thisPopupWidth, allowWidthReduction: false, allowHeightReduction: false });
					} else {
						return hs.htmlExpand(this, { contentId: this.getAttribute('popupId'), width: thisPopupWidth });
					};
				// };
			};
		});

		// Highslide iframe links
		$('a.highslideIframe').each( function() {
			this.onclick = function() {
				// if (isMobileVersion) {

				// } else {
					// Has the link been disabled?
					if (hasClass(this, 'disabled')) {
						return false;
					};

					// Wrapper class
					thisWrapperClassName = 'highslide-iframe-content';

					// Popup width
					thisPopupWidth = 480;
					if ($(this).hasClass('medium')) {
						thisPopupWidth = 596;

					} else if ($(this).hasClass('medium-wide') || $(this).hasClass('mediumWide')) {
						thisPopupWidth = 640;

					} else if ($(this).hasClass('wide')) {
						thisPopupWidth = 720;

					} else if ($(this).hasClass('ultra-wide') || $(this).hasClass('ultraWide')) {
						thisPopupWidth = 960;
					};
					if (isMobileVersion) {
						thisPopupWidth = 300;
					};

					// Because IE sucks
					// if (?) {
						if (is_ie) {
							window.onerror = function() {
								return true;
							};
						};
					// };

					// Call Highslide method
					return hs.htmlExpand(this, { objectType: 'iframe', width: thisPopupWidth, allowWidthReduction: false, allowHeightReduction: false, wrapperClassName: thisWrapperClassName });
				// };
			};
		});
	};

	// Restyle content - restyle tabbed content
	function PJCT_pI_rC_rTC() {
		// Tabbed content itself
		$('div.tabbed div.tabbedContent div.tab').each( function(loopCounter_TabbedContent) {
			// Last paragraph within each tab
			$('p:last', $(this)).addClass('last');
		});

		var defaultTab = false;
		
		// Links to tabbed content
		$('div.tabbed').each( function(loopCounter_TabbedContentContainer) {
			if($('div.tabbed > ul.tabbedLinks').attr('defaultTab')){
				defaultTab = $('div.tabbed > ul.tabbedLinks').attr('defaultTab');
			}
			
			// For each tabbed link
			$('> ul.tabbedLinks:first li a', $(this)).each( function(loopCounter_tabbedLinks) {
				// Attach click functionality to each tabbed link
				$(this)
					.attr('tabToShow', loopCounter_tabbedLinks)
					.bind('click', function() {
						// If the link is a hash that matches some tabbed content's anchor
						if ($($(this).attr('href')).exists()) {
							// Treat the link as tab nav
							if (!($(this).hasClass('activated'))) {
								// Inactive all sibling tabbed links
								$('li, a', $(this).closest('ul.tabbedLinks')).removeClass('activated');

								// Activate current tabbed link
								$(this).addClass('activated').closest('li').addClass('activated');

								// Hide all tabbed content
								$('div.tabbedContent div.tab', $(this).closest('div.tabbed')).hide();

								// Show relevant tab's content
								$('div.tabbedContent div.tab', $(this).closest('div.tabbed')).eq($(this).attr('tabToShow')).show();
							};

							// Cancel the link navigation
							return false;

						// Otherwise, just follow the link
						} else {
							// doNothing();
						};
				});

				// Set the first tabbed link to be activated
				if (loopCounter_tabbedLinks == 0) {
					// First tabbed link
					$(this)
						.addClass('activated')
						.closest('li').addClass('activated');

					// First tabbed content
					$('div.tabbedContent div.tab', $(this).closest('div.tabbed')).eq(loopCounter_tabbedLinks).show();
				};
			});
		});

		//If there is a default tab attrivbute set, use it to select the tab on load.
		if(defaultTab){
			$('ul.tabbedLinks li a[href=#' + defaultTab + ']').trigger('click');
			//PJCT_sTTOTP();
		}
		
		//NG. The following code does not trigger the tab, its the PJCT_sCBOH2() function that is triggering the tab hash.
		// Show a particular tab, based on the URL?
		if (URLHash) {
			if ($('div.tabbedContent div.tab > a[name=' + URLHash.split('#')[1] + ']:first-child').exists()) {
				$('ul.tabbedLinks li a[href=' + URLHash + ']', $('div.tabbedContent div.tab > a[name=' + URLHash.split('#')[1] + ']:first-child').closest('div.tabbed')).trigger('click');
				PJCT_sTTOTP();
			};
		};
	};

	// Home page subColumn heights
	function PJCT_resizeHomePageSubColumnHeights() {
		if (isMobileVersion) {
			return;
		};

		var homePageSubColumnMaxHeight = 0;

		if ($('div.subColumnContainer div.subColumn3 div.latestNews').exists()) {
			var $_homePageSubColumnContainer = $('div.subColumnContainer div.subColumn3 div.latestNews').closest('div.subColumnContainer');

			$_homePageSubColumnContainer.css({
				// 'overflow': 'hidden',
				'margin-bottom': 0
			});

			$('div.subColumn3', $_homePageSubColumnContainer).each( function() {
				homePageSubColumnMaxHeight = Math.max(homePageSubColumnMaxHeight, $(this).outerHeight());
				// $(this).attr('title', $(this).outerHeight() + '; ' + homePageSubColumnMaxHeight)
			});

			$('div.subColumn3 div.styled', $_homePageSubColumnContainer).animate({
				'min-height': (homePageSubColumnMaxHeight - 28) // Why the fudge factor?
			}, 1000);

			$('div.subColumn3 div.tab', $_homePageSubColumnContainer).animate({
				'min-height': (homePageSubColumnMaxHeight - 69) // Account for the fudge factor, plus the height of the tabs
			}, 1000);
		};
	};

	// Restyle content - restyle subcolumn content
	function PJCT_pI_rC_rSC() {
		// First and last subcolumns
		$('div.subColumnContainer > div.subColumn, div.subColumnContainer > div.subColumnBordered').each( function(loopCounter) {
			if ((loopCounter % 2) == 0) {
				$(this)
					.addClass('subColumnFirst');
			} else if ((loopCounter % 2) == 1) {
				$(this)
					.after('<p class="subColumnRowSeparator clearLeft"><\/p>')
					.addClass('subColumnLast');
			};
		});
		$('div.subColumnContainer > div.subColumn3, div.subColumnContainer > div.subColumn3Bordered').each( function(loopCounter) {
			if ((loopCounter % 3) == 0) {
				$(this)
					.addClass('subColumnFirst');
			} else if ((loopCounter % 3) == 2) {
				$(this)
					.after('<p class="subColumnRowSeparator clearLeft"><\/p>')
					.addClass('subColumnLast');
			};
		});

		// Home page subColumn heights
		if (URLProtocol == 'file:') {
			PJCT_resizeHomePageSubColumnHeights();
		};
	};

	// Restyle content - restyle all styled content
	function PJCT_pI_rC_rASC() {
		// Pull quotes
		$('div.pullQuote').each( function() {
			$(this).addClass('styled styledGrey');
		});

		// Styled divs (mainly in the right side column)
		$('div.styled').each( function() {
			if ($(this).hasClass('styledGrey')) {
				$(this)
					.addClass('greyGradient');
			};

			/* $(this).wrap('<div class="styledContainer"' + styledContainerId + '><\/div>');

			if ($(this).hasClass('leftAligned')) {
				$(this)
					.parent().addClass('leftAligned')
					.end().removeClass('leftAligned');

			} else if ($(this).hasClass('rightAligned')) {
				$(this)
					.parent().addClass('rightAligned')
					.end().removeClass('rightAligned');
			}; */
		});

		$('div.styled > p:last-child, div.styled div.styledInner > p:last-child').addClass('last');

		// User login for
		$('#user-login ul li a').each( function() {
			$(this).addClass('styled');
		});

		// Home page subColumn heights
		// PJCT_resizeHomePageSubColumnHeights();

		// Stay connected content
		$('ul#stayConnected li:even').addClass('odd');
		$('ul#stayConnected li:odd').addClass('even');
	};

	// Restyle all Expand-O-Matic content
	function PJCT_pI_rEOMC() {
		$('div.ExpandOMatic').each( function() {
			$(this).addClass('collapsed');

			$('> *:nth-child(1)', $(this))
				.addClass('ExpandOMaticHeading')
				.prepend('<span class="ExpandOMaticGraphic" title=" Click to expand\/collapse content... " \/><\/span>')
				.bind('click', function() {
					$('span.ExpandOMaticGraphic', $(this)).triggerHandler('click');
				});

			$('> div:nth-child(2)', $(this)).addClass('ExpandOMaticContent');
		});

		$('span.ExpandOMaticGraphic').each( function() {
			$(this).bind('click', function() {
				$(this).toggleClass('expanded');

				$('> div.ExpandOMaticContent', $(this).closest('div.ExpandOMatic')).slideToggle(200);

				return false;

			}).bind('contextmenu', function() {
				return false;
			});
		});

		$('div.ExpandOMatic.preExpand, div.ExpandOMatic.preExpanded').each( function() {
			$('span.ExpandOMaticGraphic:first', $(this)).trigger('click');
		});
	};
		// Restyle Expand-O-Matic function call
		function PJCT_expandIt(EOMSectionToExpand) {
			if ($('div.ExpandOMatic div#' + EOMSectionToExpand).exists()) {
				$('span.ExpandOMaticGraphic', $('div.ExpandOMatic div#' + EOMSectionToExpand).parent()).trigger('click');
			};
		};

		// Expand-O-Matic "expand all" function call
		var expandOMaticExpandAll = 1;
		function PJCT_expandAll() {
			if (expandOMaticExpandAll) {
				$('span.ExpandOMaticGraphic').not('.expanded').trigger('click');

				expandOMaticExpandAll = 0;
			} else {
				$('span.ExpandOMaticGraphic.expanded')
					.trigger('click');

				expandOMaticExpandAll = 1;
			};
		};

	// Restyle teaser content
	function PJCT_pI_rC_restyleTeaserContent() {
		// if (isMobileVersion) {
			// Move content to pefore the previous heading
			$('.moveBeforeHeading').each( function() {
				if ($(this).prev('h2').exists()) {
					$(this).insertBefore($(this).prev('h2'));

				} else if ($(this).prev('h3').exists()) {
					$(this).insertBefore($(this).prev('h3'));

				} else if ($(this).prev('h4').exists()) {
					$(this).insertBefore($(this).prev('h4'));
				};
			});

			// View date event classes
			$('.viewDateEventType_communityevent, .viewDateEventType_greenenergyevent').addClass('styledGreen');
			$('.viewDateEventType_localevent, .viewDateEventType_peterjulianevent').addClass('styledOrange');
			$('.viewDateEventType_nationalevent').addClass('styledPurple');

			$('div.viewDate').each( function() {
				$(this)
					.addClass('greyGradient')
					.wrap($('<div class="viewDateWrapper' + $(this).attr('class').replace('viewDate', '') + '" \/>'));
			});

			$('span.viewDate').each( function() {
				$(this)
					.addClass('greyGradient')
					.wrap($('<span class="viewDateWrapper' + $(this).attr('class').replace('viewDate', '') + '" \/>'));
			});
		// };
	};

	// Restyle content lower carousel
	function PJCT_pI_rC_rCLC() {
		if ($_contentLower.exists() && $_logoCarousel.exists()) {
			if (!isMobileVersion) {
				$_contentLower.addClass('setMinHeight');
				$_logoCarouselOuter.addClass('greyGradientInverted');
			};

			// Add to DOM
			$_logoCarousel
				.wrap($_logoCarouselOuter);

			// Length
			logoCarouselLength = $('a', $_logoCarousel).size();

			// Is it a touchscreen device?
			if (isMobileVersion) {
				var logoCarouselText = ui_swipeToScroll2Fingers;
				if (is_android) {
					logoCarouselText = ui_swipeToScroll1Finger;
				};
				$_contentLower.prepend('<div class="logoCarouselText">' + logoCarouselText + '<\/div>');
			} else {
				$_logoCarouselNav.html('<div class="logoCarouselNavPrev greyGradientInverted"><div class="logoCarouselNavInner greyGradient"><div class="logoCarouselNavPrevIcon" title=" ' + ui_prevText + ' "><\/div><\/div><\/div><div class="logoCarouselNavNext greyGradientInverted activated"><div class="logoCarouselNavInner greyGradient"><div class="logoCarouselNavNextIcon activated" title=" ' + ui_nextText + ' "><\/div><\/div><\/div>');
				$_logoCarouselNav.insertAfter($_logoCarousel);
			};

			// Activate the logo carousel nav?
			if (logoCarouselLength > logoCarouselLengthOffset) {
				$('div.logoCarouselNavNextIcon')
					// .addClass('activated')
					// .closest('div.logoCarouselNavInner').addClass('activated');
			};

			// Resize the logo carousel?
			$_logoCarousel.css({
				'width': (logoCarouselLength * logoCarouselThumnailOuterWidth) // Where logoCarouselThumnailOuterWidth = 150 = $('a', $_logoCarousel).eq(0).outerWidth() + 12, or parseInt($('a', $_logoCarousel).eq(0).css('width')) * 1) + 12
			});

			// First link
			$('a:first', $_logoCarousel).addClass('first');

			// Define how the logo carousel nav works
			$('div.logoCarouselNavPrevIcon, div.logoCarouselNavNextIcon').each( function() {
				// if (!isMobileVersion) {
				$(this)
					.hover( function() {
						if ($(this).hasClass('activated')) {
							// $(this).closest('div.logoCarouselNavPrev, div.logoCarouselNavNext').addClass('activated');
						};
					}, function () {
						if (!($(this).hasClass('activated'))) {
							// $(this).closest('div.logoCarouselNavPrev, div.logoCarouselNavNext').removeClass('activated');
						};
					})
					.bind('mousedown', function() {
						if ($(this).hasClass('activated')) {
							$(this).addClass('depressed');

							// Scroll content lower carousel content
							if ($(this).hasClass('logoCarouselNavPrevIcon')) {
								PJCT_sCLCC('prev');

								logoCarouselNavPrevIconMousedown = setTimeout( function() {
									$('div.logoCarouselNavPrevIcon').trigger('mousedown');
									if (logoCarouselNavPrevIconMousedownInterval >= 300) {
										logoCarouselNavPrevIconMousedownInterval -= 50;
									};
									if (logoCarouselNavAnimationSpeed >= 150) {
										logoCarouselNavAnimationSpeed -= 50;
									};
								}, logoCarouselNavPrevIconMousedownInterval);

							} else if ($(this).hasClass('logoCarouselNavNextIcon')) {
								PJCT_sCLCC('next');

								logoCarouselNavNextIconMousedown = setTimeout( function() {
									$('div.logoCarouselNavNextIcon').trigger('mousedown');
									if (logoCarouselNavNextIconMousedownInterval >= 300) {
										logoCarouselNavNextIconMousedownInterval -= 50;
									};
									if (logoCarouselNavAnimationSpeed >= 150) {
										logoCarouselNavAnimationSpeed -= 50;
									};
								}, logoCarouselNavNextIconMousedownInterval);
							};
						};
					})
					.bind('mouseup', function() {
						if ($(this).hasClass('logoCarouselNavPrevIcon')) {
							clearTimeout(logoCarouselNavPrevIconMousedown);
							logoCarouselNavPrevIconMousedownInterval = logoCarouselNavTimeoutInterval;
							logoCarouselNavAnimationSpeed = logoCarouselNavAnimationInitialSpeed;

						} else if ($(this).hasClass('logoCarouselNavNextIcon')) {
							clearTimeout(logoCarouselNavNextIconMousedown);
							logoCarouselNavNextIconMousedownInterval = logoCarouselNavTimeoutInterval;
							logoCarouselNavAnimationSpeed = logoCarouselNavAnimationInitialSpeed;
						};

						if ($(this).hasClass('activated')) {
							$(this).removeClass('depressed');

							// Stop the content lower carousel animation
							// PJCT_sCLCC('stop');
						};
					});
				// };
			});

			// Define how the logo carousel nav works
			$('div.logoCarouselNavPrevIcon.activated, div.logoCarouselNavNextIcon.activated').livequery( function() {
				$(this).closest('div.logoCarouselNavPrev').addClass('activated');
				$(this).closest('div.logoCarouselNavNext').addClass('activated');
			}, function() {
				$(this).closest('div.logoCarouselNavPrev').removeClass('activated');
				$(this).closest('div.logoCarouselNavNext').removeClass('activated');
			});

			if (logoCarouselAutomatic && !isMobileVersion) {
				// Pause the logo carousel animation
				$_logoCarousel.hover( function() {
					clearTimeout(logoCarouselTimeout);
				}, function() {
					PJCT_pI_rC_aCLC();
				});

				// Automate content lower carousel
				PJCT_pI_rC_aCLC();
			};
		} else {
			if (isMobileVersion && !($_contentLower.html())) {
				$_contentLower.css({'height': 0, 'overflow': 'hidden', 'padding': 0, 'border-top-width': 0});
			};
		};
	};
		// Automate content lower carousel
		function PJCT_pI_rC_aCLC() {
			logoCarouselTimeout = setTimeout( function() {
				if (logoCarouselDirection == 'next') {
					if (logoCarouselIndex < (logoCarouselLength - logoCarouselLengthOffset)) {
						$('div.logoCarouselNavNextIcon').trigger('mousedown');
						$('div.logoCarouselNavNextIcon').trigger('mouseup');

						logoCarouselIndex += 1;
					} else {
						logoCarouselDirection = 'prev';
					};

				} else if (logoCarouselDirection == 'prev') {
					if (logoCarouselIndex) {
						$('div.logoCarouselNavPrevIcon').trigger('mousedown');
						$('div.logoCarouselNavPrevIcon').trigger('mouseup');

						logoCarouselIndex -= 1;
					} else {
						logoCarouselDirection = 'next';
					};
				};
$_logoCarousel.prop('title', logoCarouselIndex);
				// Recall this function
				PJCT_pI_rC_aCLC();
			}, logoCarouselInterval);
		};

		// Scroll content lower carousel content
		function PJCT_sCLCC(scrollDirection) {
			if (scrollDirection == 'prev') {
				if ((parseInt($_logoCarousel.css('margin-left')) * 1) >= 0) {
					$_logoCarousel.css({
						'margin-left': 0
					});

				} else {
					$_logoCarousel.animate({
						'margin-left': ((parseInt($_logoCarousel.css('margin-left')) * 1) + logoCarouselThumnailOuterWidth)

					}, { queue: false, duration: logoCarouselNavAnimationSpeed, easing: 'easeInOutCirc', complete: function() {
						PJCT_sCLCC('stop');

						// Ensure that the margin ends up in an acceptable quantum state
						if ((((parseInt($_logoCarousel.css('margin-left')) * 1) % logoCarouselThumnailOuterWidth)) && (!is_chrome)) {
							$_logoCarousel.css({
								// 'margin-left': ((parseInt($_logoCarousel.css('margin-left')) * 1) - ((parseInt($_logoCarousel.css('margin-left')) * 1) % logoCarouselThumnailOuterWidth))
							});
						};
					}});
				};

			} else if (scrollDirection == 'next') {
				if (((parseInt($_logoCarousel.css('margin-left')) * 1) <= '-' + ((parseInt($_logoCarousel.css('width')) * 1) - 925)) || (((parseInt($_logoCarousel.css('margin-left')) * 1) <= '-' + ((parseInt($_logoCarousel.css('width')) * 1) - 926)))) { // 925 = 5 * 185
					$_logoCarousel.css({
						'margin-left': '-' + ($_logoCarousel.outerWidth() - $_logoCarouselOuter.width() + 29) // 29 = 5 + 1 + 17 + 1 + 5, margin border width border padding
					});

				} else {
					$_logoCarousel.animate({
						'margin-left': Math.round((parseInt($_logoCarousel.css('margin-left')) * 1) - logoCarouselThumnailOuterWidth)
					}, { queue: false, duration: logoCarouselNavAnimationSpeed, easing: 'easeInOutCirc', complete: function() {
						PJCT_sCLCC('stop');

						// Ensure that the margin ends up in an acceptable quantum state
						if ((((parseInt($_logoCarousel.css('margin-left')) * 1) % logoCarouselThumnailOuterWidth)) && (!is_chrome)) {
							$_logoCarousel.css({
								// 'margin-left': '-' + ((parseInt($_logoCarousel.css('margin-left')) * 1) - ((parseInt($_logoCarousel.css('margin-left')) * 1) % logoCarouselThumnailOuterWidth))
							});
						};
					}});
				};

			} else {
				$_logoCarousel.stop();

				if ((parseInt($_logoCarousel.css('margin-left')) * 1) >= 0) {
					$('div.logoCarouselNavPrevIcon').removeClass('activated');
					$('div.logoCarouselNavNextIcon').addClass('activated');

				} else if (((parseInt($_logoCarousel.css('margin-left')) * 1) <= '-' + ((parseInt($_logoCarousel.css('width')) * 1) - 925)) || (((parseInt($_logoCarousel.css('margin-left')) * 1) <= '-' + ((parseInt($_logoCarousel.css('width')) * 1) - 926)))) {
					$('div.logoCarouselNavPrevIcon').addClass('activated');
					$('div.logoCarouselNavNextIcon').removeClass('activated');

				} else {
					$('div.logoCarouselNavPrevIcon').addClass('activated');
					$('div.logoCarouselNavNextIcon').addClass('activated');
				};
			};
		};

// Restyle footer
function PJCT_pI_rF() {
	if ($_footer.exists()) {
		// Footer content
		if ($_footerContent.exists()) {
			$('div.subColumn3', $_footerContent).eq(2)
				.wrapInner('<div class="subColumnInner" \/>');

			$_footerContainerInner.append($_footerContent);
		};

		// Copyright
		if ($_copyright.exists()) {
			// Accessibility info
			if ($_accessibilityInfo.exists()) {
				$('p:first', $_copyright).prepend($_accessibilityInfo);
			};

			// Footer utility navigation
			if ($_footerUtilityNav.exists()) {
				// Do something dynamic with topOfPageLinkContainer?
				if (isMobileVersion) {
					$('li', $_footerUtilityNav).not(':first').prepend($('<span class="footerUtilityNavSeparator">&#183;<\/span>'));
				} else {
					$('li', $_footerUtilityNav).prepend($('<span class="footerUtilityNavSeparator">&#183;<\/span>'));
				};
				$('p:first', $_copyright).append($_footerUtilityNav);
				// $_footerUtilityNav).appendTo($('p:first', $_copyright)));
				$_footerUtilityNav.wrap('<span id="footerUtilityNavWrapper" \/>'); // For IE's benefit
			};

			$_footerContainerInner.append($_copyright);
		};

		// Footer utility navigation
		if ($_footerUtilityNav.exists()) {
			// $_footerContainerInner).append($_footerUtilityNav));
		};

		// Add to the DOM
		$_footerContainerOuter.append($_footerContainerInner);
		// $_body.append($_footerContainerOuter);
		$_pageContainerInner.append($_footerContainerOuter);

		// Junk the old footer container
		$_footer.remove();
	};
};

// Initialize livequeries
function PJCT_pI_iLQ() {
	// View-source links
	$('a.view-source, a.viewSource').livequery( function() {
		if (!is_safari) {
			$(this)
				.attr('target', 'ViewSource')
				.attr('title', 'View the source of "' + $(this).attr('href') + '" in a new window\/tab...')
				.attr('href', 'view-source:' + $(this).attr('href'));
		};
	});

	// Cloaked email links
	$('a.cloakedEmail').livequery( function() {
		if (($(this).attr('href').indexOf('%28-at-%29') != -1) && ($(this).attr('href').indexOf('mailto:') != -1)) {
			emailAddressHTMLTemp = $(this).attr('href').split('%28-at-%29');
			emailAddressHTML = emailAddressHTMLTemp[0] + '@' + emailAddressHTMLTemp[1];
			$(this).attr('href', emailAddressHTML);

			if ($(this).text().indexOf('%28-at-%29') != -1) {
				if (emailAddressHTML.split('mailto:')[1].split('?').length == 0) {
					$(this).text(emailAddressHTML.split('mailto:')[1]);
				} else {
					$(this).text(emailAddressHTML.split('mailto:')[1].split('?')[0]);
				};
			};
		};

		if (($(this).attr('href').indexOf('(-at-)') != -1) && ($(this).attr('href').indexOf('mailto:') != -1)) {
			emailAddressHTMLTemp = $(this).attr('href').split('(-at-)');
			emailAddressHTML = emailAddressHTMLTemp[0] + '@' + emailAddressHTMLTemp[1];
			$(this).attr('href', emailAddressHTML);

			if ($(this).text().indexOf('(-at-)') != -1) {
				if (emailAddressHTML.split('mailto:')[1].split('?').length == 0) {
					$(this).text(emailAddressHTML.split('mailto:')[1]);
				} else {
					$(this).text(emailAddressHTML.split('mailto:')[1].split('?')[0]);
				};
			};
		};
	});
	$('span.cloakedEmail').livequery( function() {
		if (($(this).attr('title').indexOf('%28-at-%29') != -1)) {
			emailAddressHTMLTemp = $(this).attr('title').split('%28-at-%29');
			emailAddressHTML = emailAddressHTMLTemp[0] + '@' + emailAddressHTMLTemp[1];
			$(this)
				.attr('title', '')
				.wrapInner($('<a href="mailto:' + emailAddressHTML + '" \/>'));

		} else if (($(this).attr('title').indexOf('(-at-)') != -1)) {
			emailAddressHTMLTemp = $(this).attr('title').split('(-at-)');
			emailAddressHTML = emailAddressHTMLTemp[0] + '@' + emailAddressHTMLTemp[1];
			$(this)
				.attr('title', '')
				.wrapInner($('<a href="mailto:' + emailAddressHTML + '" \/>'));
		};
	});

	// External links
	$('a.external').livequery( function() {
		thisLinksWindowName = '_blank';

		if ($(this).attr('class').indexOf('external ') != -1) {
			thisLinksWindowName = $(this).attr('class').split(' ')[($(this).attr('class').split(' ').length - 1)]; // .replace(regExpStr03,'');
		};

		$(this).attr('target', thisLinksWindowName);

		if (!($(this).attr('title'))) {
			$(this).attr('title', ' ' + ui_lOIANWT + '... ');
		};
	});

	// Secondary window links
	$('a.secondaryWindow').livequery( function() {
		$(this).bind('click', function() {
			var thisLinksSecondaryWindowWidth = 600;
				if ($(this).attr('secondaryWindowWidth')) {
					thisLinksSecondaryWindowWidth = $(this).attr('secondaryWindowWidth');
				};

			var thisLinksSecondaryWindowHeight = 600;
				if ($(this).attr('secondaryWindowHeight')) {
					thisLinksSecondaryWindowHeight = $(this).attr('secondaryWindowHeight');
				};

			return PJCT_cSWS($(this).attr('href'), thisLinksSecondaryWindowWidth, thisLinksSecondaryWindowHeight);
		});
	});

	// Popup links
	$('a.popup').livequery( function() {
		$(this)
			.attr('popupId', ($(this).attr('href').split('#')[1].split('Anchor')[0] + 'Container'))
			.bind('click', function() {
				return dPOTT(e, $(this).attr('popupId'));
			});
	});

	// Fake links
	$('a.fake').livequery( function() {
		$(this)
			.bind('click', function() {
				return false;
			});
	});

	// Tel links
	$('a.tel').livequery( function() {
		if (!is_iphone) {
			$(this)
				.bind('click', function() {
					return false;
				})
				.hover( function() {
					setWindowStatus('');
					return true;
				}, function() {

				});
		};
	});

	// Invisible links
	$('a.invisible, a.invisibleLink, a.hiddenLink').livequery( function() {
		$(this)
			.hover( function() {
				setWindowStatus('');
				return true;
			}, function() {

			});
	});

	// Image links
	$('a > img').livequery( function() {
		if (!($(this).hasClass('styled'))) {
			$(this)
				.css({
					'border': '0px dashed lime'
				})
				.parent('a').css({
					'border': '0px dashed lime'
				});
		};
	});

	// Diabled links
	$('div.disabled a').livequery( function() {
		$(this).addClass('disabled');
	}, function() {
		$(this).removeClass('disabled');
	});
	// And for non-Highslide and other fancified links
	$('a.disabled').livequery( function() {
		$(this).bind('click.disabled', function() {
			return false;
		});
	}, function() {
		$(this).unbind('click.disabled');
	});

	// Diabled form elements
	$('div.disabled button, div.disabled input, div.disabled select, div.disabled textarea').livequery( function() {
		if (($(this).attr('disabled') == true) || ($(this).attr('disabled') == 'disabled')) { // ($(this).attr('disabled')) || 
			$(this).attr('tobedisabled', 1);
		};

		$(this)
			.addClass('disabled')
			.attr('disabled', 'disabled');

	}, function() {
		$(this)
			.removeClass('disabled');

			if (is_firefox) {
				$(this).removeAttr('tobedisabled');
			};

		if (($(this).attr('tobedisabled')) || ($(this).attr('tobedisabled') == true)) {
			
		} else {
			$(this)
				.attr('disabled', 'false')
				.removeAttr('disabled');
		};
	});

	// Tooltips
	$('span.tooltip').livequery( function() {
		thisExtraClass = '';

		// Add "click-to-close" code
		// if (is_ipod || is_ipad || is_iphone || is_safari_mobile) {
			$(this).bind('click', function() {
				$(this).hide();
			});
		// };

		// Add alignment class?
		if ($(this).hasClass('leftAligned')) {
			thisExtraClass = ' leftAligned';

		} else if ($(this).hasClass('rightAligned')) {
			thisExtraClass = ' rightAligned';
		};

		if ($(this).prev('a.tooltipLink').exists()) {
			// ?

		} else if (!($(this).closest($_primaryNav).exists())) {
			$(this)
				.before($('<a class="tooltipIcon' + thisExtraClass + '" href="#topOfPage" \/>'));
		};
	});
	$('a.tooltipIcon, a.tooltipLink').livequery( function() {
		// Positional offsets
		leftOffset = 0;
		topOffset = 10;
		if (is_ipad) {
			// topOffset -= ($(window).height());
		};

		// Add tooltip functionality
		$(this)
			.bind('click', function() { 
				return false; 
			})
			.tooltip({ 
				delay: 300,
				position: 'top center',
				relative: true,
				offset: [topOffset, leftOffset],
				effect: 'slide'
			})
			.dynamic({
				// ?
			})
	});
};

// Show content based on hash
function PJCT_sCBOH() {
	// Show the take action content, if forced to do so
	if (takeActionForced) {
		PJCT_sCBOH2('takeAction');

	// Otherwise, show the take action content, based on the URL?	
	} else if (URLHash) {
		hashTagMatchesOneInArray = 0;

		// For hashes that match a primary nav item or an in-page anchor
		for (var loopCounter_hashTagPointers = 0; loopCounter_hashTagPointers < hashTagPointers.length; loopCounter_hashTagPointers++) {
			if (URLHash.toLowerCase() == ('#' + hashTagPointers[loopCounter_hashTagPointers][0].toLowerCase())) {
				hashTagMatchesOneInArray = 1;
				hashTagPointerIndex = loopCounter_hashTagPointers;

				// For hashes -- in the hashTagPointers array -- that match a primary nav item
				if ($('a.primaryNav[href=#' + hashTagPointers[hashTagPointerIndex][1] + 'Anchor]').exists()) {
					// Trigger a click on the corresponding primary nav item, thereby scrolling to the corresponding section
					$('a.primaryNav[href=#' + hashTagPointers[hashTagPointerIndex][1] + 'Anchor]').trigger('click');

				// For hashes -- in the hashTagPointers array -- that match an id'd link
				} else if (($('a[id=' + hashTagPointers[hashTagPointerIndex][1] + ']').exists()) && ($('a[id=' + hashTagPointers[hashTagPointerIndex][1] + ']').attr('href'))) {
					// Trigger a click on the corresponding primary nav item, thereby scrolling to the corresponding section
					$('a.primaryNav[href*=' + ($('a[id=' + hashTagPointers[hashTagPointerIndex][1] + ']').closest('div.contentSection').attr('id') + 'Anchor') + ']').trigger('click');

					// Trigger a click on the corresponding link
					$('a[id=' + hashTagPointers[hashTagPointerIndex][1] + ']').trigger('click');

				// For hashes -- in the hashTagPointers array -- that match an in-page anchor
				} else if ($('a[href*=' + hashTagPointers[hashTagPointerIndex][1] + ']:first').exists()) {
					// Trigger a click on the corresponding primary nav item, thereby scrolling to the corresponding section
					$('a.primaryNav[href*=' + ($('a[href*=' + hashTagPointers[hashTagPointerIndex][1] + ']:first').closest('div.contentSection').attr('id') + 'Anchor') + ']').trigger('click');

					// Trigger a click on the corresponding link
					$('a[href*=' + hashTagPointers[hashTagPointerIndex][1] + ']:first').trigger('click');

				// For hashes -- in the hashTagPointers array -- that match an in-page anchor
				} else if ($('a[name=' + hashTagPointers[hashTagPointerIndex][1] + ']').exists()) {
					// Show content based on hash, pt2
					PJCT_sCBOH2(hashTagPointers[hashTagPointerIndex][1]);
				};
			};
		};

		// For hashes NOT in the hashTagPointers array
		if (!hashTagMatchesOneInArray) {
			if (URLHash.split('#')[1] != 'topOfPage') {
				// Show content based on hash, pt2
				PJCT_sCBOH2(URLHash.split('#')[1]);
			};
		};

	// Lastly, show the take action content if it hasn't already been shown to the user
	} else {
		// Does the take action cookie exist?
		if (getCookie('takeAction')) {
			// Does the take action cookie say that some other take action content was last viewed? Then show the take action content
			if ((getCookie('takeAction')) != ($_takeActionContent.attr('id'))) {
				PJCT_sCBOH2('takeAction');
			};

		// Otherwise show the take action content
		} else {

			// Set a cookie to indicate that the take action content has been viewed
			if ($_takeActionContent.attr('id')) {
				storeIntelligentCookie('takeAction',$_takeActionContent.attr('id'),nextYear,'\/',masterCookieDomain); // Instead of nextYear... do I need to pass a null, rather than an empty paramter?!?
			};

			if (URLProtocol != 'file:') {
				PJCT_sCBOH2('takeAction');
			};
		};
	};
};
	// Show content based on hash, pt2
	function PJCT_sCBOH2(hashTag) {
		// Is it an id'd link?
		if (($('a[id=' + hashTag + ']').exists()) && ($('a[id=' + hashTag + ']').attr('href'))) {
			// Scroll to the corresponding section
			// $('a.primaryNav[href*=' + ($('a[id=' + hashTag + ']').closest('div.contentSection').attr('id')) + ']').trigger('click');

			// Wait, then click the link
			setTimeout( function() {
				$('a[id=' + hashTag + ']').trigger('click');
			}, 500);

		// Or is it an href'd link?
		} else if ($('a[href*=' + hashTag + ']:first').exists()) {
			// Scroll to the corresponding section
			// $('a.primaryNav[href*=' + ($('a[href*=' + hashTag + ']:first').closest('div.contentSection').attr('id') + 'Anchor') + ']').trigger('click');

			// Wait, then click the link
			setTimeout( function() {
				$('a[href*=' + hashTag + ']:first').trigger('click');
			}, 1000);

		// Or is it a named anchor?
		} else if ($('a[name=' + hashTag + ']').exists()) {
			// Wait, then scroll to the corresponding section
			setTimeout( function() {
				PJCT_sTP((Math.floor($('a[name=' + hashTag + ']').offset().top) - 82), 500);
			}, 1000);
		};
	};

// Initialize document scroll watcher
function PJCT_pI_iDSW() {
	// Scroll to top, for mobile devices
	if (isMobileVersion) {
		if (URL.indexOf('_test_page_v2') == -1) {
			// setTimeout( function() {
				$('html, body', top.document).stop().animate({
					scrollTop: 0
				});
			// }, 2000);
		};

		// How tall is the take action content?
		$_takeActionContainer.css({
			'opacity': 0,
			'display': 'block'
		});
		theMagicNumber01 = ($_takeAction.height() + (29 - 9)); // Where 29 is the height of the takeActionIcon, and 9 is the takeAction bottom border width
		$_takeActionContainer.css({
			'display': 'none',
			'opacity': 1
		});

		// Scroll watchers
		$(window).bind('scrollstart, scroll', function() {
			// Are we still "above" where the primary nav naturally sits?
			if ($(document).scrollTop() < theMagicNumber01) {
				$_body.removeClass('takeActionContentOutOfView');

			// Or have we scrolled to a spot "below" where the primary nav naturally sits?
			} else if ($(document).scrollTop() > theMagicNumber01) {
				$_body.addClass('takeActionContentOutOfView');
			};
		});
		$(window).bind('scrollstop', function() {
			// Have we scrolled to a spot "below" where the primary nav naturally sits?
			if ($(document).scrollTop() > theMagicNumber01) {
				$_body.addClass('takeActionContentOutOfView');
			};
		});
	};
};

// Rework body tag
function PJCT_pI_rCBT() {
	// Get rid of Drupal "stuff"... why was this needed, anyway?
	// $('div.block-region').remove();
	// $('div.block-region').contents().unwrap(); // Remove the block-region div, but leave its contents in place?

	// Hide CAPTCHA iframe
	$('iframe[src="about:blank"]').css({
		'display': 'none'
	});

	// Restructure the body
	$_pageContainerOuter.append($_pageContainerInner);
	$_body.append($_pageContainerOuter);

	// Body class
	// if ($_body) {
		$_body.addClass('restyled' + skinPreference.toUpperCase());

		if (pageType != '') {
			$_body.addClass(pageType);
		};

		if (isHomePage || $_body.hasClass('front')) {
			$_body.addClass('homePage');
		};

		if ($_body.hasClass('no-sidebars')) {
			$_body.addClass('fullWidth');
		};

		if (isMobileVersion) {
			$_body.addClass('mobileVersion');
		};

		if ($_toolbar.exists()) {
			$_body.addClass('withAdminToolbar');
		};

		if ($_toolbarDrawer.exists()) {
			$_body.addClass('withAdminToolbarDrawer');
		};

		if (getCookie('documentFontSize')) {
			$_body.addClass(documentFontSizes[getCookie('documentFontSize')]);
			documentFontSizesIndex = getCookie('documentFontSize');
		} else {
			$_body.addClass(documentFontSizes[1]);
			documentFontSizesIndex = 1;
		};
	// };

	// Add "viewport" meta tags for various mobile/handheld devices... Should any of these be set to some other width?!?
	if (is_ipad) {
		$_viewportMetaTag = $('<meta name="viewport" content="width=1024" \/>');
		$_head.append($_viewportMetaTag);
	};
	if (is_iphone || is_ipod || is_safari_mobile || is_android) {
		if (isMobileVersion) {
			// $_viewportMetaTag = $('<meta name="viewport" content="width=320" \/>');

			// if (true) {
				if (window.orientation == 0) {
					$_body.removeClass('landscape');

					// $_viewportMetaTag = $('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" \/>');
					$_viewportMetaTag = $('<meta name="viewport" content="width=320, initial-scale=1.0" \/>');
					// $_head.append($_viewportMetaTag);
				} else {
					$_body.addClass('landscape');

					// $_viewportMetaTag = $('<meta name="viewport" content="device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" \/>');
					$_viewportMetaTag = $('<meta name="viewport" content="width=480, initial-scale=1.0" \/>');
					// $_head.append($_viewportMetaTag);
				};

				$_body.bind('orientationchange', function() {
					if (window.orientation == 0) {
						$_body.removeClass('landscape');

						// $('meta[name=viewport]').attr('content', 'width=320');
						$('meta[name=viewport]').remove();

						// $_viewportMetaTag = $('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" \/>');
						$_viewportMetaTag = $('<meta name="viewport" content="width=320, initial-scale=1.0" \/>');
						$_head.append($_viewportMetaTag);

						if ($_bannerContainer.exists()) {
							$('#bannerContainerInner').css({
								'width': 320,
								'height': 330
							});
							$_bannerContainer.css({
								'width': 320,
								'height': 300
							});
							$('div.slidesOuter', $_bannerContainer).css({
								'width': 320,
								'height': 300
							});
							$('div.slide', $_bannerContainer).css({
								'width': 320,
								'height': 300
							});
							$('div.slidesOuter', $_bannerContainer).attr('sliderWidth', 320);
							$('div.slides', $_bannerContainer).css({
								'width': ($('div.slides div.slide', $_bannerContainer).size() * 320)
							});
						};

					} else {
						$_body.addClass('landscape');

						// $('meta[name=viewport]').attr('content', 'width=480');
						$('meta[name=viewport]').remove();

						// $_viewportMetaTag = $('<meta name="viewport" content="device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" \/>');
						$_viewportMetaTag = $('<meta name="viewport" content="width=480, initial-scale=1.0" \/>');
						$_head.append($_viewportMetaTag);

						if ($_bannerContainer.exists()) {
							$('#bannerContainerInner').css({
								'width': 480,
								'height': 430
							});
							$_bannerContainer.css({
								'width': 480,
								'height': 400
							});
							$('div.slidesOuter', $_bannerContainer).css({
								'width': 480,
								'height': 400
							});
							$('div.slide', $_bannerContainer).css({
								'width': 480,
								'height': 400
							});
							$('div.slidesOuter', $_bannerContainer).attr('sliderWidth', 480);
							$('div.slides', $_bannerContainer).css({
								'width': ($('div.slides div.slide', $_bannerContainer).size() * 480)
							});
						};
					};
				});
			// };

		} else {
			$_viewportMetaTag = $('<meta name="viewport" content="width=1024" \/>');
		};

		$_head.append($_viewportMetaTag);

	} else if (is_blackberry) {
		if (isMobileVersion) {
			$_viewportMetaTag = $('<meta name="viewport" content="width=320" \/>');
		} else {
			$_viewportMetaTag = $('<meta name="viewport" content="width=1024, initial-scale=0.33" \/>');
		};

		$_head.append($_viewportMetaTag);
	};
};

// Reflow the page
function PJCT_rFP() {
	// HTML
	$_html = $('html');

	// Head
	$_head = $('head');

	// Body
	$_body = $('body');

	// Page container elements
	$_pageContainerOuter = $('<div id="pageContainerOuter" \/>');
		$_pageContainerInner = $('<div id="pageContainerInner" \/>');

	// Top of content
	$_topOfPageAnchorContainer = $('#topOfPageAnchorContainer');

	// Admin toolbar
	$_toolbar = $('#toolbar');
	$_toolbarDrawer = $('div.toolbar-drawer');

	// Header elements
	$_header = $('#header');
		$_mobileMenuContainer = $('#mobileMenuContainer');
			$_mobileMenu = $('#mobileMenu');
		$_logoContainer = $('#logoContainer');
			$_logo = $('#logo');
		$_startOfContentLinkContainer = $('#startOfContentLinkContainer');
		$_primaryNav = $('#primaryNav');
		$_utilityNav = $('#utilityNav');
		$_search = $('#search');
			$_searchForm = $('#search-block-form');
				if (!$_searchForm.exists()) {
					// $_searchForm = $('#search-theme-form');
				};
			$_searchTextField = $('input.form-text:first', $_searchForm);
			$_searchSubmitButton = $('input.form-submit:first', $_searchForm);
		$_socialMediaLinks = $('#socialMediaLinks');
		$_takeAction = $('#takeAction');
			$_takeActionHeader = $('#takeActionHeader');
				if (!$_takeActionHeader.exists()) {
					$_takeActionHeader = $('<div id="takeActionHeader" \/>');
				};
			$_takeActionContent = $('#takeAction div.takeActionContent');
			$_takeActionLeftColumn = $('#takeActionLeftColumn');
			$_takeActionRightColumn = $('#takeActionRightColumn');
			$_takeActionForm = $('#takeActionForm');
				$_takeActionFormFirstNameField = $('input[name="first_name"]', $_takeActionForm);
				$_takeActionFormLastNameField = $('input[name="last_name"]', $_takeActionForm);
				$_takeActionFormEmailField = $('input[name="email-Primary"]', $_takeActionForm);
				$_takeActionFormPostalField = $('input[name="postal_code-Primary"]', $_takeActionForm);
				//$_takeActionFormSubmitButton = $('input.form-submit:first', $_takeActionForm);
				$_takeActionFormSubmitButton = $('input[type="submit"]:first', $_takeActionForm);

	$_takeActionContainer = $('<div id="takeActionContainer" \/>');

	$_headerContainerOuter = $('<div id="headerContainerOuter" \/>');

		$_headerContainerInner = $('<div id="headerContainerInner" \/>');

			$_searchContainer = $('<div id="searchContainer" \/>');

			$_primaryNavContainer = $('<div id="primaryNavContainer" \/>');
				$_primaryNavContainerInner = $('<div id="primaryNavContainerInner" \/>');

			$_utilityNavContainer = $('<div id="utilityNavContainer" \/>');

			$_documentFontSizer = $('<div id="documentFontSizer" \/>');

			$_socialMediaLinksContainer = $('<div id="socialMediaLinksContainer" \/>');


	// Start of content
	$_startOfContentAnchorContainer = $('#startOfContentAnchorContainer');

	// Content elements
	$_content = $('#content');
		$_contentUpper = $('#contentUpper');
		$_breadCrumbNav = $('#breadCrumbNav');
		$_leftColumn = $('#leftColumn');
		$_rightColumn = $('#rightColumn');
		$_bannerContainer = $('#bannerContainer');
			$_banner = $('#banner');
		$_contentLower = $('#contentLower');
			$_logoCarousel = $('#logoCarousel');

	$_contentContainerOuter = $('<div id="contentContainerOuter" \/>');
		$_bannerContainerOuter = $('<div id="bannerContainerOuter" \/>');
		$_contentContainerInner = $('<div id="contentContainerInner" \/>');
			// $_breadCrumbNavContainer = $('<div id="breadCrumbNavContainer" \/>');
			$_leftColumnContainer = $('<div id="leftColumnContainer" \/>');
			$_rightColumnContainer = $('<div id="rightColumnContainer" \/>');

			$_logoCarouselOuter = $('<div id="logoCarouselOuter" \/>');
			$_logoCarouselNav = $('<div id="logoCarouselNav" \/>');

	// Footer elements
	$_footer = $('#footer');
		$_footerContent = $('#footerContent');
		$_copyright = $('#copyright');
		$_accessibilityInfo = $('#accessibilityInfo');
		$_footerUtilityNav = $('#footerUtilityNav');

	$_footerContainerOuter = $('<div id="footerContainerOuter" \/>');

		$_footerContainerInner = $('<div id="footerContainerInner" \/>');

	// Rework body tag
	PJCT_pI_rCBT();

	// Restyle take action content
	// PJCT_pI_rTAC();

	// Restyle header
	PJCT_pI_rH();

	// Restyle content
	PJCT_pI_rC();

	// Menu initialization
	menuLoader = setInterval('PJCT_pI_mI();', 500);

	// Restyle content - restyle sliders, pt 2
	PJCT_pI_rC_restyleSliders2();

	// Initialize livequeries
	PJCT_pI_iLQ();

	// Restyle footer
	PJCT_pI_rF();

	// Embed movies
	PJCT_pI_eM();

	// Initialize document scroll watcher
	PJCT_pI_iDSW();

	// Show/hide back to top link
	PJCT_sHBTTL();

	// Show content based on hash
	PJCT_sCBOH();

	// Scroll to top, for mobile devices
	if (isMobileVersion) {
		// setTimeout( function() {
			$('html, body', top.document).stop().animate({
				scrollTop: 0
			});
		// }, 2000);
	};
};

function pI() { // pageInitialization
	if ((!document.getElementById) || (is_wince)) {
		return;
	};

	PJCT_rFP(); // reflowPage

	// Window onresize
	$(window).bind('resize', function() { PJCT_positionHeaderElements(); });
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Debugging */

dMsg += 'The ' + sSFN + dSFN + 'pjct_page_elements_' + sSPEJSV + '.js script has been loaded|';
// alert('The ' + sSFN + dSFN + 'pjct_page_elements_' + sSPEJSV + '.js script has been loaded|');

