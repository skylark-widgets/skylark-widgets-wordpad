/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-domx-query","../../addons","../../action","./code-popover"],function(t,e,n,i){var o=n.inherit({name:"code",icon:"code",htmlTag:"pre",disableTag:"ul, ol, table",_init:function(){var e;return n.prototype._init.call(this),this.editor.on("decorate",(e=this,function(n,i){return i.find("pre").each(function(n,i){return e.decorate(t(i))})})),this.editor.on("undecorate",function(e){return function(n,i){return i.find("pre").each(function(n,i){return e.undecorate(t(i))})}}(this))},_checkMode:function(){var e;return e=this.editor.editable.selection.range(),t(e.cloneContents()).find(this.editor.editable.util.blockNodes.join(","))>0||e.collapsed&&0===this.editor.editable.selection.startNodes().filter("code").length?(this.inlineMode=!1,this.htmlTag="pre"):(this.inlineMode=!0,this.htmlTag="code")},_status:function(){if(this._checkMode(),n.prototype._status.call(this),!this.inlineMode)return this.active?(this.popover||(this.popover=new i({action:this})),this.popover.show(this.node)):this.popover?this.popover.hide():void 0},decorate:function(t){var e,n,i,o;if((e=t.find("> code")).length>0&&(n=null!=(i=e.attr("class"))&&null!=(o=i.match(/lang-(\S+)/))?o[1]:void 0,e.contents().unwrap(),n))return t.attr("data-lang",n)},undecorate:function(e){var n,i;return i=e.attr("data-lang"),n=t("<code/>"),i&&-1!==i&&n.addClass("lang-"+i),e.wrapInner(n).removeAttr("data-lang")},_execute:function(){return this.inlineMode?this._inlineCommand():this._blockCommand()},_blockCommand:function(){return this.editor.editable.blockCode(this.htmlTag,this.disableTag)},_inlineCommand:function(){return this.editor.editable.inlineCode(this.active)}});return e.actions.code=o,o});
//# sourceMappingURL=../../sourcemaps/addons/actions/code-action.js.map
