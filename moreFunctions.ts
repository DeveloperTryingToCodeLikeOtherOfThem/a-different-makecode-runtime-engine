
namespace sprite {
    export import sprite = sprites
    export import _controller = controller

    export class Sprites extends Sprite {}
}

//% blockNamespace=pxt 
namespace arcade {
    //% blockId="arcade-sprites" fixedInstance block="sprites"
    export import sprites = sprite.sprite 
        //% blockId="arcade-controller" fixedInstance block="controller"
    export import controller = sprite._controller
        //% blockId="arcade-Sprite" fixedInstance block="Sprite"
    export class Sprite extends sprite.Sprites { }
        //% blockId="arcade-Controller" fixedInstance block="Controller"
    export class Controller extends controller.Controller {} 
}

namespace settings {
    //% block="read buffer"
    export namespace readBuffer {}
}

//% blockNamespace=pxt
namespace control {}

//% blockNamespace=pxt
namespace sprites {
    //% blockId="Sprite" 
    export class Sprite extends arcade.Sprite {}
}

//% blockNamespace=pxt
namespace Sprite {}

//% blockNamespace=control
namespace controller {
    //% blockNamespace=pxt
    export namespace Controller {}
    //% blockNamespace=pxt
    export namespace Button {}
}
//% color="#249CA3" advanced=true
declare namespace pxt {}