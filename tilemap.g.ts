// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel01":
            case "level1":return tiles.createTilemap(hex`1000100006060608060606080606060608060806060b010101010101010101010101010708010101010201010102020201010107060101010408030104070606030101080601010101050101040707060301010706010102010101010408070803010107080104090301010204080808030101070601010501010409030505050101010706010101010101050101010101010107060101020202020201010102010101070601040a0a0a0a0a03010408030101070601040a0a0a090903010105010101080801040a0a0a0a0a03010101010101070601010505050505010101010101010706010101010101010101010101010b0706060606080606060608060606060607`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 . . . 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . . . 2 
2 . . 2 . . . . . 2 2 2 . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 . . . 2 . . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
