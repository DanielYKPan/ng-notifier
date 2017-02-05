/**
 * timer
 */

export class Timer {
    /* Property max */
    private max: number;

    get Max(): number {
        return this.max
    }

    /* Property current */
    private current: number;

    get Current(): number {
        return this.current
    }

    set Current(value: number) {
        this.current = value;
    }

    /* Property stop */
    private stop: boolean;

    get Stop(): boolean {
        return this.stop
    }

    set Stop(value: boolean) {
        this.stop = value;
    }

    constructor(current: number, max: number) {
        this.max = max;
        this.current = current;
        this.stop = false;
    }
}
