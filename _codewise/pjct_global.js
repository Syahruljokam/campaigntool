

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Codewise Presentation Manager - Global Script File, 
	Peter Julian, Campaign Tool

Copyright (c) 2004-2013 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Created: 2013-08-16

Revision History:
  0.01	- Initial version. TB, 2013-08-16, ??:??

To Do List:
	- add blank page stuff from EITR project

	- log into the common JIRA system and make sure we can use it

	- integrate simulated CiviCRM content for test pages

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Misc redeclared variables */

availableLanguages = ['en','fr'];
languagePreference = 'en';

siteTitle = 'Peter Julian, Campaign Tool';
skinPreference = 'pjct';
sSPEJSV = '0-13';
sSIPSJSV = 'n\/a';
sSLCSSV = '0-12';
sSMCSSV = '0-03'; // You MUST update the equivalent of this in the "pjct_mobile.css" file too!
sSPCSSV = '0-01';
fJSV = 'n\/a';

copyrightYear = '2013';
dFN = 'index.html';

QuickTimeDetection = 0;

masterCookieDomain = '.ndp.ca';
liveServerName = 'http:\/\/peterjulian.ndp.ca';
	// masterCookieDomain = 'http:\/\/204.244.185.88';
	// liveServerName = 'http:\/\/204.244.185.88';
	masterCookieDomain = '.campaigntool.ca';
	liveServerName = 'http:\/\/campaigntool.ca';
webServerName = liveServerName;


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Misc new variables */

var documentFontSizesIndex = 1;
var documentFontSizes = new Array;
	documentFontSizes = ['smallFontSize', 'mediumFontSize', 'largeFontSize', 'extraLargeFontSize'];

var logoCarouselAutomatic = 0;
var logoCarouselAnimationPaused = 0;
var logoCarouselIndex = 0;
var logoCarouselLength = 0;
var logoCarouselLengthOffset = 5;
var logoCarouselCounter = 0;
var logoCarouselInterval = 3000;
var logoCarouselTimeout = null;
var logoCarouselDirection = 'next';
var logoCarouselThumnailOuterWidth = 277;
var logoCarouselNavAnimationInitialSpeed = 800;
var logoCarouselNavAnimationSpeed = logoCarouselNavAnimationInitialSpeed;
var logoCarouselNavTimeoutInterval = 1200;
var logoCarouselNavPrevIconMousedown;
var logoCarouselNavPrevIconMousedownInterval = logoCarouselNavTimeoutInterval;
var logoCarouselNavNextIconMousedown;
var logoCarouselNavNextIconMousedownInterval = logoCarouselNavTimeoutInterval;

var menuLoaderForced = 0;

var postalCodeRegExp = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;

var scrollPageBodySelectorText = 'html, body';

var sliderCounter = 0;
var sliderIndex = new Array();
var sliderInterval = 5000;
var sliderAutomatic = 1;
var sliderContinuous = 1;
var sliderLength = new Array();
var sliderSpeed = 600;
var sliderVertical = 0;
var sliderTransition = 'slide'; // Choose from 'slide' and 'fade'
	if (sliderTransition == 'fade') {
		if (is_ie && !is_ie7up) {
			sliderTransition = 'slide';
		};

		// sliderSpeed = 400;
	};

var threeColumnLayoutForced = 0;

// Movie embedding
var movieWrapperFileName = 'media\/flash\/flash_movie_player_01.swf';
var movieWrapperHeightOffset = 20;

var movieClips = new Array;
var movieClipsArrayIndex = 0;

function movieClipsObject(movieClipFile, movieClipId, movieClipPlayerVersion, movieClipWidth, movieClipHeight, movieClipParameters) {
	this.movieClipFile = movieClipFile;
	this.movieClipId = movieClipId;
	this.movieClipPlayerVersion = movieClipPlayerVersion;
	this.movieClipWidth = movieClipWidth;
	this.movieClipHeight = movieClipHeight;
	this.movieClipParameters = movieClipParameters;
};

// Hashes/anchors
var takeActionForced = 0;
var hashTagPointerIndex = 0;
var hashTagPointers = new Array;
	hashTagPointers = [
		['TakeAction', 'takeAction'],
		['AddYourSupport', 'takeAction'],
		['ShowYourSupport', 'takeAction'],
		['LendYourSupport', 'takeAction'],
		['JoinUs', 'takeAction']
	];

