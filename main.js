const elList = document.querySelector(".list")

const qop = document.createDocumentFragment()
 
for (const kino of kinolar) {

  const elTemp = document.querySelector(".template").content.cloneNode(true);
  console.log(elTemp);
elTemp.querySelector(".name").textContent = kino.title;
elTemp.querySelector(".year-span").textContent = kino.year;
elTemp.querySelector(".cast-span").textContent = kino.cast.join(", ");
elTemp.querySelector(".genres-span").textContent = kino.genres.join(", ");

qop.appendChild(elTemp)
elList.appendChild(qop)
 
  

}
