(() => {
  const $ = id => document.getElementById(id);
  const legacyStory = {
    letter: {
      title: 'Письмо с запахом дыма', section: 'ПИСЬМО', place: 'ОСТРОВ КЛИН', mood: 'fog',
      paragraphs: [
        'Письмо приходит утром, вместе с пустой лодкой. На плотной бумаге остался след от мокрого пальца и всего одна строка: «Приезжай, пока море не вернуло колокол». Подписи нет, но почерк вы узнаёте.',
        'Остров Клин исчезает с обычных карт к вечеру. В порту говорят, что его маяк погас семнадцать лет назад. Всё это время туда никто не плавал. На причале ждёт лодочник и смотрит, как вы разглядываете письмо.'
      ], choices: [
        { label: 'Подняться по тропе к маяку', next: 'cliff', note: 'Вы пошли за огнём, хотя в письме просили не искать свет.' },
        { label: 'Ответить на голос из радиорубки', next: 'radio', note: 'Вы ответили первыми. На том конце уже знали ваше имя.' }
      ]
    },
    cliff: {
      title: 'Тропа над водой', section: 'ПОДЪЁМ', place: 'ЗАПАДНЫЙ УТЁС', mood: 'stone',
      paragraphs: [
        'На тропе пахнет железом и мокрой хвоей. Море давно отступило, оставив на камнях блестящие полосы. Впереди темнеет маяк: не разрушенный, а словно вырезанный из ночи.',
        'Из башни доносится колокольный звон — один короткий удар, затем тишина. У подножия видна узкая тропа к обнажившемуся берегу.'
      ], choices: [
        { label: 'Ответить на звон', next: 'keeper', note: 'Вы ответили колоколу. Теперь маяк знает, что вы пришли.' },
        { label: 'Спуститься к кромке отлива', next: 'wreck', note: 'Вы выбрали море. В песке остался след второй пары шагов.' }
      ]
    },
    radio: {
      title: 'Голос на частоте', section: 'СИГНАЛ', place: 'СТАРАЯ РАДИОРУБКА', mood: 'signal',
      paragraphs: [
        'Радиорубка открыта, будто вас ждали. Катушка медленно вращается, хотя провод оборван. Из динамика звучит голос лодочника, только моложе и спокойнее.',
        '«Если маяк снова загорится, остров вспомнит дорогу домой». Потом голос спрашивает, нашли ли вы ключ от станции.'
      ], choices: [
        { label: 'Назвать своё имя', next: 'voice', note: 'Вы назвали своё имя. Голос повторил его без ошибки.' },
        { label: 'Записать сигнал на ленту', next: 'signal', note: 'Вы сохранили сигнал. На ленте слышен ещё один голос.' }
      ]
    },
    voice: {
      title: 'Имя, произнесённое дважды', section: 'ОТВЕТ', place: 'РАДИОРУБКА', mood: 'memory',
      paragraphs: [
        'Катушка останавливается. Из динамика доносится не ваше имя, а короткий вдох — тот самый, который мать делала перед тем, как сказать что-то важное. Вы не слышали его много лет, но узнаёте сразу.',
        'На столе лежит карандаш. Он катится к краю карты и замирает у отметки дома на северной опушке. За окном, ниже утёса, вспыхивает огонёк.'
      ], dialogue: { speaker: 'ГОЛОС ИЗ ДИНАМИКА', text: 'Если ты помнишь мой голос, не путай память с обещанием.' }, choices: [
        { label: 'Проверить дом на опушке', next: 'cottage', note: 'Вы пошли к дому. Голос остался на частоте, но перестал звать.' },
        { label: 'Спуститься за огоньком к воде', next: 'shore', note: 'Вы выбрали огонь на воде. На карте появилась линия, которой там не было.' }
      ]
    },
    wreck: {
      title: 'То, что вынесло море', section: 'ОТЛИВ', place: 'НИЖНИЙ БЕРЕГ', mood: 'tide',
      paragraphs: [
        'На песке лежит лодка с выцветшей меткой порта. Внутри сухо, хотя вокруг стоят лужи. В носу — медная коробка, а рядом в камнях кто-то оставил шерстяное пальто.',
        'Течение меняется. До следующей воды осталось немного, и проход назад медленно исчезает.'
      ], choices: [
        { label: 'Взять медную коробку', next: 'keeper', note: 'Коробка тяжелее, чем должна быть. Внутри тихо звенит.' },
        { label: 'Унести пальто в дом у склона', next: 'cottage', note: 'Пальто пахнет дымом — тем же, что и письмо.' }
      ]
    },
    cottage: {
      title: 'Дом у кромки леса', section: 'СВИДЕТЕЛЬСТВО', place: 'СЕВЕРНАЯ ОПУШКА', mood: 'hearth',
      paragraphs: [
        'В доме горит лампа. На столе расставлены три чашки, хотя стул только один. В ящике вы находите фотографию женщины у маяка — это ваша мать, но снимок сделан до вашего рождения.',
        'На обороте написано: «Не зажигай его ради меня». В это же мгновение снизу приходит новый сигнал — короткий и знакомый.'
      ], choices: [
        { label: 'Оставить фотографию и сказать правду', next: 'confession', note: 'Вы оставили фотографию. На пустом месте проступил круг от чашки.' },
        { label: 'Спрятать снимок и идти к сигналу', next: 'signal', note: 'Вы взяли снимок с собой. Лампа в доме погасла.' }
      ]
    },
    keeper: {
      title: 'Тот, кто держит свет', section: 'ВСТРЕЧА', place: 'МАЯК', mood: 'lantern',
      paragraphs: [
        'Внутри пахнет солью и горячей пылью. На площадке у линзы стоит смотритель в пальто лодочника. Его лицо всё время кажется знакомым, но стоит моргнуть — и память отступает.',
        'Он протягивает вам ключ. «Если повернёшь его, остров увидят все. Если отпустишь — никто больше не найдёт сюда дороги». Внизу снова начинает прибывать море.'
      ], choices: [
        { label: 'Спросить, кого удерживает свет', next: 'threshold', note: 'Вы попросили назвать того, кто должен остаться. Смотритель ответил не сразу.' },
        { label: 'Попросить рассказать о ключе', next: 'threshold', note: 'Вы не стали решать вслепую. Смотритель повернул ключ в ладони.' }
      ]
    },
    threshold: {
      title: 'Перед тем как повернуть ключ', section: 'ПОСЛЕДНИЙ РАЗГОВОР', place: 'КОМНАТА ЛИНЗЫ', mood: 'brass',
      paragraphs: [
        'Смотритель кладёт ключ на подоконник. Линза медленно собирает в нём бледный свет, и по стенам проходят полосы, похожие на строки письма. В каждой не хватает одного слова.',
        'За стеклом море возвращается к острову. Теперь выбор касается не того, вернётся ли свет, а того, кому он оставит дорогу.'
      ], dialogue: { speaker: 'СМОТРИТЕЛЬ', text: 'Свет ничего не возвращает. Он только показывает, что ты готов оставить открытым.' }, choices: [
        { label: 'Зажечь свет и остаться у линзы', next: 'beacon', note: 'Вы выбрали свет. Теперь кому-то придётся остаться.' },
        { label: 'Отпустить ключ и закрыть ставни', next: 'release', note: 'Вы вернули ключ. Колокол замолчал впервые за много лет.' }
      ]
    },
    signal: {
      title: 'Запись с другого берега', section: 'ВОСПРОИЗВЕДЕНИЕ', place: 'РАДИОРУБКА', mood: 'silver',
      paragraphs: [
        'На ленте слышны прибой, скрип двери и ваше дыхание. Затем — тихий голос: «Домой — значит туда, где тебя помнят». Запись заканчивается до того, как вы успеваете ответить.',
        'За окном виден маяк. Свет не зажжён, но на воде уже лежит тонкая светлая дорожка.'
      ], choices: [
        { label: 'Пойти по световой дорожке', next: 'shore', note: 'Вы пошли за светом. Прибой повторял ритм записи.' },
        { label: 'Оставить луч над морем', next: 'lost', note: 'Вы позволили свету остаться над водой. Кто-то ответил из тумана.' }
      ]
    },
    shore: {
      title: 'Линия, которой не было', section: 'НИЖНЯЯ ВОДА', place: 'ВНЕШНИЙ БЕРЕГ', mood: 'open-sea',
      paragraphs: [
        'По световой дорожке можно идти, не замочив обуви. Под прозрачной водой видны камни, раковины и белая черта старой приливной отметки. Она продолжается прямо под волны.',
        'На другом конце мигает огонь. Он может быть берегом, лодкой или отражением маяка — но теперь вы знаете: ответ не всегда означает приглашение.'
      ], dialogue: { speaker: 'ЗАПИСЬ В ПАМЯТИ', text: 'Домой — это не место, а тот, кто узнает твой голос.' }, choices: [
        { label: 'Направить свет к материку и вернуться', next: 'home', note: 'Вы выбрали обратный путь. На горизонте зажглись три ответных огня.' },
        { label: 'Плыть к огню, которого нет на карте', next: 'lost', note: 'Вы выбрали неизвестный берег. Карта закончилась раньше моря.' }
      ]
    },
    beacon: {
      title: 'Новый смотритель', section: 'ФИНАЛ · I', place: 'МАЯК', ending: true, mood: 'dawn',
      paragraphs: [
        'Когда линза начинает вращаться, остров возвращается в сумерки. В порту загораются окна, а колокол отвечает ему с берега. На новой карте появится ещё один остров — ваш, хотя вы не помните, чтобы когда-либо здесь жили.',
        'Смотритель спускается по лестнице налегке. Перед тем как уйти, он оставляет вам колокольный язык — тёплый, как ладонь.'
      ], memory: 'Свет оставляет дорогу открытой. Иногда это и есть дом.', choices: []
    },
    release: {
      title: 'Без звонка', section: 'ФИНАЛ · II', place: 'МАЯК', ending: true, mood: 'fog',
      paragraphs: [
        'Вы отдаёте ключ. Смотритель закрывает ладонь, и туман начинает уходить с воды. Остров становится меньше с каждым шагом вниз, но тропа не исчезает.',
        'У причала вас уже ждёт лодка. На обратном пути никто не говорит о маяке. Только ваше пальто пахнет дымом, который так и не успел разгореться.'
      ], memory: 'Вы отпустили остров, но оставили себе дорогу назад.', choices: []
    },
    home: {
      title: 'Дальний огонь', section: 'ФИНАЛ · III', place: 'МОРЕ', ending: true, mood: 'dawn',
      paragraphs: [
        'С берега отвечают тремя короткими вспышками. Вы понимаете этот ритм, хотя никогда раньше его не слышали. На рассвете остров исчезает, но ваша лодка идёт прямо, будто путь домой всё это время был отмечен светом.',
        'Дома на столе лежит письмо. Бумага сухая и чистая. На ней появляется новая строка: «Спасибо, что выбрал дорогу».'
      ], memory: 'Вы указали путь другому берегу. Ответ всё-таки нашёл адресата.', choices: []
    },
    lost: {
      title: 'Там, где начинается вода', section: 'ФИНАЛ · IV', place: 'ЗА ПРЕДЕЛАМИ КАРТЫ', ending: true, mood: 'deep',
      paragraphs: [
        'Из тумана приходит лодка без вёсел. В ней никого, только сложенная карта и ваш почерк на полях. Вы позволяете течению нести себя туда, где берег ещё не назвали.',
        'Наутро маяк гаснет. Но далеко за чертой привычного моря кто-то впервые видит его свет.'
      ], memory: 'Вы выбрали неизвестный маршрут. За картой начинается не пустота, а новая история.', choices: []
    },
    confession: {
      title: 'Пустое место за столом', section: 'ФИНАЛ · V', place: 'ДОМ У ЛЕСА', ending: true, mood: 'hearth',
      paragraphs: [
        'Вы рассказываете всё, что знаете, и всё, чего не знаете. В третьей чашке появляется тёплый чай. Никто не входит в комнату, но лампа больше не дрожит от ветра.',
        'Когда вы уходите, фотография остаётся на месте. В следующий раз на ней будет на одного человека больше.'
      ], memory: 'Правда не вернула прошлое. Она оставила место для того, что будет дальше.', choices: []
    }
  };

  const story = window.BRANCHBOOK_STORY || legacyStory;
  const defaults = {
    current: 'S01', history: [], memories: [],
    vars: { knowledge: 0, lighthouse: 7, time: 5, risk: 2, contract: 0 },
    flags: {}, night: false, large: false
  };
  let state = loadState();
  let transitioning = false;
  let activeMusicUrl = '';
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem('branchbook-state'));
      if (saved && story[saved.current] && Array.isArray(saved.history) && Array.isArray(saved.memories)) {
        return { ...defaults, ...saved, vars: { ...defaults.vars, ...(saved.vars || {}) }, flags: { ...(saved.flags || {}) } };
      }
    } catch (_) { /* Start fresh if saved progress is unreadable. */ }
    return { ...defaults };
  }
  function persist() { localStorage.setItem('branchbook-state', JSON.stringify(state)); $('savedState').textContent = 'СОХРАНЕНО'; }
  function h(tag, className, text) { const element = document.createElement(tag); if (className) element.className = className; if (text) element.textContent = text; return element; }
  function meets(conditions = {}) {
    return Object.entries(conditions).every(([key, value]) => {
      if (key === 'flags') return Object.entries(value).every(([flag, expected]) => Boolean(state.flags[flag]) === expected);
      if (key === 'max') return Object.entries(value).every(([stat, limit]) => Number(state.vars[stat] || 0) <= Number(limit));
      return Number(state.vars[key] || 0) >= Number(value);
    });
  }
  function availableChoices(node) { return (node.choices || []).filter(choice => meets(choice.when)); }
  function renderRoute() {
    const tree = $('routeTree'); tree.replaceChildren();
    state.history.forEach((entry, index) => {
      const row = h('div', 'route-node'); row.append(h('span', '', story[entry.id].title)); row.append(h('span', 'node-mark', String(index + 1).padStart(2, '0'))); tree.append(row);
    });
    const current = story[state.current], row = h('div', 'route-node is-current'); row.append(h('span', '', current.title)); row.append(h('span', 'node-mark', current.ending ? 'ФИНАЛ' : 'СЕЙЧАС')); tree.append(row);
    if (!current.ending) availableChoices(current).forEach(choice => { const branch = h('div', 'route-node is-choice'); branch.append(h('span', '', choice.label)); tree.append(branch); });
    $('routeCount').textContent = String(state.history.length + 1).padStart(2, '0');
    const visited = new Set([...state.history.map(entry => entry.id), state.current]).size;
    const percent = current.ending ? 100 : Math.min(96, Math.round(visited / Object.keys(story).length * 100));
    $('progressPercent').textContent = `${percent}%`; $('progressBar').style.width = `${percent}%`;
    tree.scrollTop = tree.scrollHeight;
  }
  function renderNotes() {
    const list = $('collectedNotes'); list.replaceChildren();
    const meters = h('section', 'state-readout'); meters.setAttribute('aria-label', 'Условия у маяка');
    const stats = [
      ['Состояние маяка', state.vars.lighthouse, 10, 'lighthouse'],
      ['Риск для города', state.vars.risk, 10, 'risk'],
      ['Дней до шторма', state.vars.time, 5, 'time'],
      ['Собранные данные', state.vars.knowledge, 5, 'knowledge'],
      ['Выполнение работ', state.vars.contract, 3, 'contract']
    ];
    stats.forEach(([label, value, max, kind]) => {
      const row = h('div', `state-meter state-${kind}`);
      const head = h('div', 'state-meter-head'); head.append(h('span', '', label), h('b', '', `${value}/${max}`));
      const track = h('div', 'state-meter-track'); track.setAttribute('role', 'progressbar'); track.setAttribute('aria-label', label); track.setAttribute('aria-valuemin', '0'); track.setAttribute('aria-valuemax', String(max)); track.setAttribute('aria-valuenow', String(value));
      const fill = h('i', ''); fill.style.width = `${Math.max(0, Math.min(100, value / max * 100))}%`; track.append(fill); row.append(head, track); meters.append(row);
    });
    list.append(meters);
    if (!state.memories.length) { list.append(h('p', 'empty-notes', 'Наблюдения и решения будут записаны здесь.')); return; }
    state.memories.slice(-4).reverse().forEach((memory, i) => { const card = h('article', 'note-card'); card.append(h('span', '', `ЗАПИСЬ ${String(state.memories.length - i).padStart(2, '0')}`)); card.append(h('p', '', memory)); list.append(card); });
  }
  function renderStory() {
    const node = story[state.current];
    document.body.dataset.atmosphere = node.mood || 'fog';
    $('readingPage').dataset.atmosphere = node.mood || 'fog';
    $('chapterLabel').textContent = node.ending ? `ФИНАЛ · ${node.endingId}` : `СЦЕНА ${String(state.history.length + 1).padStart(2, '0')} · ${node.section}`;
    $('chapterPlace').textContent = node.place; $('chapterTitle').textContent = node.title;
    const copy = $('storyCopy'); copy.replaceChildren(); node.paragraphs.forEach(text => copy.append(h('p', '', text)));
    const dialogue = $('dialogueNote'); dialogue.hidden = !node.dialogue;
    if (node.dialogue) { $('dialogueSpeaker').textContent = node.dialogue.speaker; $('dialogueText').textContent = `«${node.dialogue.text}»`; }
    const memoryBox = $('storyMemory'); memoryBox.hidden = !node.memory; if (node.memory) $('memoryText').textContent = node.memory;
    $('choicePrompt').textContent = node.ending ? 'Эта история завершилась. Можно пройти другим путём.' : 'Что вы сделаете?';
    const choices = $('choices'); choices.replaceChildren();
    if (node.ending) {
      const button = h('button', 'choice-button'); button.type = 'button'; button.innerHTML = '<span class="choice-index">↺</span><span class="choice-label">Прочитать заново</span><span class="choice-arrow">↗</span>'; button.addEventListener('click', restart); choices.append(button);
    } else availableChoices(node).forEach((choice, index) => {
      const button = h('button', 'choice-button'); button.type = 'button';
      button.innerHTML = `<span class="choice-index">${String(index + 1).padStart(2, '0')}</span><span class="choice-label"></span><span class="choice-arrow">↗</span>`;
      button.querySelector('.choice-label').textContent = choice.label; button.addEventListener('click', () => choose(choice)); choices.append(button);
    });
    if (!node.ending && !choices.childElementCount) choices.append(h('p', 'empty-choices', 'Ни один вариант сейчас недоступен. Вернитесь к журналу и проверьте условия.'));
    $('pageNumber').textContent = String(state.history.length + 1);
    document.title = `${node.title} — Ритм берега`;
    renderRoute(); renderNotes();
  }
  function choose(choice) {
    if (transitioning) return;
    if (!meets(choice.when)) return;
    moveTo(() => {
      state.history.push({ id: state.current, choice: choice.label });
      if (choice.note) state.memories.push(choice.note);
      Object.entries(choice.effects || {}).forEach(([key, delta]) => {
        const max = key === 'time' ? 5 : key === 'knowledge' ? 5 : key === 'contract' ? 3 : 10;
        state.vars[key] = Math.max(0, Math.min(max, Number(state.vars[key] || 0) + Number(delta)));
      });
      Object.assign(state.flags, choice.flags || {});
      state.current = choice.next;
    });
  }
  function moveTo(change) {
    if (transitioning) return;
    transitioning = true;
    const page = $('readingPage');
    page.classList.add('is-leaving');
    window.setTimeout(() => {
      change(); persist(); renderStory(); window.scrollTo({ top: 0, behavior: 'smooth' });
      page.classList.remove('is-leaving');
      page.classList.add('is-arriving');
      $('chapterTitle').focus({ preventScroll: true });
      window.setTimeout(() => { page.classList.remove('is-arriving'); transitioning = false; }, 520);
    }, 230);
  }
  function restart() {
    moveTo(() => { state = { ...defaults, vars: { ...defaults.vars }, flags: {}, history: [], memories: [], night: state.night, large: state.large }; });
  }

  const musicButton = $('musicButton'), musicFile = $('musicFile'), ambientAudio = $('ambientAudio'), volumeControl = $('volumeControl');
  let autoplayBlocked = false;
  const savedVolume = Number(localStorage.getItem('branchbook-volume'));
  if (Number.isFinite(savedVolume) && savedVolume >= 0 && savedVolume <= 100) volumeControl.value = String(savedVolume);
  ambientAudio.volume = Number(volumeControl.value) / 100;
  volumeControl.addEventListener('input', () => {
    ambientAudio.volume = Number(volumeControl.value) / 100;
    localStorage.setItem('branchbook-volume', volumeControl.value);
  });
  function updateMusicButton() {
    const hasTrack = Boolean(ambientAudio.src);
    const playing = !ambientAudio.paused;
    musicButton.innerHTML = hasTrack ? (playing ? '♫ <span>Пауза</span>' : '♫ <span>Слушать</span>') : '♫ <span>Музыка</span>';
    musicButton.setAttribute('aria-label', hasTrack ? (playing ? 'Поставить музыку на паузу' : 'Включить саундтрек Fogbound Island') : 'Загрузить музыку из файла');
    musicButton.title = autoplayBlocked ? 'Браузер блокирует автозапуск. Нажмите, чтобы включить звук.' : hasTrack ? 'Саундтрек Fogbound Island' : 'Загрузите свой саундтрек из файла';
    musicButton.classList.toggle('is-playing', playing);
  }
  musicButton.addEventListener('click', async () => {
    if (!ambientAudio.src) { musicFile.click(); return; }
    if (ambientAudio.paused) { try { await ambientAudio.play(); } catch (_) { updateMusicButton(); } }
    else ambientAudio.pause();
  });
  musicFile.addEventListener('change', () => {
    const file = musicFile.files && musicFile.files[0];
    if (!file) return;
    if (activeMusicUrl) URL.revokeObjectURL(activeMusicUrl);
    activeMusicUrl = URL.createObjectURL(file);
    ambientAudio.src = activeMusicUrl;
    updateMusicButton();
  });
  ambientAudio.addEventListener('play', () => { autoplayBlocked = false; updateMusicButton(); });
  ambientAudio.addEventListener('pause', updateMusicButton);
  ambientAudio.addEventListener('ended', updateMusicButton);

  $('restartButton').addEventListener('click', restart);
  $('textSmaller').addEventListener('click', () => { state.large = false; document.body.classList.remove('large-type'); persist(); });
  $('textLarger').addEventListener('click', () => { state.large = true; document.body.classList.add('large-type'); persist(); });
  $('themeButton').addEventListener('click', () => { state.night = !state.night; document.body.classList.toggle('reader-night', state.night); $('themeButton').textContent = state.night ? '☀' : '☾'; $('themeButton').setAttribute('aria-pressed', String(state.night)); persist(); });
  $('mapToggle').addEventListener('click', () => { const map = $('islandMap'), open = map.hidden; map.hidden = !open; $('mapToggle').setAttribute('aria-expanded', String(open)); $('mapToggle').firstChild.textContent = open ? 'Скрыть карту острова ' : 'Показать карту острова '; });
  document.body.classList.toggle('reader-night', state.night); document.body.classList.toggle('large-type', state.large);
  $('themeButton').textContent = state.night ? '☀' : '☾'; $('themeButton').setAttribute('aria-pressed', String(state.night));
  updateMusicButton();
  renderStory();
  ambientAudio.play().catch(() => {
    autoplayBlocked = true;
    updateMusicButton();
  });
})();
