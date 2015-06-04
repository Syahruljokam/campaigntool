

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Codewise Presentation Manager - Master Script File

Copyright (c) 2004-2013 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Created: 2006-02-05

Revision History:
  1.00	- Initial version. TB, 2006-02-05, 21:12
	- Added skin switching stuff. TB, 2008-09-12, 09:27

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Determine current URL, file name, path, protocol, etc. */

if (liveServerName != '') {
	lPCD = liveServerName.substring(7,liveServerName.length);
};

URL = location.href;
URLProtocol = location.protocol;
URLHostName = location.hostname;
URLPort = location.port;
URLPath = location.pathname;
	URLPathBare = URLPath;
	/* if (URLPath.indexOf('?') != -1) {
		URLPathBare = URLPath.split('?')[0];
	}; */
	if (URLPath.indexOf('#') != -1) {
		URLPathBare = URLPath.split('#')[0];
	};
URLHash = location.hash;
URLSearch = location.search;
URLMinusQueryString = URL;

if ((URL.indexOf('?') != -1) || (URL.indexOf('#') != -1)) {
	var URLMinusQueryStringTemp = '';

	if (URL.indexOf('?') != -1) {
		URLMinusQueryStringTemp = URL.split('?');
		URLMinusQueryString = URLMinusQueryStringTemp[0];
	} else if (URL.indexOf('#') != -1) {
		URLMinusQueryStringTemp = URL.split('#');
		URLMinusQueryString = URLMinusQueryStringTemp[0];
	};
};

var pathTemp;
if (is_wince) {
	fDPO = fDPOFL = rFS;
} else {
	URLPathRegExp = new RegExp('\/', 'gi');
	URLPathTemp = URLPath.replace(URLPathRegExp,'\\');
	var masterPathOffset = URLPathTemp.split('\\');

	URLPathTemp = URLHostName.split('.');
	URLTopLevelDomain = URLPathTemp[0];

	if (URLPath.substring(0,1) == '/') {
		URLPath = URLPath.substring(1,URLPath.length);
	};

	if ((URLProtocol.indexOf('file') != -1) && is_ie && !is_ie7up) {
		pathTemp = URLPath.split('\\');
	} else {
		pathTemp = URLPath.split('/');
	};

	if ((URLProtocol.indexOf('file') != -1)) {
		if (is_mac && (URL.indexOf('CSI_') != -1)) {
			sFDO += 3;
		};

		if (is_mac && isOnCD && !dM) {
			sFDO += 1;
		};

		fD = masterPathOffset.length - 3 - sFDO;
		lPCD = '';
		masterCookieDomain = '';

		if (mFPO == '') {
			if ((!isOnCD) && (!isRemotePage)) {
				mFPO = '__projects\/' + skinPreference + '\/';
			};
		};
	} else {
		fD = masterPathOffset.length - 2 - sFDO;
	};

	if ((location.hostname + ':' + URLPort) == 'localhost:8888') {
		mFPO = '__projects\/' + skinPreference + '\/';
	};

	if (URL.indexOf('http:\/\/codewise') != -1) {
		// mFPO = '__projects\/' + skinPreference + '\/';
	};

	fN = pathTemp[pathTemp.length - 1];

	if (fN == '') {
		fN = dFN;
	};
	if ((fN == dFN) && (fD == 0)) {
		isHomePage = 1;
	} else if (fN.indexOf('test_page') != -1) {
		isTestPage = 1;
	};

	dMsg += 'masterPathOffset = ' + masterPathOffset + '|';
	dMsg += 'fD = ' + fD + '|';
	dMsg += 'fN = ' + fN + '|';

	if (isRemotePage) {
		fDPO = webServerName + rFS;
		fDPOFL = liveServerName + rFS;
	} else if (fD == 'unknown') {
		fDPO = fDPOFL = rFS;
	} else {
		for (loop00 = 0; loop00 < fD; loop00++) {
			fDPO += '..\/';
			fDPOFL += '..\/';
		};
	};
};
dMsg += 'fDPO = \'' + fDPO + '\'|fDPOFL = \'' + fDPOFL + '\'|';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Date stuff */

whatYear = new Date();
thisYear = whatYear.getFullYear();
if (thisYear != copyrightYear) {
	// copyrightYear = copyrightYear + '&#8211;' + thisYear;
};

nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);

lastYear = new Date();
lastYear.setFullYear(lastYear.getFullYear() - 1);

weekdayName = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
monthName = new Array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
/*
function getPrevMonth() {
	var thisMonth = this.getMonth();
	this.setMonth(thisMonth - 1);
	if (this.getMonth() != thisMonth-1 && (this.getMonth() != 11 || (thisMonth == 11 && this.getDate() == 1))) {
		this.setDate(0);
	};
};
Date.prototype.getPrevMonth = getPrevMonth;
*/
function getNextMonth(){
	var thisMonth = this.getMonth();
	this.setMonth(thisMonth + 1);
	if (this.getMonth() != thisMonth+1 && this.getMonth() != 0) {
		this.setDate(0);
	};
};
Date.prototype.getNextMonth = getNextMonth;
nextMonth = new Date();
nextMonth.getNextMonth();

