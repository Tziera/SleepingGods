// ═══════════════════════════════════
// STATIC DATA
// ═══════════════════════════════════
const QUEST_KEYWORDS_DEFAULT = {
  1: "RAID",
  2: "COTTAGE",
  3: "SUPPLIES",
  4: "ABYSMAL",
  5: "FREIGHTER",
  6: "FALCON",
  7: "UNLEASH",
  8: "EXPECTED",
  9: "COOK",
  10: "PICTURE",
  11: "HUNTED",
  12: "HEIST",
  13: "ABANDON",
  14: "FOAM",
  15: "CHAINS",
  16: "SHRINE",
  17: "EARTHQUAKE",
  18: "PASSWORD",
  19: "AUCTION",
  20: "THUNDER",
  21: "MINE",
  22: "SHELL",
  23: "CLEAN",
  24: "SAPPHIRE",
  25: "LUXURY",
  26: "SLEEP",
  27: "GUSTO",
  28: "DAGGER",
  29: "SPLINTER",
  30: "SIRENS",
  31: "UNDERWORLD",
  32: "GRANDCHILDREN",
  33: "SWIM",
  34: "GUIDE",
  35: "ZOO",
  36: "MAIL",
  37: "BARNACLE",
  38: "SQUARE",
  39: "TABLET",
  40: "GRANDFATHER",
  41: "GRANDMOTHER",
  42: "MINOTAUR",
  43: "EGGSHELL",
  44: "FOOTPRINT",
  45: "MOIRA",
  46: "MESOZOIC",
  47: "MILK",
  48: "DUNES",
  49: "DECK",
  50: "ICE",
  51: "REMINISCE",
  52: "HERETIC",
  53: "GOMKA",
  54: "CHOIR",
  55: "TRICKY",
  56: "PINES",
  57: "ARCTIC",
  58: "WANDERED",
  59: "STONE",
  60: "PILLARS",
  61: "ULO",
  62: "GROWTH",
  63: "RUSH",
  64: "SAPLING",
  65: "TRUNK",
  66: "EXPLOSIVE",
  67: "PROSPECTOR",
  68: "MEDICINE",
  69: "FOUGHT",
  70: "HEALER",
  71: "HUBRIS",
  72: "HARPOON",
  73: "FAMINE",
  74: "ROBOT",
  75: "MIRRORS",
  76: "SOLVED",
  77: "ENEMY",
  78: "RICH",
  79: "TOWER",
  80: "SHIFT",
  81: "RUINED",
  82: "EXTINGUISHED",
  83: "IMMORTAL",
  84: "HONOR",
  85: "CRYSTAL",
  86: "FEAST",
  87: "HERRING",
  88: "GHOST",
  89: "BLOOD",
  90: "SAGE",
  91: "MATERIALS",
  92: "OWL",
  93: "CLOCK",
  94: "HAGGLE",
  95: "TRIVIAL",
  96: "LAUNCH",
  97: "LANDING",
  98: "LIFT",
  99: "PATH",
  100: "SILENCE",
  101: "KEMTER",
  102: "ELEPHANT",
  103: "MANEUVER",
  104: "MONSTER",
  105: "CAP",
  106: "PINSTRIPE",
  107: "AMBROSIA",
  108: "SHEPHERD",
  109: "JOURNAL",
  110: "SANDSTONE",
  111: "SNAKE",
  112: "COBRA",
  113: "ROTTEN",
  114: "JACKAL",
  115: "WELL",
  116: "IMP",
  117: "BICYCLE",
  118: "ORE",
  119: "CINDER",
  120: "NUGGET",
  121: "MUSHROOM",
  122: "PRINCE",
  123: "PYRAMID",
  124: "BANISHED",
  125: "AIRSHIP",
  126: "GOAT",
  127: "TOMB",
  128: "LABYRINTH",
  129: "IRON",
  130: "LETTER",
  131: "DREAM",
  132: "POISON",
  133: "SHIELD",
  134: "SCIENCE",
  135: "HIVE",
  136: "SONG",
  137: "HUM",
  138: "DEAD",
  139: "RED",
  140: "SERPENT",
  141: "POLLEN",
  142: "TOAD",
  143: "CAMP",
  144: "ANIMALS",
  145: "EGG",
  146: "ARTIFACT",
  147: "PUZZLE",
  148: "FLOWER",
  149: "ROAM",
  150: "MIGHT",
  151: "CLAW",
  152: "SUBMARINE",
  153: "SPARRING",
  154: "COLLAPSE",
  155: "PINK",
  156: "THUG",
  157: "GLIGLION",
  158: "BASEMENT",
  159: "FATHER",
  160: "BURN",
  161: "FROG",
  162: "LIBRARY",
  163: "CAT",
  164: "JUNK",
  165: "RUST",
  166: "AXE",
  167: "GOGGLES",
  168: "OPTIONAL RULE - DEADLY COMBAT",
  169: "OPTIONAL RULE - EXPERT PORT",
  170: "OPTIONAL RULE - EXPERT PORT CARD",
  171: "OPTIONAL RULE - CARGO BAY",
  172: "OPTIONAL RULE - CARGO BAY CARD",
  173: "OPTIONAL RULE - ADVANCED ABILITY CARDS",
  174: "OPTIONAL ITEM - DYNAMITE",
  175: "OPTIONAL RULE - ADVANCED MARKET",
  176: "OPTIONAL RULE - HEROICS TRACK CARD",
  177: "OPTIONAL RULE - HEROICS CARD",
  178: "OPTIONAL RULE - ADVANCED SEARCH",
  179: "OPTIONAL RULE - ADVANCED SEARCH CARD CAUTIOUSLY",
  180: "OPTIONAL RULE - ADVANCED SEARCH CARD AGGRESSIVELY",
  181: "INSECT",
  182: "MANSION",
  183: "UNPAID",
  184: "EMPTY",
  185: "GENEROUS",
  186: "IDOL",
  187: "EMBERSTONE",
  188: "THIRD",
  189: "UNMADE",
  190: "VIOLET",
  191: "HISTORY",
  192: "WITNESS",
  193: "BOTTLE",
  194: "EPIC",
  195: "POEM",
  196: "BEHEMOTH",
  197: "SCHISM",
  198: "CRYING",
  199: "ARCHEOLOGIST",
  200: "LAUGHING",
  201: "EMBERSTONE",
  202: "EGRESS",
  203: "INHERITANCE",
  204: "SPOUT",
  205: "OFFSPRING",
  206: "SECLUDED",
  207: "VAPOR",
  208: "BLAZE",
  209: "MURK",
  210: "FRAZZLED",
  211: "PALMING",
  212: "PACHYDERM",
  213: "DISENTANGLE",
  214: "LOGBOOKS",
  215: "CACKLES",
  216: "CHARMING",
  217: "HOLLER",
  218: "BOOKSHOP"
};
const LOCATIONS_DEF = [
  {id:"2",x:43.11,y:55.11},
  {id:"3",x:63.11,y:47.17},
  {id:"4",x:46.52,y:63.33},
  {id:"5",x:22.64,y:68.54},
  {id:"6",x:22.71,y:48.27},
  {id:"7",x:34.14,y:44.89},
  {id:"8",x:14.87,y:64.84},
  {id:"9",x:19.23,y:73.91},
  {id:"10",x:29.01,y:77.13},
  {id:"11",x:68.86,y:64.75},
  {id:"12",x:14.47,y:53.85},
  {id:"13",x:20.4,y:36.96},
  {id:"14",x:28.06,y:39.6},
  {id:"15",x:43.48,y:68.21},
  {id:"16",x:68.75,y:58.93},
  {id:"17",x:63.59,y:74.44},
  {id:"18",x:47.84,y:44.2},
  {id:"19",x:44.25,y:74.32},
  {id:"20",x:59.93,y:53.07},
  {id:"21",x:57.55,y:73.79},
  {id:"22",x:28.75,y:59.14},
  {id:"23",x:29.01,y:32.48},
  {id:"24",x:45.09,y:32.6},
  {id:"25",x:71.06,y:56},
  {id:"26",x:73.66,y:65.45},
  {id:"28",x:23.26,y:72.36},
  {id:"29",x:17.62,y:59.3},
  {id:"30",x:36.78,y:44.73},
  {id:"31",x:26.01,y:67.97},
  {id:"32",x:38.06,y:68.25},
  {id:"34",x:43.44,y:49.41},
  {id:"35",x:53.63,y:69.92},
  {id:"36",x:68.68,y:49.41},
  {id:"37",x:53.85,y:54.29},
  {id:"39",x:9.6,y:66.1},
  {id:"40",x:26.96,y:54.58},
  {id:"41",x:8.24,y:47.66},
  {id:"42",x:14.73,y:35.9},
  {id:"43",x:55.53,y:54.42},
  {id:"44",x:50.26,y:65.24},
  {id:"45",x:59.6,y:76.27},
  {id:"46",x:80.07,y:52.79},
  {id:"47",x:60.7,y:49.33},
  {id:"48",x:63.11,y:64.39},
  {id:"49",x:84.58,y:68.91},
  {id:"50",x:89.82,y:46.48},
  {id:"51",x:37.69,y:64.35},
  {id:"52",x:11.72,y:70.82},
  {id:"54",x:59.85,y:58.73},
  {id:"55",x:56.7,y:76.84},
  {id:"57",x:84.25,y:48.23},
  {id:"58",x:12.97,y:38.83},
  {id:"59",x:29.71,y:51.85},
  {id:"60",x:10.66,y:39.15},
  {id:"62",x:71.03,y:71.55},
  {id:"63",x:55.09,y:44.28},
  {id:"64",x:60.15,y:38.3},
  {id:"65",x:18.02,y:44.4},
  {id:"66",x:21.61,y:77.94},
  {id:"68",x:2.27,y:56.49},
  {id:"69",x:13.96,y:32.76},
  {id:"70",x:4.14,y:48.43},
  {id:"72",x:76.85,y:56.57},
  {id:"73",x:78.57,y:74.44},
  {id:"76",x:10.26,y:53.72},
  {id:"77",x:8.06,y:32.97},
  {id:"78",x:4.47,y:36.55},
  {id:"79",x:69.56,y:78.31},
  {id:"82",x:89.41,y:56.65},
  {id:"84",x:54.8,y:39.89},
  {id:"85",x:37.44,y:36.1},
  {id:"86",x:23.33,y:27.07},
  {id:"87",x:0.66,y:52.38},
  {id:"88",x:3.63,y:68.58},
  {id:"90",x:85.13,y:54.99},
  {id:"91",x:29.78,y:65.69},
  {id:"92",x:2.6,y:60.28},
  {id:"96",x:81.87,y:79.69},
  {id:"97",x:85.35,y:66.63},
  {id:"98",x:74.32,y:50.51},
  {id:"101",x:13.99,y:74.77},
  {id:"102",x:19.19,y:54.13},
  {id:"103",x:14.62,y:47.33},
  {id:"104",x:89.85,y:49.12},
  {id:"106",x:37.55,y:31.3},
  {id:"107",x:3.96,y:31.54},
  {id:"108",x:3.04,y:64.84},
  {id:"110",x:4.07,y:73.79},
  {id:"111",x:38.9,y:76.07},
  {id:"113",x:40.51,y:33.86},
  {id:"114",x:13.66,y:23.97},
  {id:"115",x:15.16,y:51},
  {id:"116",x:1.39,y:70.74},
  {id:"120",x:54.84,y:33.13},
  {id:"121",x:28.5,y:46.48},
  {id:"122",x:28.97,y:24.38},
  {id:"123",x:6.26,y:78.47},
  {id:"126",x:79.01,y:43.55},
  {id:"127",x:63.92,y:29.75},
  {id:"128",x:39.56,y:26.98},
  {id:"129",x:18.39,y:32.6},
  {id:"130",x:38.21,y:54.95},
  {id:"132",x:1.65,y:27.88},
  {id:"137",x:46.89,y:24.91},
  {id:"141",x:35.93,y:72.04},
  {id:"144",x:84.98,y:77.61},
  {id:"146",x:48.94,y:38.14},
  {id:"149",x:55.46,y:28.98},
  {id:"150",x:52.64,y:74.44},
  {id:"151",x:45.46,y:14.53},
  {id:"155",x:55.2,y:26.78},
  {id:"156",x:43.63,y:8.38},
  {id:"157",x:51.17,y:16.61},
  {id:"158",x:43.3,y:40.98},
  {id:"160",x:53.11,y:14.49},
  {id:"165",x:52.97,y:31.26},
  {id:"166",x:39.38,y:11.03},
  {id:"171",x:46.96,y:78.63},
  {id:"172",x:45.75,y:12.58},
  {id:"174",x:47.44,y:59.67},
  {id:"176",x:97.14,y:52.06},
  {id:"177",x:94.98,y:75.13},
  {id:"180",x:4.07,y:24.09},
  {id:"181",x:45.49,y:20.72},
  {id:"183",x:97.91,y:56.04},
  {id:"186",x:44.07,y:43.22},
  {id:"188",x:95.82,y:72.89},
  {id:"189",x:96.7,y:44.81},
  {id:"190",x:93.37,y:70.61},
  {id:"192",x:36.67,y:5.98},
  {id:"195",x:93.52,y:58},
  {id:"196",x:98.35,y:77},
  {id:"199",x:58.24,y:17.91},
  {id:"201",x:54.73,y:35.16},
  {id:"204",x:96.48,y:65.93},
  {id:"206",x:57.84,y:11.68},
  {id:"207",x:30.59,y:72.32},
  {id:"209",x:78.1,y:67.72},
  {id:"213",x:59.23,y:5.49},
  {id:"215",x:96.81,y:75.7},
  {id:"216",x:38.35,y:50.06},
  {id:"217",x:41.61,y:71.88},
  {id:"218",x:64.84,y:52.67},
  {id:"R11",x:68.35,y:31.3},
  {id:"R20",x:76.37,y:28.65},
  {id:"R99",x:70.62,y:18.07},
  {id:"R2",x:19.96,y:92.35},
  {id:"R15",x:1.94,y:84.21},
  {id:"R17",x:37.88,y:84.49},
  {id:"R1",x:6.96,y:99.31},
  {id:"R19",x:13.41,y:97.64},
  {id:"R21",x:13.26,y:89.46},
  {id:"R24",x:47,y:87.63},
  {id:"R25",x:28.75,y:85.84},
  {id:"R26",x:6.45,y:87.87},
  {id:"R28",x:45.49,y:83.15},
  {id:"R29",x:36.08,y:90.23},
  {id:"R30",x:3.04,y:95.97},
  {id:"R32",x:37.36,y:94.91},
  {id:"R34",x:3.15,y:91.01},
  {id:"R36",x:7.91,y:94.63},
  {id:"R37",x:44.25,y:92.55},
  {id:"R39",x:41.03,y:98.33},
  {id:"R40",x:24.43,y:95.08},
  {id:"R66",x:21.72,y:85.47},
  {id:"R87",x:27.4,y:98.21},
  {id:"R3",x:95.02,y:99.19},
  {id:"R4",x:57.33,y:88.44},
  {id:"R6",x:76.89,y:89.91},
  {id:"R8",x:69.78,y:93.12},
  {id:"R9",x:70.77,y:98.49},
  {id:"R10",x:90,y:89.05},
  {id:"R13",x:85.93,y:92.88},
  {id:"R18",x:97.33,y:85.35},
  {id:"R22",x:52.6,y:93.98},
  {id:"R23",x:72.45,y:89.62},
  {id:"R27",x:55.35,y:85.06},
  {id:"R31",x:85.38,y:88.85},
  {id:"R33",x:63.26,y:85.88},
  {id:"R35",x:85.75,y:96.74},
  {id:"R38",x:79.89,y:92.02},
  {id:"R50",x:72.64,y:81.6},
  {id:"R60",x:56.34,y:92.96},
  {id:"R98",x:79.08,y:99.47},
  {id:"R5",x:78.64,y:33.25},
  {id:"R7",x:96.3,y:25.6},
  {id:"R12",x:95.38,y:39.03},
  {id:"R14",x:84.32,y:26.86},
  {id:"R16",x:88.1,y:25.48},
  {id:"R42",x:93.3,y:9.61},
  {id:"R54",x:89.12,y:33.29},
  {id:"R59",x:71.36,y:9.4},
  {id:"R61",x:81.17,y:2.65},
  {id:"R64",x:95.6,y:34.8},
  {id:"R67",x:86.48,y:7.24},
  {id:"R72",x:81.36,y:15.63},
  {id:"R77",x:96.56,y:8.47},
  {id:"R83",x:80.62,y:40.29},
  {id:"R93",x:70.48,y:40.01},
  {id:"R94",x:95.24,y:30.57},
  {id:"R46",x:74.91,y:16.28},
  {id:"R51",x:69.3,y:1.38},
  {id:"R96",x:89.27,y:11.11},
  {id:"R81",x:98.9,y:6.59}
];
const CREW_MEMBERS = ["'Mac' Mara Johnson", "Rafael Vieira", "Marco Reyes", "Kannan Sharma", "Audrie Williams", "Laurent Lapointe", "Kasumi Aoshima", "Gregory Little", "Capt. Sofi Odessa"];
const ROOM_DEFS = [
  {id:'hull',name:'Hull',max:1},
  {id:'deck',name:'Deck',max:2},
  {id:'infirm',name:'Infirmary',max:2},
  {id:'galley',name:'Galley',max:2},
  {id:'quar',name:'Quarters',max:2},
  {id:'bridge',name:'Bridge',max:2},
];
const OPTIONAL_QUEST_NUMS = new Set([168,169,170,171,172,173,174,175,176,177,178,179,180]);
const TOTAL_ADV_CARDS = 147;

