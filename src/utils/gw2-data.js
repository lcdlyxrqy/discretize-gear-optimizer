/**
 * ------------------------------------------------------------------------
 * GW2 Data
 * ------------------------------------------------------------------------
 */
// TODO integrate gw2-ui data
// import { itemStats } from "gw2-ui-bulk";

export const Affix = {
  Berserker: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Assassin: {
    type: 'triple',
    bonuses: {
      major: ['Precision'],
      minor: ['Power', 'Ferocity'],
    },
  },
  Harrier: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Concentration', 'Healing Power'],
    },
  },
  Commander: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Toughness', 'Concentration'],
    },
  },
  Minstrel: {
    type: 'quadruple',
    bonuses: {
      major: ['Toughness', 'Healing Power'],
      minor: ['Vitality', 'Concentration'],
    },
  },
  Magi: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Vitality', 'Precision'],
    },
  },
  Marauder: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Vitality', 'Ferocity'],
    },
  },
  Cleric: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Power', 'Toughness'],
    },
  },
  Nomad: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Vitality', 'Healing Power'],
    },
  },
  Zealot: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Healing Power'],
    },
  },
  Viper: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Expertise'],
    },
  },
  Sinister: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Precision'],
    },
  },
  Grieving: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Seraph: {
    type: 'quadruple',
    bonuses: {
      major: ['Precision', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Marshal: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Healing Power'],
      minor: ['Precision', 'Condition Damage'],
    },
  },
  Giver: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Knight: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Precision'],
    },
  },
  Trailblazer: {
    type: 'quadruple',
    bonuses: {
      major: ['Toughness', 'Condition Damage'],
      minor: ['Vitality', 'Expertise'],
    },
  },
  Plaguedoctor: {
    type: 'quadruple',
    bonuses: {
      major: ['Vitality', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Carrion: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Vitality'],
    },
  },
  Rabid: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Precision'],
    },
  },
  Dire: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Vitality'],
    },
  },
  Vigilant: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Concentration', 'Expertise'],
    },
  },
  Valkyrie: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Vitality', 'Ferocity'],
    },
  },
  Cavalier: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Ferocity'],
    },
  },
  Celestial: {
    type: 'celestial',
    bonuses: {
      major: ['Power', 'Precision', 'Toughness', 'Vitality'],
      minor: ['Ferocity', 'Condition Damage', 'Expertise', 'Concentration', 'Healing Power'],
    },
  },
  Diviner: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Concentration'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Soldier: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Toughness', 'Vitality'],
    },
  },
  Sentinel: {
    type: 'triple',
    bonuses: {
      major: ['Vitality'],
      minor: ['Power', 'Toughness'],
    },
  },
  Wanderer: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Vitality'],
      minor: ['Toughness', 'Concentration'],
    },
  },
  Apothecary: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Condition Damage', 'Toughness'],
    },
  },
  Shaman: {
    type: 'triple',
    bonuses: {
      major: ['Vitality'],
      minor: ['Condition Damage', 'Healing Power'],
    },
  },
  Crusader: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Ferocity', 'Healing Power'],
    },
  },
  Rampager: {
    type: 'triple',
    bonuses: {
      major: ['Precision'],
      minor: ['Condition Damage', 'Power'],
    },
  },
  Settler: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Condition Damage', 'Healing Power'],
    },
  },
  Bringer: {
    type: 'triple',
    bonuses: {
      major: ['Expertise'],
      minor: ['Precision', 'Vitality'],
    },
  },
};

