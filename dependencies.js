var dir = ["data_structures"];
var fileextension = ".";

$.each(dir, function(index, value) {
    $.ajax({ // http://stackoverflow.com/a/18480589
        url: value,
        success: function(data) {
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = this.href.replace(window.location.host, "");
                filename = filename.replace("https://", value);
                filename = filename.replace("http://", value);
                var script = document.createElement("script");
                script.src = filename;
                document.head.appendChild(script);
            });
        }
    });
});

function AfficheBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        if (dep_ut[1] == "true")
            this.dependsOnT = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.dState = options.model.dstate;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "AfficheBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function BigSom() {
    if (arguments.length > 0) {
        var options = arguments[0];

        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";

        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = "+"; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "BigSom";
        this.blockElementName = arguments.callee.caller.name;
    }
}


function zeros() {
    if (arguments.length == 0) {
        return [0];
    } else if (arguments.length == 1) {
        var a = arguments[0];
        if (typeof a.length === 'undefined') {
            return [0];
        } else {
            return math.zeros(math.size(a));
        }
    } else {
        var args = Array.prototype.slice.call(arguments);
        return math.zeros(args);
    }
}

function ones() {
    if (arguments.length == 0) {
        return [1];
    } else if (arguments.length == 1) {
        var a = arguments[0];
        if (typeof a.length === 'undefined') {
            return [1];
        } else {
            return math.ones(math.size(a));
        }
    } else {
        var args = Array.prototype.slice.call(arguments);
        return math.ones(args);
    }
}

function size() {

    if (arguments.length == 1)
        return math.size(arguments[0])
    else {
        var res = math.size(arguments[0]);

        if (res.length == 1)
            res.push(1);

        switch (arguments[1]) {
            case 'r':
            case 1:
                return res[0];
            case 'c':
            case 2:
                return res[1];
            case '*':
                return res[0] * res[1];
            default:
                return res[arguments[1]];
        }
    }
}