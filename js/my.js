(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//fathom.powersee.top/tracker.js', 'fathom');
fathom('set', 'siteId', 'NSWOC');
fathom('trackPageview');

var umamiScript = document.createElement('script');
umamiScript.async = true;
umamiScript.src = 'https://umami.powersee.top/script.js';
umamiScript.setAttribute('data-website-id', '47521365-32b8-490a-bfa3-e0546ed12aec');
document.head.appendChild(umamiScript);


if (window.location.host == "powersee.github.io") {

	// 获取当前网页中 body 的所有 img 标签
	const imgElements = document.querySelectorAll('body img');

	// 遍历每个 img 标签
	for (let i = 0; i < imgElements.length; i++) {
	const imgElement = imgElements[i];
	const src = imgElement.getAttribute('src');

	// 检查 img 标签的 src 是否以 /img/ 开头
	if (src.startsWith('/img/')) {
		imgElement.setAttribute('src', src.replace('/img/', 'https://blog.powersee.top/img/'));
	}
	}
}
