function generateNavListItem(name, icon, onClick){
  var li = document.createElement('li');
  var a = document.createElement('a');
  var s1 = document.createElement('span');
  var s2 = document.createElement('span');
  li.className = "dm-nav";
  a.className = "js-tooltip js-dynamic-tooltip global-dm-nav";
  s1.className = "Icon Icon--dm Icon--large";
  s2.className = "text";
  s2.innerText = "Bookmarks";
  a.appendChild(s1);
  a.appendChild(s2);
  li.appendChild(a);
  return li;
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        var navUl = document.querySelector('ul.nav.js-global-actions');
        var navLi = generateNavListItem("abc","abc","abc");
        navUl.appendChild(navLi);

	}
	}, 10);
});
