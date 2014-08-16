function CmdParser(){
    this.fileStructure = new FileStructure();
    this.history = [];
}

CmdParser.prototype = {
    cd: function( navString ){
        var navArray = navString.split("/");

        for( var i = 0; i < navArray.length; i++ ) {
            if ( navArray[i] === ".." ) {
                this.fileStructure.ascend();
            } else if ( navArray[i] === "." ) {
                continue
            } else {
                this.fileStructure.descend(navArray[i])
            }
        }
    }
}