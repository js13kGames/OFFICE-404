import Vec from "./Vec";

export default class Box
{

    constructor(public x: number = 0, public y: number = 0, public w: number = 1, public h: number = w)
    {
    }

    add(box: Box)
    {
        this.x = Math.min(this.x, box.x);
        this.y = Math.min(this.y, box.y);
        this.w = Math.max(this.x + this.w, box.x + box.w) - this.x;
        this.h = Math.max(this.y + this.h, box.y + box.h) - this.y;
    }

    has(pos: Vec): boolean
    {
        return this.x <= pos.x && this.x + this.w >= pos.x && this.y <= pos.y && this.y + this.h >= pos.y;
    }

    collide(box: Box): boolean
    {
        return this.x < box.x + box.w && this.x + this.w > box.x && this.y < box.y + box.h && this.y + this.h > box.y;
    }

    contains(box: Box): boolean
    {
        return this.x <= box.x && this.x + this.w >= box.x + box.w && this.y <= box.y && this.y + this.h >= box.y + box.h;
    }

    intersect(box: Box, out: Box = new Box()): Box
    {
        let Ax = Math.round(this.x),
            Ay = Math.round(this.y),
            AX = Ax + this.w,
            AY = Ay + this.h,
            Bx = Math.round(box.x),
            By = Math.round(box.y),
            BX = Bx + box.w,
            BY = By + box.h;
        out.x = Ax < Bx ? Bx : Ax;
        out.y = Ay < By ? By : Ay;
        out.w = (AX < BX ? AX : BX) - out.x;
        out.h = (AY < BY ? AY : BY) - out.y;
        return out;
    }

}
