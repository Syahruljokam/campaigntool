

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Codewise Presentation Manager - Global Script File

Copyright (c) 2004-2013 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Created: 2006-02-05

Revision History:
  1.00	- Initial version. TB, 2006-02-05, 21:12
	- Added "fadeOff" and "fadeOn" variables. TB, 2007-01-17, 10:12
	- Added the "skinSpecificLayoutCSSVersion" and 
	  "skinSpecificPrintCSSVersion" variables. TB, 2007-04-04, 09:44
	- Augmented the "redirect" function. TB, 2007-05-16, 11:04
	- Added skin switching stuff. TB, 2008-09-12, 09:27

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Key global variables */

var dM = 0; // debugMode
var dMN = 0; // debugModeNoisy
var dTM = 0; // developerTestMode
var eM = 0; // editMode
var sFDO = 0; // siteFolderDepthOffset
var sHC = 0; // showHiddenContent


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Client config variables */

var availableLanguages = new Array;
var centerUserInterface = 0;
var colourSchemePreference = 'charcoal';
var siteLogoPreference = 0;
var siteTitle = 'Codewise';
var siteLogo01FileName = '';
var siteLogo02FileName = '';
var displayAdBanner01 = 0;
var displayAdBanner02 = 0;
var displayAdBanner03 = 0;
var displayAdBanners = 0;
var fontColour = '#333333';
var languagePreference = 'en';
var pageBackgroundImageEnabled = 1;
var pageBackgroundImageFileName = '';
var pageBackgroundImageRepeat = 'repeat';
var pageBackgroundImagePosition = '';
var pageBackgroundImageAttachment = '';
var pageBackgroundColour = '';
var pageOrientation = 'portrait';
var skinPreference = '_admin';
var windowScroll = 1;

// diy01-specific variables
var primaryColourPreference = '#cccccc'; // This variable MUST be a string comprised of a 6-character hex-code preceeded by a hash!
var secondaryColourPreference = '#666666';
var menuColourPreference = '#000000';
var menuOrientationVertical = 1;
var headerBannerFileName = '';
var contentBackgroundColourPreference = '#ffffff';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Colour variables */

var colourPreference = 'lime';
var colourPreferenceSwitch = '';

var dCST = 'dc'; // defaultColourSchemeTag
var lCS = false; // lightColourScheme
var vCS = false; // vibrantColourScheme
var lCBGI = 'charcoal_hg_bg.gif'; // leftColumnBackgroundImage
var pBGI = 'charcoal_vg_bg.gif'; // pageBackgroundImage
var pFGC = '#585858'; // pageForegroundColour
var pFGFC = '#ffffff'; // pageForegroundFontColour
var pBGC01 = '#666666'; // pageBackgroundColour01
var pBGC02 = '#333333'; // pageBackgroundColour02
var pBGC03 = '#b2b2b2'; // pageBackgroundColour03 (50%)
var pBGC04 = '#d9d9d9'; // pageBackgroundColour04 (25%)
var pSBGC = '#fdb52e'; // productScrollerBackgroundColor

// Graphite-specific variables
var highlightColour = 'lime';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Misc variables */

var a1 = ''; // Temporary global variable for test purposes
// var aBPO = ''; // adBannerPathOffset
// var adBanner01Width = 468;
// var adBanner01Height = 60;
// var adBanner02Width = 160;
// var adBanner02Height = 600;
// var adBanner03Width = 120;
// var adBanner03Height = 60;
var aMWS = ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' '; // alertMessageWhiteSpace

// var block = 'block';
var blankPageStyles = '';
var blank_transparent_image = new Image(); 
var borderColour = '#000';
var borderWidth = 1;
var btnBlur00HTML = '';
var btnBlur01HTML = '';
var btnBlur02HTML = '';

var cC; // cookieContents
var cDM = ''; // currentDebuggingMessage
var cDT = new Date(); // currentDateTime
var cEOA = 10; // changeElementOpactityAmount
var cEOI = 25; // changeElementOpactityInterval
var cEOL;
var cHC = 0; // containsHighlightedContent
var contentWidth = 580;
var copyrightYear = '2004';
var counter = 0;
var cSPO = ''; // colourSchemePreferenceOverride
var customSkinEnabled = 0;
var currentTimeInMilliseconds = new Date().getTime();
	var millisecondsPerSecond = 1000;
	var secondsPerMinute = 60;
	var minutesPerHour = 60;
	var hoursPerDay = 24;

/*
var siteLogoHTML = '';
var siteLogo01Width = 468;
var siteLogo01Height = 60;
var siteLogo02Width = 175;
var siteLogo02Height = 175;
*/

var defaultWindowName = '';
var dFN = 'index.php'; // defaultFileName
var diy01Customized = 0;
var displayLanguage = '';
var displayState = '';
var dMsg = ''; // debugMsg
var dSFN = '__skins\/'; // defaultSkinFolderName

var emptyLink = '';
var eOMC = 0; // expandOMaticContentPresent
var ePOSD = 0; // emulatePalmOSDevice
var ePPCD = 0; // emulatePocketPCDevice
var eVMsg = ''; // environmentVariablesMsg
var evt;
var e_body;
var emailAddressRegExp = /^.+@.+\..{2,4}$/;

