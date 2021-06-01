import InputHandler from "./InputHandler";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameObject extends cc.Component {

    inputHandler: InputHandler;

    onLoad() {
        this.inputHandler = new InputHandler(this);
    }

    update(dt: number) {
        this.inputHandler.update(dt);
    }

    getWorldPosition(): cc.Vec2 {
        return this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
    }

    setWorldPosition(posWS: cc.Vec2) {
        this.node.setPosition(this.node.parent.convertToNodeSpaceAR(posWS));
    }
}
