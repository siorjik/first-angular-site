app.factory("townsList", function() {
	var towns = [
		{
			id: 1,
			name: "main.castle",
			img: "/app/img/castle.jpg",
			descript: "main.castleDescript",
			value: "castle"
		},
		{
			id: 2,
			name: "main.rampart",
			img: "/app/img/rampart.jpg",
			descript: "main.rampartDescript",
			value: "rampart"
		},
		{
			id: 3,
			name: "main.tower",
			img: "/app/img/tower.jpg",
			descript: "main.towerDescript",
			value: "tower"
		} 
	];
	return towns;
});