export const Item = {
  HELM: {
    triple: {
      major: 63,
      minor: 45,
    },
    quadruple: {
      major: 54,
      minor: 30,
    },
    celestial: {
      major: 30,
      minor: 30,
    },
  },
  SHOULDERS: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      major: 22,
      minor: 22,
    },
  },
  CHEST: {
    triple: {
      major: 141,
      minor: 101,
    },
    quadruple: {
      major: 121,
      minor: 67,
    },
    celestial: {
      major: 67,
      minor: 67,
    },
  },
  GLOVES: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      major: 22,
      minor: 22,
    },
  },
  LEGGINGS: {
    triple: {
      major: 94,
      minor: 67,
    },
    quadruple: {
      major: 81,
      minor: 44,
    },
    celestial: {
      major: 44,
      minor: 44,
    },
  },
  BOOTS: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      major: 22,
      minor: 22,
    },
  },
  AMULET: {
    triple: {
      major: 157,
      minor: 108,
    },
    quadruple: {
      major: 133,
      minor: 71,
    },
    celestial: {
      major: 72,
      minor: 72,
    },
  },
  RING: {
    triple: {
      major: 126,
      minor: 85,
    },
    quadruple: {
      major: 106,
      minor: 56,
    },
    celestial: {
      major: 57,
      minor: 57,
    },
  },
  ACCESSORY: {
    triple: {
      major: 110,
      minor: 74,
    },
    quadruple: {
      major: 92,
      minor: 49,
    },
    celestial: {
      major: 50,
      minor: 50,
    },
  },
  BACK_ITEM: {
    triple: {
      major: 63,
      minor: 40,
    },
    quadruple: {
      major: 52,
      minor: 27,
    },
    celestial: {
      major: 28,
      minor: 28,
    },
  },
  ONEHANDED_WEAPON: {
    triple: {
      major: 125,
      minor: 90,
    },
    quadruple: {
      major: 108,
      minor: 59,
    },
    celestial: {
      major: 59,
      minor: 59,
    },
  },
  TWOHANDED_WEAPON: {
    triple: {
      major: 251,
      minor: 179,
    },
    quadruple: {
      major: 215,
      minor: 118,
    },
    celestial: {
      major: 118,
      minor: 118,
    },
  },
};

export const Slots = {
  'Dual wield': [
    {
      name: 'Helm',
      short: 'Helm',
      item: Item.HELM,
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      item: Item.SHOULDERS,
    },
    {
      name: 'Coat',
      short: 'Coat',
      item: Item.CHEST,
    },
    {
      name: 'Gloves',
      short: 'Glov',
      item: Item.GLOVES,
    },
    {
      name: 'Leggings',
      short: 'Legs',
      item: Item.LEGGINGS,
    },
    {
      name: 'Boots',
      short: 'Boot',
      item: Item.BOOTS,
    },
    {
      name: 'Amulet',
      short: 'Amul',
      item: Item.AMULET,
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      item: Item.RING,
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      item: Item.RING,
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      item: Item.ACCESSORY,
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      item: Item.ACCESSORY,
    },
    {
      name: 'Back Item',
      short: 'Back',
      item: Item.BACK_ITEM,
    },
    {
      name: 'Mainhand',
      short: 'Wep1',
      item: Item.ONEHANDED_WEAPON,
    },
    {
      name: 'Offhand',
      short: 'Wep2',
      item: Item.ONEHANDED_WEAPON,
    },
  ],
  'Two-handed': [
    {
      name: 'Helm',
      short: 'Helm',
      item: Item.HELM,
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      item: Item.SHOULDERS,
    },
    {
      name: 'Coat',
      short: 'Coat',
      item: Item.CHEST,
    },
    {
      name: 'Gloves',
      short: 'Glov',
      item: Item.GLOVES,
    },
    {
      name: 'Leggings',
      short: 'Legs',
      item: Item.LEGGINGS,
    },
    {
      name: 'Boots',
      short: 'Boot',
      item: Item.BOOTS,
    },
    {
      name: 'Amulet',
      short: 'Amul',
      item: Item.AMULET,
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      item: Item.RING,
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      item: Item.RING,
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      item: Item.ACCESSORY,
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      item: Item.ACCESSORY,
    },
    {
      name: 'Back Item',
      short: 'Back',
      item: Item.BACK_ITEM,
    },
    {
      name: 'Weapon',
      short: 'Weap',
      item: Item.TWOHANDED_WEAPON,
    },
  ],
};

