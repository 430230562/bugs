const item = require("zerg/item");

const nickelWall = new Wall("nickel-wall");
exports.nickelWall = nickelWall;
Object.assign(nickelWall, {
	health: 400,
	armor: 1,
	size: 1,
	alwaysUnlocked: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.nickel, 6,
	),
})

const nickelWallLarge = new Wall("nickel-wall-large");
exports.nickelWallLarge = nickelWallLarge;
Object.assign(nickelWallLarge, {
	health: 400 * 4,
	armor: 1,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.nickel, 6 * 4,
	),
})

const manganeseWall = new Wall("manganese-wall");
exports.manganeseWall = manganeseWall;
Object.assign(manganeseWall, {
	health: 600,
	armor: 7,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.nickel, 2,
		item.manganese, 4,
	),
})

const manganeseWallLarge = new Wall("manganese-wall-large");
exports.manganeseWallLarge = manganeseWallLarge;
Object.assign(manganeseWallLarge, {
	health: 600 * 4,
	armor: 7,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.nickel, 2 * 4,
		item.manganese, 4 * 4,
	),
})

const chromiumWall = new Wall("chromium-wall");
exports.chromiumWall = chromiumWall;
Object.assign(chromiumWall,{
	health: 700,
	armor: 9,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.chromium, 6,
	),
})

const chromiumWallLarge = new Wall("chromium-wall-large");
exports.chromiumWallLarge = chromiumWallLarge;
Object.assign(chromiumWallLarge,{
	health: 700 * 4,
	armor: 9,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.chromium, 6 * 4,
	),
})

const iridiumWall = new Wall("iridium-wall");
exports.iridiumWall = iridiumWall;
Object.assign(iridiumWall,{
    health: 1200,
	armor: 11,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.iridium, 6,
	),
})

const iridiumWallLarge = new Wall("iridium-wall-large");
exports.iridiumWallLarge = iridiumWallLarge;
Object.assign(iridiumWallLarge,{
    health: 1200 * 4,
	armor: 11,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.iridium, 6 * 4,
	),
})

const crystalWall = new Wall("crystal-wall");
exports.crystalWall = crystalWall;
Object.assign(crystalWall, {
	health: 520,
	armor: 5,
	size: 1,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 6,
	),
})

const crystalWallLarge = new Wall("crystal-wall-large");
exports.crystalWallLarge = crystalWallLarge;
Object.assign(crystalWallLarge, {
	health: 520 * 4,
	armor: 5,
	size: 2,
	insulated: true,
	absorbLasers: true,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.crystal, 6 * 4,
	),
})

const energicWall = new Wall("energic-wall");
exports.energicWall = energicWall;
Object.assign(energicWall, {
	health: 470,
	armor: 3,
	size: 1,
	insulated: true,
	absorbLasers: true,
	lightningChance: 0.2,
	baseExplosiveness: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.energic, 6,
	),
})

const energicWallLarge = new Wall("energic-wall-large");
exports.energicWallLarge = energicWallLarge;
Object.assign(energicWallLarge, {
	health: 470 * 4,
	armor: 3,
	size: 2,
	insulated: true,
	absorbLasers: true,
	lightningChance: 0.2,
	baseExplosiveness: 6 * 4,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.energic, 6 * 4,
	),
})

const biomassWall = new Wall("biomass-wall");
exports.biomassWall = biomassWall;
Object.assign(biomassWall, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 750,
	armor: 13,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6,
	),
})

const biomassWallLarge = new Wall("biomass-wall-large");
exports.biomassWallLarge = biomassWallLarge;
Object.assign(biomassWallLarge, {
	chanceDeflect: 7.2,
	flashHit: true,
	flashColor: Color.valueOf("98ba53"),
	deflectSound: Sounds.none,
	health: 750 * 4,
	armor: 13,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.biomassSteel, 6 * 4,
	),
})

const biosulfideWall = new Wall("biosulfide-wall");
exports.biosulfideWall = biosulfideWall;
Object.assign(biosulfideWall,{
    chanceDeflect: 40,
	flashHit: true,
	deflectSound: Sounds.none,
	health: 280,
	baseExplosiveness: 20,
	armor: 0,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
	    item.chromium, 2,
		item.biosulfide, 4,
	),
})

const biosulfideWallLarge = new Wall("biosulfide-wall-large");
exports.biosulfideWallLarge = biosulfideWallLarge;
Object.assign(biosulfideWallLarge,{
    chanceDeflect: 40,
	flashHit: true,
	deflectSound: Sounds.none,
	health: 280 * 4,
	baseExplosiveness: 40,
	armor: 0,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
	    item.chromium, 2 * 4,
		item.biosulfide, 4 * 4,
	),
})

const manganeseDoor = new AutoDoor("manganese-door");
exports.manganeseDoor = manganeseDoor;
Object.assign(manganeseDoor,{
	health: 640,
	armor: 7,
	size: 1,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		Items.silicon, 4,
		item.nickel, 2,
		item.manganese, 4,
	),
})

const manganeseDoorLarge = new AutoDoor("manganese-door-large");
exports.manganeseDoorLarge = manganeseDoorLarge;
Object.assign(manganeseDoorLarge,{
	health: 640 * 4,
	armor: 7,
	size: 2,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		Items.silicon, 4 * 4,
		item.nickel, 2 * 4,
		item.manganese, 4 * 4,
	),
})