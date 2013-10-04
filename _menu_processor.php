<?php
/* ~~~~~~~~~~~~~~~ Menu Processor Include, [Project Name] ~~~~~~~~~~~~~~

Copyright (c) 2004-2009 Codewise Systems Inc. & Twisted Lime Media Inc. 
All rights reserved.

Author(s): Tom Lanhaus, Travis Bolander, Nicolas Gomez

Created: 2008-06-16

Revision History:
  0.01	- Initial version, based on Tom's earlier work. TB, 2008-05-09
  0.02	- Complete re-write. NG, 2008-06-16
  0.03	- Made the menu into a function so multiple menus can be inserted,
  	  via doMenu();. Temporary fix, secondary+ navs wont work properly.
  0.04	- Reintroduced capability to have sub-menu's. menu.xml's id attribute 
	  augmented. (primaryNav, secondaryNav,...). NG 2008-09-23
  0.05  - Fixed extra /LI tag being printed on hidden menu item, as well as
	  several other display bugs. NG 2008-10-14
  0.06  - Fixed missing /LI tag for root items. NG 2008-10-15
  0.07  - UL tags are no longer printed out if all sub-items are hidden.
	  NG 2008-10-16
  0.08  - Traversal now returns what it wrote (instead of whether it wrote).
	  Simpler checking if node was printed or not. Above corrects ending 
	  /LI tag issue in sub menus. NG 2008-10-17
  0.09  - Added ability to output images inside the link. img attribute
  0.10	- Fixed href string check, there was extra space at end of string
 		- Fix/Change double class being put out. class attribute is appended to existing class
  0.11  - Added ability to give the img tag any attribute via the use of 'img_' pretag on xml attributes.
		  example: img_class="someclass" will generate <img class="someclass">
  0.12  - Added $baseFOLDER variable
        - Changed menu not found error action from exit to return. Rest of page will now continue to render even if menu xml is not found. 
  0.13  - Changed the default menu file location to document root/_menu.xml
		- Changed order of arguments to doMenu()
		- Added argument to doMenu() => Write All Menu Items
  0.14	- Redid the defines to better match what they do, and for usability from outside of the menu processor (for the doMenu calls)
  0.15	- Added ability to pass the XML content to the doMenu function, instead of using a _menu.xml file
  0.16  - Fixed default ID tage being put out on A tag when id is defined in the xml file.
  0.17  - Added extra error checking when loading XML from a string. NG 2009-10-7
  0.18  - Added handling of the case where the requested menuId doesnt exist. NG 2010-3-26
  0.19  - Added handling of "isActive" to do the current menu trail as per Drupal. No longer uses the URL. NG 2010-12-14
  0.20  - Added the case where the link is a mailto: not to add the leading slash. NG 2011-02-22
  0.21  - Added setting to choose if the children of the active menu should be expanded or not. Default is false. NG. 2012-05-03
  		- Added doMenu2() function to accept the arguments as an array. 
  0.22  - Added 'hasChildren' to the writeNode function to allow for knowing in low level when a menu item has children, even if not expanded. NG. 2013-03-11
  0.23  - Replaced <front> in the xml content with nothing to avoid escape issues. NG. 2013-03-15

Relies on:
	- $currentPage, $baseURL, $baseFOLDER variables supplied by header include
	- $baseFOLDER = folder(s) path off the web root where the default _menu.xml file is located. ie. if menu is located in /menu_proc/_menu.xml then $baseFOLDER = "menu_proc/"
	- $menuID (optional) = id of menu to be loaded

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

if(!isset($baseFOLDER)) $baseFOLDER = '';
 
// Internal variables
DEFINE("MENUP_WRITE_ALL_MENU_ITEMS", true);	// Show the entire menu expandanded out ?
DEFINE("MENUP_DONT_WRITE_ALL_MENU_ITEMS", false);	

DEFINE("MENUP_DEFAULT_MENU_DATA_FILE", $_SERVER["DOCUMENT_ROOT"] . $baseFOLDER . '/_menu.xml');	//Assumes the menu xml is at the root
DEFINE("MENUP_MENU_DATA_STRING", "");	//empty string to use as placeholder, easier to know what the call is doing

DEFINE("MENUP_MENU_HTML_EXPLODED", TRUE);	// Explode all html. Adds indents and line breaks. 
DEFINE("MENUP_MENU_HTML_COMPACT", FALSE);	

DEFINE("MENUP_DEFAULT_LINE_BREAK", "");				// Line break after every entry. "\n" helps with debugging.


// Internal Variables
$defaultPrimaryID = 'primaryNav';
$writeAllMenuItems = MENUP_DONT_WRITE_ALL_MENU_ITEMS;
// $menuHTML = '';				// No longer global. Traversal concatenates the results
$indent = '';
$foundMenuID = false;
$menuIdArr = array();
$expandDownChildren = false;


// Replacement array used
//MOVED to writeNode - due to global array issues
//$replacementArr = array(
//	"&" => "&amp;",
//	"'" => "&#39;",
//	"(nbsp)" => "&nbsp;",
//	"(TM)" => "&#8482;"
//);


// For testing
if (isset($_GET['currentPage']) || isset($_GET['menuFile'])) {
	$menuID = $_GET['menuID'];
	//$baseURL = "/";

	// $menuDataFile = '.' . $menuDataFile;

	if (isset($_GET['currentPage'])) {
		$currentPage = $_GET['currentPage'];
	}
	
	
	if (isset($_GET['baseURL'])) {
		$baseURL = $_GET['baseURL'];
	}

	if (isset($_GET['menuFile'])) {
		$menuDataFile = $_GET['menuFile'];
	}

	if (isset($_GET['writeAllMenuItems'])) {
		$writeAllMenuItems = $_GET['writeAllMenuItems'];
	}

	echo "Debug mode...\n\n";
}


//Receive an array of settings
function doMenu2($settingsArray = array()){	
	return doMenu($settingsArray['menu_id'], $settingsArray['write_ami'], $settingsArray['menu_data_file'], $settingsArray['menu_html_expanded'], $settingsArray['xml_content'], $settingsArray['line_break'], $settingsArray['expand_children'], $settingsArray['menu_primary_id_override']);
}

function doMenu($menuID ='', $writeAMI=MENUP_DONT_WRITE_ALL_MENU_ITEMS, $menuDataFile=MENUP_DEFAULT_MENU_DATA_FILE, $menuHTMLExploded=MENUP_MENU_HTML_COMPACT, $xmlContent = "", $lineBreak=MENUP_DEFAULT_LINE_BREAK, $expandChildren=FALSE, $menuPrimaryIDOverride = '') {
	// global $menuHTML;
	global $xml, $defaultPrimaryID, $menuPrimaryID;
	global $menuIdArr;
	global $writeAllMenuItems;
	global $currentPage;
	global $baseURL;
	global $expandDownChildren;
	
	
	$expandDownChildren = $expandChildren;
	$writeAllMenuItems = $writeAMI;

	if ($menuHTMLExploded) {
		$lineBreak = "\n";
	} else {
		$lineBreak = "";
	}

	$GLOBALS['menuHTMLExploded'] = $menuHTMLExploded;
	$GLOBALS['lineBreak'] = $lineBreak;

	// Reset some vars
	$menuHTML = '';
	$baseLevel = 0;

	
	//in case the $currentPage is not set by the caller, then we get it from the server variables
	if (!isset($currentPage)) {
		$currentPage = $_SERVER["REQUEST_URI"];
	}
	
	
	if($menuDataFile != ""){
		// Load the XML file
		if (file_exists($menuDataFile)) {
			if($xml = simplexml_load_file($menuDataFile)){
				
			}else{
				echo 'Error loading menu file. Possibly invalid character in a menu title.';
				return;
			}
		} else {
			//exit('Failed to open ' . $menuDataFile);
			echo ('Failed to open ' . $menuDataFile);
			return;
		}
	}else if($xmlContent != ""){
		//libxml_use_internal_errors(true);	//let us grab the errors afterward, if any.
		
		$xmlContent = str_ireplace("<front>", "",$xmlContent);	//< and > cause issues in xml so they need to be escaped
		
		if($xml = simplexml_load_string(($xmlContent))){
			
		}else{
//			print_r($xmlContent);
			echo 'Error loading menu content. Possibly invalid character in a menu title.';
//			foreach(libxml_get_errors() as $error) {
//		        echo "\t", $error->message;
//		    }
//			return;
		}
	}else{
		echo 'No file specified, and no XML string specified.';
		return;
	}
	
	
	$foundMenuID = false;
	
	// Grab only the menu we want, based on id. Compatible with old menu XML format (one menu per xml file)
	foreach ($xml->children() as $aMenu) {
		$menuIdArr = explode(',',$aMenu['id']);
		if (isset($menuID) && ($menuIdArr[0] == $menuID)) {
			$foundMenuID = true;
			$xml = simplexml_load_string($aMenu->asXML());
			break;
		}
	}
	
	if(!$foundMenuID){	//if menu id not found, dont output anything.
		return;
	}

	// Allow for a different id attribute than the default.
	if (!isset($menuID)) {
		$menuPrimaryID = $defaultPrimaryID;
	} else {
		$menuPrimaryID = $menuID;
	}
	
	//Allow for overriding of the id/class
	if($menuPrimaryIDOverride != ''){
		$menuIdArr = explode(',',$menuPrimaryIDOverride);
		$menuPrimaryID = $menuIdArr[0];
	}

	// Screen output
	$menuHTML .= '<ul id="' . $menuPrimaryID . '" class="' . $menuPrimaryID . '">' . $lineBreak;

	$id = 0;

	foreach ($xml->children() as $nav) {
		$id++;
		$wroteNode = writeNode($nav, $baseLevel, $id, count($nav->children()));
		$menuHTML .= $wroteNode;	// writeNode now returns the html to be written

		if ($wroteNode == '') {	// If the node was not written out, then decrement the ID count so the next node printed has proper id number
			$id--;
		}

		$doEndLi = traverseNode($nav, $baseLevel+1, $id);
		$menuHTML .= $doEndLi;


		if ($wroteNode) {
			$menuHTML .= '</li>' . $lineBreak; // Written here to allow for children to belong within the LI tag of the parent.
		} else {
			$menuHTML .= $lineBreak;
		}
	}

	$menuHTML .= '</ul>';

	print $menuHTML;
	// End output
}


// Returns the text to be used in the HTML output based on the depth of the node requesting.
function getLevelAsText($level) {
	global $menuIdArr;

	/*if ($level == 0) {
		return 'primary';
	} else if ($level == 1) {
		return 'secondary';
	} else if ($level == 2) {
		return 'thirdLevel';
	} else if ($level == 3) {
		return 'fourthLevel';
	} else if ($level == 4) {
		return 'fifthLevel';
	} else if ($level == 5) {
		return 'sixthLevel';
	} else if ($level == 6) {
		return 'seventhLevel';
	} else {
		return $level; // Fail-safe in case navigation is very deep
	}*/

	return $menuIdArr[$level];
}