// used for forcing slots to a certain affix
export const ForcedSlots = [
  'helm', // 0
  'shld', // 1
  'coat', // 2
  'glov', // 3
  'legs', // 4
  'boot', // 5
  'amul', // 6
  'rng1', // 7
  'rng2', // 8
  'acc1', // 9
  'acc2', // 10
  'back', // 11
  'wep1', // 12
  'wep2', // 13
];

export const omnipotionModifiers = {
  // Condi dmg from omnipot has been removed
  'damage': {
    'Strike Damage': ['15%', 'mult'],
    'Condition Damage': ['15%', 'add'],
    'Damage Reduction': ['25%', 'add'],
  },
  'conversion': {
    'Precision': { 'Agony Resistance': '150%' },
    'Toughness': { 'Agony Resistance': '150%' },
    'Concentration': { 'Agony Resistance': '150%' },
  },
};

export const Health = {
  LOW: 1645,
  MEDIUM: 5922,
  HIGH: 9212,
};

export const Defense = {
  LIGHT: 967,
  MEDIUM: 1118,
  HEAVY: 1271,
};

export const WEAPONS = {
  GREATSWORD: { name: 'Greatsword', type: 'two-handed', gw2id: 30689 },
  HAMMER: { name: 'Hammer', type: 'two-handed', gw2id: 30690 },
  STAFF: { name: 'Staff', type: 'two-handed', gw2id: 30698 },
  RIFLE: { name: 'Rifle', type: 'two-handed', gw2id: 30694 },
  LONGBOW: { name: 'Longbow', type: 'two-handed', gw2id: 30685 },
  SHORTBOW: { name: 'Short Bow', type: 'two-handed', gw2id: 30686 },

  SCEPTER: { name: 'Scepter', type: 'mainHand', gw2id: 30695 },

  AXE: { name: 'Axe', type: 'one-handed', gw2id: 76158 },
  DAGGER: { name: 'Dagger', type: 'one-handed', gw2id: 30687 },
  PISTOL: { name: 'Pistol', type: 'one-handed', gw2id: 30693 },
  MACE: { name: 'Mace', type: 'one-handed', gw2id: 30692 },
  SWORD: { name: 'Sword', type: 'one-handed', gw2id: 30699 },

  FOCUS: { name: 'Focus', type: 'offHand', gw2id: 86098 },
  SHIELD: { name: 'Shield', type: 'offHand', gw2id: 30696 },
  TORCH: { name: 'Torch', type: 'offHand', gw2id: 30700 },
  WARHORN: { name: 'Warhorn', type: 'offHand', gw2id: 30702 },
};

