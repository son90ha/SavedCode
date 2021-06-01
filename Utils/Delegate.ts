export default class Delegate<F extends Function> {
    private _fa: Array<F> = [];
 
    add(f:F) {
        if (this._fa.indexOf(f) < 0) {
            this._fa.push(f);
        }
    }
 
    del(f:F) {
        const idx = this._fa.indexOf(f,0);
        if (idx > -1) {
            this._fa.splice(idx, 1);
        }
    }
 
    call(...args: any[]) {
        this._fa.forEach(f => {
            f(...args)
        });
    }

    delAll() {
        this._fa = [];
    }
}