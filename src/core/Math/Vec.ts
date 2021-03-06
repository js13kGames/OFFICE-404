export default class Vec {

    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get angle(): number {
        return Math.atan2(this.y, this.x);
    }

    constructor(
        public x: number = 0,
        public y: number = x
    ) { }

    copy(out: Vec): Vec {
        out.x = this.x;
        out.y = this.y;
        return this;
    }

    clone(): Vec {
        return new Vec(this.x, this.y);
    }

    set(x: number | Vec = 0, y?: number): Vec {
        if (x instanceof Vec) {
            x.copy(this);
        } else {
            this.x = x;
            this.y = y !== undefined ? y : x;
        }
        return this;
    }

    add(x: number | Vec = 0, y: number = 0): Vec {
        this.x += x instanceof Vec ? x.x : x;
        this.y += x instanceof Vec ? x.y : y;
        return this;
    }

    sub(x: number | Vec = 0, y: number = 0): Vec {
        this.x -= x instanceof Vec ? x.x : x;
        this.y -= x instanceof Vec ? x.y : y;
        return this;
    }

    scale(x: number, y: number = x): Vec {
        this.x *= x;
        this.y *= y;
        return this;
    }

    rotate(rad: number): Vec {
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        this.x = this.x * c - this.y * s;
        this.y = this.x * s + this.y * c;
        return this;
    }

    invert(): Vec {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    norm(): Vec {
        const length = this.length;
        length > 0 ? this.scale(1 / length) : this.set();
        return this;
    }

}

