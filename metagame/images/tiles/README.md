# Terrain tiles

Manifest schema 2: corners NW, NE, SE, SW contain material strings. `rotatable` enables quarter turns, `mirrorable` horizontal reflection before rotation, `weight` selects deterministic variants. Water is transparent; green grass pixels are replaced with aligned grass textures. Pure grass and water need no coast sprite. Current generator emits grass and water; other materials are reserved for future generation.