// UI labels
var ui_linkOpensInANewWindow_en = 'Link opens in a new window';
var ui_linkOpensInANewWindow_fr = 'Le lien s\u0027ouvrira dans une nouvelle fen\u00eatre';
	var ui_linkOpensInANewWindow = ui_linkOpensInANewWindow_en;

var ui_clickToPlayVideo_en = 'Click to open video...';
var ui_clickToPlayVideo_fr = 'cliquer le vid\u00E9o pour d\u00E9marrer'; // Cliquez pour lire la vid\u00E9o'
	var ui_clickToPlayVideo = ui_clickToPlayVideo_en;

var ui_nextText_en = 'Next';
var ui_nextText_fr = 'suivant';
	var ui_nextText = ui_nextText_en;

var ui_prevText_en = 'Prev';
var ui_prevText_fr = 'pr\u00E9c\u00E9dent';
	var ui_prevText = ui_prevText_en;

var ui_swipeToScroll1Finger_en = 'Swipe with one finger to scroll';
var ui_swipeToScroll1Finger_fr = 'faire d\u00E9filer en balayant avec un doigt';
	var ui_swipeToScroll1Finger = ui_swipeToScroll1Finger_en;

var ui_swipeToScroll2Fingers_en = 'Swipe with 2 fingers to scroll';
var ui_swipeToScroll2Fingers_fr = 'faire d\u00E9filer en balayant avec deux doigts';
	var ui_swipeToScroll2Fingers = ui_swipeToScroll2Fingers_en;

var ui_searchFieldWarningText_en = 'Enter your keywords here';
var ui_searchFieldWarningText_fr = 'entrez vos mots-cl\u00E9s ici';
	var ui_searchFieldWarningText = ui_searchFieldWarningText_en;

var ui_takeAction_en = 'Take Action';
var ui_takeAction_fr = 'agissez maintenant';
	var ui_takeAction = ui_takeAction_en;

var ui_takeActionFormNameFieldWarningText_en = 'Enter your full name';
var ui_takeActionFormNameFieldWarningText_fr = 'entrez votre nom complet'; // S\'il vous pla\u00EEt 
	var ui_takeActionFormNameFieldWarningText = ui_takeActionFormNameFieldWarningText_en;

var ui_takeActionFormFirstNameFieldWarningText_en = 'Enter your first name';
var ui_takeActionFormFirstNameFieldWarningText_fr = 'entrez votre nom donn\u00E9'; // S\'il vous pla\u00EEt 
	var ui_takeActionFormFirstNameFieldWarningText = ui_takeActionFormFirstNameFieldWarningText_en;

var ui_takeActionFormLastNameFieldWarningText_en = 'Enter your last name';
var ui_takeActionFormLastNameFieldWarningText_fr = 'entrez votre nom de famille'; // S\'il vous pla\u00EEt 
	var ui_takeActionFormLastNameFieldWarningText = ui_takeActionFormLastNameFieldWarningText_en;

var ui_takeActionFormEmailFieldWarningText_en = 'Enter a valid email address';
var ui_takeActionFormEmailFieldWarningText_fr = 'entrez une adresse courriel valide'; // S\'il vous pla\u00EEt 
	var ui_takeActionFormEmailFieldWarningText = ui_takeActionFormEmailFieldWarningText_en;

var ui_takeActionFormPostalFieldWarningText_en = 'Enter a valid postal code'; 
var ui_takeActionFormPostalFieldWarningText_fr = 'entrez un code postal valide';// S\'il vous pla\u00EEt
	var ui_takeActionFormPostalFieldWarningText = ui_takeActionFormPostalFieldWarningText_en;

var ui_takeActionFormWarningText_en = new Array();
	ui_takeActionFormWarningText_en = [ui_takeActionFormNameFieldWarningText_en, ui_takeActionFormEmailFieldWarningText_en, ui_takeActionFormPostalFieldWarningText_en];
var ui_takeActionFormWarningText_fr = new Array();
	ui_takeActionFormWarningText_fr = [ui_takeActionFormNameFieldWarningText_fr, ui_takeActionFormEmailFieldWarningText_fr, ui_takeActionFormPostalFieldWarningText_fr];

	var ui_takeActionFormWarningText = ui_takeActionFormWarningText_en;

var ui_changeFontSizeText_en = '	'; 
var ui_changeFontSizeText_fr = 'modifier la taille de la police';// S\'il vous pla\u00EEt
	var ui_changeFontSizeText = ui_changeFontSizeText_en;


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Debugging */

dMsg += 'The ' + sSFN + 'pjct_global.js script has been loaded|';
// alert('The ' + sSFN + 'pjct_global.js script has been loaded|');