export const Classes = {
  warrior: {
    health: Health.HIGH,
    defense: Defense.HEAVY,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.GREATSWORD,
        WEAPONS.HAMMER,
        WEAPONS.LONGBOW,
        WEAPONS.RIFLE,
      ],
      offHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.SHIELD,
        WEAPONS.TORCH,
        WEAPONS.WARHORN,
      ],
    },
  },
  necromancer: {
    health: Health.HIGH,
    defense: Defense.LIGHT,
    weapons: {
      mainHand: [WEAPONS.AXE, WEAPONS.DAGGER, WEAPONS.SCEPTER, WEAPONS.GREATSWORD, WEAPONS.STAFF],
      offHand: [WEAPONS.FOCUS, WEAPONS.WARHORN, WEAPONS.TORCH, WEAPONS.DAGGER],
    },
  },
  revenant: {
    health: Health.MEDIUM,
    defense: Defense.HEAVY,
    weapons: {
      mainHand: [WEAPONS.MACE, WEAPONS.SWORD, WEAPONS.HAMMER, WEAPONS.SHORTBOW, WEAPONS.STAFF],
      offHand: [WEAPONS.AXE, WEAPONS.SWORD, WEAPONS.SHIELD],
    },
  },
  engineer: {
    health: Health.MEDIUM,
    defense: Defense.MEDIUM,
    weapons: {
      mainHand: [WEAPONS.PISTOL, WEAPONS.SWORD, WEAPONS.RIFLE, WEAPONS.HAMMER],
      offHand: [WEAPONS.PISTOL, WEAPONS.SHIELD],
    },
  },
  ranger: {
    health: Health.MEDIUM,
    defense: Defense.MEDIUM,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.SWORD,
        WEAPONS.GREATSWORD,
        WEAPONS.LONGBOW,
        WEAPONS.SHORTBOW,
        WEAPONS.STAFF,
      ],
      offHand: [WEAPONS.AXE, WEAPONS.DAGGER, WEAPONS.TORCH, WEAPONS.WARHORN],
    },
  },
  mesmer: {
    health: Health.MEDIUM,
    defense: Defense.LIGHT,
    weapons: {
      mainHand: [WEAPONS.AXE, WEAPONS.SWORD, WEAPONS.SCEPTER, WEAPONS.GREATSWORD, WEAPONS.STAFF],
      offHand: [WEAPONS.PISTOL, WEAPONS.SWORD, WEAPONS.FOCUS, WEAPONS.SHIELD, WEAPONS.TORCH],
    },
  },
  guardian: {
    health: Health.LOW,
    defense: Defense.HEAVY,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.SCEPTER,
        WEAPONS.GREATSWORD,
        WEAPONS.HAMMER,
        WEAPONS.LONGBOW,
        WEAPONS.STAFF,
      ],
      offHand: [WEAPONS.FOCUS, WEAPONS.SHIELD, WEAPONS.TORCH],
    },
  },
  thief: {
    health: Health.LOW,
    defense: Defense.MEDIUM,
    weapons: {
      mainHand: [
        WEAPONS.DAGGER,
        WEAPONS.PISTOL,
        WEAPONS.SWORD,
        WEAPONS.RIFLE,
        WEAPONS.SHORTBOW,
        WEAPONS.STAFF,
      ],
      offHand: [WEAPONS.DAGGER, WEAPONS.PISTOL],
    },
  },
  elementalist: {
    health: Health.LOW,
    defense: Defense.LIGHT,
    weapons: {
      mainHand: [WEAPONS.DAGGER, WEAPONS.SWORD, WEAPONS.SCEPTER, WEAPONS.STAFF],
      offHand: [WEAPONS.FOCUS, WEAPONS.DAGGER, WEAPONS.WARHORN],
    },
  },
};

export const Condition = {
  Burning: {
    baseDamage: 131,
    factor: 0.155,
  },
  Bleeding: {
    baseDamage: 22,
    factor: 0.06,
  },
  Poison: {
    baseDamage: 33.5,
    factor: 0.06,
  },
  Torment: {
    baseDamage: 31.8,
    factor: 0.09,
  },
  Confusion: {
    baseDamage: 22,
    factor: 0.06,
  },
};

export const Attributes = {
  PRIMARY: ['Power', 'Precision', 'Toughness', 'Vitality'],

  SECONDARY: [
    'Ferocity',
    'Condition Damage',
    'Expertise',
    'Concentration',
    'Healing Power',
    'Agony Resistance',
  ],

  DERIVED: [
    'Critical Chance',
    'Critical Damage',
    'Condition Duration',
    'Boon Duration',
    'Health',
    'Armor',
  ],

  BOON_DURATION: [
    'Aegis Duration',
    'Fury Duration',
    'Might Duration',
    'Protection Duration',
    'Quickness Duration',
    'Regeneration Duration',
    'Resistance Duration',
    'Resolution Duration',
    'Stability Duration',
    'Swiftness Duration',
    'Vigor Duration',
  ],

  CONDITION_DURATION: [
    'Bleeding Duration',
    'Blind Duration',
    'Burning Duration',
    'Chilled Duration',
    'Confusion Duration',
    'Crippled Duration',
    'Fear Duration',
    'Immobile Duration',
    'Poison Duration',
    'Slow Duration',
    'Taunt Duration',
    'Torment Duration',
    'Vulnerability Duration',
    'Weakness Duration',
  ],

  CONDITION: Object.keys(Condition),

  CONDITION_DAMAGE: Object.keys(Condition).map((condition) => `${condition} Damage`),

  EFFECTIVE: ['Effective Power', 'Effective Health', 'Effective Healing'],

  INDICATORS: ['Damage', 'Survivability', 'Healing'],
};

