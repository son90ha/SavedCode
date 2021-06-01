import Main from "./Main";
import Delegate from "./Utils/Delegate";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Input extends cc.Component {

    onTouchStartDelegate: Delegate<(event: cc.Event.EventTouch) => void> = new Delegate();
    onTouchEndDelegate: Delegate<(event: cc.Event.EventTouch) => void> = new Delegate();

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Event.EventTouch) {
        Main.inst.debugLabel.string = "onTouchStart";
        this.onTouchStartDelegate.call(event);
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        Main.inst.debugLabel.string = "onTouchEnd";
        this.onTouchEndDelegate.call(event);
    }

    update(dt: number) {
        
    }

}
