import Input from "./Input";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    static inst: Main = null;
    
    @property(cc.Node)
    startNode: cc.Node = null;

    @property(cc.Node)
    endNode: cc.Node = null;

    @property(cc.Node)
    jumpNode: cc.Node = null;

    @property(cc.Label)
    debugLabel: cc.Label = null;

    @property(Input)
    input: Input = null;

    isStarting: boolean = false;
    targetVec: cc.Vec2 = cc.v2(0, 0);
    distance: number = 0;
    curveVec: cc.Vec2 = cc.v2(0, 0);
    angle: number = 0;

    onLoad() {
        Main.inst = this;
    }

    buttonClick() {
        this.jumpNode.setPosition(this.startNode.getPosition());
        this.targetVec = this.endNode.getPosition().sub(this.startNode.getPosition()).normalize();
        this.distance = this.endNode.getPosition().sub(this.startNode.getPosition()).mag();
        // this.curveVec = this.targetVec.rotate(cc.misc.degreesToRadians(30)).normalize();
        this.angle = 90;
        this.isStarting = true;
    }
}