const ADV_CARD_DATA = [
  null, // 0, unused (1-indexed)
  {name:'Spicy Gumbo',type:['Recipe']},                   // 1
  {name:'Grule the Imp',type:['Passenger']},               // 2
  {name:"Meecra's Salt",type:['Totem']},                   // 3
  {name:'Moira Flinn',type:['Passenger']},                 // 4
  {name:'Zvarm',type:['Passenger']},                       // 5
  {name:'Jin Hua',type:['Passenger']},                     // 6
  {name:'Alexei Bespalov',type:['Passenger']},             // 7
  {name:'Freddy the Mule',type:['Animal']},                // 8
  {name:'Bigfoot the Dog',type:['Animal']},                // 9
  {name:'Obsidian Heart',type:['Totem']},                  // 10
  {name:'Stone of Bargaining',type:['Totem']},             // 11
  {name:'Ubzon',type:['Passenger']},                       // 12
  {name:'Thoazak',type:['Passenger']},                     // 13
  {name:'Venme',type:['Passenger']},                       // 14
  {name:'Wayfinder the Mythan',type:['Passenger']},        // 15
  {name:'Stone of Freezing',type:['Totem']},               // 16
  {name:'Cloak of Ulo',type:['Equipment']},                // 17
  {name:"Zacra's Mask",type:['Totem']},                    // 18
  {name:'Nightmare Gloves',type:['Equipment']},            // 19
  {name:'Screaming Robot',type:['Passenger']},             // 20
  {name:'Net Gun',type:['Equipment']},                     // 21
  {name:"Raltolde's Shield",type:['Totem']},               // 22
  {name:"Thrack's Charm",type:['Totem']},                  // 23
  {name:'Scorpion Amulet',type:['Equipment']},             // 24
  {name:'Eclipse Crystal Pendant',type:['Equipment']},     // 25
  {name:'Titan Hammer',type:['Weapon']},                   // 26
  {name:"Shorme's Hammer",type:['Totem','Weapon']},        // 27
  {name:'Axe of the Cinderlands',type:['Totem','Weapon']}, // 28
  {name:'Blade of Thrack',type:['Totem','Weapon']},        // 29
  {name:"Raltolde's Spear",type:['Totem']},                // 30
  {name:'Snake Bangle',type:['Totem']},                    // 31
  {name:'Life Seed',type:['Totem']},                       // 32
  {name:'Lukran Mechanical Arm',type:['Weapon']},          // 33
  {name:"Meecra's Harp",type:['Equipment']},               // 34
  {name:"Meecra's Incense",type:['Equipment']},            // 35
  {name:'Ship Clinger',type:['Animal']},                   // 36
  {name:'Stone of Shanties',type:['Totem']},               // 37
  {name:'Gate Stone',type:['Totem']},                      // 38
  {name:'Vyme the Pann Ghost',type:['Passenger']},         // 39
  {name:'Stone of Riddles',type:['Totem']},                // 40
  {name:'Stone of Music',type:['Totem']},                  // 41
  {name:'Stone of Weakness',type:['Totem']},               // 42
  {name:'Stone of Deceit',type:['Totem']},                 // 43
  {name:'Rapier',type:['Weapon']},                         // 44
  {name:'Stone of Blood',type:['Totem']},                  // 45
  {name:'Glacia',type:['Passenger']},                      // 46
  {name:'Stone of Mind',type:['Totem']},                   // 47
  {name:'Stone of Fitness',type:['Totem']},                // 48
  {name:'Mei',type:['Passenger']},                         // 49
  {name:'The Perpetual Flame',type:['Totem']},             // 50
  {name:'Gemstone Goggles',type:['Equipment']},            // 51
  {name:'Stone of Storms',type:['Totem']},                 // 52
  {name:'Sketch of the Floor',type:[]},                    // 53
  {name:'Case of Whiskey',type:['Equipment']},             // 54
  {name:'Stone of Chains',type:['Totem']},                 // 55
  {name:'Stone of Many Eyes',type:['Totem']},              // 56
  {name:'Dr. Milk & Dinosaur',type:['Passenger']},         // 57
  {name:'Stone of Healing',type:['Totem']},                // 58
  {name:'Stone of Gluttony',type:['Totem']},               // 59
  {name:'Jar of Acid',type:['Equipment']},                 // 60
  {name:'Stone of Muscle',type:['Totem']},                 // 61
  {name:'Stone of the Hunt',type:['Totem']},               // 62
  {name:'Lukran Medicine',type:['Recipe']},                // 63
  {name:'Stone of Sacrifice',type:['Totem']},              // 64
  {name:'Gomka',type:['Equipment']},                       // 65
  {name:'God Stone',type:['Totem']},                       // 66
  {name:'Fiery Salamander',type:['Animal']},               // 67
  {name:'Stone of Mending',type:['Totem']},                // 68
  {name:"Ohmlude's Crystal",type:['Totem']},               // 69
  {name:'Maddening Song',type:[]},                         // 70
  {name:'Lukran Cannon',type:['Equipment']},               // 71
  {name:'Silver Axe',type:['Weapon']},                     // 72
  {name:'Stone of Undeath',type:['Totem']},                // 73
  {name:'Stone of Time',type:['Totem']},                   // 74
  {name:'Stone of Wind',type:['Totem']},                   // 75
  {name:'Stone of Earthquakes',type:['Totem']},            // 76
  {name:'Stone of Cats',type:['Totem']},                   // 77
  {name:'Stone of Squids',type:['Totem']},                 // 78
  {name:'Stone of the Deep',type:['Totem']},               // 79
  {name:'Stone of Madness',type:['Totem']},                // 80
  {name:'Stone of Roaming',type:['Totem']},                // 81
  {name:'Key Stone',type:['Totem']},                       // 82
  {name:'Sword of the Duelist',type:['Totem','Weapon']},   // 83
  {name:'Book of Fame & Infamy',type:['Totem']},           // 84
  {name:"Death's Bell",type:['Weapon']},                   // 85
  {name:"Meecra's Guitar",type:['Totem']},                 // 86
  {name:'Clockwork Owl',type:['Totem']},                   // 87
  {name:'Right Toe of Valard',type:[]},                    // 88
  {name:'Puzzle Box',type:[]},                             // 89
  {name:'Stone of Wind & Waves',type:['Totem']},           // 90
  {name:"Hunter's Pebble",type:['Totem']},                 // 91
  {name:'Copper Key',type:['Equipment']},                  // 92
  {name:'Tablet of Uzyaro',type:['Equipment']},            // 93
  {name:'Underworld Chant',type:['Equipment']},            // 94
  {name:'Temple Map',type:['Equipment']},                  // 95
  {name:'Hellfire Coal',type:['Equipment']},               // 96
  {name:'Explosives',type:['Equipment']},                  // 97
  {name:'Zokmere Wine',type:['Equipment']},                // 98
  {name:'Bones of Fate',type:['Equipment']},               // 99
  {name:"Valard's Prism",type:['Totem']},                  // 100
  {name:'Lifeblood Crystal',type:['Equipment']},           // 101
  {name:'Healing Seaweed',type:['Equipment']},             // 102
  {name:'Tusk of Slovilul',type:['Equipment']},            // 103
  {name:'Sansha the Ghost',type:['Passenger']},            // 104
  {name:'Pike of Everpain',type:['Weapon']},               // 105
  {name:'Squid',type:['Passenger']},                       // 106
  {name:'Zombie Plague',type:['Illness']},                 // 107
  {name:'Zrell Stone',type:['Totem']},                     // 108
  {name:'Zothra Flower',type:['Equipment']},               // 109
  {name:'Ferillactic Claws',type:['Weapon']},              // 110
  {name:'Zokmere Crook',type:['Equipment']},               // 111
  {name:'Blade of Zulum',type:['Weapon']},                 // 112
  {name:'Fishbone Bow',type:['Weapon']},                   // 113
  {name:'Stone of Vengeance',type:['Totem']},              // 114
  {name:'Stone of the Lost',type:['Totem']},               // 115
  {name:'Stone of Mirrors',type:['Totem']},                // 116
  {name:'Stone of Worldly Sorrows',type:['Totem']},        // 117
  {name:'Centipede Crown',type:['Totem']},                 // 118
  {name:"Mystic's Idol",type:['Totem']},                   // 119
  {name:'Nightmare Stone',type:['Totem']},                 // 120
  {name:'Pigment Stone',type:['Totem']},                   // 121
  {name:'Shadow Lantern',type:['Totem']},                  // 122
  {name:'Stone of Absence',type:['Totem']},                // 123
  {name:'Stone of Mist',type:['Totem']},                   // 124
  {name:'Stone of Screaming',type:['Totem']},              // 125
  {name:'Thrusiana',type:['Passenger']},                   // 126
  {name:"Raltolde's Lost Sword",type:['Weapon']},          // 127
  {name:'Edefri',type:['Passenger']},                      // 128
  {name:'Raltoldenna Fragment #1',type:['Equipment']},     // 129
  {name:'Raltoldenna Fragment #2',type:['Equipment']},     // 130
  {name:"Life's Bell",type:['Equipment']},                 // 131
  {name:'Zokmere Soup',type:['Recipe']},                   // 132
  {name:'Alzarrian Smoked Fish',type:['Recipe']},          // 133
  {name:'Ghostly Tool Satchel',type:['Equipment']},        // 134
  {name:'Mekritor the Acolyte',type:['Passenger']},        // 135
  {name:'Ethereal Mask',type:['Totem']},                   // 136
  {name:'Fish Bone Spear',type:['Totem','Weapon']},        // 137
  {name:'Nautilus Stone',type:['Totem']},                  // 138
  {name:'Obsidian Greaves',type:['Totem']},                // 139
  {name:'Stone of Changing',type:['Totem']},               // 140
  {name:'Stone of Vim',type:['Totem']},                    // 141
  {name:'Bottomless Basin',type:['Equipment']},            // 142
  {name:'Forked Whip',type:['Weapon']},                    // 143
  {name:'Ice Lynx',type:['Animal']},                       // 144
  {name:"Kemter's Horn",type:['Equipment']},               // 145
  {name:'Obsidian Axe',type:['Weapon']},                   // 146
  {name:'Jar of Acid',type:['Equipment']},                 // 147
];

// Maps card# → exact key in ACHIEVEMENTS_LIST (for name mismatches or ach-only items)
const CARD_TO_ACH = {
  3:   "Meera's Salt",        10: 'Obsidian Heart',       22: "Raltolde's Shield",
  28:  'Axe of the Cinderlands', 29: 'Blade of Thrack',  32: 'Life Seed',
  38:  'Gate Stone',          66: 'God Stone',            69: "Ohmlude's Crystal",
  82:  'Key Stone',           84: 'Book of Fame and Infame', 86: "Meera's Guitar",
  87:  'Clockwork Owl',       89: 'Puzzle Box',           91: "Hunter's Pebble",
  118: 'Centipede Crown',    119: "Mystic's Idol",       120: 'Nightmare Stone',
  121: 'Pigment Stone',      136: 'Ethereal Mask',       137: 'Fish Bone Spear',
  138: 'Nautilus Stone',     139: 'Obsidian Greaves',
};