// Traverse a node and its children; $parentID is a number used to identify the class/id in the HTML
function traverseNode($node, $depth, $parentId, $isActiveTrail = false) {
	global $lineBreak, $indent,$writeAllMenuItems, $expandDownChildren;
	global $menuPrimaryID;
	$id = 0;

	$wroteAtLeastOneItem = false;

	if($node['isActive'] == "true" && $expandDownChildren){	//If this node is the active menu item, keep track of it down the trail
		$isActiveTrail = true;
	}
	
	
	if (isChildOf($node) || $writeAllMenuItems || $isActiveTrail ) {	
		$hasChildren = count($node->children());

		if ($hasChildren) {
			$menuHTMLTmp = '' ;
			$menuHTMLTmp .=  '<ul id="' . getLevelAsText($depth). '" class="' . getLevelAsText($depth). '">' . $lineBreak;

			foreach ($node->children() as $node) {
				$id++;
				$writeEndLITag = writeNode($node, $depth, $parentId . '_' . $id, count($node->children()));
				$menuHTMLTmp .= $writeEndLITag;

				if ($writeEndLITag) {
					$wroteAtLeastOneItem = true;
				}

				if ($writeEndLITag == '') {	// If the node was not written out, then decrement the ID count so the next node printed has proper id number
					$id--;
				}

				if (count($node->children()) > 0 ) { // If this node has further children, traverse and repeat.
					$menuHTMLTmp .= traverseNode($node, $depth + 1, $parentId . '_' . $id, $isActiveTrail);
				}

				if ($writeEndLITag) {
					$menuHTMLTmp .=  '</li>' . $lineBreak; // Written here to allow for children to belong within the LI tag of the parent.
				}
			}

			$menuHTMLTmp .= $indent . '</ul>' . $lineBreak;

			if ($wroteAtLeastOneItem) {
				return $menuHTMLTmp;
			}

		}
	}

	return ''; // $wroteAtLeastOneItem;
}


