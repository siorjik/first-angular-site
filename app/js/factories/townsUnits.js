app.factory("units", function() {
	var units = [
		{
			id: 1,
			town: "main.castle",
			warUnitStart: [
				{
					id: 1,
					name: "warriors.castle.spearman",
					health: "10",
					attack: "4",
					protection: "5",
					damage: "1-3",
					speed: "4",
					price: "60",
					src: "app/img/units/castle/spearman.gif",
					descript: "warriors.castle.spearmanDesc" 
				},
				{
					id: 2,
					name: "warriors.castle.сrossbowman",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "4",
					price: "100",
					src: "app/img/units/castle/crossbowman.gif",
					descript: "warriors.castle.сrossbowmanDesc"
				},
				{
					id: 3,
					name: "warriors.castle.griffin",
					health: "25",
					attack: "8",
					protection: "8",
					damage: "3-6",
					speed: "6",
					price: "200",
					src: "app/img/units/castle/griffin.gif",
					descript: "warriors.castle.griffinDesc"
				},
				{
					id: 4,
					name: "warriors.castle.knight",
					health: "35",
					attack: "10",
					protection: "12",
					damage: "6-9",
					speed: "5",
					price: "300",
					src: "app/img/units/castle/knight.gif",
					descript: "warriors.castle.knightDesc"
				},
				{
					id: 5,
					name: "warriors.castle.monk",
					health: "30",
					attack: "12",
					protection: "7",
					damage: "10-12",
					speed: "5",
					price: "400",
					src: "app/img/units/castle/monk.gif",
					descript: "warriors.castle.monkDesc"
				},
				{
					id: 6,
					name: "warriors.castle.сavalryman",
					health: "100",
					attack: "15",
					protection: "15",
					damage: "15-25",
					speed: "7",
					price: "1000",
					src: "app/img/units/castle/cavalryman.gif",
					descript: "warriors.castle.cavalrymanDesc"
				},
				{
					id: 7,
					name: "warriors.castle.angel",
					health: "200",
					attack: "20",
					protection: "20",
					damage: "50",
					speed: "12",
					price: "3000 and 1 gem",
					src: "app/img/units/castle/angel.gif",
					descript: "warriors.castle.angelDesc"
				}
			],
			warUnitUp: [
				{
					id: 1,
					name: "warriors.castle.halberdier",
					health: "10",
					attack: "6",
					protection: "5",
					damage: "2-3",
					speed: "5",
					price: "75",
					src: "app/img/units/castle/halberdier.gif",
					descript: "warriors.castle.halberdierDesc"
				},
				{
					id: 2,
					name: "warriors.castle.shooter",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "6",
					price: "150",
					src: "app/img/units/castle/shooter.gif",
					descript: "warriors.castle.shooterDesc"
				},
				{
					id: 3,
					name: "warriors.castle.royalGriffin",
					health: "25",
					attack: "9",
					protection: "9",
					damage: "3-6",
					speed: "9",
					price: "240",
					src: "app/img/units/castle/royal_griffin.gif",
					descript: "warriors.castle.royalGriffinDesc"
				},
				{
					id: 4,
					name: "warriors.castle.crusader",
					health: "35",
					attack: "12",
					protection: "12",
					damage: "7-10",
					speed: "6",
					price: "400",
					src: "app/img/units/castle/crusader.gif",
					descript: "warriors.castle.crusaderDesc"
				},
				{
					id: 5,
					name: "warriors.castle.fanatic",
					health: "30",
					attack: "12",
					protection: "10",
					damage: "10-12",
					speed: "7",
					price: "450",
					src: "app/img/units/castle/fanatic.gif",
					descript: "warriors.castle.fanaticDesc"
				},
				{
					id: 6,
					name: "warriors.castle.сhampion",
					health: "100",
					attack: "16",
					protection: "16",
					damage: "20-25",
					speed: "9",
					price: "1200",
					src: "app/img/units/castle/champion.gif",
					descript: "warriors.castle.championDesc"
				},
				{
					id: 7,
					name: "warriors.castle.archangel",
					health: "250",
					attack: "30",
					protection: "30",
					damage: "50",
					speed: "18",
					price: "5000 and 3 gem",
					src: "app/img/units/castle/archangel.gif",
					descript: "warriors.castle.archangelDesc"
				}
			] 
		},
		{
			id: 2,
			town: "main.rampart",
			warUnitStart: [
				{
					id: 1,
					name: "warriors.rampart.сentaur",
					health: "8",
					attack: "5",
					protection: "3",
					damage: "2-3",
					speed: "6",
					price: "70",
					src: "app/img/units/rampart/centaur.gif",
					descript: "warriors.rampart.centaurDesc"
				},
				{
					id: 2,
					name: "warriors.rampart.gnome",
					health: "20",
					attack: "6",
					protection: "7",
					damage: "2-4",
					speed: "3",
					price: "120",
					src: "app/img/units/rampart/gnome.gif",
					descript: "warriors.rampart.gnomeDesc"
				},
				{
					id: 3,
					name: "warriors.rampart.elf",
					health: "15",
					attack: "9",
					protection: "5",
					damage: "3-5",
					speed: "6",
					price: "200",
					src: "app/img/units/rampart/elf.gif",
					descript: "warriors.rampart.elfDesc"
				},
				{
					id: 4,
					name: "warriors.rampart.pegasus",
					health: "30",
					attack: "9",
					protection: "8",
					damage: "5-9",
					speed: "8",
					price: "250",
					src: "app/img/units/rampart/pegasus.gif",
					descript: "warriors.rampart.pegasusDesc"
				},
				{
					id: 5,
					name: "warriors.rampart.guardDendroid",
					health: "55",
					attack: "9",
					protection: "12",
					damage: "10-14",
					speed: "3",
					price: "350",
					src: "app/img/units/rampart/guardian_dendroid.gif",
					descript: "warriors.rampart.guardDendroidDesc"
				},
				{
					id: 6,
					name: "warriors.rampart.unicorn",
					health: "90",
					attack: "15",
					protection: "14",
					damage: "18-22",
					speed: "7",
					price: "850",
					src: "app/img/units/rampart/unicorn.gif",
					descript: "warriors.rampart.unicornDesc"
				},
				{
					id: 7,
					name: "warriors.rampart.greenDragon",
					health: "180",
					attack: "18",
					protection: "18",
					damage: "40-50",
					speed: "10",
					price: "2400 and 1 crystal",
					src: "app/img/units/rampart/green_dragon.gif",
					descript: "warriors.rampart.greenDragonDesc"
				}
			],
			warUnitUp: [
				{
					id: 1,
					name: "warriors.rampart.сaptainCentaur",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "8",
					price: "90",
					src: "app/img/units/rampart/centaur_captain.gif",
					descript: "warriors.rampart.captainCentaurDesc"
				},
				{
					id: 2,
					name: "warriors.rampart.battleGnome",
					health: "20",
					attack: "7",
					protection: "7",
					damage: "2-4",
					speed: "5",
					price: "150",
					src: "app/img/units/rampart/battle_gnome.gif",
					descript: "warriors.rampart.battleGnomeDesc"
				},
				{
					id: 3,
					name: "warriors.rampart.grandElf",
					health: "15",
					attack: "9",
					protection: "5",
					damage: "3-5",
					speed: "7",
					price: "225",
					src: "app/img/units/rampart/grand_elf.gif",
					descript: "warriors.rampart.grandElfDesc"
				},
				{
					id: 4,
					name: "warriors.rampart.silverPegasus",
					health: "30",
					attack: "9",
					protection: "10",
					damage: "5-9",
					speed: "12",
					price: "275",
					src: "app/img/units/rampart/silver_pegasus.gif",
					descript: "warriors.rampart.silverPegasusDesc"
				},
				{
					id: 5,
					name: "warriors.rampart.dendroidSoldier",
					health: "65",
					attack: "9",
					protection: "12",
					damage: "10-14",
					speed: "4",
					price: "425",
					src: "app/img/units/rampart/dendroid_soldier.gif",
					descript: "warriors.rampart.dendroidSoldierDesc"
				},
				{
					id: 6,
					name: "warriors.rampart.battleUnicorn",
					health: "110",
					attack: "15",
					protection: "14",
					damage: "18-22",
					speed: "9",
					price: "950",
					src: "app/img/units/rampart/battle_unicorn.gif",
					descript: "warriors.rampart.battleUnicornDesc"
				},
				{
					id: 7,
					name: "warriors.rampart.goldenDragon",
					health: "250",
					attack: "27",
					protection: "27",
					damage: "40-50",
					speed: "16",
					price: "4500 and 2 crystal",
					src: "app/img/units/rampart/golden_dragon.gif",
					descript: "warriors.rampart.goldenDragonDesc"
				}
			]
		},
		{
			id: 3,
			town: "main.tower",
			warUnitStart: [
				{
					id: 1,
					name: "warriors.tower.gremlin",
					health: "4",
					attack: "3",
					protection: "3",
					damage: "1-2",
					speed: "4",
					price: "30",
					src: "app/img/units/tower/gremlin.gif",
					descript: "warriors.tower.gremlinDescript"
				},
				{
					id: 2,
					name: "warriors.tower.stoneGargoyle",
					health: "16",
					attack: "6",
					protection: "6",
					damage: "2-3",
					speed: "6",
					price: "130",
					src: "app/img/units/tower/stone_gargoyle.gif",
					descript: "warriors.tower.stoneGargoyleDescript"
				},
				{
					id: 3,
					name: "warriors.tower.stoneGolem",
					health: "30",
					attack: "7",
					protection: "10",
					damage: "4-5",
					speed: "3",
					price: "150",
					src: "app/img/units/tower/stone_golem.gif",
					descript: "warriors.tower.stoneGolemDescript"
				},
				{
					id: 4,
					name: "warriors.tower.mage",
					health: "25",
					attack: "11",
					protection: "8",
					damage: "7-9",
					speed: "5",
					price: "350",
					src: "app/img/units/tower/mage.gif",
					descript: "warriors.tower.mageDescript"
				},
				{
					id: 5,
					name: "warriors.tower.genie",
					health: "40",
					attack: "12",
					protection: "12",
					damage: "13-16",
					speed: "7",
					price: "550",
					src: "app/img/units/tower/genie.gif",
					descript: "warriors.tower.genieDescript"
				},
				{
					id: 6,
					name: "warriors.tower.naga",
					health: "110",
					attack: "16",
					protection: "13",
					damage: "20",
					speed: "5",
					price: "1100",
					src: "app/img/units/tower/naga.gif",
					descript: "warriors.tower.nagaDescript"
				},
				{
					id: 7,
					name: "warriors.tower.giant",
					health: "150",
					attack: "19",
					protection: "16",
					damage: "40-60",
					speed: "7",
					price: "2000 and 1 gem",
					src: "app/img/units/tower/giant.gif",
					descript: "warriors.tower.giantDescript"
				},
			],
			warUnitUp: [
				{
					id: 1,
					name: "warriors.tower.masterGremlin",
					health: "4",
					attack: "4",
					protection: "4",
					damage: "1-2",
					speed: "5",
					price: "40",
					src: "app/img/units/tower/master_gremlin.gif",
					descript: "warriors.tower.masterGremlinDescript"
				},
				{
					id: 2,
					name: "warriors.tower.obsidGargoyle",
					health: "16",
					attack: "7",
					protection: "7",
					damage: "2-3",
					speed: "9",
					price: "160",
					src: "app/img/units/tower/obsidian_gargoyle.gif",
					descript: "warriors.tower.obsidGargoyleDescript"
				},
				{
					id: 3,
					name: "warriors.tower.ironGolem",
					health: "35",
					attack: "9",
					protection: "10",
					damage: "4-5",
					speed: "5",
					price: "200",
					src: "app/img/units/tower/iron_golem.gif",
					descript: "warriors.tower.ironGolemDescript"
				},
				{
					id: 4,
					name: "warriors.tower.archmage",
					health: "30",
					attack: "12",
					protection: "9",
					damage: "7-9",
					speed: "7",
					price: "450",
					src: "app/img/units/tower/arch_mage.gif",
					descript: "warriors.tower.archmageDescript"
				},
				{
					id: 5,
					name: "warriors.tower.masterGenie",
					health: "40",
					attack: "12",
					protection: "12",
					damage: "13-16",
					speed: "11",
					price: "600",
					src: "app/img/units/tower/master_genie.gif",
					descript: "warriors.tower.masterGenieDescript"
				},
				{
					id: 6,
					name: "warriors.tower.nagaQueen",
					health: "110",
					attack: "16",
					protection: "13",
					damage: "30",
					speed: "7",
					price: "1600",
					src: "app/img/units/tower/naga_queen.gif",
					descript: "warriors.tower.nagaQueenDescript"
				},
				{
					id: 7,
					name: "warriors.tower.titan",
					health: "300",
					attack: "24",
					protection: "24",
					damage: "40-60",
					speed: "11",
					price: "5000 and 2 gem",
					src: "app/img/units/tower/titan.gif",
					descript: "warriors.tower.titanDescript"
				}
			]
		}
	];
	return units;
});