const generalClassOfButtons = 'js--share-link';
const { href } = window.location;
const currentTitle = document.querySelector('h1').textContent;

function sharePage(network) {
	let newURL;
	switch (network) {
	case 'whats-app':
		newURL = `https://api.whatsapp.com/send?text=${href}`;
		break;
	case 'fb':
		newURL = `https://www.facebook.com/sharer.php?s=100&u=${
			href
		}&p[title]=${
			currentTitle
		}&p[summary]=${
			currentTitle
		}`;
		break;
	case 'twitter':
		newURL = `http://twitter.com/share?text=${currentTitle}&url=${href}`;
		break;
	case 'linked':
		newURL = `https://www.linkedin.com/shareArticle?mini=true&url=${
			href
		}&title=${
			currentTitle}`;
		break;
	default:
		break;
	}
	window.open(
		newURL,
		currentTitle,
		'toolbar=0, status=0, width=640, height=640',
	);
}
function checkAtribute(event) {
	if (event.target.classList.contains(generalClassOfButtons)) {
		const network = event.target.getAttribute('data-network-name');
		sharePage(network);
	} else if (event.target.closest(`.${generalClassOfButtons}`)) {
		const network = event.target.closest(`.${generalClassOfButtons}`).getAttribute('data-network-name');
		sharePage(network);
	}
}
window.addEventListener('click', checkAtribute);

/* $(document).ready((function(){$(".share-article_link").click((function(t){let e=encodeURIComponent(document.URL),s=encodeURIComponent($("h1").text()),o=encodeURI($(".main-image").attr("src")),n=e,a=encodeURIComponent("");return a.length<1&&(a=s),$(this).hasClass("fb")&&(n="https://www.facebook.com/sharer.php?s=100&u="+e+"&p[title]="+s+"&p[summary]="+a+"&p[images][0]="+o),$(this).hasClass("link")&&(s=$(".meta-title").text(),n="https://www.linkedin.com/shareArticle?mini=true&url="+e+"&title="+s),$(this).hasClass("twitter")&&(n="http://twitter.com/share?text="+a+"&url="+e,console.log(n)),$(this).hasClass("whats-app")&&(n="https://api.whatsapp.com/send?text="+e,console.log(n)),window.open(n,s,"toolbar=0, status=0, width=640, height=640"),!1}))})); */
