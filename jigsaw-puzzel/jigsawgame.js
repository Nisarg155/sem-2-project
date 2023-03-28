var rows = 2;
var col = 2;

var currtile;
var othertile;


window.onload = function () {

    //? initializing 2*2 board
    for(let r = 0 ; r<rows ; r++)
    {
        for(let c= 0 ;c<col;c++)
        {
            let tile = document.createElement("img");
            tile.src = "whiteimg.png";

            document.getElementById("bigbox").append(tile);
        }
    }
    //? piece
    let piece = [];
    for(let i =1 ;i<=r*c;i++)
    {
        piece.push(i.toString());
    }
    for(let i = 0;i<piece.length;i++)
    {
        
    }
    
}