var fadeOff = 0;
var fadeOn = 1;
var fD = 0; // folderDepth
var fDPO = ''; // folderDepthPathOffset
var fDPOFL = ''; // folderDepthPathOffsetForLinks
var fN = ''; // fileName
var fOV; // finalOpacityValue
var fourthLevelNavItemToHighlight = '';

var hOFAPE = 10; // horizontalOffsetForAbsolutelyPositionedElements which are centered...

var iBS = 0; // imageBorderSize
var iEOME = 0; // isExpandOMaticExpanded
var iHM = 0; // initializeHierarchicalMenu
var initializeMenu = 1;
var iHT = 0; // isHighlightingToggled
var imageBorders = 0;
var imageSwapImageTimer = '';
var iMCS = 'circle'; // imageMapCircleShape
var inPageBannerEnabled = 0;
var iGWPO = 20; // imageGalleryWindowPositionOffset
var iPBH = 156; // inPageBannerHeight
var iPBW = 580; // inPageBannerWidth
var iRE = true; // imageRolloversEnabled
var isHomePage = 0;
var isOnCD = 0;
var isMobileVersion = 0;
var isRemotePage = 0;
var isTestPage = 0;
var iSSHTML = ''; // internalStyleSheetHTML
var isSkinSpecific = 1;
var isNotSkinSpecific = 0;

var iPL_Images = new Array;
var iPL_ImagesIndex = 0;
var iPL_PreloadedImages = new Array;
var iPL_PreloadedImagesIndex = 0;

var lll;
var ll1;
var l1l;
var l11;
var lastUpdate = '';
var lastYear;
// var listItem = 'list-item';
var logonAttempted = 0;
var logonAttemptCount = 0;
var logonFailureWarningMsg = '';
var loop00;
var loop01;
var loop02;
var loop03;
var loop04;
var loop05;
var lPS = '_en'; // languagePreferenceSwitch

var menuOrientationHorizontal = 0;
var mFPO = ''; // mediaFolderPathOffset

var nextYear;
var nodeTypeElementIndex = 0;
var nOPRO = 0; // numberOfPossibleRandomOutcomes

var OOOO;
var OOO0;
var OO0O;
var OO00;
var O0OO;
var O0O0;
var O00O;
var O000;

var pADI = 50; // pageAnimationDelayInterval
var pADIT = 100; // pageAnimationDelayIntervalTimer = how long the page waits before starting the animation... initial delay
var pATTW = 245; // popupAndTooTipLayerWidth
var pATTH = 110; // popupAndTooTipLayerHeight
var pageId = 'default';
var pageScroll = 0;
var pageType = '';
var pCPArray = new Array; // pageConfigParameterArray
var pCPIndex = new Array; // pageConfigParameterIndex
var pRVS = 1; // pageRequiresVerticalScrolling
var pPWH = 480; // printPreviewWindowHeight
var pPWW = 685; // printPreviewWindowWidth
var pM = 0; // printMode
var primaryNavItemToHighlight = '';

var qSCfg = ''; // queryStringConfiguration
var qSS = '?'; // queryStringSwitch

var randomNumber01 = 0;
var randomNumber02 = 0;
var randomNumber03 = 0;
var randomNumber04 = 0;
var randomNumber05 = 0;
var rCH = 0; // recalculatedContentHeight
var rFS = '\/'; // rootFolderSlash

var sansStyle = 0;
var sBW = 16; // scrollBarWidth
var scrollPageBodySelectorText = 'html, body';
// var scrollPage = 0;
var searchStringContentDefault = '';
var searchStringContent = '';
var secondaryNavItemToHighlight = '';
var sideBoxWidth = 160;
var sL01HTML = ''; // siteLogo01HTML
var sL02HTML = ''; // siteLogo02HTML
var slideshowSlideInterval = 6000;

var sessionId = 'default';
var sSFN = '_codewise\/'; // supplimentalScriptsFolderName
var sTD = 1; // sectionToDisplay

var tBS = 0; // tableBorderSize
var tAArray = new Array; // tagAnchorArray
var tDivArray = new Array; // tagDivArray
var tIFrameArray = new Array; // tagIFrameArray
var tImgArray = new Array; // tagImgageArray
var tLiArray = new Array; // tagListItemArray
var tObjectArray = new Array; // tagObjectArray
var tPArray = new Array; // tagParagraphArray
var tSpanArray = new Array; // tagSpanArray
var thirdLevelNavItemToHighlight = '';
var thisYear;

var URL;
var URLProtocol;
var URLHostName;
var URLPort;
var URLPath;
var URLPathBare;
var URLHash;
var URLSearch;
var URLTopLevelDomain;
var URLMinusQueryString;
var usemap = 'usemap';

var warningMsg = '';
var whatYear = new Date();
var windowFixed = 0;
var wROE = 0; // windowReloadOnresizeEnable
var WTF = 'What the $%#%?!?';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Flash Player detection variables */

var flashinstalled = 0;
var flashversion = 0;
var FlashPlayerVersionMinor = 0;
var FlashPlayerVersionRevision = 0;

var FlashPlayerVersionRequired = 8;
var FlashPlayerPluginObject = '';
// var FlashMSDetect = "false";


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
QuickTime Player detection variables */

var QuickTimeDetection = 1;
var QuickTimePlayerInstalled = 0;
var QuickTimePlayerVersion = 0;
// var QuickTimePlayerVersionMinor = 0;
// var QuickTimePlayerVersionRevision = 0;

