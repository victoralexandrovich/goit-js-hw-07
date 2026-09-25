const categories = document.querySelectorAll('#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${title}, Items: ${itemsCount}`);
});
