import GameObject from "../GameObject";

export abstract class  Commandbase  {

    protected gameObject: GameObject = null;
    protected stopCallback: (cm: Commandbase) => void = null;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }

    abstract execute(dt: number): void;
    abstract stop(): void;

    addStopCallback(callback: (cm: Commandbase) => void) {
        this.stopCallback = callback;
    }
}
