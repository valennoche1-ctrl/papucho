# Proyecto: **Eternal Kingdoms** (MMORPG medieval de realismo alto)

## 1) Visión general
Este documento define un diseño **realista y ejecutable por fases** para tu videojuego multijugador medieval con:
- Guerrero con armadura, escudo y espada.
- Personalización inicial profunda (20+ opciones por tipo).
- Misiones, niveles, monstruos y dragones por rangos D, C, B, A, S, SS, SSS.
- Fortalezas y ciudades enormes con comerciantes medievales variados.
- Mundo "infinito" mediante generación procedural por regiones.
- NPCs (pueblerinos, comerciantes y soldados) controlados por IA.

> Nota técnica: "infinito" en videojuegos se implementa como **streaming procedural ilimitado por semillas** y no como mapa precargado literal infinito.

---

## 2) Bucle principal de juego
1. Crear personaje.
2. Llegar a ciudad/fortaleza inicial.
3. Tomar misiones.
4. Explorar mundo, combatir monstruos, recolectar recursos.
5. Subir de nivel y mejorar equipo.
6. Acceder a zonas de rango mayor y jefes (dragones/bestias élite).
7. Jugar en escuadrón/gremio para asedios y eventos de mundo.

---

## 3) Personalización inicial (mínimo 20 por categoría)

### 3.1 Género/identidad (20)
1) Masculino, 2) Femenino, 3) No binario, 4) Andrógino, 5) Voz grave, 6) Voz media, 7) Voz aguda, 8) Cicatriz facial, 9) Sin cicatriz, 10) Heterocromía,
11) Tez muy clara, 12) Tez clara, 13) Tez media, 14) Tez oliva, 15) Tez morena, 16) Tez oscura,
17) Complexión delgada, 18) Complexión atlética, 19) Complexión robusta, 20) Complexión pesada.

### 3.2 Pelo (20)
1) Rapado, 2) Corto militar, 3) Melena corta, 4) Melena media, 5) Melena larga,
6) Trenza simple, 7) Trenza doble, 8) Coleta alta, 9) Coleta baja, 10) Moño,
11) Rizado corto, 12) Rizado largo, 13) Ondulado, 14) Lacio largo, 15) Cresta,
16) Corte noble, 17) Corte campesino, 18) Calvo, 19) Barba corta, 20) Barba larga trenzada.

### 3.3 Rostro y rasgos (20)
1) Forma de cara ovalada, 2) cuadrada, 3) triangular, 4) redonda,
5) Nariz recta, 6) aguileña, 7) corta, 8) ancha,
9) Ojos grandes, 10) medianos, 11) pequeños,
12) Cejas rectas, 13) arqueadas,
14) Labio fino, 15) medio, 16) grueso,
17) Pómulos suaves, 18) marcados,
19) Mandíbula suave, 20) mandíbula fuerte.

### 3.4 Vestimenta base/armadura inicial (20)
1) Gambesón simple, 2) Gambesón reforzado, 3) Cota de malla ligera, 4) Cota de malla media,
5) Brigantina de cuero, 6) Brigantina de acero, 7) Armadura de placas simple, 8) placas pulidas,
9) Túnica de soldado, 10) Túnica de mercenario,
11) Capa corta, 12) capa larga,
13) Guantes de cuero, 14) guantes metálicos,
15) Botas ligeras, 16) botas pesadas,
17) Yelmo abierto, 18) yelmo cerrado,
19) Escudo redondo, 20) escudo cometa.

### 3.5 Heráldica y estilo (20)
1) León, 2) lobo, 3) águila, 4) dragón, 5) torre,
6) espada, 7) corona, 8) sol, 9) luna, 10) árbol,
11) Rojo carmesí, 12) azul real, 13) verde bosque, 14) negro azabache, 15) blanco marfil,
16) Ribete dorado, 17) ribete plata,
18) Estandarte rasgado, 19) estandarte nuevo, 20) estandarte bordado.

---

## 4) Sistema de progresión
- **Nivel de personaje**: 1 a 200 (expandible).
- **Atributos**: Fuerza, Destreza, Vitalidad, Resistencia, Percepción, Voluntad.
- **Maestrías**:
  - Espada y escudo
  - Armas pesadas
  - Defensa táctica
  - Supervivencia
- **Talentos activos/pasivos** por ramas.
- **Poder de equipo**: rareza (Común, Raro, Épico, Legendario, Mítico).

---

## 5) Enemigos y rangos
Rangos de amenaza: **D < C < B < A < S < SS < SSS**.

