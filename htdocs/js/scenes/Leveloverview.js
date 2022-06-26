export default class Leveloverview extends Phaser.Scene {
    constructor() {
        super("Leveloverview");
        this.paralaxbackgrounds = [];
        this.muted = true;
    }
    preload() {
        this.load.spritesheet("soundbutton", "/htdocs/assets/images/sound.png", { frameWidth: 395, frameHeight: 275 });
        this.load.audio("click", ["/htdocs/assets/sounds/click.mp3", "/htdocs/assets/sounds/click.ogg"]);
        this.load.audio("backgroundmusic", ["/htdocs/assets/sounds/backgroundmusic.mp3", "/htdocs/assets/sounds/backgroundmusic.ogg"]);
        this.load.image("background", "/htdocs/assets/images/background.png");
        this.load.image("mountains", "/htdocs/assets/images/mountains.png");
        this.load.image("Level5", "/htdocs/assets/images/Level5.JPG");
    }
    create() {
        this.add.image(0, 0, "background").setOrigin(0, 0).setScale(2.5).setDepth(-3).setScrollFactor(0);
        this.paralaxbackgrounds.push({
            ratioX: 0.1,
            sprite: this.add.tileSprite(0, 690, innerWidth, 400, "mountains").setOrigin(0, 0).setScrollFactor(0).setDepth(-3)
        });
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.clicksound = this.sound.add("click", {
            volume: 0.5,
            loop: false
        });
        this.backgroundmusic = this.sound.add("backgroundmusic", {
            volume: 0.5,
            loop: true
        });
        this.Fullscreenevent = this.input.keyboard.addKey("F");
        this.Fullscreenevent.on("down", function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this);
        this.soundbutton = this.add.image(50, 50, "soundbutton", 1)
            .setInteractive()
            .setScrollFactor(0)
            .setScale(0.25)
            .setOrigin(0.5)
            .on("pointerdown", () => {
            if (this.muted == true) {
                this.soundbutton.setFrame(0);
                this.muted = false;
                this.sound.play("click");
                this.backgroundmusic.play();
            }
            else if (this.muted == false) {
                this.soundbutton.setFrame(1);
                this.muted = true;
                this.sound.play("click");
                this.backgroundmusic.stop();
            }
        });
        this.Level1text = this.add.text(screenCenterX / 2, 475, "Coming Soon", {
            fontFamily: "supermario",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        })
            .setOrigin(0.5).setScrollFactor(0);
        this.Level1 = this.add.rectangle(screenCenterX / 2, 300, 350, 225, 0xffffff).setInteractive()
            .on("pointerdown", () => {
            this.sound.play("click");
            this.scene.start("Level1");
        });
        this.Level2text = this.add.text(screenCenterX, 475, "Coming Soon", {
            fontFamily: "supermario",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        })
            .setOrigin(0.5).setScrollFactor(0);
        this.Level2 = this.add.rectangle(screenCenterX, 300, 350, 225, 0xffffff).setInteractive()
            .on("pointerdown", () => {
            this.sound.play("click");
            this.scene.start("Level2");
        });
        this.Level3text = this.add.text(screenCenterX + screenCenterX / 2, 475, "Coming Soon", {
            fontFamily: "supermario",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        })
            .setOrigin(0.5).setScrollFactor(0);
        this.Level3 = this.add.rectangle(screenCenterX + screenCenterX / 2, 300, 350, 225, 0xffffff).setInteractive()
            .on("pointerdown", () => {
            this.sound.play("click");
            this.scene.start("Level3");
        });
        this.Level4text = this.add.text(2 * screenCenterX / 3, 975, "Coming Soon", {
            fontFamily: "supermario",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        })
            .setOrigin(0.5).setScrollFactor(0);
        this.Level4 = this.add.rectangle(2 * screenCenterX / 3, 800, 350, 225, 0xffffff).setInteractive()
            .on("pointerdown", () => {
            this.sound.play("click");
            this.scene.start("Level4");
        });
        this.Level5text = this.add.text(screenCenterX + screenCenterX / 3, 975, "Level 5", {
            fontFamily: "supermario",
            fontSize: "40px",
            color: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 10
        })
            .setOrigin(0.5).setScrollFactor(0);
        this.Level5 = this.add.image(screenCenterX + screenCenterX / 3, 800, "Level5").setScale(0.25).setInteractive()
            .on("pointerdown", () => {
            this.sound.play("click");
            this.scene.start("Level5");
        });
        this.Levelauswahltext = this.add.text(screenCenterX, 50, "Levelauswahl", {
            stroke: "#ff0000",
            strokeThickness: 5,
            fontFamily: "supermario",
            color: "#ffffff",
            align: "center",
            fontSize: "50px"
        }).setScrollFactor(0).setOrigin(0.5);
    }
    update() {
    }
}
//# sourceMappingURL=Leveloverview.js.map