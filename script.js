let phrases = [
    { text: 'Maribou State', image: 'KEXPIMG/maribou.jpg' ,},
    { text: 'Moderat', image: 'KEXPIMG/moderat.jpg' },
    { text: 'Yppah', image: 'KEXPIMG/yppah.jpg' },
    { text: 'Ultraista', image: 'KEXPIMG/ultraista.png' },
    { text: 'The Heavy', image: 'KEXPIMG/theheavy.png' },
    { text: 'Live on KEXP', image: 'KEXPIMG/default2.png' },
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
 
  });
  for (let i = 0; i <= 5; i= i +1) {smoothly(phrase, 'textContent', phrases[i].text);smoothly(image, 'src', phrases[i].image)}

    function changeSource() {    
document.getElementById('i1').src = "http://www.youtube.com/embed/TEy-lof4F_I";
    }
    function changeSource1() {
document.getElementById('i1').src = "http:////www.youtube.com/embed/HVkVq_qs7FM";
    }
    function changeSource2() {
document.getElementById('i1').src = "http://www.youtube.com/embed/rBSvq64cQU4";
    }
    function changeSource3() {
document.getElementById('i1').src = "http://www.youtube.com/embed/dRrlo5Retng";
    }
    function changeSource4() {
document.getElementById('i1').src = "http://www.youtube.com/embed/AJvWzBuIKa0";
    }

    let infos = [
      { text: 'Maribou State — английский электронный дуэт, состоящий из Криса Дэвидса и Лиама Айвори. На сегодняшний день они выпустили восемь EP и два студийных альбома: Portraits (2015) и Kingdoms In Color (2018). Помимо собственного материала, два продюсера также сделали ремиксы для таких исполнителей, как Alpines и Lana Del Rey . Дуэт выступает на международном уровне и подписал контракт с Counter Records, отпечатком британского независимого лейбла Ninja Tune .'},
      { text: 'Moderat — электронная музыкальная группа из Берлина, Германия, включающая в себя участников Modeselektor(Gernot Bronsert, Sebastian Szary) и Sascha Ring. На данный момент группа выпустила четыре студийных альбома, последний из которых получил название MORE D4TA и вышел 13 мая 2022 года.' ,},
      { text: 'Джо Корралес Мл. (род. 31 марта 1981, США) — электронный музыкант, продюсер, сочетает в своей музыке такие жанры как шугейзинг, рок, брейкбит, эмбиент. Псевдоним «Yppah» — это произнесенное наоборот слово «happy» (счастливый).'},
      { text: 'Bonobo — сценический псевдоним Саймона Грина (англ. Simon Green; род. 30 марта 1976 года), британского музыканта, продюсера, церковного звонаря и диджея, живущего в Лос-Анджелесе.До 2010 года Bonobo гастролировал один, исполняя DJ-сеты, после было принято решение начать выступать с группой, для тура с альбомом Black Sands. Группа исполняет студийный материал, в ней состоят певец, клавишник, гитарист, саксофонист, струнная секция и перкуссионист. Часто в выступлениях прослеживается импровизациями и соло. »'},
      { text: 'The Heavy — британская инди-рок-группа из города Бат, Англия, образовавшаяся в 2007 году и подписавшая контракт с Ninja Tune и компанией Bad Son Recording. В состав группы входят Кельвин Сваби, Дэниэл Тейлор, Спенсер Пейдж и Крис Эллул. Они выпустили четыре студийных альбома, а также множество синглов.'},
    ];

    let button2 = document.querySelector('.one');
    let button3 = document.querySelector('.two');
    let button4 = document.querySelector('.three');
    let button5 = document.querySelector('.four');
    let button6 = document.querySelector('.five');
    let textinfo = document.querySelector('.inform');

    let currentActiveIndex = 0;

button2.addEventListener('click', function () {
      textinfo.innerText = infos[0].text;
})
button3.addEventListener('click', function () {
  textinfo.innerText = infos[1].text;
})
button4.addEventListener('click', function () {
  textinfo.innerText = infos[2].text;
})
button5.addEventListener('click', function () {
textinfo.innerText = infos[3].text;
})
button6.addEventListener('click', function () {
  textinfo.innerText = infos[4].text;
})