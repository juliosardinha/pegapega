def invocaPerseguidor():
    global perseguidor
    perseguidor = sprites.create(assets.image("""
        pegador
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(perseguidor, sprites.builtin.forest_tiles0)
    animation.run_image_animation(perseguidor,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    perseguidor.follow(fugitivo)

def on_on_overlap(sprite, otherSprite):
    if game.runtime() >= 5000:
        game.over(True, effects.confetti)
    else:
        game.over(False, effects.melt)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

perseguidor: Sprite = None
fugitivo: Sprite = None
info.set_score(0)
scene.set_background_color(13)
tiles.set_tilemap(tilemap("""
    nivel01
"""))
fugitivo = sprites.create(assets.image("""
    fugitivoSprite
"""), SpriteKind.player)
tiles.place_on_random_tile(fugitivo, sprites.castle.tile_path5)
scene.camera_follow_sprite(fugitivo)
animation.run_image_animation(fugitivo,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    200,
    True)
invocaPerseguidor()

def on_on_update():
    controller.move_sprite(fugitivo)
    info.change_score_by(1)
game.on_update(on_on_update)
