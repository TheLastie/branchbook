(() => {
  const $ = id => document.getElementById(id);
  const story = {
    letter: {
      title: 'Письмо с запахом дыма', section: 'ПИСЬМО', place: 'ОСТРОВ КЛИН',
      paragraphs: [
        'Письмо приходит утром, вместе с пустой лодкой. На плотной бумаге остался след от мокрого пальца и всего одна строка: «Приезжай, пока море не вернуло колокол». Подписи нет, но почерк вы узнаёте.',
        'Остров Клин исчезает с обычных карт к вечеру. В порту говорят, что его маяк погас семнадцать лет назад. Всё это время туда никто не плавал. На причале ждёт лодочник и смотрит, как вы разглядываете письмо.'
      ], choices: [
        { label: 'Подняться по тропе к маяку', next: 'cliff', note: 'Вы пошли за огнём, хотя в письме просили не искать свет.' },
        { label: 'Ответить на голос из радиорубки', next: 'radio', note: 'Вы ответили первыми. На том конце уже знали ваше имя.' }
      ]
    },
    cliff: {
      title: 'Тропа над водой', section: 'ПОДЪЁМ', place: 'ЗАПАДНЫЙ УТЁС',
      paragraphs: [
        'На тропе пахнет железом и мокрой хвоей. Море давно отступило, оставив на камнях блестящие полосы. Впереди темнеет маяк: не разрушенный, а словно вырезанный из ночи.',
        'Из башни доносится колокольный звон — один короткий удар, затем тишина. У подножия видна узкая тропа к обнажившемуся берегу.'
      ], choices: [
        { label: 'Ответить на звон', next: 'keeper', note: 'Вы ответили колоколу. Теперь маяк знает, что вы пришли.' },
        { label: 'Спуститься к кромке отлива', next: 'wreck', note: 'Вы выбрали море. В песке остался след второй пары шагов.' }
      ]
    },
    radio: {
      title: 'Голос на частоте', section: 'СИГНАЛ', place: 'СТАРАЯ РАДИОРУБКА',
      paragraphs: [
        'Радиорубка открыта, будто вас ждали. Катушка медленно вращается, хотя провод оборван. Из динамика звучит голос лодочника, только моложе и спокойнее.',
        '«Если маяк снова загорится, остров вспомнит дорогу домой». Потом голос спрашивает, нашли ли вы ключ от станции.'
      ], choices: [
        { label: 'Назвать своё имя', next: 'cottage', note: 'Вы назвали своё имя. Голос повторил его без ошибки.' },
        { label: 'Записать сигнал на ленту', next: 'signal', note: 'Вы сохранили сигнал. На ленте слышен ещё один голос.' }
      ]
    },
    wreck: {
      title: 'То, что вынесло море', section: 'ОТЛИВ', place: 'НИЖНИЙ БЕРЕГ',
      paragraphs: [
        'На песке лежит лодка с выцветшей меткой порта. Внутри сухо, хотя вокруг стоят лужи. В носу — медная коробка, а рядом в камнях кто-то оставил шерстяное пальто.',
        'Течение меняется. До следующей воды осталось немного, и проход назад медленно исчезает.'
      ], choices: [
        { label: 'Взять медную коробку', next: 'keeper', note: 'Коробка тяжелее, чем должна быть. Внутри тихо звенит.' },
        { label: 'Унести пальто в дом у склона', next: 'cottage', note: 'Пальто пахнет дымом — тем же, что и письмо.' }
      ]
    },
    cottage: {
      title: 'Дом у кромки леса', section: 'СВИДЕТЕЛЬСТВО', place: 'СЕВЕРНАЯ ОПУШКА',
      paragraphs: [
        'В доме горит лампа. На столе расставлены три чашки, хотя стул только один. В ящике вы находите фотографию женщины у маяка — это ваша мать, но снимок сделан до вашего рождения.',
        'На обороте написано: «Не зажигай его ради меня». В это же мгновение снизу приходит новый сигнал — короткий и знакомый.'
      ], choices: [
        { label: 'Оставить фотографию и сказать правду', next: 'confession', note: 'Вы оставили фотографию. На пустом месте проступил круг от чашки.' },
        { label: 'Спрятать снимок и идти к сигналу', next: 'signal', note: 'Вы взяли снимок с собой. Лампа в доме погасла.' }
      ]
    },
    keeper: {
      title: 'Тот, кто держит свет', section: 'ВСТРЕЧА', place: 'МАЯК',
      paragraphs: [
        'Внутри пахнет солью и горячей пылью. На площадке у линзы стоит смотритель в пальто лодочника. Его лицо всё время кажется знакомым, но стоит моргнуть — и память отступает.',
        'Он протягивает вам ключ. «Если повернёшь его, остров увидят все. Если отпустишь — никто больше не найдёт сюда дороги». Внизу снова начинает прибывать море.'
      ], choices: [
        { label: 'Зажечь свет и остаться у линзы', next: 'beacon', note: 'Вы выбрали свет. Теперь кому-то придётся остаться.' },
        { label: 'Отдать ключ смотрителю', next: 'release', note: 'Вы вернули ключ. Колокол замолчал впервые за много лет.' }
      ]
    },
    signal: {
      title: 'Запись с другого берега', section: 'ВОСПРОИЗВЕДЕНИЕ', place: 'РАДИОРУБКА',
      paragraphs: [
        'На ленте слышны прибой, скрип двери и ваше дыхание. Затем — тихий голос: «Домой — значит туда, где тебя помнят». Запись заканчивается до того, как вы успеваете ответить.',
        'За окном виден маяк. Свет не зажжён, но на воде уже лежит тонкая светлая дорожка.'
      ], choices: [
        { label: 'Направить луч к материковому берегу', next: 'home', note: 'Вы направили свет прочь от острова. На горизонте зажёгся ответ.' },
        { label: 'Оставить луч над морем', next: 'lost', note: 'Вы позволили свету остаться над водой. Кто-то ответил из тумана.' }
      ]
    },
    beacon: {
      title: 'Новый смотритель', section: 'ФИНАЛ · I', place: 'МАЯК', ending: true,
      paragraphs: [
        'Когда линза начинает вращаться, остров возвращается в сумерки. В порту загораются окна, а колокол отвечает ему с берега. На новой карте появится ещё один остров — ваш, хотя вы не помните, чтобы когда-либо здесь жили.',
        'Смотритель спускается по лестнице налегке. Перед тем как уйти, он оставляет вам колокольный язык — тёплый, как ладонь.'
      ], memory: 'Свет оставляет дорогу открытой. Иногда это и есть дом.', choices: []
    },
    release: {
      title: 'Без звонка', section: 'ФИНАЛ · II', place: 'МАЯК', ending: true,
      paragraphs: [
        'Вы отдаёте ключ. Смотритель закрывает ладонь, и туман начинает уходить с воды. Остров становится меньше с каждым шагом вниз, но тропа не исчезает.',
        'У причала вас уже ждёт лодка. На обратном пути никто не говорит о маяке. Только ваше пальто пахнет дымом, который так и не успел разгореться.'
      ], memory: 'Вы отпустили остров, но оставили себе дорогу назад.', choices: []
    },
    home: {
      title: 'Дальний огонь', section: 'ФИНАЛ · III', place: 'МОРЕ', ending: true,
      paragraphs: [
        'С берега отвечают тремя короткими вспышками. Вы понимаете этот ритм, хотя никогда раньше его не слышали. На рассвете остров исчезает, но ваша лодка идёт прямо, будто путь домой всё это время был отмечен светом.',
        'Дома на столе лежит письмо. Бумага сухая и чистая. На ней появляется новая строка: «Спасибо, что выбрал дорогу».'
      ], memory: 'Вы указали путь другому берегу. Ответ всё-таки нашёл адресата.', choices: []
    },
    lost: {
      title: 'Там, где начинается вода', section: 'ФИНАЛ · IV', place: 'ЗА ПРЕДЕЛАМИ КАРТЫ', ending: true,
      paragraphs: [
        'Из тумана приходит лодка без вёсел. В ней никого, только сложенная карта и ваш почерк на полях. Вы позволяете течению нести себя туда, где берег ещё не назвали.',
        'Наутро маяк гаснет. Но далеко за чертой привычного моря кто-то впервые видит его свет.'
      ], memory: 'Вы выбрали неизвестный маршрут. За картой начинается не пустота, а новая история.', choices: []
    },
    confession: {
      title: 'Пустое место за столом', section: 'ФИНАЛ · V', place: 'ДОМ У ЛЕСА', ending: true,
      paragraphs: [
        'Вы рассказываете всё, что знаете, и всё, чего не знаете. В третьей чашке появляется тёплый чай. Никто не входит в комнату, но лампа больше не дрожит от ветра.',
        'Когда вы уходите, фотография остаётся на месте. В следующий раз на ней будет на одного человека больше.'
      ], memory: 'Правда не вернула прошлое. Она оставила место для того, что будет дальше.', choices: []
    }
  };

  const defaults = { current: 'letter', history: [], memories: [], night: false, large: false };
  let state = loadState();
  function loadState() {
    try { const saved = JSON.parse(localStorage.getItem('branchbook-state')); if (saved && story[saved.current] && Array.isArray(saved.history) && Array.isArray(saved.memories)) return { ...defaults, ...saved }; } catch (_) { /* Start fresh if saved progress is unreadable. */ }
    return { ...defaults };
  }
  function persist() { localStorage.setItem('branchbook-state', JSON.stringify(state)); $('savedState').textContent = 'СОХРАНЕНО'; }
  function h(tag, className, text) { const element = document.createElement(tag); if (className) element.className = className; if (text) element.textContent = text; return element; }
  function renderRoute() {
    const tree = $('routeTree'); tree.replaceChildren();
    state.history.forEach((entry, index) => {
      const row = h('div', 'route-node'); row.append(h('span', '', story[entry.id].title)); row.append(h('span', 'node-mark', String(index + 1).padStart(2, '0'))); tree.append(row);
    });
    const current = story[state.current], row = h('div', 'route-node is-current'); row.append(h('span', '', current.title)); row.append(h('span', 'node-mark', current.ending ? 'ФИНАЛ' : 'СЕЙЧАС')); tree.append(row);
    if (!current.ending) current.choices.forEach(choice => { const branch = h('div', 'route-node is-choice'); branch.append(h('span', '', choice.label)); tree.append(branch); });
    $('routeCount').textContent = String(state.history.length + 1).padStart(2, '0');
    const percent = current.ending ? 100 : Math.min(92, Math.round((state.history.length + 1) / 7 * 100));
    $('progressPercent').textContent = `${percent}%`; $('progressBar').style.width = `${percent}%`;
    tree.scrollTop = tree.scrollHeight;
  }
  function renderNotes() {
    const list = $('collectedNotes'); list.replaceChildren();
    if (!state.memories.length) { list.append(h('p', 'empty-notes', 'Пока здесь только чистая страница. Ваши решения оставят на полях первые следы.')); return; }
    state.memories.slice(-4).reverse().forEach((memory, i) => { const card = h('article', 'note-card'); card.append(h('span', '', `ЗАПИСЬ ${String(state.memories.length - i).padStart(2, '0')}`)); card.append(h('p', '', memory)); list.append(card); });
  }
  function renderStory() {
    const node = story[state.current];
    $('chapterLabel').innerHTML = `${node.section.startsWith('ФИНАЛ') ? node.section : `ГЛАВА ${String(state.history.length + 1).padStart(2, '0')} · ${node.section}`}`;
    $('chapterPlace').textContent = node.place; $('chapterTitle').textContent = node.title;
    const copy = $('storyCopy'); copy.replaceChildren(); node.paragraphs.forEach(text => copy.append(h('p', '', text)));
    const memoryBox = $('storyMemory'); memoryBox.hidden = !node.memory; if (node.memory) $('memoryText').textContent = node.memory;
    $('choicePrompt').textContent = node.ending ? 'Вы дошли до конца этой дороги.' : 'Что вы сделаете?';
    const choices = $('choices'); choices.replaceChildren();
    if (node.ending) {
      const button = h('button', 'choice-button'); button.type = 'button'; button.innerHTML = '<span class="choice-index">↺</span><span class="choice-label">Прочитать заново</span><span class="choice-arrow">↗</span>'; button.addEventListener('click', restart); choices.append(button);
    } else node.choices.forEach((choice, index) => {
      const button = h('button', 'choice-button'); button.type = 'button';
      button.innerHTML = `<span class="choice-index">${String(index + 1).padStart(2, '0')}</span><span class="choice-label"></span><span class="choice-arrow">↗</span>`;
      button.querySelector('.choice-label').textContent = choice.label; button.addEventListener('click', () => choose(choice)); choices.append(button);
    });
    $('pageNumber').textContent = String(state.history.length + 1);
    document.title = `${node.title} — Колокольчик в отлив`;
    renderRoute(); renderNotes();
  }
  function choose(choice) {
    state.history.push({ id: state.current, choice: choice.label }); state.memories.push(choice.note); state.current = choice.next; persist(); renderStory();
  }
  function restart() { state = { ...defaults, history: [], memories: [], night: state.night, large: state.large }; persist(); renderStory(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  $('restartButton').addEventListener('click', restart);
  $('textSmaller').addEventListener('click', () => { state.large = false; document.body.classList.remove('large-type'); persist(); });
  $('textLarger').addEventListener('click', () => { state.large = true; document.body.classList.add('large-type'); persist(); });
  $('themeButton').addEventListener('click', () => { state.night = !state.night; document.body.classList.toggle('reader-night', state.night); $('themeButton').textContent = state.night ? '☀' : '☾'; $('themeButton').setAttribute('aria-pressed', String(state.night)); persist(); });
  $('mapToggle').addEventListener('click', () => { const map = $('islandMap'), open = map.hidden; map.hidden = !open; $('mapToggle').setAttribute('aria-expanded', String(open)); $('mapToggle').firstChild.textContent = open ? 'Скрыть карту острова ' : 'Показать карту острова '; });
  document.body.classList.toggle('reader-night', state.night); document.body.classList.toggle('large-type', state.large);
  $('themeButton').textContent = state.night ? '☀' : '☾'; $('themeButton').setAttribute('aria-pressed', String(state.night));
  renderStory();
})();
