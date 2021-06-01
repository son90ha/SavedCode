import GameObject from "../GameObject";
import Main from "../Main";
import { Commandbase } from "./CommandBase";

export default class MoveUpCommand extends Commandbase {

    private _targetPos: cc.Vec2 = cc.Vec2.ZERO;
    private _direction: cc.Vec2 = cc.Vec2.ZERO;
    private _distance: number = 0;
    private _startPos: cc.Vec2 = cc.Vec2.ZERO;
        
    execute(dt: number): void {
        let curPos = this.gameObject.getWorldPosition();
        Main.inst.debugLabel.string = this._targetPos.sub(curPos).mag().toString();
        if (curPos.sub(this._startPos).mag() >= this._distance) {
            this.gameObject.setWorldPosition(this._targetPos);
            this.stop();
            return;
        }

        curPos.addSelf(this._direction.mul(dt * 1000));
        this.gameObject.setWorldPosition(curPos);
    }

    setTargetPos(pos: cc.Vec2) {
        let curObjPos = this.gameObject.getWorldPosition();
        this._startPos = curObjPos;
        this._targetPos = pos;
        let sub = this._targetPos.sub(curObjPos)
        this._direction = sub.normalize();
        this._distance = sub.mag();
    }

    stop(): void {
        this.stopCallback(this);
    }
}