function getOrdinal(dateNumber) {
	var dateOrdinals = ['th', 'st', 'nd', 'rd'];
	var dateNumberValue = dateNumber % 100;
	return dateNumber + (dateOrdinals[(dateNumberValue -20) % 10] || dateOrdinals[dateNumberValue] || dateOrdinals[0]);
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Client side cookie code */

function getCookie(cookieName) {
	if (!is_avantgo) {
		var sOCSS = document.cookie.indexOf(cookieName + '='); // startOfCookieSubString
		var lOCSS = sOCSS + cookieName.length + 1; // lengthOfCookieSubString
		if ((!sOCSS) && (cookieName != document.cookie.substring(0,cookieName.length))) {
			return null;
		};
		if (sOCSS == -1) {
			return null;
		};
		var eOCSS = document.cookie.indexOf(';',lOCSS); // endOfCookieSubString
		if (eOCSS == -1) {
			eOCSS = document.cookie.length;
		};
		return unescape(document.cookie.substring(lOCSS,eOCSS));
	} else {
		return null;
	};
};

function setCookie(cookieName,cookieValue,cookieExpirationDate,cookiePath,cookieDomain,cookieSecure) {
	if (!is_avantgo) {
		cC = cookieName + '=' + escape(cookieValue); // cookieContents
		if (cookieExpirationDate) {
			cC += ';expires=' + cookieExpirationDate.toGMTString();
		};
		if (cookiePath) {
			cC += ';path=' + cookiePath;
		};
		if (cookieDomain) {
			cC += ';domain=' + cookieDomain;
		};
		if (cookieSecure) {
			cC += ';secure';
		};
		document.cookie = cC;
	};
};

function deleteCookie(cookieName,cookiePath,cookieDomain) {
	if (getCookie(cookieName)) {
		cC = cookieName + '='; // cookieContents
		if (cookiePath) {
			cC += ';path=' + cookiePath;
		};
		if (cookieDomain) {
			cC += ';domain=' + cookieDomain;
		};
		cC += ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
		// alert(cC);
 		document.cookie = cC;
	};
};

// Master cookie
if (URLProtocol == 'file:') {
	masterCookiePath = fDPO;
	masterCookieDomain = fDPO;
};

function storeMasterCookie() {
	if (!getCookie('CodewiseMasterCookie')) {
		setCookie('CodewiseMasterCookie','enabled',nextYear,masterCookiePath,masterCookieDomain);
	};
};

// Intelligent cookie
function storeIntelligentCookie(cookieName,cookieValue,cookieExpirationDate,cookiePath,cookieDomain) {
	// alert(cookieName + '\n\n' + cookieValue + '\n\n' + cookieExpirationDate + '\n\n' + cookiePath + '\n\n' + cookieDomain)

	if (getCookie('CodewiseMasterCookie')) {
		var intelligentCookie = getCookie(cookieName);
		if ((!intelligentCookie) || (intelligentCookie != cookieValue)) {
			setCookie(cookieName,cookieValue,cookieExpirationDate,cookiePath,cookieDomain);
			intelligentCookie = getCookie(cookieName);
			if ((!intelligentCookie) || (intelligentCookie != cookieValue)) {
				// deleteCookie('CodewiseMasterCookie');
			};
		};
		if ((cookieName == 'developerTestMode') && (getCookie('developerTestMode'))) {
			setTimeout('aDTM();',500);
		};
	};
};

function aDTM() { // alert developerTestMode
	alert(ui_note02 + ':\n\nDeveloper test mode enabled.' + aMWS);
};

// Determine language preference from cookie
if (getCookie('displayLanguagePreference')) {
	if (skinPreference != '_admin') {
		displayLanguage = getCookie('displayLanguagePreference');
		languagePreference = getCookie('displayLanguagePreference');
	} else {
		displayLanguage = languagePreference;
	};
} else {
	displayLanguage = languagePreference;
};

if ((displayLanguage == 'en') || (languagePreference == 'en')) {
	lPS = '_en';
} else if ((displayLanguage == 'fr') || (languagePreference == 'fr')) {
	lPS = '_fr';
} else if ((displayLanguage == 'es') || (languagePreference == 'es')) {
	lPS = '_es';
};

// Determine developer mode from cookie
if (getCookie('developerTestMode')) {
	dTM = 1;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Convert string to title case
*
* 	v2.0.1 – http://individed.com/code/to-title-case/
*	Copyright © 2008–2012 David Gouch. Licensed under the MIT License.
*/

String.prototype.toTitleCase = function () {
	var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

	return this.replace(/([^\W_]+[^\s-]*) */g, function (match, p1, index, title) {
		if (index > 0 && index + p1.length !== title.length &&
			p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
			title.charAt(index - 1).search(/[^\s-]/) < 0) {
			return match.toLowerCase();
		}

		if (p1.substr(1).search(/[A-Z]|\../) > -1) {
			return match;
		}

		return match.charAt(0).toUpperCase() + match.substr(1);
	});
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Code for shuffling an array */

function CSI_arrayShuffle(theArray) {
	var loopCounter_ArrayShuffle = theArray.length;

	while (loopCounter_ArrayShuffle--) {
		var index_ArrayShuffle = parseInt(Math.random() * theArray.length);
		var temp_ArrayShuffle = theArray[loopCounter_ArrayShuffle];
		theArray[loopCounter_ArrayShuffle] = theArray[index_ArrayShuffle];
		theArray[index_ArrayShuffle] = temp_ArrayShuffle;
 	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Code for URL encoding and decoding */

function URLEncode(passedString) {
	// Because the Javascript escape and unescape functions do not correspond with what browsers actually do...
	var safeCharacters = '0123456789' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + "-_.!~*'()";
	var hexCharacters = '0123456789ABCDEF';

	var plainText = passedString;
	var encodedURL = '';
	for (var loopCounter_URLEncode = 0; loopCounter_URLEncode < plainText.length; loopCounter_URLEncode++ ) {
		var currentCharacter = plainText.charAt(loopCounter_URLEncode);
		if (currentCharacter == ' ') {
			encodedURL += '+';
		} else if (safeCharacters.indexOf(currentCharacter) != -1) {
			encodedURL += currentCharacter;
		} else {
			var charCode = currentCharacter.charCodeAt(0);
			if (charCode > 255) {
				// alert(ui_note02 + ':\n\nUnicode character "' + currentCharacter + '" cannot be encoded' + aMWS + '\nusing standard URL encoding. (URL encoding' + aMWS + '\nonly supports 8-bit characters. As a result,' + aMWS + '\na space (+) will be substituted.' + aMWS);
				encodedURL += '+';
			} else {
				encodedURL += '%';
				encodedURL += hexCharacters.charAt((charCode >> 4) & 0xF);
				encodedURL += hexCharacters.charAt(charCode & 0xF);
			};
		};
	};

	return encodedURL;
};

function URLDecode(passedString) {
	// Replace + with ' '
	// Replace %xx with equivalent character
	// Put [ERROR] in output if %xx is invalid.
	var hexCharacters = '0123456789ABCDEFabcdef';
	var encodedURL = passedString;
	var plainText = '';
	var loopCounter_URLDecode = 0;
	while (loopCounter_URLDecode < encodedURL.length) {
		var currentCharacter = encodedURL.charAt(loopCounter_URLDecode);
		if (currentCharacter == '+') {
			plainText += ' ';
			loopCounter_URLDecode++;
		} else if (currentCharacter == '%') {
			if ((loopCounter_URLDecode < (encodedURL.length - 2)) && (hexCharacters.indexOf(encodedURL.charAt(loopCounter_URLDecode + 1)) != -1) && (hexCharacters.indexOf(encodedURL.charAt(loopCounter_URLDecode + 2)) != -1 )) {
				plainText += unescape( encodedURL.substr(loopCounter_URLDecode, 3) );
				loopCounter_URLDecode += 3;
			} else {
				// alert(ui_note02 + ':\n\nBad escape combination near "' + encodedURL.substr(loopCounter_URLDecode) + '"!' + aMWS);
				plainText += '%[ERROR]';
				loopCounter_URLDecode++;
			};
		} else {
			plainText += currentCharacter;
			loopCounter_URLDecode++;
		};
	};

	decodedURL = plainText;
	return decodedURL;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Image swapping functions */

blank_transparent_image.src = fDPO + mFPO + 'media\/images\/blank\/blank_transparent.gif';

function rI(imgId) { // rolloverIn
	// if (document.images) {
		if (document.images[imgId]) {
			if (is_ie) {
				document.getElementById(imgId).src = eval(imgId + '_on.src');

				// if ((!is_ie7up) && (document.getElementById(imgId).className.indexOf('transparentPNG') != -1)) {
				if ((!is_ie7up) && (hasClass(document.getElementById(imgId), 'transparentPNG'))) {
					CSI_rTPNGI(imgId);
				};
			} else {
				document.images[imgId].src = eval(imgId + '_on.src');
			};
		};
	// };
};

function rO(imgId) { // rolloverOut
	// if (document.images) {
		if (document.images[imgId]) {
			if (is_ie) {
				document.getElementById(imgId).src = eval(imgId + '_off.src');

				// if ((!is_ie7up) && (document.getElementById(imgId).className.indexOf('transparentPNG') != -1)) {
				if ((!is_ie7up) && (hasClass(document.getElementById(imgId), 'transparentPNG'))) {
					CSI_rTPNGI(imgId);
				};
			} else {
				document.images[imgId].src = eval(imgId + '_off.src');
			};
		};
	// };
};

function rD(imgId) { // rolloverDisabled
	// if (document.images) {
		if (document.images[imgId]) {
			if (is_ie) {
				document.getElementById(imgId).src = eval(imgId + '_disabled.src');

				// if ((!is_ie7up) && (document.getElementById(imgId).className.indexOf('transparentPNG') != -1)) {
				if ((!is_ie7up) && (hasClass(document.getElementById(imgId), 'transparentPNG'))) {
					CSI_rTPNGI(imgId);
				};
			} else {
				document.images[imgId].src = eval(imgId + '_disabled.src');
			};
		};
	// };
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Parse query string to determine page display modes */

function splitSearchStringContent(pCPString, textToSplitBy) {
	// pCPString = pageConfigParameterString

	pCPArray = pCPString.split(textToSplitBy); // pCPArray = pageConfigParameterArray
	pCPIndex = pCPArray.length; // pCPIndex = pageConfigParameterIndex
};

if (location.search) {
	searchStringContent = location.search.substring(1,location.search.length);
};

if (searchStringContent != '') {
	qSS = '&';
	splitSearchStringContent(searchStringContent, qSS);

	for (loop01 = 0; loop01 < pCPArray.length; loop01++) {
		cQSE = pCPArray[loop01]; // currentQueryStringElement

		// Page modes
		if ((cQSE == 'printMode=on') || (cQSE == 'printMode=true') || (cQSE == 'print=on') || (cQSE == 'print=true') || (cQSE == 'print=1')) { pM = true; };

		// Section display preference
		if (cQSE == 'displaySection=1') { sTD = 1; };
		if (cQSE == 'displaySection=2') { sTD = 2; };
		if (cQSE == 'displaySection=3') { sTD = 3; };
		if (cQSE == 'displaySection=4') { sTD = 4; };

		// Disable user interface rendering
		if ((cQSE == 'skin=noSkin') || (cQSE == 'skin=none') || (cQSE == 'skin=off') || (cQSE == 'skin=false') || (cQSE == 'skin=0')) { skinPreference = ''; };

		// Query string config options available to developers only
		if ((cQSE == 'testMode=on') || (cQSE == 'testMode=true') || (cQSE == 'debugMode=on') || (cQSE == 'debugMode=true')) { dM = 1; };
		if (cQSE == 'debugMode=noisy') { dM = 1; dMN = 1; };

		if ((dTM) || (fN.indexOf('sample_page') != -1) || (fN.indexOf('test_page') != -1)) {
			// if ((cQSE == 'testMode=on') || (cQSE == 'testMode=true') || (cQSE == 'debugMode=on') || (cQSE == 'debugMode=true')) { dM = 1; };
			// if (cQSE == 'debugMode=noisy') { dM = 1; dMN = 1; };

			if ((cQSE == 'HM=off') || (cQSE == 'HM=false')) { iHM = 0; };

			if ((cQSE == 'windowScroll=on') || (cQSE == 'windowScroll=true') || (cQSE == 'windowScroll=1')) { windowScroll = 1; };
			if ((cQSE == 'windowScroll=off') || (cQSE == 'windowScroll=false') || (cQSE == 'windowScroll=0')) { windowScroll = 0; };

			if ((cQSE == 'center=on') || (cQSE == 'center=true') || (cQSE == 'center=1')) { centerUserInterface = 1; };
			if ((cQSE == 'center=off') || (cQSE == 'center=false') || (cQSE == 'center=0')) { centerUserInterface = 1; };

			if ((cQSE == 'showHidden=on') || (cQSE == 'showHidden=true') || (cQSE == 'showHidden=1')) { sHC = true; };
			if ((cQSE == 'imageBorders=on') || (cQSE == 'imageBorders=true') || (cQSE == 'imageBorders=1')) { imageBorders = true; iBS = 1; };

			// Skin preference
			if (cQSE.indexOf('skin=') != -1) {
				if (cQSE == 'skin=admin') { 
					skinPreference = '_admin';
				} else if (cQSE == 'skin=palmos') { 
					skinPreference = '_palmos';
				} else if (cQSE == 'skin=pocketpc') { 
					skinPreference = '_pocketpc';
				} else {
					// tempSkinPreference = cQSE.split('=');
					// skinPreference = tempSkinPreference[(tempSkinPreference.length - 1)];
				};
			};
		};

		// Colour preference
		if ((cQSE == 'color=lemon') || (cQSE == 'colour=lemon') || (cQSE == 'color=yellow') || (cQSE == 'colour=yellow')) { colourPreference = 'lemon'; };
		if ((cQSE == 'color=orange') || (cQSE == 'colour=orange')) { colourPreference = 'orange'; };
		if ((cQSE == 'color=grapefruit') || (cQSE == 'colour=grapefruit') || (cQSE == 'color=pink') || (cQSE == 'colour=pink')) { colourPreference = 'grapefruit'; };

		// Language preference
		if (cQSE == 'lang=en') { displayLanguage = 'en'; languagePreference = 'en'; lPS = '_en'; };
		if (cQSE == 'lang=fr') { displayLanguage = 'fr'; languagePreference = 'fr'; lPS = '_fr'; };
		if (cQSE == 'lang=es') { displayLanguage = 'es'; languagePreference = 'es'; lPS = '_es'; };
		if (cQSE == 'lang=jp') { displayLanguage = 'jp'; languagePreference = 'jp'; lPS = '_jp'; };

		// Mobile
		if ((cQSE == 'mobile=0') || (cQSE == 'mobile=off') || (cQSE == 'mobile=false')) { 
			isMobileVersion = 0;
		} else if ((cQSE == 'mobile=1') || (cQSE == 'mobile=on') || (cQSE == 'mobile=true')) {
			isMobileVersion = 0;
		};

		// Page types
		if (cQSE.indexOf('pageType=') != -1) { 
			tempPageType = cQSE.split('=');
			pageType = tempPageType[(tempPageType.length - 1)];

			/* if (cQSE == 'pageType=blank') {
				for (loop02 = 0; loop02 < fD; loop02++) {
					fDPO += '..\/';
					fDPOFL += '..\/';
				};
			}; */
		};
	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Button blur */

// Blur code for button links... may have to NOT include some browsers... like Netscape? Maybe this was fixed as of version 6?
// if (is_ie) {
	btnBlur00HTML += 'this.blur(); ';
	btnBlur01HTML += ' this.blur();';
	btnBlur02HTML += ' onclick="this.blur();"';
// };


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Embedding content in HTML pages */

// Function to write an HTML content "string" (typically from a JavaScript variable) into a page
function wHC(hCS) { // writeHTMLContent(HTMLContentString)
	// Usage: wHC([variableName] or ['<em>HTML content as a JavaScript string<\/em>'])
	if ((document.write) && (!is_blazer)) {
		document.write(hCS);
	};
};

// Variables for writing external JavaScript files into a page
var embedScriptTag01HTML = '<s' + 'cr';
var embedScriptTag02HTML = 'ipt s' + 'rc="';
var embedScriptTag03HTML = '.j' + 's" ty' + 'pe="te' + 'xt\/ja' + 'vas' + 'cr' + 'ip' + 't"><\/s' + 'cr';
var embedScriptTag03bHTML = '.c' + '3' + 'c" ty' + 'pe="te' + 'xt\/ja' + 'vas' + 'cr' + 'ip' + 't"><\/s' + 'cr';
var embedScriptTag04HTML = 'ip' + 't>';

// Function for writing internal and external CSS files into a page
function wCSSFL(CSSFileType, newStyleCSSEmbeddingSwitch) { // writeCSSFileLink(CSSFileType)
	if (newStyleCSSEmbeddingSwitch) {
		if (CSSFileType == 'internal') {
			iSSHTML = '<st' + 'yle type="te' + 'xt\/css"><!-' + '-' + iSSHTML + '-' + '-><\/sty' + 'le>'; // me' + 'dia="scr' + 'een"
			wHC(iSSHTML);

		} else if ((CSSFileType == 'layout') && (sSLCSSV != 'n\/a')) {
			wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" href="' + fDPO + sSFN + dSFN + skinPreference + '_layout_' + sSLCSSV + '.css" \/>'); // me' + 'dia="scr' + 'een"

		} else if ((CSSFileType == 'content') && (sSLCSSV != 'n\/a')) {
			wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" href="' + fDPO + sSFN + dSFN + skinPreference + '_content_' + sSCCSSV + '.css" \/>'); // me' + 'dia="scr' + 'een"

		} else if ((CSSFileType == 'mobile') && (sSMCSSV != 'n\/a') && isMobileVersion) {
			wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" href="' + fDPO + sSFN + dSFN + skinPreference + '_mobile_' + sSMCSSV + '.css" \/>'); // me' + 'dia="hand' + 'held"

		} else if ((CSSFileType == 'print') && (sSPCSSV != 'n\/a')) {
			if (pM) {
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="scr' + 'een" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="pri' + 'nt" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
			} else {
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="pri' + 'nt" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
			};
		};

	} else {
		if (CSSFileType == 'internal') {
			iSSHTML = '<st' + 'yle type="te' + 'xt\/css" me' + 'dia="scr' + 'een"><!-' + '-' + iSSHTML + '-' + '-><\/sty' + 'le>';
			wHC(iSSHTML);

		} else if ((CSSFileType == 'layout') && (sSLCSSV != 'n\/a')) {
			wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="scr' + 'een" href="' + fDPO + sSFN + dSFN + skinPreference + '_layout_' + sSLCSSV + '.css" \/>');

		} else if ((CSSFileType == 'print') && (sSPCSSV != 'n\/a')) {
			if (pM) {
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="scr' + 'een" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="pri' + 'nt" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
			} else {
				wHC('<li' + 'nk type="te' + 'xt\/css" rel="style' + 'sheet" me' + 'dia="pri' + 'nt" href="' + fDPO + sSFN + dSFN + skinPreference + '_print_' + sSPCSSV + '.css" \/>');
			};
		};
	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Append script to document */

var CSI_appendScriptCount = 0;
var CSI_appendScripts = new Array;

function CSI_appendScript() {
	e_head = document.getElementsByTagName('head').item(0);

	CSI_appendScripts[CSI_appendScriptCount] = document.createElement('script');
		CSI_appendScripts[CSI_appendScriptCount].id = 'appendedScript' + CSI_appendScriptCount;
	// e_Script = document.createElement('SCRIPT');
		// e_Script.id = 'appendedScript' + CSI_appendScriptCount;

	if (e_head && CSI_appendScripts[CSI_appendScriptCount] && arguments) {
		for (loop00 = 0; loop00 < arguments.length; loop00++) {
			
			var scriptArgumentsTemp = arguments[loop00].split('=');

			if (scriptArgumentsTemp[0] == 'onload') {
				if (CSI_appendScripts[CSI_appendScriptCount].addEventListener) {
					// CSI_appendScripts[CSI_appendScriptCount].addEventListener('load', scriptArgumentsTemp[1], false); // Uh, why doesn't this work, exactly?!?

					// document.getElementById(CSI_appendScripts[CSI_appendScriptCount].id).onload = function() {
					CSI_appendScripts[CSI_appendScriptCount].onload = function() {
						eval(scriptArgumentsTemp[1]);
					};
				} else {
					CSI_appendScripts[CSI_appendScriptCount].onreadystatechange = function() {
						if (this.readyState == 'loaded' || this.readyState == 'complete') {
							eval(scriptArgumentsTemp[1]);
						};
					};
				};
			} else {
				scriptArgumentsTemp[1] = scriptArgumentsTemp[1].replace('[equals]', '=');
				CSI_appendScripts[CSI_appendScriptCount].setAttribute(scriptArgumentsTemp[0],scriptArgumentsTemp[1]);
			};
		};

		e_head.appendChild(CSI_appendScripts[CSI_appendScriptCount]);
	};

	CSI_appendScriptCount++;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Status bar */

// Writing to the status bar (used, for example, to account for an IE5 bug where writing to the status bar via a link in an image map doesn't otherwise work)
function setWindowStatus(statusMessageText) {
	if (statusMessageText) {
		setTimeout('window.status="' + statusMessageText + '"', 10);
	} else {
		setTimeout('window.status=""', 10);
	};

	return true;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Page initialization and finalization */

function pI() { // pageInitialization
	doNothing();
};

function sSI() {
	e_SRM = document.createElement('div'); // skinResetMechanism
		e_SRM.id = 'skinReseter';
		e_SRM.className = 'hidden';
		e_SRM.onclick = function() {
			// CSI_switchSkins('tlmi');
			CSI_switchSkins('tlmi');
			location.reload(1);
		};

	e_SRM_Image = document.createElement('img'); // skinSwitcherMechanismImage
		e_SRM_Image.id = 'skinSwitcherImage';
		e_SRM_Image.alt = ' ' + ui_rS + '... ';
		e_SRM_Image.title = ' ' + ui_rS + '... ';
		e_SRM_Image.style.width = '100%';
		e_SRM_Image.style.height = '100%';
		// e_SRM_Image.style.backgroundColor = 'lime';
		e_SRM_Image.src = fDPO + 'media\/images\/blank\/blank_transparent.gif';

	e_SRM.appendChild(e_SRM_Image);

	if (e_body) {
		e_body.appendChild(e_SRM);
	};
};

window.onload = function() {
	storeMasterCookie();
	highlightingInitialization();
	pI(); // pageInitialization
	sSI(); // skinSwitcherInitialization
	aPI(); // additionalPageInitialization
	iPL(); // imagePreLoading

	// randomizeStatusBarMessage();
	// dDMsg(); // displayDebugMessage
};

// document.onload = tMP;


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Document Object Model code */

function gCOT() {
	if (document.getElementsByTagName) {
		tAArray = document.getElementsByTagName('a');
		tDivArray = document.getElementsByTagName('div');
		tIFrameArray = document.getElementsByTagName('iframe');
		tImgArray = document.getElementsByTagName('img');
		tLiArray = document.getElementsByTagName('li');
		tObjectArray = document.getElementsByTagName('object');
		tPArray = document.getElementsByTagName('p');
		tSpanArray = document.getElementsByTagName('span');
	};
};

document.getElementsByClassName = function(classNameReference) {
	var allElementsByClassName = new Array();

	var allElements = document.getElementsByTagName('*');

	for (var loop00 = 0; loop00 < allElements.length; loop00++) {
		// if (allElements[loop00].className.indexOf(classNameReference) != -1) {
		if (hasClass(allElements[loop00], classNameReference)) {
			allElementsByClassName[allElementsByClassName.length] = allElements[loop00];
		};
	};

	return allElementsByClassName;
};

document.getElementsByTagNameAndClassName = function(tagNameReference, classNameReference) {
	var allElementsByTagNameAndClassName = new Array();

	var allElements = document.getElementsByTagName('*');

	for (var loop00 = 0; loop00 < allElements.length; loop00++) {
		// if ((allElements[loop00].tagName.toLowerCase() == tagNameReference.toLowerCase()) && (allElements[loop00].className.indexOf(classNameReference) != -1)) {
		// if ((allElements[loop00].tagName.toLowerCase() == tagNameReference.toLowerCase()) && ((allElements[loop00].className == classNameReference)) || ((allElements[loop00].className.indexOf(classNameReference + ' ') != -1) || (allElements[loop00].className.indexOf(' ' + classNameReference) != -1))) {
		if ((allElements[loop00].tagName.toLowerCase() == tagNameReference.toLowerCase()) && (hasClass(allElements[loop00], classNameReference))) {
			allElementsByTagNameAndClassName[allElementsByTagNameAndClassName.length] = allElements[loop00];
		};
	};

	return allElementsByTagNameAndClassName;
};

function insertAfter(newNode, referenceNode) {
	// if (typeof newNode == 'string') {
	//	newNode = document.getElementById(newNode);
	// };

	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

function replaceNode(newNode, oldNode, newAsClone) {
// alert(newNode.innerHTML)
	if (typeof oldNode == 'string') {
		oldNode = document.getElementById(oldNode);
	};

	if (typeof newNode == 'string') {
		newNode = document.getElementById(newNode);
	};

	if (!oldNode || !newNode) {
		return null;
	};

	newNode = (newAsClone) ? newNode.cloneNode(true) : newNode;
	return oldNode.parentNode.replaceChild(newNode, oldNode);
};

function hasClass(cE, cN) { // currentElement, className
	if (cE && (cE.nodeType == 1)) {
		var classNameRegExp = new RegExp('(\\s|^)' + cN + '(\\s|$)');

		return cE.className.match(classNameRegExp);
	};
};

function addClass(cE, cN) { // currentElement, className
	if (cE && (cE.nodeType == 1)) {
		if (!this.hasClass(cE, cN)) {
			if (cE.className == '') {
				cE.className = cN;
			} else {
				cE.className += ' ' + cN;
			};
		};
	};
};

function addClasses(cE, cN) { // currentElement, classNames
	for (loop00 = 1; loop00 < arguments.length; loop00++) {
		addClass(cE, arguments[loop00]);
	};
};

function removeClass(cE, cN) { // currentElement, className
	if (cE && (cE.nodeType == 1)) {
		if (hasClass(cE, cN)) {
			var classNameRegExp = new RegExp('(\\s|^)' + cN + '(\\s|$)');
			cE.className = cE.className.replace(classNameRegExp, ' ');
		};
	};
};

function getStyle(cE, strCssRule){
	var strValue = '';

	if (document.defaultView && document.defaultView.getComputedStyle) {
		strValue = document.defaultView.getComputedStyle(cE, '').getPropertyValue(strCssRule);

	} else if (cE.currentStyle) {
		try {
			strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
				return p1.toUpperCase();
			});

			strValue = cE.currentStyle[strCssRule];

		} catch(e) {
			// Used to prevent an error in IE 5.0
		};
	};

	return strValue;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Code for determining display environment variables */

function dEV() { // determineEnvironmentVariables
	if (window.innerHeight) {
		cDIB = screen.pixelDepth;

		win_IH = window.innerHeight;
		win_IW = window.innerWidth;

		win_OH = window.outerHeight;
		win_OW = window.outerWidth;

		win_ISH = document.height;
		win_ISW = document.width;

		win_PT = window.screenY;
		win_PL = window.screenX;

		win_ST = window.pageYOffset;
		win_SL = window.pageXOffset;

	} else if ((document.documentElement) && (document.documentElement.clientHeight)) {
		cDIB = screen.colorDepth;

		win_IH = document.documentElement.clientHeight;
		win_IW = document.documentElement.clientWidth;

		win_OH = 'unknown in IE, but it is > ' + win_IH;
		win_OW = (document.documentElement.offsetWidth);

		win_ISH = document.documentElement.scrollHeight;
		win_ISW = document.documentElement.scrollWidth;

		win_PT = window.screenTop;
		win_PL = window.screenLeft;

		win_ST = document.documentElement.scrollTop;
		win_SL = document.documentElement.scrollLeft;

	} else if (document.body) {
		cDIB = screen.colorDepth;

		win_IH = document.body.clientHeight;
		win_IW = document.body.clientWidth;

		win_OH = 'unknown in IE, but it is > ' + win_IH + aMWS;
		win_OW = (document.body.offsetWidth);

		win_ISH = document.body.scrollHeight;
		win_ISW = document.body.scrollWidth;

		win_PT = window.screenTop;
		win_PL = window.screenLeft;

		win_ST = document.body.screenTop;
		win_SL = document.body.screenLeft;
	};

	if (document.body.scrollHeight) {
		win_ISH = document.body.scrollHeight;
	};

	if (document.body.scrollWidth) {
		win_ISW = document.body.scrollWidth;
	};

	if (is_nav6) {
		win_ISH = document.height;
	};

	if ((is_nav6up) || (is_mozilla) || ((is_firefox) && (!is_firefox1r0))) {
		win_ISH = document.documentElement.scrollHeight;
	};

	if (is_opera) {
		// For now, until I figure out why Opera loses track of the proper value...
		// win_ISH = document.documentElement.scrollHeight;
	};

	if (is_ie7up) {
		win_ISH = document.documentElement.scrollHeight;
	};

	if ((is_winxp) && (is_ie) && ((win_OW - win_IW) == 20)) {
		is_winxp_classic = true;
	};

	eVMsg += '|cDIB = ' + cDIB + '|' +

	'scrW = ' + scrW + '|' +
	'scrH = ' + scrH + '|' +

	'win_IW = ' + win_IW + '|' +
	'win_IH = ' + win_IH + '|' +

	'win_OW = ' + win_OW + '|' +
	'win_OH = ' + win_OH + '|' +

	'win_PT = ' + win_PT + '|' +
	'win_PL = ' + win_PL + '|' +

	'win_ISH = ' + win_ISH + '|' +
	'win_ISW = ' + win_ISW;

	// dMsg += eVMsg + '|';
	// alert(eVMsg);
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Code for handling page reloads and resizes */

window.onresize = function() {
	oWR(); // onWindowResize
};

var FAC = 0; // FirefoxAlertCount

function oWR() { // onWindowResize
	if (wROE) {
		aRITP(); // actuallyReInitializeThePage
	};
	/*
	if (is_firefox) {
		if (FAC < 1) {
			// alert(ui_note03 + '\n\nDue to a change in the way that Firefox\n' + aMWS + 'works (as of version 1.0), you should\n' + aMWS + 'reload this page in order for it to\n' + aMWS + 'display properly after resizing your\n' + aMWS + 'browser window.');
		};
		aRITP(); // actuallyReInitializeThePage
	} else if (pageType != 'blank') {
		if (wROE) {
			window.location.reload();
		};
	};
	*/
};

function aRITP() { // actuallyReInitializeThePage
	pI();
	// aPI();
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Supplimental and skin-specific scripts folder identification */

// Is it a custom skin?
if (skinPreference != '') {
	if ((skinPreference.substring(1,0) != '_') || (skinPreference.match('_csi'))) {
		customSkinEnabled = 1;

		dSFN += '__custom\/' + skinPreference + rFS;
	} else {
		if ((skinPreference != '_pocketpc') && (skinPreference != '_palmos') && (skinPreference != '_admin')) {
			iHM = 1;
		};

		dSFN += skinPreference + rFS;
	};
};
dMsg += 'sSFN = ' + sSFN + '|';


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Skin stuff */

if ((skinPreference == '_admin') || (window.name == 'CodewiseAdmin')) {
	skinPreference = '_admin';
	sSPEJSV = '1-01';
	sSIPSJSV = 'n\/a';
} else if (skinPreference == '_palmos') {
	is_wince = true; // Why, exactly?
	iHM = false;
	sSPEJSV = '1-00';
	sSIPSJSV = 'n\/a';
} else if (skinPreference == '_pocketpc') {
	is_wince = true;
	iHM = false;
	sSPEJSV = '1-00';
	sSIPSJSV = 'n\/a';
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Write links to externally referenced script files */

if ((iHM) && (pageType != 'blank')) {
	wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPOFL + '_config\/nav_config' + lPS + embedScriptTag03bHTML + embedScriptTag04HTML);

	// if ((!customSkinEnabled) && (fN == 'sample_page.php')) {
	// 	wHC(embedScriptTag01HTML + embedScriptTag02HTML + 'http:\/\/www.codewise.ca\/_config\/nav_config' + lPS + embedScriptTag03bHTML + embedScriptTag04HTML);
	// };
};

if (fJSV != 'n\/a') {
	wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + 'codewise_functions_' + fJSV + embedScriptTag03HTML + embedScriptTag04HTML);
	// wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + 'codewise_common_elements_' + cEJSV + embedScriptTag03HTML + embedScriptTag04HTML);
};

// if ((skinPreference != '') && ((pageType != 'blank') || ((pageType == 'blank') && (pM)))) {
if (skinPreference != '') {
	if (sSIPSJSV != 'n\/a') { 
		wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + dSFN + skinPreference + '_in_page_styles_' + sSIPSJSV + embedScriptTag03HTML + embedScriptTag04HTML);
	};

	if (sSPEJSV != 'n\/a') {
		// alert(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + dSFN + skinPreference + '_page_elements_' + sSPEJSV + embedScriptTag03HTML + embedScriptTag04HTML)
		wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + dSFN + skinPreference + '_page_elements_' + sSPEJSV + embedScriptTag03HTML + embedScriptTag04HTML);
	};
};

if (iHM) { 
	if (pageType != 'blank') { 
		wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPOFL + '_config\/nav_config' + lPS + embedScriptTag03bHTML + embedScriptTag04HTML);

		if ((!customSkinEnabled) && (fN == 'sample_page.php')) {
			wHC(embedScriptTag01HTML + embedScriptTag02HTML + 'http:\/\/www.codewise.ca\/_config\/nav_config' + lPS + embedScriptTag03bHTML + embedScriptTag04HTML);
		};

		wHC(embedScriptTag01HTML + embedScriptTag02HTML + fDPO + sSFN + '_menus\/menu_script' + embedScriptTag03HTML + embedScriptTag04HTML);
	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Write internal style sheet link */

iSSHTML = ' .lowLevelBrowserContent { display: none; }';

// Expand-O-Matic styles
iSSHTML += ' div.ExpandOMaticContent { display: none; }';
iSSHTML += ' span.ExpandOMaticGraphic { display: inline; }';
iSSHTML += ' img.EOMIcon { width: 16px; height: 16px; float: left; margin-right: 3px; margin-bottom: 0px; vertical-align: bottom; border: 0px dashed lime; }';

// Change element opacity styles
iSSHTML += ' #imageSwapImage { display: block; opacity: 1; }';
iSSHTML += ' #imageRotatorImage { display: block; opacity: 1; }';

if ((is_nav) || (is_mozilla)) {
	if (!is_firefox3r5) {
		/*
		iSSHTML += ' #imageSwapImage { -moz-opacity: 1; }';
		iSSHTML += ' #imageRotatorImage { -moz-opacity: 1; }';
		*/
	};
};

if (is_ie) {
	iSSHTML += ' #imageSwapImage { filter: opacity(100); }';
	iSSHTML += ' #imageRotatorImage { filter: opacity(100); }';

	if (!is_ie7up) {
		iSSHTML += ' a, a:link, a:active, a:hover, a:visited, a img, a:link img, a:active img, a:hover img, a:visited img { border-width: 0px !important; }';
		iSSHTML += ' img { border-width: 0px; }';
	};
};

if (is_win) {
	iSSHTML += ' .windowsOnly { display: block; } span.windowsOnly { display: inline; }';
};

// Skin switcher skin icons
// iSSHTML += ' div.skinIcon { float: left; width: 138px; height: 141px; padding: 19px 0px 0px 0px; font-size: 11px; line-height: 1.2em; text-align: center; } div.skinIcon img { display: block; margin: 0px auto 32px auto; }';
// iSSHTML += ' div.skinIcon { float: left; width: 200px; height: auto; padding: 0px 0px 0px 0px; font-size: 11px; line-height: 1.2em; text-align: center; } div.skinIcon img { display: block; margin: 0px auto 32px auto; }';

wHC('<style type="text\/css"><!-' + '-\n' + iSSHTML + '\n-' + '-><\/style>');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Image preloading */

if ((document.images) && (eOMC)) {
	// Expand-O-Matic icons
	eom_expand_icon_on.src = fDPO + 'media\/images\/icons\/eom_expand_icon_on.gif';
	eom_expand_icon_default = fDPO + 'media\/images\/icons\/eom_expand_icon_off.gif';
	eom_expand_icon_off.src = eom_expand_icon_default;

	eom_collapse_icon_on.src = fDPO + 'media\/images\/icons\/eom_collapse_icon_on.gif';
	eom_collapse_icon_default = fDPO + 'media\/images\/icons\/eom_collapse_icon_off.gif';
	eom_collapse_icon_off.src = eom_collapse_icon_default;
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Debugging code */

function dDMsg() { // displayDebugMessage
	if (!dTM) {
		return;
	};

	var tempArray;
	cDM = '';

	if (dMN) {
		tempArray = dMsg.split('|');
		for (loop03 = 0; loop03 < (tempArray.length - 1); loop03++) {
			if (tempArray[loop03] != '') {
				cDM += '- ' + tempArray[loop03] + aMWS + '\n';
			} else {
				cDM += aMWS + '\n';
			};
		};
		dMsg = 'Codewise(TM) debugging information:\n\n' + cDM;
	} else {
		tempArray = dMsg.split('|');
		for (loop04 = 0; loop04 < (tempArray.length - 1); loop04++) {
			if (loop04 != 0) {
				cDM += ';' + aMWS;
			};
			cDM += tempArray[loop04];
		};
		dMsg = 'Codewise(TM) debugging information:' + cDM;
	};
	if (dM) {
		if (dMN) {
			copyToClipboard(dMsg);
		} else {
			if (cDM != '') {
				setScrollWindowStatusMessage(dMsg);
			};
			scrollWindowStatus();
		};
	} else {
		dMsg = '';
	};
};

dMsg += 'The _codewise\/codewise_master.js script has loaded...|';
// alert('The _codewise\/codewise_master.js script has loaded...|');