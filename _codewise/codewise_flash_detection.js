

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Codewise Presentation Manager - Flash Detection Script File, JS

Copyright (c) 2004-2013 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Created: 2006-04-13

Revision History:
  1.00	- Initial version. TB, 2006-04-13, 10:42
	- Added QuickTime detection. TB, 2007-07-11, 14:16

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Flash Player and QuickTime plugin detection */

// Internet Explorer
if (window.ActiveXObject) {
	// Flash detection
	/*
	FlashPlayerObject = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	if (FlashPlayerObject) {
		flashinstalled = 2;

		try {
			FlashPlayerVersionTemp = FlashPlayerObject.GetVariable('$version');
			FlashPlayerVersionTempArray = FlashPlayerVersionTemp.split(' ')[1].split(','); // .toLowerCase().split('win ');

			flashversion = parseInt(FlashPlayerVersionTempArray[0], 10);
			FlashPlayerVersionMinor = parseInt(FlashPlayerVersionTempArray[1], 10);
			FlashPlayerVersionRevision = parseInt(FlashPlayerVersionTempArray[2], 10);
		} catch(err) {
			flashinstalled = 1;
		};
	};
	*/

	// Flash detection
	try {
		FlashPlayerObject = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

		if (FlashPlayerObject) {
			flashinstalled = 2;

			FlashPlayerVersionTemp = FlashPlayerObject.GetVariable('$version');
			FlashPlayerVersionTempArray = FlashPlayerVersionTemp.split(' ')[1].split(','); // .toLowerCase().split('win ');

			flashversion = parseInt(FlashPlayerVersionTempArray[0], 10);
			FlashPlayerVersionMinor = parseInt(FlashPlayerVersionTempArray[1], 10);
			FlashPlayerVersionRevision = parseInt(FlashPlayerVersionTempArray[2], 10);
		};
	} catch(err) {
			flashinstalled = 1;
	};

	// QuickTime Detection
	if (QuickTimeDetection) {
		try {
			QuickTimePlayerObject = new ActiveXObject('QuickTimeCheckObject.QuickTimeCheck.1');

			if (QuickTimePlayerObject) {
				if (QuickTimePlayerObject.IsQuickTimeAvailable(0)) {
					QuickTimePlayerInstalled = 1;
					QuickTimePlayerVersion = Math.round((QuickTimePlayerObject.QuickTimeVersion.toString(16, 10) / 1000000) * 10) / 10;
				};
			};
		} catch(err) {

		};
	};

// Else if the plugins array exists
} else if (navigator.plugins && (navigator.plugins.length > 0)) {
	FlashPlayerPluginObject = navigator.plugins['Shockwave Flash'];

	// Flash detection
	if (FlashPlayerPluginObject) {
		flashinstalled = 2;

		if (FlashPlayerPluginObject.description) {
			var pluginDescription = FlashPlayerPluginObject.description;

			flashversion = pluginDescription.split('.')[0].split('Shockwave Flash ')[1];

			var FlashVersionSplitBy = ' r';
			if (pluginDescription.indexOf(' d') != -1) {
				FlashVersionSplitBy = ' d';
			};

			FlashPlayerVersionMinor = pluginDescription.split('.')[1].split(FlashVersionSplitBy)[0];
			FlashPlayerVersionRevision = pluginDescription.split('.')[1].split(FlashVersionSplitBy)[1];
		};

	} else {
		flashinstalled = 1;
		if (navigator.plugins['Shockwave Flash 2.0']) {
			flashinstalled = 2;
			flashversion = 2;
		};
	};

	// QuickTime Detection
	for (loop00 = 0; loop00 < navigator.plugins.length; loop00++) {
		if (navigator.plugins[loop00].name.indexOf('QuickTime') != -1) { 
			QuickTimePlayerInstalled = 1;
			QuickTimePlayerVersion = parseFloat(navigator.plugins[loop00].name.substring(18));
		};
	};

// Else
} else if ((navigator.mimeTypes) && (navigator.mimeTypes.length)) {
	FlashPlayerPluginObject = navigator.mimeTypes['application/FlashPlayerPluginObject-shockwave-flash'];

	if ((FlashPlayerPluginObject) && (FlashPlayerPluginObject.enabledPlugin)) {
		flashinstalled = 2;
	} else {
		flashinstalled = 1;
	};
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Flash and QuickTime object embedding */

var eFM_ObjectTagHTML = ''; // embeddedFlashMovie_ObjectTagHML
var eFM_EmbedTagHTML = ''; // embeddedFlashMovie_EmbedTagHTML

function embedFlashMovie(eFM_Filename, eFM_Container, eFM_PlayerVersion, eFM_Width, eFM_Height, eFM_OptionalParameters) {
	eFM_ObjectTagHTML = '';
	eFM_EmbedTagHTML = '';

	if (document.getElementById(eFM_Container)) {
		var e_FlashContainer = document.getElementById(eFM_Container); // FlashContainerElement

		var eFM_IdAttribute01HTML = '';
		var eFM_IdAttribute02HTML = '';

		if (eFM_OptionalParameters) {
			var eFM_Temp01 = eFM_OptionalParameters.split(',');

			for (loop00 = 0; loop00 < eFM_Temp01.length; loop00++) {
				eFM_Temp02 = eFM_Temp01[loop00].split('=');

				if (eFM_Temp02[0] == 'id') {
					eFM_IdAttribute01HTML += 'id="' + eFM_Temp02[1] + '" ';
					eFM_IdAttribute02HTML += 'name="' + eFM_Temp02[1] + '" ';
				};
			};
		};

		// if (eFM_Filename.indexOf('http:\/\/') == -1) {
		// if ((eFM_Filename.substring(0,7) != 'http:\/\/') && (eFM_Filename.indexOf('\/') == -1)) {
		if (eFM_Filename.indexOf('\/') == -1) {
			eFM_Filename = fDPO + mFPO + 'media\/flash\/' + eFM_Filename;
		};

		eFM_ObjectTagHTML += '<object ' + eFM_IdAttribute01HTML;
		eFM_ObjectTagHTML += eFM_IdAttribute02HTML;
		eFM_ObjectTagHTML += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:\/\/download.macromedia.com\/pub\/shockwave\/cabs\/flash\/swflash.cab#version=' + eFM_PlayerVersion + ',0,0,0" width="' + eFM_Width + '" height="' + eFM_Height + '">'; // Should ' type="application\/x-shockwave-flash"' be added?!?
		eFM_ObjectTagHTML += '<param name="movie" value="' + eFM_Filename + '" \/>';
		eFM_ObjectTagHTML += '<param name="id" value="' + eFM_Temp02[1] + '" \/>';

		eFM_EmbedTagHTML += '<embed ' + eFM_IdAttribute02HTML + 'pluginspage="http:\/\/www.macromedia.com\/go\/getflashplayer" type="application\/x-shockwave-flash" src="' + eFM_Filename + '" width="' + eFM_Width + '" height="' + eFM_Height + '"';

		if (eFM_OptionalParameters) {
			for (loop00 = 0; loop00 < eFM_Temp01.length; loop00++) {
				eFM_Temp02 = eFM_Temp01[loop00].split('=');
				eFM_ParameterName = eFM_Temp02[0];
				eFM_Temp02[0] = '';
				eFM_ParameterValue = eFM_Temp02[1];

				if (eFM_Temp02.length > 2) {
					for (loop01 = 2; loop01 < (eFM_Temp01.length - 1); loop01++) {
						eFM_ParameterValue += '=' + eFM_Temp02[loop01];
					};
				};

				if (eFM_Temp02[0] != 'id') {
					eFM_ObjectTagHTML += '<param name="' + eFM_ParameterName + '" value="' + eFM_ParameterValue + '" \/>';

					eFM_EmbedTagHTML += ' ' + eFM_ParameterName + '="' + eFM_ParameterValue + '"';
				};
			};
		};

		eFM_EmbedTagHTML += '><\/embed>';
		eFM_ObjectTagHTML += eFM_EmbedTagHTML + '<\/object>';

		if ((flashinstalled == 2) && (flashversion >= eFM_PlayerVersion)) {
			e_FlashContainer.innerHTML = eFM_ObjectTagHTML;
		};
	} else {
		// alert('The necessary container element does NOT exist...');
	};
};

var eQTM_ObjectTagHTML = ''; // embeddedQuickTimeMovie_ObjectTagHML
var eQTM_EmbedTagHTML = ''; // embeddedQuickTimeMovie_EmbedTagHTML

function embedQuickTimeMovie(eQTM_Filename, eQTM_Container, eQTM_PlayerVersion, eQTM_Width, eQTM_Height, eQTM_OptionalParameters) {
	eQTM_ObjectTagHTML = '';
	eQTM_EmbedTagHTML = '';

	if (document.getElementById(eQTM_Container)) {
		var e_QuickTimeContainer = document.getElementById(eQTM_Container); // QuickTimeContainerElement

		var eQTM_IdAttribute01HTML = '';
		var eQTM_IdAttribute02HTML = '';

		if (eQTM_OptionalParameters) {
			var eQTM_Temp01 = eQTM_OptionalParameters.split(',');

			for (loop00 = 0; loop00 < eQTM_Temp01.length; loop00++) {
				eQTM_Temp02 = eQTM_Temp01[loop00].split('=');

				if (eQTM_Temp02[0] == 'id') {
					eQTM_IdAttribute01HTML += 'id="' + eQTM_Temp02[1] + '" ';
					eQTM_IdAttribute02HTML += 'name="' + eQTM_Temp02[1] + '" ';
				} else if ((eQTM_Temp02[0] == 'controller') && (eQTM_Temp02[1] == 'true')) {
					eQTM_Height += 16;
				};
			};
		};

		// if (eQTM_Filename.indexOf('http:\/\/') == -1) {
		// if ((eQTM_Filename.substring(0,7) != 'http:\/\/') && (eQTM_Filename.indexOf('\/') == -1)) {
		if (eQTM_Filename.indexOf('\/') == -1) {
			eQTM_Filename = fDPO + mFPO + 'media\/quicktime\/' + eQTM_Filename;
		};

		eQTM_ObjectTagHTML += '<object ' + eQTM_IdAttribute01HTML + 'classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http:\/\/www.apple.com\/qtactivex\/qtplugin.cab" width="' + eQTM_Width + '" height="' + eQTM_Height + '">'; // Should ' type="video\/quicktime"' be added?!?
		eQTM_ObjectTagHTML += '<param name="type" value="video\/quicktime" \/>';
		// eQTM_ObjectTagHTML += '<param name="src" value="' + fDPO + mFPO + eQTM_Filename + '" \/>';
		eQTM_ObjectTagHTML += '<param name="src" value="' + eQTM_Filename + '" \/>';

		// eQTM_EmbedTagHTML += '<embed ' + eQTM_IdAttribute02HTML + 'pluginspage="http:\/\/www.apple.com\/quicktime\/download\/" type="video\/quicktime" src="' + fDPO + mFPO + eQTM_Filename + '" width="' + eQTM_Width + '" height="' + eQTM_Height + '"';
		eQTM_EmbedTagHTML += '<embed ' + eQTM_IdAttribute02HTML + 'pluginspage="http:\/\/www.apple.com\/quicktime\/download\/" type="video\/quicktime" src="' + eQTM_Filename + '" width="' + eQTM_Width + '" height="' + eQTM_Height + '"';

		if (eQTM_OptionalParameters) {
			for (loop00 = 0; loop00 < eQTM_Temp01.length; loop00++) {
				eQTM_Temp02 = eQTM_Temp01[loop00].split('=');

				if (eQTM_Temp02[0] != 'id') {
					eQTM_ObjectTagHTML += '<param name="' + eQTM_Temp02[0] + '" value="' + eQTM_Temp02[1] + '" />';

					eQTM_EmbedTagHTML += ' ' + eQTM_Temp02[0] + '="' + eQTM_Temp02[1] + '"';
				};
			};
		};

		eQTM_EmbedTagHTML += '><\/embed>';
		eQTM_ObjectTagHTML += eQTM_EmbedTagHTML + '<\/object>';

		if (QuickTimePlayerInstalled && (QuickTimePlayerVersion >= eQTM_PlayerVersion)) {
			e_QuickTimeContainer.innerHTML = eQTM_ObjectTagHTML;
		};
	} else {
		// alert('The necessary container element does NOT exist...');
	};
};

function rAFO() { // restyleAllFlashObjects
	if ((!document.getElementsByTagName) || (!is_ie)) {
		return;
	};

	for (loop01 = 0; loop01 < tObjectArray.length; loop01++) {
		tObjectArray[loop01].outerHTML = tObjectArray[loop01].outerHTML;
	};
};

/*
// When the page unloads, remove all object tags from memory...?
window.onunload = function() {
	if (document.getElementsByTagName) {
		for (loop01 = 0; loop01 < tObjectArray.length; loop01++) {
			tObjectArray[i].outerHTML = '';
		};
	};
};
*/


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Debugging */

dMsg += 'The _codewise\/codewise_flash_detection.js script has been loaded|';
// alert('The _codewise\/codewise_flash_detection.js script has been loaded|');

