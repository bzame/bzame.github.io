var last_skill_button = "";
function fade(el){
    const skill_class = "skill_item_";
    const current_skill_button = [].slice.call(el.classList).filter(word => word.startsWith(skill_class))[0];
    //console.log(current_skill_button);
    if(last_skill_button==current_skill_button) {
        last_skill_button = "";
        $('[class^="'+skill_class+'"]').removeClass("opaque");
    } else {
        $('[class^="'+skill_class+'"]').addClass("opaque");
        $('[class^="'+current_skill_button+'"]').removeClass("opaque");
        last_skill_button = current_skill_button;
    }
}