export const MAX_INFUSIONS = 18;
export const INFUSION_BONUS = 5;

export const PROFESSIONS = [
  { profession: 'WARRIOR', eliteSpecializations: ['SPELLBREAKER', 'BERSERKER', 'BLADESWORN'] },
  { profession: 'REVENANT', eliteSpecializations: ['HERALD', 'RENEGADE', 'VINDICATOR'] },
  { profession: 'GUARDIAN', eliteSpecializations: ['DRAGONHUNTER', 'FIREBRAND', 'WILLBENDER'] },
  { profession: 'RANGER', eliteSpecializations: ['DRUID', 'SOULBEAST', 'UNTAMED'] },
  { profession: 'ENGINEER', eliteSpecializations: ['SCRAPPER', 'HOLOSMITH', 'MECHANIST'] },
  { profession: 'ELEMENTALIST', eliteSpecializations: ['TEMPEST', 'WEAVER', 'CATALYST'] },
  { profession: 'MESMER', eliteSpecializations: ['CHRONOMANCER', 'MIRAGE', 'VIRTUOSO'] },
  { profession: 'NECROMANCER', eliteSpecializations: ['SCOURGE', 'REAPER', 'HARBINGER'] },
  { profession: 'THIEF', eliteSpecializations: ['DAREDEVIL', 'DEADEYE', 'SPECTER'] },
];

export const GEAR_SLOTS = [
  {
    name: 'Helm',
    short: 'Helm',
  },
  {
    name: 'Shoulders',
    short: 'Shld',
  },
  {
    name: 'Coat',
    short: 'Coat',
  },
  {
    name: 'Gloves',
    short: 'Glov',
  },
  {
    name: 'Leggings',
    short: 'Legs',
  },
  {
    name: 'Boots',
    short: 'Boot',
  },
  {
    name: 'Amulet',
    short: 'Amul',
  },
  {
    name: 'Ring 1',
    short: 'Rng1',
  },
  {
    name: 'Ring 2',
    short: 'Rng2',
  },
  {
    name: 'Accessory 1',
    short: 'Acc1',
  },
  {
    name: 'Accessory 2',
    short: 'Acc2',
  },
  {
    name: 'Back Item',
    short: 'Back',
  },
  {
    name: 'Weapon 1',
    short: 'Wep1',
  },
  {
    name: 'Weapon 2',
    short: 'Wep2',
  },
];

export const INFUSIONS = [
  { id: 37131, attribute: 'Power' }, // power
  { id: 37132, attribute: 'Precision' }, // precision
  { id: 37130, attribute: 'Condition Damage' }, // condi
  { id: 86113, attribute: 'Expertise' }, // expertise
  { id: 86180, attribute: 'Concentration' }, // concentration
  { id: 37125, attribute: 'Healing Power' }, // healing power
  { id: 37135, attribute: 'Toughness' }, // toughness
  { id: 37136, attribute: 'Vitality' }, // vitality
];

export const ARMOR_IDS = {
  // Helm, Shoulders, Chest, Hands, Leggings, Feet
  HEAVY: [86198, 85829, 85814, 85949, 86079, 86237],
  MEDIUM: [48087, 48089, 48085, 48086, 48088, 48084],
  LIGHT: [],
};
