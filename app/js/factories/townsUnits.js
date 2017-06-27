app.factory("units", function() {
	var units = [
		{
			id: 1,
			town: "castle",
			warUnitStart: [
				{
					id: 1,
					name: "spearman",
					health: "10",
					attack: "4",
					protection: "5",
					damage: "1-3",
					speed: "4",
					price: "60",
					src: "app/img/units/castle/spearman.gif"
				},
				{
					id: 2,
					name: "сrossbowman",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "4",
					price: "100",
					src: "app/img/units/castle/crossbowman.gif"
				},
				{
					id: 3,
					name: "griffin",
					health: "25",
					attack: "8",
					protection: "8",
					damage: "3-6",
					speed: "6",
					price: "200",
					src: "app/img/units/castle/griffin.gif"
				},
				{
					id: 4,
					name: "knight",
					health: "35",
					attack: "10",
					protection: "12",
					damage: "6-9",
					speed: "5",
					price: "300",
					src: "app/img/units/castle/knight.gif"
				},
				{
					id: 5,
					name: "monk",
					health: "30",
					attack: "12",
					protection: "7",
					damage: "10-12",
					speed: "5",
					price: "400",
					src: "app/img/units/castle/monk.gif"
				},
				{
					id: 6,
					name: "сavalryman",
					health: "100",
					attack: "15",
					protection: "15",
					damage: "15-25",
					speed: "7",
					price: "1000",
					src: "app/img/units/castle/cavalryman.gif"
				},
				{
					id: 7,
					name: "angel",
					health: "200",
					attack: "20",
					protection: "20",
					damage: "50",
					speed: "12",
					price: "3000 and 1 gem",
					src: "app/img/units/castle/angel.gif"
				}
			],
			warUnitUp: [
				{
					id: 1,
					name: "halberdier",
					health: "10",
					attack: "6",
					protection: "5",
					damage: "2-3",
					speed: "5",
					price: "75",
					src: "app/img/units/castle/halberdier.gif"
				},
				{
					id: 2,
					name: "shooter",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "6",
					price: "150",
					src: "app/img/units/castle/shooter.gif"
				},
				{
					id: 3,
					name: "royal griffin",
					health: "25",
					attack: "9",
					protection: "9",
					damage: "3-6",
					speed: "9",
					price: "240",
					src: "app/img/units/castle/royal_griffin.gif"
				},
				{
					id: 4,
					name: "crusader",
					health: "35",
					attack: "12",
					protection: "12",
					damage: "7-10",
					speed: "6",
					price: "400",
					src: "app/img/units/castle/crusader.gif"
				},
				{
					id: 5,
					name: "fanatic",
					health: "30",
					attack: "12",
					protection: "10",
					damage: "10-12",
					speed: "7",
					price: "450",
					src: "app/img/units/castle/fanatic.gif"
				},
				{
					id: 6,
					name: "сhampion",
					health: "100",
					attack: "16",
					protection: "16",
					damage: "20-25",
					speed: "9",
					price: "1200",
					src: "app/img/units/castle/champion.gif"
				},
				{
					id: 7,
					name: "archangel",
					health: "250",
					attack: "30",
					protection: "30",
					damage: "50",
					speed: "18",
					price: "5000 and 3 gem",
					src: "app/img/units/castle/archangel.gif"
				}
			] 
		},
		{
			id: 2,
			town: "rampart",
			warUnitStart: [
				{
					id: 1,
					name: "сentaur",
					health: "8",
					attack: "5",
					protection: "3",
					damage: "2-3",
					speed: "6",
					price: "70",
					src: "app/img/units/rampart/centaur.gif"
				},
				{
					id: 2,
					name: "gnome",
					health: "20",
					attack: "6",
					protection: "7",
					damage: "2-4",
					speed: "3",
					price: "120",
					src: "app/img/units/rampart/gnome.gif"
				},
				{
					id: 3,
					name: "elf",
					health: "15",
					attack: "9",
					protection: "5",
					damage: "3-5",
					speed: "6",
					price: "200",
					src: "app/img/units/rampart/elf.gif"
				},
				{
					id: 4,
					name: "pegasus",
					health: "30",
					attack: "9",
					protection: "8",
					damage: "5-9",
					speed: "8",
					price: "250",
					src: "app/img/units/rampart/pegasus.gif"
				},
				{
					id: 5,
					name: "guard. dendroid",
					health: "55",
					attack: "9",
					protection: "12",
					damage: "10-14",
					speed: "3",
					price: "350",
					src: "app/img/units/rampart/guardian_dendroid.gif"
				},
				{
					id: 6,
					name: "unicorn",
					health: "90",
					attack: "15",
					protection: "14",
					damage: "18-22",
					speed: "7",
					price: "850",
					src: "app/img/units/rampart/unicorn.gif"
				},
				{
					id: 7,
					name: "green dragon",
					health: "180",
					attack: "18",
					protection: "18",
					damage: "40-50",
					speed: "10",
					price: "2400 and 1 crystal",
					src: "app/img/units/rampart/green_dragon.gif"
				}
			],
			warUnitUp: [
				{
					id: 1,
					name: "сaptain centaur",
					health: "10",
					attack: "6",
					protection: "3",
					damage: "2-3",
					speed: "8",
					price: "90",
					src: "app/img/units/rampart/centaur_captain.gif"
				},
				{
					id: 2,
					name: "battle gnome",
					health: "20",
					attack: "7",
					protection: "7",
					damage: "2-4",
					speed: "5",
					price: "150",
					src: "app/img/units/rampart/battle_gnome.gif"
				},
				{
					id: 3,
					name: "grand elf",
					health: "15",
					attack: "9",
					protection: "5",
					damage: "3-5",
					speed: "7",
					price: "225",
					src: "app/img/units/rampart/grand_elf.gif"
				},
				{
					id: 4,
					name: "silver pegasus",
					health: "30",
					attack: "9",
					protection: "10",
					damage: "5-9",
					speed: "12",
					price: "275",
					src: "app/img/units/rampart/silver_pegasus.gif"
				},
				{
					id: 5,
					name: "dendroid soldier",
					health: "65",
					attack: "9",
					protection: "12",
					damage: "10-14",
					speed: "4",
					price: "425",
					src: "app/img/units/rampart/dendroid_soldier.gif"
				},
				{
					id: 6,
					name: "battle unicorn",
					health: "110",
					attack: "15",
					protection: "14",
					damage: "18-22",
					speed: "9",
					price: "950",
					src: "app/img/units/rampart/battle_unicorn.gif"
				},
				{
					id: 7,
					name: "golden dragon",
					health: "250",
					attack: "27",
					protection: "27",
					damage: "40-50",
					speed: "16",
					price: "4500 and 2 crystal",
					src: "app/img/units/rampart/golden_dragon.gif"
				}
			]
		},
		{
			id: 3,
			town: "tower",
			warUnitStart: [
				{
					id: 1,
					name: "gremlin",
					health: "4",
					attack: "3",
					protection: "3",
					damage: "1-2",
					speed: "4",
					price: "30",
					src: "app/img/units/tower/gremlin.gif"
				},
				{
					id: 2,
					name: "stone gargoyle",
					health: "16",
					attack: "6",
					protection: "6",
					damage: "2-3",
					speed: "6",
					price: "130",
					src: "app/img/units/tower/stone_gargoyle.gif"
				},
				{
					id: 3,
					name: "stone golem",
					health: "30",
					attack: "7",
					protection: "10",
					damage: "4-5",
					speed: "3",
					price: "150",
					src: "app/img/units/tower/stone_golem.gif"
				},
				{
					id: 4,
					name: "mage",
					health: "25",
					attack: "11",
					protection: "8",
					damage: "7-9",
					speed: "5",
					price: "350",
					src: "app/img/units/tower/mage.gif"
				},
				{
					id: 5,
					name: "genie",
					health: "40",
					attack: "12",
					protection: "12",
					damage: "13-16",
					speed: "7",
					price: "550",
					src: "app/img/units/tower/genie.gif"
				},
				{
					id: 6,
					name: "naga",
					health: "110",
					attack: "16",
					protection: "13",
					damage: "20",
					speed: "5",
					price: "1100",
					src: "app/img/units/tower/naga.gif"
				},
				{
					id: 7,
					name: "giant",
					health: "150",
					attack: "19",
					protection: "16",
					damage: "40-60",
					speed: "7",
					price: "2000 and 1 gem",
					src: "app/img/units/tower/giant.gif"
				},
			],
			warUnitUp: [
				{
					id: 1,
					name: "master gremlin",
					health: "4",
					attack: "4",
					protection: "4",
					damage: "1-2",
					speed: "5",
					price: "40",
					src: "app/img/units/tower/master_gremlin.gif"
				},
				{
					id: 2,
					name: "obsid. gargoyle",
					health: "16",
					attack: "7",
					protection: "7",
					damage: "2-3",
					speed: "9",
					price: "160",
					src: "app/img/units/tower/obsidian_gargoyle.gif"
				},
				{
					id: 3,
					name: "iron golem",
					health: "35",
					attack: "9",
					protection: "10",
					damage: "4-5",
					speed: "5",
					price: "200",
					src: "app/img/units/tower/iron_golem.gif"
				},
				{
					id: 4,
					name: "archmage",
					health: "30",
					attack: "12",
					protection: "9",
					damage: "7-9",
					speed: "7",
					price: "450",
					src: "app/img/units/tower/arch_mage.gif"
				},
				{
					id: 5,
					name: "master genie",
					health: "40",
					attack: "12",
					protection: "12",
					damage: "13-16",
					speed: "11",
					price: "600",
					src: "app/img/units/tower/master_genie.gif"
				},
				{
					id: 6,
					name: "naga queen",
					health: "110",
					attack: "16",
					protection: "13",
					damage: "30",
					speed: "7",
					price: "1600",
					src: "app/img/units/tower/naga_queen.gif"
				},
				{
					id: 7,
					name: "titan",
					health: "300",
					attack: "24",
					protection: "24",
					damage: "40-60",
					speed: "11",
					price: "5000 and 2 gem",
					src: "app/img/units/tower/titan.gif"
				}
			]
		}
	];
	return units;
});