// Maps card# → exact key in TOTEMS_LIST where card name differs from list name
const CARD_TO_TOTEM = {47: 'Stone of the Mind', 75: 'Stone of the Wind', 90: 'Stone of the Wind & Waves'};
// Dungeons expansion – locations with a dungeon entrance
const DUNGEON_LOCATIONS = new Set(['52','92','104','146','181','217']);
const SEA_LOCATIONS = new Set(['R51','R46','R96','R81','R39','R98','11','16','17','25','59','79','92','96','114','116','141','144','171','195','207']);

const DUNGEON_MAPS = {
  "104": { name: "Desert Grotto", img: "images/desert-grotto.jpg" },
  "146": { name: "Crypt of Thorns", img: "images/crypt-of-thorns.jpg" },
  "181": { name: "Fishbone Vault", img: "images/fishbone-vault.jpg" },
  "217": { name: "Coral Temple", img: "images/coral-temple.jpg" },
  "92": { name: "Caldera Fortress", img: "images/caldera-fortress.jpg" },
  "52": { name: "Blood Ruins", img: "images/blood-ruins.jpg" },
};

// ═══════════════════════════════════
// STATE
// ═══════════════════════════════════
function defaultState() {
  return {
    locations: {},
    activeQuests: [], completedQuests: [], discardedQuests: [],
    activeOptional: [], discardedOptional: [],
    unlockedNums: [],
    adventureCards: [],        // {num, totem}
    discardedAdvCards: [],     // {num} – discarded, not scored
    dungeonStatus: {},         // locId -> 'explored' | 'cleared'
    campaignFinished: false,
    log: {
      dateStart: new Date().toISOString().split('T')[0],
      dateEnd:'', finalScore:'', players:'', difficulty:'Normal',
      shipLocation:'', shipLocId:'', nextPlayer:'',
      shipDamage:{}, crewDamage:{}, crewLevel:{}, commandTokens:{},
      xp:[], defeats:[false,false,false,false,false,false], eventDeck:1,
      sessions: [],
    }
  };
}

let state = loadState();
let campaignActive = (state !== null); // true when a real campaign is in progress
// Quest keywords – may be edited by user
let questKeywords = JSON.parse(localStorage.getItem('sg_kw_edits') || 'null') || {...QUEST_KEYWORDS_DEFAULT};
// Convert numeric keys back
questKeywords = Object.fromEntries(Object.entries(questKeywords).map(([k,v])=>[parseInt(k),v]));

// Leaderboard stored separately (persists across campaigns)
let leaderboard = JSON.parse(localStorage.getItem('sg_leaderboard') || '[]');

function loadState() {
  try {
    const raw = localStorage.getItem('sg_state');
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s.log) s.log = defaultState().log;
    if (!s.adventureCards) s.adventureCards = [];
    if (!s.discardedAdvCards) s.discardedAdvCards = [];
    if (!s.log.crewLevel) s.log.crewLevel = {};
    if (!s.log.commandTokens) s.log.commandTokens = {};
    if (!s.activeOptional) s.activeOptional = [];
    if (!s.discardedOptional) s.discardedOptional = [];
    if (!s.log.shipLocId) s.log.shipLocId = '';
    if (!s.dungeonStatus) s.dungeonStatus = {};
    if (!s.log.sessions) s.log.sessions = [];
    // If campaign was finished, treat as no active campaign (go to home)
    if (s.campaignFinished) return null;
    return s;
  } catch(e) { return null; }
}

function save() {
  localStorage.setItem('sg_state', JSON.stringify(state));
}

// ═══════════════════════════════════
// UNDO
// ═══════════════════════════════════
let undoHistory = [];
const UNDO_MAX = 5;

function pushUndo() {
  undoHistory.push({
    activeQuests:      JSON.parse(JSON.stringify(state.activeQuests)),
    completedQuests:   JSON.parse(JSON.stringify(state.completedQuests)),
    discardedQuests:   JSON.parse(JSON.stringify(state.discardedQuests)),
    activeOptional:    JSON.parse(JSON.stringify(state.activeOptional || [])),
    discardedOptional: JSON.parse(JSON.stringify(state.discardedOptional || [])),
    unlockedNums:      [...state.unlockedNums],
    adventureCards:    JSON.parse(JSON.stringify(state.adventureCards)),
    discardedAdvCards: JSON.parse(JSON.stringify(state.discardedAdvCards || [])),
  });
  if (undoHistory.length > UNDO_MAX) undoHistory.shift();
  updateUndoUI();
}

function undoAction() {
  if (!undoHistory.length) return;
  const snap = undoHistory.pop();
  Object.assign(state, snap);
  save();
  renderQuests();
  renderAdv();
  updateHighlights();
  updateOptTab();
  updateUndoUI();
}

function updateUndoUI() {
  const n = undoHistory.length;
  document.querySelectorAll('.btn-undo').forEach(b => {
    b.disabled = n === 0;
    b.textContent = n > 0 ? `↩ Undo (${n})` : '↩ Undo';
  });
}

// ═══════════════════════════════════
// NAV
// ═══════════════════════════════════
function showPanel(name, btn) {
  closePopup();
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  if(btn) btn.classList.add('active');
  if(name==='quests') renderQuests();
  if(name==='adv') renderAdv();
  if(name==='log') renderLog();
  if(name==='settings') renderKwEditor();
  if(name==='achievements') renderAchievements();
  if(name==='optional') renderOptional();
  if(name==='map') { if(window.placePins) window.placePins(); else updateHighlights(); }
}

// ═══════════════════════════════════
// MAP
// ═══════════════════════════════════
let currentLocId = null;
let mapScale = 1;
let defaultMapScale = 1;

function mapZoom(factor) {
  const img = document.getElementById('map-img');
  const container = document.getElementById('map-container');
  if (factor === 0) {
    mapScale = container.offsetWidth / img.naturalWidth;
    defaultMapScale = mapScale;
  } else {
    mapScale = Math.min(Math.max(mapScale * factor, 0.4), 4);
  }
  img.style.width = (img.naturalWidth * mapScale) + 'px';
  placePins();
}

function initMap() {
  const wrap = document.getElementById('map-img-wrap');
  const img  = document.getElementById('map-img');
  function placePins() {
    wrap.querySelectorAll('.loc-pin, .ship-pin').forEach(p=>p.remove());
    const pinScale = defaultMapScale > 0 ? Math.max(1, mapScale / defaultMapScale) : 1;
    wrap.style.setProperty('--pin-s', pinScale);
    const iw = img.offsetWidth, ih = img.offsetHeight;
    LOCATIONS_DEF.forEach(loc => {
      const pin = document.createElement('div');
      pin.className = 'loc-pin';
      pin.dataset.id = loc.id;
      pin.style.left = (loc.x/100*iw)+'px';
      pin.style.top  = (loc.y/100*ih)+'px';
      pin.title = 'Location '+loc.id;
      const d = state.locations[loc.id];
      if(d?.keywords?.length || d?.note) pin.classList.add('has-data');
      if(SEA_LOCATIONS.has(loc.id)) pin.classList.add('sea-loc');
      if(DUNGEON_LOCATIONS.has(loc.id)) {
        pin.classList.add('dungeon');
        const ds = state.dungeonStatus?.[loc.id];
        if (ds) pin.classList.add(ds);
      }
      pin.addEventListener('click', ()=>openPopup(loc.id));
      wrap.appendChild(pin);
    });
    // Ship anchor pin – free coords or loc-based
    const sx = state.log?.shipX, sy = state.log?.shipY;
    const shipLocId = state.log?.shipLocId;
    let shipX = null, shipY = null, shipTitle = 'Ship';
    if (sx != null && sy != null) {
      shipX = sx / 100 * iw;
      shipY = sy / 100 * ih;
    } else if (shipLocId) {
      const shipLoc = LOCATIONS_DEF.find(l => l.id === shipLocId);
      if (shipLoc) {
        shipX = shipLoc.x / 100 * iw;
        shipY = shipLoc.y / 100 * ih;
        shipTitle = 'Ship – Location ' + shipLocId;
      }
    }
    if (shipX !== null) {
      const sp = document.createElement('div');
      sp.className = 'ship-pin';
      sp.style.left = shipX + 'px';
      sp.style.top  = shipY + 'px';
      sp.title = shipTitle;
      if (shipLocId) sp.addEventListener('click', () => openPopup(shipLocId));
      wrap.appendChild(sp);
    }
    updateHighlights();
    updatePlaceShipBtn();
  }
  window.placePins = placePins;

  if(img.complete) {
    mapScale = document.getElementById('map-container').offsetWidth / img.naturalWidth;
    defaultMapScale = mapScale;
    img.style.width = (img.naturalWidth * mapScale) + 'px';
    placePins();
  } else {
    img.addEventListener('load', () => {
      mapScale = document.getElementById('map-container').offsetWidth / img.naturalWidth;
      defaultMapScale = mapScale;
      img.style.width = (img.naturalWidth * mapScale) + 'px';
      placePins();
    });
  }
  window.addEventListener('resize', placePins);

  // Free ship placement: click on map when place-ship mode is active
  wrap.addEventListener('click', e => {
    if (!placeShipMode) return;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / img.offsetWidth)  * 100;
    const y = ((e.clientY - rect.top)  / img.offsetHeight) * 100;
    state.log.shipX = Math.round(x * 100) / 100;
    state.log.shipY = Math.round(y * 100) / 100;
    state.log.shipLocId = '';
    save();
    placePins();
    setPlaceShipMode(false);
  });
}

let placeShipMode = false;

function setPlaceShipMode(on) {
  placeShipMode = on;
  document.getElementById('map-container').classList.toggle('placing-ship', on);
  updatePlaceShipBtn();
}

function updatePlaceShipBtn() {
  const btn = document.getElementById('btn-place-ship');
  if (!btn) return;
  const hasFreeShip = state?.log?.shipX != null;
  if (placeShipMode) {
    btn.textContent = '✕';
    btn.title = 'Cancel placement';
    btn.classList.add('active');
  } else if (hasFreeShip) {
    btn.innerHTML = '&#9875;&#xFE0E;×';
    btn.title = 'Remove ship from map';
    btn.classList.remove('active');
  } else {
    btn.innerHTML = '&#9875;+';
    btn.title = 'Place ship on map';
    btn.classList.remove('active');
  }
}

function togglePlaceShipMode() {
  const hasFreeShip = state?.log?.shipX != null;
  if (!placeShipMode && hasFreeShip) {
    state.log.shipX = null;
    state.log.shipY = null;
    save();
    placePins();
    return;
  }
  setPlaceShipMode(!placeShipMode);
}

function updateHighlights() {
  document.querySelectorAll('.loc-pin').forEach(pin => {
    const id = pin.dataset.id;
    const d = state.locations[id];
    pin.classList.remove('highlighted');
    pin.classList.toggle('has-data', !!(d?.keywords?.length || d?.note));
    if(DUNGEON_LOCATIONS.has(id)) pin.classList.add('dungeon');
    if(d?.keywords?.length) {
      const locKWs = d.keywords.map(k=>k.toUpperCase());
      const matches = state.activeQuests.filter(q => locKWs.includes(questKeywords[q.num]?.toUpperCase()));
      if(matches.length) {
        pin.classList.add('highlighted');
        pin.title = `Location ${id} – Quest ${matches.map(q=>'#'+q.num).join(', ')}`;
      } else {
        pin.title = 'Location ' + id;
      }
    } else {
      pin.title = 'Location ' + id;
    }
  });
}

// ═══════════════════════════════════
// LOCATION POPUP
// ═══════════════════════════════════
function openPopup(locId) {
  currentLocId = locId;
  const dungeon = DUNGEON_MAPS[locId];
  const title = dungeon
    ? `Location ${locId}  ☠ ${dungeon.name}`
    : `Location ${locId}`;
  document.getElementById('popup-title').textContent = title;

  // Show/hide dungeon map button
  let dungeonBtn = document.getElementById('popup-dungeon-btn');
  if (dungeon) {
    if (!dungeonBtn) {
      dungeonBtn = document.createElement('button');
      dungeonBtn.id = 'popup-dungeon-btn';
      dungeonBtn.className = 'btn-primary';
      dungeonBtn.style.cssText = 'font-size:.65rem;padding:6px 12px;margin-left:8px;background:#5a2a7a;';
      dungeonBtn.textContent = '☠ View Dungeon Map';
      document.querySelector('.popup-header').insertBefore(dungeonBtn, document.getElementById('loc-popup').querySelector('.popup-close'));
    }
    dungeonBtn.onclick = () => openDungeonViewer(locId);
    dungeonBtn.style.display = '';
  } else if (dungeonBtn) {
    dungeonBtn.style.display = 'none';
  }

  // Ship location button
  let shipBtn = document.getElementById('popup-ship-btn');
  if (!shipBtn) {
    shipBtn = document.createElement('button');
    shipBtn.id = 'popup-ship-btn';
    shipBtn.className = 'btn-ship-loc';
    document.querySelector('.popup-header').insertBefore(shipBtn, document.getElementById('loc-popup').querySelector('.popup-close'));
  }
  shipBtn.onclick = () => setShipLocation(locId);
  updateShipPopupBtn();

  renderPopup();
  document.getElementById('loc-popup').classList.add('open');
  const inp = document.getElementById('kw-input');
  inp.value='';
  inp.oninput = onKwInput;
  inp.onkeydown = e=>{ if(e.key==='Enter') addKeyword(); };
  document.getElementById('loc-note').onblur = ()=>{
    if(!state.locations[currentLocId]) state.locations[currentLocId]={keywords:[],note:''};
    state.locations[currentLocId].note = document.getElementById('loc-note').value;
    save(); updateHighlights();
  };
}

function openDungeonViewer(locId) {
  const dungeon = DUNGEON_MAPS[locId];
  if (!dungeon) return;
  currentDungeonLocId = locId;
  document.getElementById('dungeon-viewer-title').textContent = '☠ ' + dungeon.name;
  document.getElementById('dungeon-viewer-img').src = dungeon.img;
  document.getElementById('dungeon-viewer').classList.add('open');
  updateDungeonExploredBtn(locId);
  musicEnterDungeon(dungeon.name);
}