var QuickTimePlayerVersionRequired = 6;
var QuickTimePlayerPluginObject = '';
// var QuickTimePlayerMSDetect = "false";


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Environment variables */

var cDIB; // colourDepthInBits

var scrW = screen.width; // screenWidth
var scrH = screen.height; // screenHeight

var win_IH; // windowInnerHeight
var win_IW; // windowInnerWidth

var win_OH; // windowOuterHeight
var win_OW; // windowOuterWidth

var win_PT; // windowPositionTop
var win_PL; // windowPositionLeft

var win_ST; // windowScrollTop
var win_SL; // windowScrollLeft

var win_ISH; // windowInnerScrollHeight
var win_ISW; // windowInnerScrollWidth


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Infrastructure file versions */

// Common external script file versions
var aEJSV = '1-02'; // adElementsJavaScriptVersion
var cEJSV = '1-03'; // commonElementsJavaScriptVersion
var fJSV = '1-18'; // functionsJavaScriptVersion
var sVJSV = '1-01'; // skinVersionsJavaScriptVersion
// var pWJSV = '1-00'; // passwordJavaScriptVersion
// var FDSV = '1-00'; // FlashDetectionJavaScriptVersion

// Default skin external script file versions
var sSPEJSV = 'n\/a'; // skinSpecificPageElementsJavaScriptVersion
var sSIPSJSV = 'n\/a'; // skinSpecificInPageStylesJavaScriptVersion
var sSLCSSV = 'n\/a'; // skinSpecificLayoutCSSVersion
var sSCCSSV = 'n\/a'; // skinSpecificContentCSSVersion
var sSMCSSV = 'n\/a'; // skinSpecificMobileCSSVersion
var sSPCSSV = 'n\/a'; // skinSpecificPrintCSSVersion


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Server name variables */

var adminServerName = 'http:\/\/admin.codewise.ca';
var masterCookieDomain = '.twistedlimemedia.com';
var masterCookiePath = '';
var liveServerName = ''; // Changes (via the client config file) to their own site's URL
var webServerName = 'http:\/\/www.twistedlimemedia.com';
var marketingSiteName = '';
var lPCD = ''; // languagePreferenceCookieDomain


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Browser and platform detection */

// Much of the browser detection code below is from Netscape Developer's Edge, copyright (c) Netscape Communications 1999, and they have kindly granted permission to reuse and distribute

// Convert all characters to lowercase to simplify testing
var agent = '';
if (navigator.userAgent) { 
	agent = navigator.userAgent.toLowerCase();
} else { 
	agent = navigator.appVersion.toLowerCase();
};
// Determine browser version
var is_major = parseInt(navigator.appVersion);
// NOTE: On IE5, this returns 4, so use is_ie5up to detect IE5.
var is_minor = parseFloat(navigator.appVersion);

var is_linux = (agent.indexOf('linux') != -1);

var is_mac = (agent.indexOf('mac') != -1);
// NOTE: The following doesn't work for IE!
var is_mac_osx = (agent.indexOf('mac os x') != -1);
var is_mac_osx_lion = (agent.indexOf('mac os x 10_7') != -1);
var is_mac_osx_mountain_lion = (agent.indexOf('mac os x 10.8') != -1);
	if (is_mac_osx_mountain_lion) {
		sBW = 15;
	};

// ...so for IE, try this instead (elsewhere in this code): if ((is_mac) && ((is_ie5r1) || (is_ie5r2))) { is_mac_osx = true; };
// is_mac68k = (is_mac && ((agent.indexOf('68k')!=-1) || (agent.indexOf('68000')!=-1)));
// is_macppc = (is_mac && ((agent.indexOf('ppc')!=-1) || (agent.indexOf('powerpc')!=-1)));

var is_webkit = (agent.indexOf('webkit') != -1);

var is_safari = (agent.indexOf('safari') != -1);
var is_safari4 = (is_safari && (agent.indexOf('version\/4.0') != -1));
var is_safari5 = (is_safari && (agent.indexOf('version\/5') != -1));
var is_safari5r0 = (is_safari && (agent.indexOf('version\/5.0') != -1));
var is_safari5r1 = (is_safari && (agent.indexOf('version\/5.1') != -1));
var is_safari6 = (is_safari && (agent.indexOf('version\/6') != -1));
// var is_safari_mobile = (is_safari && (agent.indexOf('safari mobile') != -1));
var is_safari_mobile = (is_safari && (agent.indexOf('mobile') != -1));

var is_ipad = (agent.indexOf('ipad') != -1);
var is_iphone = (agent.indexOf('iphone') != -1);
var is_ipod = (agent.indexOf('ipod') != -1);
	if (is_ipod || is_ipad) {
		is_iphone = 0;
	};

var is_chrome = (agent.indexOf('chrome') != -1);
	if (is_chrome) {
		is_safari = false;

		chrome_version = agent.split('chrome\/')[1];
		chrome_version_major = chrome_version.split('.')[0];
		chrome_version_minor = chrome_version.split('.')[1];
			if (chrome_version_minor.indexOf('.') != -1) {
				chrome_version_minor = chrome_version_minor.split('.')[0];
			};

		chrome_version = ((chrome_version_major * 1) + (chrome_version_minor / 10) * 1);
	};
