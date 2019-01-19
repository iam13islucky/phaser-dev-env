# Phaser Dev Env ![](https://img.shields.io/github/license/iam13islucky/phaser-dev-env.svg) ![](https://img.shields.io/github/issues/iam13islucky/phaser-dev-env.svg)

An ES6 Development Environment for Phaser 3 with Babel 7, Webpack 4, and a Custom ESLint setup

### Features

* A Webpack 4 setup with webpack-dev-server and hot reloading 🔥
* Use new/experimental JS features for your game with Babel 7 🔮
* A custom ESLint Setup based on XO's config but without semicolons ✨
* Phaser Type Defs and VSCode .jsconfig included to improve Intellisense 🧠

## Installation

```bash
# Clone the Repo
git clone https://github.com/iam13islucky/phaser-dev-env.git
cd phaser-dev-env

# Install the packages
npm install
```

## Usage

### NPM Scripts

```powershell
# Start Webpack Dev Server with Hot Reloading!
npm start

# Build Webpack bundle for release!
npm run build
```

### File Structure

All game code should go in the ```/src/``` folder. 

Custom classes should go in their respective folders, ie: Scenes go in ```/src/scenes/```, Sprites go in ```/src/sprites```, etc.

## Contributing

Please note that this project is released with a Contributor [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If your pull request gets merged I'll add your name to the Authors in the README. If you don't want me to do that, please mention it in the pull request.

## Authors
* [iam13islucky](https://github.com/iam13islucky)

## License
[MIT](LICENSE)

## TODO
- [ ] Figure out what to do about assets like images
	- [ ] Setup Webpack alias 
	- [ ] Create Example of Webpack ```file-loader``` Usage
- [ ] Create example "game" to show Usage
    - [ ] Create example Scene class
    - [ ] Create example Sprite class
- [ ] Add more config options
- [ ] Improve README
    - [ ] Link to packages mentioned 
- [ ] Start to generalize setup more to move towards end goal:
    - [ ] Create CLI app that doesn't suck!
        - [ ] Make ESLint setup have multiple options
        - [ ] Make something like React-Scripts, it should be updateable to simplify Development