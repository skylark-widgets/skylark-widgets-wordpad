/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-tables","skylark-domx-query","../../addons","../../Action"],function(e,t,n,i,a){var r=a.inherit({name:"table",icon:"table",htmlTag:"table",disableTag:"pre, li, blockquote",menu:!0,_init:function(){var t;return a.prototype._init.call(this),e.merge(this.editor.editable.formatter._allowedTags,["thead","th","tbody","tr","td","colgroup","col"]),e.extend(this.editor.editable.formatter._allowedAttributes,{td:["rowspan","colspan"],col:["width"]}),e.extend(this.editor.editable.formatter._allowedStyles,{td:["text-align"],th:["text-align"]}),this._initShortcuts(),this._initResize(),this.editor.on("decorate",(t=this,function(e,i){return i.find("table").each(function(e,i){return t.decorate(n(i))})})),this.editor.on("undecorate",function(e){return function(t,i){return i.find("table").each(function(t,i){return e.undecorate(n(i))})}}(this)),this.editor.on("selectionchanged.table",function(e){return function(t){var n,i;if(e.editor.body.find(".wordpad-table td, .wordpad-table th").removeClass("active"),i=e.editor.editable.selection.range())return n=e.editor.editable.selection.containerNode(),i.collapsed&&n.is(".wordpad-table")&&e.editor.editable.selection.setRangeAtEndOf(n),n.closest("td, th",e.editor.body).addClass("active")}}(this)),this.editor.on("blur.table",function(e){return function(t){return e.editor.body.find(".wordpad-table td, .wordpad-table th").removeClass("active")}}(this)),this.editor.editable.keystroke.add("up","td",function(e){return function(t,n){return e._tdNav(n,"up"),!0}}(this)),this.editor.editable.keystroke.add("up","th",function(e){return function(t,n){return e._tdNav(n,"up"),!0}}(this)),this.editor.editable.keystroke.add("down","td",function(e){return function(t,n){return e._tdNav(n,"down"),!0}}(this)),this.editor.editable.keystroke.add("down","th",function(e){return function(t,n){return e._tdNav(n,"down"),!0}}(this))},_tdNav:function(e,t){var n,i,a,r,d;return null==t&&(t="up"),a="up"===t?"prev":"next",(d="up"===t?["tbody","thead"]:["thead","tbody"])[0],d[1],i=e.parent("tr"),!((n=this["_"+a+"Row"](i)).length>0)||(r=i.find("td, th").index(e),this.editor.editable.selection.setRangeAtEndOf(n.find("td, th").eq(r)))},_initResize:function(){t.resizable(document,{cssClasses:{resizeHandle:"wordpad-resize-handle",wrapper:"wordpad-table"}})},_initShortcuts:function(){var e;return this.editor.editable.hotkeys.add("ctrl+alt+up",(e=this,function(t){return e.editMenu.find(".menu-item[data-param=insertRowAbove]").click(),!1})),this.editor.editable.hotkeys.add("ctrl+alt+down",function(e){return function(t){return e.editMenu.find(".menu-item[data-param=insertRowBelow]").click(),!1}}(this)),this.editor.editable.hotkeys.add("ctrl+alt+left",function(e){return function(t){return e.editMenu.find(".menu-item[data-param=insertColLeft]").click(),!1}}(this)),this.editor.editable.hotkeys.add("ctrl+alt+right",function(e){return function(t){return e.editMenu.find(".menu-item[data-param=insertColRight]").click(),!1}}(this))},renderMenu:function(){var e,t;return n('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteRow">\n        <span>'+this._t("deleteRow")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowAbove">\n        <span>'+this._t("insertRowAbove")+' ( Ctrl + Alt + ↑ )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowBelow">\n        <span>'+this._t("insertRowBelow")+' ( Ctrl + Alt + ↓ )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteCol">\n        <span>'+this._t("deleteColumn")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColLeft">\n        <span>'+this._t("insertColumnLeft")+' ( Ctrl + Alt + ← )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColRight">\n        <span>'+this._t("insertColumnRight")+' ( Ctrl + Alt + → )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteTable">\n        <span>'+this._t("deleteTable")+"</span>\n      </a>\n    </li>\n  </ul>\n</div>").appendTo(this.menuWrapper),this.createMenu=this.menuWrapper.find(".menu-create-table"),this.editMenu=this.menuWrapper.find(".menu-edit-table"),e=this.createTable(6,6).appendTo(this.createMenu),this.createMenu.on("mouseenter","td, th",(t=this,function(i){var a,r,d,l;return t.createMenu.find("td, th").removeClass("selected"),l=(r=(a=n(i.currentTarget)).parent()).find("td, th").index(a)+1,d=r.prevAll("tr").addBack(),r.parent().is("tbody")&&(d=d.add(e.find("thead tr"))),d.find("td:lt("+l+"), th:lt("+l+")").addClass("selected")})),this.createMenu.on("mouseleave",function(e){return n(e.currentTarget).find("td, th").removeClass("selected")}),this.createMenu.on("mousedown","td, th",function(t){return function(i){var a,r,d,l,o;if(t.wrapper.removeClass("menu-on"),t.editor.editable.inputManager.focused)return l=(d=(r=n(i.currentTarget)).parent()).find("td").index(r)+1,o=d.prevAll("tr").length+1,d.parent().is("tbody")&&(o+=1),e=t.createTable(o,l,!0),a=t.editor.editable.selection.blockNodes().last(),t.editor.editable.util.isEmptyNode(a)?a.replaceWith(e):a.after(e),t.decorate(e),t.editor.editable.selection.setRangeAtStartOf(e.find("th:first")),t.editor.trigger("valuechanged"),!1}}(this))},decorate:function(e){return n(t.decorate(e[0],{tableDecorate:"wordpad-table",resizeHandle:"wordpad-resize-handle"}))},undecorate:function(e){return n(t.undecorate(e[0],{tableDecorate:"wordpad-table",resizeHandle:"wordpad-resize-handle"}))},createTable:function(e,i,a){return n(t.createTable(e,i,a?this.editor.editable.util.phBr:null))},refreshTableWidth:function(e){return table.refreshTableWidth(e[0])},deleteRow:function(e){var i,a=this;return t.deleteRow(e[0],function(e,t){e&&(i=a.editor.editable.selection.setRangeAtEndOf(n(e).find("td, th").eq(t)))}),i},insertRow:function(e,i){var a,r=this;return t.insertRow(e[0],i,r.editor.editable.util.phBr,function(e,t){a=r.editor.editable.selection.setRangeAtStartOf(n(e).find("td, th").eq(t))}),a},deleteCol:function(e){var i,a=this;return t.deleteCol(e[0],function(e){e&&(i=a.editor.editable.selection.setRangeAtEndOf(n(e)))}),i},insertCol:function(e,i){var a,r=this;return t.insertCol(e[0],i,r.editor.editable.util.phBr,function(e){a=r.editor.editable.selection.setRangeAtStartOf(n(e))}),a},deleteTable:function(e){var n=this;t.deleteTable(e[0],function(e){if(e.length>0)return n.editor.editable.selection.setRangeAtStartOf(e)})},_execute:function(e){var t;if((t=this.editor.editable.selection.containerNode().closest("td, th")).length>0){if("deleteRow"===e)this.deleteRow(t);else if("insertRowAbove"===e)this.insertRow(t,"before");else if("insertRowBelow"===e)this.insertRow(t);else if("deleteCol"===e)this.deleteCol(t);else if("insertColLeft"===e)this.insertCol(t,"before");else if("insertColRight"===e)this.insertCol(t);else{if("deleteTable"!==e)return;this.deleteTable(t)}return this.editor.trigger("valuechanged")}}});return i.actions.table=r,r});
//# sourceMappingURL=../../sourcemaps/addons/actions/TableAction.js.map