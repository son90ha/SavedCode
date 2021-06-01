import { Commandbase } from "./Comand/CommandBase";
import MoveUpCommand from "./Comand/MoveUpCommand";
import GameObject from "./GameObject";
import Main from "./Main";

export default class InputHandler {

    gameObject: GameObject = null;
    commandExecuteList: Commandbase[] = [];
    moveUpCommand: MoveUpCommand;

    constructor(obj: GameObject) {
        this.gameObject = obj;
        Main.inst.input.onTouchStartDelegate.add(this.onTouchStart.bind(this));
        Main.inst.input.onTouchEndDelegate.add(this.onTouchEnd.bind(this));

        this.moveUpCommand = new MoveUpCommand(obj);
        this.moveUpCommand.addStopCallback(this.commandStop.bind(this));
    }

    onTouchStart(event: cc.Event.EventTouch) {
        this.moveUpCommand.setTargetPos(event.getStartLocation());
        this.stopAllCommand();
        this.commandExecuteList.push(this.moveUpCommand);
    }

    onTouchEnd(event: cc.Event.EventTouch) {

    }

    stopAllCommand() {
        this.commandExecuteList = [];
    }

    commandStop(cm: Commandbase) {
        cc.js.array.fastRemoveAt(this.commandExecuteList, this.commandExecuteList.indexOf(cm));
    }

    update(dt: number) {
        this.commandExecuteList.forEach(cm => cm.execute(dt));
    }
}