// var is_chrome1 = (agent.indexOf('chrome\/1.0') != -1);
// var is_chrome2 = (agent.indexOf('chrome\/2.0') != -1);
// var is_chrome3 = (agent.indexOf('chrome\/3.0') != -1);
// var is_chrome4 = (agent.indexOf('chrome\/4.0') != -1);

var is_android = (agent.indexOf('android') != -1);

var is_nav = ((agent.indexOf('mozilla') != -1) && (agent.indexOf('spoofer') == -1) && (agent.indexOf('compatible') == -1) && (agent.indexOf('opera') == -1) && (agent.indexOf('webtv') == -1));
	if (is_safari) {
		is_nav = false;
	};
var is_nav2 = (is_nav && (is_major == 2));
var is_nav3 = (is_nav && (is_major == 3));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4r04 = (is_nav && (is_minor == 4.04));
var is_nav4up = (is_nav && (is_major >= 4));
var is_navonly = (is_nav && ((agent.indexOf(';nav') != -1) || (agent.indexOf('; nav') != -1)));
var is_nav5 = (is_nav && (is_major == 5));
var is_nav6 = is_nav5;
var is_nav7 = (is_nav && (agent.indexOf('netscape\/7') != -1));
var is_nav7r1 = (is_nav && (agent.indexOf('netscape\/7.1') != -1));
var is_nav8 = (is_nav && (agent.indexOf('netscape\/8') != -1));
var is_nav9 = (is_nav && (agent.indexOf('navigator\/9') != -1));
var is_nav5up = (is_nav && (is_major >= 5));
var is_nav6up = is_nav5up;
var is_nav7up = (is_nav && (is_major >= 7));
var is_nav8up = (is_nav && (is_major >= 8));

var is_ie = ((agent.indexOf('msie') != -1) || (agent.indexOf('trident\/7.') != -1));
var is_ie3 = (is_ie && (is_major < 4));
var is_ie4 = (is_ie && (is_major == 4) && (agent.indexOf('msie 5.0') == -1) && (agent.indexOf('msie 5.1') == -1) && (agent.indexOf('msie 5.5') == -1) && (agent.indexOf('msie 6.0') == -1));
var is_ie4r0 = (is_ie && (is_major == 4) && (agent.indexOf('msie 4.0') != -1) && (agent.indexOf('msie 4.5') == -1) && (agent.indexOf('msie 5') == -1) && (agent.indexOf('msie 6') == -1));
var is_ie4r5 = (is_ie && (is_major == 4) && (agent.indexOf('msie 4.5') != -1));
var is_ie4up = (is_ie && (is_major >= 4));
var is_ie5 = (is_ie && (is_major == 4) && (agent.indexOf('msie 5.0') != -1));
var is_ie5r1 = (is_ie && (is_major == 4) && (agent.indexOf('msie 5.1') != -1)); // I.e. IE5 on Mac OS X
var is_ie5r2 = (is_ie && (is_major == 4) && (agent.indexOf('msie 5.2') != -1)); // I.e. IE5.2 on Mac OS X
	// NOTE: Since the following doesn't work for IE: is_mac_osx = (agent.indexOf('mac os x')!=-1);
	// ...try this instead:
	if (is_mac && ((is_ie5r1) || (is_ie5r2))) { is_mac_osx = true; };
var is_ie5r5 = (is_ie && (is_major == 4) && (agent.indexOf('msie 5.5') != -1));
var is_ie6 = (is_ie && (is_major == 4) && (agent.indexOf('msie 6.0') != -1));
var is_ie7 = (is_ie && (is_major == 4) && (agent.indexOf('msie 7.0') != -1));
var is_ie8 = (is_ie && (agent.indexOf('msie 8.0') != -1));
var is_ie9 = (is_ie && ((agent.indexOf('msie 9.0') != -1) || ((agent.indexOf('msie 7.0') != -1) && (agent.indexOf('trident\/5.') != -1))));
var is_ie10 = (is_ie && ((agent.indexOf('msie 10.0') != -1) || ((agent.indexOf('msie 7.0') != -1) && (agent.indexOf('trident\/6.') != -1))));
var is_ie11 = (is_ie && ((agent.indexOf('msie 11.0') != -1) || (agent.indexOf('trident\/7.') != -1)));
// var is_ie5up = (is_ie && (is_ie5 || is_ie5r1 || is_ie5r2 || is_ie5r5 || is_ie6 || is_ie7 || is_ie8 || is_ie9 || is_ie10 || is_ie11));
// var is_ie6up = (is_ie && (is_ie6 || is_ie7 || is_ie8 || is_ie9 || is_ie10 || is_ie11));
var is_ie7up = (is_ie && (is_ie7 || is_ie8 || is_ie9 || is_ie10 || is_ie11));
var is_ie8up = (is_ie && (is_ie8 || is_ie9 || is_ie10 || is_ie11));
var is_ie9up = (is_ie && (is_ie9 || is_ie10 || is_ie11));
var is_ie10up = (is_ie && (is_ie10 || is_ie11));

var is_mozilla = ((agent.indexOf('mozilla') != -1) && ((agent.indexOf('netscape') == -1) && (agent.indexOf('navigator') == -1)) && !is_ie);
	if (is_mozilla) {
		is_nav = false;
		is_nav6up = false;
	};
	if (is_safari) {
		is_mozilla = false;
	};
