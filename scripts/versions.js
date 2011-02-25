var tweakVersions = {
	BB8   : ["hider", "replaceicon", "showhidetext", "imagemapper", "printframe", "quicktest", "icons", "unitmap", "checklist", "Submenu"],
	BB9_x : ["hider", "addcolourstripe", "replaceicon", "showhidetext", "imagemapper", "printframe", "quicktest", "deeplink", "iframecontent", "addstyle", "colourpage", "icons", "unitmap", "selfenrol", "visualunitmap", "backtotoplink", "checklist", "noContentWrapper", "Submenu", "subsite", "banner", "faq"]};

// build selector: template is too much work!
jQuery.each(tweakVersions, function(key, value) {
	jQuery("#BBVersions").append("<input type=\"radio\" name=\"bbvers\" id=\""+key+"\"><label for='"+key+"'>"+key+"</label>"); 
});

// attach event
jQuery("#BBVersions input").live("click", function(){
	var version = jQuery(this).attr("id");
	displayVersionTweaks(version);
	// hide doco if not released for version
	if (jQuery("li input:checked:visible").length==0)
		jQuery("#doco, #code").empty(); jQuery("#code").hide();	
	if (version == "BB8")
		jQuery("#expand, #code").hide();
	else
		jQuery("#expand").show();
});

// display correct tweaks for version
function displayVersionTweaks(bbVersion) {
	var tweaksArray = tweakVersions[bbVersion];
	jQuery("li").each(function(){
		var id = jQuery(this).find("input").attr("id");
		if (id) {jQuery(this).toggle(jQuery.inArray(id, tweaksArray) > -1);}
	});
}