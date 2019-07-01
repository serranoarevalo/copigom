const SPRITE_WIDTH = 220;
const SPRITE_HEIGHT = 274;

export class MainScene extends Phaser.Scene {
  private floor: Phaser.GameObjects.TileSprite;
  private background: Phaser.GameObjects.TileSprite;
  private clouds: Phaser.GameObjects.TileSprite;
  private mountain: Phaser.GameObjects.TileSprite;
  private fog: Phaser.GameObjects.TileSprite;
  private trees: Phaser.GameObjects.TileSprite;
  private floorRectangle: Phaser.GameObjects.Rectangle;
  private floorBox: Phaser.GameObjects.GameObject;
  private player: Phaser.Physics.Arcade.Sprite;

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
    this.load.spritesheet("bearRun", "./src/assets/bear_run.png", {
      frameWidth: SPRITE_WIDTH,
      frameHeight: SPRITE_HEIGHT,
      spacing: 80
    });
    this.load.spritesheet("bearJump", "./src/assets/bear_jump.png", {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create(): void {
    this.background = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height / 2,
      0,
      0,
      "sky"
    );
    this.background.setScale(1, 1.5);
    this.clouds = this.add.tileSprite(
      this.game.canvas.width / 2,
      200,
      0,
      0,
      "clouds"
    );
    this.mountain = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height - 250,
      0,
      0,
      "mountain"
    );

    this.fog = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height - 180,
      0,
      0,
      "fog"
    );
    this.trees = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height - 280,
      0,
      0,
      "trees"
    );
    this.trees.setScale(0.75);
    this.floor = this.add.tileSprite(
      this.game.canvas.width / 2,
      this.game.canvas.height,
      0,
      0,
      "ground"
    );
    this.floorRectangle = this.add.rectangle(
      this.game.canvas.width / 2,
      this.game.canvas.height - 80,
      this.game.canvas.width,
      10
    );
    this.floorBox = this.physics.add.existing(this.floorRectangle);
    this.floorBox.body.allowGravity = false;
    this.floorBox.body.setImmovable(true);
    this.player = this.physics.add.sprite(
      200,
      this.floorRectangle.y - 78,
      "bearRun"
    );
    this.player.setScale(0.5);
    this.physics.add.collider(this.floorBox, this.player);
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("bearRun", { start: 0, end: 8 }),
      frameRate: 8,
      repeat: -1
    });
  }

  update(): void {
    this.floor.tilePositionX += 3;
    this.background.tilePositionX += 0.1;
    this.clouds.tilePositionX += 1;
    this.mountain.tilePositionX += 0.2;
    this.fog.tilePositionX += 0.1;
    this.trees.tilePositionX += 0.5;
    this.player.anims.play("run", true);
  }
}