var is_firefox = (is_mozilla && (agent.indexOf('firefox') != -1));
	if (is_firefox) {
		firefox_version = agent.split('firefox\/')[1];
		firefox_version_major = firefox_version.split('.')[0];
		firefox_version_minor = firefox_version.split('.')[1];
			if (firefox_version_minor.indexOf('.') != -1) {
				firefox_version_minor = firefox_version_minor.split('.')[0];
			};

		firefox_version = ((firefox_version_major * 1) + (firefox_version_minor / 10) * 1);
	};
var is_firefox1r0 = (is_firefox && (agent.indexOf('firefox\/1.0') != -1));
var is_firefox1r5 = (is_firefox && (agent.indexOf('firefox\/1.5') != -1));
var is_firefox2r0 = (is_firefox && (agent.indexOf('firefox\/2.') != -1));
var is_firefox3r0 = (is_firefox && (agent.indexOf('firefox\/3.0') != -1));
var is_firefox3r5 = (is_firefox && (agent.indexOf('firefox\/3.5') != -1));
var is_firefox3r6 = (is_firefox && (agent.indexOf('firefox\/3.6') != -1));
/* var is_firefox4r0 = (is_firefox && (agent.indexOf('firefox\/4.0') != -1));
var is_firefox5r0 = (is_firefox && (agent.indexOf('firefox\/5.0') != -1));
var is_firefox6r0 = (is_firefox && (agent.indexOf('firefox\/6.0') != -1));
var is_firefox7r0 = (is_firefox && (agent.indexOf('firefox\/7.0') != -1));
var is_firefox8r0 = (is_firefox && (agent.indexOf('firefox\/8.0') != -1));
var is_firefox9r0 = (is_firefox && (agent.indexOf('firefox\/9.0') != -1));
var is_firefox10r0 = (is_firefox && (agent.indexOf('firefox\/10.0') != -1));
var is_firefox11r0 = (is_firefox && (agent.indexOf('firefox\/11.0') != -1));
var is_firefox12r0 = (is_firefox && (agent.indexOf('firefox\/12.0') != -1));
var is_firefox13r0 = (is_firefox && (agent.indexOf('firefox\/13.0') != -1));
var is_firefox14r0 = (is_firefox && (agent.indexOf('firefox\/14.0') != -1));
var is_firefox15r0 = (is_firefox && (agent.indexOf('firefox\/15.0') != -1));
var is_firefox16r0 = (is_firefox && (agent.indexOf('firefox\/16.0') != -1));
var is_firefox17r0 = (is_firefox && (agent.indexOf('firefox\/17.0') != -1));
var is_firefox18r0 = (is_firefox && (agent.indexOf('firefox\/18.0') != -1));
var is_firefox19r0 = (is_firefox && (agent.indexOf('firefox\/19.0') != -1));
var is_firefox20r0 = (is_firefox && (agent.indexOf('firefox\/20.0') != -1));
var is_firefox2up = (is_firefox && !is_firefox1r0 && !is_firefox1r5);
var is_firefox3up = (is_firefox && !is_firefox1r0 && !is_firefox1r5 && !is_firefox2r0);
var is_firefox3r5up = (is_firefox && (is_firefox3r5 || is_firefox3r6 || is_firefox4r0 || is_firefox5r0 || is_firefox6r0 || is_firefox7r0 || is_firefox8r0 || is_firefox9r0 || is_firefox10r0 || is_firefox11r0 || is_firefox12r0 || is_firefox13r0 || is_firefox14r0 || is_firefox15r0) || is_firefox16r0 || is_firefox17r0);
var is_firefox4up = (is_firefox && is_firefox3r5up && !is_firefox3r5 && !is_firefox3r6);
var is_firefox13up = (is_firefox && (is_firefox13r0 || is_firefox14r0 || is_firefox15r0 || is_firefox16r0 || is_firefox17r0 || is_firefox18r0 || is_firefox19r0 || is_firefox20r0)); */
var is_firefox2up = (is_firefox && (firefox_version >= 2));
var is_firefox3up = (is_firefox && (firefox_version >= 3));
var is_firefox3r5up = (is_firefox && (firefox_version >= 3.5));
var is_firefox4up = (is_firefox && (firefox_version >= 4));
var is_firefox13up = (is_firefox && (firefox_version >= 13));

var is_opera = (agent.indexOf('opera') != -1);
	if (is_opera) {
		// is_ie = false; is_ie4 = false; is_ie4up = false; is_ie5 = false; is_ie5up = false; is_ie6 = false;
	};
var is_opera6 = (is_opera && (agent.indexOf('opera 6') != -1));
var is_opera7 = (is_opera && (agent.indexOf('opera 7') != -1));
var is_opera8 = (is_opera && (agent.indexOf('opera 8') != -1));
var is_opera9 = (is_opera && (agent.indexOf('opera\/9') != -1));
var is_opera10 = (is_opera && (agent.indexOf('opera\/9') != -1) && (agent.indexOf('version\/10') != -1));
	if (is_opera10) {
		is_opera9 = 0;
	};
var is_opera6up = (is_opera6 || is_opera7 || is_opera8 || is_opera9 || is_opera10);

var is_blazer = (agent.indexOf('blazer') != -1);
var is_blazer4 = (agent.indexOf('blazer\/4.0') != -1);

