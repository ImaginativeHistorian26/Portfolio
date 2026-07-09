// PART 1: PHILOSOPHY CARDS
const famousPhilosophers = [
  { image: "https://media.istockphoto.com/id/1807993220/photo/plato-statue-at-academy-of-athens.jpg?s=612x612&w=0&k=20&c=fB93-oThfd0ZtYoyIRaxLgVx5lB27_BfcSh1Qwydouc=", title: 'Platonism', text: 'Check it out!' },
  { image: "https://media.istockphoto.com/id/105929513/photo/aristotles-statue.jpg?s=612x612&w=0&k=20&c=ZpNNgdESipjCDZlAkLOuqBNeuE26rkv3yUsbUyE5AR4=", title: 'Aristotelianism', text: 'Check it out!' },
  { image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzIwMjEvMDkvMTMvcGxvdGludXMtODBhN2NiLTY0MC5qcGc%3D/640/896/jpg", title: 'Neo-Platonism', text: 'Check it out!' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/St-thomas-aquinas.jpg/960px-St-thomas-aquinas.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20180324205553", title: 'Scholasticism', text: 'Check it out!' },
  { image: "https://media.istockphoto.com/id/1465119480/vector/philosopher-immanuel-kant-writing-letter-illustration-from-1870.jpg?s=612x612&w=0&k=20&c=Jyfnd0nvmTJakylDx6-O4pFALrCs7jdF0jwvUKVNAeA=", title: 'Kantianism', text: 'Check it out!' },
  { image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzIwMjEvMDkvMTMva2llcmtlZ2FhcmQtMTAyZmNiLXNtYWxsLmpwZw%3D%3D/240/355/webp", title: 'Existentialism', text: 'Check it out!' }
];

document.addEventListener("DOMContentLoaded", () => {
  
  const template = document.getElementById("philosophy-topics");
  const cardsContainer = document.querySelector('.container .row');

  if (template && cardsContainer) {
    famousPhilosophers.forEach((philosopher) => {
      const philosophy = template.content.cloneNode(true);

      const cardImg = philosophy.querySelector('.card-img-top');
      const cardTitle = philosophy.querySelector('.card-title');
      const cardBtn = philosophy.querySelector('.btn-primary');

      cardImg.src = philosopher.image;
      cardImg.alt = philosopher.title;
      cardTitle.textContent = philosopher.title;
      cardBtn.textContent = philosopher.text;

      cardsContainer.appendChild(philosophy);
    });
  }

  // PART 2: COMMUNITY NEWS
  const newsFeedContainer = document.getElementById("news-feed");

  if (newsFeedContainer) {
    fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        return response.json();
      })
      .then((data) => {
        const articles = data.news;

        newsFeedContainer.innerHTML = "";

        articles.forEach((article) => {
          const newsCard = document.createElement("div");
          newsCard.className = "news-container col-3";
          newsCard.textContent = article.content;

          newsFeedContainer.appendChild(newsCard);
        });
      })
      .catch((error) => {
        console.error("Error loading community news:", error);
        newsFeedContainer.innerHTML = `<p class="text-danger">Unable to load community news at this time.</p>`;
      });
  }
});