function closeDungeonViewer() {
  document.getElementById('dungeon-viewer').classList.remove('open');
  setTimeout(() => { document.getElementById('dungeon-viewer-img').src = ''; }, 300);
  currentDungeonLocId = null;
  musicExitDungeon();
}

function setShipLocation(locId) {
  if (state.log.shipLocId === locId) {
    state.log.shipLocId = '';
  } else {
    state.log.shipLocId = locId;
    state.log.shipX = null;
    state.log.shipY = null;
  }
  save();
  placePins();
  updateShipPopupBtn();
  updatePlaceShipBtn();
}

function updateShipPopupBtn() {
  const btn = document.getElementById('popup-ship-btn');
  if (!btn) return;
  const isHere = state.log.shipLocId === currentLocId;
  btn.textContent = isHere ? '⚓ Remove Ship' : '⚓ Set as Ship Location';
  btn.classList.toggle('active', isHere);
}

function zoomToShip() {
  const container = document.getElementById('map-container');
  const img = document.getElementById('map-img');
  let px, py;
  if (state.log?.shipX != null) {
    px = state.log.shipX;
    py = state.log.shipY;
  } else {
    const id = state.log?.shipLocId;
    if (!id) return;
    const loc = LOCATIONS_DEF.find(l => l.id === id);
    if (!loc) return;
    px = loc.x; py = loc.y;
  }
  mapScale = Math.min(container.offsetWidth / img.naturalWidth * 3, 2.5);
  img.style.width = (img.naturalWidth * mapScale) + 'px';
  placePins();
  const x = px / 100 * img.offsetWidth;
  const y = py / 100 * img.offsetHeight;
  container.scrollLeft = x - container.offsetWidth / 2;
  container.scrollTop  = y - container.offsetHeight / 2;
}

function onKwInput() {
  const v = document.getElementById('kw-input').value.trim().toUpperCase();
  const warn = document.getElementById('kw-warn');
  const sug  = document.getElementById('kw-suggest');
  const inp  = document.getElementById('kw-input');
  const allKWs = Object.values(questKeywords);
  if(v.length < 2) { warn.style.display='none'; sug.style.display='none'; inp.classList.remove('warn'); return; }
  const matches = allKWs.filter(k=>k.toUpperCase().startsWith(v));
  // Only reveal suggestion when exactly one match remains (avoids spoilers)
  if(matches.length === 1 && matches[0].toUpperCase() !== v) {
    sug.innerHTML = `<div class="kw-suggest-item" onclick="selectSuggestion('${matches[0]}')">${matches[0]}</div>`;
    sug.style.display='block';
  } else { sug.style.display='none'; }
  const exact = allKWs.some(k=>k.toUpperCase()===v);
  if(!exact && v.length>2) { warn.style.display='block'; inp.classList.add('warn'); }
  else { warn.style.display='none'; inp.classList.remove('warn'); }
}

function selectSuggestion(kw) {
  document.getElementById('kw-input').value = kw;
  document.getElementById('kw-suggest').style.display='none';
  document.getElementById('kw-warn').style.display='none';
  document.getElementById('kw-input').classList.remove('warn');
  addKeyword();
}

function addKeyword() {
  const inp = document.getElementById('kw-input');
  const val = inp.value.trim().toUpperCase();
  if(!val) return;
  if(!state.locations[currentLocId]) state.locations[currentLocId]={keywords:[],note:''};
  if(!state.locations[currentLocId].keywords.includes(val))
    state.locations[currentLocId].keywords.push(val);
  save(); renderPopup(); updateHighlights();
  inp.value=''; document.getElementById('kw-suggest').style.display='none';
  document.getElementById('kw-warn').style.display='none';
  inp.classList.remove('warn'); inp.focus();
}

function removeKeyword(idx) {
  if(!state.locations[currentLocId]) return;
  state.locations[currentLocId].keywords.splice(idx,1);
  save(); renderPopup(); updateHighlights();
}

function renderPopup() {
  const d = state.locations[currentLocId]||{keywords:[],note:''};
  const chips = document.getElementById('kw-chips');
  chips.innerHTML='';
  (d.keywords||[]).forEach((kw,i)=>{
    const c=document.createElement('div'); c.className='kw-chip';
    c.innerHTML=`${kw} <button class="kw-chip-del" onclick="removeKeyword(${i})">✕</button>`;
    chips.appendChild(c);
  });
  document.getElementById('loc-note').value = d.note||'';
}

function closePopup() {
  document.getElementById('loc-popup').classList.remove('open');
  document.getElementById('kw-suggest').style.display='none';
  currentLocId=null;
}

// ═══════════════════════════════════
// QUESTS
// ═══════════════════════════════════
function renderQuests() {
  // Build keyword→location mapping for match display
  const kwToLocs = {};
  Object.entries(state.locations).forEach(([locId,d])=>{
    (d.keywords||[]).forEach(kw=>{
      const k=kw.toUpperCase();
      if(!kwToLocs[k]) kwToLocs[k]=[];
      kwToLocs[k].push(locId);
    });
  });

  function renderList(elId, list, type) {
    const el=document.getElementById(elId); el.innerHTML='';
    if(!list.length){el.innerHTML='<div class="empty-state">None yet</div>';return;}
    const sorted = type==='active' ? [...list].sort((a,b)=>{
      const ka=questKeywords[a.num]||''; const kb=questKeywords[b.num]||'';
      return ka.localeCompare(kb);
    }) : list;
    sorted.forEach(q=>{
      const kw = (questKeywords[q.num]||'Unknown').toUpperCase();
      const matchLocs = kwToLocs[kw]||[];
      const hasMatch = matchLocs.length>0 && type==='active';
      const item=document.createElement('div');
      item.className='quest-item'+(hasMatch?' match':'');
      item.innerHTML=`
        <div class="quest-item-kw">${questKeywords[q.num]||'?'}</div>
        <div class="quest-item-num">Quest ${q.num}</div>
        ${hasMatch?`<div class="quest-item-match-locs">📍 Found at: ${matchLocs.join(', ')}</div>`:''}
      `;
      if(type==='active') item.onclick=()=>openQA(q);
      el.appendChild(item);
    });
  }

  // Active quests: exclude optional rules (those live in the Optional Rules tab)
  const activeRegular = state.activeQuests.filter(q=>!OPTIONAL_QUEST_NUMS.has(q.num));

  renderList('active-list', activeRegular, 'active');
  renderList('completed-list', state.completedQuests, 'completed');
  renderList('discarded-list', state.discardedQuests, 'discarded');
  document.getElementById('active-count').textContent = activeRegular.length;
  document.getElementById('completed-count').textContent = state.completedQuests.length;

  // Build unlock dropdown – regular quests only (optional rules are in their own tab)
  const sel=document.getElementById('unlock-sel');
  const prev=sel.value; sel.innerHTML='';
  const unlocked=new Set(state.unlockedNums);
  let hasOptions=false;
  for(let i=1;i<=218;i++) {
    if(!unlocked.has(i) && !OPTIONAL_QUEST_NUMS.has(i)) {
      const o=document.createElement('option');
      o.value=i;
      o.textContent=`Quest ${i}`;
      sel.appendChild(o); hasOptions=true;
    }
  }
  if(!hasOptions) sel.innerHTML='<option>All quests unlocked!</option>';
  if(prev) sel.value=prev;
}

function unlockQuest() {
  const sel=document.getElementById('unlock-sel');
  const num=parseInt(sel.value);
  if(!num) return;
  showDlg(`Unlock Quest ${num}?`,
    `Add Quest ${num} to your active quests?`,
    ()=>{
      pushUndo();
      state.activeQuests.push({num});
      state.unlockedNums.push(num);
      save(); renderQuests(); updateHighlights();
    }, false);
}

let qaQuest=null;
function openQA(q) {
  qaQuest=q;
  const kw=questKeywords[q.num]||'?';
  document.getElementById('qa-kw').textContent=kw;
  document.getElementById('qa-num').textContent='Quest '+q.num;
  // Show match info
  const kwToLocs={};
  Object.entries(state.locations).forEach(([locId,d])=>{
    (d.keywords||[]).forEach(k=>{
      const u=k.toUpperCase();
      if(!kwToLocs[u]) kwToLocs[u]=[];
      kwToLocs[u].push(locId);
    });
  });
  const locs=(kwToLocs[kw.toUpperCase()]||[]);
  document.getElementById('qa-match-info').textContent=
    locs.length ? '📍 Keyword found at location(s): '+locs.join(', ') : '';
  // Hide Complete for optional rules
  const isOpt = OPTIONAL_QUEST_NUMS.has(q.num);
  document.getElementById('qa-complete-btn').style.display = isOpt ? 'none' : '';
  document.getElementById('qa-overlay').classList.add('open');
}
function closeQA(){ document.getElementById('qa-overlay').classList.remove('open'); qaQuest=null; }

// ═══════════════════════════════════
// OPTIONAL RULES
// ═══════════════════════════════════
function renderOptional() {
  const activeEl = document.getElementById('opt-active-list');
  const discEl   = document.getElementById('opt-discarded-list');
  activeEl.innerHTML = ''; discEl.innerHTML = '';

  if(!state.activeOptional.length) activeEl.innerHTML='<div class="empty-state">No optional rules active</div>';
  state.activeOptional.forEach(q=>{
    const item=document.createElement('div'); item.className='opt-rule-item';
    item.innerHTML=`<div class="opt-rule-kw">${questKeywords[q.num]||'?'}</div><div class="opt-rule-num">Quest ${q.num}</div>`;
    item.onclick=()=>openOptAction(q);
    activeEl.appendChild(item);
  });
  document.getElementById('opt-active-count').textContent=state.activeOptional.length;

  if(!state.discardedOptional.length) discEl.innerHTML='<div class="empty-state">None discarded</div>';
  state.discardedOptional.forEach(q=>{
    const item=document.createElement('div'); item.className='opt-rule-item';
    item.style.opacity='0.6';
    item.innerHTML=`<div class="opt-rule-kw">${questKeywords[q.num]||'?'}</div><div class="opt-rule-num">Quest ${q.num}</div>`;
    discEl.appendChild(item);
  });

}

function unlockOptional() {
  const sel=document.getElementById('opt-unlock-sel');
  const num=parseInt(sel.value); if(!num) return;
  state.activeOptional.push({num});
  state.unlockedNums.push(num);
  save(); renderOptional(); updateOptTab();
}

let qaOptQuest=null;
function openOptAction(q) {
  qaOptQuest=q;
  document.getElementById('qa-kw').textContent=questKeywords[q.num]||'?';
  document.getElementById('qa-num').textContent='Quest '+q.num+' (Optional Rule)';
  document.getElementById('qa-match-info').textContent='Optional rules can only be discarded, not completed.';
  document.getElementById('qa-complete-btn').style.display='none';
  document.getElementById('qa-overlay').classList.add('open');
  qaQuest=null; // prevent normal doQA path
  // Override doQA for this session
  window._optMode=true;
}

function doQA(action) {
  if(window._optMode) {
    window._optMode=false;
    if(action==='discard' && qaOptQuest) {
      pushUndo();
      state.activeOptional=state.activeOptional.filter(q=>q.num!==qaOptQuest.num);
      state.discardedOptional.push(qaOptQuest);
      save(); closeQA(); renderOptional(); updateOptTab(); qaOptQuest=null;
    } else { closeQA(); qaOptQuest=null; }
    return;
  }
  if(!qaQuest) return;
  pushUndo();
  state.activeQuests=state.activeQuests.filter(q=>q.num!==qaQuest.num);
  if(action==='complete') state.completedQuests.push(qaQuest);
  else state.discardedQuests.push(qaQuest);
  save(); closeQA(); renderQuests(); updateHighlights();
}

function updateOptTab() {
  const tab=document.getElementById('opt-nav-tab');
  if(tab) tab.style.display = (state.activeOptional.length+state.discardedOptional.length)>0 ? '' : 'none';
  if(typeof updateNavHeight==='function') updateNavHeight();
}

// ═══════════════════════════════════
// ADVENTURE CARDS
// ═══════════════════════════════════
let pendingAdvNum = null;
let advSort = 'num'; // 'num' | 'name' | 'type'
let advNameEdits = (() => {
  const raw = JSON.parse(localStorage.getItem('sg_adv_edits') || '{}');
  return Object.fromEntries(Object.entries(raw).map(([k,v]) => [parseInt(k), v]));
})();

let advTypeEdits = (() => {
  const raw = JSON.parse(localStorage.getItem('sg_adv_type_edits') || '{}');
  return Object.fromEntries(Object.entries(raw).map(([k,v]) => [parseInt(k), v]));
})();

function getAdvName(num) {
  return advNameEdits[num] || ADV_CARD_DATA[num]?.name || `Card ${num}`;
}

function getAdvTypes(num) {
  return advTypeEdits[num] || ADV_CARD_DATA[num]?.type || [];
}

function advTypeBadges(num) {
  const types = getAdvTypes(num);
  if (!types.length) return '';
  return types.map(t => `<span class="adv-type adv-type-${t.toLowerCase()}">${t}</span>`).join('');
}

function renderAdv() {
  const taken    = new Set(state.adventureCards.map(c=>c.num));
  const discarded= new Set((state.discardedAdvCards||[]).map(c=>c.num));
  const totems   = state.adventureCards.filter(c=>c.totem).length;
  const discCount= (state.discardedAdvCards||[]).length;

  document.getElementById('adv-stats').innerHTML=
    `<span>${state.adventureCards.length} / ${TOTAL_ADV_CARDS} taken</span>
     <span>🏺 ${totems} totem${totems!==1?'s':''}</span>
     ${discCount ? `<span>🗑 ${discCount} discarded</span>` : ''}`;

  // Build select – exclude both taken and discarded, label as "Card N"
  const sel=document.getElementById('adv-sel');
  const prev=sel.value; sel.innerHTML='<option value="">— Select card number —</option>';
  for(let i=1;i<=TOTAL_ADV_CARDS;i++) {
    if(!taken.has(i) && !discarded.has(i)) {
      const o=document.createElement('option');
      o.value=i; o.textContent=`Card ${i}`;
      sel.appendChild(o);
    }
  }
  if(prev) sel.value=prev;

  // Update sort button active states
  ['num','name','type'].forEach(m => {
    const btn = document.getElementById(`adv-sort-${m}`);
    if (btn) btn.classList.toggle('active', advSort === m);
  });

  // Render list
  const list=document.getElementById('adv-list');
  list.innerHTML='';
  if(!state.adventureCards.length){list.innerHTML='<div class="empty-state">No cards taken yet</div>';return;}

  let sorted=[...state.adventureCards];
  if (advSort==='name') sorted.sort((a,b)=>getAdvName(a.num).localeCompare(getAdvName(b.num)));
  else if (advSort==='type') sorted.sort((a,b)=>{
    const ta=getAdvTypes(a.num)[0]||'zzz';
    const tb=getAdvTypes(b.num)[0]||'zzz';
    return ta.localeCompare(tb)||a.num-b.num;
  });
  else sorted.sort((a,b)=>a.num-b.num);

  sorted.forEach(c=>{
    const div=document.createElement('div'); div.className='adv-card';
    div.innerHTML=`
      <div class="adv-card-name">${getAdvName(c.num)}</div>
      <div class="adv-card-num">Card ${c.num}</div>
      <div class="adv-card-badges">${advTypeBadges(c.num)}</div>
      <div class="adv-card-actions">
        <button class="adv-card-del" onclick="discardAdvCard(${c.num})" style="color:#c0392b;" title="Discard – remove from scoring">Discard</button>
        <button class="adv-card-del" onclick="removeAdvCard(${c.num})" title="Remove completely">Remove ✕</button>
      </div>`;
    list.appendChild(div);
  });
}