var is_blackberry = (agent.indexOf('blackberry') != -1);

// Determine platform
var is_win = ((agent.indexOf('win') != -1) || (agent.indexOf('16bit') != -1));
var is_win95 = ((agent.indexOf('win95') != -1) || (agent.indexOf('windows 95') != -1));
var is_win98 = ((agent.indexOf('win98') != -1) || (agent.indexOf('windows 98') != -1));
var is_winxp = (agent.indexOf('windows nt 5.1') != -1);
var is_winxp_classic = false;
var is_wince = (agent.indexOf('windows ce') != -1);
var is_winvista = (agent.indexOf('windows nt 6.0') != -1);
var is_win7 = (agent.indexOf('windows nt 6.1') != -1);
var is_avantgo = (is_wince && (agent.indexOf('avantgo') != -1));
// var is_win7 = 0;
// var is_win8 = 0;

// Is this a valid browser/platform combo for Expand-O-Matic functionality?
var is_EOMCB = false; // is_ExpandOMaticCapableBrowser
var is_THCB = false; // is_ToggleHighlightingCapableBrowser
if (document.getElementById) {
	is_EOMCB = true;
	is_THCB = true;
};

// Is this a CSS compliant browser?
var is_CSSCB = ((is_nav6up) || (is_mozilla) || (is_safari) || (is_opera6up));
// ...or, should I do this instead? ((document.getElementById) && (!is_ie))

// Is this a Codewise "supported" browser?
var is_CSISB = 0;
if (is_CSSCB) {
	is_CSISB = 1;
};
if (is_ie && !is_mac && !is_opera) {
	is_CSISB = 1;
};

