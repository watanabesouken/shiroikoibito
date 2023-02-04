const articleBodyItemProp = 'articleBody';
const tableOfContentsItemProp = 'tableOfContents';
const tocSection = document.getElementById('toc-section');

const getArticleBody = () => {
  return document.querySelector(`[itemprop="${articleBodyItemProp}"]`);
};

const getHeadings = () => {
  const articleBody = getArticleBody();
  if (!articleBody) return null;

  return articleBody.querySelectorAll(['h2', 'h3']);
};

const existsTableOfContents = () => {
  return !!document.querySelector(`[itemprop="${tableOfContentsItemProp}"]`);
};

const generateAnchor = (id) => {
  const anchor = document.createElement('a');
  anchor.style.display = 'block';
  anchor.style.width = '100%';
  anchor.style.padding = 0;
  anchor.style.margin = 0;
  anchor.style.lineHeight = '21px';
  anchor.style.fontSize = '18px';
  anchor.style.color = 'inherit';
  const content = document.createTextNode(id);
  anchor.appendChild(content);
  anchor.setAttribute('href', `#${id}`);
  return anchor;
};

const generateListItem = (id, index, isNest = false) => {
  const listItem = document.createElement('li');
  listItem.style.padding = '8px 0';
  listItem.style.margin = 0;
  listItem.style.fontSize = '18px';
  listItem.setAttribute("class","toc-h2");
  if (isNest) {
    listItem.style.paddingLeft = '24px';
    listItem.classList.add("toc-h3");
    listItem.classList.remove("toc-h2");
  }
  const anchor = generateAnchor(id);
  listItem.appendChild(anchor);
  return listItem;
};

const generateList = (headings) => {
  if (!headings) return;
  const list = document.createElement('ol');
  Array.prototype.forEach.call(headings, (heading, index) => {
    const listItem = generateListItem(
      heading.id,
      index,
      heading.tagName === 'H3'
    );
    list.appendChild(listItem);
  });
  return list;
};

const generateTitle = () => {
  const title = document.createElement('div');
  title.style.fontSize = '20px';
  title.style.fontWeight = '500';
  title.style.margin = 0;
  title.style.color = 'inherit';
  title.style.lineHeight = 1.5;
  title.style.letterSpacing = '0.04em';
  const content = document.createTextNode('目次');
  title.appendChild(content);
  return title;
};

const generateTableOfContents = (headings) => {
  if (!headings) return;

  const tableOfContents = document.createElement('nav');
  tableOfContents.setAttribute('itemprop', tableOfContentsItemProp);
  tableOfContents.style.padding = '16px';
  tableOfContents.style.backgroundColor = '#fff';
	tableOfContents.setAttribute("class","toc-p");
  const title = generateTitle();
  tableOfContents.appendChild(title);
  const list = generateList(headings);
  tableOfContents.appendChild(list);
  return tableOfContents;
};

const addIdToHeading = () => {
  const headings = getHeadings();
  if (!headings) return;

  Array.prototype.forEach.call(headings, (heading) => {
    heading.id = heading.textContent;
  });
};

const addTableOfContents = () => {
  const articleBody = getArticleBody();
  const headings = getHeadings();
  if (!articleBody || !headings) return;

  const tableOfContents = generateTableOfContents(headings);
  const firstHeading = headings[0];
  if (!tableOfContents || !firstHeading) return;
  if (existsTableOfContents()) return;
	console.log("create");
  tocSection.after(tableOfContents);
};


addIdToHeading();
addTableOfContents();


const tocParent = document.querySelector('.toc-p');

const createParentTree = () => {
	const parentH3 = document.createElement('ol');
	parentH3.setAttribute("class","parent-h3");  	
	const  tocH2s = tocParent.querySelectorAll('.toc-h2');
  	console.log(tocH2s);
  
  	//toc-h2の下にol追加
  	Array.prototype.forEach.call(tocH2s, (tocH2) => {
  		tocH2.after(parentH3);
    });
}

createParentTree();

// const createTree = () => {
// 	const  tocH3s = tocParent.querySelectorAll('.toc-h3');
//   	Array.prototype.forEach.call(tocH3s, (tocH3) => {
//   		parentH3.appendChild(tocH3);
//     });
// }

// createTree();