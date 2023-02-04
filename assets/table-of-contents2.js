document.addEventListener('DOMContentLoaded', function () {
        var contentsList = document.getElementById('toc-section');
  		const title = document.createElement('div');
        title.style.fontSize = '20px';
        title.style.fontWeight = '500';
        title.style.margin = 0;
        title.style.color = 'inherit';
        title.style.lineHeight = 1.5;
        title.style.letterSpacing = '0.04em';
        const content = document.createTextNode('目次');
        title.appendChild(content);
		var div = document.createElement('ol'); // 
		div.setAttribute('class', 'h2-ol');
        var matches = document.querySelectorAll('.article-page h2, .article-page h3, .article-page h4');
  		console.log(matches);
        matches.forEach(function (value, i) {
            var id = value.id;
            if(id === '') {
                id = value.textContent;
                value.id = id;
            }

            // 要素がh2タグの場合
            if(value.tagName === 'H2') {
                var ol = document.createElement('ol');
              	ol.setAttribute('class', 'h3-ol');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.innerHTML = value.textContent;
                a.href = '#' + value.id;
                li.appendChild(a)
                div.appendChild(li);
	            li.appendChild(ol);

            }

            // 要素がh3タグの場合
            if(value.tagName === 'H3') {
			    var ol = document.createElement('ol');
	           	ol.setAttribute('class', 'h4-ol');
                var li = document.createElement('li');
                var a = document.createElement('a');

                var parentOl = div.lastElementChild;
                var childOl = parentOl.lastElementChild;

                a.innerHTML = value.textContent;
                a.href = '#' + value.id;
                li.appendChild(a);
                li.appendChild(ol);

                childOl.appendChild(li);
            }
          

            if(value.tagName === 'H4') {
                var li = document.createElement('li');
                var a = document.createElement('a');


                var h2Ol = div.lastElementChild;
                var h2Li = h2Ol.lastElementChild;
                var h3Ol = h2Li.lastElementChild;
	            var h4Ol = h3Ol.lastElementChild;

                a.innerHTML = value.textContent;
                a.href = '#' + value.id;
                li.appendChild(a);

                h4Ol.appendChild(li);
            }
        });
  		var len = matches.length;
  		console.log(len);	
		if(len !== 0) {
            contentsList.appendChild(title);
          contentsList.appendChild(div);
        }else{
        	contentsList.style.background = 'none';
        }
    });