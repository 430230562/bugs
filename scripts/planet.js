const item = require('item');
const core = require('block/core');

const greavar = new Planet("greavar", Planets.sun, 1, 2);
Object.assign(greavar, {
	generator: extend(SerpuloPlanetGenerator,{
		allowLanding(sector){return false},
		getColor(position){
			var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;
			return Color.valueOf("9cb664").write(Color.valueOf("3c7141")).lerp(Color.valueOf("84a94b"),Mathf.clamp(Mathf.round(depth, 0.25)));
		},
		getDefaultLoadout() {
		    return Schematics.readBase64("bXNjaAF4nBXLUQqAIBBF0WdKRa2lFUUfow45oBaN7b+Ey/m7sLAOrlJhWNKESRtTkYhFQ+JCTYJijazhkbvJVQGMmTxnxbAfBrN/T936CpjezwfPPBUT");
	    },
	}),
	meshLoader: prov(() => new HexMesh(greavar, 4)),
	cloudMeshLoader: () => new MultiMesh(
		new HexSkyMesh(greavar, 2, 0.15, 0.14, 5, Color.valueOf("f2ff90bf"), 2, 0.42, 1, 0.43)
	),
	atmosphereColor: Color.valueOf("3c7141"),
	landCloudColor: Color.valueOf("3c7141"),
	atmosphereRadIn: 0,
	atmosphereRadOut: 0.2,
	camRadius: 0.5,
	visible: true,
	bloom: false,
	accessible: true,
	alwaysUnlocked: true,
	allowLaunchLoadout: true,
	allowLaunchSchematics: true,
	launchCapacityMultiplier: 0.75,
	clearSectorOnLose: true,
	startSector: 2,
	orbitRadius: 65,
	rotateTime: 34.7 * 60,
	defaultCore: core.ash,
	iconColor: Color.valueOf("3c7141"),
})
greavar.totalRadius += 2.6;
greavar.hiddenItems.addAll(
	Items.scrap,
	Items.copper,
	Items.lead,
	Items.titanium,
	Items.thorium,
	Items.plastanium,
	Items.phaseFabric,
	Items.surgeAlloy,
	Items.blastCompound,
	Items.pyratite,
	Items.metaglass,
	Items.beryllium,
	Items.tungsten,
	Items.oxide,
	Items.carbide,
	Items.fissileMatter,
	Items.dormantCyst
);
exports.greavar = greavar;

Planets.serpulo.hiddenItems.addAll(
	item.salt,
	item.biomass,
	item.nickel,
	item.manganese,
	item.crystal,
	item.chromium,
	item.biomassSteel,
	item.sulfone,
	item.organic,
	item.hypha,
	item.energic
);
Planets.erekir.hiddenItems.addAll(
	item.salt,
	item.biomass,
	item.nickel,
	item.manganese,
	item.crystal,
	item.chromium,
	item.biomassSteel,
	item.sulfone,
	item.organic,
	item.hypha,
	item.energic
);

const valleyPlain = new SectorPreset("valleyPlain", greavar, 2);
exports.valleyPlain = valleyPlain;
Object.assign(valleyPlain, {
	captureWave: 15,
	difficulty: 1,
	addStartingItems: true,
	alwaysUnlocked: true,
	startWaveTimeMultiplier: 3,
})

const siliconPond = new SectorPreset("siliconPond", greavar, 12);
exports.siliconPond = siliconPond;
Object.assign(siliconPond, {
	captureWave: 20,
	difficulty: 2,
})