/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","skylark-widgets-toolbars/toolbar-item","../../../i18n","../../../addons"],function(e,t,n,a,i){var r=n.inherit({_doActive:function(e){return n.prototype._doActive.call(this,e),e?(this.createMenu.hide(),this.editMenu.show()):(this.createMenu.show(),this.editMenu.hide())}});return r.prototype.renderMenu=function(){var e,n,i=this.action.editor;return t('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteRow">\n        <span>'+a.translate("deleteRow")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowAbove">\n        <span>'+a.translate("insertRowAbove")+' ( Ctrl + Alt + ↑ )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowBelow">\n        <span>'+a.translate("insertRowBelow")+' ( Ctrl + Alt + ↓ )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteCol">\n        <span>'+a.translate("deleteColumn")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColLeft">\n        <span>'+a.translate("insertColumnLeft")+' ( Ctrl + Alt + ← )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColRight">\n        <span>'+a.translate("insertColumnRight")+' ( Ctrl + Alt + → )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteTable">\n        <span>'+a.translate("deleteTable")+"</span>\n      </a>\n    </li>\n  </ul>\n</div>").appendTo(this.menuWrapper),this.createMenu=this.menuWrapper.find(".menu-create-table"),this.editMenu=this.menuWrapper.find(".menu-edit-table"),e=this.action.createTable(6,6).appendTo(this.createMenu),this.createMenu.on("mouseenter","td, th",(n=this,function(a){var i,r,s,l;return n.createMenu.find("td, th").removeClass("selected"),l=(r=(i=t(a.currentTarget)).parent()).find("td, th").index(i)+1,s=r.prevAll("tr").addBack(),r.parent().is("tbody")&&(s=s.add(e.find("thead tr"))),s.find("td:lt("+l+"), th:lt("+l+")").addClass("selected")})),this.createMenu.on("mouseleave",function(e){return t(e.currentTarget).find("td, th").removeClass("selected")}),this.createMenu.on("mousedown","td, th",function(n){return function(a){var r,s,l,d,o;if(n.wrapper.removeClass("menu-on"),i.editable.inputManager.focused)return d=(l=(s=t(a.currentTarget)).parent()).find("td").index(s)+1,o=l.prevAll("tr").length+1,l.parent().is("tbody")&&(o+=1),e=n.action.createTable(o,d,!0),r=i.editable.selection.blockNodes().last(),n.action.editor.editable.util.isEmptyNode(r)?r.replaceWith(e):r.after(e),n.action.decorate(e),i.editable.selection.setRangeAtStartOf(e.find("th:first")),i.trigger("valuechanged"),!1}}(this))},i.toolbar.items.table=r,r});
//# sourceMappingURL=../../../sourcemaps/addons/toolbar/items/table-button.js.map
