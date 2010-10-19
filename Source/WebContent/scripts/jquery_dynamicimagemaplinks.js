/* 
   Copyright 2010 Tim Plaisted, Queensland University of Technology

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
	Dynamically link image map using blackboard links
	Version: 1.5
	Author: Tim Plaisted 2010
	Usage: 1. Add image map to image, and use ALT tags to enter short description of links, href can be left at "#".
	       2. Add Blackboard folders, items with files, site or external links with title as full description (including short description text exactly e.g. unit code).
	       3. Optionally include detailed description in details field -- and add a HTML item with id="description" to have mouseover text
*/
jQuery(function($){
  $("#pageList map").children().each(function() {
	var altText = $.trim($(this).attr("alt"));
	if (altText.length) {
		// find alt text in page headers
		var matchingHeader = $("#pageList h3.item:contains('"+altText+"')");

		// check header for a link
		var link = $(matchingHeader).find("a:first:contains('"+altText+"')");

		// if no link found in header, look for item's file attachment
		if (link.length == 0)
			link = $(matchingHeader).next("div.details").find("ul.attachments a:first");
		
		// look for description
		var desc = $(matchingHeader).next("div.details").clone().remove("a").text();
		if (desc) { $(this).data("desc", desc); }
			
		if (link.length) {
			$(this).attr("href", link.attr("href"));
			if (window.tweak_bb_display_view || $("body.ineditmode").length == 0)
				$(matchingHeader).parents("li").hide();
		}
	}
  });
  
  // attach description event
  if ($("#description").length) {
	$("#pageList map area").mouseover(function(){
		var desc = jQuery(this).data("desc");
		if (desc != null) { jQuery("#description").text(desc)+" "; }
	});
  }
});