function setAdvSort(mode) { advSort=mode; renderAdv(); }

function pickAdventureCard() {
  const sel=document.getElementById('adv-sel');
  const num=parseInt(sel.value);
  if(!num) return;
  pendingAdvNum=num;
  document.getElementById('adv-dlg-num').textContent=num;
  document.getElementById('adv-dlg-name').textContent=getAdvName(num);
  document.getElementById('adv-dlg-types').innerHTML=advTypeBadges(num);
  document.getElementById('adv-overlay').classList.add('open');
}

function confirmAdv() {
  document.getElementById('adv-overlay').classList.remove('open');
  if(!pendingAdvNum) return;
  const isTotem=getAdvTypes(pendingAdvNum).includes('Totem');
  pushUndo();
  state.adventureCards.push({num:pendingAdvNum, totem:isTotem});
  autoFillCardAchievements(pendingAdvNum);
  save(); renderAdv(); pendingAdvNum=null;
}

function autoFillCardAchievements(num) {
  const card=ADV_CARD_DATA[num];
  const ach=getAchievementState();
  let changed=false;

  const achKey=CARD_TO_ACH[num];
  if(achKey && !ach.achievements[achKey]) {
    if(!ach.achievements) ach.achievements={};
    ach.achievements[achKey]=true; changed=true;
  }

  if(getAdvTypes(num).includes('Totem')) {
    const totemKey=CARD_TO_TOTEM[num]||(card?.name||'');
    const inList=TOTEMS_LIST.some(t=>(typeof t==='string'?t:t.name)===totemKey);
    if(inList && !ach.totems[totemKey]) {
      if(!ach.totems) ach.totems={};
      ach.totems[totemKey]=true; changed=true;
    }
  }

  if(changed) { saveAchievementState(ach); renderAchievements(); renderHomeOptionals(); }
}

function discardAdvCard(num) {
  const name=getAdvName(num);
  showDlg(
    `Discard ${name}?`,
    `Card ${num} will be removed from scoring and cannot be taken again this campaign.`,
    () => {
      const card = state.adventureCards.find(c=>c.num===num);
      if(!card) return;
      pushUndo();
      state.adventureCards = state.adventureCards.filter(c=>c.num!==num);
      if(!state.discardedAdvCards) state.discardedAdvCards=[];
      state.discardedAdvCards.push({num});
      save(); renderAdv();
    }, true);
}

function removeAdvCard(num) {
  const name=getAdvName(num);
  showDlg(
    `Remove ${name}?`,
    `Card ${num} will be completely removed and can be taken again.`,
    () => {
      pushUndo();
      state.adventureCards=state.adventureCards.filter(c=>c.num!==num);
      save(); renderAdv();
    }, false);
}

// ═══════════════════════════════════
// JOURNEY LOG
// ═══════════════════════════════════
function renderLog() {
  const log=state.log;
  document.getElementById('log-date-start').value=log.dateStart||'';
  document.getElementById('log-date-end').value=log.dateEnd||'';
  document.getElementById('log-players').value=log.players||'';
  document.getElementById('log-ship-loc').value=log.shipLocation||'';
  document.getElementById('diff-normal').className='diff-btn'+(log.difficulty==='Normal'?' sel-normal':'');
  document.getElementById('diff-brutal').className='diff-btn'+(log.difficulty==='Brutal'?' sel-brutal':'');

  // Next player dropdown
  const npSel=document.getElementById('log-next-player');
  npSel.innerHTML='<option value="">— Select —</option>';
  const pNames=getPlayerNames();
  pNames.forEach(p=>{const o=document.createElement('option');o.value=p;o.textContent=p;npSel.appendChild(o);});
  npSel.value=log.nextPlayer||'';

  // Ship damage
  const sr=document.getElementById('ship-rooms'); sr.innerHTML='';
  ROOM_DEFS.forEach(room=>{
    const checked=log.shipDamage[room.id]||0;
    let boxes='';
    for(let i=1;i<=room.max;i++)
      boxes+=`<div class="dmg-box ${i<=checked?'checked':''}" onclick="toggleShipDmg('${room.id}',${i},${room.max})">✕</div>`;
    const d=document.createElement('div'); d.className='room-block';
    d.innerHTML=`<span class="room-name">${room.name}</span><div class="dmg-boxes">${boxes}</div>`;
    sr.appendChild(d);
  });

  // Crew
  const cg=document.getElementById('crew-grid'); cg.innerHTML='';
  CREW_MEMBERS.forEach((name, idx)=>{
    const dmg=log.crewDamage[name]||0;
    const lvl=log.crewLevel[name]||0;
    const safeId=name.replace(/[^a-zA-Z0-9]/g,'_');
    const d=document.createElement('div'); d.className='crew-member';
    d.innerHTML=`
      <div class="crew-name">${name}</div>
      <div class="crew-row">
        <span class="crew-row-label">Damage</span>
        <div class="crew-ctrl">
          <button class="crew-btn" onclick="changeCrewDmg(${idx},-1)">−</button>
          <span class="crew-val" id="cdmg-${safeId}">${dmg}</span>
          <button class="crew-btn" onclick="changeCrewDmg(${idx},1)">+</button>
        </div>
      </div>
      <div class="crew-row">
        <span class="crew-row-label">Level</span>
        <div class="crew-ctrl">
          <button class="crew-btn" onclick="changeCrewLvl(${idx},-1)">−</button>
          <span class="crew-val" id="clvl-${safeId}">${lvl}</span>
          <button class="crew-btn" onclick="changeCrewLvl(${idx},1)">+</button>
        </div>
      </div>
    `;
    cg.appendChild(d);
  });

  // Command tokens
  const cmdg=document.getElementById('cmd-grid'); cmdg.innerHTML='';
  getPlayerNames().slice(0,4).forEach((p,i)=>{
    const t=log.commandTokens[p]||0;
    const d=document.createElement('div'); d.className='cmd-player';
    d.innerHTML=`
      <span class="cmd-name">${p}</span>
      <div class="crew-ctrl">
        <button class="crew-btn" onclick="changeCmd('${p}',-1)">−</button>
        <span class="crew-val">${t}</span>
        <button class="crew-btn" onclick="changeCmd('${p}',1)">+</button>
      </div>
    `;
    cmdg.appendChild(d);
  });

  renderXP();

  // Defeats
  const dr=document.getElementById('defeats-row'); dr.innerHTML='';
  for(let i=0;i<6;i++){
    const b=document.createElement('div');
    b.className='check-box'+(log.defeats[i]?' checked':'');
    b.textContent=log.defeats[i]?'✓':'';
    b.onclick=()=>{state.log.defeats[i]=!state.log.defeats[i];save();renderLog();};
    dr.appendChild(b);
  }
  [1,2,3].forEach(n=>document.getElementById('evt-'+n).classList.toggle('active',n===(log.eventDeck||1)));
  renderSessionNotes();
  // Set today as default date for new session note
  const sdi = document.getElementById('session-date');
  if (sdi && !sdi.value) sdi.value = new Date().toISOString().split('T')[0];
  updateNavBadges();
}

function getPlayerNames() {
  const p=state.log.players||'';
  const custom=p.split(',').map(x=>x.trim()).filter(Boolean);
  return custom.length ? custom : ['Player 1','Player 2','Player 3','Player 4'];
}

function toggleShipDmg(roomId,box,max) {
  const cur=state.log.shipDamage[roomId]||0;
  state.log.shipDamage[roomId]=(cur===box)?box-1:box;
  save(); renderLog(); updateNavBadges();
}
function changeCrewDmg(idx,d) {
  const name=CREW_MEMBERS[idx];
  state.log.crewDamage[name]=Math.max(0,(state.log.crewDamage[name]||0)+d);
  save(); renderLog();
}
function changeCrewLvl(idx,d) {
  const name=CREW_MEMBERS[idx];
  state.log.crewLevel[name]=Math.max(0,(state.log.crewLevel[name]||0)+d);
  save(); renderLog();
}
function changeCmd(p,d) {
  state.log.commandTokens[p]=Math.max(0,(state.log.commandTokens[p]||0)+d);
  save(); renderLog();
}
function setDiff(d) { state.log.difficulty=d; save(); renderLog(); }
function setEvt(n) { state.log.eventDeck=n; save();
  [1,2,3].forEach(i=>document.getElementById('evt-'+i).classList.toggle('active',i===n));
}

function initLogListeners() {
  [['log-date-start','dateStart'],['log-date-end','dateEnd'],
   ['log-players','players'],
   ['log-ship-loc','shipLocation']].forEach(([id,key])=>{
    document.getElementById(id)?.addEventListener('change',()=>{
      state.log[key]=document.getElementById(id).value;
      save(); if(key==='players') renderLog();
    });
  });
  document.getElementById('log-next-player')?.addEventListener('change',()=>{
    state.log.nextPlayer=document.getElementById('log-next-player').value; save();
  });
  // Player name counter
  const playersInp = document.getElementById('log-players');
  const playersCnt = document.getElementById('log-players-count');
  if (playersInp && playersCnt) {
    const updateCount = () => {
      const names = playersInp.value.split(',').map(s=>s.trim()).filter(Boolean);
      const n = names.length;
      playersCnt.textContent = n + '/4';
      playersCnt.classList.toggle('over-limit', n > 4);
    };
    playersInp.addEventListener('input', updateCount);
    updateCount();
  }
}

// ═══════════════════════════════════
// THEME
// ═══════════════════════════════════
function setTheme(mode) {
  localStorage.setItem('sg_theme', mode);
  applyTheme(mode);
}

function applyTheme(mode) {
  document.documentElement.classList.remove('force-light', 'force-dark');
  if (mode === 'light') document.documentElement.classList.add('force-light');
  else if (mode === 'dark') document.documentElement.classList.add('force-dark');
  ['theme-system','theme-light','theme-dark'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === 'theme-' + mode);
  });
}

// ═══════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════
const ACHIEVEMENTS_LIST = [
  'Axe of the Cinderlands',
  'Blade of Thrack',
  'Book of Fame and Infame',
  {name:'Centipede Crown', tag:'Ruin'},
  'Clockwork Owl',
  {name:'Cursed Ruby', tag:'Ruin'},
  {name:'Ethereal Mask', tag:'Dungeons'},
  {name:'Fish Bone Spear', tag:'Dungeons'},
  'Gate Stone',
  'God Stone',
  {name:"Hunter's Pebble", tag:'Ruin'},
  'Key Stone',
  {name:'Lava Sword', tag:'Ruin'},
  'Life Seed',
  "Meera's Guitar",
  "Meera's Salt",
  {name:"Mystic's Idol", tag:'Ruin'},
  {name:'Nautilus Stone', tag:'Dungeons'},
  {name:'Nightmare Stone', tag:'Ruin'},
  {name:'Obsidian Greaves', tag:'Dungeons'},
  'Obsidian Heart',
  "Ohmlude's Crystal",
  {name:'Pigment Stone', tag:'Ruin'},
  'Puzzle Box',
  "Raltolde's Shield",
];

const TOTEMS_LIST = [
  // Col 2 (first 25)
  "Raltolde's Spear",
  {name:'Shadow Lantern', tag:'Ruin'},
  "Shorme's Hammer",
  'Snake Bangle',
  {name:'Stone of Absence', tag:'Ruin'},
  'Stone of Bargaining',
  'Stone of Blood',
  'Stone of Cats',
  'Stone of Chains',
  {name:'Stone of Changing', tag:'Dungeons'},
  'Stone of Deceit',
  'Stone of Earthquakes',
  'Stone of Fitness',
  'Stone of Freezing',
  'Stone of Gluttony',
  'Stone of Healing',
  {name:'Stone of the Lost', tag:'Ruin'},
  'Stone of Madness',
  'Stone of Many Eyes',
  'Stone of Mending',
  {name:'Stone of Mirrors', tag:'Ruin'},
  'Stone of Muscle',
  'Stone of Music',
  {name:'Stone of Mist', tag:'Ruin'},
  'Stone of Riddles',
  // Col 3 (last 25)
  'Stone of Roaming',
  {name:'Stone of Sacrifice'},
  {name:'Stone of Screaming', tag:'Ruin'},
  'Stone of Shanties',
  {name:'Stone of Spirits', tag:'Ruin'},
  'Stone of Squids',
  'Stone of Storms',
  'Stone of the Deep',
  'Stone of the Hunt',
  'Stone of the Mind',
  'Stone of the Wind',
  'Stone of the Wind & Waves',
  {name:'Stone of Teeth', tag:'Ruin'},
  'Stone of Time',
  'Stone of Undeath',
  {name:'Stone of Vengeance', tag:'Ruin'},
  {name:'Stone of Vim', tag:'Dungeons'},
  'Stone of Weakness',
  {name:'Stone of Worldly Sorrows', tag:'Ruin'},
  'Sword of the Duelist',
  'The Perpetual Flame',
  "Thrack's Charm",
  {name:"Valard's Prism", tag:'Ruin'},
  "Zacra's Mask",
  {name:'Zrell Stone', tag:'Ruin'},
];

