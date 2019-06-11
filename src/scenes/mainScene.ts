export class MainScene extends Phaser.Scene {
  private floor: Phaser.GameObjects.TileSprite;
  private background: Phaser.GameObjects.TileSprite;
  private clouds: Phaser.GameObjects.TileSprite;
  private mountain: Phaser.GameObjects.TileSprite;
  private fog: Phaser.GameObjects.TileSprite;
  private trees: Phaser.GameObjects.TileSprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("ground", "./src/assets/ground.png");
    this.load.image("fog", "./src/assets/fog.png");
    this.load.image("clouds", "./src/assets/clouds.png");
    this.load.image("mountain", "./src/assets/mountain.png");
    this.load.image("sky", "./src/assets/sky.png");
    this.load.image("trees", "./src/assets/trees.png");
  }

  create(): void {
    this.background = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height / 2,
      0,
      0,
      "sky"
    );
    this.background.setScale(0.8);
    this.clouds = this.add.tileSprite(
      this.game.canvas.width / 2,
      100,
      0,
      0,
      "clouds"
    );

    this.mountain = this.add.tileSprite(
      this.game.canvas.width / 2,
      230,
      0,
      0,
      "mountain"
    );

    this.fog = this.add.tileSprite(
      this.game.canvas.width / 2,
      310,
      0,
      0,
      "fog"
    );
    this.trees = this.add.tileSprite(
      this.game.canvas.width / 2,
      200,
      0,
      0,
      "trees"
    );
    this.trees.setScale(0.75);
    this.floor = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height - 70,
      0,
      0,
      "ground"
    );
  }

  update(): void {
    this.floor.tilePositionX += 2;
    this.background.tilePositionX += 0.1;
    this.clouds.tilePositionX += 1;
    this.mountain.tilePositionX += 0.2;
    this.fog.tilePositionX += 0.1;
    this.trees.tilePositionX += 0.5;
  }
}
