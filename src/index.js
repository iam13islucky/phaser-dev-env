import Phaser from 'phaser'

import MainScene from './scenes/mainScene'

const width = 800
const height = 600

const config = {
	width,
	height,
	type: Phaser.AUTO,
	scenes: { MainScene },
}

// eslint-disable-next-line
const game = new Phaser.Game(config);