const UNLOCKED_CARD_THRESHOLDS = [
  { threshold: 4,  label: 'Quests 171–172', quests: [171,172] },
  { threshold: 7,  label: 'Quests 169–170', quests: [169,170] },
  { threshold: 9,  label: 'Quest 168',      quests: [168] },
  { threshold: 11, label: 'Quest 174',      quests: [174] },
  { threshold: 13, label: 'Quest 175',      quests: [175] },
  { threshold: 15, label: 'Quests 176–177', quests: [176,177] },
  { threshold: 18, label: 'Quests 178–180', quests: [178,179,180] },
  { threshold: 22, label: 'Quest 173',      quests: [173] },
];

function getAchievementState() {
  return JSON.parse(localStorage.getItem('sg_achievements') || '{"achievements":{},"totems":{},"endings":{}}');
}
function saveAchievementState(s) {
  localStorage.setItem('sg_achievements', JSON.stringify(s));
}

function renderAchievements() {
  const achState = getAchievementState();

  function makeAchItem(item, category, container) {
    const name = typeof item === 'string' ? item : item.name;
    const tag  = typeof item === 'string' ? null : item.tag;
    const achState2 = getAchievementState();
    const checked = !!achState2[category][name];
    const div = document.createElement('div');
    div.className = 'ach-item' + (checked ? ' checked' : '');
    div.innerHTML = `<div class="ach-box">✕</div>
      <span class="ach-label">${name}${tag ? ` <span class="ach-tag">(${tag})</span>` : ''}</span>`;
    div.onclick = () => {
      const s = getAchievementState();
      if (!s[category]) s[category] = {};
      s[category][name] = !s[category][name];
      saveAchievementState(s);
      renderAchievements();
      renderHomeOptionals();
    };
    container.appendChild(div);
  }

  // Achievements
  const achList = document.getElementById('ach-achievements-list');
  achList.innerHTML = '';
  ACHIEVEMENTS_LIST.forEach(a => makeAchItem(a, 'achievements', achList));

  // Totems col2 (first 25) and col3 (last 25)
  const col2 = document.getElementById('ach-totems-col2');
  const col3 = document.getElementById('ach-totems-col3');
  col2.innerHTML = ''; col3.innerHTML = '';

  TOTEMS_LIST.forEach((t, i) => {
    const container = i < 25 ? col2 : col3;
    makeAchItem(t, 'totems', container);
  });

  // Endings (#1–#13) – read-only, set via Finish Campaign
  const endingsEl = document.getElementById('ach-endings');
  endingsEl.innerHTML = '';
  for (let i = 1; i <= 13; i++) {
    const checked = !!achState.endings[i];
    const div = document.createElement('div');
    div.className = 'ach-item readonly' + (checked ? ' checked' : '');
    div.innerHTML = `<div class="ach-box">✕</div><span class="ach-label">#${i}</span>`;
    endingsEl.appendChild(div);
  }

  // Unlocked Cards (automatic based on totems + endings count)
  const totemCount   = Object.values(achState.totems).filter(Boolean).length;
  const endingCount  = Object.values(achState.endings).filter(Boolean).length;
  const total        = totemCount + endingCount;

  const cardsEl = document.getElementById('ach-unlocked-cards');
  cardsEl.innerHTML = `<div style="font-size:.8rem;color:#7a6040;margin-bottom:8px;font-style:italic;">
    ${totemCount} totem${totemCount!==1?'s':''} + ${endingCount} ending${endingCount!==1?'s':''} = <strong>${total}</strong> total</div>`;

  UNLOCKED_CARD_THRESHOLDS.forEach(row => {
    const earned = total >= row.threshold;
    const div = document.createElement('div');
    div.className = 'unlocked-row';
    div.innerHTML = `
      <div class="unlocked-check ${earned?'earned':'locked'}">${earned?'✓':''}</div>
      <span class="unlocked-label ${earned?'':'locked-label'}">${row.label}</span>
      <span class="unlocked-threshold">${row.threshold} needed</span>`;
    cardsEl.appendChild(div);
  });
}

function getUnlockedOptionalNums() {
  const achState = getAchievementState();
  const totemCount  = Object.values(achState.totems).filter(Boolean).length;
  const endingCount = Object.values(achState.endings).filter(Boolean).length;
  const total = totemCount + endingCount;
  const unlocked = new Set();
  UNLOCKED_CARD_THRESHOLDS.forEach(row => {
    if (total >= row.threshold) row.quests.forEach(q => unlocked.add(q));
  });
  return unlocked;
}

// ═══════════════════════════════════
// KEYWORD EDITOR
// ═══════════════════════════════════
let kwEditorVisible = false;

function toggleKwEditor() {
  kwEditorVisible = !kwEditorVisible;
  const wrap = document.getElementById('kw-editor-wrap');
  const btn  = document.getElementById('kw-toggle-btn');
  wrap.style.display = kwEditorVisible ? 'block' : 'none';
  btn.textContent    = kwEditorVisible ? 'Hide Keyword List' : 'Show Keyword List';
  if (kwEditorVisible) _buildKwEditor();
}

function renderKwEditor() { /* triggered by showPanel – do nothing, list is lazy */ }

function _buildKwEditor() {
  const list=document.getElementById('kw-editor-list'); list.innerHTML='';
  for(let i=1;i<=218;i++) {
    const row=document.createElement('div'); row.className='kw-editor-row';
    const isOpt=OPTIONAL_QUEST_NUMS.has(i);
    row.innerHTML=`<span class="kw-editor-num">${i}</span>
      <input class="kw-editor-input" id="kwe-${i}" value="${questKeywords[i]||''}"
        placeholder="keyword..." ${isOpt?'style="color:#9a8060;font-style:italic;"':''}>`;
    list.appendChild(row);
  }
}

function saveKwEdits() {
  for(let i=1;i<=218;i++) {
    const inp=document.getElementById('kwe-'+i);
    if(inp && inp.value.trim()) questKeywords[i]=inp.value.trim().toUpperCase();
  }
  localStorage.setItem('sg_kw_edits', JSON.stringify(questKeywords));
  // hide after save
  kwEditorVisible=false;
  document.getElementById('kw-editor-wrap').style.display='none';
  document.getElementById('kw-toggle-btn').textContent='Show Keyword List';
  showToast('Keywords saved!', 'ok');
}

// ── Adventure card name editor ──
let advEditorVisible = false;

function toggleAdvEditor() {
  advEditorVisible = !advEditorVisible;
  const wrap = document.getElementById('adv-editor-wrap');
  const btn  = document.getElementById('adv-toggle-btn');
  wrap.style.display = advEditorVisible ? 'block' : 'none';
  btn.textContent = advEditorVisible ? 'Hide Card List' : 'Show Card List';
  if (advEditorVisible) _buildAdvEditor();
}

const ADV_TYPES_ALL = ['Animal','Equipment','Illness','Passenger','Recipe','Totem','Weapon'];

function _buildAdvEditor() {
  const list = document.getElementById('adv-editor-list'); list.innerHTML = '';
  for (let i = 1; i <= TOTAL_ADV_CARDS; i++) {
    const def = ADV_CARD_DATA[i];
    const currentTypes = getAdvTypes(i);
    const row = document.createElement('div'); row.className = 'kw-editor-row kw-editor-row--adv';
    const typeBoxes = ADV_TYPES_ALL.map(t =>
      `<label class="adve-type-chk"><input type="checkbox" name="adve-type-${i}" value="${t}"${currentTypes.includes(t)?' checked':''}> ${t}</label>`
    ).join('');
    row.innerHTML = `<span class="kw-editor-num">${i}</span>
      <div class="adve-content">
        <input class="kw-editor-input" id="adve-${i}" value="${advNameEdits[i] || def?.name || ''}"
          placeholder="${def?.name || 'Card ' + i}">
        <div class="adve-types">${typeBoxes}</div>
      </div>`;
    list.appendChild(row);
  }
}

function saveAdvEdits() {
  for (let i = 1; i <= TOTAL_ADV_CARDS; i++) {
    const inp = document.getElementById('adve-' + i);
    if (!inp) continue;
    const val = inp.value.trim();
    const defName = ADV_CARD_DATA[i]?.name || '';
    if (val && val !== defName) advNameEdits[i] = val;
    else delete advNameEdits[i];

    const checked = [...document.querySelectorAll(`input[name="adve-type-${i}"]:checked`)].map(cb => cb.value);
    const defTypes = ADV_CARD_DATA[i]?.type || [];
    const changed = checked.length !== defTypes.length || checked.some(t => !defTypes.includes(t));
    if (changed) advTypeEdits[i] = checked;
    else delete advTypeEdits[i];
  }
  localStorage.setItem('sg_adv_edits', JSON.stringify(advNameEdits));
  localStorage.setItem('sg_adv_type_edits', JSON.stringify(advTypeEdits));
  advEditorVisible = false;
  document.getElementById('adv-editor-wrap').style.display = 'none';
  document.getElementById('adv-toggle-btn').textContent = 'Show Card List';
  renderAdv();
  showToast('Card edits saved!', 'ok');
}

// ═══════════════════════════════════
// CONFIRM DIALOG
// ═══════════════════════════════════
let dlgCb=null;
function showDlg(title,body,onYes,danger=false) {
  document.getElementById('dlg-title').textContent=title;
  document.getElementById('dlg-body').textContent=body;
  document.getElementById('dlg-yes').className='btn-yes'+(danger?' danger':'');
  dlgCb=onYes;
  document.getElementById('dlg-overlay').classList.add('open');
}
function closeDlg(){document.getElementById('dlg-overlay').classList.remove('open');dlgCb=null;}
function dlgConfirm(){if(dlgCb)dlgCb();closeDlg();}

// ═══════════════════════════════════
// FINISH CAMPAIGN
// ═══════════════════════════════════
let finishData = { gold:0, artifacts:0, ending:false };

function openFinishCampaign() {
  if (!state) { alert('No active campaign.'); return; }
  finishData = { gold:0, artifacts:0, ending:false };
  document.getElementById('finish-gold').textContent='0';
  document.getElementById('finish-artifacts').textContent='0';
  setFinishEnding(false);
  document.getElementById('finish-overlay').classList.add('open');
}
function closeFinish() {
  document.getElementById('finish-overlay').classList.remove('open');
}

function changeFinish(field, delta) {
  finishData[field] = Math.max(0, (finishData[field]||0) + delta);
  document.getElementById('finish-'+field).textContent = finishData[field];
}

function setFinishEnding(val) {
  finishData.ending = val;
  document.getElementById('finish-ending-yes').classList.toggle('active',  val);
  document.getElementById('finish-ending-no').classList.toggle('active',  !val);
}

function calculateScore() {
  if (finishData.ending) {
    closeFinish();
    openEndingPicker();
    return;
  }
  doFinish();
}

function openEndingPicker() {
  const achState = getAchievementState();
  const grid = document.getElementById('ending-picker-grid');
  grid.innerHTML = '';
  for (let i = 1; i <= 13; i++) {
    const alreadySeen = !!achState.endings[i];
    const btn = document.createElement('button');
    btn.className = 'ending-pick-btn' + (alreadySeen ? ' seen' : '');
    btn.textContent = '#' + i;
    btn.onclick = () => pickEnding(i);
    grid.appendChild(btn);
  }
  document.getElementById('ending-picker-overlay').classList.add('open');
}

function pickEnding(num) {
  document.getElementById('ending-picker-overlay').classList.remove('open');
  if (num !== null) {
    const s = getAchievementState();
    s.endings[num] = true;
    saveAchievementState(s);
  }
  doFinish();
}

function doFinish() {
  closeFinish();
  const log = state.log;

  // Adventure cards: 2pt each, +2 if totem
  const advCards   = state.adventureCards || [];
  const advScore   = advCards.reduce((s,c) => s + 2 + (c.totem ? 2 : 0), 0);

  // Quest cards (active + completed, not discarded, not optional): 1pt each
  const questCount = [...state.activeQuests, ...state.completedQuests]
    .filter(q => !OPTIONAL_QUEST_NUMS.has(q.num)).length;
  const questScore = questCount;

  // Crew levels: 2pt per level per member
  const levelScore = CREW_MEMBERS.reduce((s,name) => s + 2*(log.crewLevel[name]||0), 0);

  // Gold: 1pt per 2 gold (floor)
  const goldScore  = Math.floor((finishData.gold||0) / 2);

  // Artifacts: 1pt each
  const artScore   = finishData.artifacts||0;

  // Ending: 10pt
  const endScore   = finishData.ending ? 10 : 0;

  // Defeats: -10pt each
  const defeatCount = (log.defeats||[]).filter(Boolean).length;
  const defeatScore = -10 * defeatCount;

  // Brutal mode bonus: 25pt
  const brutalScore = log.difficulty==='Brutal' ? 25 : 0;

  // Optional rule bonuses: 15pt each if active (used whole campaign)
  const OPTIONAL_BONUS = { 168: 15, 169: 15, 173: 15 };
  const activeOptNums = new Set((state.activeOptional||[]).map(q=>q.num));
  let optBonusScore = 0;
  const optBonusLines = [];
  for (const [num, pts] of Object.entries(OPTIONAL_BONUS)) {
    if (activeOptNums.has(parseInt(num))) {
      optBonusScore += pts;
      optBonusLines.push(`Quest ${num} (${questKeywords[parseInt(num)]||'Optional'}):   +${pts}`);
    }
  }

  const total = advScore + questScore + levelScore + goldScore + artScore
              + endScore + defeatScore + brutalScore + optBonusScore;

  const lines = [
    `Adventure Cards (${advCards.length}):   +${advScore}`,
    `Quest Cards (${questCount}):   +${questScore}`,
    `Crew Levels:   +${levelScore}`,
    `Gold (${finishData.gold}):   +${goldScore}`,
    `Artifacts (${finishData.artifacts}):   +${artScore}`,
    finishData.ending ? `Reached an Ending:   +10` : `No Ending:   +0`,
    defeatCount ? `Defeats (${defeatCount}):   ${defeatScore}` : null,
    log.difficulty==='Brutal' ? `Brutal Mode:   +25` : null,
    ...optBonusLines,
  ].filter(Boolean);

  document.getElementById('score-total').textContent = total;
  document.getElementById('score-breakdown').innerHTML =
    lines.map(l=>`<div>${l}</div>`).join('');

  state.log.finalScore = total;
  state.log.dateEnd = new Date().toISOString().split('T')[0];
  save();

  document.getElementById('score-overlay').classList.add('open');
}

