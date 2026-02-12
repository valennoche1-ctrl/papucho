const OPTIONS = {
  identity: [
    'Masculino','Femenino','No binario','Andrógino','Voz grave','Voz media','Voz aguda','Cicatriz facial','Sin cicatriz','Heterocromía',
    'Tez muy clara','Tez clara','Tez media','Tez oliva','Tez morena','Tez oscura','Complexión delgada','Complexión atlética','Complexión robusta','Complexión pesada'
  ],
  hair: [
    'Rapado','Corto militar','Melena corta','Melena media','Melena larga','Trenza simple','Trenza doble','Coleta alta','Coleta baja','Moño',
    'Rizado corto','Rizado largo','Ondulado','Lacio largo','Cresta','Corte noble','Corte campesino','Calvo','Barba corta','Barba larga trenzada'
  ],
  face: [
    'Cara ovalada','Cara cuadrada','Cara triangular','Cara redonda','Nariz recta','Nariz aguileña','Nariz corta','Nariz ancha','Ojos grandes','Ojos medianos',
    'Ojos pequeños','Cejas rectas','Cejas arqueadas','Labio fino','Labio medio','Labio grueso','Pómulos suaves','Pómulos marcados','Mandíbula suave','Mandíbula fuerte'
  ],
  outfit: [
    'Gambesón simple','Gambesón reforzado','Cota ligera','Cota media','Brigantina cuero','Brigantina acero','Placas simples','Placas pulidas','Túnica soldado','Túnica mercenario',
    'Capa corta','Capa larga','Guantes cuero','Guantes metálicos','Botas ligeras','Botas pesadas','Yelmo abierto','Yelmo cerrado','Escudo redondo','Escudo cometa'
  ],
  heraldry: [
    'León','Lobo','Águila','Dragón','Torre','Espada','Corona','Sol','Luna','Árbol','Rojo carmesí','Azul real','Verde bosque','Negro azabache','Blanco marfil',
    'Ribete dorado','Ribete plata','Estandarte rasgado','Estandarte nuevo','Estandarte bordado'
  ]
};

const MONSTERS = {
  D: ['Lobo hambriento', 'Bandido', 'Necrófago menor'],
  C: ['Ogro joven', 'Araña gigante', 'Arquero élite'],
  B: ['Gólem de fortaleza', 'Nigromante errante'],
  A: ['Quimera', 'Caballero corrompido'],
  S: ['Dragón joven', 'Bestia ancestral'],
  SS: ['Dragón antiguo', 'Señor de cenizas'],
  SSS: ['Titán abisal', 'Devorador de reinos']
};

const MERCHANTS = ['Herrero', 'Armero', 'Talabartero', 'Alquimista', 'Carpintero', 'Mercader de telas', 'Joyero', 'Tabernero', 'Curandero', 'Escriba', 'Establero', 'Cartógrafo', 'Cocinero', 'Reliquias', 'Domador', 'Mercader ambulante'];

const player = {
  created: false,
  level: 1,
  xp: 0,
  gold: 80,
  hp: 120,
  atk: 16,
  def: 10,
  quest: {
    active: false,
    title: 'Limpia el Camino del Molino',
    targetRank: 'D',
    killsNeeded: 3,
    killsDone: 0,
    completed: false,
    turnedIn: false
  }
};

function fillSelect(id, options) {
  const select = document.getElementById(id);
  options.forEach((opt) => {
    const el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    select.appendChild(el);
  });
}

['identity', 'hair', 'face', 'outfit', 'heraldry'].forEach((key) => fillSelect(key, OPTIONS[key]));

function randomOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rollRank() {
  const pool = ['D', 'D', 'D', 'C', 'C', 'B', 'A', 'S', 'SS', 'SSS'];
  return randomOf(pool);
}

function gainXP(amount) {
  player.xp += amount;
  while (player.xp >= 100) {
    player.xp -= 100;
    player.level += 1;
    player.hp += 12;
    player.atk += 2;
    player.def += 2;
  }
}

function renderStats() {
  document.getElementById('stats').innerHTML = `
    <p><b>Nivel:</b> ${player.level}</p>
    <p><b>XP:</b> ${player.xp}/100</p>
    <p><b>Oro:</b> ${player.gold}</p>
    <p><b>Vida:</b> ${player.hp}</p>
    <p><b>Ataque:</b> ${player.atk}</p>
    <p><b>Defensa:</b> ${player.def}</p>
    <p><b>Misión principal:</b> ${player.quest.active ? 'Activa' : 'Inactiva'} | Progreso ${player.quest.killsDone}/${player.quest.killsNeeded}</p>
  `;
}

