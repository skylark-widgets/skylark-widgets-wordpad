/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","skylark-widgets-toolbars/toolbar-item","../../../i18n","../../../addons"],function(n,e,g,i,a){var s=g.inherit({renderMenu:function(){var g,i,a,t,p,o,r,l,m,u,d,c=this.action.editor;for(r='<ul class="emoji-list">\n</ul>',a="",i=(p=n.extend({imagePath:"images/emoji/",images:s.images},c.options.addons.toolbar.items.emoji||{})).imagePath.replace(/\/$/,"")+"/",l=0,m=(u=p.images).length;l<m;l++)o=""+i+(t=u[l]),a+="<li data-name='"+(t=t.split(".")[0])+"'><img src='"+o+"' width='20' height='20' alt='"+t+"' /></li>";return(g=e(r)).html(a).appendTo(this.menuWrapper),g.on("mousedown","li",(d=this,function(n){var g;if(d.wrapper.removeClass("menu-on"),c.editable.inputManager.focused)return g=e(n.currentTarget).find("img").clone().attr({"data-emoji":!0,"data-non-image":!0}),c.editable.selection.insertNode(g),c.trigger("valuechanged"),c.trigger("selectionchanged"),!1}))}});return s.i18n={"zh-CN":{emoji:"表情"},"en-US":{emoji:"emoji"}},s.images=["smile.png","smiley.png","laughing.png","blush.png","heart_eyes.png","smirk.png","flushed.png","grin.png","wink.png","kissing_closed_eyes.png","stuck_out_tongue_winking_eye.png","stuck_out_tongue.png","sleeping.png","worried.png","expressionless.png","sweat_smile.png","cold_sweat.png","joy.png","sob.png","angry.png","mask.png","scream.png","sunglasses.png","heart.png","broken_heart.png","star.png","anger.png","exclamation.png","question.png","zzz.png","thumbsup.png","thumbsdown.png","ok_hand.png","punch.png","v.png","clap.png","muscle.png","pray.png","skull.png","trollface.png"],a.toolbar.items.emoji=s,s});
//# sourceMappingURL=../../../sourcemaps/addons/toolbar/items/emoji-button.js.map