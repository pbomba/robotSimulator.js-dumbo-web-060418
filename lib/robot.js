class Robot {
	constructor(name) {
		this.name = name;
		this.coordinates = [0, 0];
		this.bearing = 'north';
	}
	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(direction) {
		const possibleBearings = ['north', 'south', 'west', 'east'];
		let checkDir = possibleBearings.find(function(validDirections) { return validDirections === direction.toLowerCase()})
		if (checkDir) {
		this.bearing = direction
		} else {
		throw new Error("Invalid Robot Bearing");	
		}
	}

	place(object) {
		this.setCoordinates(object.x, object.y);
		this.setBearing(object.direction);
	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
				this.bearing = 'east'
				break
			case 'south':
				this.bearing = 'west'
				break
			case 'west':
				this.bearing = 'north'
				break
			case 'east':
				this.bearing = 'south'
				break
		}
	}

	turnLeft() {
			switch (this.bearing) {
			case 'north':
				this.bearing = 'west'
				break
			case 'south':
				this.bearing = 'east'
				break
			case 'west':
				this.bearing = 'south'
				break
			case 'east':
				this.bearing = 'north'
				break
		}

	}

	advance() {
			switch (this.bearing) {
			case 'north':
				this.coordinates[1]++
				break
			case 'south':
				this.coordinates[1]--
				break
			case 'west':
				this.coordinates[0]--
				break
			case 'east':
				this.coordinates[0]++
				break
		}

	}

	translateInstructions(instructions) {
		let instructionsArray = instructions.split("");
		for (const i of instructionsArray) {
			switch (i){
				case 'L':
					this.turnLeft();
					break;
				case 'R':
					this.turnRight();
					break;
				case 'A':
					this.advance();
					break;
			}
		}
	}


}
