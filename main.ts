function invocaPerseguidor () {
    perseguidor = sprites.create(assets.image`pegador`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(perseguidor, sprites.builtin.forestTiles0)
    animation.runImageAnimation(
    perseguidor,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a a a a a a a a a . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 e 6 6 e 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . 6 6 6 6 e e e e 6 6 6 6 6 . . 
        . 6 . . 6 6 6 6 6 6 6 . . 6 . . 
        . 6 . . c c c c c c c . . 6 . . 
        . e . . . c . . c . . . . e . . 
        . . . . . c . . c . . . . . . . 
        . . . . . c . . c . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e e . . e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a a a a a a a a a . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 e 6 6 e 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 e e e e 6 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 . . 6 . . 
        . 6 . . c c c c c c c . . 6 . . 
        . 6 . . . . c . . c . . . e . . 
        . e . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . e e . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a a a a a a a a a . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 e 6 6 e 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . 6 6 6 6 e e e e 6 6 . . . . . 
        . 6 . . 6 6 6 6 6 6 6 6 6 6 . . 
        . 6 . . c c c c c c c . . 6 . . 
        . e . . . c . . c . . . . 6 . . 
        . . . . . c . . c . . . . e . . 
        . . . . . c . . c . . . . . . . 
        . . . . . e . . e . . . . . . . 
        . . . . e e . . e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    perseguidor.follow(fugitivo)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game.runtime() >= 5000) {
        game.over(true, effects.confetti)
    } else {
        game.over(false, effects.dissolve)
    }
})
let perseguidor: Sprite = null
let fugitivo: Sprite = null
info.setScore(0)
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`nivel01`)
fugitivo = sprites.create(assets.image`fugitivoSprite`, SpriteKind.Player)
tiles.placeOnRandomTile(fugitivo, sprites.castle.tilePath5)
scene.cameraFollowSprite(fugitivo)
animation.runImageAnimation(
fugitivo,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 d 4 4 d 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . 4 4 4 4 d d d d 4 4 4 4 4 . . 
    . 4 . . 4 4 4 4 4 4 4 . . 4 . . 
    . 4 . . 8 8 8 8 8 8 8 . . 4 . . 
    . 4 . . . 8 . . 8 . . . . 4 . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 4 . . 4 . . . . . . . 
    . . . . 4 4 . . 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 d 4 4 d 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 d d d d 4 4 4 4 4 . . 
    . 4 4 4 4 4 4 4 4 4 4 . . 4 . . 
    . 4 . . 8 8 8 8 8 8 8 . . 4 . . 
    . 4 . . . . 8 . . 8 . . . 4 . . 
    . 4 . . . . 8 . . 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . 4 . . 4 . . . . . . 
    . . . . . 4 4 . . 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 d 4 4 d 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . 4 4 4 4 d d d d 4 4 . . . . . 
    . 4 . . 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 . . 8 8 8 8 8 8 8 . . 4 . . 
    . 4 . . . 8 . . 8 . . . . 4 . . 
    . . . . . 8 . . 8 . . . . 4 . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 4 . . 4 . . . . . . . 
    . . . . 4 4 . . 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
invocaPerseguidor()
game.onUpdate(function () {
    controller.moveSprite(fugitivo)
    info.changeScoreBy(1)
})