- **D**: Lobos, bandidos, necrófagos menores.
- **C**: Ogros jóvenes, arqueros élite, arañas gigantes.
- **B**: Golems de fortaleza, nigromantes de campo.
- **A**: Quimeras, caballeros corrompidos.
- **S**: Dragones jóvenes y bestias ancestrales.
- **SS**: Dragones antiguos y jefes de reino.
- **SSS**: Entidades catastróficas mundiales por evento global.

---

## 6) Fortalezas y ciudades “infinitas”
Implementación recomendada:
- **Generación procedural por biomas** (semilla global + subsemillas regionales).
- **Streaming por chunks** (carga/descarga dinámica).
- **Plantillas de ciudades** + variaciones paramétricas (arquitectura, economía, cultura, clima).
- **Fortalezas escalables** con asedios dinámicos.

Tipos de comerciantes medievales:
- Herrero, armero, talabartero, alquimista, carpintero, mercader de telas,
- joyero, tabernero, curandero, escriba, establero, cartógrafo, cocinero,
- vendedor de reliquias, domador, mercader ambulante.

---

## 7) IA para NPCs (pueblerinos/comerciantes/soldados)
Arquitectura sugerida por capas:
1. **GOAP o Behavior Trees** para decisiones de alto nivel.
2. **Simulación social** (rutinas: dormir, trabajar, comerciar, patrullar).
3. **Memoria local** (recordar crimen, reputación del jugador, escasez).
4. **IA conversacional acotada** (diálogos contextuales, no modelo abierto total para evitar coste y abuso).
5. **IA táctica en combate** (formaciones, cobertura, retirada, flanqueo).

Reglas de realismo:
- NPCs tienen horarios.
- Comerciantes reaccionan a oferta/demanda regional.
- Soldados responden a alarmas y reputación del jugador.

---

## 8) Multijugador
- Modelo recomendado: **Servidor autoritativo** (anti-cheat y coherencia).
- Modos:
  - Cooperativo PvE (misiones y cacerías)
  - Eventos públicos de mundo
  - Asedios de fortalezas por clanes
- Escalado:
  - Shards por región geográfica
  - Instancias para mazmorras/eventos especiales
  - Sincronización de estado por interés (interest management)

---

## 9) Misiones
- **Principal**: historia de reinos y dragones.
- **Secundarias**: gremios, oficios, reputación local.
- **Dinámicas**: eventos de invasión, caravanas, asedios.
- **Procedurales**: contratos infinitos con dificultad escalada.

---

## 10) Stack técnico recomendado (realista para producción)
- **Motor**: Unreal Engine 5 (Nanite + Lumen para realismo alto).
- **Backend**: C++/Go/Rust para servicios de login, matchmaking, inventario y mundo.
- **Base de datos**: PostgreSQL + Redis.
- **Networking**: servidor dedicado + replicación optimizada.
- **IA**: Behavior Trees + EQS + servicios de inferencia para diálogo limitado.
- **Observabilidad**: OpenTelemetry + paneles de rendimiento.

---

## 11) Hoja de ruta por fases
### Fase 1 (MVP, 4-6 meses)
- Combate base espada/escudo.
- 1 ciudad grande + 2 fortalezas.
- 3 biomas.
- 30 tipos de monstruos.
- Multiplayer cooperativo básico.

### Fase 2 (Vertical slice online, 6-10 meses)
- Sistema de rangos completo D→SSS.
- 200+ misiones combinadas.
- Economía viva de comerciantes.
- IA social de NPCs.

### Fase 3 (Beta escalada)
- Mundo procedural expandido.
- Eventos globales y dragones SS/SSS.
- Clanes, asedios y contenido endgame.

---

## 12) Lo que faltaría definir (importante)
Para convertir esto en un proyecto construible faltan decisiones clave:
1. **Presupuesto y tamaño del equipo** (AA vs AAA).
2. **Plataformas objetivo** (PC, consolas).
3. **Estilo visual exacto** (fotorrealista oscuro, fantasía heroica, etc.).
4. **Modelo de negocio** (premium, suscripción, F2P con cosméticos).
5. **Reglas PvP** (si existe, dónde y cómo).
6. **Alcance del “infinito”** (qué parte será procedural y qué parte artesanal).
7. **Nivel de IA generativa online** (coste por jugador y límites de moderación).
8. **Idiomas y doblaje**.
9. **Objetivo de jugadores concurrentes** para dimensionar servidores.
10. **Política anti-cheat y seguridad**.

---

## 13) Propuesta inmediata de siguiente paso
Si quieres, el siguiente entregable puede ser:
- **Game Design Document v1.0 completo** (60-120 páginas), y/o
- **Documento técnico de arquitectura online** (servidores, bases de datos, colas, costes), y/o
- **Prototipo jugable de combate y personalización** en Unreal 5.