// Checks to see if the $currentPage is a child of this node
function isChildOf($node) {
	global $currentPage;

	// Create a new xml node based on the passed on node, so xpath only searches this node
	$node = simplexml_load_string($node->asXML());

	//$found = ($node->xpath("// item[@link='" . $currentPage . "']"));
	$found = ($node->xpath("// item[@isActive='true']"));	

	if (count($found) > 0) {
		return true;
	} else {
		return false;
	}
}


// Generate the code to print out this node to HTML; return whether a menu item was printed or not
function writeNode($node, $level, $id, $hasChildren = false) {
	global $lineBreak, $indent, $baseURL, $menuHTMLExploded;
	global $menuPrimaryID;
	
	$replacementArr = array(
		"&" => "&amp;",
		"'" => "&#39;",
		"(nbsp)" => "&nbsp;",
		"(TM)" => "&#8482;"
	);

	
	if ($menuHTMLExploded) {
		$indent = str_repeat("	", ($level + 1));
	}

	// print_r($node);
	if (!(isset($node['hideItem']) && ($node['hideItem'] == '1'))) { // Only write out if NOT set to hide the item from HTML output
		$menuHTMLTmp = '';
		
		
		$linkHref = strtr($node['link'], $replacementArr); // Replace certain characters with equivilant HTML
	
		// Add $baseURL path offset if appropriate
		if (($linkHref <> '') && (strpos($linkHref, 'http://') === false) && (strpos($linkHref, 'https://') === false) && (strpos($linkHref, 'javascript:') === false) && (strpos($linkHref, '#') === false) && (strpos($linkHref, 'tel:') === false) && (strpos($linkHref, 'mailto:') === false)) {
			$linkHref = $baseURL . $linkHref;
		}

		if ($linkHref == '') {
			// $linkHref = 'href="' . "#topOfPage" . '"';
			$linkHref = 'href="' . $baseURL . '"';

			// Unsure where $linkOnClick comes from or is defined - may be $linkHref
			// if ($linkOnclick == '') {
			// 	$linkOnclick = ' onclick="alert(\'Error: URL not provided for this link.\'); return false;"';
			// }
		} else {
			$linkHref = 'href="' . $linkHref . '"';
		}

		// Prep. inner link contents with caption or image
		if(isset($node['img'])){
			$captionHTML = '<img src="' . $baseURL . $node['img'] .'" ' . prepareOtherImgAttributes($node) . ' alt="'. strtr($node['caption'], $replacementArr) . '" id="' . getLevelAsText($level) . 'Link' . $id . 'Image" />';
		}else{
			$captionHTML = strtr($node['caption'], $replacementArr); // Replace certain characters with equivilant HTML
		}
		
		
		// Temporarily remove the id and class from the LI
		// $menuHTMLTmp .= $indent . '<li id="' . getLevelAsText($level) . 'NavLink' . $id . 'Container" class="' . $menuPrimaryID . '"><a ' . prepareOtherAttributes($node) . 'id="' . getLevelAsText($level) . 'NavLink' . $id . '" class="' . getLevelAsText($level) . 'Nav" '. $linkHref . '>' . $captionHTML . '</a>';
		
		
		$classText = getLevelAsText($level);
		if(isset($node['class'])){
			$classText .= " " . $node['class'];
		}
		
		if($hasChildren){
			$classText .= ' hasChildren ';	//expanded or not
		}
		
		if(!isset($node->attributes()->id)){
			$defaultAId = 'id="' . getLevelAsText($level) . 'Link' . $id . '"';
		}else{
			$defaultAId = "";
		}
		$menuHTMLTmp .= $indent . '<li class="' . $classText . '"><a ' . prepareOtherAttributes($node) .  ' ' . $defaultAId . ' class="' . $classText . '" '. $linkHref . '>' . $captionHTML . '</a>';
		

		
		
		return $menuHTMLTmp;
	} else {
		return '';
	}
}


// Grab and prepare the other attributes possibly existant in the item, except the key menu handler ones
function prepareOtherAttributes($node) {
	$tmpAttributes = '';

	foreach ($node->attributes() as $attribName => $attribVal) {
		if ( (substr($attribName,0,4) != "img_") && ($attribName != 'link') && ($attribName != 'class')  && ($attribName != 'caption') && ($attribName != 'branch') && ($attribName != 'hideItem') && ($attribName != 'img')) {
			// Found new attribute, add it to the list
			$tmpAttributes .= $attribName . '="' . $attribVal . '" ';
		}
	}

	return $tmpAttributes;
}


// Grab and prepare the other attributes possibly existant in the item, except the key menu handler ones
function prepareOtherImgAttributes($node) {
	$tmpAttributes = '';

	foreach ($node->attributes() as $attribName => $attribVal) {
		if (substr($attribName,0,4) == "img_") {
			$tmpAttributes .= substr($attribName,4) . '="' . $attribVal . '" ';
		}
	}

	return $tmpAttributes;
}
?>