function renderQuestText() {
  if (!player.quest.active) {
    document.getElementById('missionText').textContent = 'Sin misión activa.';
    return;
  }

  if (player.quest.completed && !player.quest.turnedIn) {
    document.getElementById('missionText').textContent = `Objetivo completado. Vuelve al herrero y pulsa "Entregar misión".`;
    return;
  }

  if (player.quest.turnedIn) {
    document.getElementById('missionText').textContent = 'Misión principal entregada. Preparando siguiente capítulo...';
    return;
  }

  document.getElementById('missionText').textContent = `Misión activa: derrota ${player.quest.killsNeeded} enemigos de rango ${player.quest.targetRank}. Progreso: ${player.quest.killsDone}/${player.quest.killsNeeded}.`;
}

document.getElementById('createBtn').addEventListener('click', () => {
  const n = document.getElementById('name').value.trim() || 'Guerrero';
  const summary = `${n}: ${document.getElementById('identity').value}, ${document.getElementById('hair').value}, ${document.getElementById('face').value}, ${document.getElementById('outfit').value}, heráldica ${document.getElementById('heraldry').value}.`;
  player.created = true;
  document.getElementById('characterSummary').textContent = summary;
});

document.getElementById('startMainQuestBtn').addEventListener('click', () => {
  if (!player.created) {
    alert('Primero crea tu personaje.');
    return;
  }

  player.quest.active = true;
  player.quest.completed = false;
  player.quest.turnedIn = false;
  player.quest.killsDone = 0;
  renderQuestText();
  renderStats();
});

document.getElementById('fightBtn').addEventListener('click', () => {
  if (!player.created) {
    alert('Primero crea tu personaje.');
    return;
  }

  const rank = rollRank();
  const monster = randomOf(MONSTERS[rank]);
  const danger = { D: 8, C: 13, B: 19, A: 25, S: 32, SS: 40, SSS: 52 }[rank];
  const playerPower = player.atk + player.def + Math.floor(Math.random() * 15);

  if (playerPower >= danger) {
    gainXP(16 + danger);
    player.gold += 8 + danger;
    document.getElementById('fightLog').textContent = `¡Victoria! Derrotaste a ${monster} (rango ${rank}).`;

    if (player.quest.active && !player.quest.completed && rank === player.quest.targetRank) {
      player.quest.killsDone += 1;
      if (player.quest.killsDone >= player.quest.killsNeeded) {
        player.quest.completed = true;
      }
      renderQuestText();
    }
  } else {
    player.hp = Math.max(20, player.hp - 10);
    document.getElementById('fightLog').textContent = `Fuiste herido por ${monster} (rango ${rank}).`;
  }

  renderStats();
});

document.getElementById('turnInQuestBtn').addEventListener('click', () => {
  if (!player.created || !player.quest.active) {
    alert('No tienes misión principal activa.');
    return;
  }

  if (!player.quest.completed) {
    alert('Aún no completaste los objetivos de la misión.');
    return;
  }

  if (player.quest.turnedIn) {
    alert('La misión ya fue entregada.');
    return;
  }

  player.quest.turnedIn = true;
  gainXP(80);
  player.gold += 120;
  document.getElementById('fightLog').textContent = 'El herrero te recompensa por limpiar el camino: +80 XP, +120 oro.';
  renderQuestText();
  renderStats();
});

function generateCity() {
  const city = randomOf(['Roca Alba', 'Valle de Hierro', 'Puerto Ceniza', 'Corona del Norte', 'Llanuras del Rey']);
  const fort = randomOf(['Bastión del Lobo', 'Fortaleza Carmesí', 'Muralla de Bronce', 'Torre del Halcón']);
  const climate = randomOf(['frío montañoso', 'templado boscoso', 'costero lluvioso', 'seco ventoso']);
  const economy = randomOf(['minería', 'comercio marítimo', 'ganadería', 'artesanía']);

  const list = document.getElementById('merchants');
  list.innerHTML = '';
  MERCHANTS.sort(() => Math.random() - 0.5).slice(0, 8).forEach((merchant) => {
    const item = document.createElement('li');
    item.textContent = `${merchant} (IA): "Tengo ofertas según la demanda local"`;
    list.appendChild(item);
  });

  document.getElementById('cityInfo').textContent = `Ciudad: ${city}. Fortaleza cercana: ${fort}. Clima: ${climate}. Economía dominante: ${economy}.`;
}

document.getElementById('refreshCity').addEventListener('click', generateCity);

renderStats();
renderQuestText();
generateCity();
