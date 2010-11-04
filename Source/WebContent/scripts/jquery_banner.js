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
   
looks for "Banner" item or image with id="banner" and inserts it above the page title
*/
jQuery(function($){
	if ($("#banner").length == 0)
		$("#pageList h3.item:contains(\"Banner\"):eq(0)").next("div.details").find("img:first").attr("id","banner");
	$("#banner").css("display", "block").parents("li").addClass("banner").hide().end().prependTo("#pageTitleDiv");
	$("#titleicon").hide();
	$("#pageTitleDiv h1").css("padding-top", "8px");
	if (location.href.indexOf("listContentEditable.jsp")>0)
		$("#pageList li.banner").show();
});