if (is_ie) {
	usemap = 'useMap';
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Menu variables */

// Custom menu parameters
var m_IC = false; // menuIsCentered
var m_BS = 'solid'; // menuBorderStyle

// Define header menu display characteristics
var m_FF = 'Verdana, Helvetica, Arial, sans-serif'; // menuFontFamily
var m_FS = 10; // menuFontSize
var m_O = true; // menuOpacity
var m_OV = 95; // menuOpacityValue
var m_W = 175; // menuWidth
var m_HO = 0; // menuHorizontalOffset
var m_VO = 0; // menuVerticalOffset
var m_TC = menuColourPreference; // menuTextColor
var m_THC = menuColourPreference;// menuTextHoverColor
var m_BGC = primaryColourPreference; // menuBackgroundColor
var m_BHC = '#ffffff';// menuBackgroundHoverColor
var m_BC = secondaryColourPreference; // menuBorderColor
var m_SC = secondaryColourPreference; // menuSeparatorColor
var m_TIP = true; // menuTopIsPermanent
var m_TIH = false; // menuTopIsHorizontal
var m_CMAH = false; // menuChildMenusAreHorizontal
var m_CMDU = true; // menuChildMenuDisplaysUnder
var m_MGAD = true; // menuMoreGraphicsAreDisplayed
var m_CMMGAD = true; // menuChildMenuMoreGraphicsAreDisplayed
// evaluate_upon_tree_show
// evaluate_upon_tree_hide
var m_TIRTL = false; // menuTopIsRightToLeft
var m_TDOC = false; // menuTopDisplaysOnClick
var m_TWIV = false; // menuTopWidthIsVariable
var m_CMWAV = false; // menuChildMenuWidthsAreVariable

// Global menu variables
var HM_PG_ItemPadding = 4;
var HM_PG_FontFamily = 'Verdana, Helvetica, Arial, sans-serif';
var HM_PG_FontSize = 8;
var HM_PG_FontBold = false;
var HM_PG_FontItalic = false;
var HM_PG_BorderWidth = 1;
var HM_PG_SeparatorSize = 1;
var HM_PG_SeparatorColor = secondaryColourPreference;
var HM_PG_ImageSrc = 'media\/images\/_menu\/menu_arrow_off.gif';
var HM_PG_ImageSrcOver = 'media\/images\/_menu\/menu_arrow_on.gif';
var HM_PG_ImageSrcLeft = 'media\/_mages\/_menu\/menu_arrow_left_off.gif';
var HM_PG_ImageSrcLeftOver = 'media\/images\/_menu\/menu_arrow_left_on.gif';
var HM_PG_ImageSize = 6;
var HM_PG_ImageHorizSpace = 0;
var HM_PG_ImageVertSpace = 1;
var HM_PG_KeepHilite = true;
var HM_PG_ClickStart = 0;
var HM_PG_ClickKill = false;
var HM_PG_ChildOverlap = 2; // Horizontal
var HM_PG_ChildOffset = 2; // Vertical
var HM_PG_ChildPerCentOver = null;
var HM_PG_TopSecondsVisible = 0.8;
var HM_PG_ChildMenuSecondsVisible = 0.4;
var HM_PG_StatusDisplayBuild = true;
var HM_PG_StatusDisplayLink = true;
var HM_PG_UponDisplay = 'onMenuTreeShow()';
var HM_PG_UponHide = 'onMenuTreeHide()';
var HM_PG_RightToLeft = false;
var HM_PG_ShowLinkCursor = true;

var HM_StatusDisplayBuild = false;

// Default menu data
var HM_Array1 = new Array;
HM_Array1 = [[m_W,m_HO,m_VO,m_TC,m_THC,m_BGC,m_BHC,m_BC,m_SC,m_TIP,m_TIH,m_CMAH,m_CMDU,m_MGAD,m_CMMGAD,null,null,m_TIRTL,m_TDOC,m_TWIV,m_CMWAV],['Menu not yet created...',emptyLink,1,0,0]];


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Language-based user interface content */

// Note that the folloing "note", "slogan", and "warning" variables MUST NOT include special characters
var ui_note01 = 'IMPORTANT NOTE!';
var ui_note02 = 'NOTE';
var ui_note03 = 'WARNING!';
var ui_note04 = 'CAUTION';
var ui_CSISlogan01 = ''; // Take control of your Web site!
	var ui_CSISlogan01a = ui_CSISlogan01;
var ui_CSISlogan02 = ''; // Powerful, fast, secure, easy to use!
	var ui_CSISlogan02a = ui_CSISlogan02;
var ui_CSISlogan03 = ''; // Built for use in any industry!
	var ui_CSISlogan03a = ui_CSISlogan03;
var ui_languageWarning01 = ''; // Please reload your main browser window...
var ui_searchWarning01 = ''; // Please enter one or more search terms...
var ui_loginText01 = ''; // Login...

// Regular UI variables
var ui_adBannerScrollerHTML01 = ''; // Scroll advertisement up
var ui_adBannerScrollerHTML02 = ''; // Scroll advertisement down
var ui_adBannerScrollerHTML03 = ''; // Previous advertisement
var ui_adBannerScrollerHTML04 = ''; // Next advertisement
var ui_adText01 = ''; // Advertisement';

var ui_copyrightHTML01 = ''; // All rights reserved
var ui_copyrightHTML02 = ''; // Site credits
var ui_copyrightHTML03 = ''; // Copyright

var ui_gBTOHP = '';
var ui_lOIANWT = '';
var ui_rS = '';

var ui_lastUpdateHTML01 = ''; // Last updated
var ui_logoHTML01 = ''; // Welcome to
var ui_logoHTML02 = ''; // Back to the home page
var ui_logoHTML03 = ''; // ?

var ui_toolbarHTML00 = ''; // Edit Mode
var ui_toolbarHTML01 = ''; // Open a print-friendly version
var ui_toolbarHTML02 = ''; // Print
var ui_toolbarHTML03 = ''; // Show/hide the search field
var ui_toolbarHTML04 = ''; // Search
var ui_toolbarHTML05 = ''; // Codewise login
var ui_toolbarHTML06 = ''; // Login
var ui_toolbarHTML07 = ''; // Choose display language
var ui_toolbarHTML08 = ''; // Language
var ui_toolbarHTML09 = ''; // Edit your site preferences
var ui_toolbarHTML10 = ''; // Site Preferences
var ui_toolbarHTML11 = ''; // ?
var ui_toolbarHTML12 = ''; // ?
var ui_toolbarHTML13 = ''; // Edit your menu items
var ui_toolbarHTML14 = ''; // Edit Menu
var ui_toolbarHTML15 = ''; // Create new page
var ui_toolbarHTML16 = ''; // New Page
var ui_toolbarHTML17 = ''; // Edit current page
var ui_toolbarHTML18 = ''; // Edit Page
var ui_toolbarHTML19 = ''; // Delete current page
var ui_toolbarHTML20 = ''; // Delete Page
var ui_toolbarHTML21 = ''; // End your session
var ui_toolbarHTML22 = ''; // Logout
var ui_toolbarHTML23 = ''; // Go
var ui_toolbarHTML24 = ''; // Search
var ui_toolbarHTML25 = ''; // Page Preferences
var ui_toolbarHTML26 = ''; // Edit preferences for this page
var ui_toolbarHTML27 = ''; // WARNING!
var ui_toolbarHTML28 = ''; // View warning message
var ui_toolbarHTML29 = ''; // Back
var ui_toolbarHTML30 = ''; // Back to the previous page
var ui_toolbarHTML31 = ''; // Help
var ui_toolbarHTML32 = ''; // Open the knowledge base
var ui_toolbarHTML33 = ''; // Close
var ui_toolbarHTML34 = ''; // Close window

// Note that the folloing "note", "slogan", and "warning" variables MUST NOT include special characters
ui_CSISlogan01 = 'Take control of your Web site!';
	ui_CSISlogan01a = ui_CSISlogan01;
ui_CSISlogan02 = 'Powerful, fast, secure, easy to use!';
	ui_CSISlogan02a = ui_CSISlogan02;
ui_CSISlogan03 = 'Built for use in any industry!';
	ui_CSISlogan03a = ui_CSISlogan03;
ui_languageWarning01 = 'Please reload your main browser window' + aMWS + '\nto see display language changes.' + aMWS;
ui_searchWarning01 = 'Please enter one or more search terms.' + aMWS;
ui_loginText01 = 'Login';

// Regular UI variables
ui_adBannerScrollerHTML01 = 'Scroll advertisement up';
ui_adBannerScrollerHTML02 = 'Scroll advertisement down';
ui_adBannerScrollerHTML03 = 'Previous advertisement';
ui_adBannerScrollerHTML04 = 'Next advertisement';
ui_adText01 = 'Advertisement';

ui_copyrightHTML01 = 'All rights reserved';
ui_copyrightHTML02 = 'Site credits';
ui_copyrightHTML03 = 'Copyright';

ui_gBTOHP = 'Go back to our home page';
ui_lOIANWT = 'Link opens in a new window\/tab';
ui_rS = 'Reset the skin';
	ui_rS = 'Switch back to our standard "Twisted Lime" skin';

ui_lastUpdateHTML01 = 'Last updated';
ui_logoHTML01 = 'Welcome to';
ui_logoHTML02 = 'Back to the home page';
ui_logoHTML03 = '?';

ui_toolbarHTML00 = 'Edit Mode';
ui_toolbarHTML01 = 'Open a print-friendly version';
ui_toolbarHTML02 = 'Print';
ui_toolbarHTML03 = 'Show/hide the search field';
ui_toolbarHTML04 = 'Search';
ui_toolbarHTML05 = 'Codewise web site login';
ui_toolbarHTML06 = 'Login';
ui_toolbarHTML07 = 'Switch display language';
ui_toolbarHTML08 = 'Language';
ui_toolbarHTML09 = 'Edit your site preferences';
ui_toolbarHTML10 = 'Site Preferences';
ui_toolbarHTML11 = '';
ui_toolbarHTML12 = '';
ui_toolbarHTML13 = 'Edit your menu items';
ui_toolbarHTML14 = 'Edit Menu';
ui_toolbarHTML15 = 'Create new page';
ui_toolbarHTML16 = 'New Page';
ui_toolbarHTML17 = 'Edit current page';
ui_toolbarHTML18 = 'Edit Page';
ui_toolbarHTML19 = 'Delete current page';
ui_toolbarHTML20 = 'Delete Page';
ui_toolbarHTML21 = 'End your session';
ui_toolbarHTML22 = 'Logout';
ui_toolbarHTML23 = 'Go';
ui_toolbarHTML24 = 'Search';
ui_toolbarHTML25 = 'Page Preferences';
ui_toolbarHTML26 = 'Edit preferences for this page';
ui_toolbarHTML27 = 'WARNING!';
ui_toolbarHTML28 = 'View warning message';
ui_toolbarHTML29 = 'Back';
ui_toolbarHTML30 = 'Back to the previous page';
ui_toolbarHTML31 = 'Help';
ui_toolbarHTML32 = 'Open the knowledge base';
ui_toolbarHTML33 = 'Close';
ui_toolbarHTML34 = 'Close window';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Redirection */

var URLToGoTo = '\/';

function actualRedirect(passedURLToGoTo) { 
	if (passedURLToGoTo) {
		location.replace(passedURLToGoTo);
	} else {
		location.replace(URLToGoTo);
	};
};

function redirect(redirectDelay) {
	if (!redirectDelay) {
		actualRedirect();
	} else {
		setTimeout('actualRedirect()', redirectDelay);
	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Skin switching */

var skinSwitcherEnabled = 0;
var skinSwitcherGraphical = 0;

var CSI_skinSwitcherSkins = new Array; // skinSwitcherSkins

var CSI_skinSwitcherSkins_Count = 0;
var CSI_skinSwitcherSkins_Index = 0;

function CSI_skinSwitcherSkins_Object(skinTitle, skinPreference, skinURL, skinIcon) { // skinSwitcherSkinObject()
	this.skinTitle = skinTitle;
	this.skinPreference = skinPreference;
	this.skinURL = skinURL;
	this.skinIcon = skinIcon;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Image rotator */

var CSI_imageRotatorImages = new Array;

var CSI_imageRotatorImages_Count = 0;
var CSI_imageRotatorImages_Index = 0;
var CSI_imageRotatorImages_Automatic = 1;
var CSI_imageRotatorImages_Interval = 6000; // in milliseconds...
var CSI_imageRotatorImages_Timer = null;

var CSI_imageRotator_NextImageIsLoadable = true;
var imageRotatorImageTimer;

// Create custom image rotator content object:
function CSI_imageRotatorImages_Object(imageFile, URLToGoTo, imageTitle, imageDescription) { // imageRotatorImageObject()
	this.imageFile = imageFile;
	this.URLToGoTo = URLToGoTo;
	// this.sWinWidth = sWinWidth;
	// this.sWinHeight = sWinHeight;
	this.imageTitle = imageTitle;
	this.imageDescription = imageDescription;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Global functions */

function aPI() {}; // additionalPageInitialization
function iPL() {}; // imagePreloading

function CCOStartRenderingPage() {};
function CCOEndRenderingPage() {};
function copyToClipboard() {};

function doNothing() {};
function doSomething() {};

function highlightingInitialization() {};
function randomizeStatusBarMessage() {};

function oSCW() {}; // Open site credits window

function CSI_embedSkinSwitcher() {};
function CSI_embedImageRotator() {};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Image pre-load variables */

// Popup close button
var popup_close_btn_on;
var popup_close_btn_default;
var popup_close_btn_off;

// Expand-O-Matic icons
var EOMIconToChange = new Image;

var eom_expand_icon_on = new Image();
var eom_expand_icon_default;
var eom_expand_icon_off = new Image();

var eom_collapse_icon_on = new Image();
var eom_collapse_icon_default;
var eom_collapse_icon_off = new Image();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Debugging */

dMsg += 'The _codewise\/codewise_global.js script has been loaded|';

