function TEXT_f() {

    TEXT_f.prototype.define = function TEXT_f() {
        this.font = 2;
        this.siz = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["text"]);
        model.rpar = new ScilabString(["Text"]);
        model.ipar = new ScilabDouble([this.font], [this.siz]);

        var exprs = ["Text", this.font, this.siz];

        var graphics = scicos_graphics();
        graphics.orig = new ScilabDouble([0, 0]);
        graphics.sz = new ScilabDouble([2, 1]);
        graphics.exprs = new ScilabString(exprs);
        this.x = mlist(["Text", "graphics", "model", "void", "gui"], new ScilabString(["Text", "graphics", "model", "void", "gui"]), graphics, model, new ScilabString([" "]), new ScilabString(["TEXT_f"]));
        return new TextBlock(this.x);
    }

    TEXT_f.prototype.details = function TEXT_f() {
        return this.x;
    }
}