function closeScore() {
  document.getElementById('score-overlay').classList.remove('open');
}

// ═══════════════════════════════════
// DATA MANAGEMENT – EXPORT / IMPORT / CLEAR
// ═══════════════════════════════════
function exportData() {
  const backup = {
    version: 1,
    exported: new Date().toISOString(),
    sg_state:        localStorage.getItem('sg_state'),
    sg_achievements: localStorage.getItem('sg_achievements'),
    sg_leaderboard:  localStorage.getItem('sg_leaderboard'),
    sg_kw_edits:     localStorage.getItem('sg_kw_edits'),
    sg_adv_edits:      localStorage.getItem('sg_adv_edits'),
    sg_adv_type_edits: localStorage.getItem('sg_adv_type_edits'),
  };
  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href = url; a.download = `sleeping-gods-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  localStorage.setItem('sg_last_export', new Date().toISOString());
  showToast('Backup exported!', 'ok');
}

function importData(event) {
  const file = event.target.files[0];
  const fb = document.getElementById('import-feedback');
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const backup = JSON.parse(e.target.result);
      if (!backup.version) throw new Error('Invalid backup file');
      if (backup.sg_state)        localStorage.setItem('sg_state',        backup.sg_state);
      if (backup.sg_achievements) localStorage.setItem('sg_achievements', backup.sg_achievements);
      if (backup.sg_leaderboard)  localStorage.setItem('sg_leaderboard',  backup.sg_leaderboard);
      if (backup.sg_kw_edits)     localStorage.setItem('sg_kw_edits',     backup.sg_kw_edits);
      if (backup.sg_adv_edits)      localStorage.setItem('sg_adv_edits',      backup.sg_adv_edits);
      if (backup.sg_adv_type_edits) localStorage.setItem('sg_adv_type_edits', backup.sg_adv_type_edits);
      fb.className = 'import-feedback ok';
      fb.textContent = `✓ Backup from ${backup.exported?.split('T')[0]||'unknown date'} imported! Reloading…`;
      setTimeout(() => location.reload(), 1200);
    } catch(err) {
      fb.className = 'import-feedback err';
      fb.textContent = '✕ Invalid backup file. No changes made.';
    }
  };
  reader.readAsText(file);
  // Reset input so same file can be re-selected
  event.target.value = '';
}

function clearMapData() {
  showDlg('Clear Map Notes',
    'Delete all map keywords and notes? Quest progress is kept.',
    () => {
      if (state) { state.locations = {}; save(); }
      if (window.placePins) placePins();
    }, true);
}

function clearLeaderboard() {
  showDlg('Clear Leaderboard',
    'Delete all leaderboard entries permanently?',
    () => {
      leaderboard = [];
      localStorage.setItem('sg_leaderboard', '[]');
      renderLeaderboard();
    }, true);
}

function clearAchievements() {
  showDlg('Clear Achievements',
    'Delete all achievements, totems, endings, and unlocked cards permanently?',
    () => {
      localStorage.removeItem('sg_achievements');
      renderAchievements();
      renderHomeOptionals();
    }, true);
}

function clearEverything() {
  showDlg('☠ Clear Everything',
    'Delete ALL saved data – campaign, map, achievements, leaderboard, and keywords? This cannot be undone.',
    () => {
      ['sg_state','sg_achievements','sg_leaderboard','sg_kw_edits','sg_adv_edits','sg_adv_type_edits'].forEach(k => localStorage.removeItem(k));
      setTimeout(() => location.reload(), 300);
    }, true);
}

function saveScoreAndGoHome() {
  campaignActive = false;
  // Save to leaderboard
  const entry = {
    players   : state.log.players || 'Unknown',
    date      : state.log.dateEnd || new Date().toISOString().split('T')[0],
    score     : state.log.finalScore || 0,
    difficulty: state.log.difficulty || 'Normal',
  };
  leaderboard.push(entry);
  leaderboard.sort((a,b) => b.score - a.score);
  localStorage.setItem('sg_leaderboard', JSON.stringify(leaderboard));

  // Mark campaign as finished so next load shows home screen
  state.campaignFinished = true;
  save();

  closeScore();
  musicStop();
  goHome();
}

function cancelCampaign() {
  // Close the Finish Campaign dialog first so the confirm doesn't stack under it
  closeFinish();
  showDlg(
    'Cancel Campaign',
    'Cancel this campaign? Quest and card progress will be lost. Map data is kept. No score will be recorded.',
    () => {
      const prevLocations = state ? state.locations : {};
      state = defaultState();
      state.locations = prevLocations;
      state.campaignFinished = true;
      save();
      campaignActive = false;
      musicStop();
      goHome();
    }, true
  );
}

// ═══════════════════════════════════
// HOME SCREEN
// ═══════════════════════════════════
function goHome() {
  document.getElementById('panel-home').classList.remove('hidden');
  const continueBtn = document.getElementById('btn-continue');
  if (continueBtn) continueBtn.disabled = !campaignActive;
  renderCampaignInfo();
  renderLeaderboard();
  renderHomeOptionals();
  releaseWakeLock();
}

function renderCampaignInfo() {
  const el = document.getElementById('campaign-info');
  if (!el) return;
  if (!campaignActive || !state || !state.log.dateStart) {
    el.textContent = '';
    el.style.display = 'none';
    return;
  }
  const start  = state.log.dateStart;
  const diff   = state.log.difficulty || 'Normal';
  const quests = (state.activeQuests?.length || 0) + (state.completedQuests?.length || 0);
  const players = state.log.players ? ` · ${state.log.players}` : '';
  el.textContent = `${start} · ${diff}${players} · ${quests} quest${quests !== 1 ? 's' : ''}`;
  el.style.display = '';
}

function hideHome() {
  document.getElementById('panel-home').classList.add('hidden');
}

function renderLeaderboard() {
  const el = document.getElementById('leaderboard-list');
  if (!leaderboard.length) {
    el.innerHTML = '<div class="lb-empty">No completed campaigns yet.</div>';
    return;
  }
  el.innerHTML = leaderboard.slice(0,10).map((e,i) => `
    <div class="lb-row">
      <span class="lb-rank">${i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'.'}  </span>
      <div style="flex:1;">
        <div class="lb-names">${e.players}</div>
        <div class="lb-mode">${e.difficulty} · ${e.date}</div>
      </div>
      <span class="lb-score">${e.score}</span>
    </div>`).join('');
}

// Optional rules that can be selected at campaign start
const OPTIONAL_RULE_DEFS = [
  { num: 168, label: 'Deadly Combat' },
  { num: 169, label: 'Expert Port' },
  { num: 170, label: 'Expert Port Card' },
  { num: 171, label: 'Cargo Bay' },
  { num: 172, label: 'Cargo Bay Card' },
  { num: 173, label: 'Advanced Ability Cards' },
  { num: 174, label: 'Dynamite (Optional Item)' },
  { num: 175, label: 'Advanced Market' },
  { num: 176, label: 'Heroics Track Card' },
  { num: 177, label: 'Heroics Card' },
  { num: 178, label: 'Advanced Search' },
  { num: 179, label: 'Advanced Search Card – Cautiously' },
  { num: 180, label: 'Advanced Search Card – Aggressively' },
];

// Track which optional rules are checked on home screen
let selectedOptionals = new Set();

function renderHomeOptionals() {
  const grid = document.getElementById('home-opt-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const unlocked = getUnlockedOptionalNums();

  OPTIONAL_RULE_DEFS.forEach(def => {
    const isUnlocked = unlocked.has(def.num);
    const row = document.createElement('div');
    row.className = 'home-opt-row' + (selectedOptionals.has(def.num) && isUnlocked ? ' checked' : '');
    row.dataset.num = def.num;

    const lockIcon = isUnlocked ? '' : ' 🔒';
    row.innerHTML = `
      <div class="home-opt-check">${isUnlocked ? '✓' : ''}</div>
      <span class="home-opt-label" style="${isUnlocked?'':'color:#7a6060;font-style:italic;'}">${lockIcon} Q${def.num} – ${def.label}</span>`;

    if (isUnlocked) {
      row.onclick = () => {
        const checked = row.classList.toggle('checked');
        if (checked) selectedOptionals.add(def.num);
        else selectedOptionals.delete(def.num);
      };
    }
    grid.appendChild(row);
  });
}

function startNewCampaign() {
  const today = new Date().toISOString().split('T')[0];
  const prevLocations = state ? state.locations : {};
  state = defaultState();
  state.locations = prevLocations;
  state.log.dateStart = today;

  // Add selected optional rules as active
  selectedOptionals.forEach(num => {
    state.activeQuests.push({ num });
    state.unlockedNums.push(num);
    if (!state.activeOptional) state.activeOptional = [];
    state.activeOptional.push({ num });
  });

  save();
  campaignActive = true;
  hideHome();
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelector('.nav-tab').classList.add('active');
  showPanel('map', document.querySelector('.nav-tab'));
  updateOptTab();
  musicStartExploration();
  requestWakeLock();
}

function continueCampaign() {
  if (!campaignActive) {
    alert('No active campaign found. Start a new one!');
    return;
  }
  hideHome();
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelector('.nav-tab').classList.add('active');
  showPanel('map', document.querySelector('.nav-tab'));
  musicStartExploration();
  requestWakeLock();
}

// ═══════════════════════════════════
// XP – fixed add button
// ═══════════════════════════════════
function renderXP() {
  const area = document.getElementById('xp-area'); area.innerHTML='';
  const xpList = state.log.xp || [];
  const unspent = xpList.filter(x=>!x).length;
  const counter = document.getElementById('xp-counter');
  if(counter) counter.textContent = unspent + ' unspent';

  xpList.forEach((spent,i) => {
    const b=document.createElement('div');
    b.className='xp-box'+(spent?' spent':'');
    b.textContent=spent?'✕':'';
    b.title=spent?'Spent – click to unspend':'Click to mark as spent';
    b.onclick=()=>{state.log.xp[i]=!state.log.xp[i];save();renderXP();};
    area.appendChild(b);
  });
}

function addXP() {
  if(!state.log.xp) state.log.xp=[];
  state.log.xp.push(false);
  save(); renderXP();
  // update counter
  const unspent = state.log.xp.filter(x=>!x).length;
  const counter = document.getElementById('xp-counter');
  if(counter) counter.textContent = unspent + ' unspent';
}

// ═══════════════════════════════════
// TOAST NOTIFICATIONS
// ═══════════════════════════════════
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ═══════════════════════════════════
// NAV BADGES
// ═══════════════════════════════════
const SHIP_MAX_DAMAGE = 11; // sum of all room max values (1+2+2+2+2+2)

function updateNavBadges() {
  const badge = document.getElementById('badge-log');
  if (!badge || !state) return;
  const dmg = Object.values(state.log.shipDamage || {}).reduce((a, b) => a + b, 0);
  if (dmg > 0) {
    badge.textContent = `${dmg}/${SHIP_MAX_DAMAGE}`;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

// ═══════════════════════════════════
// MAP – JUMP TO LOCATION
// ═══════════════════════════════════
function jumpToLocation(val) {
  const raw = String(val || '').trim().toUpperCase();
  if (!raw) return;
  const loc = LOCATIONS_DEF.find(l => l.id.toUpperCase() === raw);
  if (!loc) { showToast(`Location ${raw} not found`, 'warn'); return; }
  const id = loc.id;
  const img = document.getElementById('map-img');
  const container = document.getElementById('map-container');
  if (mapScale < 1.5) {
    mapScale = 1.5;
    img.style.width = (img.naturalWidth * mapScale) + 'px';
    if (window.placePins) window.placePins();
  }
  const x = loc.x / 100 * img.offsetWidth;
  const y = loc.y / 100 * img.offsetHeight;
  container.scrollLeft = x - container.offsetWidth / 2;
  container.scrollTop  = y - container.offsetHeight / 2;
  const pin = document.querySelector(`.loc-pin[data-id="${id}"]`);
  if (pin) {
    pin.classList.add('jump-flash');
    setTimeout(() => pin.classList.remove('jump-flash'), 1600);
  }
  document.getElementById('map-jump-input').value = '';
}

// ═══════════════════════════════════
// DUNGEON STATUS
// ═══════════════════════════════════
let currentDungeonLocId = null;

function updateDungeonExploredBtn(locId) {
  const btn = document.getElementById('dv-explored-btn');
  if (!btn) return;
  const status = state.dungeonStatus?.[locId];
  if (!status) {
    btn.textContent = '○ Mark Explored';
    btn.className = 'dv-explored-btn';
  } else if (status === 'explored') {
    btn.textContent = '◎ Explored';
    btn.className = 'dv-explored-btn explored';
  } else {
    btn.textContent = '✓ Cleared';
    btn.className = 'dv-explored-btn cleared';
  }
}

function toggleDungeonExplored() {
  if (!currentDungeonLocId) return;
  const cur = state.dungeonStatus[currentDungeonLocId];
  if (!cur) state.dungeonStatus[currentDungeonLocId] = 'explored';
  else if (cur === 'explored') state.dungeonStatus[currentDungeonLocId] = 'cleared';
  else delete state.dungeonStatus[currentDungeonLocId];
  save();
  updateDungeonExploredBtn(currentDungeonLocId);
  if (window.placePins) window.placePins();
}

// ═══════════════════════════════════
// SESSION NOTES
// ═══════════════════════════════════
function addSessionNote() {
  const dateEl = document.getElementById('session-date');
  const noteEl = document.getElementById('session-note');
  if (!dateEl || !noteEl) return;
  const date = dateEl.value || new Date().toISOString().split('T')[0];
  const note = noteEl.value.trim();
  if (!note) return;
  if (!state.log.sessions) state.log.sessions = [];
  state.log.sessions.unshift({ date, note });
  save();
  noteEl.value = '';
  renderSessionNotes();
}

function deleteSessionNote(idx) {
  if (!state.log.sessions) return;
  state.log.sessions.splice(idx, 1);
  save();
  renderSessionNotes();
}

function renderSessionNotes() {
  const list = document.getElementById('session-list');
  if (!list) return;
  const sessions = state.log.sessions || [];
  if (!sessions.length) {
    list.innerHTML = '<div class="empty-state">No session notes yet</div>';
    return;
  }
  list.innerHTML = sessions.map((s, i) => `
    <div class="session-entry">
      <div class="session-header">
        <span class="session-date">${s.date}</span>
        <button class="session-del" onclick="deleteSessionNote(${i})">✕</button>
      </div>
      <div class="session-note-text">${s.note.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
    </div>`).join('');
}

// ═══════════════════════════════════
// CAMPAIGN SUMMARY
// ═══════════════════════════════════
function copyCampaignSummary() {
  const total     = document.getElementById('score-total')?.textContent || '0';
  const lines     = [...(document.getElementById('score-breakdown')?.querySelectorAll('div') || [])].map(l => '  ' + l.textContent);
  const players   = state.log.players || 'Unknown';
  const diff      = state.log.difficulty || 'Normal';
  const start     = state.log.dateStart || '?';
  const end       = state.log.dateEnd || new Date().toISOString().split('T')[0];
  const quests    = (state.activeQuests?.length || 0) + (state.completedQuests?.length || 0);
  const adv       = state.adventureCards?.length || 0;

  const text = [
    '⚓ Sleeping Gods – Campaign Complete!',
    `Players: ${players}`,
    `Difficulty: ${diff}`,
    `${start} → ${end}`,
    `Quests: ${quests}  |  Adventure cards: ${adv}`,
    '',
    `Final Score: ${total}`,
    ...lines,
  ].join('\n');

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast('Summary copied!', 'ok'),
      () => showToast('Copy failed – try long-pressing', 'warn')
    );
  } else {
    showToast('Clipboard not available', 'warn');
  }
}

// ═══════════════════════════════════
// WAKE LOCK
// ═══════════════════════════════════
let wakeLock = null;
let wakeLockEnabled = localStorage.getItem('sg_wakelock') === 'true';
let autoplayEnabled = localStorage.getItem('sg_autoplay') !== 'false'; // on by default

async function requestWakeLock() {
  if (!wakeLockEnabled || !('wakeLock' in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => { wakeLock = null; });
  } catch(e) {}
}

function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

function toggleWakeLock(btn) {
  wakeLockEnabled = !wakeLockEnabled;
  localStorage.setItem('sg_wakelock', wakeLockEnabled ? 'true' : 'false');
  updateWakeLockUI();
  if (wakeLockEnabled && campaignActive) requestWakeLock();
  else releaseWakeLock();
}

function updateWakeLockUI() {
  const btn = document.getElementById('btn-wakelock');
  if (!btn) return;
  btn.classList.toggle('active', wakeLockEnabled);
  btn.innerHTML = wakeLockEnabled ? '&#128262; Keep Screen Awake: On' : '&#128261; Keep Screen Awake: Off';
}

function toggleAutoplay(btn) {
  autoplayEnabled = !autoplayEnabled;
  localStorage.setItem('sg_autoplay', autoplayEnabled ? 'true' : 'false');
  updateAutoplayUI();
}

function updateAutoplayUI() {
  const btn = document.getElementById('btn-autoplay');
  if (!btn) return;
  btn.classList.toggle('active', autoplayEnabled);
  btn.innerHTML = autoplayEnabled ? '&#127925; Autoplay Music: On' : '&#127925; Autoplay Music: Off';
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && wakeLockEnabled && campaignActive && !wakeLock) {
    requestWakeLock();
  }
});

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
// Always show home screen first; Continue Campaign is enabled when a real campaign exists
if (!state) {
  state = defaultState();
}
goHome();

initMap();
initLogListeners();
updateOptTab();
applyTheme(localStorage.getItem('sg_theme') || 'system');
updateUndoUI();
updateWakeLockUI();
updateAutoplayUI();
updateNavBadges();
initGestures();

function updateNavHeight() {
  const h = document.getElementById('nav').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--nav-h', Math.ceil(h) + 'px');
}
updateNavHeight();
window.addEventListener('resize', updateNavHeight);

// Backup reminder – warn if no export in 7+ days during an active campaign
const _lastExport = localStorage.getItem('sg_last_export');
if (campaignActive && _lastExport) {
  const _daysSince = Math.floor((Date.now() - new Date(_lastExport)) / 86400000);
  if (_daysSince >= 7) {
    setTimeout(() => showToast(`Last backup was ${_daysSince} days ago – consider exporting`, 'warn'), 1500);
  }
}

if (!state.log.dateStart) {
  state.log.dateStart = new Date().toISOString().split('T')[0];
  save();
}
// ═══════════════════════════════════
// GESTURES – swipe between tabs & pinch-to-zoom on map
// ═══════════════════════════════════
function initGestures() {
  // Swipe left/right on non-map panels to switch tabs
  let swipeStartX = 0, swipeStartY = 0;
  document.querySelectorAll('.panel:not(#panel-map)').forEach(panel => {
    panel.addEventListener('touchstart', e => {
      swipeStartX = e.touches[0].clientX;
      swipeStartY = e.touches[0].clientY;
    }, { passive: true });
    panel.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - swipeStartX;
      const dy = e.changedTouches[0].clientY - swipeStartY;
      if (Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
      const tabs = [...document.querySelectorAll('.nav-tab')].filter(t => t.style.display !== 'none');
      const active = document.querySelector('.nav-tab.active');
      const idx = tabs.indexOf(active);
      const target = dx < 0 ? tabs[idx + 1] : tabs[idx - 1];
      if (target) target.click();
    }, { passive: true });
  });

  // Pinch-to-zoom on map
  let pinchDist = null, pinchScale = 1;
  const mapCon = document.getElementById('map-container');
  mapCon.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      pinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchScale = mapScale;
    }
  }, { passive: true });
  mapCon.addEventListener('touchmove', e => {
    if (e.touches.length !== 2 || !pinchDist) return;
    e.preventDefault();
    const dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    mapScale = Math.min(Math.max(pinchScale * dist / pinchDist, 0.4), 4);
    const img = document.getElementById('map-img');
    img.style.width = (img.naturalWidth * mapScale) + 'px';
  }, { passive: false });
  mapCon.addEventListener('touchend', e => {
    if (e.touches.length < 2) {
      pinchDist = null;
      if (window.placePins) window.placePins();
    }
  }, { passive: true });
}

// ═══════════════════════════════════
// MUSIC PLAYER
// ═══════════════════════════════════
const MUSIC_EXT = 'ogg';

const MUSIC_EXPLORATION_SLUGS = [
  'islands-at-the-edge-of-the-world',
  'manticore-at-rest',
  'sofis-map',
  'the-shore-beyond-the-storm',
  'the-wandering-sea',
  'uncharted-waters',
];

const MUSIC_DUNGEON_SLUGS = {
  'Crypt of Thorns':    'crypt-of-thorns',
  'Blood Ruins':        'blood-ruins',
  'Caldera Fortress':   'caldera-fortress',
  'Fishbone Vault':     'fishbone-vault',
  'Coral Temple':       'coral-temple',
  'Desert Grotto':      'desert-grotto',
  'Generic':            'generic',
};

let musicTracks = { exploration: [], dungeon: {} }; // populated by musicInit()

const musicAudio = new Audio();
musicAudio.volume = 0.4;

let music = {
  playing: false,
  muted: false,
  mode: 'atlas',       // 'atlas' | 'dungeon'
  currentSlug: null,
  playlist: [],
  idx: 0,
  isIntro: false,
  pendingStart: false,
};

async function musicScanVariants(prefix) {
  const variants = 'abcde'.split('');
  const results = await Promise.all(
    variants.map(v => {
      const url = `music/${prefix}-${v}.${MUSIC_EXT}`;
      return fetch(url, { method: 'HEAD' }).then(r => r.ok ? url : null).catch(() => null);
    })
  );
  const found = [];
  for (const url of results) {
    if (url === null) break;
    found.push(url);
  }
  return found;
}

let musicInitPromise = null;

async function musicInit() {
  const dungeonEntries = Object.entries(MUSIC_DUNGEON_SLUGS);

  const [explorationResults, dungeonResults] = await Promise.all([
    Promise.all(MUSIC_EXPLORATION_SLUGS.map(slug => musicScanVariants(`exploration-${slug}`))),
    Promise.all(dungeonEntries.map(([, slug]) => musicScanVariants(`dungeon-${slug}`))),
  ]);

  musicTracks.exploration = explorationResults.flat();
  dungeonEntries.forEach(([, slug], i) => { musicTracks.dungeon[slug] = dungeonResults[i]; });

  musicBuildAtlasPlaylist();

  if (music.pendingStart && !music.playing) {
    music.pendingStart = false;
    musicLoadCurrent();
    musicAudio.play().catch(() => {});
    music.playing = true;
  }

  musicUpdateUI();
}

function musicShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function musicBuildAtlasPlaylist() {
  music.playlist = musicShuffle(musicTracks.exploration);
  music.idx = 0;
}

function musicBuildDungeonPlaylist(slug) {
  const specific = musicTracks.dungeon[slug] || [];
  const allDungeon = Object.values(musicTracks.dungeon).flat();
  const others = musicShuffle(allDungeon.filter(t => !specific.includes(t)));
  music.playlist = [...specific, ...others];
  music.idx = 0;
}

function musicLoadCurrent() {
  if (!music.playlist.length) return;
  musicAudio.src = music.playlist[music.idx];
}

function musicStart() {
  if (music.playing) return;
  if (!musicAudio.src || musicAudio.src === window.location.href) musicLoadCurrent();
  musicAudio.play().catch(() => {});
  music.playing = true;
  musicUpdateUI();
}

function musicToggle() {
  if (music.playing) {
    musicAudio.pause();
    music.playing = false;
    music.isIntro = false;
  } else {
    if (!musicAudio.src || musicAudio.src === window.location.href) musicLoadCurrent();
    musicAudio.play().catch(() => {});
    music.playing = true;
  }
  musicUpdateUI();
}

function musicToggleHome() {
  const btn = document.getElementById('home-music-btn');
  if (music.playing) {
    musicAudio.pause();
    music.playing = false;
    music.isIntro = false;
    if (btn) btn.innerHTML = '&#9654; Intro Music';
    musicUpdateUI();
    return;
  }
  musicAudio.src = 'music/wake-the-sleeping-gods.ogg';
  musicAudio.play().catch(() => {});
  music.playing = true;
  music.isIntro = true;
  if (btn) btn.innerHTML = '&#9646;&#9646; Pause';
  musicUpdateUI();
}

function musicStop() {
  musicAudio.pause();
  musicAudio.src = '';
  music.playing = false;
  music.isIntro = false;
  music.pendingStart = false;
  const btn = document.getElementById('home-music-btn');
  if (btn) btn.innerHTML = '&#9654; Intro Music';
  musicUpdateUI();
}

async function musicStartExploration() {
  music.isIntro = false;
  const btn = document.getElementById('home-music-btn');
  if (btn) btn.innerHTML = '&#9654; Intro Music';
  if (!autoplayEnabled) return;
  if (!musicTracks.exploration.length) {
    // musicInit() still scanning – await it (still within browser user-gesture window)
    music.pendingStart = true;
    await musicInitPromise;
    music.pendingStart = false;
    if (music.playing) return;
  }
  musicBuildAtlasPlaylist();
  musicLoadCurrent();
  musicAudio.play().catch(() => {});
  music.playing = true;
  musicUpdateUI();
}

function musicNext() {
  if (!music.playlist.length) return;
  music.idx = (music.idx + 1) % music.playlist.length;
  musicLoadCurrent();
  if (music.playing) musicAudio.play().catch(() => {});
}

function musicToggleMute() {
  music.muted = !music.muted;
  musicAudio.muted = music.muted;
  musicUpdateUI();
}

function musicEnterDungeon(dungeonName) {
  const slug = MUSIC_DUNGEON_SLUGS[dungeonName];
  if (!slug || !(musicTracks.dungeon[slug]?.length)) return;
  music.mode = 'dungeon';
  music.currentSlug = slug;
  musicBuildDungeonPlaylist(slug);
  if (music.playing) { musicLoadCurrent(); musicAudio.play().catch(() => {}); }
  musicUpdateUI();
}

function musicExitDungeon() {
  music.mode = 'atlas';
  music.currentSlug = null;
  musicBuildAtlasPlaylist();
  if (music.playing) { musicLoadCurrent(); musicAudio.play().catch(() => {}); }
  musicUpdateUI();
}

musicAudio.addEventListener('ended', () => {
  if (music.isIntro) {
    music.isIntro = false;
    music.playing = false;
    const btn = document.getElementById('home-music-btn');
    if (btn) btn.innerHTML = '&#9654; Intro Music';
    musicUpdateUI();
    return;
  }
  if (!music.playlist.length) return;
  music.idx = (music.idx + 1) % music.playlist.length;
  musicLoadCurrent();
  musicAudio.play().catch(() => {});
});

function musicUpdateUI() {
  const playIcon  = music.playing ? '&#9646;&#9646;' : '&#9654;';
  const playTitle = music.playing ? 'Pause music' : 'Play music';
  const muteIcon  = music.muted  ? '&#128263;' : '&#128266;';
  const muteTitle = music.muted  ? 'Unmute' : 'Mute';

  // Nav bar controls
  const playBtn = document.getElementById('music-btn-play');
  const muteBtn = document.getElementById('music-btn-mute');
  const modeIcon = document.getElementById('music-mode-icon');
  if (playBtn) { playBtn.innerHTML = playIcon; playBtn.title = playTitle; playBtn.classList.toggle('active', music.playing); }
  if (muteBtn) { muteBtn.innerHTML = muteIcon; muteBtn.title = muteTitle; muteBtn.classList.toggle('muted', music.muted); }
  if (modeIcon) { modeIcon.textContent = music.mode === 'dungeon' ? '☠' : '⚓'; modeIcon.title = music.mode === 'dungeon' ? 'Dungeon music' : 'Atlas music'; }

  // Dungeon viewer controls
  const dvPlay = document.getElementById('dv-music-btn-play');
  const dvMute = document.getElementById('dv-music-btn-mute');
  if (dvPlay) { dvPlay.innerHTML = playIcon; dvPlay.title = playTitle; dvPlay.classList.toggle('active', music.playing); }
  if (dvMute) { dvMute.innerHTML = muteIcon; dvMute.title = muteTitle; dvMute.classList.toggle('muted', music.muted); }
}

musicInitPromise = musicInit();

// ═══════════════════════════════════
// SERVICE WORKER REGISTRATION
// ═══════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.log('SW registration failed:', err));
  });
}
