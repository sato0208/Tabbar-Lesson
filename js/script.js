
// id="tab-contentsの要素のうちclass=tab,id="tab1"でない要素を非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(){
// タブコンテンツの中のaタグをクリックした時に非表示にする
	// tab-contents内のタブがクリックされたらそのタブないのコンテンツを非表示にする
	$("#tab-contents .tab").hide();
	// タブを押した時に色を変えるためにremoveclassでクラスを削除する
	$("tab-menu .active").removeClass("active");
	// thisつまりタブがクリックされた時にactiveクラスを追加する
	$(this).addClass("active");
	// .attrはHTML要素の属性を取得したり設定できる
	$($(this).attr("href")).show();
	return false;
});