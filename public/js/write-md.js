document.addEventListener('DOMContentLoaded', event => {
	
/*$(function() { */

    var editor_md = editormd("test-editor", {
    width   : "90%",
    height  : 640,
    syncScrolling : "single",
    watch : false,
    path   : "editormd/lib/",
    codeFold : true,
    flowChart : true,  
    sequenceDiagram : true,      
	
	//Theme - Starts
	// Editor.md theme, default or dark, change at v1.5.0
	// You can also custom css class .editormd-preview-theme-xxxx
	theme        : (localStorage["user-color-scheme"]=="dark") ? localStorage["user-color-scheme"] : "default",
	
	// Preview container theme, added v1.5.0
	// You can also custom css class .editormd-preview-theme-xxxx
	previewTheme : (localStorage["user-color-scheme"]=="dark") ? localStorage["user-color-scheme"] : "default", 
	
	// Added @v1.5.0 & after version is CodeMirror (editor area) theme
	editorTheme  : (localStorage["user-color-scheme"]=="dark") ? "tomorrow-night-eighties" : "default", 	
	//Theme - Ends
	
    toolbarIcons : function() {
        // return editormd.toolbarModes["full"]; // full, simple, mini
        // Using "||" set icons align right.
        return ["undo", "redo", "|", "watch", "fullscreen", "preview", "|", "ucwords", "uppercase", "lowercase", "|"
        , "list-ul", "list-ol", "hr",  "|", "table", "link", "image", "|", "SubmitButton"]
    },
    toolbarIconTexts : {
        SubmitButton: "SAVE" 
    },
    toolbarHandlers : {
        /**
         * @param {Object}      cm         CodeMirror对象
         * @param {Object}      icon       图标按钮jQuery元素对象
         * @param {Object}      cursor     CodeMirror的光标对象，可获取光标所在行和位置
         * @param {String}      selection  编辑器选中的文本
         */
        SubmitButton : function(cm, icon, cursor, selection) {

            alert(editor_md.getMarkdown());
            console.log("testIcon =>", this, cm, icon, cursor, selection);

        }},

    });

/*	editor_md.setTheme(theme);
	editor_md.setCodeMirrorTheme(theme);
	editor_md.setPreviewTheme(theme); */
	
    $("#get-md-btn").bind('click', function(){
        alert(editor_md.getMarkdown());
        //alert(editor_md.getHTML());
        //alert(editor_md.getPreviewedHTML());
    });

    $("#get-html-btn").bind('click', function(){
        alert(editor_md.getPreviewedHTML());
        //alert(editor_md.getHTML());
        //alert(editor_md.getPreviewedHTML());
    });


	/* Reading from storage is fast but setting the value seems to be slow */
	/* So in the below function we will have flip things up */ 
	/* When it says light, its dark and vice-versa */
    $("#lightdarkmode").bind('click', function(){
				
		mode = localStorage["user-color-scheme"]=="light"?"dark":"default";
		//console.log(localStorage["user-color-scheme"] + " --> " + mode);
		let theme         = mode
		let previewTheme  = mode
		let editorTheme   = (mode=="dark") ? "tomorrow-night-eighties" : "default";
		//console.log(theme, previewTheme, editorTheme)
		
		editor_md.setTheme(theme);
		editor_md.setPreviewTheme(previewTheme);		
		editor_md.setEditorTheme(editorTheme);
    });
    
});