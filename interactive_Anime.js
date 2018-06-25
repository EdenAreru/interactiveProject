(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"interactive_Anime_atlas_", frames: [[0,0,1920,1200],[3432,2806,626,626],[2564,3313,637,384],[2315,2284,970,545],[1922,0,1791,1190],[3287,2284,798,520],[0,3820,1847,167],[0,2216,1287,880],[1282,3098,1280,720],[1922,1192,1831,1090],[0,3098,1280,720],[1289,2284,1024,768],[2564,3699,520,293],[0,1202,1579,1012],[2564,2831,866,480],[3203,3434,601,370]]}
];


// symbols:



(lib.accelworld = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blackbulletjpgcopy = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DeathNoteAnimejpgcopy = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fairytail = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fruitsbasket = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.geners = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LCDScreenTVPNG = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mylovestory = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.naruto = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.nogamenolife = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.orenhighhostclub = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.parasite = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Pokemon = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.series = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tokyomewmew = function() {
	this.spriteSheet = ss["interactive_Anime_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tv_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AomGoIAAtPIRNAAIAANPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tv_black, new cjs.Rectangle(-55.1,-42.3,110.3,84.8), null);


(lib.series_photo_click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,0,0.008)").s().p("AomGoIAAtPIRNAAIAANPg");
	this.shape.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.series_photo_click, new cjs.Rectangle(-55.1,-41.8,110.3,84.8), null);


(lib.fullTV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LCDScreenTVPNG();
	this.instance.parent = this;
	this.instance.setTransform(-643.5,-468.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhgwA1rMAAAhrVMDBhAAAMAAABrVg");
	this.shape.setTransform(-0.8,-88.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fullTV, new cjs.Rectangle(-643.5,-468.2,1287,880), null);


(lib.info_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.red1_txt = new cjs.Text("עברו", "20px 'Arial'", "#FF0000");
	this.red1_txt.name = "red1_txt";
	this.red1_txt.textAlign = "center";
	this.red1_txt.lineHeight = 24;
	this.red1_txt.lineWidth = 52;
	this.red1_txt.parent = this;
	this.red1_txt.setTransform(308.6,-56.4);

	this.instructions1 = new cjs.Text("     על הז'אנרים למעלה בשביל לחשוף את הסדרות המתאימות לאותו ז'אנר", "20px 'Arial'", "#0000CC");
	this.instructions1.name = "instructions1";
	this.instructions1.textAlign = "center";
	this.instructions1.lineHeight = 24;
	this.instructions1.lineWidth = 907;
	this.instructions1.parent = this;
	this.instructions1.setTransform(0,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instructions1,p:{x:0,y:-56.4,text:"     על הז'אנרים למעלה בשביל לחשוף את הסדרות המתאימות לאותו ז'אנר",lineWidth:907}},{t:this.red1_txt,p:{x:308.6,y:-56.4,text:"עברו"}}]}).to({state:[{t:this.instructions1,p:{x:-9.5,y:-56.1,text:"      על אחד הז'אנרים בכדי לקבל מידע על הז'אנר",lineWidth:388}},{t:this.red1_txt,p:{x:214.7,y:-56.1,text:"לחצו"}}]},1).to({state:[{t:this.instructions1,p:{x:0,y:-49.1,text:"    על אחת מהסדרות המודגשות בכדי לקבל עליה יותר מידע",lineWidth:905}},{t:this.red1_txt,p:{x:257,y:-49.1,text:"לחצו"}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-58.4,910.9,37.7);


(lib.geners_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKIADAhIAAAPg");
	this.shape.setTransform(202.8,123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AgFAZIgEgZIAAgYIATAAIAAAYIgFAZg");
	this.shape_1.setTransform(196.9,116.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_2.setTransform(189.6,123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgBgEgEgDQgEgDgHAAIgKABIgCgOQAHgCAKgBQALAAAIAGQAHAEACAIQADAHAAANIAABDg");
	this.shape_3.setTransform(179.8,122.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_4.setTransform(171,122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgQAAQgNAAgQACIgCgPQASgEAQAAQAgABAMAMQANALAAAaIAAA3gAgrA1IAAg6IASAAIAAA6g");
	this.shape_5.setTransform(154.9,122.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgQAAQgNAAgQACIgCgPQASgEAQAAQAgABAMAMQANALAAAaIAAA3gAgrA1IAAg6IASAAIAAA6g");
	this.shape_6.setTransform(142.9,122.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA1IAAgQIAhAAIAAgeIgBgZQgBgIgFgEQgFgGgGAAQgLAAgHAMQgHAMgGAaIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgKAKgIQAJgHALAAQAMABAIAGQAJAGAEAMQAEAMAAAWIAAAug");
	this.shape_7.setTransform(130.5,122.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_8.setTransform(122.3,120.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_9.setTransform(117.4,123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDALgDIgShaIATAAIAPBTQAQgGAEgMQAFgLAAgTIABgjIASAAIgBAbIgCAbQgBAIgDAJQgEAKgIAHQgJAHgPAGQgPAGgdAEg");
	this.shape_10.setTransform(109.1,123.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBbAAIAAAQIgRAAIAABXg");
	this.shape_11.setTransform(99.3,123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbAAANANQAMAMAAAZIAAAnIAQAAIAAAQg");
	this.shape_12.setTransform(83.3,122.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBcAAIAAAQIgTAAIAABXg");
	this.shape_13.setTransform(72.8,123);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_14.setTransform(62,122.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.8)").s().p("AAXBIIAAhaQAAgRgEgGQgEgIgJgDQgIgDgMAAQgLAAgOACIgCgQQAPgCANgBQAcAAANAMQAOALAAAbIAABeg");
	this.shape_15.setTransform(51.8,124.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.8)").s().p("AglAyIADgQQAJADAJAAQALAAAHgFQAIgFAEgHQAEgJAAgLQAAgPgJgKQgJgKgQAAQgJAAgJADIgDgRQALgDAJAAQAZAAAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSAAQgJgBgLgDg");
	this.shape_16.setTransform(37.1,123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAGgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgEAHIgGAHQgHALgBAMIAAARg");
	this.shape_17.setTransform(27.7,121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgIALAAAMIAAARg");
	this.shape_18.setTransform(18.4,121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAHgIIAFgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAZQAAALgCAGQgCAHgFAHIgGAHQgHALgBAMIAAARg");
	this.shape_19.setTransform(3.6,121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgBgEgEgDQgEgDgHAAIgKABIgCgOQAHgCAKgBQALAAAIAGQAHAEACAIQADAHAAANIAABDg");
	this.shape_20.setTransform(-4.7,122.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDAKgDIgShaIAUAAIAPBTQAQgGAEgMQAFgLAAgTIABgjIASAAIgBAbIgBAbQgCAIgEAJQgEAKgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_21.setTransform(-13.6,123.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_22.setTransform(-24,122.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IARAAIAAA1g");
	this.shape_23.setTransform(-31.1,120.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAKQAEAIAAARIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_24.setTransform(-39.5,122.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbAAANANQAMAMAAAZIAAAnIARAAIAAAQg");
	this.shape_25.setTransform(-56.4,122.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgJAPIgFALIgTAAIAIgRQAIgOAJgEQAJgFAHABIAAgbIgBgNQgBgEgEgDQgEgDgHAAIgLABIgBgOQAHgCAJgBQAMAAAHAGQAHAEADAIQACAHAAANIAAAgIAKAjg");
	this.shape_26.setTransform(-66.1,122.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_27.setTransform(-72.4,120.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgIALAAAMIAAARg");
	this.shape_28.setTransform(-79.7,121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_29.setTransform(-89.5,123);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_30.setTransform(-97.8,120.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.8)").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape_31.setTransform(-111.6,121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.8)").s().p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
	this.shape_32.setTransform(-123.2,121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDAMgDIgShaIATAAIAPBTQAQgGAEgMQAFgLgBgTIACgjIASAAIgBAbIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgPAGgcAEg");
	this.shape_33.setTransform(-139.4,123.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBcAAIAAAQIgSAAIAABXg");
	this.shape_34.setTransform(-149.2,123);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.8)").s().p("AghA9QgNgNAAgTQAAgOAHgJQAHgIANgEQgLgEgFgHQgFgIAAgLQAAgPALgLQALgKASAAQASAAAMAKQALALAAAQQAAAKgFAIQgFAHgLAEQANAEAHAJQAHAKAAAMQAAATgNANQgNAMgVAAQgUAAgNgMgAgUAIQgIAJAAAMQAAAHAEAIQADAHAHADQAHAEAHABQANgBAIgHQAIgJAAgMQAAgNgIgIQgJgJgMAAQgMAAgIAIgAgQg0QgGAHAAAJQAAAKAGAHQAHAGAJAAQAKAAAHgGQAGgHAAgJQAAgKgGgGQgHgHgKAAQgJAAgHAGg");
	this.shape_35.setTransform(-165.4,121.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.8)").s().p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
	this.shape_36.setTransform(-177.2,121);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_37.setTransform(-184.8,127.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_38.setTransform(181.6,98.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgIgFgEQgFgFgGgBQgLAAgHAMQgHAMgGAaIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgJAKgIQAJgGALAAQAMgBAIAHQAJAGAEALQAEAMAAAXIAAAtg");
	this.shape_39.setTransform(172.8,98.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAHgIIAFgJIABgLIAAgNIg4AAIAAg4IASAAIAAAoIA5AAIAAAaQAAAJgCAIQgCAGgGAHIgEAHQgJALABAMIAAAQg");
	this.shape_40.setTransform(162.3,96.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAg3QAAgLgDgHQgCgGgIgEQgIgEgNAAIgSACIAABVIgTAAIAAhkQAVgEARABQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4g");
	this.shape_41.setTransform(151.9,98.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgIgFgEQgFgFgGgBQgLAAgHAMQgIAMgFAaIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgJAKgIQAJgGALAAQAMgBAIAHQAJAGAEALQAEAMAAAXIAAAtg");
	this.shape_42.setTransform(139.6,98.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_43.setTransform(131.4,98.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgOQAFABAGAAQAHAAACgCQADgEAAgHIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_44.setTransform(122,98.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.8)").s().p("AglAzIADgRQAJADAJAAQALAAAHgEQAIgGAEgIQAEgIAAgLQAAgPgJgLQgJgKgQAAQgJAAgJADIgDgRQALgDAJAAQAZAAAPAQQAPAPAAAWQAAAQgHALQgGAMgMAHQgMAHgSAAQgJAAgLgCg");
	this.shape_45.setTransform(105.9,98.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg4AAIAAgQIBdAAIAAAQIgSAAIAABXg");
	this.shape_46.setTransform(96.3,98.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_47.setTransform(88.7,96.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAGgIIAFgJIABgLIAAgNIg4AAIAAg4IASAAIAAAoIA5AAIAAAaQAAAJgCAIQgCAGgGAHIgEAHQgJALABAMIAAAQg");
	this.shape_48.setTransform(75.9,96.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAuIAFgPQAKAGAOAAQAQAAAMgJQAMgJAAgTQAAgRgJgKQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgCIACANQgFADgIgBQgNAAgHgGQgHgGAAgOIAAgeQARgFATgBQAVAAAQAOQAPAOAAAZQAAAYgQAOQgQAPgaAAQgTABgMgIg");
	this.shape_49.setTransform(66.1,98.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgOQAFABAGAAQAHAAACgCQADgEAAgHIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_50.setTransform(53.6,98.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAg3QAAgLgDgHQgCgGgIgEQgIgEgNAAIgSACIAABVIgTAAIAAhkQAVgEARABQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4g");
	this.shape_51.setTransform(41.7,98.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_52.setTransform(24.8,98.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgOQAFABAGAAQAHAAACgCQADgEAAgHIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_53.setTransform(12,98.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgQAAQgNAAgRADIgBgRQASgCARAAQAfAAANAMQAMALAAAZIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_54.setTransform(0.1,98.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgEIgShaIATAAIAOBVQARgHAEgMQAFgMgBgSIABgkIATAAIgBAcIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgOAGgdAFg");
	this.shape_55.setTransform(-11.8,99.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAGgIIAGgJIABgLIAAgNIg4AAIAAg4IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgEAHIgGAHQgHALgBAMIAAAQg");
	this.shape_56.setTransform(-21.4,96.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_57.setTransform(-28.3,96.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAFgIIAGgJIABgLIAAgNIg4AAIAAg4IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgFAHIgEAHQgIALAAAMIAAAQg");
	this.shape_58.setTransform(-35.6,96.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgRADIgBgRQASgCAQAAQAgAAAMAMQANALAAAZIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_59.setTransform(-46,98.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_60.setTransform(-60.1,98.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAGgIIAGgJIABgLIAAgNIg4AAIAAg4IASAAIAAAoIA5AAIAAAaQAAAJgCAIQgDAGgEAHIgGAHQgHALgBAMIAAAQg");
	this.shape_61.setTransform(-67.4,96.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgQAAQgNAAgRADIgBgRQASgCARAAQAfAAANAMQAMALAAAZIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_62.setTransform(-77.8,98.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgEIgShaIATAAIAOBVQARgHAEgMQAFgMgBgSIABgkIATAAIgBAcIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgOAGgdAFg");
	this.shape_63.setTransform(-89.6,99.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgjQABgOgEgHQgDgHgIgFQgIgEgSAAIgUACIgBgQQANgCAPAAQAbAAANAMQAMAMAAAYIAAAoIAQAAIAAAPg");
	this.shape_64.setTransform(-99.8,98.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_65.setTransform(-107.7,96.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgyQAAgOgDgHQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANAAQAeAAANAMQAMAMAAAYIAAA3g");
	this.shape_66.setTransform(-115.8,98.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgIgEgEQgGgFgHgBQgKAAgHAMQgHAMgGAaIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgJAJgIQAJgGALAAQAMgBAJAHQAIAGAEALQAEAMAAAXIAAAtg");
	this.shape_67.setTransform(-132.2,98.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.8)").s().p("AgiAoQgOgPAAgZQAAgXAOgQQANgPAVAAQANAAAKAGQALAGAHAMQAIANgBARQABAQgGAMQgFAMgLAHQgMAIgPAAQgVAAgNgPgAgVgbQgGALAAAQQgBATAIAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgIALg");
	this.shape_68.setTransform(-143.7,98.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgyQAAgOgDgHQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANAAQAeAAANAMQAMAMAAAYIAAA3g");
	this.shape_69.setTransform(-155.1,98.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_70.setTransform(-162.4,102.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.8)").s().p("AgiAoQgOgPAAgZQAAgXAOgQQANgPAVAAQANAAAKAGQALAGAHAMQAIANgBARQAAAQgFAMQgGAMgKAHQgMAIgPAAQgVAAgNgPgAgVgbQgGALAAAQQgBATAIAKQAHAKANAAQAPAAAGgLQAIgLAAgRQgBgSgHgKQgIgKgNAAQgNAAgIALg");
	this.shape_71.setTransform(167.2,74.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBcAAIAAAQIgSAAIAABXg");
	this.shape_72.setTransform(156.4,74.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_73.setTransform(145.6,74.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgOQAFADAGAAQAHAAACgEQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_74.setTransform(134.1,74.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQABgbIgCgcIATAAIABAQQAAAaACAKQAKAAAJgFQAIgFAAgPIACgbIARAAIgBAgIgCANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgOAJQgNAJgTAAQgSAAgNgJg");
	this.shape_75.setTransform(115.7,74.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_76.setTransform(106.3,74.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgCgEgDgDQgDgCgHAAIgLABIgCgPQAHgCAJgBQAMAAAIAGQAHAEACAIQADAHAAANIAABDg");
	this.shape_77.setTransform(99.9,74.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.8)").s().p("AgIBIIAAiPIASAAIAACPg");
	this.shape_78.setTransform(94.3,76.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgJgFgFQgEgEgIAAQgLAAgGALQgHAMgGAaIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAHAXQAGgLAJgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_79.setTransform(80,74.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgOQAFADAGAAQAHAAACgEQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_80.setTransform(67.3,74.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_81.setTransform(55.8,74.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.8)").s().p("AglAyIADgQQAJADAJAAQALAAAHgFQAIgFAEgHQAEgJAAgLQAAgPgJgKQgJgLgQAAQgJABgJADIgDgRQALgDAJAAQAZAAAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSgBQgJAAgLgDg");
	this.shape_82.setTransform(46.6,74.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKIADAhIAAAPg");
	this.shape_83.setTransform(38.4,74.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgOQAFADAGAAQAHAAACgEQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_84.setTransform(27.4,74.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQABgNgEgHQgDgHgIgFQgIgEgSAAIgTABIgCgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIAQAAIAAAQg");
	this.shape_85.setTransform(10.6,74.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDALgDIgShaIATAAIAPBTQAQgGAEgMQAFgLAAgTIABgjIASAAIgBAbIgCAcQgBAGgDALQgEAJgIAHQgJAHgPAGQgPAGgdAEg");
	this.shape_86.setTransform(-0.7,74.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_87.setTransform(-7.9,71.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.8)").s().p("AgoBIIAAhiIASAAIAABigAABAgIAAgOQAAgLACgGQACgGAGgIIAGgHQAEgFACgFIABgLIAAgOIhBAAIAAgQIBTAAIAAAaQAAALgBAHQgDAGgFAHIgFAHQgIAKAAAMIAAARg");
	this.shape_88.setTransform(-15.7,76.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_89.setTransform(-27,74.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQABgNgEgHQgDgHgIgFQgIgEgSAAIgTABIgCgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIAQAAIAAAQg");
	this.shape_90.setTransform(-42.5,74.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgPAAQgOAAgQACIgCgQQASgDAQAAQAgABAMALQANAMAAAaIAAA3gAgrA1IAAg6IASAAIAAA6g");
	this.shape_91.setTransform(-54,74.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_92.setTransform(-65.7,74.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIBAAAIAAgkQAAgNgEgHQgDgHgIgFQgIgEgSAAIgTABIgCgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIAQAAIAAAQg");
	this.shape_93.setTransform(-75.6,74.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgQAAQgNAAgQACIgCgQQASgDAQAAQAgABAMALQANAMAAAaIAAA3gAgrA1IAAg6IASAAIAAA6g");
	this.shape_94.setTransform(-87.1,74.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.8)").s().p("AgoBIIAAhiIASAAIAABigAABAgIAAgOQAAgLACgGQACgGAGgIIAGgHQAEgFACgFIABgLIAAgOIhBAAIAAgQIBTAAIAAAaQAAALgBAHQgDAGgFAHIgFAHQgIAKAAAMIAAARg");
	this.shape_95.setTransform(-104,76.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_96.setTransform(-115.3,74.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbAAANANQAMAMAAAZIAAAnIARAAIAAAQg");
	this.shape_97.setTransform(-125.3,74.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_98.setTransform(-133.2,74.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgOQAFADAGAAQAHAAACgEQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_99.setTransform(-142.6,74.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgQADIgCgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_100.setTransform(136.5,49.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_101.setTransform(127.9,49.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_102.setTransform(120.1,49.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgFgFQgEgFgHgBQgMAAgGAMQgIALgFAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgKAJgHQAJgGALAAQAMgBAIAHQAJAGAEALQAEAMAAAXIAAAtg");
	this.shape_103.setTransform(102.4,49.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgCgEgDgCQgDgEgIAAIgKABIgBgOQAGgCAKAAQAMAAAHAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_104.setTransform(92.7,49.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgNgPABgZQgBgXANgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANABARQAAAQgGAMQgFAMgMAHQgLAIgPAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAOAAAIgLQAGgLAAgRQABgSgIgKQgIgKgNAAQgNAAgHALg");
	this.shape_105.setTransform(83.9,49.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgQADIgCgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_106.setTransform(72.1,49.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgFAHIgFAHQgHALAAAMIAAAQg");
	this.shape_107.setTransform(55.7,48);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgPAAQgOAAgRADIgBgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_108.setTransform(45.3,49.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.8)").s().p("AARA0IgHgZQgLAAgIAOIgGALIgTAAIAIgQQAIgOAJgEQAJgEAHAAIAAgbIgBgNQgCgEgDgCQgEgEgHAAIgLABIgBgOQAGgCAKAAQANAAAGAEQAIAFACAIQADAHAAAOIAAAeIAJAjg");
	this.shape_109.setTransform(35,49.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQAAgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIARAAIgBAgIgCANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgGAOgNAJQgMAJgUAAQgSAAgNgJg");
	this.shape_110.setTransform(24.3,50.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IARAAIAAA1g");
	this.shape_111.setTransform(14.8,47.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA0IAAhkQAVgDARAAQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4gAgZghIAABGIA0AAIAAgoQAAgLgDgGQgCgHgIgEQgIgEgNAAIgSACg");
	this.shape_112.setTransform(6.4,49.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAHgIIAFgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAaQAAAJgCAIQgCAGgFAHIgGAHQgIALAAAMIAAAQg");
	this.shape_113.setTransform(-10,48);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_114.setTransform(-19.8,49.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_115.setTransform(-28.1,49.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgyQAAgNgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANAAQAeAAANAMQAMAMAAAYIAAA3g");
	this.shape_116.setTransform(-36.2,49.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.8)").s().p("AAXBJIAAhaQAAgSgEgGQgEgIgJgDQgIgDgMAAQgLAAgOACIgCgQQAPgCANAAQAcgBANAMQAOALAAAaIAABgg");
	this.shape_117.setTransform(-46.4,51.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgQADIgCgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_118.setTransform(-62.5,49.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgNgPAAgZQAAgXANgQQAOgPAVAAQANAAAKAGQALAGAHAMQAIANAAARQgBAQgFAMQgGAMgLAHQgKAIgQAAQgVAAgOgPgAgVgbQgHALAAAQQAAATAIAKQAHAKANAAQAOAAAIgLQAGgLABgRQAAgSgIgKQgHgKgOAAQgNAAgIALg");
	this.shape_119.setTransform(-74.3,49.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg4AAIAAgQIBdAAIAAAQIgSAAIAABXg");
	this.shape_120.setTransform(-85.1,49.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgyQAAgNgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANAAQAeAAANAMQAMAMAAAYIAAA3g");
	this.shape_121.setTransform(-95.9,49.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgQAAQgNAAgQADIgCgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_122.setTransform(-106.4,49.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_123.setTransform(-115.2,54.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABANAMQAMAMAAAYIAAAoIAQAAIAAAQg");
	this.shape_124.setTransform(159.3,25.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgMQgCgFgDgDQgEgCgGAAIgLABIgCgPQAHgCAJgBQAMAAAIAGQAHAFADAHQACAHAAANIAABDg");
	this.shape_125.setTransform(149.9,25.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCAKgDIgShaIAUAAIAOBTQARgGAEgMQAEgMABgSIAAgjIATAAIgBAbIgBAcQgBAGgFALQgDAJgIAHQgJAHgPAGQgOAGgeAEg");
	this.shape_126.setTransform(141,26.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeABANAMQAMAMAAAYIAAA4g");
	this.shape_127.setTransform(130.6,25.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAIgFACgGQADgGAAgMIACgRIATAAIgBATQgBAJgBAGQgBAFgGAHQgFAFgLAGIAWAjIAAALg");
	this.shape_128.setTransform(115.3,25.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCAKgDIgShaIAUAAIAPBTQAQgGAEgMQAFgMAAgSIABgjIASAAIgBAbIgBAcQgCAGgDALQgFAJgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_129.setTransform(105.2,26.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_130.setTransform(97.9,23.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeABANAMQAMAMAAAYIAAA4g");
	this.shape_131.setTransform(89.8,25.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQAAgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIASAAIgCAgIgDANQgBAEgEAEQgDAFgJADQgIAEgOABQACALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAEgJACgQIAEgsIASAAIgDAmQgCAVgFAOQgGAOgNAJQgMAJgUAAQgTAAgMgJg");
	this.shape_132.setTransform(72.8,25.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_133.setTransform(63.3,23.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgJADQgIAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAFgJAAgQIAFgsIASAAIgDAmQgCAVgFAOQgFAOgNAJQgOAJgTAAQgTAAgMgJg");
	this.shape_134.setTransform(53.9,25.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAGgHIAGgKIABgLIAAgNIg4AAIAAg3IASAAIAAAnIA5AAIAAAZQAAAKgCAHQgDAHgEAHIgGAHQgHALgBAMIAAARg");
	this.shape_135.setTransform(36.6,23.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_136.setTransform(29.7,25.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQAAgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIASAAIgCAgIgDANQgBAEgEAEQgDAFgJADQgIAEgOABQACALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAEgJACgQIAEgsIASAAIgDAmQgCAVgFAOQgGAOgNAJQgMAJgUAAQgTAAgMgJg");
	this.shape_137.setTransform(14.7,25.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_138.setTransform(2.4,25.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_139.setTransform(-6,23.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAvIAFgQQAKAHAOAAQAQAAAMgKQAMgKAAgSQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgBIACAMQgFACgIAAQgNABgHgHQgHgGAAgOIAAgeQARgGATAAQAVAAAQAOQAPANAAAaQAAAYgQAPQgQAOgaAAQgTAAgMgGg");
	this.shape_140.setTransform(-13.8,25.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgPAAQgOAAgRACIgBgQQASgDAQAAQAgAAAMAMQANANAAAYIAAA4gAgsA1IAAg6IATAAIAAA6g");
	this.shape_141.setTransform(-25.4,25.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_142.setTransform(-36.8,25.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_143.setTransform(-45.2,25.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA1IAAgQIAhAAIAAgeIgBgYQgBgIgFgGQgEgEgHAAQgLAAgHALQgHALgGAbIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgLAKgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_144.setTransform(-59.5,25.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgIgEgLQgEgLgBgTIAAgxIATAAIAAA0QAAAXAJAIQAIAIAKgBQALABAGgGQAHgFABgJQACgHAAgNIAAgOQABgXgNABQgKgBgGALIgHgKQAKgRAQAAQAOgBAHALQAIALgBAVIAAAHQAAAUgDALQgEALgMAIQgKAIgRAAQgOAAgMgHg");
	this.shape_145.setTransform(-70.9,25.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeABANAMQAMAMAAAYIAAA4g");
	this.shape_146.setTransform(-82.6,25.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgPAAQgOAAgQACIgCgQQASgDAQAAQAgAAAMAMQANANAAAYIAAA4gAgrA1IAAg6IASAAIAAA6g");
	this.shape_147.setTransform(-93.1,25.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_148.setTransform(-110.1,25.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_149.setTransform(-118.5,25.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgPQAFACAGABQAHgBACgDQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_150.setTransform(-127.9,25.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgPAAQgOAAgRACIgBgQQASgDARAAQAfAAANAMQAMANAAAYIAAA4gAgsA1IAAg6IATAAIAAA6g");
	this.shape_151.setTransform(-139.8,25.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.8)").s().p("AgiAoQgOgPAAgZQAAgXAOgQQANgPAVAAQANAAAKAGQALAGAHAMQAIANgBARQAAAQgFAMQgGAMgKAHQgMAIgPAAQgVAAgNgPgAgVgbQgGALAAAQQgBATAIAKQAHAKANAAQAPAAAGgLQAIgLAAgRQgBgSgHgKQgIgKgNAAQgNAAgIALg");
	this.shape_152.setTransform(155.5,1.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBcAAIAAAQIgSAAIAABXg");
	this.shape_153.setTransform(144.7,1.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgzQAAgNgDgHQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgDANAAQAeAAANANQAMAMAAAZIAAA2g");
	this.shape_154.setTransform(133.9,1.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_155.setTransform(126.9,1.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgEAAgIIAAg6IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_156.setTransform(117.5,1.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgEgFQgFgGgHAAQgLAAgHAMQgIALgFAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALgBQAMAAAJAHQAIAGAEALQAEANAAAWIAAAtg");
	this.shape_157.setTransform(99.7,1.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgDgHQgEgHgJgEQgJgEgPAAQgOAAgRADIgBgQQASgDAQgBQAgAAAMANQANAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_158.setTransform(88,1.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKIADAhIAAAPg");
	this.shape_159.setTransform(78.4,1.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.8)").s().p("AgFAZIgEgZIAAgYIATAAIAAAYIgFAZg");
	this.shape_160.setTransform(72.4,-5.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.8)").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_161.setTransform(65.1,1.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgCgEgDgCQgDgEgHAAIgLABIgCgOQAHgDAJAAQAMABAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_162.setTransform(55.3,1.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgzQAAgNgDgHQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgDANAAQAeAAANANQAMAMAAAZIAAA2g");
	this.shape_163.setTransform(46.6,1.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgEgHQgDgHgJgEQgJgEgQAAQgNAAgQADIgCgQQASgDARgBQAfAAANANQAMAMAAAZIAAA2gAgrA0IAAg5IASAAIAAA5g");
	this.shape_164.setTransform(30.5,1.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKIADAhIAAAPg");
	this.shape_165.setTransform(20.8,1.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgDgHQgEgHgJgEQgJgEgQAAQgNAAgRADIgBgQQASgDARgBQAfAAANANQAMAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_166.setTransform(10.8,1.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDAMgEIgShaIATAAIAPBVQAQgHAEgMQAFgMgBgSIACgkIASAAIgBAcIgCAbQgBAHgDAKQgFAKgIAHQgIAHgPAGQgPAGgcAFg");
	this.shape_167.setTransform(-6.6,1.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_168.setTransform(-13.9,1.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgMgPAAgZQAAgXAMgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANAAARQABAQgGAMQgFAMgLAHQgLAIgQAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgHALg");
	this.shape_169.setTransform(-22.1,1.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.8)").s().p("AgoBIIAAhiIASAAIAABigAABAgIAAgOQAAgLACgGQACgGAGgIIAGgHQAEgFACgFIABgLIAAgOIhBAAIAAgQIBTAAIAAAaQAAALgBAHQgDAGgFAHIgFAHQgIAKAAAMIAAARg");
	this.shape_170.setTransform(-33.2,3.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_171.setTransform(-41.3,1.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgEAAgIIAAg6IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_172.setTransform(-50.7,1.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA0IAAgPIA+AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgDAPAAQAbAAANANQAMAMAAAZIAAAnIARAAIAAAPg");
	this.shape_173.setTransform(-67.6,1.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBcAAIAAAQIgSAAIAABXg");
	this.shape_174.setTransform(-78.1,1.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgzQAAgNgDgHQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgDANAAQAeAAANANQAMAMAAAZIAAA2g");
	this.shape_175.setTransform(-88.8,1.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.8)").s().p("AAXBJIAAhbQAAgRgEgGQgEgIgJgDQgIgDgMAAQgLAAgOACIgCgQQAPgDANAAQAcAAANAMQAOALAAAbIAABfg");
	this.shape_176.setTransform(-99,3.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.8)").s().p("AglAyIADgQQAJADAJAAQALAAAHgFQAIgEAEgJQAEgIAAgLQAAgPgJgKQgJgLgQABQgJAAgJACIgDgRQALgCAJAAQAZAAAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSAAQgJAAgLgEg");
	this.shape_177.setTransform(-113.8,1.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgHQACgGAEgGIAGgIIAGgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAZQAAALgCAGQgDAHgEAHIgGAHQgHALgBAMIAAAQg");
	this.shape_178.setTransform(-123.2,-0.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgHQACgGAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgFAHIgFAHQgHALAAAMIAAAQg");
	this.shape_179.setTransform(-132.4,-0.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.8)").s().p("AhEA1QgYgaAAg1IgCg1IApAAIAAApIACAYIAAAKQAKAAAIgFQAHgFADgIQACgIABgVIABgcIAnAAIgCAnQgBAPgCAIQgCAIgGAJQgGAHgMAGQgNAGgVACQADAMAMAIQAMAIAPAAQAYAAANgPQANgPADgpIAFg5IAoAAIgFA8QgDAlgJASQgJASgUANQgVANgeAAQgqAAgYgbg");
	this.shape_180.setTransform(23.5,-27.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.8)").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_181.setTransform(8.6,-27.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.8)").s().p("AgoBOIAAgjIAqAAIAAg5QAAgSgHgGQgIgGgOAAIgMABIgDggQALgDASABQAcgBAOAOQAOAPAAAfIAABgg");
	this.shape_182.setTransform(-1.6,-27.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.8)").s().p("AgUBsIAAjXIApAAIAADXg");
	this.shape_183.setTransform(-11.1,-24.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgPAAQgOAAgRACIgBgQQASgDARAAQAfABANALQAMAMAAAaIAAA3gAgsA1IAAg6IATAAIAAA6g");
	this.shape_184.setTransform(48.3,74.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgHgEgMQgEgLAAgTIAAgxIASAAIAAA0QABAYAIAHQAIAIAKgBQALABAHgGQAGgFACgJQABgHAAgNIAAgOQABgXgNABQgKgBgGAKIgHgJQAKgSAQAAQAOAAAHALQAHALAAAVIAAAIQAAASgDAMQgFALgLAIQgKAIgRAAQgOAAgMgHg");
	this.shape_185.setTransform(36.5,74.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgBgEgEgDQgDgCgIAAIgKABIgBgPQAGgCAJgBQANAAAHAGQAHAEADAIQACAHAAANIAABDg");
	this.shape_186.setTransform(17.4,74.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgKIAAgOIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgIALAAAMIAAARg");
	this.shape_187.setTransform(4.5,72.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgIAPIgGALIgTAAIAIgRQAIgOAJgEQAJgFAHAAIAAgaIgBgNQgCgEgDgDQgEgCgHAAIgLABIgBgPQAGgCAKgBQANAAAGAGQAIAEACAIQADAHAAANIAAAgIAJAjg");
	this.shape_188.setTransform(-9.1,74.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgQAAQgNAAgQADIgCgQQASgDARAAQAfAAANAMQAMAMAAAYIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_189.setTransform(195.3,49.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQABgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgBAgIgCANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_190.setTransform(160.8,50.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAIgFACgGQADgGAAgMIABgRIAUAAIgBATQAAAJgCAGQgCAFgFAHQgFAFgLAGIAWAjIAAALg");
	this.shape_191.setTransform(138.1,49.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAIgFADgGQACgGAAgMIABgRIAUAAIgBATQAAAJgCAGQgCAFgFAHQgFAFgLAGIAWAjIAAALg");
	this.shape_192.setTransform(128.6,49.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgRADIgBgQQASgDAQAAQAgAAAMAMQANAMAAAYIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_193.setTransform(118.3,49.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgjQAAgOgDgHQgDgHgIgFQgIgEgSAAIgUACIgBgQQANgCAPAAQAbAAANAMQAMAMAAAYIAAAoIAQAAIAAAPg");
	this.shape_194.setTransform(101.3,49.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDAMgEIgShaIATAAIAPBVQAQgHAEgMQAFgMgBgSIABgkIATAAIgBAcIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgPAGgcAFg");
	this.shape_195.setTransform(90,50.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgQAAQgNAAgRADIgBgQQASgDARAAQAfAAANAMQAMAMAAAYIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_196.setTransform(74.3,49.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQAAgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIASAAIgCAgIgCANQgCAEgEAEQgDAFgIADQgJAEgOABQACALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgGAOgNAJQgMAJgUAAQgSAAgNgJg");
	this.shape_197.setTransform(55.8,50.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgDAAgIIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_198.setTransform(25.7,49.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgPAAQgOAAgRADIgBgQQASgDAQAAQAgAAANAMQAMAMAAAYIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_199.setTransform(13.8,49.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgGAAIgLABIgCgOQAHgCAJAAQAMAAAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_200.setTransform(-7.3,49.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQABgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_201.setTransform(-17.4,50.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgFAHIgEAHQgJALABAMIAAAQg");
	this.shape_202.setTransform(-29.2,48);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAg3QAAgLgDgGQgCgHgIgEQgIgEgNAAIgSACIAABVIgTAAIAAhkQAVgDARAAQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4g");
	this.shape_203.setTransform(-39.5,49.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAuIAFgPQAKAGAOAAQAQAAAMgJQAMgJAAgTQAAgRgJgKQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgCIACANQgFACgIAAQgNAAgHgGQgHgGAAgOIAAgeQARgFATgBQAVABAQANQAPANAAAaQAAAYgQAOQgQAPgaABQgTAAgMgIg");
	this.shape_204.setTransform(-65.7,49.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgDAAgIIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_205.setTransform(-78.2,49.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgjQAAgOgDgHQgDgHgIgFQgIgEgSAAIgUACIgBgQQANgCAPAAQAbAAANAMQAMAMAAAYIAAAoIAQAAIAAAPg");
	this.shape_206.setTransform(-110.2,49.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgEgFQgGgFgHgBQgLAAgGAMQgHALgGAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgKAJgHQAJgGALAAQAMgBAJAHQAIAGAEALQAEAMAAAXIAAAtg");
	this.shape_207.setTransform(-133.2,49.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAHgFADgGQAEgGAAgMIABgRIATAAIgBATQgBAJgBAGQgBAFgGAHQgFAFgMAGIAXAjIAAALg");
	this.shape_208.setTransform(-144.2,49.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDALgEIgShaIAUAAIAOBVQARgHAEgMQAEgMABgSIAAgkIATAAIgBAcIgBAbQgBAIgFAJQgEAKgHAHQgJAHgPAGQgPAGgdAFg");
	this.shape_209.setTransform(-154.3,50.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgDAAgIIAAg7IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_210.setTransform(-170.9,49.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABAMAMQANAMAAAYIAAAoIARAAIAAAQg");
	this.shape_211.setTransform(160.8,25.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.8)").s().p("AgZAvQgMgIgEgLQgFgLABgTIAAgxIATAAIAAA0QgBAXAJAIQAIAIAKgBQALABAHgGQAGgFACgJQACgHAAgNIAAgOQgBgXgNABQgJgBgHALIgFgKQAJgRARAAQANgBAHALQAHALABAVIAAAHQAAAUgFALQgDALgLAIQgLAIgRAAQgOAAgLgHg");
	this.shape_212.setTransform(144.7,25.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgoQAAgLgDgHQgCgGgIgEQgIgEgNAAIgSABg");
	this.shape_213.setTransform(127.8,25.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgIgFgGQgFgEgGAAQgLAAgHALQgIALgFAbIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAHAXQAFgLAKgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_214.setTransform(105,25.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.8)").s().p("AglAzIADgRQAJADAJAAQALAAAHgFQAIgEAEgIQAEgJAAgLQAAgPgJgLQgJgJgQgBQgJAAgJAEIgDgRQALgDAJgBQAZABAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSgBQgJAAgLgCg");
	this.shape_215.setTransform(94.6,25.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgMQgCgFgDgDQgEgCgGAAIgLABIgBgPQAGgCAJgBQANAAAHAGQAHAFADAHQACAHAAANIAABDg");
	this.shape_216.setTransform(81.2,25.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_217.setTransform(70.6,25.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA1IAAgQIAhAAIAAgeIgBgYQgBgIgEgGQgFgEgHAAQgLAAgHALQgIALgFAbIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgLAKgGQAJgIALAAQAMABAJAGQAIAGAEAMQAEALAAAXIAAAug");
	this.shape_218.setTransform(43.5,25.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgDIgShaIATAAIAPBTQAQgGAEgMQAFgMgBgSIABgjIATAAIgBAbIgCAcQgBAGgDALQgFAJgIAHQgIAHgPAGQgOAGgdAEg");
	this.shape_219.setTransform(32,26.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_220.setTransform(24.7,25.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAvIAFgQQAKAHAOAAQAQAAAMgKQAMgKAAgSQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgBIACAMQgFACgIAAQgNABgHgHQgHgGAAgOIAAgeQARgGATAAQAVAAAQAOQAPANAAAaQAAAYgQAPQgQAOgaAAQgTAAgMgGg");
	this.shape_221.setTransform(5.9,25.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgPQAFACAGABQAHgBACgDQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_222.setTransform(-11.5,25.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABANAMQAMAMAAAYIAAAoIARAAIAAAQg");
	this.shape_223.setTransform(-33.9,25.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.8)").s().p("AAXBIIAAhaQAAgQgEgIQgEgGgJgEQgIgDgMAAQgLAAgOACIgCgQQAPgCANgBQAcAAANAMQAOALAAAaIAABfg");
	this.shape_224.setTransform(-65.4,27.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.8)").s().p("AglAzIADgRQAJADAJAAQALAAAHgFQAIgEAEgIQAEgJAAgLQAAgPgJgLQgJgJgQgBQgJAAgJAEIgDgRQALgDAJgBQAZABAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSgBQgJAAgLgCg");
	this.shape_225.setTransform(-80.1,25.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAHgHIAFgKIABgLIAAgNIg4AAIAAg3IASAAIAAAnIA5AAIAAAZQAAAKgCAHQgCAHgFAHIgGAHQgHALgBAMIAAARg");
	this.shape_226.setTransform(-89.5,23.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAGgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgEAHIgGAHQgHALgBAMIAAARg");
	this.shape_227.setTransform(-98.8,23.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAHgHIAFgKIABgLIAAgNIg4AAIAAg3IASAAIAAAnIA5AAIAAAZQAAAKgCAHQgCAHgGAHIgEAHQgJALAAAMIAAARg");
	this.shape_228.setTransform(-113.6,23.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgJAOIgFAMIgTAAIAIgQQAHgPAKgEQAJgFAHAAIAAgaIgBgMQgBgFgFgDQgDgCgHAAIgKABIgCgPQAHgCAJgBQAMAAAIAGQAGAFADAHQACAHAAANIAAAgIAKAjg");
	this.shape_229.setTransform(-122.2,25.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.8)").s().p("AgiAoQgNgPgBgZQABgXANgQQANgPAVAAQANAAAKAGQALAGAHAMQAIANAAARQgBAQgFAMQgGAMgLAHQgKAIgQAAQgVAAgNgPgAgVgbQgGALgBAQQAAATAIAKQAHAKANAAQAOAAAIgLQAGgLABgRQAAgSgIgKQgHgKgOAAQgNAAgIALg");
	this.shape_230.setTransform(177.3,1.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.8)").s().p("AARA0IgHgZQgLAAgJAPIgFAKIgTAAIAIgQQAHgOAKgEQAJgFAHABIAAgbIgBgNQgCgEgEgCQgDgEgHAAIgLABIgBgOQAGgDAKAAQAMABAIAEQAGAFADAIQADAHgBAOIAAAeIAKAjg");
	this.shape_231.setTransform(167.3,1.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgGAAIgLABIgCgOQAHgDAJAAQAMABAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_232.setTransform(159.6,1.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgFgFQgEgGgIAAQgLAAgGAMQgHALgGAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgKAJgHQAJgGALgBQAMAAAIAHQAJAGAEALQAEANAAAWIAAAtg");
	this.shape_233.setTransform(122.7,1.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAuIAFgPQAKAGAOAAQAQAAAMgJQAMgJAAgTQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgCIACANQgFACgIABQgNgBgHgGQgHgGAAgNIAAgfQARgFATAAQAVAAAQANQAPANAAAaQAAAYgQAOQgQAPgaABQgTAAgMgIg");
	this.shape_234.setTransform(95.4,1.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.8)").s().p("AgJBIIAAiPIASAAIAACPg");
	this.shape_235.setTransform(77.5,3.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA0IAAgPIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgDAPAAQAbAAAMANQANAMAAAZIAAAnIARAAIAAAPg");
	this.shape_236.setTransform(64.1,1.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgDgHQgEgHgJgEQgJgEgQAAQgNAAgRADIgBgQQASgDARgBQAfAAANANQAMAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_237.setTransform(52.6,1.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgDgHQgEgHgJgEQgJgEgPAAQgOAAgRADIgBgQQASgDARgBQAfAAANANQAMAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_238.setTransform(19.5,1.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAg2QAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABIAABWIgTAAIAAhkQAVgEARAAQASABAMAFQAMAGAFAKQAEAIAAASIAAA4g");
	this.shape_239.setTransform(2,1.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_240.setTransform(-6.5,-1.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_241.setTransform(-21.6,1.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQgBgbIAAgcIASAAIAAAQQABAaACAKQAKAAAIgFQAJgFAAgPIACgbIASAAIgDAgIgCANQgBAEgEAEQgDAFgJADQgIAEgOABQACALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAEgJACgQIAEgsIASAAIgDAmQgCAVgFAOQgFAOgNAJQgOAJgTAAQgTAAgMgJg");
	this.shape_242.setTransform(-31,1.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_243.setTransform(-40.5,-1.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA0IAAhkQAVgEARAAQASABAMAFQAMAGAFAKQAEAIAAASIAAA4gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_244.setTransform(-48.9,1.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgHgEgMQgFgLABgUIAAgwIATAAIAAA1QAAAWAIAIQAIAIAKAAQALgBAHgFQAGgFACgIQABgJAAgNIAAgNQABgWgNgBQgKABgGAJIgHgJQAKgSAQAAQAOAAAHAMQAHAKAAAVIAAAIQAAASgDAMQgFALgLAIQgKAJgRgBQgOABgMgIg");
	this.shape_245.setTransform(-66.2,1.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgCgEgDgCQgEgEgGAAIgLABIgBgOQAGgDAJAAQANABAHAEQAHAFADAIQACAHAAAOIAABBg");
	this.shape_246.setTransform(-85.3,1.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_247.setTransform(-90.9,1.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.8)").s().p("AARA0IgHgZQgLAAgIAPIgGAKIgTAAIAIgQQAHgOAKgEQAJgFAHABIAAgbIgBgNQgBgEgEgCQgEgEgHAAIgLABIgBgOQAHgDAJAAQANABAGAEQAIAFACAIQADAHAAAOIAAAeIAJAjg");
	this.shape_248.setTransform(-111.8,1.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA0IAAhkQAVgEARAAQASABAMAFQAMAGAFAKQAEAIAAASIAAA4gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_249.setTransform(-126.5,1.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.8)").s().p("AglAyIADgQQAJADAJAAQALAAAHgFQAIgEAEgJQAEgIAAgLQAAgPgJgKQgJgLgQABQgJAAgJACIgDgRQALgCAJAAQAZAAAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSAAQgJAAgLgEg");
	this.shape_250.setTransform(-142.7,1.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgFgFQgEgGgHAAQgLAAgHAMQgHALgGAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALgBQAMAAAIAHQAJAGAEALQAEANAAAWIAAAtg");
	this.shape_251.setTransform(-153.5,1.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_252.setTransform(-161.7,1.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.8)").s().p("AACBOIAAgjIAmAAIAAgfQAAgegFgMQgFgMgNAAQgNAAgIAOQgJAPgHAnIgKA0IgrAAIAHgiQAHgdAFgOIgahNIAlAAIAJAiQAXgkAgABQAcAAAQAVQAQAWAAAwIAABAg");
	this.shape_253.setTransform(64.4,-27.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.8)").s().p("AAKBOIAAh3IhUAAIAAgkICVAAIAAAkIgYAAIAAB3g");
	this.shape_254.setTransform(47.3,-27.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.8)").s().p("AhIA4QAYgEARgEIgbiIIApAAIAVB8QAQgHAFgLQAFgLABgWIABhJIApAAIgCA4IgDAlQgCANgGANQgHANgNALQgOAKgbAJQgcAJgmAGg");
	this.shape_255.setTransform(30.2,-26.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.8)").s().p("AhLBOIAAgjIBUAAIAAgpQAAgZgKgKQgLgLgbABQgQAAgTADIgDghQAXgFAWABQAqAAAUARQAUASAAAmIAAAvIAcAAIAAAjg");
	this.shape_256.setTransform(5.9,-27.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.8)").s().p("AAKBOIAAh3IhUAAIAAgkICVAAIAAAkIgYAAIAAB3g");
	this.shape_257.setTransform(-11.1,-27.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.8)").s().p("AgUArIAAhWIApAAIAABWg");
	this.shape_258.setTransform(-23.5,-31.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.8)").s().p("AgUArIAAhWIApAAIAABWg");
	this.shape_259.setTransform(-51.4,-31.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgHAAIgKABIgCgOQAHgCAKAAQALAAAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_260.setTransform(99.2,49.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKQADAXAAAKIAAAPg");
	this.shape_261.setTransform(76.8,49.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.8)").s().p("AARA0IgHgZQgLAAgJAOIgFALIgTAAIAIgQQAIgOAJgEQAJgEAHAAIAAgbIgBgNQgBgEgEgCQgEgEgHAAIgLABIgBgOQAHgCAJAAQAMAAAIAEQAGAFADAIQACAHAAAOIAAAeIAKAjg");
	this.shape_262.setTransform(50.9,49.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgFgFQgEgFgHgBQgLAAgHAMQgHALgGAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALAAQAMgBAIAHQAJAGAEALQAEAMAAAXIAAAtg");
	this.shape_263.setTransform(23.3,49.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAGgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgEAHIgGAHQgHALgBAMIAAAQg");
	this.shape_264.setTransform(-1.1,48);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgjQAAgOgDgHQgDgHgIgFQgIgEgSAAIgTACIgCgQQANgCAPAAQAbAAAMAMQANAMAAAYIAAAoIAQAAIAAAPg");
	this.shape_265.setTransform(-10.9,49.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgEgFQgFgFgHgBQgLAAgHAMQgIALgFAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALAAQAMgBAJAHQAIAGAEALQAEAMAAAXIAAAtg");
	this.shape_266.setTransform(-43.4,49.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgCgEgDgCQgEgEgGAAIgLABIgCgOQAHgCAJAAQAMAAAIAEQAHAFADAIQACAHAAAOIAABBg");
	this.shape_267.setTransform(-53,49.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(0,0,0,0.8)").s().p("AgZAvQgMgHgEgMQgFgLABgUIAAgwIATAAIAAA1QgBAWAJAIQAIAHAKABQALgBAHgFQAGgFACgIQACgJAAgNIAAgNQgBgWgNgBQgJABgHAJIgFgJQAJgRARgBQANAAAHAMQAHAKABAVIAAAHQAAATgFAMQgDALgLAIQgLAJgRAAQgOAAgLgIg");
	this.shape_268.setTransform(-61.9,50);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgDgHQgEgIgJgDQgJgEgPAAQgOAAgRADIgBgQQASgDARAAQAfAAANAMQAMAMAAAYIAAA3gAgsA0IAAg5IATAAIAAA5g");
	this.shape_269.setTransform(-89.8,49.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgEAHIgGAHQgHALAAAMIAAARg");
	this.shape_270.setTransform(136.7,23.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAHgHIAFgKIABgLIAAgNIg4AAIAAg3IASAAIAAAnIA5AAIAAAZQAAAKgCAHQgDAHgEAHIgGAHQgHALgBAMIAAARg");
	this.shape_271.setTransform(109,23.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgIgFgGQgEgEgIAAQgLAAgGALQgIALgFAbIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAHAXQAGgLAJgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_272.setTransform(98.3,25.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg4AAIAAgQIBcAAIAAAQIgSAAIAABXg");
	this.shape_273.setTransform(82.6,25.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQABgNgEgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABANAMQAMAMAAAYIAAAoIAQAAIAAAQg");
	this.shape_274.setTransform(38.8,25.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABAMAMQANAMAAAYIAAAoIARAAIAAAQg");
	this.shape_275.setTransform(-33.6,25.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgDIgShaIATAAIAOBTQARgGAEgMQAFgMgBgSIABgjIATAAIgBAbIgCAcQgBAGgDALQgFAJgIAHQgIAHgPAGQgOAGgdAEg");
	this.shape_276.setTransform(-86,26.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_277.setTransform(-93.3,23.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AyIADgPQAFACAGABQAHgBACgDQADgCAAgJIAAg6IgVACIgCgQQAXgDAXAAQAWAAAMAEQANAEAHALQAGAKAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgEQgIgFgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGAEQgGADgLAAQgJAAgJgDg");
	this.shape_278.setTransform(-102.7,25.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgoQAAgLgDgHQgCgGgIgEQgIgEgNAAIgSABg");
	this.shape_279.setTransform(-119.5,25.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(0,0,0,0.8)").s().p("AgKARQAGgDADgFQABgEAAgIIgIAAIAAgUIATAAIAAAUQAAAKgEAHQgEAGgIAEg");
	this.shape_280.setTransform(-128.3,31.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(0,0,0,0.8)").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKQADAXAAAKIAAAPg");
	this.shape_281.setTransform(147.9,1.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAZIgFgZIAAgYIATAAIAAAYIgFAZg");
	this.shape_282.setTransform(141.9,-5.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIAAAQQABAaACAKQAKAAAIgFQAJgFAAgPIACgbIASAAIgDAgIgCANQgBAEgEAEQgDAFgJADQgIAEgOABQACALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAEgJACgQIAEgsIASAAIgDAmQgCAVgFAOQgFAOgNAJQgOAJgTAAQgTAAgMgJg");
	this.shape_283.setTransform(99,1.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgHQACgGAEgGIAHgIIAFgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAZQAAALgCAGQgCAHgFAHIgGAHQgIALAAAMIAAAQg");
	this.shape_284.setTransform(87.2,-0.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_285.setTransform(56.5,-1.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgFgFQgFgGgGAAQgLAAgHAMQgHALgGAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALgBQAMAAAIAHQAJAGAEALQAEANAAAWIAAAtg");
	this.shape_286.setTransform(47.7,1.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgEgHQgDgHgJgEQgJgEgPAAQgOAAgQADIgCgQQASgDAQgBQAgAAAMANQANAMAAAZIAAA2gAgrA0IAAg5IASAAIAAA5g");
	this.shape_287.setTransform(36,1.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDALgEIgShaIATAAIAPBVQAQgHAEgMQAFgMAAgSIABgkIASAAIgBAcIgCAbQgBAHgDAKQgEAKgIAHQgJAHgPAGQgPAGgdAFg");
	this.shape_288.setTransform(4.7,1.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgMgPAAgZQAAgXAMgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANAAARQABAQgGAMQgFAMgMAHQgLAIgPAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgHALg");
	this.shape_289.setTransform(-10.7,1.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA0IAAgPIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgDAPAAQAbAAANANQAMAMAAAZIAAAnIARAAIAAAPg");
	this.shape_290.setTransform(-38.4,1.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgEgHQgDgHgJgEQgJgEgQAAQgNAAgQADIgCgQQASgDAQgBQAgAAAMANQANAMAAAZIAAA2gAgrA0IAAg5IASAAIAAA5g");
	this.shape_291.setTransform(-77.3,1.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(0,0,0,0.8)").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_292.setTransform(-85.8,-1.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(0,0,0,0.8)").s().p("AAfBOIAAhQQAAgVgJgKQgIgLgXABQgNAAgJABIAAB4IgoAAIAAiXQAbgFAdABQAlgBARAKQATAIAHAPQAHAQABAZIAABSg");
	this.shape_293.setTransform(74.7,-27.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(0,0,0,0.8)").s().p("AgUArIAAhWIApAAIAABWg");
	this.shape_294.setTransform(19.3,-31.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(0,0,0,0.8)").s().p("AhXBKIAHgbQAJADAHAAQAIAAADgEQADgFAAgMIAAhJQgKAAgVACIgDgfQAlgFApAAQAhAAAVAGQAUAGAKAQQAKAQAAAdIAABTIgpAAIAAhNQAAgcgKgJQgKgKgkABIAABNQAAATgDAJQgDAIgJAGQgKAFgRAAQgTAAgRgFg");
	this.shape_295.setTransform(4.4,-27.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(0,0,0,0.8)").s().p("Ag5A7QgXgWAAgkQAAgkAXgWQAWgXAjAAQAYAAASAKQASAKAKASQALATAAAXQAAAigXAYQgXAXgjAAQgiAAgXgWgAgbghQgKAOAAATQAAAWALANQAKANAQAAQASAAAJgNQALgNAAgWQAAgVgLgNQgJgNgSAAQgSAAgJAOg");
	this.shape_296.setTransform(-22.5,-27.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(0,0,0,0.8)").s().p("AhKBGIAIgbQAWAIAVAAQAYAAAPgNQAQgNAAgZQAAgYgMgOQgNgOgVAAIgRACIAAASQAAAVARAAIAFAAIAHAZQgKAEgMAAQgMAAgKgEQgKgEgHgKQgHgKAAgaIAAgkQAcgHAcAAQAoAAAYAVQAZAWAAAiQAAAmgbAWQgaAWgqAAQgbAAgbgKg");
	this.shape_297.setTransform(-40.4,-27.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(0,0,0,0.8)").s().p("AAZBOIAAhMQAAgYgMgKQgNgLgaAAQgOAAgWADIgDghQAVgFAbABQApAAAVARQAVARAAAnIAABSg");
	this.shape_298.setTransform(-57.8,-27.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgCgEgDgDQgDgCgIAAIgKABIgBgPQAGgCAKgBQAMAAAHAGQAHAEACAIQADAHAAANIAABDg");
	this.shape_299.setTransform(128.7,74.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgJgFgFQgFgEgGAAQgLAAgHALQgHAMgGAaIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgLAKgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_300.setTransform(69.9,74.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(0,0,0,0.8)").s().p("AgZAvQgMgHgEgMQgFgLABgTIAAgxIATAAIAAA0QAAAYAIAHQAIAIAKgBQALABAHgGQAGgFACgJQACgHAAgNIAAgOQgBgXgNABQgJgBgGAKIgGgJQAJgSARAAQANAAAHALQAHALABAVIAAAIQgBASgDAMQgFALgKAIQgLAIgRAAQgOAAgLgHg");
	this.shape_301.setTransform(47.6,74.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAFgJAAgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_302.setTransform(29.1,74.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAGgHIAFgKIABgKIAAgOIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgJALABAMIAAARg");
	this.shape_303.setTransform(17.3,72.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgQAAQgNAAgRACIgBgQQASgDARAAQAfABANALQAMAMAAAaIAAA3gAgsA1IAAg6IATAAIAAA6g");
	this.shape_304.setTransform(1.3,74.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg3QAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABIAABXIgTAAIAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6g");
	this.shape_305.setTransform(-35.4,74.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg3QAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABIAABXIgTAAIAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6g");
	this.shape_306.setTransform(-69.9,74.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgIAPIgGALIgTAAIAIgRQAIgOAJgEQAJgFAHAAIAAgaIgBgNQgCgEgEgDQgDgCgHAAIgKABIgCgPQAGgCAKgBQAMAAAIAGQAGAEADAIQACAHABANIAAAgIAJAjg");
	this.shape_307.setTransform(-101.6,74.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_308.setTransform(-111.3,74.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg3QAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABIAABXIgTAAIAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6g");
	this.shape_309.setTransform(-133.8,74.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBbAAIAAAQIgSAAIAABXg");
	this.shape_310.setTransform(-144.8,74.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(0,0,0,0.8)").s().p("AglAzIADgRQAJADAJAAQALAAAHgEQAIgGAEgIQAEgIAAgLQAAgPgJgKQgJgLgQABQgJAAgJACIgDgRQALgDAJAAQAZABAPAPQAPAPAAAWQAAAQgHALQgGAMgMAHQgMAHgSABQgJAAgLgDg");
	this.shape_311.setTransform(160.6,49.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgFAHIgEAHQgIALAAAMIAAAQg");
	this.shape_312.setTransform(146.2,48);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAHgFAEgGQACgGAAgMIABgRIAUAAIgBATQAAAJgCAGQgCAFgFAHQgFAFgMAGIAXAjIAAALg");
	this.shape_313.setTransform(90.6,49.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAuIAFgPQAKAGAOAAQAQAAAMgJQAMgJAAgTQAAgRgJgKQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgCIACANQgFACgIAAQgNAAgHgGQgHgGAAgOIAAgeQARgFATgBQAVABAQANQAPANAAAaQAAAYgQAOQgQAPgaABQgTAAgMgIg");
	this.shape_314.setTransform(75.9,49.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDAKgEIgShaIAUAAIAOBVQARgHAEgMQAEgMAAgSIABgkIATAAIgBAcIgCAbQAAAIgFAJQgDAKgJAHQgIAHgPAGQgOAGgdAFg");
	this.shape_315.setTransform(42.1,50.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgjQAAgOgDgHQgDgHgIgFQgIgEgSAAIgUACIgBgQQANgCAPAAQAbAAANAMQAMAMAAAYIAAAoIARAAIAAAPg");
	this.shape_316.setTransform(27,49.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA0IAAhkQAVgDARAAQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4gAgZghIAABGIA0AAIAAgoQAAgLgDgGQgCgHgIgEQgIgEgNAAIgSACg");
	this.shape_317.setTransform(0.5,49.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgEgFQgGgFgHgBQgKAAgHAMQgIALgFAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALAAQAMgBAJAHQAIAGAEALQAEAMAAAXIAAAtg");
	this.shape_318.setTransform(-17.4,49.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgMgPAAgZQAAgXAMgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANAAARQABAQgGAMQgFAMgLAHQgLAIgQAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgHALg");
	this.shape_319.setTransform(-28.8,49.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDAMgEIgShaIATAAIAPBVQAQgHAEgMQAFgMgBgSIACgkIASAAIgBAcIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgPAGgcAFg");
	this.shape_320.setTransform(-40.4,50.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA0IAAgPIA/AAIAAgjQgBgOgDgHQgDgHgIgFQgIgEgSAAIgUACIgBgQQANgCAPAAQAbAAAMAMQANAMAAAYIAAAoIARAAIAAAPg");
	this.shape_321.setTransform(-91.6,49.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgFgFQgFgFgGgBQgLAAgHAMQgIALgFAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAFgKAKgHQAJgGALAAQAMgBAIAHQAJAGAEALQAEAMAAAXIAAAtg");
	this.shape_322.setTransform(-129,49.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA0IAAgyQAAgNgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANAAQAeAAANAMQAMAMAAAYIAAA3g");
	this.shape_323.setTransform(-140.4,49.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_324.setTransform(186.2,25.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgPAAQgOAAgQACIgCgQQASgDAQAAQAgAAAMAMQANANAAAYIAAA4gAgrA1IAAg6IASAAIAAA6g");
	this.shape_325.setTransform(165.7,25.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQABgbIgBgcIASAAIABAQQAAAaACAKQAKAAAJgFQAIgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_326.setTransform(152.7,25.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgFAHIgEAHQgJALABAMIAAARg");
	this.shape_327.setTransform(140.9,23.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_328.setTransform(124.8,25.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAFgJAAgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_329.setTransform(97,25.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAGgHIAFgKIABgLIAAgNIg4AAIAAg3IASAAIAAAnIA5AAIAAAZQAAAKgCAHQgDAHgFAHIgEAHQgJALABAMIAAARg");
	this.shape_330.setTransform(85.2,23.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBbAAIAAAQIgSAAIAABXg");
	this.shape_331.setTransform(54.4,25.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgFAHIgFAHQgHALAAAMIAAARg");
	this.shape_332.setTransform(9.3,23.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgFAHIgEAHQgJALABAMIAAARg");
	this.shape_333.setTransform(0.1,23.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgMQgBgFgEgDQgEgCgHAAIgKABIgCgPQAHgCAKgBQAMAAAHAGQAHAFACAHQADAHAAANIAABDg");
	this.shape_334.setTransform(-13.8,25.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(0,0,0,0.8)").s().p("AglAzIADgRQAJADAJAAQALAAAHgFQAIgEAEgIQAEgJAAgLQAAgPgJgLQgJgJgQgBQgJAAgJAEIgDgRQALgDAJgBQAZABAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSgBQgJAAgLgCg");
	this.shape_335.setTransform(-21.6,25.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA1IAAgQIAeAAIAAgyIgBgMQgBgFgEgDQgDgCgIAAIgKABIgBgPQAGgCAJgBQANAAAHAGQAHAFADAHQACAHAAANIAABDg");
	this.shape_336.setTransform(-86.1,25.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgQAAQgNAAgQACIgCgQQASgDAQAAQAgAAAMAMQANANAAAYIAAA4gAgrA1IAAg6IASAAIAAA6g");
	this.shape_337.setTransform(-136.2,25.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA+AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbABANAMQAMAMAAAYIAAAoIARAAIAAAQg");
	this.shape_338.setTransform(-152.6,25.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgIgEgLQgFgLABgTIAAgxIATAAIAAA0QAAAXAIAIQAIAIAKgBQALABAHgGQAGgFACgJQABgHAAgNIAAgOQABgXgNABQgKgBgGALIgHgKQAKgRAQAAQAOgBAHALQAHALAAAVIAAAHQAAAUgDALQgFALgLAIQgKAIgRAAQgOAAgMgHg");
	this.shape_339.setTransform(-163.8,25.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgDAPAAQAbAAANANQAMAMAAAZIAAAnIAQAAIAAAPg");
	this.shape_340.setTransform(180.9,1.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgMgPAAgZQAAgXAMgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANAAARQABAQgGAMQgFAMgMAHQgLAIgPAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgHALg");
	this.shape_341.setTransform(169.7,1.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(0,0,0,0.8)").s().p("AAKA0IAAhXIg3AAIAAgQIBbAAIAAAQIgSAAIAABXg");
	this.shape_342.setTransform(158.9,1.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_343.setTransform(141.1,1.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgFgFQgFgGgGAAQgLAAgHAMQgIALgFAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAFgKAKgHQAJgGALgBQAMAAAIAHQAJAGAEALQAEANAAAWIAAAtg");
	this.shape_344.setTransform(114,1.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgNgPABgZQgBgXANgQQAOgPAVAAQANAAAKAGQALAGAIAMQAHANAAARQgBAQgFAMQgGAMgLAHQgKAIgQAAQgVAAgOgPgAgVgbQgHALAAAQQAAATAIAKQAHAKANAAQAOAAAIgLQAGgLABgRQAAgSgIgKQgHgKgOAAQgNAAgIALg");
	this.shape_345.setTransform(102.5,1.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(0,0,0,0.8)").s().p("AARA0IgHgZQgLAAgJAPIgFAKIgTAAIAIgQQAHgOAKgEQAJgFAHABIAAgbIgBgNQgBgEgFgCQgDgEgHAAIgKABIgCgOQAHgDAJAAQAMABAIAEQAGAFADAIQADAHgBAOIAAAeIAKAjg");
	this.shape_346.setTransform(87.6,1.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgDgHQgEgHgJgEQgJgEgPAAQgOAAgRADIgBgQQASgDARgBQAfAAAMANQANAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_347.setTransform(64.6,1.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDALgEIgShaIAUAAIAOBVQARgHAEgMQAEgMABgSIAAgkIATAAIgBAcIgBAbQgBAHgFAKQgEAKgHAHQgJAHgPAGQgPAGgdAFg");
	this.shape_348.setTransform(35.2,1.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgEgFQgGgGgHAAQgKAAgHAMQgIALgFAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALgBQAMAAAJAHQAIAGAEALQAEANAAAWIAAAtg");
	this.shape_349.setTransform(-16.9,1.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(0,0,0,0.8)").s().p("Ag2AxIADgNQAFABAGAAQAHAAACgCQADgEAAgIIAAg6IgVABIgCgPQAXgDAXAAQAWAAAMAEQANAEAHAKQAGALAAAUIAAA3IgTAAIAAgzQAAgOgCgHQgCgHgIgFQgIgEgQAAIgKAAIAAA+QAAAKgBAFQgCAFgGADQgGAEgLAAQgJAAgJgEg");
	this.shape_350.setTransform(-69.5,1.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(0,0,0,0.8)").s().p("AgjAoQgNgPABgZQgBgXANgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANABARQAAAQgGAMQgFAMgMAHQgLAIgPAAQgVAAgOgPgAgUgbQgIALAAAQQABATAHAKQAIAKAMAAQAOAAAIgLQAGgLAAgRQABgSgIgKQgIgKgNAAQgNAAgHALg");
	this.shape_351.setTransform(-86.7,1.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgkQABgNgEgHQgDgHgIgFQgIgEgSAAIgTABIgCgPQANgDAPAAQAbAAAMANQANAMAAAZIAAAnIAQAAIAAAPg");
	this.shape_352.setTransform(-113.6,1.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(0,0,0,0.8)").s().p("AAfBOIg1hNQgLAKgDAkIgCAfIgnAAIADghQACgiAIgNQAJgPANgIIgkg0IAwAAIAsBAQAMgIACgeIACgaIAnAAIgCATQgEAhgIAOQgJANgOAKIAvBCg");
	this.shape_353.setTransform(32.7,-27.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(0,0,0,0.8)").s().p("AAgBOIAAhJQAAgbgNgLQgPgLgbAAQgVAAgZAEIgDgiQAXgDAhAAQAigBAUALQATAKAIAPQAJAPAAAbIAABOgAhGBOIAAhPIAoAAIAABPg");
	this.shape_354.setTransform(-12.8,-27.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgyQAAgPgEgHQgDgIgJgDQgJgEgPAAQgOAAgQADIgCgRQASgCAQAAQAgAAAMAMQANALAAAZIAAA3gAgrA0IAAg5IASAAIAAA5g");
	this.shape_355.setTransform(30.7,98.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgIgFgEQgEgFgHgBQgLAAgHAMQgHAMgGAaIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgJAKgIQAJgGALAAQAMgBAJAHQAIAGAEALQAEAMAAAXIAAAtg");
	this.shape_356.setTransform(18.4,98.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCAKgEIgShaIAUAAIAPBVQAQgHAEgMQAFgMAAgSIABgkIASAAIgBAcIgBAbQgCAIgEAJQgEAKgHAHQgJAHgPAGQgPAGgdAFg");
	this.shape_357.setTransform(-4.6,99.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgKIAAgOIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgJALABAMIAAARg");
	this.shape_358.setTransform(173.3,72.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgIAPIgGALIgTAAIAIgRQAIgOAJgEQAJgFAHAAIAAgaIgBgNQgCgEgEgDQgDgCgHAAIgKABIgCgPQAGgCAKgBQANAAAGAGQAIAEACAIQACAHABANIAAAgIAJAjg");
	this.shape_359.setTransform(164.7,74.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA1IAAgQIAhAAIAAgeIgBgYQgBgJgFgFQgEgEgHAAQgLAAgHALQgHAMgGAaIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgLAKgGQAJgIALAAQAMABAJAGQAIAGAEAMQAEALAAAXIAAAug");
	this.shape_360.setTransform(60.2,74.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAIgFADgGQACgGAAgMIABgRIAUAAIgBATQAAAJgCAGQgCAFgFAHQgFAFgMAGIAXAjIAAALg");
	this.shape_361.setTransform(49.3,74.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgHgEgMQgEgLAAgTIAAgxIATAAIAAA0QAAAYAIAHQAIAIAKgBQALABAHgGQAGgFACgJQABgHAAgNIAAgOQABgXgNABQgKgBgGAKIgHgJQAKgSAQAAQAOAAAHALQAHALAAAVIAAAIQAAASgDAMQgFALgLAIQgKAIgRAAQgOAAgMgHg");
	this.shape_362.setTransform(39.2,74.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAvIAFgQQAKAHAOAAQAQAAAMgKQAMgKAAgSQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgBIACAMQgFADgIAAQgNAAgHgHQgHgGAAgNIAAgfQARgGATABQAVAAAQANQAPAOAAAZQAAAYgQAPQgQAOgaAAQgTAAgMgGg");
	this.shape_363.setTransform(17.6,74.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA1IAAgQIA/AAIAAgkQgBgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIARAAIAAAQg");
	this.shape_364.setTransform(-27.7,74.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_365.setTransform(-45.9,71.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_366.setTransform(-54.3,74.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_367.setTransform(-88.8,74.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDALgDIgShaIAUAAIAOBTQARgGAEgMQAEgLABgTIAAgjIATAAIgBAbIgBAcQgBAGgFALQgEAJgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_368.setTransform(-106.1,74.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(0,0,0,0.8)").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_369.setTransform(-147.8,74.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQgBgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIASAAIgCAgIgDANQgBAEgEAEQgDAFgJADQgIAEgOABQACALAJAGQAJAGANAAQALAAAJgFQAIgGAEgJQAFgJABgQIAEgsIASAAIgDAmQgCAVgFAOQgGAOgNAJQgNAJgTAAQgSAAgNgJg");
	this.shape_370.setTransform(47.5,50.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAg3QAAgLgDgGQgCgHgIgEQgIgEgNAAIgSACIAABVIgTAAIAAhkQAVgDARAAQASAAAMAFQAMAGAFAKQAEAJAAARIAAA4g");
	this.shape_371.setTransform(-11.5,49.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(0,0,0,0.8)").s().p("AgwA0IAAgPIA/AAIAAgjQAAgOgEgHQgDgHgIgFQgIgEgSAAIgTACIgCgQQANgCAPAAQAbAAAMAMQANAMAAAYIAAAoIARAAIAAAPg");
	this.shape_372.setTransform(-22.9,49.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgTABIgCgPQANgCAPgBQAbABAMAMQANAMAAAYIAAAoIAQAAIAAAQg");
	this.shape_373.setTransform(89.4,25.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_374.setTransform(62.1,23.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgIgFgGQgEgEgIAAQgLAAgGALQgHALgGAbIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAHAXQAGgLAJgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_375.setTransform(38.6,25.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAHgFADgGQADgGABgMIABgRIATAAIgBATQgBAJgBAGQgBAFgGAHQgFAFgLAGIAWAjIAAALg");
	this.shape_376.setTransform(27.6,25.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA1IAAgQIAhAAIAAgeIgBgYQgBgIgEgGQgGgEgHAAQgKAAgHALQgIALgFAbIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgLAKgGQAJgIALAAQAMABAJAGQAIAGAEAMQAEALAAAXIAAAug");
	this.shape_377.setTransform(-62.4,25.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_378.setTransform(-93.1,23.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(0,0,0,0.8)").s().p("AgJAbIAAg1IATAAIAAA1g");
	this.shape_379.setTransform(-98.1,23.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCAKgDIgShaIAUAAIAPBTQAQgGAEgMQAFgMAAgSIABgjIASAAIgBAbIgBAcQgCAGgEALQgEAJgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_380.setTransform(-106.3,26.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgCANQgBAEgEAEQgDAFgJADQgIAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAFgJAAgQIAFgsIASAAIgDAmQgCAVgFAOQgFAOgNAJQgOAJgTAAQgTAAgMgJg");
	this.shape_381.setTransform(-138.7,25.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgEgHQgDgHgJgEQgJgEgPAAQgOAAgRADIgBgQQASgDAQgBQAgAAAMANQANAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_382.setTransform(164.2,1.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgEgFQgGgGgHAAQgKAAgHAMQgHALgGAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgKAJgHQAJgGALgBQAMAAAJAHQAIAGAEALQAEANAAAWIAAAtg");
	this.shape_383.setTransform(132.4,1.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA0IAAgzQAAgOgEgHQgDgHgJgEQgJgEgPAAQgOAAgRADIgBgQQASgDAQgBQAgAAAMANQANAMAAAZIAAA2gAgsA0IAAg5IATAAIAAA5g");
	this.shape_384.setTransform(-46.4,1.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA0IAAgPIA/AAIAAgkQABgNgEgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgDAPAAQAbAAANANQAMAMAAAZIAAAnIAQAAIAAAPg");
	this.shape_385.setTransform(-92.6,1.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(0,0,0,0.8)").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_386.setTransform(-140.1,1.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(0,0,0,0.8)").s().p("AhKBGIAIgbQAXAIATAAQAZAAAQgNQAPgNAAgZQAAgYgNgOQgMgOgWAAIgQACIAAASQAAAVARAAIAFAAIAHAZQgLAEgMAAQgLAAgKgEQgKgEgHgKQgHgKAAgaIAAgkQAcgHAcAAQAoAAAZAVQAYAWAAAiQAAAmgbAWQgaAWgpAAQgbAAgcgKg");
	this.shape_387.setTransform(34.2,-27.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(0,0,0,0.8)").s().p("AhEBsIAAiMIApAAIAACMgAABAwIAAgcQAAgMADgIQADgIAJgNIAEgFQAIgKAAgQIAAgTIhgAAIAAgkICJAAIAAAoQAAAWgCALQgCAKgGAJIgHAJQgHAKgBAFQgCAGAAAHIAAAag");
	this.shape_388.setTransform(-3.4,-24.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(0,0,0,0.8)").s().p("AAfBOIg2hNQgKAKgCAkIgDAfIgoAAIADghQADgiAJgNQAIgPANgIIgkg0IAwAAIAsBAQAMgIACgeIACgaIAmAAIgCATQgCAhgJAOQgIANgPAKIAvBCg");
	this.shape_389.setTransform(-20.5,-27.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(0,0,0,0.8)").s().p("AhXBKIAHgbQAJADAHAAQAIAAADgEQADgFAAgMIAAhJQgKAAgVACIgDgfQAlgFApAAQAhAAAVAGQAUAGAKAQQAKAQAAAdIAABTIgpAAIAAhNQAAgcgKgJQgKgKgkABIAABNQAAATgDAJQgDAIgJAGQgKAFgRAAQgTAAgRgFg");
	this.shape_390.setTransform(-48.7,-27.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(0,0,0,0.8)").s().p("AgxA1IAAgQIA/AAIAAgkQAAgNgDgHQgDgHgIgFQgIgEgSAAIgUABIgBgPQANgCAPgBQAbAAANANQAMAMAAAZIAAAnIARAAIAAAQg");
	this.shape_391.setTransform(72.5,74.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(0,0,0,0.8)").s().p("AAXBIIAAhaQAAgQgEgIQgEgGgJgEQgIgDgMAAQgLAAgOACIgCgQQAPgCANgBQAcAAANAMQAOALAAAbIAABeg");
	this.shape_392.setTransform(41,76.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(0,0,0,0.8)").s().p("AglAyIADgQQAJADAJAAQALAAAHgFQAIgFAEgHQAEgJAAgLQAAgPgJgKQgJgLgQAAQgJABgJADIgDgRQALgDAJAAQAZAAAPAPQAPAPAAAWQAAAPgHAMQgGAMgMAHQgMAIgSgBQgJAAgLgDg");
	this.shape_393.setTransform(26.3,74.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAEgGIAGgHIAGgKIABgKIAAgOIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAALgCAGQgDAHgEAHIgGAHQgHALgBAMIAAARg");
	this.shape_394.setTransform(16.9,72.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(0,0,0,0.8)").s().p("AARA1IgHgaQgLAAgJAPIgFALIgTAAIAIgRQAHgOAKgEQAJgFAHAAIAAgaIgBgNQgBgEgFgDQgDgCgHAAIgKABIgCgPQAHgCAJgBQAMAAAIAGQAGAEADAIQACAHAAANIAAAgIAKAjg");
	this.shape_395.setTransform(-6.6,74.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA1IAAgQIAiAAIAAgeIgBgYQgBgJgFgFQgEgEgIAAQgLAAgGALQgIAMgFAaIgHAnIgTAAIAIgpIAFgTIgQgrIASAAIAHAXQAGgLAJgGQAJgIALAAQAMABAIAGQAJAGAEAMQAEALAAAXIAAAug");
	this.shape_396.setTransform(-49.3,74.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAvQgLgHgEgMQgEgLgBgTIAAgxIATAAIAAA0QAAAYAJAHQAIAIAKgBQALABAGgGQAHgFABgJQACgHAAgNIAAgOQABgXgNABQgKgBgGAKIgHgJQAKgSAQAAQAOAAAHALQAIALgBAVIAAAIQAAASgDAMQgEALgMAIQgKAIgRAAQgOAAgMgHg");
	this.shape_397.setTransform(-67.8,74.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(0,0,0,0.8)").s().p("AgkA0IAAgQIAzAAIg4hXIAVAAIAcAuQAHgFAEgGQADgGAAgMIAAgRIAUAAIgBATQAAAJgCAGQgCAFgFAHQgFAFgMAGIAXAjIAAALg");
	this.shape_398.setTransform(170.7,49.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAHgIIAFgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAaQAAAJgCAIQgCAGgGAHIgEAHQgJALAAAMIAAAQg");
	this.shape_399.setTransform(82.2,48);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQARgDAMgEIgShaIATAAIAOBVQARgHAEgMQAFgMgBgSIABgkIATAAIgBAcIgCAbQgBAIgDAJQgFAKgIAHQgIAHgPAGQgOAGgdAFg");
	this.shape_400.setTransform(-14,50.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAEgGIAGgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgEAHIgGAHQgHALgBAMIAAAQg");
	this.shape_401.setTransform(-28.6,48);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgHAAIgKABIgCgOQAHgCAKAAQAMAAAHAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_402.setTransform(-82.7,49.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgGQACgHAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAaQAAAJgCAIQgDAGgFAHIgEAHQgIALAAAMIAAAQg");
	this.shape_403.setTransform(-157.5,48);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg4QAAgLgDgHQgCgGgIgEQgIgEgNAAIgSABIAABXIgTAAIAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6g");
	this.shape_404.setTransform(76,25.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCALgDIgThaIAUAAIAPBTQAQgGAEgMQAFgMAAgSIABgjIASAAIgBAbIgBAcQgCAGgEALQgEAJgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_405.setTransform(21.9,26.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgQAAQgNAAgRACIgBgQQASgDARAAQAfAAANAMQAMANAAAYIAAA4gAgsA1IAAg6IATAAIAAA6g");
	this.shape_406.setTransform(-4,25.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQASgCALgDIgShaIATAAIAPBTQAQgGAEgMQAFgMAAgSIABgjIASAAIgBAbIgCAcQgBAGgDALQgEAJgIAHQgJAHgPAGQgPAGgdAEg");
	this.shape_407.setTransform(-21.4,26.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_408.setTransform(-55.3,25.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(0,0,0,0.8)").s().p("AAbA1IAAg4QAAgLgDgHQgCgGgIgEQgIgEgNAAIgSABIAABXIgTAAIAAhlQAVgDARgBQASAAAMAHQAMAFAFAJQAEAKAAAQIAAA6g");
	this.shape_409.setTransform(-63.7,25.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgDIgShaIATAAIAPBTQAQgGAEgMQAFgMgBgSIACgjIASAAIgBAbIgCAcQgBAGgDALQgFAJgIAHQgIAHgPAGQgPAGgcAEg");
	this.shape_410.setTransform(-98.9,26.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgHIAGgKIABgLIAAgNIg4AAIAAg3IATAAIAAAnIA4AAIAAAZQAAAKgCAHQgDAHgFAHIgEAHQgIALAAAMIAAARg");
	this.shape_411.setTransform(-108.5,23.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(0,0,0,0.8)").s().p("AghAsQgMgJgGgQQgHgQABgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJABgQIAFgsIATAAIgEAmQgCAVgFAOQgFAOgNAJQgNAJgUAAQgSAAgNgJg");
	this.shape_412.setTransform(-125.4,25.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(0,0,0,0.8)").s().p("AgsAoQARgCAMgDIgShaIATAAIAPBTQAQgGAEgMQAFgMgBgSIABgjIATAAIgBAbIgCAcQgBAGgDALQgFAJgIAHQgIAHgPAGQgPAGgcAEg");
	this.shape_413.setTransform(-138.1,26.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(0,0,0,0.8)").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgFQgJgEgOAAQgLAAgOACIgCgQQAPgCANgBQAeABANAMQAMAMAAAYIAAA4g");
	this.shape_414.setTransform(-161.1,25.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgHAAIgKABIgCgOQAHgDAKAAQALABAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_415.setTransform(165.4,1.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(0,0,0,0.8)").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_416.setTransform(159.8,1.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(0,0,0,0.8)").s().p("AgJBIIAAiPIATAAIAACPg");
	this.shape_417.setTransform(154.8,3.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(0,0,0,0.8)").s().p("AgYA0IAAgPIAeAAIAAgyIgBgNQgBgEgEgCQgEgEgHAAIgKABIgCgOQAHgDAKAAQALABAIAEQAHAFACAIQADAHAAAOIAABBg");
	this.shape_418.setTransform(131.6,1.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(0,0,0,0.8)").s().p("AgDA0IAAgPIAhAAIAAgfIgBgYQgBgHgFgFQgFgGgGAAQgLAAgHAMQgHALgGAbIgIAmIgSAAIAIgoIAFgTIgQgrIASAAIAIAWQAEgKAKgHQAJgGALgBQAMAAAIAHQAJAGAEALQAEANAAAWIAAAtg");
	this.shape_419.setTransform(75.6,1.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDALgEIgShaIATAAIAPBVQAQgHAEgMQAFgMAAgSIABgkIASAAIgBAcIgCAbQgBAHgDAKQgEAKgIAHQgJAHgPAGQgPAGgcAFg");
	this.shape_420.setTransform(54.2,1.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(0,0,0,0.8)").s().p("AgsApQASgDAKgEIgShaIAUAAIAOBVQARgHAEgMQAEgMABgSIABgkIASAAIgBAcIgBAbQgCAHgEAKQgEAKgHAHQgJAHgPAGQgOAGgeAFg");
	this.shape_421.setTransform(11.7,1.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgHQACgGAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgIALAAAMIAAAQg");
	this.shape_422.setTransform(-93.2,-0.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(0,0,0,0.8)").s().p("AgCBHIAAgNQAAgNACgHQACgGAFgGIAGgIIAFgJIABgKIAAgPIg4AAIAAg3IASAAIAAAoIA5AAIAAAZQAAALgCAGQgDAHgFAHIgEAHQgJALABAMIAAAQg");
	this.shape_423.setTransform(-102.4,-0.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(0,0,0,0.8)").s().p("AgEA0IAAgPIAiAAIAAgfIgBgYQgBgHgEgFQgGgGgHAAQgLAAgGAMQgHALgGAbIgHAmIgTAAIAIgoIAFgTIgQgrIASAAIAHAWQAGgKAJgHQAJgGALgBQAMAAAJAHQAIAGAEALQAEANAAAWIAAAtg");
	this.shape_424.setTransform(-140.9,1.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(0,0,0,0.8)").s().p("AAWBOIgKgkQgPADgIAPIgKASIgpAAIAJgTQASgoAogEIAAgdQAAgPgFgIQgGgHgRAAIgMABIgEggQAMgDARABQAdgBAOAOQAOAOAAAgIAAAlIAQA7g");
	this.shape_425.setTransform(1.9,-27.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(0,0,0,0.8)").s().p("AgOAmIgIgnIAAgkIAsAAIAAAkIgHAng");
	this.shape_426.setTransform(-8.1,-37.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(0,0,0,0.8)").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_427.setTransform(-15.8,-27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_183},{t:this.shape_182,p:{x:-1.6}},{t:this.shape_181,p:{x:8.6}},{t:this.shape_180,p:{x:23.5}},{t:this.shape_179,p:{x:-132.4}},{t:this.shape_178,p:{x:-123.2}},{t:this.shape_177,p:{x:-113.8}},{t:this.shape_176,p:{x:-99}},{t:this.shape_175,p:{x:-88.8}},{t:this.shape_174},{t:this.shape_173,p:{x:-67.6}},{t:this.shape_172,p:{x:-50.7}},{t:this.shape_171,p:{x:-41.3,y:1.2}},{t:this.shape_170,p:{x:-33.2,y:3.2}},{t:this.shape_169,p:{x:-22.1,y:1.2}},{t:this.shape_168,p:{x:-13.9,y:1.2}},{t:this.shape_167},{t:this.shape_166,p:{x:10.8}},{t:this.shape_165},{t:this.shape_164,p:{x:30.5}},{t:this.shape_163,p:{x:46.6}},{t:this.shape_162,p:{x:55.3}},{t:this.shape_161,p:{x:65.1}},{t:this.shape_160},{t:this.shape_159,p:{x:78.4,y:1.2}},{t:this.shape_158},{t:this.shape_157,p:{x:99.7}},{t:this.shape_156,p:{x:117.5}},{t:this.shape_155,p:{x:126.9,y:1.2}},{t:this.shape_154,p:{x:133.9}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{x:-139.8}},{t:this.shape_150,p:{x:-127.9}},{t:this.shape_149,p:{x:-118.5,y:25.6}},{t:this.shape_148,p:{x:-110.1,y:25.6}},{t:this.shape_147,p:{x:-93.1}},{t:this.shape_146,p:{x:-82.6}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:-45.2,y:25.6}},{t:this.shape_142,p:{x:-36.8,y:25.6}},{t:this.shape_141,p:{x:-25.4}},{t:this.shape_140,p:{x:-13.8}},{t:this.shape_139,p:{x:-6,y:23.1}},{t:this.shape_138,p:{x:2.4,y:25.6}},{t:this.shape_137,p:{x:14.7}},{t:this.shape_136,p:{x:29.7,y:25.6}},{t:this.shape_135},{t:this.shape_134,p:{x:53.9,y:25.7}},{t:this.shape_133,p:{x:63.3,y:23.1}},{t:this.shape_132,p:{x:72.8,y:25.7}},{t:this.shape_131,p:{x:89.8}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:115.3,y:25.6}},{t:this.shape_127,p:{x:130.6}},{t:this.shape_126},{t:this.shape_125,p:{x:149.9}},{t:this.shape_124,p:{x:159.3}},{t:this.shape_123,p:{x:-115.2,y:54.1}},{t:this.shape_122,p:{x:-106.4}},{t:this.shape_121,p:{x:-95.9}},{t:this.shape_120,p:{x:-85.1,y:49.9}},{t:this.shape_119,p:{x:-74.3,y:49.9}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:-36.2}},{t:this.shape_115,p:{x:-28.1,y:49.9}},{t:this.shape_114,p:{x:-19.8,y:49.9}},{t:this.shape_113},{t:this.shape_112,p:{x:6.4}},{t:this.shape_111,p:{x:14.8,y:47.4}},{t:this.shape_110,p:{x:24.3,y:50.1}},{t:this.shape_109,p:{x:35}},{t:this.shape_108,p:{x:45.3}},{t:this.shape_107,p:{x:55.7}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:92.7}},{t:this.shape_103},{t:this.shape_102,p:{x:120.1,y:49.9}},{t:this.shape_101,p:{x:127.9,y:49.9}},{t:this.shape_100,p:{x:136.5}},{t:this.shape_99},{t:this.shape_98,p:{x:-133.2}},{t:this.shape_97,p:{x:-125.3}},{t:this.shape_96,p:{x:-115.3}},{t:this.shape_95,p:{x:-104,y:76.3}},{t:this.shape_94,p:{x:-87.1}},{t:this.shape_93},{t:this.shape_92,p:{x:-65.7}},{t:this.shape_91,p:{x:-54}},{t:this.shape_90},{t:this.shape_89,p:{x:-27}},{t:this.shape_88,p:{x:-15.7,y:76.3}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:10.6}},{t:this.shape_84},{t:this.shape_83,p:{x:38.4,y:74.3}},{t:this.shape_82,p:{x:46.6}},{t:this.shape_81,p:{x:55.8}},{t:this.shape_80,p:{x:67.3}},{t:this.shape_79},{t:this.shape_78,p:{x:94.3,y:76.3}},{t:this.shape_77},{t:this.shape_76,p:{x:106.3,y:74.3}},{t:this.shape_75,p:{x:115.7,y:74.4}},{t:this.shape_74,p:{x:134.1}},{t:this.shape_73,p:{x:145.6}},{t:this.shape_72},{t:this.shape_71,p:{x:167.2,y:74.3}},{t:this.shape_70,p:{x:-162.4,y:102.8}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-107.7,y:96.1}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:-60.1,y:98.6}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-28.3,y:96.1}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:24.8,y:98.6}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:88.7,y:96.1}},{t:this.shape_46,p:{x:96.3,y:98.6}},{t:this.shape_45},{t:this.shape_44,p:{x:122}},{t:this.shape_43,p:{x:131.4,y:98.6}},{t:this.shape_42},{t:this.shape_41,p:{x:151.9}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:181.6,y:98.6}},{t:this.shape_37,p:{x:-184.8,y:127.2}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-149.2,y:123}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-97.8,y:120.5}},{t:this.shape_29,p:{x:-89.5,y:123}},{t:this.shape_28},{t:this.shape_27,p:{x:-72.4,y:120.5}},{t:this.shape_26},{t:this.shape_25,p:{x:-56.4,y:122.9}},{t:this.shape_24},{t:this.shape_23,p:{x:-31.1,y:120.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:99.3,y:123}},{t:this.shape_10},{t:this.shape_9,p:{x:117.4,y:123}},{t:this.shape_8,p:{x:122.3,y:120.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:189.6,y:123}},{t:this.shape_1,p:{x:196.9,y:116.4}},{t:this.shape,p:{x:202.8,y:123}}]},1).to({state:[{t:this.shape_259,p:{x:-51.4}},{t:this.shape_182,p:{x:-41.9}},{t:this.shape_181,p:{x:-31.7}},{t:this.shape_258,p:{x:-23.5}},{t:this.shape_257},{t:this.shape_256,p:{x:5.9}},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253,p:{x:64.4}},{t:this.shape_252,p:{x:-161.7,y:1.2}},{t:this.shape_251,p:{x:-153.5}},{t:this.shape_250},{t:this.shape_249,p:{x:-126.5}},{t:this.shape_57,p:{x:-118.1,y:-1.3}},{t:this.shape_248},{t:this.shape_171,p:{x:-105.1,y:1.2}},{t:this.shape_179,p:{x:-98.2}},{t:this.shape_247},{t:this.shape_246,p:{x:-85.3}},{t:this.shape_177,p:{x:-76.8}},{t:this.shape_245},{t:this.shape_244,p:{x:-48.9}},{t:this.shape_243,p:{x:-40.5,y:-1.3}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_120,p:{x:-14,y:1.2}},{t:this.shape_240,p:{x:-6.5,y:-1.3}},{t:this.shape_239,p:{x:2}},{t:this.shape_238,p:{x:19.5}},{t:this.shape_173,p:{x:31}},{t:this.shape_154,p:{x:40.9}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235,p:{x:77.5,y:3.2}},{t:this.shape_47,p:{x:82.4,y:-1.3}},{t:this.shape_111,p:{x:87.4,y:-1.3}},{t:this.shape_234,p:{x:95.4}},{t:this.shape_155,p:{x:103.3,y:1.2}},{t:this.shape_102,p:{x:111.6,y:1.2}},{t:this.shape_233},{t:this.shape_166,p:{x:135.1}},{t:this.shape_78,p:{x:149.1,y:3.2}},{t:this.shape_149,p:{x:154,y:1.2}},{t:this.shape_232,p:{x:159.6}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_146,p:{x:-152.4}},{t:this.shape_168,p:{x:-144.3,y:25.6}},{t:this.shape_124,p:{x:-136.3}},{t:this.shape_139,p:{x:-128.5,y:23.1}},{t:this.shape_229},{t:this.shape_228,p:{x:-113.6}},{t:this.shape_227,p:{x:-98.8}},{t:this.shape_226},{t:this.shape_225,p:{x:-80.1}},{t:this.shape_224,p:{x:-65.4}},{t:this.shape_131,p:{x:-55.2}},{t:this.shape_46,p:{x:-44.4,y:25.6}},{t:this.shape_223},{t:this.shape_70,p:{x:-20.2,y:29.8}},{t:this.shape_222,p:{x:-11.5}},{t:this.shape_136,p:{x:-2.1,y:25.6}},{t:this.shape_221,p:{x:5.9}},{t:this.shape_140,p:{x:16.9}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_150,p:{x:61.2}},{t:this.shape_217,p:{x:70.6,y:25.6}},{t:this.shape_133,p:{x:75.6,y:23.1}},{t:this.shape_216},{t:this.shape_143,p:{x:87.6,y:25.6}},{t:this.shape_215,p:{x:94.6}},{t:this.shape_214},{t:this.shape_115,p:{x:113.7,y:25.6}},{t:this.shape_213,p:{x:127.8}},{t:this.shape_30,p:{x:136.2,y:23.1}},{t:this.shape_212},{t:this.shape_101,p:{x:152.9,y:25.6}},{t:this.shape_211,p:{x:160.8}},{t:this.shape_76,p:{x:168.7,y:25.6}},{t:this.shape_127,p:{x:175.7}},{t:this.shape_210},{t:this.shape_43,p:{x:-161.5,y:49.9}},{t:this.shape_209},{t:this.shape_208,p:{x:-144.2,y:49.9}},{t:this.shape_207},{t:this.shape_52,p:{x:-121.1,y:49.9}},{t:this.shape_206},{t:this.shape_121,p:{x:-94.7}},{t:this.shape_60,p:{x:-86.6,y:49.9}},{t:this.shape_205,p:{x:-78.2}},{t:this.shape_204,p:{x:-65.7}},{t:this.shape_107,p:{x:-55.9}},{t:this.shape_203,p:{x:-39.5}},{t:this.shape_202},{t:this.shape_201,p:{y:50.1,x:-17.4}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198,p:{x:25.7}},{t:this.shape_38,p:{x:35.1,y:49.9}},{t:this.shape_29,p:{x:43.4,y:49.9}},{t:this.shape_197},{t:this.shape_196,p:{x:74.3}},{t:this.shape_23,p:{x:82.8,y:47.4}},{t:this.shape_195},{t:this.shape_194,p:{x:101.3}},{t:this.shape_193,p:{x:118.3}},{t:this.shape_192,p:{x:128.6,y:49.9}},{t:this.shape_191},{t:this.shape_27,p:{x:151.4,y:47.4}},{t:this.shape_190},{t:this.shape_2,p:{x:173.6,y:49.9}},{t:this.shape_116,p:{x:183.6}},{t:this.shape_189},{t:this.shape_37,p:{x:-32.6,y:78.5}},{t:this.shape_91,p:{x:-23.8}},{t:this.shape_8,p:{x:-15.4,y:71.8}},{t:this.shape_188},{t:this.shape_9,p:{x:-2.4,y:74.3}},{t:this.shape_187,p:{x:4.5}},{t:this.shape_98,p:{x:11.8}},{t:this.shape_186},{t:this.shape_82,p:{x:25.9}},{t:this.shape_185},{t:this.shape_184,p:{x:48.3}}]},1).to({state:[{t:this.shape_298,p:{x:-57.8}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295,p:{x:4.4}},{t:this.shape_294},{t:this.shape_256,p:{x:32.2}},{t:this.shape_259,p:{x:53.1}},{t:this.shape_258,p:{x:61.3}},{t:this.shape_293},{t:this.shape_249,p:{x:-126.6}},{t:this.shape_76,p:{x:-118.2,y:1.2}},{t:this.shape_65,p:{x:-113.2,y:-1.3}},{t:this.shape_244,p:{x:-99.2}},{t:this.shape_38,p:{x:-90.8,y:1.2}},{t:this.shape_292},{t:this.shape_291,p:{x:-77.3}},{t:this.shape_57,p:{x:-63.3,y:-1.3}},{t:this.shape_47,p:{x:-58.3,y:-1.3}},{t:this.shape_239,p:{x:-49.8}},{t:this.shape_290,p:{x:-38.4}},{t:this.shape_95,p:{x:-21.8,y:3.2}},{t:this.shape_289,p:{x:-10.7,y:1.2}},{t:this.shape_9,p:{x:-2.5,y:1.2}},{t:this.shape_288},{t:this.shape_134,p:{x:17.5,y:1.4}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285,p:{x:56.5}},{t:this.shape_162,p:{x:62.1}},{t:this.shape_52,p:{x:71.9,y:1.2}},{t:this.shape_284,p:{x:87.2}},{t:this.shape_283},{t:this.shape_154,p:{x:116.1}},{t:this.shape_246,p:{x:124.8}},{t:this.shape_29,p:{x:134.6,y:1.2}},{t:this.shape_282,p:{x:141.9,y:-5.4}},{t:this.shape_281},{t:this.shape_280,p:{x:-128.3,y:31.2}},{t:this.shape_279},{t:this.shape_30,p:{x:-111.1,y:23.1}},{t:this.shape_278,p:{x:-102.7}},{t:this.shape_277,p:{x:-93.3,y:23.1}},{t:this.shape_276},{t:this.shape_227,p:{x:-75.8}},{t:this.shape_70,p:{x:-62.6,y:29.8}},{t:this.shape_235,p:{x:-57.4,y:27.6}},{t:this.shape_221,p:{x:-49.4}},{t:this.shape_240,p:{x:-41.5,y:23.1}},{t:this.shape_275},{t:this.shape_127,p:{x:-18.1}},{t:this.shape_140,p:{x:-6.9}},{t:this.shape_71,p:{x:4.3,y:25.6}},{t:this.shape_222,p:{x:21.5}},{t:this.shape_27,p:{x:30.9,y:23.1}},{t:this.shape_274,p:{x:38.8}},{t:this.shape_211,p:{x:49.7}},{t:this.shape_213,p:{x:66.6}},{t:this.shape_139,p:{x:75,y:23.1}},{t:this.shape_273},{t:this.shape_133,p:{x:90.1,y:23.1}},{t:this.shape_272,p:{x:98.3}},{t:this.shape_271},{t:this.shape_150,p:{x:119.8}},{t:this.shape_270},{t:this.shape_110,p:{x:148.5,y:25.7}},{t:this.shape_37,p:{x:-98.6,y:54.1}},{t:this.shape_269,p:{x:-89.8}},{t:this.shape_88,p:{x:-78.2,y:51.9}},{t:this.shape_8,p:{x:-70.4,y:47.4}},{t:this.shape_268},{t:this.shape_267,p:{x:-53}},{t:this.shape_266,p:{x:-43.4}},{t:this.shape_43,p:{x:-34.6,y:49.9}},{t:this.shape_121,p:{x:-27.6}},{t:this.shape_265},{t:this.shape_264,p:{x:-1.1}},{t:this.shape_132,p:{x:10.7,y:50.1}},{t:this.shape_263},{t:this.shape_112,p:{x:41.2}},{t:this.shape_262},{t:this.shape_122,p:{x:66.7}},{t:this.shape_261,p:{x:76.8,y:49.9}},{t:this.shape_116,p:{x:90.5}},{t:this.shape_260},{t:this.shape_2,p:{x:109,y:49.9}},{t:this.shape_1,p:{x:116.3,y:43.3}},{t:this.shape,p:{x:122.3,y:49.9}}]},1).to({state:[{t:this.shape_354,p:{x:-12.8}},{t:this.shape_253,p:{x:5.3}},{t:this.shape_258,p:{x:19.4}},{t:this.shape_353},{t:this.shape_239,p:{x:-150.3}},{t:this.shape_192,p:{x:-140.1,y:1.2}},{t:this.shape_175,p:{x:-130.3}},{t:this.shape_352,p:{x:-113.6}},{t:this.shape_23,p:{x:-105.8,y:-1.3}},{t:this.shape_290,p:{x:-97.8}},{t:this.shape_351,p:{x:-86.7,y:1.2}},{t:this.shape_350},{t:this.shape_159,p:{x:-58.5,y:1.2}},{t:this.shape_177,p:{x:-50.3}},{t:this.shape_163,p:{x:-41.1}},{t:this.shape_172,p:{x:-29.6}},{t:this.shape_349},{t:this.shape_166,p:{x:1}},{t:this.shape_178,p:{x:11.4}},{t:this.shape_277,p:{x:18.7,y:-1.3}},{t:this.shape_284,p:{x:25.6}},{t:this.shape_348},{t:this.shape_291,p:{x:47}},{t:this.shape_347},{t:this.shape_83,p:{x:74.7,y:1.2}},{t:this.shape_346,p:{x:87.6}},{t:this.shape_115,p:{x:94.3,y:1.2}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_156,p:{x:131.7}},{t:this.shape_343},{t:this.shape_154,p:{x:148.2}},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_240,p:{x:-144.8,y:23.1}},{t:this.shape_337,p:{x:-136.2}},{t:this.shape_151,p:{x:-118.6}},{t:this.shape,p:{x:-108.6,y:25.6}},{t:this.shape_131,p:{x:-94.9}},{t:this.shape_336},{t:this.shape_52,p:{x:-76.3,y:25.6}},{t:this.shape_282,p:{x:-69,y:19}},{t:this.shape_261,p:{x:-63.1,y:25.6}},{t:this.shape_228,p:{x:-55.1}},{t:this.shape_71,p:{x:-38.9,y:25.6}},{t:this.shape_125,p:{x:-30.1}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_225,p:{x:18.7}},{t:this.shape_224,p:{x:33.5}},{t:this.shape_127,p:{x:43.7}},{t:this.shape_331,p:{x:54.4,y:25.6}},{t:this.shape_274,p:{x:64.9}},{t:this.shape_70,p:{x:73.1,y:29.8}},{t:this.shape_43,p:{x:78.3,y:25.6}},{t:this.shape_330,p:{x:85.2}},{t:this.shape_329,p:{x:97,y:25.7}},{t:this.shape_150,p:{x:115.4}},{t:this.shape_328},{t:this.shape_215,p:{x:131.9}},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325,p:{x:165.7}},{t:this.shape_147,p:{x:177.8}},{t:this.shape_324,p:{x:186.2,y:25.6}},{t:this.shape_108,p:{x:-162.2}},{t:this.shape_29,p:{x:-150.3,y:49.9}},{t:this.shape_323},{t:this.shape_322,p:{x:-129}},{t:this.shape_101,p:{x:-120.3,y:49.9}},{t:this.shape_121,p:{x:-107.7}},{t:this.shape_139,p:{x:-99.6,y:47.4}},{t:this.shape_321},{t:this.shape_289,p:{x:-80.5,y:49.9}},{t:this.shape_266,p:{x:-69}},{t:this.shape_100,p:{x:-56.7}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317,p:{x:0.5}},{t:this.shape_133,p:{x:8.9,y:47.4}},{t:this.shape_116,p:{x:15.9}},{t:this.shape_316},{t:this.shape_60,p:{x:34.9,y:49.9}},{t:this.shape_315},{t:this.shape_112,p:{x:59.5}},{t:this.shape_47,p:{x:67.9,y:47.4}},{t:this.shape_314},{t:this.shape_252,p:{x:83.8,y:49.9}},{t:this.shape_313},{t:this.shape_269,p:{x:101.9}},{t:this.shape_171,p:{x:110.3,y:49.9}},{t:this.shape_280,p:{x:121.1,y:55.5}},{t:this.shape_30,p:{x:126.4,y:47.4}},{t:this.shape_109,p:{x:132.6}},{t:this.shape_168,p:{x:139.3,y:49.9}},{t:this.shape_312,p:{x:146.2}},{t:this.shape_217,p:{x:153.5,y:49.9}},{t:this.shape_311,p:{x:160.6}},{t:this.shape_27,p:{x:167.7,y:47.4}},{t:this.shape_169,p:{x:175.9,y:49.9}},{t:this.shape_204,p:{x:187.2}},{t:this.shape_37,p:{x:-152.7,y:78.5}},{t:this.shape_310,p:{x:-144.8,y:74.3}},{t:this.shape_309},{t:this.shape_8,p:{x:-125.4,y:71.8}},{t:this.shape_308,p:{x:-111.3}},{t:this.shape_307},{t:this.shape_95,p:{x:-86.2,y:76.3}},{t:this.shape_143,p:{x:-78.4,y:74.3}},{t:this.shape_306},{t:this.shape_184,p:{x:-57.9}},{t:this.shape_76,p:{x:-49.4,y:74.3}},{t:this.shape_305,p:{x:-35.4}},{t:this.shape_128,p:{x:-25.1,y:74.3}},{t:this.shape_38,p:{x:-17.4,y:74.3}},{t:this.shape_73,p:{x:-10.4}},{t:this.shape_304,p:{x:1.3}},{t:this.shape_303},{t:this.shape_302,p:{x:29.1}},{t:this.shape_301},{t:this.shape_25,p:{x:58.8,y:74.2}},{t:this.shape_300},{t:this.shape_80,p:{x:87.6}},{t:this.shape_9,p:{x:97,y:74.3}},{t:this.shape_34,p:{x:104.6,y:74.3}},{t:this.shape_98,p:{x:112.1}},{t:this.shape_88,p:{x:120.3,y:76.3}},{t:this.shape_299,p:{x:128.7}},{t:this.shape_91,p:{x:138.7}},{t:this.shape_74,p:{x:156.2}},{t:this.shape_2,p:{x:169,y:74.3}}]},1).to({state:[{t:this.shape_390},{t:this.shape_181,p:{x:-33.8}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_295,p:{x:14.4}},{t:this.shape_387},{t:this.shape_298,p:{x:50}},{t:this.shape_354,p:{x:67.7}},{t:this.shape_161,p:{x:-157.5}},{t:this.shape_208,p:{x:-147.8,y:1.2}},{t:this.shape_386},{t:this.shape_285,p:{x:-135.1}},{t:this.shape_132,p:{x:-125.7,y:1.4}},{t:this.shape_163,p:{x:-108.6}},{t:this.shape_324,p:{x:-100.5,y:1.2}},{t:this.shape_385},{t:this.shape_277,p:{x:-84.7,y:-1.3}},{t:this.shape_346,p:{x:-78.5}},{t:this.shape_148,p:{x:-62.8,y:1.2}},{t:this.shape_252,p:{x:-55,y:1.2}},{t:this.shape_384},{t:this.shape_166,p:{x:-28.8}},{t:this.shape_83,p:{x:-18.8,y:1.2}},{t:this.shape_164,p:{x:-9.1}},{t:this.shape_154,p:{x:7}},{t:this.shape_162,p:{x:15.7}},{t:this.shape_142,p:{x:25.5,y:1.2}},{t:this.shape_1,p:{x:32.8,y:-5.4}},{t:this.shape,p:{x:38.8,y:1.2}},{t:this.shape_238,p:{x:48.4}},{t:this.shape_156,p:{x:65.9}},{t:this.shape_138,p:{x:78.7,y:1.2}},{t:this.shape_235,p:{x:92.1,y:3.2}},{t:this.shape_30,p:{x:97,y:-1.3}},{t:this.shape_27,p:{x:102,y:-1.3}},{t:this.shape_234,p:{x:110}},{t:this.shape_114,p:{x:121.3,y:1.2}},{t:this.shape_383},{t:this.shape_329,p:{x:145.6,y:1.4}},{t:this.shape_382},{t:this.shape_251,p:{x:175.9}},{t:this.shape_155,p:{x:-157.4,y:25.6}},{t:this.shape_228,p:{x:-150.5}},{t:this.shape_381},{t:this.shape_331,p:{x:-121.1,y:25.6}},{t:this.shape_171,p:{x:-113.6,y:25.6}},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_325,p:{x:-84.6}},{t:this.shape_168,p:{x:-70.6,y:25.6}},{t:this.shape_377},{t:this.shape_225,p:{x:-51.5}},{t:this.shape_143,p:{x:-38.9,y:25.6}},{t:this.shape_141,p:{x:-30.3}},{t:this.shape_201,p:{y:25.7,x:-17.4}},{t:this.shape_272,p:{x:-4.7}},{t:this.shape_102,p:{x:13,y:25.6}},{t:this.shape_149,p:{x:20.8,y:25.6}},{t:this.shape_376},{t:this.shape_375},{t:this.shape_227,p:{x:49.3}},{t:this.shape_374},{t:this.shape_310,p:{x:69.7,y:25.6}},{t:this.shape_215,p:{x:79.3}},{t:this.shape_373},{t:this.shape_337,p:{x:106.4}},{t:this.shape_170,p:{x:118.1,y:27.6}},{t:this.shape_150,p:{x:129.3}},{t:this.shape_140,p:{x:141.8}},{t:this.shape_127,p:{x:151.8}},{t:this.shape_147,p:{x:163.5}},{t:this.shape_330,p:{x:173.9}},{t:this.shape_70,p:{x:-109,y:54.1}},{t:this.shape_282,p:{x:-104.4,y:43.3}},{t:this.shape_136,p:{x:-100,y:49.9}},{t:this.shape_311,p:{x:-93}},{t:this.shape_76,p:{x:-85.9,y:49.9}},{t:this.shape_95,p:{x:-72.2,y:51.9}},{t:this.shape_23,p:{x:-64.4,y:47.4}},{t:this.shape_198,p:{x:-56}},{t:this.shape_115,p:{x:-46.6,y:49.9}},{t:this.shape_121,p:{x:-34}},{t:this.shape_372,p:{x:-22.9}},{t:this.shape_371},{t:this.shape_280,p:{x:2.7,y:55.5}},{t:this.shape_193,p:{x:11.6}},{t:this.shape_203,p:{x:23.6}},{t:this.shape_204,p:{x:35.1}},{t:this.shape_370},{t:this.shape_266,p:{x:60.1}},{t:this.shape_194,p:{x:77.4}},{t:this.shape_101,p:{x:85.3,y:49.9}},{t:this.shape_116,p:{x:92.3}},{t:this.shape_88,p:{x:103.6,y:51.9}},{t:this.shape_60,p:{x:117,y:49.9}},{t:this.shape_52,p:{x:125.3,y:49.9}},{t:this.shape_369},{t:this.shape_240,p:{x:-139.4,y:71.8}},{t:this.shape_96,p:{x:-132.3}},{t:this.shape_97,p:{x:-121.2}},{t:this.shape_43,p:{x:-113.4,y:74.3}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_184,p:{x:-76.8}},{t:this.shape_9,p:{x:-68.3,y:74.3}},{t:this.shape_366},{t:this.shape_365,p:{x:-45.9,y:71.8}},{t:this.shape_92,p:{x:-38.8}},{t:this.shape_364},{t:this.shape_305,p:{x:-16.3}},{t:this.shape_308,p:{x:1.2}},{t:this.shape_139,p:{x:9.6,y:71.8}},{t:this.shape_363},{t:this.shape_89,p:{x:27.6}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_8,p:{x:74.5,y:71.8}},{t:this.shape_302,p:{x:84}},{t:this.shape_29,p:{x:96.8,y:74.3}},{t:this.shape_81,p:{x:106.7}},{t:this.shape_304,p:{x:118.4}},{t:this.shape_73,p:{x:134.5}},{t:this.shape_38,p:{x:142.6,y:74.3}},{t:this.shape_25,p:{x:150.6,y:74.2}},{t:this.shape_243,p:{x:158.4,y:71.8}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_37,p:{x:-44.7,y:102.8}},{t:this.shape_46,p:{x:-36.9,y:98.6}},{t:this.shape_41,p:{x:-25.8}},{t:this.shape_133,p:{x:-17.4,y:96.1}},{t:this.shape_357},{t:this.shape_351,p:{x:6.9,y:98.6}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_44,p:{x:48.2}},{t:this.shape_2,p:{x:61,y:98.6}}]},1).to({state:[{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_181,p:{x:13.3}},{t:this.shape_180,p:{x:28.1}},{t:this.shape_172,p:{x:-158.5}},{t:this.shape_136,p:{x:-149.1,y:1.2}},{t:this.shape_424},{t:this.shape_46,p:{x:-129.5,y:1.2}},{t:this.shape_166,p:{x:-118.4}},{t:this.shape_423},{t:this.shape_422},{t:this.shape_177,p:{x:-83.8}},{t:this.shape_176,p:{x:-69}},{t:this.shape_163,p:{x:-58.8}},{t:this.shape_331,p:{x:-48.1,y:1.2}},{t:this.shape_352,p:{x:-37.6}},{t:this.shape_123,p:{x:-23.8,y:5.4}},{t:this.shape_156,p:{x:-15.2}},{t:this.shape_168,p:{x:-5.8,y:1.2}},{t:this.shape_154,p:{x:1.3}},{t:this.shape_421},{t:this.shape_232,p:{x:20.6}},{t:this.shape_178,p:{x:28.9}},{t:this.shape_11,p:{x:44.4,y:1.2}},{t:this.shape_420},{t:this.shape_143,p:{x:62.5,y:1.2}},{t:this.shape_30,p:{x:67.4,y:-1.3}},{t:this.shape_419},{t:this.shape_291,p:{x:88}},{t:this.shape_238,p:{x:105.6}},{t:this.shape_157,p:{x:117.3}},{t:this.shape_365,p:{x:126,y:-1.3}},{t:this.shape_418},{t:this.shape_138,p:{x:141.4,y:1.2}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_346,p:{x:173.1}},{t:this.shape_119,p:{x:183.1,y:1.2}},{t:this.shape_278,p:{x:-172.6}},{t:this.shape_414},{t:this.shape_159,p:{x:-151.4,y:25.6}},{t:this.shape_217,p:{x:-145.4,y:25.6}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_222,p:{x:-81.6}},{t:this.shape_115,p:{x:-72.2,y:25.6}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_215,p:{x:-48.3}},{t:this.shape_213,p:{x:-32.1}},{t:this.shape_407},{t:this.shape_406},{t:this.shape_146,p:{x:6.6}},{t:this.shape_27,p:{x:14.7,y:23.1}},{t:this.shape_405},{t:this.shape_128,p:{x:32,y:25.6}},{t:this.shape_151,p:{x:48.9}},{t:this.shape_131,p:{x:59.4}},{t:this.shape_43,p:{x:67.5,y:25.6}},{t:this.shape_404},{t:this.shape_274,p:{x:87.4}},{t:this.shape_114,p:{x:104.2,y:25.6}},{t:this.shape_243,p:{x:112.1,y:23.1}},{t:this.shape_147,p:{x:120.6}},{t:this.shape_150,p:{x:138.1}},{t:this.shape_240,p:{x:147.5,y:23.1}},{t:this.shape_137,p:{x:156.9}},{t:this.shape_102,p:{x:169.7,y:25.6}},{t:this.shape_127,p:{x:179.7}},{t:this.shape_337,p:{x:191.4}},{t:this.shape_372,p:{x:-167.3}},{t:this.shape_403},{t:this.shape_75,p:{x:-145.7,y:50.1}},{t:this.shape_322,p:{x:-133.1}},{t:this.shape_100,p:{x:-115.2}},{t:this.shape_83,p:{x:-105.1,y:49.9}},{t:this.shape_116,p:{x:-91.4}},{t:this.shape_402},{t:this.shape_52,p:{x:-72.9,y:49.9}},{t:this.shape_1,p:{x:-65.6,y:43.3}},{t:this.shape,p:{x:-59.6,y:49.9}},{t:this.shape_70,p:{x:-47.7,y:54.1}},{t:this.shape_317,p:{x:-38.9}},{t:this.shape_401},{t:this.shape_101,p:{x:-21.3,y:49.9}},{t:this.shape_400},{t:this.shape_196,p:{x:-2.2}},{t:this.shape_205,p:{x:15.3}},{t:this.shape_29,p:{x:28.1,y:49.9}},{t:this.shape_198,p:{x:44.9}},{t:this.shape_60,p:{x:54.3,y:49.9}},{t:this.shape_267,p:{x:59.9}},{t:this.shape_201,p:{y:50.1,x:70.8}},{t:this.shape_399},{t:this.shape_76,p:{x:89.5,y:49.9}},{t:this.shape_112,p:{x:103.5}},{t:this.shape_139,p:{x:111.9,y:47.4}},{t:this.shape_132,p:{x:121.4,y:50.1}},{t:this.shape_104,p:{x:131.4}},{t:this.shape_2,p:{x:141.2,y:49.9}},{t:this.shape_312,p:{x:156.6}},{t:this.shape_8,p:{x:163.9,y:47.4}},{t:this.shape_398},{t:this.shape_269,p:{x:182}},{t:this.shape_264,p:{x:192.4}},{t:this.shape_37,p:{x:-104.5,y:78.5}},{t:this.shape_94,p:{x:-95.7}},{t:this.shape_88,p:{x:-84.1,y:76.3}},{t:this.shape_133,p:{x:-76.3,y:71.8}},{t:this.shape_397},{t:this.shape_299,p:{x:-58.9}},{t:this.shape_396},{t:this.shape_98,p:{x:-40.5}},{t:this.shape_81,p:{x:-33.5}},{t:this.shape_308,p:{x:-16.3}},{t:this.shape_395},{t:this.shape_187,p:{x:7.6}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_73,p:{x:51.2}},{t:this.shape_310,p:{x:62,y:74.3}},{t:this.shape_391},{t:this.shape_9,p:{x:85.9,y:74.3}},{t:this.shape_82,p:{x:92.9}},{t:this.shape_38,p:{x:100,y:74.3}},{t:this.shape_74,p:{x:108.4}},{t:this.shape_85,p:{x:120.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Gshounen_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.Gshoujo_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.Gscifi_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.Gschool_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.Ghorror_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.Gadventure_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G6Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,0,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G5Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,0,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G4Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G3Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ar5CjIAAlFIXyAAIAAFFg");
	this.shape_1.setTransform(-4.8,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G2Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.G1Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,56,56,0.008)").s().p("Ar5GcIAAs3IXyAAIAAM3g");
	this.shape.setTransform(-4.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-38.4,152.3,82.3);


(lib.X_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah3ivIgEhHIDzGlIAEBIg");
	this.shape.setTransform(-1.3,0,1,1,-122.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjBhWIgqg6IGtDnIAqA6g");
	this.shape_1.setTransform(0,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.7,1,1).p("AEjhTQAdB2hBBsQhABth5AjQh2Ajhqg7Qhqg8geh3Qgdh1BAhuQBAhsB4gjQB4gjBpA7QBrA8AeB3g");
	this.shape_2.setTransform(-0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiaEHQhqg8geh3Qgdh1BAhtQBAhtB4gjQB4giBpA6QBrA8AeB3QAdB2hBBsQhABth5AjQgsANgpAAQhIAAhDglg");
	this.shape_3.setTransform(-0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("Ah3ivIgEhHIDzGlIAEBIg");
	this.shape_4.setTransform(-1.3,0,1,1,-122.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AjzAQIAAgfIHnAAIAAAfg");
	this.shape_5.setTransform(0,-0.4,1,2.236,0,-35.1,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AiaEHQhqg8geh3Qgdh1BAhtQBAhtB4gjQB4giBpA6QBrA8AeB3QAdB2hBBsQhABth5AjQgsANgpAAQhIAAhDglg");
	this.shape_6.setTransform(-0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.7,1,1).p("ADphCQAXBegzBXQg0BXhhAcQheAchVgwQhVgvgYhgQgXheAzhXQAzhXBhgcQBfgcBVAvQBVAwAYBgg");
	this.shape_7.setTransform(-1,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("Ah7DSQhVgvgYhgQgXheAzhXQAzhXBhgcQBfgcBVAvQBVAwAYBgQAXBegzBXQg0BXhhAcQgjAKggAAQg6AAg2geg");
	this.shape_8.setTransform(-1,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A8A8A").s().p("AkKD5IAAnxIIVAAIAAHxg");
	this.shape_9.setTransform(-0.6,-3.2,1.221,1.268,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_5,p:{scaleX:1,scaleY:2.236,x:0,y:-0.4,skewX:-35.1,skewY:28.3}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-1.3,y:0,rotation:-122.3,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_5,p:{scaleX:0.788,scaleY:1.761,x:-0.9,y:-1.7,skewX:-35.1,skewY:28.3}},{t:this.shape_4,p:{scaleX:0.788,scaleY:0.788,x:-1.9,y:-1.4,rotation:-122.3,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.97,scaleY:2.206,x:-0.7,y:-1.4,skewX:-49.8,skewY:13.5}},{t:this.shape_4,p:{scaleX:0.988,scaleY:0.972,x:-1.5,y:-0.5,rotation:0,skewX:-138.9,skewY:-137}},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-30.5,62,61.9);


(lib.go_back1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("חזור אחורה", "20px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(-8,-3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhINOQgRgEgPgJQAPAGASADQATABAPgDQAQgEAPgJIAMgKIA+g9QAXgWAfgZIA0guQAcgcAUgVQATgVAZgfIAZgiIACgDIAIgLIABgCIABAAIAAgBIACgEQAZgjAVgkIASghIACgEIASgmQAJgVAFgRIAGgRIAAgBIAEgMIABgCIARhXQAFgsgCgkIgCguIgBgBIAAgEIgShVIgBgFIAAgBIgCgEIAAgBIAAgBIAAAAIgBgCIgBgCIgBgCQgLgigVggIgGgJIgBgCIAAAAIgCgCIgBgDIgBgBIgLgPIgZgdIgGgHIgDgDIgCgCIgCgBIgSgRIgBgBIgBgBIgCgBIgBgBIgBgBIgHgGIgpgcQgPgIgSgIIgRgIIAAAAIgMgFIgBAAIgFgCIhPgXIgBgBIgBAAIgrgIIgCAAIgYgDIgEAAIgBAAIgFAAIg6gDIiJAFIAeAyIABACIAUAhIABABIAAABIAZAsQAbAoAXAmIAGAKIAAACIABAAIAAABIAAAAIACACIAEAGIAAAAIACAAIAAABIASA5QAIAkABAgIAAAnIAAADIAAAHIgCASQgBgUgFgUQgEgSgKgXIgEgHIgBgDIgGgKIgCAAIAAAAIgBAAIgBgBIgCgBIgCgCIgBAAIAAgBIAAAAIgCgCIgOgNIgugmIgNgOIAAAAIjBijQgygog9gtIgYgSIgBAAIgBgBIAAAAIgCgBIgBgCIgBAAIgBgBIAAAAIgDgDIgSgOQgNgJgPgIQgNgGgTgGQAIgQALgPQALgPANgOIAPgOIAMgKIAAAAIABgBIAAgBIACgBIACgCIAAAAIAAAAIABgBIABAAIAWgWQA4g0AzgtIA3gwIA5gvIBKg7IABgBIABAAIAAAAIAVgSIABAAIAAAAIABgBIATgNQAtgUAjgPIAVgIIABgBIABAAIAIgDIABAAIAAgBIAGgDIABAAIAAAAIgCAAIA1gPQA3gNA3gHQA5gIA8gBIgfAJQgDACgEABIhGAaQgZALgYAMIh8BIIgDACIgBABIgBAAIAAABIACAAIgHAHIAAABIAAAAIgCACIgGAEIgDACIgCADQgnAhgoAoIgRARIgRAaIAAAAIgBAAIAAABIgBABIgBACIgCAEIgRAbIgBACIggAzIClAKIAGABIACAAIA3AIIABABIACAAIAkAIIADAAIAMADIADABIADABIBCAUIBKAgIABABIACABIAOAHIACABIABABIACABIAQAJQAVAMAXAQIAyAoIATATIACACIACABIASAUIAEAFIAQAUQARAXAMASIANAXIABACIACADIABADIABAAIAAABIABABIAaA5IASA4IAAADIABABIAAAAIAAACIABADIAAABIAAAAIAAACIANBmIgBBIQgDAugKAxIgIAjIgBADIgTA8IgCACIgFANIAAABIAAABIgBABIAAAAIgIATQgMAagJARQgLAVgNATIgaAnQgaAlgdAjIgDADIAAAAIAAABIgBAAIguAxQgYAYgdAZQgSAQgmAdIgIAFIgDADIgCABIgNAJIgCABIgCABIgeAUQgaARgfAWIg3ArQgIAGgHAEQgHAFgIAEQgTAJgRABIgLABQgMAAgNgDg");
	this.shape.setTransform(42.2,-13.3,0.432,0.432);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhINOQgRgEgQgJQAQAGASADQATABAPgDQAQgEAOgJIANgKIA+g9QAXgWAegZIA0guQAdgcAUgVQATgVAYgfIAjgwIABgCIACAAIAAgBIACgEQAZgjAVgkIASghIACgEIARgmQAKgVAFgRIAFgRIABgBIAEgMIABgCIARhXQAEgsgBgkIgCguIgBgBIAAgEIgShVIgBgFIAAgBIgCgEIAAgBIgBgBIAAAAIgBgCIAAgCIgBgCQgMgigUggIgGgJIgBgCIAAAAIgCgCIgCgDIgBgBIgLgPIgYgdIgGgHIgEgDIgBgCIgCgBIgSgRIgBgBIgBgBIgCgBIgBgBIgBgBIgHgGIgpgcQgPgIgSgIIgRgIIgBAAIgLgFIgBAAIgGgCIhOgXIgCgBIgBAAIgqgIIgDAAIgXgDIgEAAIgBAAIhAgDIiIAFIAzBVIABABIAAABIAZAsQAbAoAXAmIAGAKIAAACIABAAIAAABIAAAAIACACIADAGIABAAIACAAIAAABIASA5QAHAkACAgIAAAnIAAADIAAAHIgDASQAAgUgFgUQgFgSgKgXIgDgHIgBgDIgGgKIgCAAIAAAAIgBAAIgBgBIgCgBIgCgCIgBAAIAAgBIAAAAIgCgCIgPgNIgugmIgMgOIAAAAIjBijQgygog9gtIgZgSIgBAAIAAgBIAAAAIgCgBIgBgCIgCAAIAAgBIgBAAIgCgDIgSgOQgNgJgPgIQgNgGgUgGQAJgQAKgPQAMgPANgOIAPgOIALgKIABAAIAAgBIABgBIACgBIACgCIAAAAIAAAAIABgBIABAAIAWgWQA4g0AzgtIA3gwIA5gvIBKg7IABgBIAAAAIABAAIAUgSIACAAIAAAAIABgBIATgNQAtgUAjgPIAUgIIACgBIABAAIAHgDIABAAIABgBIAGgDIAAAAIABAAIgCAAIA1gPQA3gNA3gHQA5gIA8gBIgfAJQgDACgEABIhHAaQgZALgXAMIhOAqIguAeIgDACIgCABIAAAAIAAABIABAAIgGAHIAAABIAAAAIgDACIgFAEIgDACIgDADQgmAhgoAoIgRARIgRAaIAAAAIgBAAIgBABIAAABIgCACIgCAEIgPAZIgBACIgCACIgfAzIClAKIAFABIADAAIA3AIIABABIABAAIAlAIIADAAIAMADIADABIADABIBCAUIBJAgIACABIABABIAPAHIABABIABABIADABIAQAJQAVAMAWAQIAzAoIAVAVIABABIASAUIAFAFIAQAUQARAXAMASIANAXIAAACIADADIABADIABAAIAAABIABABIAaA5IASA4IAAADIABABIAAAAIAAACIAAADIAAABIABAAIAAACIAOBsIgCBCQgDAugKAxIgJAjIAAADIgTA8IgCACIgFANIgBABIAAABIAAABIAAAAIgJATQgLAagJARQgLAVgNATIgDAGIgXAhQgaAlgeAjIgCADIAAAAIAAABIgBAAIguAxQgYAYgdAZQgSAQgnAdIgHAFIgEADIgBABIgOAJIgBABIgCABIgeAUQgaARggAWIg2ArQgIAGgHAEQgIAFgHAEQgTAJgRABIgLABQgMAAgNgDg");
	this.shape_1.setTransform(37.1,-12.6,0.432,0.432,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AhINOQgRgEgPgJQAPAGASADQATABAPgDQAQgEAPgJIAMgKIA+g9QAXgWAfgZIA0guQAcgcAUgVQATgVAZgfIAZgiIACgDIAIgLIABgCIABAAIAAgBIACgEQAZgjAVgkIASghIACgEIASgmQAJgVAFgRIAGgRIAAgBIAEgMIABgCIARhXQAFgsgCgkIgCguIgBgBIAAgEIgShVIgBgFIAAgBIgCgEIAAgBIAAgBIAAAAIgBgCIgBgCIgBgCQgLgigVggIgGgJIgBgCIAAAAIgCgCIgBgDIgBgBIgLgPIgZgdIgGgHIgDgDIgCgCIgCgBIgSgRIgBgBIgBgBIgCgBIgBgBIgBgBIgHgGIgpgcQgPgIgSgIIgRgIIAAAAIgMgFIgBAAIgFgCIhPgXIgBgBIgBAAIgrgIIgCAAIgYgDIgEAAIgBAAIgFAAIg6gDIiJAFIAeAyIABACIAUAhIABABIAAABIAZAsQAbAoAXAmIAGAKIAAACIABAAIAAABIAAAAIACACIAEAGIAAAAIACAAIAAABIASA5QAIAkABAgIAAAnIAAADIAAAHIgCASQgBgUgFgUQgEgSgKgXIgEgHIgBgDIgGgKIgCAAIAAAAIgBAAIgBgBIgCgBIgCgCIgBAAIAAgBIAAAAIgCgCIgOgNIgugmIgNgOIAAAAIjBijQgygog9gtIgYgSIgBAAIgBgBIAAAAIgCgBIgBgCIgBAAIgBgBIAAAAIgDgDIgSgOQgNgJgPgIQgNgGgTgGQAIgQALgPQALgPANgOIAPgOIAMgKIAAAAIABgBIAAgBIACgBIACgCIAAAAIAAAAIABgBIABAAIAWgWQA4g0AzgtIA3gwIA5gvIBKg7IABgBIABAAIAAAAIAVgSIABAAIAAAAIABgBIATgNQAtgUAjgPIAVgIIABgBIABAAIAIgDIABAAIAAgBIAGgDIABAAIAAAAIgCAAIA1gPQA3gNA3gHQA5gIA8gBIgfAJQgDACgEABIhGAaQgZALgYAMIh8BIIgDACIgBABIgBAAIAAABIACAAIgHAHIAAABIAAAAIgCACIgGAEIgDACIgCADQgnAhgoAoIgRARIgRAaIAAAAIgBAAIAAABIgBABIgBACIgCAEIgRAbIgBACIggAzIClAKIAGABIACAAIA3AIIABABIACAAIAkAIIADAAIAMADIADABIADABIBCAUIBKAgIABABIACABIAOAHIACABIABABIACABIAQAJQAVAMAXAQIAyAoIATATIACACIACABIASAUIAEAFIAQAUQARAXAMASIANAXIABACIACADIABADIABAAIAAABIABABIAaA5IASA4IAAADIABABIAAAAIAAACIABADIAAABIAAAAIAAACIANBmIgBBIQgDAugKAxIgIAjIgBADIgTA8IgCACIgFANIAAABIAAABIgBABIAAAAIgIATQgMAagJARQgLAVgNATIgaAnQgaAlgdAjIgDADIAAAAIAAABIgBAAIguAxQgYAYgdAZQgSAQgmAdIgIAFIgDADIgCABIgNAJIgCABIgCABIgeAUQgaARgfAWIg3ArQgIAGgHAEQgHAFgIAEQgTAJgRABIgLABQgMAAgNgDg");
	this.shape_2.setTransform(37.1,-12.6,0.432,0.432,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AvqKaIAAlVIABhGIABrkIAAAkIACRWIfIgDIAB0mIlbgDIAMgBIFWgDIABU3g");
	this.shape_3.setTransform(-1.5,-5.6,0.69,0.69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000CC").s().p("Avkm/IgBgkIAAizIZ8AAIgMABIFbADIgBUmI/HADg");
	this.shape_4.setTransform(-1.7,-5.7,0.69,0.69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033CC").s().p("AhINOQgRgEgQgJQAQAGASADQATABAPgDQAQgEAOgJIANgKIA+g9QAXgWAegZIA0guQAdgcAUgVQATgVAYgfIAjgwIABgCIACAAIAAgBIACgEQAZgjAVgkIASghIACgEIARgmQAKgVAFgRIAFgRIABgBIAEgMIABgCIARhXQAEgsgBgkIgCguIgBgBIAAgEIgShVIgBgFIAAgBIgCgEIAAgBIgBgBIAAAAIgBgCIAAgCIgBgCQgMgigUggIgGgJIgBgCIAAAAIgCgCIgCgDIgBgBIgLgPIgYgdIgGgHIgEgDIgBgCIgCgBIgSgRIgBgBIgBgBIgCgBIgBgBIgBgBIgHgGIgpgcQgPgIgSgIIgRgIIgBAAIgLgFIgBAAIgGgCIhOgXIgCgBIgBAAIgqgIIgDAAIgXgDIgEAAIgBAAIhAgDIiIAFIAzBVIABABIAAABIAZAsQAbAoAXAmIAGAKIAAACIABAAIAAABIAAAAIACACIADAGIABAAIACAAIAAABIASA5QAHAkACAgIAAAnIAAADIAAAHIgDASQAAgUgFgUQgFgSgKgXIgDgHIgBgDIgGgKIgCAAIAAAAIgBAAIgBgBIgCgBIgCgCIgBAAIAAgBIAAAAIgCgCIgPgNIgugmIgMgOIAAAAIjBijQgygog9gtIgZgSIgBAAIAAgBIAAAAIgCgBIgBgCIgCAAIAAgBIgBAAIgCgDIgSgOQgNgJgPgIQgNgGgUgGQAJgQAKgPQAMgPANgOIAPgOIALgKIABAAIAAgBIABgBIACgBIACgCIAAAAIAAAAIABgBIABAAIAWgWQA4g0AzgtIA3gwIA5gvIBKg7IABgBIAAAAIABAAIAUgSIACAAIAAAAIABgBIATgNQAtgUAjgPIAUgIIACgBIABAAIAHgDIABAAIABgBIAGgDIAAAAIABAAIgCAAIA1gPQA3gNA3gHQA5gIA8gBIgfAJQgDACgEABIhHAaQgZALgXAMIhOAqIguAeIgDACIgCABIAAAAIAAABIABAAIgGAHIAAABIAAAAIgDACIgFAEIgDACIgDADQgmAhgoAoIgRARIgRAaIAAAAIgBAAIgBABIAAABIgCACIgCAEIgPAZIgBACIgCACIgfAzIClAKIAFABIADAAIA3AIIABABIABAAIAlAIIADAAIAMADIADABIADABIBCAUIBJAgIACABIABABIAPAHIABABIABABIADABIAQAJQAVAMAWAQIAzAoIAVAVIABABIASAUIAFAFIAQAUQARAXAMASIANAXIAAACIADADIABADIABAAIAAABIABABIAaA5IASA4IAAADIABABIAAAAIAAACIAAADIAAABIABAAIAAACIAOBsIgCBCQgDAugKAxIgJAjIAAADIgTA8IgCACIgFANIgBABIAAABIAAABIAAAAIgJATQgLAagJARQgLAVgNATIgDAGIgXAhQgaAlgeAjIgCADIAAAAIAAABIgBAAIguAxQgYAYgdAZQgSAQgnAdIgHAFIgEADIgBABIgOAJIgBABIgCABIgeAUQgaARggAWIg2ArQgIAGgHAEQgIAFgHAEQgTAJgRABIgLABQgMAAgNgDg");
	this.shape_5.setTransform(37.1,-12.6,0.432,0.432,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FF0000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#FF0000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#0000CC"}}]},1).to({state:[{t:this.shape_5},{t:this.text,p:{color:"#0000CC"}},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-50,130.8,77.1);


(lib.innerBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AvWOyQmXmIgBoqQABopGXmIQGXmII/ABQJAgBGYGIQGXGIAAIpQAAIqmXGIQmYGHpAAAQo/AAmXmHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.innerBall, new cjs.Rectangle(-139,-133.7,278.1,267.5), null);


(lib.background_cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-303,-275,1,0.498);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.series_shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.movieClip_1 = new lib.tv_black();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqPITIAAwlIUfAAIAAQlg");
	this.shape.setTransform(2.4,0.7,0.841,0.798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHPGTIAAAAIAEAAIgpgBIAHAAQgCgBgIABIgNAAIgHgBQgGABgOgBIgJAAIgtAAIgRgBIgHAAIgGAAIgUAAIgJgBIgHABIgEgBIhIgBIgBAAIgVAAIgIgBIg0AAIgGAAIgUAAIgHgBIgHAAIgugBIgSABIgDgBQgOABgDgBIgCAAIgLAAIgCABIgDgBIg5AAIgUAAIgGAAIgDABIgDgBIgEABIgQgBIgHgBIghAAQgHACgIgBIAGAAIgLAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAgBAAQgQACgHgBQAAAAABAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgJABIgHgBIgEABIgHgBIgSAAQABAAAAAAQAAAAAAABQAAAAgBAAQgBAAgBAAIgFgBIgIAAIgDABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgBAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgOAAIgJAAIhEAAIgQAAIghABIgpAAIgngBIAAg4IgBghIABgEIAAgsIACAFQAAABAAABQABAAAAABQAAAAAAgBQABAAAAgBIAAADIgBABIABAIIABBZIABAGIAAAAIAAATIADAAIgBgTIgCgIIABgcIAAgTIAAgCIgBABIABgIIAAgHIAAgTIABACIABgHIgBgPIgBgEIABgtIABgIIgBgKQACgPgBgNIAAgNIABgFIgBgSIADhpIgBgGIABgHIABgmIgCgFIAAgFIgBgHIAAgHIgBgDIAAgMIABgEIAAgGIABgBIAAgMIgBgBIgBABIgBgKQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAgDIgBgEIgBgFIAAgFIgBgCIABgNIAAgDIAAgFIAAgFIAAgGIABgBIAAgDIABgEIAAABIAAgFQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgGIACgGIABgKIABgBIABgDIAAABIABgRIACgKQAAgHABABIAAgKIgBgLIABgTIABgNQgBgEAAgGIABAAIAAgWQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgRIABgHIgBgNIABgKIABAUIgBAHIABAGIgBAHIABAGIAABYQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIACAOIgBANQABAHABgEIACgTIACAFIABgMIAAgEIABgTIABgBIABgIQACAEAAgHIABAFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIABADIABAJIAAAQIAAAKIgBAEIAAANIAAArIAAAMQAAABABAAQAAAAAAAAQAAgBABgBQAAgBAAgBIABAGIABAAQABAHgBAHQABABABgHIABAJQABABAAAAQAAAAABgBQAAAAAAgBQABgBAAgBQABADAAAGIAAgDQABAEgBATIgBAXIAAAGIAAAFQgBAPABAUIAABaIABAKIgBATQAAAEABgEIAAAUIABAOIgBAAIAAACQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAIgBAOIABAHIgBAVIACAKIgCAIQAAAQACgEIAAARIgBAAIAAAJQAAAAABABQAAAAAAABQAAAAAAAAQAAAAABgBIgBAEIAAADQgBAFACADIAAAKIgBADIABALIAAAHIAAAHIgBADIABAhQAAACAAABQAAABAAAAQAAABAAgBQAAAAABgBQAAAIgBAEIAAACIABAAIAAgBIAAABIAEAAIAGAAIALgBQAYAAACgBIAFABIAGAAIALgBIABAAIABABIAvgBQADgBgFgBIAKABIAJAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAjgBIAGABIAHgBIAbAAIgHAAQACABAEAAIAHgBIATAAIAEAAIAJAAQAMABAIgCIAEABIAbgBIAGgBIATABIALgBIAIAAIAIgBQACAAABAAQAAAAABAAQABAAAAAAQAAAAgBgBIAMAAIABABIAFgBIAIABIAFgBIAbAAIAKAAIgDgBIADAAIADAAIAKABIAQgBIABAAIADAAIAFAAIAbgBIAGgBIANAAQACACAOgBIAJgBIBagBIAEgBIAPAAIAKAAIBMgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAHAAAFACIAHgBIAGABIAogCIARAAQABAAABAAQAAAAAAAAQABAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAGAAAAABIArgBIAXgBIgBhJIAAgEIgChyIABgGIAAgaIgBgIIAAgHIgBhLIABgGIgCgmIAAgHIAAgnIAAgRIgBgJIABgBIAAgJIACAJIgBAIIABAGIAAAaIABAMQgBAEAAgKIgBACIABACIAAAGIABAIQABAHgBAPQgBgEABgPQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBgBAAABQgBAAAAAFIABAIIAAAGIAAAPIABAEIAAAIIAAACIgBATIABgGIABgPIAAAHIABAGIgBAHIABAIIgBgBIAAAQIAAANIABAEIAAAGIAAADIAAAFIABAZIgBADIABAeIAAAEIAAAfIABAEIAAAGIABAYIgBAHIABAZIgBAGIABASQAAAFABgFQAAAPgBABIAAAkQAAAEABgEIAAALIAGABIAGgBIABgCIgBgGIAAhnIgBgGIAAhbIAAgFIAAgkIgBheIgBgLIABgEIgBgGIABglIgBgGQABgSgBgGIABgTIgBAGQgBgFACgHQgBgMAAgMQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgHgBgBIAAgsIAAgFIAAgIIAAghIAAg2IABgFIgBgCIgGgBIgGABIgEgBIgEABIgIgBQABAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJgBIgMABIgHgBIgGABIguABIgIAAIhvACIgQgCIABgBIgBgBIABAAIAAgBIAAgBIADgBIADgCIAKAAQAQAAADgBIADgBIAGAAIAEgBIAYACQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAPAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCgDIAaAAICDADIACAAIAAgQIgHABIgIgBIgvABIgGgBIgHABIgQgBQgdAAgFgBIgIABIgHAAIgEABIgGgBIgdABIgFgBIgFABIgygBIg0ABIgOAAIgCAAIgEAAIg0AAIgEAAIgIABIgKgBIgQABIgFgBIhCABIgEAAIgQABIgFgBIiqADIgGAAIgEAAIgQAAIgUAAQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIACAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIAOgCIA1gBIAGgBIA4gBIgagBIgNAAIhiAAIgHABIgYgBIgGABIhHAAIg5ABIgGgBIgEABIgGgBIgJABIgKgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAEgBIgCgBIADAAIAAgBICLgBIABAAIAJAAIBfgBIAiAAIAGAAIAHAAIA+gBIAHABIAIgBIAFABIAFgBIAHABIAHgBIBPABQABAAAAAAQAAAAAAAAQABAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAIABIAJgBIAQABIAJgBIAOAAIAGAAIATABQAGAAACgBIAGAAIAFAAIAEAAIBYgBIgDAAIAGgBIABABIAZAAIACAAIApAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQgBAAgBAAIAcgBQgBACgPgBQAIABASgBIAqAAQAAAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAHAAgHABIAJgBQAFgBAHABIABAAIABAAIASgBIAnABQgDgCgPABIgBgCQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIgogBIgFABIgFgBIgQAAQgWAAgEgBIgTABIgiAAIgFAAIgGAAIgrgBIgGABIjagBIgHgBIgsABIgMgBIhSAAIAHAAIAHgBIAJABIAJgBIAGABIAMgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGABIgCgBIgLgBIAfABIAKgBIAEAAIAhAAIATgBIAGABICMAAIAAAAQAHABAMgCIAFABIAJAAIADAAIADAAIALAAIAAAAIADgBQACAAABABQABAAAAAAQABAAAAAAQAAAAgBAAIASAAIAHAAIAHgBQATAAAAABIAHAAIAgABIAFgBIAPABIAHgBIAGABIAdgBIgCABQAHgBASABIACAAIADgBIAAABQgBAAABAAIAXgBIAkABIAFAAIAHAAIAHABIAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIACAAQAGAAgGgBQAFAAACABIAQAAIADAAIAIABIAKgCIADAAIAKABIgCAQIABAuIAAAGIAAADIAAAHIAAAPIgBgGQgBACABAHIAAABQABACAAAEQgCgJAAAKQABABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAAAKIAAABIAAADIgBAAIAAAJQAAAGABgBQgBAEAAAUIAAAEIAAANIAAAHIgBAGIABAHIgBAKQAAABAAAAQAAAAABAAQAAgBAAgBQAAAAAAgCIAAAJIABAOIgBAJIABARIAAAMIAAgIIACgBIAAgNIAAgHIABgqQgCgMABgEIABAAIAAgKIAAgOQgBgKABgFQgBgEACgQIAAgLIAAgFIAAgxIABgEIAAgGIABgvIhKgDIgGABIhKgBQgUABgDgBIgPgBIgRABIgQgBIgHAAIgXAAIgDAAIgDAAIgEAAIgHAAIgNAAIAAAAQgJgBgEABIgFAAIhFgBIgRgBIgGABIgKAAIgJgBQgGABgIAAIgQgBIgHAAIh1gBIgGABIgJgBIgKAAIgyAAIgGgBIh6AAIgGAAIg4AAIgRABIgGgBIgZABIAJgBIBVgBIADAAIAhAAQgBgBgTAAIgFAAIgBAAIgEAAIgMAAIgGAAIgFAAIhAABQAAgBAMAAIA7gBIAIAAIAQgBIBiAAIACAAIALAAIAeAAIAIAAIAKAAIgCABIAHgBIAJABIANgBIAuAAIgBABIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAKAAIAOABIABgBIgBgBIAIABIACgBIAGABIAFgBIACABIAZAAIAFAAIADAAIAHABQABAAABAAQABAAAAAAQABAAAAAAQgBgBAAAAIAeAAIAigBIgFABIABABIACAAQAMgBAWAAIAkABQAAAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAIAKAAQABAAgBAAQAAAAAAAAQAAgBgBAAQgBAAgBAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAABAAIA+AAQgBACgGAAIgMgBIAGABIAEAAIASAAIgFgBIAMAAIASAAQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAOAAIANAAQACAAgBAAQgBAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAIgBAPABQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgEAAIAHAAIAGAAIBIAAIAGABQAAgBANAAIgDABIALAAIASAAIAHAAIAbABIgOAAIAEACIASAAIABAZIABAKIAAgkIADABIgCASIAAADIAAAHIAAAhIAAAGIgBAHIABAKIgBAnQAAABAAAAQAAABAAAAQAAgBAAAAQABgBAAgCIgBAMIAAAGIgBAFIAAAFIABAQQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIACgBIAAANIABANIABAIIAABFIAAAXIABgIIABhrIAAgHIABgTIgBgHIACiWIgdAAQgQAAgEgBIgJABQgCgBgDAAIgFABIgfAAIgJgBIghAAIgHAAIgJgBIgTABIgDgBIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBABIgJgBIgBABIghgBQgRAAgDABIgJgBIhBAAIgigBIhOAAIgBgBIhUACQgCAAgBAAQgBAAAAgBQgBAAABAAQAAAAABAAIgNAAIgHgBIjegBIgGABIgOAAIgSgBQgJACgFgBIAHgBIAHAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIgGAAQADgBAQABIgGAAQAHACAXgBQgJAAABgBIAHAAIAHgBQARgBACACIgHgBQgBAAAAAAQAAAAAAAAQABAAAAABQABAAABAAIAEABIAEgBIAGgBQgBAAgBAAQAAABAAAAQgBAAABAAQAAAAABAAIAIABIgDgBIAbAAIAGgBQAFgBAYABIAUAAIAHABIAcAAIgJgBIAHgBIAHAAIAGAAIAJABQANABALgBIATAAIABgBIAcABIgDABIABABQAIABAIgBQgJgBgBgBICIABIALAAIANAAIAFAAIAHAAIAEAAIBEABIAGgBIAHABIAHgBIAqABIAIgBIATABQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAPABIAOAAIABAAQAPABAOgCQAAABAHAAIAGABIAHgBIAIABIAIgBIAGABIAlAAIAFAAIAFAAIAqAAIgBBwIgBAFIABAKIgBAEIABADIgBAGIAAARIAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAGgBgEIAAASIgBAGIABAWIAAAHIAAAGIgBAHIABATIgBgCIAAAMQgBAGABACIgBAGIABAHIAAAMIgBAHIABAJIgBAYIABAEQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIAAAZIABgNQABgIAAgHIgCgLIABAEQAAABAAABQAAAAAAABQABAAAAAAQAAAAAAAAIABgRIgBgFQgBgMACgMIAAADIABgUIAAgFIABgXIgBgDIABgRIgBgBIABgaIABAGIgBgNIACgJIgBgQIACgJQgBgBAAABIABgLIAAgHQABgIgBgKIAAgCIAAgVIABAGIAAgGIAAgEIABgQIgBgIQAAgBAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIABADIAAgTIABgG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");
	this.shape_1.setTransform(1.3,-1,1.156,1.21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-42.3,110.3,84.8);


(lib.pop_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		self.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// x button
	this.Xbtn = new lib.X_btn();
	this.Xbtn.name = "Xbtn";
	this.Xbtn.parent = this;
	this.Xbtn.setTransform(193.4,-150,0.324,0.324,14.8);
	new cjs.ButtonHelper(this.Xbtn, 0, 1, 2, false, new lib.X_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Xbtn).wait(1));

	// popup
	this.text = new cjs.Text("?מה זה אנימה", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 280;
	this.text.parent = this;
	this.text.setTransform(47.8,-128.7);

	this.text_1 = new cjs.Text("אנימה (מיפנית: אנימציה) היא אנימציה שמקורה ביפן ומאפייניה ניתנים לזיהוי כאנימציה יפנית אותנטית. האנימה כוללת ז'אנרים רבים, לכל אחד סדרות .מומלצות משלו\n\nמטרת הייצוג היא להציג ז'אנרים פופולריים .וסדרות מומלצות לכל אחת מהם", "16px 'Arial'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 280;
	this.text_1.parent = this;
	this.text_1.setTransform(188,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.7,1,1).p("A4Sz+MAwlAAAMAAAAn9MgwlAAAg");
	this.shape.setTransform(49.7,-35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4472C4").s().p("A4ST/MAAAgn9MAwlAAAMAAAAn9g");
	this.shape_1.setTransform(49.7,-35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pop_up, new cjs.Rectangle(-106.8,-164.5,313,269.3), null);


(lib.go_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.go_back1();
	this.instance.parent = this;
	this.instance.setTransform(0.8,3.9);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.go_back1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bigScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.gotoAndStop(14);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape.setTransform(549.6,213.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgIgBg");
	this.shape_1.setTransform(543.2,213.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_2.setTransform(534.5,213.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgDADQgFAFAAAGIAAAJg");
	this.shape_3.setTransform(529,212.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_4.setTransform(525.6,213.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAFgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_5.setTransform(521.2,213.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_6.setTransform(515.4,213.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_7.setTransform(508.3,213.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgEAFgDANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQADAGAAAKIAAAXg");
	this.shape_8.setTransform(504,213.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAZAAIgcgrIALAAIANAXQADgDACgCQACgDAAgGIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_9.setTransform(498.5,213.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_10.setTransform(493.5,213.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgCgEQgBgDgDgCQgFgCgFAAIgJAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgEAAQgGAAgEgDQgDgDAAgHIAAgUQAIgCAKAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_11.setTransform(488.3,214.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_12.setTransform(480,213.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_13.setTransform(475.9,213.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgBAMAAQALAAAGACQAGABADAGQADAFABAKIAAAbIgJAAIAAgZQAAgHgCgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_14.setTransform(471.2,213.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_15.setTransform(465.2,213.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFAAAGIAAAJg");
	this.shape_16.setTransform(457,212.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_17.setTransform(452.6,213.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_18.setTransform(449.5,212.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_19.setTransform(445.9,212.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_20.setTransform(441.1,213.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgBAMAAQAKAAAHACQAGABADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_21.setTransform(435.1,213.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.8)").s().p("AAFANIgCgNIAAgMIAKAAIAAAMIgCANgAgKANIgCgNIAAgMIAKAAIAAAMIgCANg");
	this.shape_22.setTransform(427.5,210.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_23.setTransform(423.1,213.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_24.setTransform(419.1,212.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_25.setTransform(416.6,212.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_26.setTransform(412.6,213.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_27.setTransform(409.1,212.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgEAAgDAFIgDgEQAEgJAIAAQAHAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgFAEgJAAQgHAAgFgEg");
	this.shape_28.setTransform(402.2,213.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_29.setTransform(398,212.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_30.setTransform(395.5,212.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_31.setTransform(391.9,212.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.8)").s().p("AAFANIgCgNIAAgMIAKAAIAAAMIgCANgAgKANIgCgNIAAgMIAKAAIAAAMIgCANg");
	this.shape_32.setTransform(387.9,210.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_33.setTransform(384.7,215.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_34.setTransform(550.4,200.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_35.setTransform(546.1,200.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_36.setTransform(540.3,200.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_37.setTransform(534.4,200.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_38.setTransform(530.3,200.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCADgDACg");
	this.shape_39.setTransform(527.7,203.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAEAAAGIAAAJg");
	this.shape_40.setTransform(520.9,201.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_41.setTransform(516.8,200.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_42.setTransform(512.7,200.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_43.setTransform(506.8,200.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAEADQAFADACAGQACAGAAAKIAAAXg");
	this.shape_44.setTransform(497.9,200.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_45.setTransform(492.9,200.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_46.setTransform(489.8,199.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_47.setTransform(486.1,199.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_48.setTransform(481.3,200.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQALgCALAAQAKABAHACQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgCQgEgDgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_49.setTransform(475.3,200.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_50.setTransform(466.9,200.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_51.setTransform(462.9,199.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_52.setTransform(460.4,199.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAGAGQAHAGAAAMIAAAbg");
	this.shape_53.setTransform(456.4,200.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_54.setTransform(452.9,199.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgGAAgGgEg");
	this.shape_55.setTransform(446,200.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_56.setTransform(441.8,199.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_57.setTransform(439.3,199.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_58.setTransform(435.7,199.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_59.setTransform(432.1,202.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADAAAHIAAAgg");
	this.shape_60.setTransform(425.9,200.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_61.setTransform(421.6,200.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAFAEAEAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgFAEgJAAQgHAAgFgEg");
	this.shape_62.setTransform(415.8,200.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_63.setTransform(409.9,200.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_64.setTransform(405.8,200.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgEAFgDANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQADAGAAAKIAAAXg");
	this.shape_65.setTransform(398.7,200.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_66.setTransform(393.7,200.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_67.setTransform(388.3,200.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_68.setTransform(383.6,199.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_69.setTransform(379.4,200.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgDADQgFAFAAAGIAAAJg");
	this.shape_70.setTransform(371.2,199.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_71.setTransform(366,200.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_72.setTransform(549.7,187.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAGAGQAHAGAAAMIAAAbg");
	this.shape_73.setTransform(544.2,187.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_74.setTransform(538.9,187.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_75.setTransform(533.2,187.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_76.setTransform(529.2,186.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_77.setTransform(522.2,187.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGAqQAIgEADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_78.setTransform(516.3,187.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_79.setTransform(512.7,187.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_80.setTransform(509.1,186.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_81.setTransform(503.9,187.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_82.setTransform(494.9,187.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_83.setTransform(489.9,187.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_84.setTransform(486.1,187.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_85.setTransform(483.3,187.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_86.setTransform(479.6,186.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_87.setTransform(476.2,186.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_88.setTransform(472,187.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_89.setTransform(463.2,187.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_90.setTransform(457.8,187.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_91.setTransform(454.3,186.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_92.setTransform(450.3,187.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_93.setTransform(445,187.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_94.setTransform(436.5,187.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_95.setTransform(430.8,187.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_96.setTransform(426.6,187.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_97.setTransform(422.6,187.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_98.setTransform(414.8,187.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_99.setTransform(408.6,187.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_100.setTransform(402.1,187.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_101.setTransform(549.9,173.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_102.setTransform(544.7,174.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAZAAIgcgrIALAAIANAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAJIgBAIIgDAGQgCACgGADIALARIAAAGg");
	this.shape_103.setTransform(539.1,174.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgEAAgDAFIgDgEQAEgJAIAAQAHAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgHAAgFgEg");
	this.shape_104.setTransform(534.1,174.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_105.setTransform(528.3,174.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgCgEQgBgDgDgCQgEgCgGAAIgJAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgEAAQgGAAgEgDQgDgDAAgHIAAgUQAIgCAKAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_106.setTransform(523.1,175.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgDADQgFAFAAAGIAAAJg");
	this.shape_107.setTransform(515.1,173.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_108.setTransform(510.7,174.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_109.setTransform(507.6,173.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_110.setTransform(504,173.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_111.setTransform(499.2,174.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMgBQALAAAGACQAGADAEAEQADAGgBAKIAAAbIgIAAIAAgaQgBgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAQgFABgEgCg");
	this.shape_112.setTransform(493.2,174.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAFADQADADADAGQACAGAAAKIAAAXg");
	this.shape_113.setTransform(484.3,174.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_114.setTransform(479.1,174.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_115.setTransform(473.3,174.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_116.setTransform(467.2,174.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_117.setTransform(463.2,173.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_118.setTransform(459,174.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_119.setTransform(454.6,176.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_120.setTransform(447.7,174.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_121.setTransform(441.8,174.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_122.setTransform(436,174.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_123.setTransform(430.5,173.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQgBgJgCgDQgCgEgEgBQgEgCgGAAIgNABIAAgIIANgBQAPAAAGAFQAHAGAAANIAAAvg");
	this.shape_124.setTransform(425.5,175.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQADAEAFAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgFAEgJAAQgHAAgFgEg");
	this.shape_125.setTransform(417.6,174.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_126.setTransform(413.3,173.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_127.setTransform(410.9,174.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_128.setTransform(407.2,173.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_129.setTransform(402,174.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_130.setTransform(549.4,161.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGApQAIgDADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_131.setTransform(543.5,161.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_132.setTransform(538.7,160.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_133.setTransform(535.2,159.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_134.setTransform(531.6,160.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_135.setTransform(526.4,161.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_136.setTransform(517.4,161.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_137.setTransform(511.7,161.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_138.setTransform(506.1,161.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_139.setTransform(500.6,161.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGACADAFQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgDQgBgEgEgDQgEgCgIABIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_140.setTransform(494.8,161.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGApQAIgDADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_141.setTransform(486.1,161.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgDADQgFAFAAAGIAAAJg");
	this.shape_142.setTransform(481.3,160.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_143.setTransform(473.6,161.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_144.setTransform(467.9,161.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_145.setTransform(463.7,161.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_146.setTransform(459.7,161.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_147.setTransform(454.4,161.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_148.setTransform(445.9,161.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_149.setTransform(439.7,161.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_150.setTransform(433.2,161.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFAAAGIAAAJg");
	this.shape_151.setTransform(425,160.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_152.setTransform(421.5,161.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_153.setTransform(417.4,161.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_154.setTransform(413.3,159.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_155.setTransform(405.8,161.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_156.setTransform(399.4,161.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIAEgGIACgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFgBAGIAAAJg");
	this.shape_157.setTransform(393.9,160.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_158.setTransform(390.5,161.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAEgEQAEgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_159.setTransform(386.1,161.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_160.setTransform(380.3,161.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgBAOgBQAKAAAHACQAHACADAGQADAGAAAJIAAAbIgNAAIAAgZQAAgKgDgCQgEgEgLAAIAAAZIgBAKQgBADgDACQgDACgGAAQgGAAgGgCg");
	this.shape_161.setTransform(548.7,148);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgJIABgHIAEgGIACgCQACgEAAgFIAAgGIgfAAIAAgMIAtAAIAAAOIgBALIgCAFIgDAEIgCAEIgBAFIAAAIg");
	this.shape_162.setTransform(542.8,149);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgKIAAgIIAOAAIAAAIIgBAEIgBAFIgCAEQgBADgDABIgFADIALARIAAAGg");
	this.shape_163.setTransform(537.1,148);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgcIANAAIAAAcg");
	this.shape_164.setTransform(533.4,146.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIAAgZQAAgIgEgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_165.setTransform(529.2,148);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAaIAAgOIANAAIAAAOgAgGgLIAAgOIANAAIAAAOg");
	this.shape_166.setTransform(525.1,148);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.8)").s().p("AABAaIAAgMIAMAAIAAgKQAAgJgBgEQgCgEgEAAQgFAAgCAFQgDAEgCANIgDARIgPAAIADgLIAEgPIgJgZIAMAAIADAMQAIgMAKAAQAJAAAGAHQAFAHAAAQIAAAVg");
	this.shape_167.setTransform(492.2,134.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFABIAEgBIABgFIAAgYIgKABIgBgLQAMgBAOAAQAKAAAHACQAHACADAFQADAGAAAJIAAAbIgNAAIAAgZQAAgKgDgDQgEgCgLAAIAAAZIgBAJQgBACgDACQgDACgGAAQgGAAgGgCg");
	this.shape_168.setTransform(485.6,134.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgDABgJIABgJIANAAIgBAGQgBALgDAFQgDAEgEADIAPAWg");
	this.shape_169.setTransform(479.7,134.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgcIANAAIAAAcg");
	this.shape_170.setTransform(475.3,133.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAaIAAgyIATgBQALAAAGADQAGADADAFQACAFAAAIIAAAbgAgJgNIAAAbIAUAAIAAgOQAAgHgDgDQgDgEgHAAIgHABg");
	this.shape_171.setTransform(470.9,134.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgKIABgGIADgHIACgCQACgEAAgFIAAgFIgbAAIAAggIAOAAIAAAUIAbAAIAAANIgBAKIgDAGIgCAEIgDAEIAAAFIAAAJg");
	this.shape_172.setTransform(462.4,133.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.8)").s().p("AAHAaIgDgMQgEABgDAFIgDAGIgOAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgBgDgGAAIgEAAIgBgKIAJgBQAKAAAEAFQAFAEgBALIAAALIAGAUg");
	this.shape_173.setTransform(457.7,134.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgcIANAAIAAAcg");
	this.shape_174.setTransform(454.1,133.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgKIABgGIADgHIACgCQACgEAAgFIAAgFIgbAAIAAggIAOAAIAAAUIAbAAIAAANIgBAKIgDAGIgCAEIgDAEIAAAFIAAAJg");
	this.shape_175.setTransform(450.2,133.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgDABgJIABgJIANAAIgBAGQgBALgDAFQgDAEgEADIAPAWg");
	this.shape_176.setTransform(445.1,134.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgcIANAAIAAAcg");
	this.shape_177.setTransform(440.6,133.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.8)").s().p("AgDAYIAAgUIgUAAIAAgHIAUAAIAAgUIAHAAIAAAUIAUAAIAAAHIgUAAIAAAUg");
	this.shape_178.setTransform(430.8,133.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgIAAgVQAAgLADgIQACgIAFgEQAFgEAHAAQAGgBAEADQAEADADAEQADAEACAGQACAHAAAJQAAANgDAHQgDAIgFAFQgFADgIABQgJAAgHgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGABgSQgBgQgEgHQgEgFgGAAQgFAAgEAFg");
	this.shape_179.setTransform(425.1,133.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgDAFgGQAFgEACgFIAGAAIAABHg");
	this.shape_180.setTransform(419.2,133.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.8)").s().p("AABAaIAAgMIAMAAIAAgKQAAgJgBgEQgCgEgEAAQgFAAgCAFQgDAEgCANIgDARIgPAAIADgLIAEgPIgJgZIAMAAIADAMQAIgMAKAAQAJAAAGAHQAFAHAAAQIAAAVg");
	this.shape_181.setTransform(489.9,121.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgMQAAgLAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAALgIAIQgHAIgMAAQgLAAgHgHgAgJgKQgDAFAAAFQAAAHAEAEQADAFAFAAQAGAAADgFQAEgEAAgHQAAgGgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_182.setTransform(483.8,121.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgHAAIgFABIAAAGQAAAHAGAAIACAAIACAHQgEACgEAAQgDAAgEgCQgDgBgCgDQgDgDAAgIIAAgMQAKgDAJAAQAMAAAJAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_183.setTransform(478,121.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQgBgIgEgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_184.setTransform(472.2,121.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAGgEAAgIQAAgIgFgEQgEgFgHAAIgFABIAAAGQAAAHAGAAIABAAIADAHQgDACgEAAQgFAAgDgCQgDgBgDgDQgCgDAAgIIAAgMQAJgDAKAAQANAAAIAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_185.setTransform(464.2,121.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIAAgZQAAgIgDgDQgFgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_186.setTransform(458.4,121.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgJIABgHIAEgGIACgCQACgEAAgFIAAgGIgfAAIAAgMIAtAAIAAAOIgBALIgCAGIgDADIgCAEIgBAEIAAAJg");
	this.shape_187.setTransform(453.1,122.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgcIANAAIAAAcg");
	this.shape_188.setTransform(448.8,120);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAaIAAgyIATgBQALAAAGADQAGADADAFQACAFAAAIIAAAbgAgJgNIAAAbIAUAAIAAgOQAAgHgDgDQgDgEgHAAIgHABg");
	this.shape_189.setTransform(444.4,121.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgKIAJAAIAAAKgAgEgPIAAgKIAJAAIAAAKg");
	this.shape_190.setTransform(440,121.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgFAIgGQAKgJAEgFQAEgFAAgFQAAgGgDgDQgEgEgGABQgFgBgEAEQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAGAAAIQAAAFgBADIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_191.setTransform(432.9,120.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAjQAAgIADgMQADgMAGgKQAFgLAHgIIgiAAIAAgIIAtAAIAAAGQgHAIgGAMQgHALgDANQgCAJgBAKg");
	this.shape_192.setTransform(427.4,120.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAjQAAgIADgMQADgMAGgKQAFgLAHgIIgiAAIAAgIIAtAAIAAAGQgHAIgGAMQgHALgDANQgCAJgBAKg");
	this.shape_193.setTransform(421.9,120.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBQACgCABgDIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQACAEAEADQAEACAFAAQAHAAAEgFQAFgFABgNIABgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_194.setTransform(488.3,107.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgMIANAAIAAgSQAAgGgCgCQgDgCgFAAIgDAAIgBgKIAKgBQAIAAAFAFQAEAEABALIAAAfg");
	this.shape_195.setTransform(482.7,107.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFABIAEgBIABgFIAAgYIgKABIgBgLQAMgBAOAAQAKAAAHACQAHACADAFQADAGAAAJIAAAbIgNAAIAAgZQAAgKgDgDQgEgCgLAAIAAAZIgBAJQgBADgDABQgDACgGABQgGgBgGgCg");
	this.shape_196.setTransform(477.2,107.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgcIANAAIAAAcg");
	this.shape_197.setTransform(469.9,106.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIAAgJIAOAAIAAAIIgBAEIgBAFIgCAEIgDAEIgGADIALARIAAAGg");
	this.shape_198.setTransform(465.8,107.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgcIANAAIAAAcg");
	this.shape_199.setTransform(462.1,106.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgDABgJIABgJIANAAIgBAGQgBALgDAFQgDAEgEADIAPAWg");
	this.shape_200.setTransform(458,107.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQABgJgFgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQAEAFAAAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_201.setTransform(451.9,107.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAaIAAgNIANAAIAAANgAgGgLIAAgOIANAAIAAAOg");
	this.shape_202.setTransform(447.1,107.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAgQgFgFgBgIIAJgBQABAGACADQAEACAEAAQAEAAADgCQACgBACgDQACgEACgEIABgMIAAgBQgDAEgEACQgFADgEAAQgJAAgGgGQgHgFABgLQgBgLAHgGQAGgIAKAAQAGAAAGAEQAFAEADAHQAEAHAAANQAAANgEAIQgCAIgGAFQgGADgHAAQgIAAgGgEgAgJgYQgFAGABAHQgBAHAFAEQAEAEAFgBQAGABAEgEQAEgEAAgHQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_203.setTransform(439.8,106.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgIABgVQAAgLACgIQADgIAFgEQAFgEAHgBQAGABAEACQAEADADADQADAFACAGQABAHAAAJQAAANgCAHQgDAIgFAFQgFADgIAAQgKABgFgIgAgJgXQgEAGAAARQAAASAEAGQAEAFAFAAQAGAAAEgFQAEgGAAgSQAAgRgEgGQgEgFgGAAQgFAAgEAFg");
	this.shape_204.setTransform(434.3,106.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgIAAgVQAAgLAEgIQACgIAFgEQAFgEAHgBQAGABAEACQAFADADADQACAFABAGQACAHAAAJQAAANgDAHQgCAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgRgFgGQgEgFgGAAQgFAAgEAFg");
	this.shape_205.setTransform(428.7,106.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgFQAKgKAEgEQAEgGAAgFQAAgGgDgDQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_206.setTransform(423.1,106.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgEABgKIABgIIANAAIgBAHQgBALgDAEQgDAEgEADIAPAWg");
	this.shape_207.setTransform(491.2,94.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAaIAAgzIANAAIAAAzg");
	this.shape_208.setTransform(486.8,94.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.8)").s().p("AABAaIAAgMIAMAAIAAgKQAAgJgBgEQgCgEgEAAQgFAAgCAFQgDAEgCANIgDARIgPAAIADgLIAEgPIgJgZIAMAAIADAMQAIgMAKAAQAJAAAGAHQAFAHAAAQIAAAVg");
	this.shape_209.setTransform(482.1,94.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_210.setTransform(477.7,95.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAaIAAgNIANAAIAAANgAgGgLIAAgOIANAAIAAAOg");
	this.shape_211.setTransform(474.7,94.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_212.setTransform(467.2,94.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_213.setTransform(463,93);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_214.setTransform(459,94.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_215.setTransform(455.4,94.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAFADQADADADAGQACAGAAAKIAAAXg");
	this.shape_216.setTransform(448.3,94.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_217.setTransform(442.7,94.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_218.setTransform(436.3,94.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_219.setTransform(431.6,93);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAFADQAEADACAGQACAGAAAKIAAAXg");
	this.shape_220.setTransform(427.2,94.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_221.setTransform(421.4,94.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBQADgCABgDIABgJIAAgKIAMAAIAAANIgBAIIgDAFIgFAEQgFACgHABQABAEAFADQADACAGAAQAHAAAFgFQADgFACgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_222.setTransform(493,80.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAaIAAgyIATgBQALAAAGADQAGADADAFQACAFAAAIIAAAbgAgJgNIAAAbIAUAAIAAgOQAAgHgDgDQgDgEgHAAIgHABg");
	this.shape_223.setTransform(486.3,80.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgHAAgMQAAgMAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAALgIAJQgHAHgMAAQgLAAgHgHgAgJgKQgDAEAAAGQAAAIAEAEQADAEAFAAQAGAAADgEQAEgEAAgIQAAgGgEgFQgDgEgGAAQgFAAgEAFg");
	this.shape_224.setTransform(477.4,80.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.8)").s().p("AADAaIAAgnIgbAAIAAgMIAxAAIAAAMIgIAAIAAAng");
	this.shape_225.setTransform(471.6,80.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIAAgZQAAgIgDgDQgFgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_226.setTransform(466,80.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgQABIAAgLQAIgBAKAAQALAAAGADQAHAEACAFQADAFAAAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_227.setTransform(460.6,80.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgKIAJAAIAAAKgAgEgPIAAgKIAJAAIAAAKg");
	this.shape_228.setTransform(456.1,80.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_229.setTransform(449.2,80.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_230.setTransform(445.2,79.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_231.setTransform(442.7,79.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_232.setTransform(438.7,80.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_233.setTransform(435.2,79.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgEAAgDAFIgDgEQAEgJAIAAQAHAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgFAEgJAAQgHAAgFgEg");
	this.shape_234.setTransform(428.3,80.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_235.setTransform(424.1,79.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_236.setTransform(421.6,79.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_237.setTransform(418,79.8);

	this.instance = new lib.innerBall();
	this.instance.parent = this;
	this.instance.setTransform(454.8,157.2,0.941,0.957,15,0,0,-0.1,-0.3);

	this.instance_1 = new lib.fairytail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,39,0.198,0.198);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#4472C4").s().p("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");
	this.shape_238.setTransform(455.9,157.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAXQADgBABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_239.setTransform(619.8,215.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_240.setTransform(587.3,214.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_241.setTransform(579.5,215.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAXQADgBABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_242.setTransform(573.7,215.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAKAAIAAAwgAAAAQIAAgHIABgIQABgDAEgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAHIAAAIg");
	this.shape_243.setTransform(568.2,216.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAXQADgBABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_244.setTransform(562.6,215.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAgKIAJAAIAAAKgAgDATIAAgDQAAgFABgDIADgHIAGgEQAEgEACgDIABgFQAAgGgEgDQgEgEgGAAQgEAAgEADQgEAEgBAHIgJgBQABgJAGgGQAGgFAJgBQAKAAAHAHQAGAFAAAIQAAAFgCAEQgDAEgFAEIgHAGIgCAEIAAAIg");
	this.shape_245.setTransform(554.4,214.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_246.setTransform(629.4,202.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_247.setTransform(623.6,202.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_248.setTransform(604.3,202.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQACADAAAHIAAAgg");
	this.shape_249.setTransform(597,202.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQADAFAAAKIAAAbIgKAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_250.setTransform(589.5,202.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgBABgDQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_251.setTransform(572.2,202.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgDgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAKAAIADAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_252.setTransform(557.3,202.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAGIAAAIg");
	this.shape_253.setTransform(551.8,203.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgIIgBgQIAAgGQAAgHAGgGIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_254.setTransform(533.3,202.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIAAgIQALgBALAAQAKAAAHACQAGABADAGQAEAFAAAKIAAAbIgJAAIAAgZQAAgHgCgEQgBgDgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_255.setTransform(491.5,202.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQALgBALAAQAKAAAHACQAGABADAGQAEAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_256.setTransform(473.6,202.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQADgDAGAAQAGAAAFADQAEADACAGQACAGAAAKIAAAXg");
	this.shape_257.setTransform(605.9,189);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgCgDQgCgEgFgBQgDgCgGAAIgMABIgBgIIANgBQAPAAAGAFQAHAGAAANIAAAvg");
	this.shape_258.setTransform(589.6,190);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_259.setTransform(569.8,189.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_260.setTransform(534.7,189);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCADgDACg");
	this.shape_261.setTransform(530.3,191.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAABAQIAAgHIAAgIQABgDADgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAFIAAAJg");
	this.shape_262.setTransform(512,190);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_263.setTransform(506.4,189);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_264.setTransform(482.5,188);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQADgDACgCQACgDAAgGIABgJIAJAAIAAAKIgCAHIgDAGQgDACgFADIALASIAAAFg");
	this.shape_265.setTransform(447.1,189);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_266.setTransform(442.1,189.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_267.setTransform(434.5,189);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_268.setTransform(635.8,174.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAKAAIADAMQADgFAEgEQAEgDAGAAQAGAAAFADQAEADABAGQACAGAAAKIAAAXg");
	this.shape_269.setTransform(623,175.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_270.setTransform(617.4,175.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQADgDACgDQACgDAAgFIABgJIAJAAIAAAKIgCAHIgDAGQgDACgFADIALASIAAAFg");
	this.shape_271.setTransform(587.1,175.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_272.setTransform(580.5,175.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_273.setTransform(570.5,175.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGAqQAIgEADgGQACgFAAgJIAAgSIAKAAIgBAOIgBANIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_274.setTransform(564.8,176.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_275.setTransform(557.5,174.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgCAMAAQALABAGACQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_276.setTransform(519,175.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_277.setTransform(488.7,175.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_278.setTransform(644.7,162.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_279.setTransform(632.7,162.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_280.setTransform(606.8,162.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCADgDACg");
	this.shape_281.setTransform(585.5,165.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgFAFgCANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQADAGAAAKIAAAXg");
	this.shape_282.setTransform(578.2,162.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQAKAAAHADQAGACADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_283.setTransform(566.1,162.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQAMgCALAAQALAAAGADQAGACAEAEQADAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_284.setTransform(559.7,162.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_285.setTransform(546.1,162.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_286.setTransform(540.4,162.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_287.setTransform(532.2,162.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_288.setTransform(524.3,162.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALAAQALAAAGADQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_289.setTransform(507.9,162.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_290.setTransform(497,162.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_291.setTransform(479.1,161.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_292.setTransform(474.2,162.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgJIgBgQIAAgEQAAgJAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAEAAAIIAAAEIACARIAAAHg");
	this.shape_293.setTransform(466.9,162.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_294.setTransform(461.9,162.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_295.setTransform(456.2,162.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgBALgBQALAAAGACQAGADAEAEQACAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAHQgBADgDACQgDABgGAAIgJgBg");
	this.shape_296.setTransform(639.3,149.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAGAGQAGAGAAAMIAAAbg");
	this.shape_297.setTransform(633.5,149.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_298.setTransform(621.7,149.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_299.setTransform(617.8,149.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_300.setTransform(613.6,149.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_301.setTransform(606.5,149.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_302.setTransform(597.2,149.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_303.setTransform(591.5,149.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_304.setTransform(577.7,149.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_305.setTransform(545.7,149.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_306.setTransform(539.8,149.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_307.setTransform(534,149.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_308.setTransform(526.2,149.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_309.setTransform(511.1,149.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_310.setTransform(508.5,151.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_311.setTransform(501.6,149.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgCgDQgCgEgFgBQgDgCgGAAIgMABIgBgIIANgBQAPAAAGAFQAHAGAAANIAAAvg");
	this.shape_312.setTransform(495.9,150.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_313.setTransform(487.6,149.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAQgFABgEgCg");
	this.shape_314.setTransform(481.3,149.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_315.setTransform(475.3,149.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQAKAAAHACQAGADADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAHQgBADgDACQgDABgGAAIgJgBg");
	this.shape_316.setTransform(468.8,149.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQACAGABAKIAAAXg");
	this.shape_317.setTransform(455.3,149.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGAqQAIgEADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_318.setTransform(449.5,149.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgEAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgGAAgGgEg");
	this.shape_319.setTransform(444.3,149.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQAKAAAHACQAGADADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAHQgBADgDACQgDABgGAAIgJgBg");
	this.shape_320.setTransform(432.4,149.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_321.setTransform(642.4,136.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_322.setTransform(638.6,136.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_323.setTransform(633.1,136.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_324.setTransform(624.5,136.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_325.setTransform(618.7,136.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAKAAIAAAwgAAAAQIAAgHIABgJQABgCAEgEIACgEIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEAEAAAFIAAAJg");
	this.shape_326.setTransform(613.2,137.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_327.setTransform(607.6,136.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_328.setTransform(603.4,136.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_329.setTransform(596.4,136.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_330.setTransform(592.2,136.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_331.setTransform(588.2,136.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_332.setTransform(579.8,136.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIAAgbQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABIAAAqIgKAAIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcg");
	this.shape_333.setTransform(574.1,136.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_334.setTransform(569.9,136.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_335.setTransform(565.9,136.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_336.setTransform(558.1,136.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_337.setTransform(553.2,136.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFABAGIAAAJg");
	this.shape_338.setTransform(546.5,135.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAFIAAgJQAHgEAFgFQAFgEACgFIAGAAIAABHg");
	this.shape_339.setTransform(538.3,135.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgIAAgTQAAgTAIgKQAGgJALAAQAIABAGAFQAFAEABAIIgJABQAAgFgDgCQgEgEgFAAQgDAAgDACQgEADgDAGQgCAGAAAKQADgEAFgCQAFgDADAAQAJAAAHAHQAFAFAAALQAAAGgDAGQgCAFgGADQgEADgHABQgKgBgHgHgAgIABQgFAEAAAIQAAAEADAEQABAEADADQAEACADAAQAGgBADgEQAEgFAAgHQAAgIgEgEQgEgDgFAAQgGAAgDADg");
	this.shape_340.setTransform(533.1,135.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_341.setTransform(524.9,136.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_342.setTransform(514.5,135.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_343.setTransform(500.8,136.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADAAAHIAAAgg");
	this.shape_344.setTransform(496.1,136.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_345.setTransform(491.5,136.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_346.setTransform(483.6,136.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_347.setTransform(480.5,136.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgBgEQgCgDgEgCQgEgCgFAAIgJAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgEAAQgGAAgEgDQgDgDAAgHIAAgUQAJgCAJAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_348.setTransform(476.4,137.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_349.setTransform(467.8,136.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_350.setTransform(462,136.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_351.setTransform(457,136.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_352.setTransform(451.3,136.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgBAOgBQAKAAAHACQAHACADAGQADAGAAAJIAAAbIgNAAIAAgaQAAgJgDgCQgEgEgLAAIAAAZIgBAKQgBADgDACQgDACgGAAQgGAAgGgCg");
	this.shape_353.setTransform(644,123.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgKIAAgIIAOAAIAAAIIgBAEIgBAFIgCAEQgBADgCABIgGADIALARIAAAGg");
	this.shape_354.setTransform(632.4,123.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgEgMQgEABgDAFIgEAGIgNAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgCgDgFAAIgEAAIgBgKIAKgBQAIAAAFAFQAEAEABALIAAALIAFAUg");
	this.shape_355.setTransform(536.9,109.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgGQAKgJAEgEQAEgGAAgFQAAgGgDgDQgEgDgGgBQgFABgEADQgEAEAAAHIgJgBQABgLAGgFQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_356.setTransform(504.2,108.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAFgEABgIQgBgIgEgEQgEgFgGAAIgGABIAAAGQAAAHAGAAIABAAIADAHQgDACgEAAQgFAAgDgCQgDgBgDgDQgCgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_357.setTransform(554.4,96.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQgBgIgDgDQgFgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_358.setTransform(548.6,96.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgGAAIgGABIAAAGQAAAHAGAAIACAAIACAHQgEACgEAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAJgDAKAAQAMAAAIAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_359.setTransform(540.6,96.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAfQgGgGgBgJIAKgBQABAHADADQAEAEAFAAQAGAAAEgFQAFgFAAgIQAAgHgFgEQgEgEgGAAQgEAAgDACQgEACgCACIgIgBIAHgkIAiAAIAAAJIgbAAIgEATQAHgFAGAAQAJAAAGAHQAHAFAAAKQAAAKgGAHQgHAJgLAAQgJAAgHgFg");
	this.shape_360.setTransform(509.4,95.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBQADgCABgDIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQAAAEAEADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_361.setTransform(567.6,83);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAaIAAgMIAOAAIAAgSQAAgGgCgCQgDgCgEAAIgFAAIgBgKIAKgBQAJAAAFAFQAFAEgBALIAAAfg");
	this.shape_362.setTransform(561.9,82.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIABgJIANAAIgBAIIAAAEIgBAFIgCAEIgEAEIgEADIAKARIAAAGg");
	this.shape_363.setTransform(545.1,82.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgPABIgBgLQAHgBALAAQALAAAGADQAHAEADAFQACAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_364.setTransform(531.1,82.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAfQgGgGgBgJIAKgBQABAHADADQAEAEAFAAQAGAAAEgFQAFgFAAgIQAAgHgFgEQgEgEgGAAQgEAAgDACQgEACgCACIgIgBIAHgkIAiAAIAAAJIgbAAIgEATQAHgFAGAAQAJAAAGAHQAHAFAAAKQAAAKgGAHQgHAJgLAAQgJAAgHgFg");
	this.shape_365.setTransform(519.1,82);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgDAFgFQAFgFACgFIAGAAIAABHg");
	this.shape_366.setTransform(513.2,81.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgIABgVQAAgLACgIQADgIAFgEQAFgEAHgBQAGABAEACQAEADADADQADAFACAGQABAHAAAJQAAANgCAHQgDAIgFAFQgFADgIAAQgKABgFgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGAAgSQAAgRgEgGQgEgFgGAAQgFAAgEAFg");
	this.shape_367.setTransform(508,82);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQACgCADgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEAEAAAFIAAAJg");
	this.shape_368.setTransform(552.3,70.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_369.setTransform(546.7,69.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgJIgBgQIAAgEQAAgJAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAEAAAIIAAAEIACARIAAAHg");
	this.shape_370.setTransform(542,69.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_371.setTransform(538.8,69.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_372.setTransform(535.6,69.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_373.setTransform(531,69.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEAEAAAFIAAAJg");
	this.shape_374.setTransform(522.6,70.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_375.setTransform(517,69.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_376.setTransform(512.8,69.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_377.setTransform(510.4,69.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_378.setTransform(506.2,69.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_379.setTransform(495.1,69.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBQACgCABgDIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQACAEAEADQADACAGAAQAHAAAEgFQAFgFABgNIABgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_380.setTransform(589.1,56.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgHAAgMQAAgMAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAALgIAJQgHAHgMAAQgLAAgHgHgAgJgKQgDAEAAAGQAAAIAEADQADAFAFAAQAGAAADgFQAEgDAAgIQAAgGgEgFQgDgEgGAAQgFAAgEAFg");
	this.shape_381.setTransform(573.5,56);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAaIAAgnIgcAAIAAgMIAxAAIAAAMIgIAAIAAAng");
	this.shape_382.setTransform(567.7,56);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQgBgIgEgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_383.setTransform(562.2,56);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_384.setTransform(533.1,56);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_385.setTransform(529.1,56);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_386.setTransform(521,56);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAXQADgBABgDQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_387.setTransform(515.3,56);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_388.setTransform(509.4,56);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAaIAAgIIAfAAIAAgRQAAgGgBgEQgCgEgEgCQgDgCgJAAIgKABIgBgIIAOgBQANAAAGAGQAHAGAAAMIAAATIAIAAIAAAIg");
	this.shape_389.setTransform(503.7,56);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_390.setTransform(498,56);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_391.setTransform(479.3,54.8);

	this.instance_2 = new lib.mylovestory();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,39,0.331,0.331);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#4472C4").s().p("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");
	this.shape_392.setTransform(536.9,157.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_393.setTransform(629.7,212.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgJIgBgPIAAgGQAAgIAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_394.setTransform(625.1,212.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_395.setTransform(615.8,213.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCADgDACg");
	this.shape_396.setTransform(561.6,215.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgDgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_397.setTransform(523.1,212.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQABgJgCgDQgDgEgEgBQgEgCgGAAIgNABIAAgIIAOgBQANAAAHAFQAHAGAAANIAAAvg");
	this.shape_398.setTransform(482.6,213.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQABgDAEgDIADgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAFIAAAJg");
	this.shape_399.setTransform(455.9,213.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAGAAACgDQAEgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgHAAgFgEg");
	this.shape_400.setTransform(626.5,199.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_401.setTransform(614.5,200.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFAAAGIAAAJg");
	this.shape_402.setTransform(538.4,198.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_403.setTransform(530.5,199.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_404.setTransform(509.5,199.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQACAGgBAKIAAAXg");
	this.shape_405.setTransform(486.7,199.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_406.setTransform(470.6,199.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_407.setTransform(462.3,199.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQABgCAEgDIADgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAGIAAAJg");
	this.shape_408.setTransform(627.3,187.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQABgCAEgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAGIAAAJg");
	this.shape_409.setTransform(608.5,187.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQADAGAAAKIAAAbIgKAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgFAAIgJgBg");
	this.shape_410.setTransform(589,186.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_411.setTransform(511,187.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_412.setTransform(487.1,186.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_413.setTransform(462.6,187.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_414.setTransform(443.3,186.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCADgDACg");
	this.shape_415.setTransform(424.3,188.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_416.setTransform(609,174);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_417.setTransform(584.4,172.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_418.setTransform(576.2,173);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_419.setTransform(543.8,173);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQAAgJgCgDQgDgEgEgBQgEgCgGAAIgNABIAAgIIAOgBQANAAAHAFQAHAGAAANIAAAvg");
	this.shape_420.setTransform(538.8,173.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_421.setTransform(530.2,173);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_422.setTransform(517.7,172.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_423.setTransform(495.7,173);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_424.setTransform(488,172.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_425.setTransform(465.3,173);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_426.setTransform(443.5,172.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQACADgBAHIAAAgg");
	this.shape_427.setTransform(436.7,172.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAFADQADADADAGQACAGAAAKIAAAXg");
	this.shape_428.setTransform(627.4,159.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_429.setTransform(621.9,159.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_430.setTransform(597.7,158.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_431.setTransform(593.5,159.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_432.setTransform(564.8,158.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_433.setTransform(560.6,159.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_434.setTransform(543.8,159.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_435.setTransform(526.8,159.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_436.setTransform(522.1,158.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_437.setTransform(509.3,158.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_438.setTransform(505.5,159.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_439.setTransform(494,158.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_440.setTransform(489.8,159.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_441.setTransform(481.7,159.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGACADAFQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgDQgBgEgEgDQgEgBgIgBIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAIgJgBg");
	this.shape_442.setTransform(465.9,159.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_443.setTransform(461.7,158.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAEgEQAEgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_444.setTransform(454.5,159.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADAAAHIAAAgg");
	this.shape_445.setTransform(449.7,159.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAZAAIgcgrIALAAIANAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAJIAAAIIgEAGQgDACgFADIALARIAAAGg");
	this.shape_446.setTransform(443,159.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_447.setTransform(433.6,158.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_448.setTransform(429.4,159.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgKIABgIIANAAIgBAIIAAAEIgBAFIgCAEIgDAEIgGADIALARIAAAGg");
	this.shape_449.setTransform(620.1,146.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAWQADgEABgJIABgJIANAAIgBAGQgBALgDAFQgDAEgEADIAPAWg");
	this.shape_450.setTransform(551.2,133.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgEgMQgFABgCAFIgEAGIgNAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgBgDgGAAIgEAAIgBgKIAKgBQAIAAAFAFQAFAEAAALIAAALIAFAUg");
	this.shape_451.setTransform(529.2,133.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAWQADgEABgJIABgJIANAAIgBAGQgBALgDAFQgDAEgEADIAPAWg");
	this.shape_452.setTransform(516.6,133.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAcQgGgHgBgTQABgUAHgJQAHgIAKAAQAJAAAFAEQAFAFABAJIgJAAQAAgFgDgDQgEgDgEAAQgEAAgDACQgEADgDAGQgCAGAAALQADgFAFgDQAFgCADAAQAJAAAHAGQAFAGAAAKQAAAHgCAGQgEAFgFAEQgEACgHAAQgKABgHgJgAgIABQgFAFAAAGQAAAFACAEQACAEADADQAEABADAAQAGABAEgFQADgFAAgHQAAgIgDgEQgEgDgGAAQgGAAgDADg");
	this.shape_453.setTransform(496.6,132.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEABgIQgBgIgEgEQgEgFgGAAIgGABIAAAGQAAAHAGAAIABAAIADAHQgEACgEAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_454.setTransform(546.7,119.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQAAgIgFgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_455.setTransform(540.9,119.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgJIABgHIAEgGIACgCQACgEAAgFIAAgGIgfAAIAAgMIAtAAIAAAOIgBALIgCAGIgDADIgCAEIgBAFIAAAIg");
	this.shape_456.setTransform(521.8,120.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgFAIgGQAKgJAEgFQAEgFAAgFQAAgGgDgDQgEgEgGABQgFgBgEAEQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAGAAAIQAAAFgBADIgGAIQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_457.setTransform(501.6,118.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBQADgCABgDIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_458.setTransform(559.8,106.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAaIAAgMIAOAAIAAgSQAAgGgCgCQgCgCgFAAIgFAAIgBgKIAKgBQAJAAAFAFQAFAEgBALIAAAfg");
	this.shape_459.setTransform(554.2,106.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIABgJIANAAIgBAIIAAAEIgBAFIgCAEIgEAEIgEAEIAKAQIAAAGg");
	this.shape_460.setTransform(537.3,106.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQAAgJgFgDQgFgEgIAAIgPABIgBgLQAIgBAKAAQALAAAHADQAGAEADAFQACAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_461.setTransform(523.4,106.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAaIAAgOIANAAIAAAOgAgGgLIAAgOIANAAIAAAOg");
	this.shape_462.setTransform(518.6,106.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(0,0,0,0.8)").s().p("AAGAkIAAgRIgeAAIAAgIIAgguIAHAAIAAAuIAKAAIAAAIIgKAAIAAARgAgPALIAVAAIAAggg");
	this.shape_463.setTransform(511.2,105.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgIAAgVQAAgLACgIQADgIAFgEQAFgEAHgBQAGABAEACQAEADADADQADAFACAGQACAHAAAJQAAANgDAHQgDAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGABgSQgBgRgEgGQgEgFgGAAQgFAAgEAFg");
	this.shape_464.setTransform(500.2,105.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_465.setTransform(531.2,91.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQABgCAEgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEAEAAAFIAAAJg");
	this.shape_466.setTransform(522.1,93.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_467.setTransform(516.1,92.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_468.setTransform(512,91.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIABAIIAAADQADAAACgBQADgCABgDIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_469.setTransform(581.9,79.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQAAgJgFgDQgFgEgIAAIgPABIgBgLQAIgBAKAAQALAAAHADQAGAEADAFQACAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_470.setTransform(549.5,79.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_471.setTransform(531.4,80.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAEgEQAEgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_472.setTransform(524.3,79.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_473.setTransform(517.9,79.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgEIADgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAGIAAAIg");
	this.shape_474.setTransform(505.8,80.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_475.setTransform(490.8,80.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAaIAAgxQALgCAJAAQAIAAAGADQAGACACAFQADAFAAAIIAAAcgAgMgQIAAAiIAZAAIAAgTQAAgGgBgDQgBgDgEgCQgEgCgGAAIgJABg");
	this.shape_476.setTransform(472.9,79.4);

	this.instance_3 = new lib.nogamenolife();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,39,0.331,0.331);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#4472C4").s().p("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");
	this.shape_477.setTransform(522.9,157.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAFgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_478.setTransform(489.7,218.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgBABgDQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_479.setTransform(470.3,218.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_480.setTransform(561.5,205.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQAMgBALAAQALAAAGACQAGABADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_481.setTransform(462,205.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQAAgDADgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAFIAAAJg");
	this.shape_482.setTransform(439.9,206.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAFgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_483.setTransform(420.4,205.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCADgDACg");
	this.shape_484.setTransform(410.1,208);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCADgDACg");
	this.shape_485.setTransform(379.7,208);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQAKABAHACQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_486.setTransform(563.3,192.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALABAGACQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgIgBg");
	this.shape_487.setTransform(534.2,192.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgGAAgCAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAFADQADADADAGQACAGAAAKIAAAXg");
	this.shape_488.setTransform(525.3,192);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgGQAKgJAEgEQAEgGAAgFQAAgFgDgEQgEgDgGgBQgFABgEADQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAEgBAEIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_489.setTransform(443.3,191.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALAAQALABAGACQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_490.setTransform(417.4,192.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_491.setTransform(408.5,192);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAKAAIADAMQADgFAEgEQAEgDAGAAQAGAAAFADQAEADABAGQACAGAAAKIAAAXg");
	this.shape_492.setTransform(376.4,192);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgJIgBgPIAAgFQAAgJAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_493.setTransform(371.8,192.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALABAGACQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_494.setTransform(359.2,192.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_495.setTransform(561.7,178.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_496.setTransform(547,178.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIALAAIANAXQADgCACgEQACgDAAgFIAAgJIAKAAIgBAJIgBAIIgDAGQgCACgGADIALASIAAAFg");
	this.shape_497.setTransform(519.4,178.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_498.setTransform(500,178.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGABAKIAAAbIgKAAIAAgaQAAgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_499.setTransform(493.6,178.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQADgCACgEQACgDAAgFIABgJIAJAAIAAAJIgCAIIgDAGQgDACgFADIALASIAAAFg");
	this.shape_500.setTransform(480,178.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAFAEAEAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgEAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgGAAgGgEg");
	this.shape_501.setTransform(460.2,178.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_502.setTransform(422.1,178.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQALgCALAAQAKAAAHADQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_503.setTransform(402,178.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGABAKIAAAbIgKAAIAAgaQAAgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_504.setTransform(378.9,178.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgBgEgFgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_505.setTransform(569.8,165.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCAEgDABg");
	this.shape_506.setTransform(531.9,168.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAFAAAEgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_507.setTransform(524.9,165.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_508.setTransform(466.3,167.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAEgCAEQgCAEgDABg");
	this.shape_509.setTransform(430.2,168.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAQgFABgEgCg");
	this.shape_510.setTransform(384.4,165.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_511.setTransform(514.5,152.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCAEgDABg");
	this.shape_512.setTransform(500.4,155.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQACAGABAKIAAAXg");
	this.shape_513.setTransform(493.1,152.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMgBQALAAAGACQAGACAEAFQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDABgGABIgJgCg");
	this.shape_514.setTransform(479.8,152.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAGAGQAHAGAAAMIAAAbg");
	this.shape_515.setTransform(442,152.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAEADQAFADACAGQACAGAAAKIAAAXg");
	this.shape_516.setTransform(428.1,152.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_517.setTransform(414.5,152.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_518.setTransform(410.2,152.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAGAAACgDQAEgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgFAEgJAAQgHAAgFgEg");
	this.shape_519.setTransform(404.6,152.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAGAGQAHAGAAAMIAAAbg");
	this.shape_520.setTransform(398.8,152.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQAKAAAHACQAGACADAFQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDABgGABIgJgCg");
	this.shape_521.setTransform(378.8,152.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_522.setTransform(365.8,152.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgBALgBQALAAAGACQAGACADAFQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDABgGABIgJgCg");
	this.shape_523.setTransform(360.7,152.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgBAOAAQAKgBAHACQAHACADAGQADAGAAAJIAAAbIgNAAIAAgZQAAgKgDgCQgEgEgLAAIAAAZIgBAKQgBADgDACQgDACgGAAQgGAAgGgCg");
	this.shape_524.setTransform(574,139.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgKIAAgIIAOAAIAAAIIgBAEIgBAFIgCAEQgBADgDABIgEADIAKARIAAAGg");
	this.shape_525.setTransform(562.4,139.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgEgMQgFABgCAFIgEAGIgNAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgBgDgGAAIgEAAIgBgKIAJgBQAJAAAFAFQAFAEAAALIAAALIAFAUg");
	this.shape_526.setTransform(467,126);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgIAAgVQAAgLADgIQADgIAFgEQAFgEAHAAQAGgBAEADQAFADADAEQACAEABAGQACAHAAAJQAAANgCAHQgDAIgFAFQgFAEgIgBQgKABgFgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgQgFgHQgEgFgGAAQgFAAgEAFg");
	this.shape_527.setTransform(434.4,125.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgDAFgGQAFgEACgFIAGAAIAABHg");
	this.shape_528.setTransform(428.5,125);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgGAAIgGABIAAAGQAAAHAGAAIACAAIACAHQgEACgEAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_529.setTransform(484.5,112.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgHAAIgFABIAAAGQAAAHAGAAIACAAIACAHQgEACgEAAQgDAAgEgCQgDgBgCgDQgDgDAAgIIAAgMQAJgDAKAAQAMAAAJAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_530.setTransform(470.7,112.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgIABgTQgBgTAIgKQAGgJALAAQAJABAFAEQAFAFACAIIgJABQgBgFgDgCQgDgEgGAAQgDAAgDACQgEADgCAGQgDAGAAAKQADgEAFgCQAEgDAFAAQAIAAAGAHQAHAFAAALQAAAGgDAGQgEAFgEADQgGADgGABQgKgBgHgHgAgJABQgDAEAAAIQAAAEABAEQACAEAEADQADACADAAQAFgBAEgEQAFgFAAgHQAAgIgFgEQgDgDgHAAQgEAAgFADg");
	this.shape_531.setTransform(439.5,111.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAACgBQADgCABgDIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAEACAFAAQAIAAAFgFQADgFABgNIACgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_532.setTransform(497.6,99.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAaIAAgMIAOAAIAAgSQAAgGgCgCQgCgCgFAAIgFAAIAAgKIAJgBQAJAAAFAFQAFAEgBALIAAAfg");
	this.shape_533.setTransform(492,99.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIAAgJIAOAAIAAAIIgBAEIgBAFIgCAEIgEAEIgEADIAKARIAAAGg");
	this.shape_534.setTransform(475.1,99.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQAAgJgFgDQgFgEgIAAIgPABIgBgLQAHgBALAAQALAAAHADQAGAEADAFQACAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_535.setTransform(461.2,99.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgIAAgVQAAgLAEgIQACgIAFgEQAFgEAHgBQAGABAEACQAFADADAEQACAEABAGQACAHAAAJQAAANgDAHQgCAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgRgFgGQgEgFgGAAQgFAAgEAFg");
	this.shape_536.setTransform(443.6,98.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgIAAgVQAAgLADgIQACgIAFgEQAFgEAHgBQAGABAEACQAEADADAEQADAEACAGQACAHAAAJQAAANgEAHQgCAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGABgSQgBgRgEgGQgEgFgGAAQgFAAgEAFg");
	this.shape_537.setTransform(438,98.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgEABgKIABgIIANAAIgBAGQgBAMgDAEQgDAEgEADIAPAWg");
	this.shape_538.setTransform(505.1,85.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgCgEgEgCQgEgCgHAAIgNABIAAgIIAOgBQAOAAAGAGQAHAGAAAMIAAAbg");
	this.shape_539.setTransform(467.7,85.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_540.setTransform(453.7,85.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_541.setTransform(431.9,85.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAUQgGgIAAgMQAAgLAGgIQAHgHAKAAQAHAAAFACQAFADAEAGQADAHAAAIQAAAIgCAGQgDAGgGAEQgFADgIAAQgKAAgHgHgAgKgNQgDAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgGAAgIQAAgIgEgGQgDgFgHAAQgGAAgEAGg");
	this.shape_542.setTransform(457.8,72.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_543.setTransform(444.8,72.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_544.setTransform(433.2,72.2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIAAgIQALgCALABQAKAAAHACQAGABADAGQAEAFAAAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDADgFAAIgJgCg");
	this.shape_545.setTransform(428.5,72.2);

	this.instance_4 = new lib.fruitsbasket();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,39,0.458,0.458);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#4472C4").s().p("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");
	this.shape_546.setTransform(468.9,157.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgCAMABQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgGAAIgJgCg");
	this.shape_547.setTransform(563.9,231.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDACgGABIgJgCg");
	this.shape_548.setTransform(574.4,218.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_549.setTransform(564.6,205.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgDIADgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAFIAAAJg");
	this.shape_550.setTransform(528.3,206.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQALgBALAAQAKAAAHACQAGABAEAGQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_551.setTransform(511.1,205.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADgBAHIAAAgg");
	this.shape_552.setTransform(628.1,192);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALAAQAKABAHACQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_553.setTransform(610.5,192.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_554.setTransform(601.6,192);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQALABAGACQAGACADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_555.setTransform(578.7,192.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgJIgBgPIAAgFQAAgJAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_556.setTransform(500.6,192.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_557.setTransform(495.5,192);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_558.setTransform(430.8,192);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgCgDQgCgEgFgBQgDgCgGAAIgMABIgBgIIANgBQAOAAAHAFQAHAGAAANIAAAvg");
	this.shape_559.setTransform(619.2,179.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_560.setTransform(586.9,178.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_561.setTransform(578.6,178.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_562.setTransform(554.4,178.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_563.setTransform(502.3,179);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgCALAAQAKAAAHADQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_564.setTransform(453.8,178.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_565.setTransform(448.1,178.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_566.setTransform(626.6,165.8);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAFgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_567.setTransform(589.6,165.7);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_568.setTransform(571.7,165.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_569.setTransform(562,165.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAFgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_570.setTransform(539.2,165.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_571.setTransform(532.9,165.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGAqQAIgEADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_572.setTransform(526.5,166);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIgBgIQAMgBALgBQALAAAGACQAGADAEAEQADAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAQgFABgEgCg");
	this.shape_573.setTransform(495.3,165.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGAqQAIgEADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOACg");
	this.shape_574.setTransform(467.6,166);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_575.setTransform(447.7,165.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_576.setTransform(428.4,164.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAFAAAEgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_577.setTransform(614,152.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_578.setTransform(609.8,152.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGACADAFQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgDQgBgEgEgDQgEgCgIABIgEAAIAAAeIgBAHQgBADgDACQgDABgFABIgJgCg");
	this.shape_579.setTransform(576.1,152.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQADgDAGAAQAGAAAFADQAEADACAGQACAGAAAKIAAAXg");
	this.shape_580.setTransform(565.4,152.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_581.setTransform(541.3,152.6);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_582.setTransform(533.6,152.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQAEgDABgDQACgDAAgFIABgJIAJAAIAAAJIgBAIIgEAGQgDACgFADIALARIAAAGg");
	this.shape_583.setTransform(523.7,152.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCAEgDABg");
	this.shape_584.setTransform(463.3,155.4);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_585.setTransform(430.5,152.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgKIABgIIANAAIgBAIIAAAEIgBAFIgCAEQgBADgDABIgEADIAKARIAAAGg");
	this.shape_586.setTransform(614.8,139.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("rgba(0,0,0,0.8)").s().p("AAHAaIgDgMQgEABgDAFIgEAGIgNAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgCgDgFAAIgEAAIgBgKIAKgBQAJAAAEAFQAEAEAAALIAAALIAGAUg");
	this.shape_587.setTransform(525,126);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAcQgHgHAAgTQAAgUAIgJQAGgIALAAQAIAAAGAEQAFAFACAJIgJAAQgCgFgCgDQgEgDgFAAQgDAAgDACQgEADgCAGQgDAGAAALQADgFAFgDQAEgCAEAAQAJAAAHAGQAFAGABAKQAAAHgEAGQgCAFgGAEQgFACgGAAQgKABgHgJgAgJABQgDAFAAAGQAAAFACAEQABAEADADQAEABADAAQAFABAEgFQAEgFABgHQgBgIgEgEQgDgDgHAAQgEAAgFADg");
	this.shape_588.setTransform(492.4,125.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAGgEAAgIQAAgIgFgEQgEgFgHAAIgFABIAAAGQAAAHAGAAIABAAIADAHQgEACgDAAQgFAAgDgCQgDgBgDgDQgCgDAAgIIAAgMQAJgDAKAAQANAAAIAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_589.setTransform(542.5,112.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQAAgIgFgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_590.setTransform(522.9,112.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAfQgGgGgCgJIAJgBQACAIADADQAFADAEAAQAFAAAFgEQAEgEAAgHQAAgGgEgEQgEgEgGAAIgFABIABgGIACAAQAEAAAFgDQAEgDAAgGQAAgFgDgDQgEgDgEAAQgFAAgDADQgEADAAAGIgJgBQABgJAGgFQAFgFAJAAQAFAAAFADQAFACACAFQADAEAAAFQAAAFgDADQgCAEgFACQAGACAEAEQAEAEAAAHQgBAJgGAHQgHAHgKAAQgJAAgGgGg");
	this.shape_591.setTransform(491.9,111.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAADgBQACgCABgDIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQABAEAFADQADACAGAAQAHAAAEgFQAEgFACgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_592.setTransform(555.6,99.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgMIANAAIAAgSQAAgGgCgCQgDgCgFAAIgDAAIgCgKIALgBQAIAAAFAFQAFAEAAALIAAAfg");
	this.shape_593.setTransform(550,99.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIABgJIANAAIgBAIIAAAEIgBAFIgCAEIgDAEIgGADIALARIAAAGg");
	this.shape_594.setTransform(533.1,99.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQADAFABAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_595.setTransform(519.2,99.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAcQgHgHAAgTQAAgUAIgJQAGgIALgBQAIAAAGAGQAFAEABAIIgJABQgBgFgCgDQgEgDgFAAQgDAAgDACQgEADgCAGQgDAGAAALQADgFAFgDQAFgCADAAQAJAAAHAHQAFAFABAKQgBAHgDAGQgCAGgGADQgFACgGAAQgKABgHgJgAgIABQgEAFgBAGQABAFACAEQABAEADACQAEACADAAQAGABADgFQAEgEABgIQgBgIgEgEQgEgDgGAAQgEAAgEADg");
	this.shape_596.setTransform(507.1,98.2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgIAAgVQAAgLADgIQACgIAFgEQAFgEAHgBQAGABAEACQAEADADAEQADAEACAGQACAHAAAJQAAANgDAHQgDAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGABgSQgBgRgEgGQgEgFgGAAQgFAAgEAFg");
	this.shape_597.setTransform(501.6,98.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgIAAgVQABgLACgIQADgIAFgEQAFgEAHgBQAGABAEACQAFADADAEQACAEABAGQACAHAAAJQAAANgCAHQgDAIgFAFQgFADgIAAQgKABgFgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgRgFgGQgEgFgGAAQgFAAgEAFg");
	this.shape_598.setTransform(496,98.2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgbIANAAIAAAbg");
	this.shape_599.setTransform(574,84.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIAKAAIAOAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAJIgBAIIgDAGQgDACgFADIALARIAAAGg");
	this.shape_600.setTransform(557.7,85.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_601.setTransform(554.3,85.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_602.setTransform(547.9,85.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_603.setTransform(528.5,85.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAEIgBgCIgBgCIABgCQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACAAIACACIAAABIAAACIgCACIgCAAIgBAAg");
	this.shape_604.setTransform(527.3,82.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_605.setTransform(511.9,85.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAFIAAgIIAZAAIAAAIg");
	this.shape_606.setTransform(509,85.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAJIgCgCIAAgCIABgDIACgBIACABIABABIABACIgBACIgBACIgCAAIgBAAgAAEgBIgBgBIAAgCIAAgCIABgCIACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBACIgBABIgDABIgCgBgAgHgBIgCgBIgBgCIACgDIADgBIACABIABADIgBADIgCABIgCgBg");
	this.shape_607.setTransform(494.2,89.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_608.setTransform(489.7,85.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_609.setTransform(474.1,85.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAEIgCgCIAAgCIABgCQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACAAIACACIAAABIAAACIgCACIgCAAIgBAAg");
	this.shape_610.setTransform(472.9,82.3);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAGIAAgGIgIAAIAAgFIATAAIAAAFIgHAAIAAAGg");
	this.shape_611.setTransform(468.4,89.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAFAAAEgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_612.setTransform(464.6,85.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(0,0,0,0.8)").s().p("AgJACIAAgDIATAAIAAADg");
	this.shape_613.setTransform(462.6,88.8);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAaIAAgyIATgBQALAAAGADQAGADADAFQACAFAAAIIAAAbgAgJgNIAAAbIAUAAIAAgOQAAgHgDgDQgDgEgHAAIgHABg");
	this.shape_614.setTransform(563.1,72.2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_615.setTransform(525.5,72.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQABgGgCgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_616.setTransform(508.5,72.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgCAMABQALAAAGACQAGABADAGQADAFABAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgGAAIgJgCg");
	this.shape_617.setTransform(502.7,72.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgCgCgDAAQgFAAgDAGQgFAFgCANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQADAGAAAKIAAAXg");
	this.shape_618.setTransform(487.8,72.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_619.setTransform(483.7,72.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_620.setTransform(481.2,72.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgCAMABQALAAAGACQAGABAEAGQACAFABAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgFAAIgJgCg");
	this.shape_621.setTransform(476.5,72.2);

	this.instance_5 = new lib.DeathNoteAnimejpgcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,35,0.437,0.437);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#4472C4").s().p("AgkWkIgEAAIgjgCIgCgBIg/gGQhBgKg0gLIiBghIgDgCIgggKIithFIgCgBIgBAAIgBgBIgdgOIgCAAIgBgBIAAAAIAAAAIgmgTIiahcIgDgDIhSg6QgwgmgsgpIgRgPIgFgFIg+g/QglgqgmgwQghgsghgzIhTiQIgBgBIgPgfIgCgEIgNgeIgBgBIgBgCIgOggIgNghIAAAAIAAgBIgBgBIgMgfQgVg4gRg8Igeh6QgMg/gHg5IgCgXIAAgCIgBgBIgFhdQgCg5AEg/IAOh1QAIg1ARg/QAQg9ATg0IAjhXIAAgCIABgBIAJgUQAGgMABABQABADgFAKIgkBWIgBAEIgIAUQgUA4gPA5QgOA8gKA3IgNB1QgDA4ABA+IAJB2QAHA4AMA+IAOA7IAAAEIAdBkIA0CMIBMCZIAuBNIBLBqIBFBRIBkBjIADABIA2AuIBmBKIBmA/IA+AhIACABIBFAhICjBAICyAuIAVAEQANADAeAEIAmAGIACAAIADAAIBiAIIADABIDPgHIACAAIBCgJIBngUICMgoIABAAIAfgLIABAAIABgBIABAAICEg2IB2g+IBhg+IAJgGQA0gmAxgqIARgPIh0BbQg0Amg0AeQgxAcg6AcIiRA8IgEABIAAAAIgBAAIgBABIiAAmIg5AMQgZAGghAGIg5AIQg3AHg9ADIheABIgDgBIgggBIgEAAIgggDIgCAAIgCAAIg9gGQg5gIg5gMIh+ghIgDgBIhFgXIiDg3IgCAAIgLgHIg8gcIiGhQIhjhGQgvglgqgnIgqgoIgUgVIgDgCIgCgDIgOgPQgkgnglgxQgeglgjg2IgOgVIhEh6IAAgBIgCgDIgMgZIgBgCIgBgCIgNgdIgBgCIgBgBIgNgeIAAgCIgBgCIgMgdIgBgBIAAgBIAAAAIgMggQgWg8gPg1IgHgWIAAgDIgWhcQgMg5gHg9IgCgWIAAgBIgBgCIAAgEIgEg6IAAgEIgBgYQgBhBADgzIAOhzQAIg2APg6QAQg4ATg3IAihTIAAgCIABgCIAJgUQAGgNABADQABABgFAMIgiBQIgBAEIgJAXQgTA1gPA5QgNA0gKA8IgCAOIgLBkQgDBAACAxIAIByQAHA9AMA3IAtCqIBNC/IAPAeIABADIA+BsIAMASIAxBIIAEAEIABADIBzCFIAsArIACACIAUASICcB5IBIAtIBbAxIACABIA+AeIABABIABAAIAAAAICqBBIBgAcIBYASIAqAIIAnAFIADAAICIAKIA+gBIACAAIBggHIADAAIACAAIBbgOIAFAAICIgfIBEgWIACAAIAcgKIADgBIACgBIAAAAICBg1IBWgrIAFgDIAFgCIAigXIgLAHQgxAdg4AZIiNA7IgEABIgBAAIAAABIhpAfIhMASIg4ALIg4AIQg2AHg7ACIiggDIgCAAIgCAAIg7gHQg+gIgxgLIiggsIgDgBIiehAIgCAAIgBAAIAAgBIgBAAIg9geIgDgCIgDgCIhxhBIhzhQQgvgmgogkIhOhPQgggjgngxQgggqgfgwIgLgRIgCgDIgCgDIhAhyIgBgCIAAgBIgOgcIgBgBIAAgCIgOgcIgBgEIgNgeIgBgCIgBgDIgLgcIgBgCIgBgDIgKgaQgUg0gRg7IgNgxIgBgEIgOg9QgLg5gHg5IgCgVIAAgCIgBgCIAAgDIgEg4IAAgDIgBgZQgBg2AEg6IAMhvQAKg6ANgzQAPg4ATgzIAfhPIACgDIAAgCIAKgVQAFgMABACQACACgFAKIgrBpQgUA5gNAyQgOA2gIA3IgMBtQgEA1ACA6IAGBhIACAOQAHA5ALA2IAWBcIABAEIA3CjIA4B7IACADIABACIAyBZIArBDIAHAIIAVAfIACACIACACICECWIAsApIBnBTICQBcIA9AhIADABIAgAPIDhBXIBfAZICJAXIBfAIIACAAIAFAAIAzABIAFAAIAFAAIAqgBIAUgBIA+gFIADAAICngdIChgwIABAAIB9gzIADgCIAFgCIBRgqIAqgaIgPAJQg1AegxAXIiNA6IgBAAIAAAAIgCABIgbAJIgEABIiDAkIh6AUQg3AIg2ABIiggDIg5gHQgvgGg9gMIg5gNIgDgBIhggdIidhAIgCAAIgBgBIAAAAIg8gdIgDgCIgEgCIiphmIgGgFIgugiQgqghgrgnIhMhNQgjgmgigsQgigsgbgrIgLgQIhCh1IAAgCIgBgBIgNgcIgBgBIgBgBIgNgcIAAgBIgBgDIgBgDIgLgZIgBgBIgBgBIgBgEIgKgZIgBgBIAAAAIgMggQgVg7gOgwIgbhvQgMg6gGg0IgCgVIAAgEIgBgDIgFhSQgBgzAEg5IAMhsQAJg1ANg0QANgyAUg3IAghRIABgBIAJgTQAFgMABACQABABgEALIghBMIgBAEIgBACIgHAUQgTA2gNAyQgOA6gIAvIgLBqQgEA0ACA4IAGBeIACANQAGA1AMA3IAMA3IABAEIA3CsIA/CNIA1BfIBWB7IBtB6IAYAXIACABIASASIB/BjICtBoIA8AcIAEACIACAAIAAAAICFA2ICaArIB7AVIADAAIACAAIA8AGIAUABIAKABICggDIAegDIACAAICAgUICfgrIABgBIAggLIAAAAIB7gyIA4gfIgrAVIiKA5IgBAAIhdAdIilAiIgUADQg1AGg1ACIhWABIgEgBIh5gJQg4gIgwgKIg0gMIgDgCIgEAAIhdgcIgDgCIgZgIIgDgCIgDAAIh3gyIgCgBIhggwIhrhBIhPg6QgrgigngjIghghIgDgBIgUgWIgDgCIgCgCIgNgPQgmgpgdgnQghgrgagpIgLgQIgCgDIg+huIAAgBIgBgCIgBgDIgMgYIgBgBIAAgCIgNgcIgBgBIgBgEIgLgYIgBgEIgCgDIgKgZIAAAAIgBgCIgLgdQgSgygQg2IgOgzIAAgCIgNg4QgLg6gGgxIgCgUIAAgCIgBgEIgEhPQgCg3AEgyIALhoQAKg5AMgtQALgrAVg6IAfhQIABgBIAJgTQAFgLABACQABACgFAKIgfBKIgBADIgIAWQgQAtgPA4QgNAzgIAyIgLBoQgDAzABA0IAIBoQAGAwALA6IAMA1IABADIABADIANAuIAMApIAWA/IABACIAnBfIBKCLIBPB0IB2CGIASARIACACIB3BiIBvBIIBSAtIACAAIAdAPIABAAIAAAAIADACIAXAKIAGADIAAAAIBdAnICaAvIB3AXIAFABIAEABIAYADIADAAIACAAIBXAIIADAAIBbABIACgBIAKAAIAUgBIA6gFIADAAIACgBIBXgMIB+gdIA9gTIABgBIACAAIACgBIAcgKIABAAIABAAIAEgBIBzgvIACgCIAFgCIB8hDIBEguQAxgkAogjIBMhJIACgBIABgDIAhglQAbgeAhgsQAegqAcgvIAmhDIABgCIAAgBIAAAAIACgDIAMgYIAAAAIAOgeIABgBIAAAAIAMgbIAAgBIABgDIAth1IARg6QAShEAJhAIABgJIABgDIAIhXIAAgCIABgCIABg1IgGh9QgJhOgQhEIgriSIgCgEIAAgDIgBgCIgLgdIAAgCIgBAAIAAgCIgthnQgOgegWgnIhTiEQgXgggZgeIgtgzIg+g+IgdgaIgWgTIgEgEIgCgBIgBgBIgXgTIiYhoIgEgCIgCgBIhXguIgBgBIgCgBIgbgOIgCAAIgCgBIilhCQhKgYhBgOIgFgBIgcgFIgCAAIhmgPQhBgHhDAAQg+AAhAAHQg+AHg4ALIhtAbIgBAAIhAATIAAAAIheAiIipBTIgrAbIgIAGIgCABIguAhQgpAfgwAsQguAqgtAzQgoAtgnA5IgvBJIgwBVIAAAAIgCAFQgOAbgBgBQgBgBAGgOIBBiEIBQh2QAkguArguQAvgwA3gtIAZgVIAEgDIASgOICHhVIBVgrIACgBIB8gyIABgBIAhgLIACAAIA9gTICGgdQBlgSBgAAIAaAAICyANQAqAHA8ANIA6APIADAAIBgAfIADACIAZAJIADABIAcALIADABIAEABIA6AaIACABIABAAIAdAOIABABIACAAIBTAtQAxAcAsAdIAfAWIAKAIIAOAKIgOgKIgKgIIghgZIgCgBIhSgzIgCgCIgcgPIgCgCIg4gcIgCgBIgBgBIgegPIgBAAIiehAIgNgEQhIgYhIgPIgRgEIh8gSQhKgIg+ABQhAAAhCAHQg8AHg9AMIiyAvIgBAAIh6AuIiMBGIg/AnIgCADIgtAfQguAjguArQgxAsgtA1QgsAxgmA4IgwBLIg0BdQgOAbAAgBQgBgCAFgOIATgsIBDh4IBAhcQApg0ApgsQAygzA3guIA9guIB+hQIABgBIACAAIACgBIA1gbIACgCIA9gbIADgCIAagLIADgBIAdgLIADgBIADgBICTgvIBygZIAGAAQBkgSBngBIAaAAIC3AOQAuAGA8AOICdAuIADACIAEABIAaAJIADACIBcAmIADABIACACIABAAIB2A8QAjAVAcASIgYgQIgEgEIgcgQIgCgCIgbgOIgCgBIgCgCIhcgvIidhAIgTgFQhLgZhIgQIiRgWQhGgIhGABQhFAAhBAIQg/AGg+ANIioArIhSAdIgDACIhZAkIgDACIgqAVIiCBLIgxAjQgyAmgtAqIhhBkQgvA2glA3Ig2BSIgxBaQgOAbgBgBQAAgCAFgNIAzhrIAlg+IBChfQArg3AqgrQAxgzA7gxIA/gwICChTIABAAIBZgtIADgBIAdgMIACgCIAhgNIACgCIBaggIAGgCIACgBIA+gTICUghQBngRBpgCIB5AEIBfALQAxAHA8ANIA9AQIADABIBAATIBjAlIADABIBBAdIACABIA6AdIg2geIgDgBIgCgCIhdgnIhCgZIgFgCIgOgEQhJgYhOgRIiWgYQhEgGhMAAQhJABhBAGQg6AHhGANIi6AxIgBABIghALIgBABIgjANIgDABIhZAlIibBTIhOA2IgDADIgtAkIgZAVIgZAXQgcAZgXAYIgNAOIgkAoQgsAxgrA/IhnCtIgDAFQgOAbAAgBQgBgBAFgPIAHgPIABgCIAAgBIABgDIBSiYIBEhiQArg3AsguQA3g5A5gtIADgEIBPg7IB1hIIABAAIABgBIBAghIBcgpIADgBIACgBIAdgLIACgBIBogjIACAAICygqQBygTBlgBIAOAAICJAHIBGAJQA5AIA3AMICmAxIADACIAEABIBAAZIADABIh2gwQhWgbhGgOIg6gLIgTgEIhMgKQhOgHhGAAQhFABhJAHQhCAIhCANIh8AeIhCAUIgBAAIgCABIgDABIhAAXIgDABIgDABIhbAmIiABDIiOBjIgDADIhEA6QgcAagYAZIgyA3QgvA2gqA9IhHBwIgkBEIgBAAIgBADQgOAbgBgBIAFgOIAHgRIAAgBIABgBIABgEIBDiBIBXh/QArg4AvgxQA5g6A6gwIA6gtICShcIACgBIBCgjICkhDIADgCIAEgBIBFgWIADAAIAlgLIDFgoICmgMIBjACICBAOQBBAKAyALIBAARIBpAhIAEACIADABIAgALIADABIBjArIACAAIAfAPIABABIACABIBeAxQA2AfAwAgICEBlIA5AyQAqApAqAvIBMBdQAkAwAgAzQAeAwAcA3IALATIBXDSIAoCMIAdCsQAGA2ACA1IgGCfIgLBTIgBAFIgEAZIgBADIgXBnIgfBiIgBADIg1CDIgCADIgBACIgNAcIgBACIgBABIAAACIgPAcIgBACIgBACIgYAtQgmBDgsA8QgmA2gsAyIhtBuIgVASIgDAEIhfBJQg1Ang2AeQgwAcg+AeIiYA+IgBAAIgBABIgBAAIhCAUIgDACIh4AeIg7AMIg7AIQg1AHhCADgAPDP9IhwBaIggAVIAegTQAygjAwgrIASgPIAKgKIgIAHIgCADIgCABgAN4PZIgBABIhQA/QgwAhgvAcIgPAIIAmgUIBGgvQAzglApgkIARgPIADgDgAMZRQIgLAIIALgIIAEgCgAMdROIAegTQAvgjAngiIhUBBIggAXgAP6P+IgCABIAKgJgAOmPkIACgBIAFgGgAOGuUIgegbIgPgNgANVu/IgkgdgAN9vPIgigdgAOswLIADACIAkAhIgggdIgEgEIgugnIgHgEgAOTvuIADACIAEADIgEgDIgIgHgAMcxKIByBXIgSgQIgCgBIgygnIgEgEIgEgDIgkgYIgMgIIgqgbIA2AjgAMKwoIAPAKIgPgKIgPgKIgggVIAvAfgANHxaIghgYQgkgYgkgVIBpBFgAJkziIABACIACAAIBbAwIAcARIgVgPIhhg0IgCgBIhigpg");
	this.shape_622.setTransform(526.9,157.4);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIAAgIQALgBALAAQAKAAAHACQAGABADAGQAEAFAAAKIAAAbIgJAAIAAgZQAAgHgCgEQgBgDgEgCQgEgCgIgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_623.setTransform(524.4,221);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQALgBALAAQAKAAAHACQAGABADAGQAEAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_624.setTransform(467.3,221);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_625.setTransform(429.5,221);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIACgIQABgDACgDIADgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAFIAAAJg");
	this.shape_626.setTransform(407.2,222);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_627.setTransform(391.4,220.9);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgDIADgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAGIAAAJg");
	this.shape_628.setTransform(498.6,208.8);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAABAQIAAgHIAAgIQABgDAEgDIADgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAEAAAGIAAAJg");
	this.shape_629.setTransform(473.8,208.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALAAQALABAGACQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_630.setTransform(456.6,207.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_631.setTransform(424.3,207.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAGIAAAJg");
	this.shape_632.setTransform(395.2,208.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAFgEQADgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_633.setTransform(538.7,181.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgDgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAIAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_634.setTransform(505.6,181.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAFIAAgIIAaAAIAAAIg");
	this.shape_635.setTransform(410.7,181.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIAEAMQABgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_636.setTransform(387.3,181.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAIAAIAAAwgAAAAQIAAgHIABgJQACgCADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEAEAAAFIAAAJg");
	this.shape_637.setTransform(571.8,169.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGACADAFQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgDQgBgEgEgDQgEgCgIABIgEAAIAAAeIgBAHQgBADgDACQgDABgFABIgJgCg");
	this.shape_638.setTransform(560,168.4);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQAMgBALgBQALAAAGACQAGACAEAFQADAGAAAKIAAAbIgJAAIAAgaQgBgGgBgDQgBgEgEgDQgEgCgIABIgEAAIAAAeIgBAHQgBADgDACQgDABgFABIgJgCg");
	this.shape_639.setTransform(514.7,168.4);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEAEAAAFIAAAJg");
	this.shape_640.setTransform(509.1,169.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMgBQALAAAGACQAGACAEAFQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDABgGABIgIgCg");
	this.shape_641.setTransform(494.6,168.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGApQAIgDADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOADg");
	this.shape_642.setTransform(581.7,155.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_643.setTransform(569.8,154.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABgBABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgBALAAQAKgBAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_644.setTransform(564.1,155.2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQgBgGgBgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAFAGQAHAGAAAMIAAAbg");
	this.shape_645.setTransform(538.7,155.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgGAAgCAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_646.setTransform(524.4,155.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABgBABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALAAQAKgBAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_647.setTransform(518.1,155.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIACgJIgIgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQACAGABAKIAAAXg");
	this.shape_648.setTransform(512,155.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQAAgCADgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAHIAAAIg");
	this.shape_649.setTransform(506.5,156.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_650.setTransform(501,155.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABgBABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMAAQALgBAGACQAGADADAEQADAGABAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_651.setTransform(495,155.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFAAAGIAAAJg");
	this.shape_652.setTransform(479,154.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_653.setTransform(474.2,155.2);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAFIAAgJQAHgEAFgEQAFgFACgFIAGAAIAABHg");
	this.shape_654.setTransform(455.1,154.2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAeQgHgKAAgUQAAgMAEgHQACgIAFgEQAFgFAHAAQAGAAAEADQAFACADAEQACAFABAHQACAFAAAKQAAANgDAIQgCAHgFAFQgFADgIAAQgJAAgHgGgAgJgXQgEAHgBAQQABASAEAFQAEAGAFABQAGgBAEgGQAFgFgBgSQABgQgFgGQgEgGgGAAQgFAAgEAFg");
	this.shape_655.setTransform(449.9,154.3);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_656.setTransform(420.4,155.2);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_657.setTransform(405.1,156.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(0,0,0,0.8)").s().p("AgJACIAAgDIATAAIAAADg");
	this.shape_658.setTransform(403.2,158.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAJIgCgCIAAgCIABgDIACgBIACABIACABIAAACIAAACIgCACIgCAAIgBAAgAgBgBIgCgBIAAgCIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACAAIACACIAAACIAAACIgCABIgCABIgBgBg");
	this.shape_659.setTransform(396.8,159);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQAEgDABgDQACgCAAgGIABgJIAJAAIAAAJIgBAIIgEAGQgDACgFADIALARIAAAGg");
	this.shape_660.setTransform(393.8,155.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgDANg");
	this.shape_661.setTransform(390.7,151.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_662.setTransform(387,155.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgCAOABQAKAAAHABQAHACADAGQADAFAAAKIAAAbIgNAAIAAgZQAAgJgDgEQgEgDgLAAIAAAZIgBAKQgBACgDADQgDACgGAAQgGAAgGgCg");
	this.shape_663.setTransform(580.9,142.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgJIABgHIAEgGIACgCQACgEAAgEIAAgHIgfAAIAAgMIAtAAIAAANIgBAMIgCAFIgDAEIgCAEIgBAFIAAAIg");
	this.shape_664.setTransform(575,143.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIAAgJIAOAAIAAAIIgBAEIgBAFIgCAEQgBADgCABIgGADIALARIAAAGg");
	this.shape_665.setTransform(569.3,142.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_666.setTransform(565.6,140.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFABIAEgBIABgFIAAgYIgKABIgBgLQAMgCAOAAQAKABAHACQAHACADAFQADAFAAAKIAAAbIgNAAIAAgaQAAgIgDgEQgEgCgLAAIAAAZIgBAJQgBACgDACQgDACgGAAQgGAAgGgCg");
	this.shape_667.setTransform(505.2,128.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgDABgLIABgIIANAAIgBAGQgBAMgDAEQgDAEgEADIAPAWg");
	this.shape_668.setTransform(499.4,128.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgDABgLIABgIIANAAIgBAGQgBAMgDAEQgDAEgEADIAPAWg");
	this.shape_669.setTransform(464.7,128.6);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgMQAAgLAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAAMgIAHQgHAIgMAAQgLAAgHgHgAgJgKQgDAFAAAFQAAAIAEADQADAFAFAAQAGAAADgFQAEgDAAgIQAAgGgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_670.setTransform(506.2,115.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAGgEAAgIQAAgIgFgEQgEgFgHAAIgFABIAAAGQAAAHAGAAIABAAIADAHQgDACgEAAQgEAAgEgCQgDgBgDgDQgCgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_671.setTransform(486.6,115.2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgJAAgSQAAgUAIgJQAGgJALAAQAIABAGAFQAFAEABAIIgJABQgBgFgCgCQgEgEgFAAQgDAAgDACQgEADgCAGQgDAGAAAKQADgEAFgDQAFgCADAAQAJAAAHAHQAFAFABALQgBAGgDAGQgCAFgGADQgFADgGAAQgKAAgHgHgAgIABQgEAEgBAIQABAEACAEQABAEADACQAEADADAAQAGAAADgFQAEgFABgHQgBgHgEgFQgEgDgGAAQgEAAgEADg");
	this.shape_672.setTransform(455.4,114.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgFAIgFQAKgKAEgFQAEgFAAgFQAAgGgDgDQgEgEgGABQgFgBgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_673.setTransform(444.2,114.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQABAEAFADQADACAGAAQAHAAAEgFQAFgFABgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_674.setTransform(510.7,101.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgJIAAgJIAOAAIgBAIIAAAEIgBAFIgCAFIgDADIgGAEIALAQIAAAGg");
	this.shape_675.setTransform(488.2,101.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQAAgJgEgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQAEAFAAAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_676.setTransform(474.3,101.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("rgba(0,0,0,0.8)").s().p("AgOAgQgGgEgBgJIAJgBQABAGACADQAEADAEgBQAEAAACgBQADgCADgEQACgDABgEIABgMIAAgBQgDAEgEADQgFACgEAAQgJAAgGgGQgGgFAAgLQAAgLAGgGQAGgIAKABQAGAAAGADQAFAEAEAHQACAHABANQgBANgCAIQgDAIgGAFQgGAEgHAAQgJgBgEgEgAgJgYQgFAGABAHQgBAHAFAEQAEAEAFgBQAGABAEgEQAEgEAAgHQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_677.setTransform(456.7,100.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAgQgFgEgBgJIAIgBQABAGAEADQACADAGgBQACAAADgBQAEgCACgEQABgDABgEIACgMIAAgBQgDAEgEADQgFACgEAAQgJAAgGgGQgGgFgBgLQABgLAGgGQAGgIAKABQAGAAAGADQAGAEACAHQADAHAAANQAAANgDAIQgCAIgGAFQgGAEgHAAQgJgBgFgEgAgJgYQgEAGgBAHQABAHAEAEQAEAEAFgBQAGABAEgEQAEgEAAgHQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_678.setTransform(451.1,100.8);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAFAEAEAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgFAEgJAAQgHAAgFgEg");
	this.shape_679.setTransform(486.9,88.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgEIAEgEIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEAEAAAGIAAAIg");
	this.shape_680.setTransform(481.3,89.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgCAAgHIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_681.setTransform(475.7,88.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_682.setTransform(448.6,88.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQABAEAFADQADACAGAAQAHAAAEgFQAFgFABgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_683.setTransform(510.7,74.9);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgHAAgMQAAgMAIgIQAHgHALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAALgIAJQgHAHgMAAQgLAAgHgHgAgJgKQgDAFAAAFQAAAIAEAEQADAEAFAAQAGAAADgEQAEgEAAgIQAAgGgEgFQgDgEgGAAQgFAAgEAFg");
	this.shape_684.setTransform(495.1,74.8);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIAAgZQAAgIgEgDQgEgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_685.setTransform(483.8,74.8);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQAAgJgEgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQAEAFAAAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_686.setTransform(478.3,74.8);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQABgDAEgDIACgEIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAGIAAAIg");
	this.shape_687.setTransform(459.1,75.8);

	this.instance_6 = new lib.Pokemon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,39,0.232,0.232);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#4472C4").s().p("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");
	this.shape_688.setTransform(474.9,157.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_689.setTransform(623.6,221.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQAMgBALAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDACgGABIgJgCg");
	this.shape_690.setTransform(575.8,221.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_691.setTransform(500.3,220.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_692.setTransform(495.2,221.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_693.setTransform(629.4,206.9);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQADAEAFAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAJAAQAGAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgFAEgJAAQgHAAgFgEg");
	this.shape_694.setTransform(593.5,207.9);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_695.setTransform(629.4,193.8);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQAAgJgDgDQgCgEgEgBQgEgCgGAAIgNABIAAgIIAOgBQAOAAAGAFQAHAGAAANIAAAvg");
	this.shape_696.setTransform(615.5,195.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgEAFgBAGIAAAJg");
	this.shape_697.setTransform(584.7,193.8);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAEgEQAEgDAGAAQAGAAAEADQAFADABAGQACAGAAAKIAAAXg");
	this.shape_698.setTransform(568.8,194.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgCALAAQAKABAHACQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgCQgEgDgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_699.setTransform(555.5,194.8);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_700.setTransform(550.1,193.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_701.setTransform(519.3,193.5);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_702.setTransform(482.4,193.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_703.setTransform(476.4,193.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQAEgDABgDQACgDAAgFIABgJIAJAAIAAAKIgBAHIgEAGQgDACgFADIALASIAAAFg");
	this.shape_704.setTransform(472.5,194.8);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_705.setTransform(467.2,193.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_706.setTransform(446.9,193.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_707.setTransform(547.4,180.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADAAAHIAAAgg");
	this.shape_708.setTransform(508.3,181.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_709.setTransform(495.8,180.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_710.setTransform(572.1,168.5);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQALgBALgBQAKAAAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAHQgBADgDACQgDABgFAAQgFABgEgCg");
	this.shape_711.setTransform(477.6,168.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQABADABAHIAAAgg");
	this.shape_712.setTransform(450.4,168.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQADgDACgDQACgDAAgFIABgJIAJAAIAAAJIgCAIIgDAGQgDACgFADIALARIAAAGg");
	this.shape_713.setTransform(411.1,168.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgDANg");
	this.shape_714.setTransform(408,165.2);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADAAAHIAAAgg");
	this.shape_715.setTransform(597.3,155.3);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQAAgJgCgDQgDgEgEgBQgEgCgGAAIgNABIAAgIIAOgBQANAAAHAFQAHAGAAANIAAAvg");
	this.shape_716.setTransform(565.8,156.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgIIgBgRIAAgEQAAgJAGgFIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAEAAAIIAAAEIACARIAAAHg");
	this.shape_717.setTransform(544.8,155.3);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_718.setTransform(540.8,155.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgBgEQgBgDgFgCQgDgCgHAAIgIAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgDAAQgHAAgDgDQgEgDAAgHIAAgUQAIgCAKAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_719.setTransform(500.1,156.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMgBQALAAAGACQAGACAEAFQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgDQgBgEgEgDQgDgBgJgBIgEAAIAAAfIgBAHQgBADgDACQgDABgGAAIgJgBg");
	this.shape_720.setTransform(475.3,155.3);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_721.setTransform(442.9,154.3);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_722.setTransform(629.4,141.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_723.setTransform(608.6,142.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCAEgDABg");
	this.shape_724.setTransform(593.1,145);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgIIgBgRIAAgFQAAgHAGgGIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAEAAAIIAAAEIACARIAAAHg");
	this.shape_725.setTransform(576.3,142.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_726.setTransform(555.3,142.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAIAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_727.setTransform(549.7,142.1);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_728.setTransform(543.1,140.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAEIAAgIIAaAAIAAAIg");
	this.shape_729.setTransform(540.2,142.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQAKAAAHACQAGADADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_730.setTransform(535.1,142.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgDADQgFAFAAAGIAAAJg");
	this.shape_731.setTransform(527.2,141.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_732.setTransform(516.3,142.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_733.setTransform(500.2,141.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_734.setTransform(489.8,140.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgDADQgDAFAAAGIAAAJg");
	this.shape_735.setTransform(477.3,141.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_736.setTransform(472.8,142.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("rgba(0,0,0,0.8)").s().p("AAFAaIAAgrIgbAAIAAgIIAtAAIAAAIIgIAAIAAArg");
	this.shape_737.setTransform(467.9,142.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_738.setTransform(446.3,142.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("rgba(0,0,0,0.8)").s().p("AgDAkIAAgmIgRghIAKAAIAMAaQAEgDABgCIACgHIACgOIAKAAIgCAPQgBANgNAGIAAAlg");
	this.shape_739.setTransform(435.9,143.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAJIAEgEIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCAEgDABg");
	this.shape_740.setTransform(432.3,145);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgDABgCQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_741.setTransform(629.1,129);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_742.setTransform(625,127.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgIIgBgRIAAgFQAAgHAGgGIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_743.setTransform(622,129);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_744.setTransform(610.3,127.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_745.setTransform(598.1,127.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_746.setTransform(592.1,127.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIALAAIANAXQADgCACgDQACgDAAgGIAAgJIAKAAIgBAJIgBAIIgDAGQgCACgGADIALARIAAAGg");
	this.shape_747.setTransform(588.2,129);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgCANg");
	this.shape_748.setTransform(585.1,125.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_749.setTransform(582.9,127.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_750.setTransform(569.7,129.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_751.setTransform(520.7,127.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_752.setTransform(513.8,129.3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_753.setTransform(499.6,129);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_754.setTransform(487.8,127.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_755.setTransform(472.5,129.1);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAZIABgIIAKABQAFAAADgCQAEgCACgFQACgEAAgFQAAgHgEgFQgFgGgHAAQgFAAgFACIgBgIIAKgCQAMAAAIAIQAHAHAAALQAAAHgDAGQgDAGgGAEQgGAEgJAAIgKgCg");
	this.shape_756.setTransform(466.7,129);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_757.setTransform(455.4,129);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_758.setTransform(446.1,129.1);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_759.setTransform(430.1,129);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQABgDAEgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_760.setTransform(408,130);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_761.setTransform(403.9,127.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFACIAEgCIABgFIAAgYIgKABIgBgLQAMgCAOABQAKAAAHACQAHACADAFQADAGAAAJIAAAbIgNAAIAAgZQAAgJgDgEQgEgDgLAAIAAAaIgBAJQgBADgDABQgDADgGAAQgGAAgGgDg");
	this.shape_762.setTransform(628.2,115.9);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFABIAEgBIABgFIAAgYIgKABIgBgLQAMgCAOAAQAKAAAHADQAHABADAGQADAFAAAKIAAAbIgNAAIAAgaQAAgIgDgDQgEgDgLAAIAAAYIgBAKQgBACgDACQgDACgGAAQgGAAgGgCg");
	this.shape_763.setTransform(544,102.4);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("rgba(0,0,0,0.8)").s().p("AAHAaIgDgMQgEABgDAFIgDAGIgOAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgCgDgFAAIgEAAIgBgKIAKgBQAJAAAEAFQAEAEAAALIAAALIAGAUg");
	this.shape_764.setTransform(516.1,102.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgbIANAAIAAAbg");
	this.shape_765.setTransform(512.5,101.3);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgbIANAAIAAAbg");
	this.shape_766.setTransform(499,101.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgEAFgFQAFgEACgFIAGAAIAABHg");
	this.shape_767.setTransform(477.6,101.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgHAAgMQAAgMAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAALgIAJQgHAHgMAAQgLAAgHgHgAgJgKQgDAEAAAGQAAAIAEADQADAFAFAAQAGAAADgFQAEgDAAgIQAAgGgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_768.setTransform(539.4,89);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAGgEgBgIQAAgIgDgEQgFgFgHAAIgFABIAAAGQAAAHAGAAIABAAIADAHQgEACgDAAQgEAAgEgCQgDgBgDgDQgCgDAAgIIAAgMQAJgDAKAAQAMAAAJAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_769.setTransform(533.6,89);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAFgEABgIQAAgIgFgEQgEgFgGAAIgGABIAAAGQAAAHAGAAIABAAIADAHQgDACgEAAQgFAAgDgCQgDgBgDgDQgCgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_770.setTransform(519.8,89);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIAAgZQABgIgEgDQgFgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_771.setTransform(514,88.9);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgJIABgHIAEgGIACgCQACgEAAgFIAAgGIgfAAIAAgMIAtAAIAAANIgBAMIgCAFIgDAEIgCAEIgBAFIAAAIg");
	this.shape_772.setTransform(508.7,90);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_773.setTransform(504.4,87.8);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAaIAAgyQAJgBAKAAQALAAAGADQAGADADAFQACAFAAAIIAAAbgAgJgNIAAAbIAUAAIAAgOQAAgHgDgDQgDgEgHAAIgHABg");
	this.shape_774.setTransform(500,88.9);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgFAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_775.setTransform(482.9,88);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQABAEAFADQADACAGAAQAHAAAEgFQAEgFACgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_776.setTransform(546.7,75.6);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgbIANAAIAAAbg");
	this.shape_777.setTransform(528.3,74.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgKIAAgIIAOAAIgBAIIAAAFIgBAEIgCAFIgDADIgGAEIALAQIAAAGg");
	this.shape_778.setTransform(524.2,75.5);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAOIAAgbIANAAIAAAbg");
	this.shape_779.setTransform(520.5,74.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgDABgLIABgIIANAAIgBAGQgBAMgDAEQgDAEgEADIAPAWg");
	this.shape_780.setTransform(516.4,75.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("rgba(0,0,0,0.8)").s().p("AAGAkIAAgRIgeAAIAAgIIAgguIAHAAIAAAuIAKAAIAAAIIgKAAIAAARgAgPALIAVAAIAAggg");
	this.shape_781.setTransform(498.1,74.5);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgJAAgUQAAgLADgIQADgIAFgEQAFgFAHABQAGgBAEADQAEACAEAFQACAEABAHQACAGAAAJQAAANgDAHQgCAJgFADQgFAFgIAAQgKAAgFgIgAgJgXQgEAGgBARQABASAEAFQAEAHAFgBQAGABAEgHQAFgFgBgSQABgQgFgHQgEgFgGAAQgFAAgEAFg");
	this.shape_782.setTransform(487.1,74.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgCABgLIABgIIANAAIgBAHQgBALgDAEQgDAEgEADIAPAWg");
	this.shape_783.setTransform(551.6,62.1);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_784.setTransform(523.4,60.8);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAWQgGgEgDgIQgDgJAAgMIgBgPIAKAAIAAAJIABARQAFAAAEgCQAEgCAAgIIABgOIAJAAIgBARIgBAGIgDAEIgFAEQgEACgIAAQACAFAEAEQAEADAHAAQAFAAAEgDQAFgDACgEQACgFAAgHIACgXIAKAAIgCAUQgBAJgDAIQgCAHgHAEQgGAFgKAAQgJAAgGgFg");
	this.shape_785.setTransform(510.4,62.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_786.setTransform(505.7,60.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_787.setTransform(494.4,60.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_788.setTransform(489.5,62.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_789.setTransform(485.6,62.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAABAQIAAgHIAAgJQABgCADgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAHIAAAIg");
	this.shape_790.setTransform(480,63.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgaIAJAAIAAAag");
	this.shape_791.setTransform(475.9,60.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAACgBIAEgFIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAEACAFAAQAIAAAFgFQAEgFAAgNIACgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_792.setTransform(542.5,48.7);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgLQAAgMAIgIQAHgHALAAQAIAAAGAEQAGADADAGQAEAGAAAHQAAALgIAJQgHAHgMAAQgLAAgHgHgAgJgKQgDAFAAAFQAAAHAEAFQADAEAFAAQAGAAADgEQAEgFAAgHQAAgGgEgFQgDgEgGAAQgFAAgEAFg");
	this.shape_793.setTransform(526.9,48.6);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQABgJgFgDQgFgEgIAAIgPABIgBgLQAHgBALAAQALAAAHADQAGAEADAFQACAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_794.setTransform(510.1,48.6);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQADAEAFAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgFAEgJAAQgHAAgFgEg");
	this.shape_795.setTransform(498.6,48.6);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("rgba(0,0,0,0.8)").s().p("AgVAXIACgIQAFADAHAAQAIAAAGgEQAGgFAAgJQAAgIgFgFQgFgFgHAAIgIABIAAAJQAAAGAGAAIAEAAIABAFQgDACgDAAQgHAAgDgEQgEgCAAgHIAAgPQAJgDAJAAQAKAAAIAHQAHAGAAANQAAAMgHAHQgIAIgNAAQgKAAgFgEg");
	this.shape_796.setTransform(492.9,48.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_797.setTransform(488.9,47.4);

	this.instance_7 = new lib.parasite();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,38,0.802,0.802);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#4472C4").s().p("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");
	this.shape_798.setTransform(521.9,157.4);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGABAKIAAAXg");
	this.shape_799.setTransform(531.3,222.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAYAAIgbgrIAKAAIAOAXQAEgDABgDQACgDAAgFIABgJIAJAAIAAAJIgBAIIgEAGQgDACgFADIALARIAAAGg");
	this.shape_800.setTransform(510,222.4);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQAEgDABgDQACgDAAgFIABgJIAJAAIAAAJIgBAIIgEAGQgCACgGADIALARIAAAGg");
	this.shape_801.setTransform(475.7,222.4);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGACADAFQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDABgFABIgJgCg");
	this.shape_802.setTransform(452,222.4);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_803.setTransform(594.2,209.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAgBABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMAAQALgBAGACQAGADAEAEQACAGAAAKIAAAbIgIAAIAAgZQgBgHgBgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_804.setTransform(585.4,209.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgCgEQAAgDgEgCQgFgCgGAAIgIAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgDAAQgHAAgDgDQgEgDAAgHIAAgUQAJgCAJAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_805.setTransform(574.1,210.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQACAGABAKIAAAXg");
	this.shape_806.setTransform(539.9,209.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCAEgDABg");
	this.shape_807.setTransform(514.2,212);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_808.setTransform(498.9,209.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_809.setTransform(451.6,209.2);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIADgJIgIgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_810.setTransform(442.7,209.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgCALABQAKAAAHABQAGADADAFQAEAFAAAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_811.setTransform(555.9,196.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMABQAKAAAHABQAGADADAFQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_812.setTransform(544,196.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMABQALAAAGABQAGADAEAFQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_813.setTransform(531.5,196.1);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIgBgIQAMgCALABQALAAAGABQAGADAEAFQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_814.setTransform(508.8,196.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQACgCADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_815.setTransform(493.8,197.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAOIgBAOIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_816.setTransform(479.3,196.3);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFABAGIAAAJg");
	this.shape_817.setTransform(461.9,195.1);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgDABgCQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_818.setTransform(408.7,196.1);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgDABgCQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_819.setTransform(403,196.1);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgDABgCQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_820.setTransform(392.5,196.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgFAAgEAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAFAMQACgFAEgEQAFgDAFAAQAGAAAFADQADADACAGQACAGABAKIAAAXg");
	this.shape_821.setTransform(386.4,196);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_822.setTransform(380.6,196);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgCAMABQAKAAAHABQAGACADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAHQgBADgDABQgDADgGAAIgJgCg");
	this.shape_823.setTransform(589,182.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgCAMABQAKAAAHABQAGACADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAHQgBADgDABQgDADgGAAIgJgCg");
	this.shape_824.setTransform(527.8,182.9);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQALgCAMABQALAAAGABQAGACAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAHQgBADgDABQgDADgGAAIgJgCg");
	this.shape_825.setTransform(495.6,182.9);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIgBgIQAMgCALABQAKAAAHABQAGACAEAGQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgCQgEgCgIAAIgEAAIAAAeIgBAHQgBADgDABQgDADgFAAIgJgCg");
	this.shape_826.setTransform(456.6,182.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_827.setTransform(429.6,182.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQALgCALABQAKAAAHABQAGACADAGQAEAFAAAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgCQgEgCgIAAIgEAAIAAAeIgBAHQgBADgDABQgDADgFAAIgJgCg");
	this.shape_828.setTransform(412,182.9);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_829.setTransform(404.1,181.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_830.setTransform(543.6,168.8);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQAKgBAMAAQAKAAAHACQAGABAEAGQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_831.setTransform(529.1,169.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGAAAKIAAAXg");
	this.shape_832.setTransform(404.8,169.7);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("rgba(0,0,0,0.8)").s().p("AgHAaIAAgIIgBgQIAAgGQAAgHAGgGIgNAAIAAgIIAfAAIAAAHQgIAAgEAEQgEAFAAAGIAAAFIACARIAAAHg");
	this.shape_833.setTransform(397.7,169.8);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQADgCAAgDIABgEIAAgHIgcAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgEAHIgCADQgFAFAAAGIAAAJg");
	this.shape_834.setTransform(594.9,155.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAYAAIgbgrIAKAAIAOAXQAEgDABgCQACgDAAgGIABgJIAJAAIAAAKIgBAHIgEAGQgDACgFADIALASIAAAFg");
	this.shape_835.setTransform(513.1,156.6);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFABAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_836.setTransform(483.3,156.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFAAAGIAAAJg");
	this.shape_837.setTransform(469.1,155.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQADAFgBAKIAAAbIgIAAIAAgZQgBgHgBgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_838.setTransform(432.4,156.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_839.setTransform(402.1,156.6);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_840.setTransform(364.7,156.6);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgBgDQgDgEgFgBQgDgCgGAAIgMABIgBgIIANgBQAOAAAHAFQAHAGAAANIAAAvg");
	this.shape_841.setTransform(588.9,144.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIALAAIANAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_842.setTransform(576.5,143.5);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_843.setTransform(521.7,143.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIALAAIANAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_844.setTransform(516.2,143.5);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_845.setTransform(498.4,143.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_846.setTransform(495.3,142.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_847.setTransform(444.1,143.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_848.setTransform(438.4,143.5);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_849.setTransform(431.8,142.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgCABgCQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_850.setTransform(427.9,143.5);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_851.setTransform(594.6,130.3);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQAEgCABgEQACgDAAgFIABgJIAJAAIAAAJIgBAIIgEAGQgDACgFADIALASIAAAFg");
	this.shape_852.setTransform(589.1,130.3);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgDANg");
	this.shape_853.setTransform(586,127);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_854.setTransform(580.4,130.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgDgMQgFAAgEAHIgDAFIgKAAIAFgIQADgHAFgCQAEgCADAAIAAgNIAAgGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIgGAAIAAgHIAIgBQAFAAAEACQADADACAEIABAKIAAAPIAFARg");
	this.shape_855.setTransform(533.1,130.3);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgIAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_856.setTransform(518.4,130.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_857.setTransform(489.8,130.3);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_858.setTransform(484.2,130.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_859.setTransform(473.6,130.3);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_860.setTransform(450.1,130.3);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_861.setTransform(416.8,130.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_862.setTransform(408.6,130.3);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAYQADgDABgCQACgCAAgGIABgLIAKAAIgBALQgBAHgCAEQgCAEgGADIAPAWg");
	this.shape_863.setTransform(394.1,130.3);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_864.setTransform(385.8,130.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQAKAAAHADQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_865.setTransform(373.9,130.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFAAIAEAAIABgGIAAgYIgKABIgBgLQAMgBAOgBQAKAAAHACQAHADADAFQADAGAAAJIAAAbIgNAAIAAgaQAAgJgDgCQgEgDgLgBIAAAZIgBAKQgBADgDACQgDABgGAAQgGAAgGgBg");
	this.shape_866.setTransform(593.7,117.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgKIABgGIAEgGIACgCQACgDAAgGIAAgGIgfAAIAAgMIAtAAIAAAOIgBAKIgCAHIgDADIgCAEIgBAEIAAAJg");
	this.shape_867.setTransform(587.8,118.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgKIAAgIIAOAAIAAAIIgBAFIgBAEIgCAFIgEADIgFAEIALAQIAAAGg");
	this.shape_868.setTransform(582.1,117.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFACIAEgCIABgFIAAgYIgKABIgBgLQAMgCAOABQAKAAAHACQAHACADAFQADAGAAAJIAAAbIgNAAIAAgZQAAgJgDgEQgEgCgLAAIAAAZIgBAJQgBADgDABQgDADgGAAQgGAAgGgDg");
	this.shape_869.setTransform(506.2,103.7);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgCABgKIABgJIANAAIgBAHQgBAKgDAFQgDAEgEADIAPAWg");
	this.shape_870.setTransform(500.3,103.7);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("rgba(0,0,0,0.8)").s().p("AAHAaIgDgMQgEABgDAFIgDAGIgOAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgCgDgFAAIgEAAIgBgKIAJgBQAKAAAEAFQAEAEAAALIAAALIAGAUg");
	this.shape_871.setTransform(478.3,103.7);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBALIgBALIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgCABgKIABgJIANAAIgBAHQgBAKgDAFQgDAEgEADIAPAWg");
	this.shape_872.setTransform(465.7,103.7);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_873.setTransform(461.2,102.6);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAcQgHgHABgTQgBgUAIgJQAGgJALAAQAIAAAGAGQAFAEACAIIgJABQgBgFgDgDQgEgDgFAAQgDAAgDACQgEADgCAGQgDAGAAAKQADgEAFgDQAEgCAEAAQAJAAAGAHQAHAFAAALQAAAGgEAGQgDAGgEADQgGACgGAAQgKABgHgJgAgJABQgDAEAAAIQAAAEACAEQABAEADACQAEACADAAQAFABAEgFQAFgEAAgIQAAgHgFgFQgDgDgHAAQgFAAgEADg");
	this.shape_874.setTransform(445.7,102.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgMQAAgLAIgIQAHgHALAAQAIAAAGAEQAGADADAGQAEAGAAAHQAAAMgIAHQgHAIgMAAQgLAAgHgHgAgJgKQgDAEAAAGQAAAHAEAFQADAEAFAAQAGAAADgEQAEgFAAgHQAAgGgEgFQgDgEgGAAQgFAAgEAFg");
	this.shape_875.setTransform(504.4,90.3);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAFgFQAFgEABgIQgBgIgEgEQgEgFgGAAIgGABIAAAGQAAAHAGAAIABAAIADAHQgEACgEAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAKgDAJAAQANAAAHAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_876.setTransform(498.5,90.3);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgKIABgGIAEgGIACgCQACgDAAgGIAAgGIgfAAIAAgMIAtAAIAAAOIgBAKIgCAHIgDADIgCAEIgBAEIAAAJg");
	this.shape_877.setTransform(473.7,91.3);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIABAIIAAADQADAAACgBIAEgFIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_878.setTransform(511.7,76.9);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_879.setTransform(493.3,75.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIABgJIANAAIgBAIIAAAEIgBAFIgCAEQgBADgDABIgEADIAKARIAAAGg");
	this.shape_880.setTransform(489.2,76.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_881.setTransform(485.4,75.7);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgZQgDADgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgCIgMgSIAQAAIAOAVQADgCABgKIABgJIANAAIgBAHQgBAKgDAFQgDAEgEADIAPAWg");
	this.shape_882.setTransform(481.3,76.8);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_883.setTransform(463.1,75.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAeQgGgKgBgUQAAgMAEgHQACgIAFgEQAFgEAHgBQAGABAEACQAFACADAEQACAFABAGQACAHABAJQgBANgDAIQgCAIgFAEQgFADgIAAQgJAAgHgGgAgJgXQgFAGAAARQAAASAFAGQAEAFAFABQAGgBAEgFQAFgGAAgSQAAgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_884.setTransform(457.6,75.9);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAeQgGgKAAgUQAAgMADgHQACgIAFgEQAFgEAHgBQAGABAEACQAEACADAEQADAFACAGQACAHAAAJQAAANgDAIQgDAIgFAEQgFADgIAAQgJAAgHgGgAgJgXQgFAGABARQgBASAFAGQAEAFAFABQAGgBAEgFQAEgGABgSQgBgRgEgFQgEgGgGAAQgFAAgEAFg");
	this.shape_885.setTransform(452.1,75.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_886.setTransform(446.4,75.8);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_887.setTransform(484.4,62.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_888.setTransform(481.9,62.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQACgDADgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAGIAAAJg");
	this.shape_889.setTransform(478.1,64.4);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_890.setTransform(468.7,62.1);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_891.setTransform(456.9,62.1);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIIARgBQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_892.setTransform(447.6,63.3);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBQADgCABgDIABgJIAAgKIAMAAIAAANIgBAIIgDAFIgFAEQgFACgGABQAAAEAFADQADACAGAAQAHAAAFgFQADgFACgNIABgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_893.setTransform(521.3,50);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgLQAAgMAIgHQAHgIALAAQAIAAAGADQAGAEADAGQAEAGAAAHQAAAMgIAHQgHAIgMAAQgLAAgHgHgAgJgKQgDAFAAAFQAAAIAEADQADAFAFAAQAGAAADgFQAEgDAAgIQAAgGgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_894.setTransform(505.7,49.9);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQADAFAAAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_895.setTransform(488.9,49.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIACgJQABgCACgEIADgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_896.setTransform(469.3,50.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgDgDQgBgCgEAAQgFAAgDAGQgFAFgCANIgDATIgKAAIAEgUIACgJIgIgWIAJAAIAFAMQABgFAGgEQAEgDAFAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_897.setTransform(455.6,49.9);

	this.instance_8 = new lib.tokyomewmew();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,38,0.635,0.635);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#4472C4").s().p("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");
	this.shape_898.setTransform(486.9,157.5);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("rgba(0,0,0,0.8)").s().p("AAGAvQgHgJgFgMQgFgNAAgNQAAgLAEgKQAEgMAJgNIAGAAIgIAOIgEAPQgCAJAAAIQAAAYAOAXg");
	this.shape_899.setTransform(555.9,199.2);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQACgDADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_900.setTransform(537,200.2);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAvQAOgXAAgYQAAgIgCgJQgBgIgDgGIgIgPIAHAAQAIANAEAMQAEAKAAALQAAANgFANQgFAMgGAJg");
	this.shape_901.setTransform(516.9,199.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_902.setTransform(486.8,199.2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("rgba(0,0,0,0.8)").s().p("AAOAaIAAgZQAAgHgCgEQgCgDgEgCQgFgCgHAAIgPABIgBgIQAJgBAIAAQAPAAAHAGQAGAGAAAMIAAAbgAgVAaIAAgcIAJAAIAAAcg");
	this.shape_903.setTransform(478,199.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgEIADgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_904.setTransform(452.7,200.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIAAgIQALgCALABQAKAAAHABQAGACADAGQAEAFAAAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgCQgEgCgIAAIgEAAIAAAeIgBAHQgBADgDABQgDADgFAAIgJgCg");
	this.shape_905.setTransform(579.3,186.1);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("rgba(0,0,0,0.8)").s().p("AANAkIAAgvQAAgFgCgEQgBgDgDgCQgFgCgGAAIgIAAIAAAOQAAAGAGAAIAEAAIABAGQgDABgDAAQgHAAgDgDQgEgDAAgHIAAgUQAIgCAKAAQALAAAHAFQAHAFAAANIAAAwg");
	this.shape_906.setTransform(523.2,187);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgBgDQgDgEgFgBQgDgCgGAAIgMABIgBgIIANgBQAPAAAGAFQAHAGAAANIAAAvg");
	this.shape_907.setTransform(454.9,187);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAZAAIgcgrIALAAIANAXQADgCACgDQACgEAAgFIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_908.setTransform(558.9,172.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_909.setTransform(532.3,172.9);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgBABgDQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_910.setTransform(503.5,172.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQABgDACgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAGIAAAIg");
	this.shape_911.setTransform(497.9,173.9);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgMAJgEIgMgRIAMAAIAPAXQADgBABgDQACgDAAgFIABgLIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_912.setTransform(483.5,172.9);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgJgWIAJAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQAEADABAGQACAGAAAKIAAAXg");
	this.shape_913.setTransform(431.8,172.9);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQALgBAMAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgEQgBgDgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDACgGABIgJgCg");
	this.shape_914.setTransform(425.4,172.9);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAYAAIgbgrIAKAAIAOAXQAEgCABgDQACgEAAgFIABgJIAJAAIAAAKIgBAHIgEAGQgDACgFADIALASIAAAFg");
	this.shape_915.setTransform(388,172.9);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgKIABgGIAEgGIACgCQACgDAAgFIAAgHIgfAAIAAgMIAtAAIAAANIgBALIgCAGIgDAEIgCAEIgBAEIAAAJg");
	this.shape_916.setTransform(588.7,160.8);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgJIAAgJIAOAAIAAAIIgBAEIgBAFIgCAFIgEADIgFAEIALAQIAAAGg");
	this.shape_917.setTransform(583,159.8);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgBAOgBQAKAAAHACQAHACADAGQADAGAAAJIAAAbIgNAAIAAgaQAAgJgDgCQgEgEgLAAIAAAZIgBAKQgBADgDACQgDABgGAAQgGAAgGgBg");
	this.shape_918.setTransform(518.4,146.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAWQADgEABgKIABgIIANAAIgBAHQgBALgDAEQgDAEgEADIAPAWg");
	this.shape_919.setTransform(477.9,146.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("rgba(0,0,0,0.8)").s().p("AgGAPIAAgcIANAAIAAAcg");
	this.shape_920.setTransform(473.4,145.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAeQgIgJAAgVQAAgMADgHQADgIAFgEQAFgFAHAAQAGAAAEADQAEACAEAEQACAFABAHQACAFAAAKQAAANgDAIQgCAHgFAEQgFAEgIABQgKgBgFgGgAgJgXQgEAHgBAQQABASAEAFQAEAHAFAAQAGAAAEgHQAFgFgBgSQABgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_921.setTransform(457.9,145.4);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgGAAIgGABIAAAGQAAAHAGAAIACAAIACAHQgDACgFAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAJgDAKAAQAMAAAJAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_922.setTransform(497,132.9);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgKIABgGIAEgGIACgCQACgEAAgEIAAgHIgfAAIAAgMIAtAAIAAANIgBALIgCAGIgDAEIgCAEIgBAFIAAAIg");
	this.shape_923.setTransform(485.9,133.9);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgKIABgIIANAAIAAAIIgBAFIgBAEIgCAFIgEADIgEAEIAKAQIAAAGg");
	this.shape_924.setTransform(498.6,119.4);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("rgba(0,0,0,0.8)").s().p("AgOAgQgGgFgBgIIAIgBQABAGAEADQADACAEABQAEAAACgCQADgCADgEQABgCABgGIACgLIAAgBQgDAEgEADQgFACgEAAQgJAAgGgGQgGgFgBgLQABgLAGgHQAHgGAJAAQAGAAAGADQAGAEADAHQACAHAAANQAAANgCAIQgDAIgGAEQgGAFgHAAQgJAAgEgFgAgJgXQgEAEgBAIQABAHAEAEQAEADAFAAQAGAAAEgDQAEgEAAgIQAAgHgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_925.setTransform(472.6,118.5);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAgQgFgFgBgIIAIgBQACAGADADQACACAGABQACAAAEgCQADgCABgEQACgCABgGQACgFAAgGIAAgBQgCAEgFADQgFACgEAAQgJAAgGgGQgHgFAAgLQAAgLAHgHQAHgGAJAAQAGAAAGADQAFAEADAHQADAHABANQgBANgDAIQgCAIgGAEQgGAFgHAAQgIAAgGgFgAgJgXQgFAEAAAIQAAAHAFAEQAEADAFAAQAGAAAEgDQAEgEAAgIQAAgHgEgEQgEgFgGAAQgEAAgFAFg");
	this.shape_926.setTransform(467.1,118.5);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("rgba(0,0,0,0.8)").s().p("AgOAgQgGgFgBgIIAJgBQABAGACADQADACAFABQADAAAEgCQACgCACgEQADgCABgGIABgLIAAgBQgDAEgEADQgFACgEAAQgJAAgGgGQgHgFABgLQgBgLAHgHQAGgGAKAAQAGAAAGADQAGAEADAHQADAHAAANQAAANgDAIQgDAIgGAEQgGAFgHAAQgJAAgEgFgAgJgXQgFAEABAIQgBAHAFAEQAEADAFAAQAGAAAEgDQAEgEAAgIQAAgHgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_927.setTransform(461.5,118.5);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQACgDADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAHIAAAIg");
	this.shape_928.setTransform(478.1,107);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQACAEAEADQADACAGAAQAHAAAEgFQAFgFABgNIABgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_929.setTransform(520.3,92.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAFAEQAEAEAEAAQAFAAAEgDQADgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_930.setTransform(459.6,92.5);

	this.instance_9 = new lib.naruto();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,39,0.21,0.218);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#4472C4").s().p("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");
	this.shape_931.setTransform(486.9,157.5);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgBAMgBQALAAAGACQAGADAEAEQACAGAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_932.setTransform(547.4,224.5);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIACgJQABgCADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAHIAAAIg");
	this.shape_933.setTransform(512.9,225.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAYAAIgbgrIAKAAIAOAXQAEgDABgDQACgCAAgGIABgJIAJAAIAAAJIgBAIIgEAGQgDACgFADIALARIAAAGg");
	this.shape_934.setTransform(479.8,224.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgBALgBQAKAAAHACQAGADADAEQAEAGAAAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_935.setTransform(463.6,224.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_936.setTransform(400.8,224.5);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAHIAAAIg");
	this.shape_937.setTransform(586.1,212.4);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQABgCAEgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAHIAAAIg");
	this.shape_938.setTransform(565.7,212.4);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIADAMQACgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQACAGAAAKIAAAXg");
	this.shape_939.setTransform(548.8,211.3);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgCAMABQALAAAGABQAGADAEAFQACAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_940.setTransform(513.6,211.4);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMABQAKAAAHABQAGADADAFQADAFABAKIAAAbIgJAAIAAgZQAAgHgCgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_941.setTransform(464.9,211.4);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("rgba(0,0,0,0.8)").s().p("AAFANIgCgNIAAgMIAKAAIAAAMIgCANgAgKANIgCgNIAAgMIAKAAIAAAMIgCANg");
	this.shape_942.setTransform(419.6,208.1);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("rgba(0,0,0,0.8)").s().p("AAFANIgCgNIAAgMIAKAAIAAAMIgCANgAgKANIgCgNIAAgMIAKAAIAAAMIgCANg");
	this.shape_943.setTransform(372.7,208.1);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("rgba(0,0,0,0.8)").s().p("AgbADIAAgGIA3AAIAAAGg");
	this.shape_944.setTransform(586,198.2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQAMgCALABQALAAAGACQAGABADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgGAAIgJgCg");
	this.shape_945.setTransform(506.1,198.2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQAMgCALABQALAAAGACQAGABADAGQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgGAAIgJgCg");
	this.shape_946.setTransform(483.6,198.2);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIACgIQABgDACgEIADgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAGIAAAIg");
	this.shape_947.setTransform(422,186.1);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgIQAAgDADgEIAEgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAGIAAAIg");
	this.shape_948.setTransform(401.6,186.1);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBgBgEIAAgdIgKABIAAgIQAKgBAMAAQAKAAAHACQAGABAEAGQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIgBIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_949.setTransform(554.3,171.9);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAkIAAgHIABgKIAEgGIACgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgEAFAAAGIAAAJg");
	this.shape_950.setTransform(401.6,170.9);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBAAgEIAAgdIgLABIgBgIQAMgBALAAQALAAAGACQAGABAEAGQACAFAAAKIAAAbIgJAAIAAgZQAAgHgBgEQgBgDgEgCQgDgCgJgBIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_951.setTransform(381.4,171.9);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQgBgJgCgDQgCgEgEgBQgEgCgGAAIgMABIgBgIIANgBQAPAAAGAFQAHAGAAANIAAAvg");
	this.shape_952.setTransform(542.1,159.7);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALAAQAKAAAHADQAGACADAEQADAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgGAAIgJgBg");
	this.shape_953.setTransform(547.5,145.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgGAAIgIgBg");
	this.shape_954.setTransform(523,145.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQAAgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgFAAIgJgBg");
	this.shape_955.setTransform(503.1,145.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQALAAAGADQAGACADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgGAAIgJgBg");
	this.shape_956.setTransform(467.6,145.6);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgIAAgTQAAgTAHgKQAHgJAKABQAIAAAGAEQAFAFACAJIgJAAQgCgFgCgCQgDgEgFAAQgEAAgDACQgEADgDAGQgCAGAAALQADgFAFgCQAFgDAEAAQAIAAAGAGQAHAGgBAKQAAAHgCAGQgDAFgFADQgGAEgGAAQgKgBgHgHgAgJABQgDAFgBAGQAAAFACAEQACAEAEADQADABADAAQAGAAAEgEQADgFAAgHQAAgHgDgFQgFgDgFAAQgFAAgFADg");
	this.shape_957.setTransform(459,144.7);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgGgJAAgUQAAgLADgIQACgIAFgEQAFgFAHABQAGAAAEACQAEADADAEQADAEACAHQACAFAAAKQAAANgEAHQgCAJgFADQgFAFgIAAQgJAAgHgIgAgJgXQgFAGABARQgBASAFAFQAEAHAFgBQAGABAEgHQAEgFABgSQgBgQgEgHQgEgFgGAAQgFAAgEAFg");
	this.shape_958.setTransform(447.9,144.7);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgHQAKgJAEgEQAEgGAAgFQAAgGgDgDQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAEIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_959.setTransform(442.3,144.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAABAQIAAgHIABgJQABgCACgDIADgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAGIAAAJg");
	this.shape_960.setTransform(407.3,146.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgBAGgGAEQgGAEgIAAQgGAAgGgEg");
	this.shape_961.setTransform(383.1,145.6);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAkIAAguIAOAAIAAAugAAAAQIAAgKIABgGIAEgGIACgCQACgDAAgGIAAgGIgfAAIAAgMIAtAAIAAAOIgBALIgCAGIgDADIgCAEIgBAEIAAAJg");
	this.shape_962.setTransform(579.2,133.5);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgKIABgIIANAAIgBAIIAAAFIgBAEIgCAFQgBACgDABIgEAEIAKAQIAAAGg");
	this.shape_963.setTransform(573.5,132.5);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAYIACgJIAFACIAEgCIABgFIAAgYIgKABIgBgLQAMgCAOABQAKAAAHABQAHADADAFQADAGAAAJIAAAbIgNAAIAAgZQAAgJgDgEQgEgDgLAAIAAAaIgBAJQgBADgDABQgDADgGAAQgGAAgGgDg");
	this.shape_964.setTransform(509.2,119);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("rgba(0,0,0,0.8)").s().p("AAIAaIgEgMQgFABgCAFIgDAGIgOAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgBgDgGAAIgEAAIgBgKIAJgBQAKAAAEAFQAFAEgBALIAAALIAGAUg");
	this.shape_965.setTransform(481.3,119);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgFAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_966.setTransform(448.6,118);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("rgba(0,0,0,0.8)").s().p("AAEAkIAAg3IgHAGIgJAFIAAgJQAHgDAFgFQAFgFACgFIAGAAIAABHg");
	this.shape_967.setTransform(442.8,118);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAUQgIgIAAgMQAAgLAIgIQAHgHALAAQAIAAAGAEQAGADADAGQAEAGAAAHQAAAMgIAHQgHAIgMAAQgLAAgHgHgAgJgKQgDAEAAAGQAAAHAEAFQADAEAFAAQAGAAADgEQAEgFAAgHQAAgGgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_968.setTransform(504.6,105.6);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIACgJQAIADAHAAQAHAAAFgFQAGgEAAgIQgBgIgDgEQgFgFgHAAIgFABIAAAGQAAAHAGAAIABAAIADAHQgEACgDAAQgEAAgEgCQgDgBgDgDQgCgDAAgIIAAgMQAJgDAKAAQAMAAAJAHQAIAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_969.setTransform(485,105.6);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgFQAEgEAIgHQAKgJAEgEQAEgGAAgFQAAgGgDgDQgEgDgGgBQgFABgEADQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAEIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_970.setTransform(448.1,104.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBIADgFIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQABAEADADQAEACAFAAQAIAAAFgFQADgFABgNIACgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_971.setTransform(511.9,92.2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("rgba(0,0,0,0.8)").s().p("AgNAaIAAgMIAOAAIAAgSQAAgGgCgCQgCgCgGAAIgEAAIAAgKIAJgBQAJAAAFAFQAEAEAAALIAAAfg");
	this.shape_972.setTransform(506.3,92.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("rgba(0,0,0,0.8)").s().p("AgcAZIACgJIAFABIAEgBIABgGIAAgYIgKABIgBgLQAMgCAOABQAKAAAHABQAHACADAGQADAFAAAKIAAAbIgNAAIAAgZQAAgJgDgEQgEgDgLAAIAAAaIgBAJQgBACgDADQgDACgGAAQgGAAgGgCg");
	this.shape_973.setTransform(500.8,92.1);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAUIADgCIABgJIAAgJIAOAAIAAAIIgBAEIgBAFIgCAEQgBADgDABIgFADIALARIAAAGg");
	this.shape_974.setTransform(489.4,92.1);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQABgJgFgDQgFgEgIAAIgPABIgBgLQAHgBALAAQALAAAHADQAGAEADAFQADAFgBAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_975.setTransform(475.5,92.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgFAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_976.setTransform(463.3,91.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAeQgGgKgBgUQABgMADgHQACgIAFgEQAFgEAHgBQAGABAEACQAFACACAEQADAFABAGQADAHAAAJQAAANgEAIQgCAIgFAEQgFADgIAAQgJAAgHgGgAgJgXQgFAGAAARQAAASAFAGQAEAFAFABQAGgBAEgFQAFgGAAgSQAAgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_977.setTransform(452.3,91.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("rgba(0,0,0,0.8)").s().p("AgXAkIABgGQACgFAEgEQAEgFAIgGQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAFAAAJQAAAFgBAEIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_978.setTransform(446.7,91.1);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_979.setTransform(489.9,77.4);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_980.setTransform(487.4,77.4);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAIAAIAAAwgAAAAQIAAgHIABgIQACgDADgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAEAAAGIAAAJg");
	this.shape_981.setTransform(483.6,79.7);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("rgba(0,0,0,0.8)").s().p("AgEANIAAgaIAJAAIAAAag");
	this.shape_982.setTransform(479.5,77.4);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAABAQIAAgHIAAgIQABgDADgDIAEgFIACgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAEAAAGIAAAJg");
	this.shape_983.setTransform(472.8,79.7);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_984.setTransform(463.1,78.7);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_985.setTransform(460.6,78.7);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgZQAAgGgBgEQgCgEgEgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_986.setTransform(450.6,78.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQACAEAEADQAEACAFAAQAHAAAEgFQAFgFABgNIABgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgGAFgKAAQgOAAgIgJg");
	this.shape_987.setTransform(518.5,65.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgsIAKAAIAGApQAIgDADgGQACgFAAgJIAAgSIAKAAIgBANIgBAOIgCAIQgCAFgEAEQgEADgIADQgHADgOADg");
	this.shape_988.setTransform(474.5,65.5);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_989.setTransform(470.9,65.2);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAaIAAgzIAJAAIAAAzg");
	this.shape_990.setTransform(449,65.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFABAAAIIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAYQADgCABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_991.setTransform(445,65.2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAkIAAgmIgQghIAKAAIAMAaQAEgDABgCIADgHIABgOIAKAAIgCAPQgBANgNAGIAAAlg");
	this.shape_992.setTransform(439.7,66.2);

	this.instance_10 = new lib.accelworld();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,39,0.198,0.198);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#4472C4").s().p("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");
	this.shape_993.setTransform(483.9,157.4);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgCAMABQALAAAGABQAGADAEAFQACAFAAAKIAAAbIgJAAIAAgZQABgHgCgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_994.setTransform(524,211.4);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAOIgBAOIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_995.setTransform(459.7,211.6);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgCALABQAKAAAHABQAGADADAFQAEAFAAAKIAAAbIgJAAIAAgZQgBgHgBgDQgBgEgEgDQgEgBgIAAIgEAAIAAAeIgBAHQgBADgDACQgDACgFAAIgJgCg");
	this.shape_996.setTransform(453.8,211.4);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("rgba(0,0,0,0.8)").s().p("AALAkIAAgsQAAgJgBgDQgDgEgFgBQgDgCgGAAIgMABIgBgIIAOgBQANAAAHAFQAHAGAAANIAAAvg");
	this.shape_997.setTransform(525.5,199.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAaAAIgcgrIALAAIANAXQADgCACgDQACgDAAgGIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_998.setTransform(492.4,198.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQALgCAMABQALAAAGACQAGABAEAGQADAFgBAKIAAAbIgIAAIAAgZQgBgHgBgDQgBgEgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDADgFAAIgJgCg");
	this.shape_999.setTransform(466.2,198.2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("rgba(0,0,0,0.8)").s().p("AgSAaIAAgIIAZAAIgbgrIAKAAIAOAXQADgCACgDQACgDAAgGIABgJIAJAAIAAAKIgCAHIgDAGQgDACgFADIALASIAAAFg");
	this.shape_1000.setTransform(452.5,198.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("rgba(0,0,0,0.8)").s().p("AgUAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQACgDADgEIACgDIADgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCADQgEAFAAAGIAAAIg");
	this.shape_1001.setTransform(415.6,199.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("rgba(0,0,0,0.8)").s().p("AANAaIgTgbQgFACAAAHIgCASIgKAAIACgSQABgLAJgFIgMgRIAMAAIAPAXQADgBABgDQACgDAAgGIABgKIAKAAIgBALQgBAHgCAEQgCADgGAEIAPAWg");
	this.shape_1002.setTransform(346.3,198.2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAkIAAgsQgBgJgBgDQgDgEgFgBQgDgCgGAAIgNABIAAgIIAOgBQANAAAHAFQAHAGAAANIAAAvg");
	this.shape_1003.setTransform(495.2,186);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_1004.setTransform(474.1,185.3);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGAqQAIgDADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOADg");
	this.shape_1005.setTransform(419.3,185.3);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBABgEIAAgdIgLABIAAgIQAKgBAMAAQALAAAGACQAGABADAGQADAFABAKIAAAbIgJAAIAAgZQAAgHgCgEQgBgDgEgCQgDgCgJAAIgEAAIAAAeIgBAIQgBACgDABQgDACgGABIgJgCg");
	this.shape_1006.setTransform(401.4,185.1);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_1007.setTransform(373.9,159);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_1008.setTransform(359.3,159);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("rgba(0,0,0,0.8)").s().p("AgWAUQAJgBAGgCIgJgtIAKAAIAGArQAIgEADgGQACgFAAgKIAAgSIAKAAIgBAPIgBANIgCAIQgCAFgEADQgEAEgIADQgHADgOACg");
	this.shape_1009.setTransform(346.6,159);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIAEAMQABgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQABAGABAKIAAAXg");
	this.shape_1010.setTransform(336.4,158.7);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgCAMAAQAKABAHACQAGACADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgCQgDgDgJAAIgEAAIAAAfIgBAIQgBACgDABQgDACgGAAIgJgBg");
	this.shape_1011.setTransform(327.6,158.8);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgGAAIgJgBg");
	this.shape_1012.setTransform(524,145.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQALgCALAAQAKAAAHADQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDACQgDABgFAAIgJgBg");
	this.shape_1013.setTransform(475.9,145.6);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgJQACgCADgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgEAHIgCAEQgEADAAAGIAAAJg");
	this.shape_1014.setTransform(450.6,146.6);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALAAAGADQAGACAEAEQADAGgBAKIAAAbIgIAAIAAgaQgBgGgBgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAIQgBACgDACQgDABgFAAIgJgBg");
	this.shape_1015.setTransform(439.2,145.6);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_1016.setTransform(418.9,145.6);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("rgba(0,0,0,0.8)").s().p("AgLAaIAAgIIAOAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQABADAAAHIAAAgg");
	this.shape_1017.setTransform(402.3,145.6);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIAAgIQALgCALAAQAKAAAHADQAGACADAEQAEAGAAAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgEgCgIAAIgEAAIAAAfIgBAIQgBACgDACQgDABgFAAIgJgBg");
	this.shape_1018.setTransform(394.8,145.6);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAGAAADgDQADgDABgEIABgKIAAgGQAAgMgGAAQgGAAgCAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgGAAgGgEg");
	this.shape_1019.setTransform(386.2,145.6);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAaIAAgMIAWAAIgZgnIAPAAIAMAVIADgDIABgKIABgIIANAAIgBAIIAAAFIgBAEIgCAFIgEADIgEAEIAKAQIAAAGg");
	this.shape_1020.setTransform(517.6,132.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("rgba(0,0,0,0.8)").s().p("AAHAaIgDgMQgFABgCAFIgDAGIgOAAIADgGQAGgOANgBIAAgJQAAgFgCgCQgCgDgFAAIgEAAIgBgKIAJgBQAKAAAEAFQAFAEgBALIAAALIAGAUg");
	this.shape_1021.setTransform(428.1,119);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAdQgHgJAAgSQAAgTAIgKQAGgJALABQAIAAAGAEQAFAFACAJIgJAAQgCgFgCgCQgEgEgFAAQgDAAgDACQgEADgCAGQgDAGAAALQADgFAFgCQAEgDAEAAQAJAAAGAGQAGAGABAKQAAAHgEAGQgCAFgGADQgFAEgGAAQgKgBgHgHgAgIABQgEAFAAAGQAAAFACAEQABAEADADQAEABADAAQAFAAAEgEQAFgFAAgHQAAgHgFgFQgDgDgHAAQgEAAgEADg");
	this.shape_1022.setTransform(400.6,104.6);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIAAgSIANAAIAAAOIAAAIIAAADQAEAAADgBIADgFIABgJIAAgKIANAAIgBANIgBAIIgDAFIgFAEQgEACgIABQACAEADADQAFACAEAAQAIAAAEgFQAFgFABgNIABgTIAOAAIgCAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_1023.setTransform(458.7,92.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgMIANAAIAAgSQAAgGgCgCQgDgCgFAAIgDAAIgBgKIAKgBQAIAAAFAFQAEAEAAALIAAAfg");
	this.shape_1024.setTransform(453.1,92.1);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQABgJgFgDQgFgEgIAAIgPABIgCgLQAIgBALAAQALAAAHADQAGAEADAFQADAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_1025.setTransform(422.3,92.1);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("rgba(0,0,0,0.8)").s().p("AgQAcQgHgIABgSQgBgUAIgJQAGgJALAAQAJAAAFAGQAFAEACAIIgJABQgBgFgDgDQgDgDgGAAQgDAAgDACQgEADgCAGQgDAGAAAKQADgEAFgDQAEgCAFAAQAIAAAGAHQAHAFAAALQAAAGgDAGQgEAGgEACQgGADgGAAQgKAAgHgIgAgJABQgDAEAAAIQAAAEABAEQACAEAEACQADACADABQAFAAAEgFQAFgFAAgHQAAgHgFgFQgDgDgHAAQgEAAgFADg");
	this.shape_1026.setTransform(410.2,91.2);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAeQgIgKAAgUQAAgMADgHQADgIAFgEQAFgEAHgBQAGABAEACQAFACADAEQACAFABAGQACAHAAAJQAAANgCAIQgDAIgFAEQgFADgIAAQgKAAgFgGgAgJgXQgEAGgBARQABASAEAGQAEAFAFABQAGgBAEgFQAFgGgBgSQABgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_1027.setTransform(404.7,91.2);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIAAgYQAAgJgEgDQgFgEgIAAIgQABIgBgLQAJgBAKAAQALAAAGADQAHAEACAFQADAFABAIIAAAagAgXAaIAAgaIAOAAIAAAag");
	this.shape_1028.setTransform(441.8,65.2);

	this.instance_11 = new lib.orenhighhostclub();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,39,0.31,0.31);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#4472C4").s().p("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");
	this.shape_1029.setTransform(425.9,157.5);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgdIgKABIgBgIQAMgBALAAQALAAAGACQAGABAEAGQADAFAAAKIAAAbIgJAAIAAgZQgBgHgBgEQgBgDgEgCQgEgCgIAAIgEAAIAAAeIgBAIQgBACgDABQgDACgFABIgJgCg");
	this.shape_1030.setTransform(588.9,233.7);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIAAgLQgBgEgCgDQgDgCgDAAQgGAAgCAGQgEAFgDANIgDATIgKAAIAEgUIACgJIgHgWIAJAAIAEAMQABgFAGgEQADgDAGAAQAGAAAEADQAEADADAGQACAGgBAKIAAAXg");
	this.shape_1031.setTransform(552.9,233.6);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIAAgGQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBgEAAIgFAAIgBgHIAIgBQAGAAADACQAEADABAEQACADgBAHIAAAgg");
	this.shape_1032.setTransform(542,233.6);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQABgDAEgEIADgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAFAAAGIAAAIg");
	this.shape_1033.setTransform(480.1,234.7);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAFAEAEAAQAFAAADgDQAEgDABgEIABgKIAAgGQAAgMgHAAQgFAAgCAFIgDgEQAEgJAJAAQAGAAAEAFQADAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_1034.setTransform(567.5,220.5);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAEIAAgHIAaAAIAAAHg");
	this.shape_1035.setTransform(467.6,220.5);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("rgba(0,0,0,0.8)").s().p("AgRAaIAAgIIAZAAIgcgrIALAAIANAXQADgDACgDQACgDAAgFIAAgJIAKAAIgBAKIgBAHIgDAGQgCACgGADIALASIAAAFg");
	this.shape_1036.setTransform(562.6,207.4);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgCgBgDIAAgdIgKABIAAgIQAKgCAMAAQAKABAHACQAGACAEAEQADAGAAAKIAAAbIgJAAIAAgaQgBgGgBgEQgBgDgEgCQgEgDgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_1037.setTransform(552,207.4);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgCANg");
	this.shape_1038.setTransform(542.5,204.1);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAaIAAgIIAPAAIAAgYIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFAAIgBgHIAIgBQAGAAAEACQADADABAEQACADgBAHIAAAgg");
	this.shape_1039.setTransform(533.6,207.3);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAAAAQIAAgHIABgIQABgDAEgDIACgFIADgEIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDADQgEAEAAAGIAAAJg");
	this.shape_1040.setTransform(498.2,208.4);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgCAMAAQALABAGACQAGACAEAEQACAGABAKIAAAbIgKAAIAAgaQAAgGgBgEQgBgDgEgCQgEgDgIAAIgEAAIAAAfIgBAIQgBACgDABQgDACgFAAIgJgBg");
	this.shape_1041.setTransform(480.1,207.4);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("rgba(0,0,0,0.8)").s().p("AgCANIgCgNIAAgMIAJAAIAAAMIgCANg");
	this.shape_1042.setTransform(476.2,204.1);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("rgba(0,0,0,0.8)").s().p("AgEAIIAEgDIAAgGIgEAAIAAgKIAJAAIAAAKQAAAFgCADQgCADgDACg");
	this.shape_1043.setTransform(473.8,210.2);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("rgba(0,0,0,0.8)").s().p("AgMAXQgGgDgCgGQgCgGAAgJIAAgYIAJAAIAAAaQAAALAEAEQAEAEAFAAQAGAAACgDQAEgDABgEIABgKIAAgGQAAgMgGAAQgFAAgDAFIgDgEQAEgJAIAAQAHAAADAFQAEAGAAAKIAAAEQAAAJgCAFQgCAGgFAEQgGAEgIAAQgHAAgFgEg");
	this.shape_1044.setTransform(555.8,194.2);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQALAAAGACQAGADADAEQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgEQgBgDgEgDQgDgCgJAAIgEAAIAAAfIgBAHQgBADgDACQgDABgGAAIgJgBg");
	this.shape_1045.setTransform(502.7,181.1);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgDIAAgdIgLABIAAgIQAKgBAMgBQAKAAAHACQAGACADAFQADAGABAKIAAAbIgJAAIAAgaQAAgGgCgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_1046.setTransform(575.6,167.9);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("rgba(0,0,0,0.8)").s().p("AgaAZIABgHIAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgCAAgDIAAgdIgKABIgBgIQALgBAMgBQALAAAGACQAGACAEAFQACAGAAAKIAAAbIgJAAIAAgaQABgGgCgDQgBgEgEgDQgDgCgJABIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgIgCg");
	this.shape_1047.setTransform(429.4,167.9);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_1048.setTransform(571.8,154.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgDgDQgCgCgDAAQgGAAgDAGQgEAFgCANIgEATIgJAAIAEgUIADgJIgIgWIAIAAIAEAMQADgFAEgEQAEgDAGAAQAGAAAFADQADADACAGQACAGAAAKIAAAXg");
	this.shape_1049.setTransform(542.9,154.7);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("rgba(0,0,0,0.8)").s().p("AgbAZIACgHIAFABQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAAgdIgLABIgBgIQAMgCALABQALAAAGABQAGADADAFQADAFAAAKIAAAbIgJAAIAAgZQAAgHgBgDQgBgEgEgDQgDgBgJAAIgEAAIAAAeIgBAHQgBADgDACQgDACgGAAIgJgCg");
	this.shape_1050.setTransform(583.9,141.6);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_1051.setTransform(497.8,140.6);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("rgba(0,0,0,0.8)").s().p("AAAAkIAAgHIAAgKIADgGIADgEQACgCABgDIAAgEIAAgHIgbAAIAAgcIAJAAIAAAUIAcAAIAAANIgBAIIgDAHIgEADQgDAFAAAGIAAAJg");
	this.shape_1052.setTransform(456.7,140.6);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("rgba(0,0,0,0.8)").s().p("AgTAkIAAgwIAJAAIAAAwgAABAQIAAgHIAAgJQABgCAEgEIADgDIACgFIABgGIAAgHIggAAIAAgIIApAAIAAANIgBAJIgDAHIgDAEQgEADAAAHIAAAIg");
	this.shape_1053.setTransform(437.8,142.6);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("rgba(0,0,0,0.8)").s().p("AgBAaIAAgIIAQAAIAAgPIgBgLQAAgEgCgDQgCgCgEAAQgGAAgDAGQgDAFgDANIgEATIgJAAIAEgUIADgJIgIgWIAJAAIADAMQADgFAEgEQAEgDAGAAQAGAAAEADQAFADACAGQABAGAAAKIAAAXg");
	this.shape_1054.setTransform(423,141.6);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgNABIAAgIIAOgBQAPAAAGAGQAGAGAAAMIAAAbg");
	this.shape_1055.setTransform(410.3,141.6);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("rgba(0,0,0,0.8)").s().p("AAJAaIAAgZQAAgIgEgDQgFgEgIAAIgMABIgBgLQAHgBAJAAQANAAAHAGQAHAFAAANIAAAbg");
	this.shape_1056.setTransform(501.4,101.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("rgba(0,0,0,0.8)").s().p("AgYAXIADgJQAHADAGAAQAIAAAGgFQAEgEAAgIQAAgIgDgEQgFgFgGAAIgGABIAAAGQAAAHAGAAIACAAIACAHQgDACgFAAQgEAAgDgCQgDgBgCgDQgDgDAAgIIAAgMQAJgDAKAAQAMAAAIAHQAJAHAAAMQAAAMgJAHQgJAIgNAAQgJAAgJgEg");
	this.shape_1057.setTransform(493.4,101.6);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAfQgGgGgBgJIAJgBQABAIADADQAFADAEAAQAGAAAEgEQAEgEAAgHQAAgGgDgEQgFgEgGAAIgFABIABgGIABAAQAFAAAEgDQAFgDAAgGQAAgFgDgDQgDgDgFAAQgFAAgDADQgDADgCAGIgJgBQACgJAGgFQAGgFAIAAQAFAAAFADQAFACACAFQADAEAAAFQAAAFgDADQgCAEgFACQAHACADAEQADAEAAAHQABAJgIAHQgGAHgKAAQgJAAgGgGg");
	this.shape_1058.setTransform(462.2,100.6);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBIAEgFIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQAAAEAEADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_1059.setTransform(520.3,88.2);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgQABIAAgLQAHgBALAAQALAAAHADQAGAEACAFQADAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_1060.setTransform(483.9,88.1);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("rgba(0,0,0,0.8)").s().p("AgPAdQgIgJABgUQAAgLACgIQADgIAFgEQAFgFAHABQAGgBAEADQAEACADAFQADAEACAGQABAHAAAJQAAANgCAHQgDAJgFADQgFAFgIAAQgKAAgFgIgAgJgXQgFAGABARQgBASAFAFQAEAHAFgBQAGABAEgHQAEgFAAgSQAAgQgEgHQgEgFgGAAQgFAAgEAFg");
	this.shape_1061.setTransform(460.7,87.2);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("rgba(0,0,0,0.8)").s().p("AAKAaIgRgaQgDAEgBAMIgBAKIgNAAIABgLQABgLACgEQADgFAFgDIgMgRIAQAAIAOAVQADgCABgKIABgJIANAAIgBAHQgBALgDAEQgDAEgEADIAPAWg");
	this.shape_1062.setTransform(523.2,74.7);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("rgba(0,0,0,0.8)").s().p("AgWASQgIgJAAgRIgBgSIAOAAIAAAOIABAIIAAADQADAAACgBIAEgFIABgJIABgKIALAAIAAANIgBAIIgCAFIgGAEQgFACgGABQAAAEAEADQAFACAEAAQAIAAAFgFQADgFABgNIACgTIANAAIgBAUQgBAMgDAGQgDAGgHAEQgHAFgJAAQgOAAgIgJg");
	this.shape_1063.setTransform(527.5,61.3);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("rgba(0,0,0,0.8)").s().p("AALAaIAAgYQgBgJgEgDQgFgEgIAAIgQABIAAgLQAHgBALAAQALAAAHADQAGAEACAFQADAFAAAIIAAAagAgXAaIAAgaIANAAIAAAag");
	this.shape_1064.setTransform(495.1,61.2);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("rgba(0,0,0,0.8)").s().p("AAMAaIAAgZQAAgGgCgEQgBgEgFgCQgEgCgHAAIgMABIgBgIIAOgBQAOAAAHAGQAGAGAAAMIAAAbg");
	this.shape_1065.setTransform(447.6,61.2);

	this.instance_12 = new lib.blackbulletjpgcopy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,36,0.62,0.62);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#4472C4").s().p("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");
	this.shape_1066.setTransform(497.9,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_238},{t:this.instance_1},{t:this.instance,p:{x:454.8}},{t:this.shape_237},{t:this.shape_236,p:{x:421.6,y:79.5}},{t:this.shape_235,p:{x:424.1,y:79.5}},{t:this.shape_234},{t:this.shape_233,p:{x:435.2,y:79.5}},{t:this.shape_232,p:{x:438.7,y:80.7}},{t:this.shape_231,p:{x:442.7,y:79.5}},{t:this.shape_230,p:{x:445.2,y:79.5}},{t:this.shape_229,p:{x:449.2,y:80.8}},{t:this.shape_228,p:{x:456.1,y:80.8}},{t:this.shape_227},{t:this.shape_226,p:{x:466,y:80.7}},{t:this.shape_225,p:{x:471.6,y:80.8}},{t:this.shape_224},{t:this.shape_223,p:{x:486.3,y:80.7}},{t:this.shape_222},{t:this.shape_221,p:{x:421.4,y:94.2}},{t:this.shape_220,p:{x:427.2,y:94.2}},{t:this.shape_219,p:{x:431.6,y:93}},{t:this.shape_218,p:{x:436.3,y:94.3}},{t:this.shape_217,p:{x:442.7,y:94.2}},{t:this.shape_216,p:{x:448.3,y:94.2}},{t:this.shape_215,p:{x:455.4,y:94.2}},{t:this.shape_214,p:{x:459,y:94.2}},{t:this.shape_213,p:{x:463,y:93}},{t:this.shape_212,p:{x:467.2,y:94.2}},{t:this.shape_211,p:{x:474.7,y:94.2}},{t:this.shape_210,p:{x:477.7,y:95.2}},{t:this.shape_209,p:{x:482.1,y:94.2}},{t:this.shape_208,p:{x:486.8,y:94.2}},{t:this.shape_207,p:{x:491.2,y:94.2}},{t:this.shape_206,p:{x:423.1,y:106.7}},{t:this.shape_205},{t:this.shape_204,p:{x:434.3,y:106.7}},{t:this.shape_203},{t:this.shape_202,p:{x:447.1,y:107.7}},{t:this.shape_201,p:{x:451.9,y:107.6}},{t:this.shape_200,p:{x:458,y:107.7}},{t:this.shape_199,p:{x:462.1,y:106.5}},{t:this.shape_198,p:{x:465.8,y:107.7}},{t:this.shape_197,p:{x:469.9,y:106.5}},{t:this.shape_196,p:{x:477.2,y:107.7}},{t:this.shape_195,p:{x:482.7,y:107.6}},{t:this.shape_194},{t:this.shape_193,p:{x:421.9,y:120.2}},{t:this.shape_192,p:{x:427.4,y:120.2}},{t:this.shape_191,p:{x:432.9,y:120.1}},{t:this.shape_190,p:{x:440,y:121.1}},{t:this.shape_189,p:{x:444.4,y:121.1}},{t:this.shape_188,p:{x:448.8,y:120}},{t:this.shape_187,p:{x:453.1,y:122.1}},{t:this.shape_186,p:{x:458.4,y:121.1}},{t:this.shape_185,p:{x:464.2,y:121.1}},{t:this.shape_184,p:{x:472.2,y:121.1}},{t:this.shape_183,p:{x:478,y:121.1}},{t:this.shape_182,p:{x:483.8,y:121.1}},{t:this.shape_181,p:{x:489.9,y:121.1}},{t:this.shape_180,p:{x:419.2,y:133.6}},{t:this.shape_179},{t:this.shape_178,p:{x:430.8,y:133.6}},{t:this.shape_177,p:{x:440.6,y:133.4}},{t:this.shape_176,p:{x:445.1,y:134.6}},{t:this.shape_175,p:{x:450.2,y:133.6}},{t:this.shape_174,p:{x:454.1,y:133.4}},{t:this.shape_173},{t:this.shape_172,p:{x:462.4,y:133.6}},{t:this.shape_171,p:{x:470.9,y:134.5}},{t:this.shape_170,p:{x:475.3,y:133.4}},{t:this.shape_169,p:{x:479.7,y:134.6}},{t:this.shape_168,p:{x:485.6,y:134.6}},{t:this.shape_167,p:{x:492.2,y:134.5}},{t:this.shape_166,p:{x:525.1,y:148}},{t:this.shape_165,p:{x:529.2,y:148}},{t:this.shape_164,p:{x:533.4,y:146.9}},{t:this.shape_163},{t:this.shape_162,p:{x:542.8,y:149}},{t:this.shape_161},{t:this.shape_160,p:{x:380.3,y:161.1}},{t:this.shape_159,p:{x:386.1,y:161.1}},{t:this.shape_158,p:{x:390.5,y:161.2}},{t:this.shape_157},{t:this.shape_156,p:{x:399.4,y:161.1}},{t:this.shape_155,p:{x:405.8,y:161.2}},{t:this.shape_154,p:{x:413.3,y:159.9}},{t:this.shape_153,p:{x:417.4,y:161.2}},{t:this.shape_152,p:{x:421.5,y:161.2}},{t:this.shape_151,p:{x:425,y:160.2}},{t:this.shape_150,p:{x:433.2,y:161.1}},{t:this.shape_149,p:{x:439.7,y:161.2}},{t:this.shape_148,p:{x:445.9,y:161.1}},{t:this.shape_147,p:{x:454.4,y:161.1}},{t:this.shape_146,p:{x:459.7,y:161.1}},{t:this.shape_145,p:{x:463.7,y:161.2}},{t:this.shape_144,p:{x:467.9,y:161.1}},{t:this.shape_143,p:{x:473.6,y:161.1}},{t:this.shape_142,p:{x:481.3,y:160.2}},{t:this.shape_141,p:{x:486.1,y:161.4}},{t:this.shape_140},{t:this.shape_139,p:{x:500.6,y:161.1}},{t:this.shape_138,p:{x:506.1,y:161.2}},{t:this.shape_137,p:{x:511.7,y:161.2}},{t:this.shape_136,p:{x:517.4,y:161.1}},{t:this.shape_135,p:{x:526.4,y:161.1}},{t:this.shape_134,p:{x:531.6,y:160.2}},{t:this.shape_133,p:{x:535.2,y:159.9}},{t:this.shape_132,p:{x:538.7,y:160.2}},{t:this.shape_131,p:{x:543.5,y:161.4}},{t:this.shape_130,p:{x:549.4,y:161.1}},{t:this.shape_129,p:{x:402,y:174.3}},{t:this.shape_128,p:{x:407.2,y:173.3}},{t:this.shape_127,p:{x:410.9,y:174.3}},{t:this.shape_126,p:{x:413.3,y:173.1}},{t:this.shape_125,p:{x:417.6,y:174.3}},{t:this.shape_124,p:{x:425.5,y:175.3}},{t:this.shape_123,p:{x:430.5,y:173.3}},{t:this.shape_122,p:{x:436,y:174.3}},{t:this.shape_121,p:{x:441.8,y:174.3}},{t:this.shape_120,p:{x:447.7,y:174.3}},{t:this.shape_119,p:{x:454.6,y:176.4}},{t:this.shape_118,p:{x:459,y:174.3}},{t:this.shape_117,p:{x:463.2,y:173.1}},{t:this.shape_116,p:{x:467.2,y:174.3}},{t:this.shape_115,p:{x:473.3,y:174.4}},{t:this.shape_114,p:{x:479.1,y:174.3}},{t:this.shape_113,p:{x:484.3,y:174.3}},{t:this.shape_112},{t:this.shape_111,p:{x:499.2,y:174.3}},{t:this.shape_110,p:{x:504,y:173.3}},{t:this.shape_109,p:{x:507.6,y:173.1}},{t:this.shape_108,p:{x:510.7,y:174.3}},{t:this.shape_107,p:{x:515.1,y:173.3}},{t:this.shape_106},{t:this.shape_105,p:{x:528.3,y:174.3}},{t:this.shape_104,p:{x:534.1,y:174.3}},{t:this.shape_103,p:{x:539.1,y:174.3}},{t:this.shape_102,p:{x:544.7,y:174.3}},{t:this.shape_101,p:{x:549.9,y:173.3}},{t:this.shape_100,p:{x:402.1,y:187.4}},{t:this.shape_99,p:{x:408.6,y:187.5}},{t:this.shape_98,p:{x:414.8,y:187.4}},{t:this.shape_97,p:{x:422.6,y:187.4}},{t:this.shape_96,p:{x:426.6,y:187.5}},{t:this.shape_95,p:{x:430.8,y:187.4}},{t:this.shape_94,p:{x:436.5,y:187.4}},{t:this.shape_93,p:{x:445,y:187.4}},{t:this.shape_92,p:{x:450.3,y:187.4}},{t:this.shape_91,p:{x:454.3,y:186.2}},{t:this.shape_90,p:{x:457.8,y:187.5}},{t:this.shape_89,p:{x:463.2,y:187.4}},{t:this.shape_88,p:{x:472,y:187.4}},{t:this.shape_87,p:{x:476.2,y:186.2}},{t:this.shape_86},{t:this.shape_85,p:{x:483.3,y:187.5}},{t:this.shape_84,p:{x:486.1,y:187.4}},{t:this.shape_83,p:{x:489.9,y:187.4}},{t:this.shape_82,p:{x:494.9,y:187.4}},{t:this.shape_81,p:{x:503.9,y:187.4}},{t:this.shape_80,p:{x:509.1,y:186.5}},{t:this.shape_79,p:{x:512.7,y:187.5}},{t:this.shape_78,p:{x:516.3,y:187.7}},{t:this.shape_77,p:{x:522.2,y:187.4}},{t:this.shape_76,p:{x:529.2,y:186.2}},{t:this.shape_75,p:{x:533.2,y:187.4}},{t:this.shape_74,p:{x:538.9,y:187.4}},{t:this.shape_73,p:{x:544.2,y:187.4}},{t:this.shape_72,p:{x:549.7,y:187.4}},{t:this.shape_71,p:{x:366,y:200.6}},{t:this.shape_70,p:{x:371.2,y:199.6}},{t:this.shape_69,p:{x:379.4,y:200.6}},{t:this.shape_68},{t:this.shape_67,p:{x:388.3,y:200.7}},{t:this.shape_66,p:{x:393.7,y:200.6}},{t:this.shape_65,p:{x:398.7,y:200.6}},{t:this.shape_64,p:{x:405.8,y:200.6}},{t:this.shape_63,p:{x:409.9,y:200.6}},{t:this.shape_62,p:{x:415.8,y:200.6}},{t:this.shape_61,p:{x:421.6,y:200.6}},{t:this.shape_60,p:{x:425.9,y:200.6}},{t:this.shape_59,p:{x:432.1,y:202.7}},{t:this.shape_58,p:{x:435.7,y:199.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:452.9,y:199.4}},{t:this.shape_53,p:{x:456.4,y:200.6}},{t:this.shape_52,p:{x:460.4,y:199.4}},{t:this.shape_51,p:{x:462.9,y:199.4}},{t:this.shape_50,p:{x:466.9,y:200.6}},{t:this.shape_49},{t:this.shape_48,p:{x:481.3,y:200.6}},{t:this.shape_47,p:{x:486.1,y:199.6}},{t:this.shape_46,p:{x:489.8,y:199.4}},{t:this.shape_45,p:{x:492.9,y:200.6}},{t:this.shape_44,p:{x:497.9,y:200.6}},{t:this.shape_43,p:{x:506.8,y:200.6}},{t:this.shape_42,p:{x:512.7,y:200.6}},{t:this.shape_41,p:{x:516.8,y:200.6}},{t:this.shape_40},{t:this.shape_39,p:{x:527.7,y:203.4}},{t:this.shape_38,p:{x:530.3,y:200.6}},{t:this.shape_37,p:{x:534.4,y:200.6}},{t:this.shape_36},{t:this.shape_35,p:{x:546.1,y:200.6}},{t:this.shape_34,p:{x:550.4,y:200.6}},{t:this.shape_33,p:{x:384.7,y:215.9}},{t:this.shape_32,p:{x:387.9,y:210.5}},{t:this.shape_31,p:{x:391.9,y:212.8}},{t:this.shape_30,p:{x:395.5,y:212.5}},{t:this.shape_29,p:{x:398,y:212.5}},{t:this.shape_28,p:{x:402.2,y:213.8}},{t:this.shape_27,p:{x:409.1,y:212.5}},{t:this.shape_26,p:{x:412.6,y:213.7}},{t:this.shape_25,p:{x:416.6,y:212.5}},{t:this.shape_24,p:{x:419.1,y:212.5}},{t:this.shape_23,p:{x:423.1,y:213.8}},{t:this.shape_22,p:{x:427.5,y:210.5}},{t:this.shape_21,p:{x:435.1,y:213.8}},{t:this.shape_20,p:{x:441.1,y:213.8}},{t:this.shape_19,p:{x:445.9,y:212.8}},{t:this.shape_18,p:{x:449.5,y:212.5}},{t:this.shape_17,p:{x:452.6,y:213.7}},{t:this.shape_16,p:{x:457,y:212.8}},{t:this.shape_15,p:{x:465.2,y:213.7}},{t:this.shape_14},{t:this.shape_13,p:{x:475.9,y:213.8}},{t:this.shape_12,p:{x:480,y:213.8}},{t:this.shape_11,p:{x:488.3,y:214.7}},{t:this.shape_10,p:{x:493.5,y:213.7}},{t:this.shape_9,p:{x:498.5,y:213.8}},{t:this.shape_8,p:{x:504,y:213.7}},{t:this.shape_7,p:{x:508.3,y:213.8}},{t:this.shape_6,p:{x:515.4,y:213.7}},{t:this.shape_5,p:{x:521.2,y:213.7}},{t:this.shape_4,p:{x:525.6,y:213.8}},{t:this.shape_3,p:{x:529,y:212.8}},{t:this.shape_2,p:{x:534.5,y:213.7}},{t:this.shape_1,p:{x:543.2,y:213.8}},{t:this.shape,p:{x:549.6,y:213.8}}]},1).to({state:[{t:this.shape_392},{t:this.instance_2},{t:this.instance,p:{x:535.8}},{t:this.shape_391,p:{x:479.3,y:54.8}},{t:this.shape_19,p:{x:482.8,y:55}},{t:this.shape_149,p:{x:488.7,y:56.1}},{t:this.shape_390,p:{x:498,y:56}},{t:this.shape_389},{t:this.shape_388,p:{x:509.4,y:56}},{t:this.shape_387,p:{x:515.3,y:56}},{t:this.shape_386,p:{x:521,y:56}},{t:this.shape_385,p:{x:529.1,y:56}},{t:this.shape_384,p:{x:533.1,y:56}},{t:this.shape_229,p:{x:537.1,y:56}},{t:this.shape_236,p:{x:541,y:54.8}},{t:this.shape_153,p:{x:545.1,y:56}},{t:this.shape_228,p:{x:552.2,y:56}},{t:this.shape_201,p:{x:556.7,y:56}},{t:this.shape_383,p:{x:562.2,y:56}},{t:this.shape_382,p:{x:567.7,y:56}},{t:this.shape_381,p:{x:573.5,y:56}},{t:this.shape_223,p:{x:582.5,y:56}},{t:this.shape_380,p:{x:589.1,y:56.1}},{t:this.shape_379,p:{x:495.1,y:69.4}},{t:this.shape_214,p:{x:500.4,y:69.4}},{t:this.shape_378,p:{x:506.2,y:69.4}},{t:this.shape_377,p:{x:510.4,y:69.5}},{t:this.shape_376,p:{x:512.8,y:69.5}},{t:this.shape_375,p:{x:517,y:69.5}},{t:this.shape_374,p:{x:522.6,y:70.5}},{t:this.shape_373,p:{x:531,y:69.4}},{t:this.shape_372,p:{x:535.6,y:69.4}},{t:this.shape_371,p:{x:538.8,y:69.5}},{t:this.shape_370,p:{x:542,y:69.5}},{t:this.shape_369,p:{x:546.7,y:69.5}},{t:this.shape_368,p:{x:552.3,y:70.5}},{t:this.shape_211,p:{x:559.4,y:69.5}},{t:this.shape_210,p:{x:562.5,y:70.5}},{t:this.shape_209,p:{x:566.8,y:69.4}},{t:this.shape_208,p:{x:571.5,y:69.5}},{t:this.shape_207,p:{x:576,y:69.5}},{t:this.shape_206,p:{x:502.3,y:81.9}},{t:this.shape_367},{t:this.shape_366,p:{x:513.2,y:81.9}},{t:this.shape_365},{t:this.shape_202,p:{x:526.3,y:82.9}},{t:this.shape_364},{t:this.shape_200,p:{x:537.2,y:82.9}},{t:this.shape_199,p:{x:541.3,y:81.8}},{t:this.shape_363,p:{x:545.1,y:82.9}},{t:this.shape_197,p:{x:549.2,y:81.8}},{t:this.shape_196,p:{x:556.5,y:82.9}},{t:this.shape_362,p:{x:561.9,y:82.9}},{t:this.shape_361},{t:this.shape_191,p:{x:503.8,y:95.4}},{t:this.shape_360,p:{x:509.4,y:95.5}},{t:this.shape_190,p:{x:516.4,y:96.4}},{t:this.shape_189,p:{x:520.9,y:96.3}},{t:this.shape_188,p:{x:525.3,y:95.2}},{t:this.shape_187,p:{x:529.6,y:97.4}},{t:this.shape_184,p:{x:534.8,y:96.3}},{t:this.shape_359,p:{x:540.6,y:96.4}},{t:this.shape_358},{t:this.shape_357,p:{x:554.4,y:96.4}},{t:this.shape_182,p:{x:560.3,y:96.4}},{t:this.shape_181,p:{x:566.3,y:96.3}},{t:this.shape_180,p:{x:498.4,y:108.8}},{t:this.shape_356},{t:this.shape_178,p:{x:510,y:108.9}},{t:this.shape_177,p:{x:519.9,y:108.7}},{t:this.shape_176,p:{x:524.3,y:109.8}},{t:this.shape_175,p:{x:529.4,y:108.8}},{t:this.shape_174,p:{x:533.4,y:108.7}},{t:this.shape_355,p:{x:536.9,y:109.8}},{t:this.shape_172,p:{x:541.7,y:108.8}},{t:this.shape_171,p:{x:550.1,y:109.8}},{t:this.shape_170,p:{x:554.5,y:108.7}},{t:this.shape_169,p:{x:559,y:109.8}},{t:this.shape_168,p:{x:564.8,y:109.8}},{t:this.shape_167,p:{x:571.4,y:109.8}},{t:this.shape_166,p:{x:620.4,y:123.3}},{t:this.shape_186,p:{x:624.5,y:123.2}},{t:this.shape_164,p:{x:628.7,y:122.1}},{t:this.shape_354},{t:this.shape_162,p:{x:638.1,y:124.3}},{t:this.shape_353,p:{x:644,y:123.3}},{t:this.shape_352,p:{x:451.3,y:136.4}},{t:this.shape_351},{t:this.shape_350,p:{x:462,y:136.4}},{t:this.shape_349,p:{x:467.8,y:136.4}},{t:this.shape_348},{t:this.shape_347,p:{x:480.5,y:136.4}},{t:this.shape_346,p:{x:483.6,y:136.4}},{t:this.shape_345,p:{x:491.5,y:136.4}},{t:this.shape_344,p:{x:496.1,y:136.4}},{t:this.shape_343},{t:this.shape_216,p:{x:506.3,y:136.4}},{t:this.shape_342,p:{x:514.5,y:135.4}},{t:this.shape_131,p:{x:519.3,y:136.7}},{t:this.shape_341,p:{x:524.9,y:136.4}},{t:this.shape_340},{t:this.shape_339,p:{x:538.3,y:135.4}},{t:this.shape_338,p:{x:546.5,y:135.4}},{t:this.shape_109,p:{x:550.1,y:135.2}},{t:this.shape_337,p:{x:553.2,y:136.4}},{t:this.shape_336,p:{x:558.1,y:136.4}},{t:this.shape_335,p:{x:565.9,y:136.4}},{t:this.shape_334,p:{x:569.9,y:136.4}},{t:this.shape_333,p:{x:574.1,y:136.4}},{t:this.shape_332,p:{x:579.8,y:136.4}},{t:this.shape_331,p:{x:588.2,y:136.4}},{t:this.shape_330,p:{x:592.2,y:136.4}},{t:this.shape_329,p:{x:596.4,y:136.4}},{t:this.shape_328,p:{x:603.4,y:136.4}},{t:this.shape_327,p:{x:607.6,y:136.4}},{t:this.shape_326},{t:this.shape_325,p:{x:618.7,y:136.4}},{t:this.shape_324},{t:this.shape_323,p:{x:633.1,y:136.4}},{t:this.shape_322,p:{x:638.6,y:136.4}},{t:this.shape_321,p:{x:642.4,y:136.4}},{t:this.shape_108,p:{x:645.5,y:136.4}},{t:this.shape_320},{t:this.shape_138,p:{x:438.6,y:149.6}},{t:this.shape_319,p:{x:444.3,y:149.6}},{t:this.shape_318,p:{x:449.5,y:149.8}},{t:this.shape_317,p:{x:455.3,y:149.5}},{t:this.shape_107,p:{x:460.6,y:148.6}},{t:this.shape_316,p:{x:468.8,y:149.6}},{t:this.shape_315,p:{x:475.3,y:149.5}},{t:this.shape_314},{t:this.shape_313,p:{x:487.6,y:149.5}},{t:this.shape_312},{t:this.shape_311,p:{x:501.6,y:149.6}},{t:this.shape_310,p:{x:508.5,y:151.7}},{t:this.shape_309,p:{x:511.1,y:149.6}},{t:this.shape_16,p:{x:514.6,y:148.6}},{t:this.shape_91,p:{x:518.2,y:148.3}},{t:this.shape_83,p:{x:521.3,y:149.5}},{t:this.shape_308,p:{x:526.2,y:149.5}},{t:this.shape_307,p:{x:534,y:149.5}},{t:this.shape_306,p:{x:539.8,y:149.5}},{t:this.shape_305,p:{x:545.7,y:149.6}},{t:this.shape_118,p:{x:554.2,y:149.5}},{t:this.shape_111,p:{x:559.7,y:149.6}},{t:this.shape_217,p:{x:565.2,y:149.6}},{t:this.shape_134,p:{x:573,y:148.6}},{t:this.shape_304,p:{x:577.7,y:149.6}},{t:this.shape_5,p:{x:582.9,y:149.5}},{t:this.shape_303,p:{x:591.5,y:149.5}},{t:this.shape_302,p:{x:597.2,y:149.5}},{t:this.shape_105,p:{x:602.5,y:149.5}},{t:this.shape_301,p:{x:606.5,y:149.6}},{t:this.shape_300,p:{x:613.6,y:149.5}},{t:this.shape_299,p:{x:617.8,y:149.6}},{t:this.shape_298,p:{x:621.7,y:149.5}},{t:this.shape_66,p:{x:626.3,y:149.5}},{t:this.shape_297,p:{x:633.5,y:149.5}},{t:this.shape_296},{t:this.shape_215,p:{x:644,y:149.6}},{t:this.shape_87,p:{x:646.4,y:148.3}},{t:this.shape_119,p:{x:452.1,y:164.8}},{t:this.shape_295,p:{x:456.2,y:162.7}},{t:this.shape_294,p:{x:461.9,y:162.7}},{t:this.shape_293,p:{x:466.9,y:162.7}},{t:this.shape_292,p:{x:474.2,y:162.7}},{t:this.shape_291,p:{x:479.1,y:161.7}},{t:this.shape_80,p:{x:486.6,y:161.7}},{t:this.shape_78,p:{x:491.4,y:163}},{t:this.shape_290,p:{x:497,y:162.7}},{t:this.shape_76,p:{x:503.7,y:161.5}},{t:this.shape_289},{t:this.shape_116,p:{x:514.1,y:162.7}},{t:this.shape_114,p:{x:519.1,y:162.7}},{t:this.shape_288,p:{x:524.3,y:162.7}},{t:this.shape_287,p:{x:532.2,y:162.7}},{t:this.shape_158,p:{x:536.2,y:162.7}},{t:this.shape_286,p:{x:540.4,y:162.7}},{t:this.shape_285,p:{x:546.1,y:162.7}},{t:this.shape_26,p:{x:553.9,y:162.7}},{t:this.shape_284},{t:this.shape_283,p:{x:566.1,y:162.7}},{t:this.shape_137,p:{x:572.5,y:162.7}},{t:this.shape_282,p:{x:578.2,y:162.7}},{t:this.shape_281,p:{x:585.5,y:165.5}},{t:this.shape_152,p:{x:588.2,y:162.7}},{t:this.shape_123,p:{x:591.6,y:161.7}},{t:this.shape_115,p:{x:597.5,y:162.8}},{t:this.shape_280},{t:this.shape_63,p:{x:613.1,y:162.7}},{t:this.shape_50,p:{x:618.8,y:162.7}},{t:this.shape_42,p:{x:624.3,y:162.7}},{t:this.shape_145,p:{x:628.4,y:162.7}},{t:this.shape_279,p:{x:632.7,y:162.7}},{t:this.shape_8,p:{x:638.5,y:162.7}},{t:this.shape_278,p:{x:644.7,y:162.7}},{t:this.shape_59,p:{x:473.5,y:178}},{t:this.shape_221,p:{x:477.9,y:175.8}},{t:this.shape_92,p:{x:483.2,y:175.8}},{t:this.shape_277,p:{x:488.7,y:175.8}},{t:this.shape_156,p:{x:494.4,y:175.8}},{t:this.shape_127,p:{x:501.4,y:175.9}},{t:this.shape_70,p:{x:504.8,y:174.9}},{t:this.shape_212,p:{x:513.1,y:175.8}},{t:this.shape_276,p:{x:519,y:175.9}},{t:this.shape_54,p:{x:523.7,y:174.6}},{t:this.shape_52,p:{x:526.2,y:174.6}},{t:this.shape_160,p:{x:530.4,y:175.8}},{t:this.shape_61,p:{x:539.1,y:175.9}},{t:this.shape_101,p:{x:544.1,y:174.9}},{t:this.shape_100,p:{x:552.3,y:175.8}},{t:this.shape_275,p:{x:557.5,y:174.9}},{t:this.shape_96,p:{x:561.2,y:175.9}},{t:this.shape_274,p:{x:564.8,y:176.1}},{t:this.shape_273,p:{x:570.5,y:175.8}},{t:this.shape_51,p:{x:577.7,y:174.6}},{t:this.shape_272,p:{x:580.5,y:175.8}},{t:this.shape_85,p:{x:583.7,y:175.9}},{t:this.shape_271},{t:this.shape_46,p:{x:590.9,y:174.6}},{t:this.shape_144,p:{x:595.2,y:175.8}},{t:this.shape_147,p:{x:601.2,y:175.8}},{t:this.shape_79,p:{x:608.2,y:175.9}},{t:this.shape_35,p:{x:612.3,y:175.9}},{t:this.shape_270,p:{x:617.4,y:175.8}},{t:this.shape_269,p:{x:623,y:175.8}},{t:this.shape_3,p:{x:631.2,y:174.9}},{t:this.shape_268,p:{x:635.8,y:174.9}},{t:this.shape_45,p:{x:640.1,y:175.8}},{t:this.shape_148,p:{x:645,y:175.8}},{t:this.shape_135,p:{x:429.2,y:189}},{t:this.shape_267,p:{x:434.5,y:189}},{t:this.shape_235,p:{x:438.5,y:187.8}},{t:this.shape_266,p:{x:442.1,y:189.3}},{t:this.shape_265,p:{x:447.1,y:189}},{t:this.shape_130,p:{x:455.6,y:189}},{t:this.shape_139,p:{x:460.9,y:189}},{t:this.shape_64,p:{x:464.9,y:189}},{t:this.shape_95,p:{x:469.1,y:189}},{t:this.shape_143,p:{x:474.8,y:189}},{t:this.shape_264,p:{x:482.5,y:188}},{t:this.shape_233,p:{x:486.2,y:187.8}},{t:this.shape_9,p:{x:489.6,y:189}},{t:this.shape_113,p:{x:495.1,y:189}},{t:this.shape_41,p:{x:502.2,y:189}},{t:this.shape_263,p:{x:506.4,y:189}},{t:this.shape_262,p:{x:512,y:190}},{t:this.shape_12,p:{x:517.5,y:189}},{t:this.shape_104,p:{x:523.3,y:189}},{t:this.shape_261,p:{x:530.3,y:191.8}},{t:this.shape_260,p:{x:534.7,y:189}},{t:this.shape_120,p:{x:540.9,y:189}},{t:this.shape_90,p:{x:545.8,y:189}},{t:this.shape_53,p:{x:550.5,y:189}},{t:this.shape_98,p:{x:556,y:189}},{t:this.shape_129,p:{x:564.5,y:189}},{t:this.shape_259,p:{x:569.8,y:189.3}},{t:this.shape_231,p:{x:573.9,y:187.8}},{t:this.shape_37,p:{x:578,y:189}},{t:this.shape_60,p:{x:582.5,y:189}},{t:this.shape_258,p:{x:589.6,y:190}},{t:this.shape_47,p:{x:594.6,y:188}},{t:this.shape_122,p:{x:600,y:189}},{t:this.shape_257,p:{x:605.9,y:189}},{t:this.shape_94,p:{x:611.7,y:189}},{t:this.shape_48,p:{x:619.7,y:189}},{t:this.shape_74,p:{x:625.3,y:189}},{t:this.shape,p:{x:631.2,y:189}},{t:this.shape_81,p:{x:639.8,y:189}},{t:this.shape_38,p:{x:644,y:189}},{t:this.shape_230,p:{x:646.4,y:187.8}},{t:this.shape_256,p:{x:473.6,y:202.2}},{t:this.shape_30,p:{x:478.3,y:200.9}},{t:this.shape_84,p:{x:481.1,y:202.1}},{t:this.shape_23,p:{x:485.9,y:202.2}},{t:this.shape_255,p:{x:491.5,y:202.2}},{t:this.shape_58,p:{x:497.2,y:201.2}},{t:this.shape_69,p:{x:505.5,y:202.1}},{t:this.shape_13,p:{x:509.7,y:202.2}},{t:this.shape_146,p:{x:513.2,y:202.1}},{t:this.shape_17,p:{x:517.9,y:202.1}},{t:this.shape_29,p:{x:521.2,y:200.9}},{t:this.shape_102,p:{x:528.3,y:202.1}},{t:this.shape_254,p:{x:533.3,y:202.2}},{t:this.shape_93,p:{x:540.9,y:202.1}},{t:this.shape_10,p:{x:546.2,y:202.1}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_43,p:{x:566.3,y:202.1}},{t:this.shape_251,p:{x:572.2,y:202.2}},{t:this.shape_89,p:{x:577.9,y:202.1}},{t:this.shape_33,p:{x:585.1,y:204.3}},{t:this.shape_250},{t:this.shape_27,p:{x:594.2,y:200.9}},{t:this.shape_249,p:{x:597,y:202.1}},{t:this.shape_25,p:{x:600.2,y:200.9}},{t:this.shape_248,p:{x:604.3,y:202.1}},{t:this.shape_88,p:{x:613.2,y:202.1}},{t:this.shape_20,p:{x:618.7,y:202.2}},{t:this.shape_247,p:{x:623.6,y:202.1}},{t:this.shape_246},{t:this.shape_7,p:{x:633.5,y:202.2}},{t:this.shape_77,p:{x:637.7,y:202.1}},{t:this.shape_99,p:{x:644.2,y:202.2}},{t:this.shape_245},{t:this.shape_4,p:{x:558.4,y:215.3}},{t:this.shape_244,p:{x:562.6,y:215.3}},{t:this.shape_243},{t:this.shape_242,p:{x:573.7,y:215.3}},{t:this.shape_241,p:{x:579.5,y:215.3}},{t:this.shape_240,p:{x:587.3,y:214.3}},{t:this.shape_67,p:{x:593.2,y:215.4}},{t:this.shape_71,p:{x:602.5,y:215.3}},{t:this.shape_75,p:{x:608.2,y:215.3}},{t:this.shape_15,p:{x:613.9,y:215.3}},{t:this.shape_239,p:{x:619.8,y:215.3}},{t:this.shape_6,p:{x:625.6,y:215.3}},{t:this.shape_24,p:{x:632.6,y:214.1}},{t:this.shape_18,p:{x:635,y:214.1}},{t:this.shape_2,p:{x:639.3,y:215.3}},{t:this.shape_72,p:{x:645,y:215.3}}]},1).to({state:[{t:this.shape_477},{t:this.instance_3},{t:this.instance,p:{x:521.8}},{t:this.shape_476},{t:this.shape_233,p:{x:477.1,y:78.2}},{t:this.shape_231,p:{x:479.6,y:78.2}},{t:this.shape_286,p:{x:483.8,y:79.4}},{t:this.shape_475},{t:this.shape_230,p:{x:493.3,y:78.2}},{t:this.shape_242,p:{x:497.4,y:79.4}},{t:this.shape_474,p:{x:505.8,y:80.4}},{t:this.shape_279,p:{x:511.5,y:79.4}},{t:this.shape_473,p:{x:517.9,y:79.5}},{t:this.shape_472,p:{x:524.3,y:79.4}},{t:this.shape_471,p:{x:531.4,y:80.4}},{t:this.shape_30,p:{x:533.9,y:78.2}},{t:this.shape_239,p:{x:538,y:79.4}},{t:this.shape_228,p:{x:545,y:79.4}},{t:this.shape_470},{t:this.shape_226,p:{x:554.9,y:79.4}},{t:this.shape_225,p:{x:560.5,y:79.4}},{t:this.shape_381,p:{x:566.3,y:79.4}},{t:this.shape_223,p:{x:575.2,y:79.4}},{t:this.shape_469,p:{x:581.9,y:79.5}},{t:this.shape_294,p:{x:502.1,y:92.8}},{t:this.shape_305,p:{x:508,y:92.9}},{t:this.shape_468,p:{x:512,y:91.6}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_376,p:{x:528.7,y:92.9}},{t:this.shape_465,p:{x:531.2,y:91.6}},{t:this.shape_202,p:{x:536.9,y:92.9}},{t:this.shape_210,p:{x:539.9,y:93.9}},{t:this.shape_209,p:{x:544.3,y:92.8}},{t:this.shape_208,p:{x:549,y:92.9}},{t:this.shape_207,p:{x:553.4,y:92.9}},{t:this.shape_206,p:{x:494.6,y:105.3}},{t:this.shape_464},{t:this.shape_366,p:{x:505.4,y:105.3}},{t:this.shape_463,p:{x:511.2,y:105.3}},{t:this.shape_462,p:{x:518.6,y:106.3}},{t:this.shape_461,p:{x:523.4,y:106.3}},{t:this.shape_169,p:{x:529.5,y:106.3}},{t:this.shape_199,p:{x:533.6,y:105.2}},{t:this.shape_460},{t:this.shape_197,p:{x:541.4,y:105.2}},{t:this.shape_196,p:{x:548.7,y:106.3}},{t:this.shape_459,p:{x:554.2,y:106.3}},{t:this.shape_458},{t:this.shape_339,p:{x:495.8,y:118.8}},{t:this.shape_457},{t:this.shape_190,p:{x:508.7,y:119.8}},{t:this.shape_189,p:{x:513.1,y:119.7}},{t:this.shape_188,p:{x:517.5,y:118.6}},{t:this.shape_456},{t:this.shape_184,p:{x:527.1,y:119.7}},{t:this.shape_183,p:{x:532.9,y:119.8}},{t:this.shape_455,p:{x:540.9,y:119.7}},{t:this.shape_454,p:{x:546.7,y:119.8}},{t:this.shape_182,p:{x:552.5,y:119.8}},{t:this.shape_181,p:{x:558.6,y:119.7}},{t:this.shape_180,p:{x:490.7,y:132.2}},{t:this.shape_453},{t:this.shape_178,p:{x:502.3,y:132.3}},{t:this.shape_177,p:{x:512.1,y:132.1}},{t:this.shape_452,p:{x:516.6,y:133.2}},{t:this.shape_175,p:{x:521.7,y:132.2}},{t:this.shape_174,p:{x:525.6,y:132.1}},{t:this.shape_451,p:{x:529.2,y:133.2}},{t:this.shape_172,p:{x:533.9,y:132.2}},{t:this.shape_171,p:{x:542.4,y:133.2}},{t:this.shape_170,p:{x:546.8,y:132.1}},{t:this.shape_450,p:{x:551.2,y:133.2}},{t:this.shape_168,p:{x:557.1,y:133.2}},{t:this.shape_167,p:{x:563.7,y:133.2}},{t:this.shape_166,p:{x:608.1,y:146.7}},{t:this.shape_186,p:{x:612.2,y:146.6}},{t:this.shape_164,p:{x:616.3,y:145.5}},{t:this.shape_449},{t:this.shape_162,p:{x:625.7,y:147.7}},{t:this.shape_353,p:{x:631.7,y:146.7}},{t:this.shape_119,p:{x:425,y:161.9}},{t:this.shape_448},{t:this.shape_447,p:{x:433.6,y:158.6}},{t:this.shape_156,p:{x:437.9,y:159.8}},{t:this.shape_446},{t:this.shape_371,p:{x:446.9,y:159.8}},{t:this.shape_445,p:{x:449.7,y:159.8}},{t:this.shape_444,p:{x:454.5,y:159.8}},{t:this.shape_443,p:{x:461.7,y:158.6}},{t:this.shape_442},{t:this.shape_268,p:{x:471.6,y:158.8}},{t:this.shape_143,p:{x:476.7,y:159.8}},{t:this.shape_441,p:{x:481.7,y:159.8}},{t:this.shape_440,p:{x:489.8,y:159.8}},{t:this.shape_439,p:{x:494,y:158.6}},{t:this.shape_131,p:{x:497.6,y:160.1}},{t:this.shape_347,p:{x:501.7,y:159.8}},{t:this.shape_438,p:{x:505.5,y:159.8}},{t:this.shape_437,p:{x:509.3,y:158.6}},{t:this.shape_334,p:{x:514.5,y:159.8}},{t:this.shape_53,p:{x:518.1,y:159.8}},{t:this.shape_436,p:{x:522.1,y:158.6}},{t:this.shape_435,p:{x:526.8,y:159.9}},{t:this.shape_330,p:{x:531.5,y:159.8}},{t:this.shape_278,p:{x:538.5,y:159.8}},{t:this.shape_434},{t:this.shape_328,p:{x:547.8,y:159.8}},{t:this.shape_37,p:{x:551.9,y:159.8}},{t:this.shape_433,p:{x:560.6,y:159.8}},{t:this.shape_432,p:{x:564.8,y:158.6}},{t:this.shape_60,p:{x:567.6,y:159.8}},{t:this.shape_321,p:{x:570.8,y:159.8}},{t:this.shape_327,p:{x:575,y:159.8}},{t:this.shape_108,p:{x:579.6,y:159.8}},{t:this.shape_221,p:{x:584.7,y:159.8}},{t:this.shape_431,p:{x:593.5,y:159.8}},{t:this.shape_430,p:{x:597.7,y:158.6}},{t:this.shape_144,p:{x:602,y:159.8}},{t:this.shape_325,p:{x:607.9,y:159.8}},{t:this.shape_212,p:{x:613.6,y:159.8}},{t:this.shape_429,p:{x:621.9,y:159.8}},{t:this.shape_428,p:{x:627.4,y:159.8}},{t:this.shape_103,p:{x:632.7,y:159.8}},{t:this.shape_316,p:{x:429.2,y:173}},{t:this.shape_219,p:{x:433.9,y:171.7}},{t:this.shape_427,p:{x:436.7,y:172.9}},{t:this.shape_309,p:{x:439.9,y:173}},{t:this.shape_426},{t:this.shape_213,p:{x:447.5,y:171.7}},{t:this.shape_78,p:{x:451.1,y:173.2}},{t:this.shape_160,p:{x:459.8,y:172.9}},{t:this.shape_425,p:{x:465.3,y:173}},{t:this.shape_83,p:{x:469.7,y:172.9}},{t:this.shape_217,p:{x:474.8,y:173}},{t:this.shape_101,p:{x:479.7,y:172}},{t:this.shape_424,p:{x:488,y:172.9}},{t:this.shape_154,p:{x:492.2,y:171.7}},{t:this.shape_423,p:{x:495.7,y:173}},{t:this.shape_50,p:{x:500.8,y:173}},{t:this.shape_301,p:{x:504.7,y:173}},{t:this.shape_147,p:{x:508.9,y:172.9}},{t:this.shape_422,p:{x:517.7,y:172.9}},{t:this.shape_135,p:{x:523.7,y:172.9}},{t:this.shape_421,p:{x:530.2,y:173}},{t:this.shape_420,p:{x:538.8,y:173.9}},{t:this.shape_419,p:{x:543.8,y:173}},{t:this.shape_31,p:{x:551.2,y:172}},{t:this.shape_299,p:{x:554.8,y:173}},{t:this.shape_322,p:{x:558.6,y:173}},{t:this.shape_66,p:{x:563,y:172.9}},{t:this.shape_130,p:{x:571,y:172.9}},{t:this.shape_418,p:{x:576.2,y:173}},{t:this.shape_417,p:{x:584.4,y:172.9}},{t:this.shape_129,p:{x:590.4,y:172.9}},{t:this.shape_16,p:{x:595.6,y:172}},{t:this.shape_218,p:{x:601.5,y:173}},{t:this.shape_416,p:{x:609,y:174}},{t:this.shape_215,p:{x:611.4,y:173}},{t:this.shape_287,p:{x:615,y:172.9}},{t:this.shape_155,p:{x:621.2,y:173}},{t:this.shape_304,p:{x:627,y:173}},{t:this.shape_122,p:{x:632.3,y:172.9}},{t:this.shape_415,p:{x:424.3,y:188.9}},{t:this.shape_28,p:{x:428.8,y:186.1}},{t:this.shape_104,p:{x:434.6,y:186.1}},{t:this.shape_414,p:{x:443.3,y:186.1}},{t:this.shape_149,p:{x:449.7,y:186.2}},{t:this.shape_120,p:{x:455.9,y:186.1}},{t:this.shape_413,p:{x:462.6,y:187.1}},{t:this.shape_158,p:{x:465.1,y:186.1}},{t:this.shape_111,p:{x:468.8,y:186.1}},{t:this.shape_291,p:{x:473.6,y:185.1}},{t:this.shape_133,p:{x:477.3,y:184.9}},{t:this.shape_281,p:{x:482.7,y:188.9}},{t:this.shape_412,p:{x:487.1,y:186.1}},{t:this.shape_126,p:{x:491.3,y:184.9}},{t:this.shape_65,p:{x:495.4,y:186.1}},{t:this.shape_117,p:{x:499.8,y:184.9}},{t:this.shape_102,p:{x:504,y:186.1}},{t:this.shape_411,p:{x:511,y:187.1}},{t:this.shape_317,p:{x:515.1,y:186.1}},{t:this.shape_48,p:{x:523.6,y:186.1}},{t:this.shape_95,p:{x:529.2,y:186.1}},{t:this.shape_288,p:{x:535.1,y:186.1}},{t:this.shape_98,p:{x:540.5,y:186.1}},{t:this.shape_59,p:{x:547.4,y:188.2}},{t:this.shape_150,p:{x:551.8,y:186.1}},{t:this.shape_109,p:{x:556,y:184.9}},{t:this.shape_267,p:{x:559.6,y:186.1}},{t:this.shape_159,p:{x:565.2,y:186.1}},{t:this.shape_91,p:{x:569.6,y:184.9}},{t:this.shape_87,p:{x:572,y:184.9}},{t:this.shape_45,p:{x:575.1,y:186.1}},{t:this.shape_93,p:{x:580.3,y:186.1}},{t:this.shape_410},{t:this.shape_70,p:{x:594.7,y:185.1}},{t:this.shape_76,p:{x:598.4,y:184.9}},{t:this.shape_89,p:{x:602.6,y:186.1}},{t:this.shape_409},{t:this.shape_94,p:{x:616.6,y:186.1}},{t:this.shape_270,p:{x:621.6,y:186.1}},{t:this.shape_408},{t:this.shape_75,p:{x:632.6,y:186.1}},{t:this.shape_118,p:{x:449.4,y:199.2}},{t:this.shape_110,p:{x:454.6,y:198.3}},{t:this.shape_152,p:{x:458.2,y:199.3}},{t:this.shape_407,p:{x:462.3,y:199.2}},{t:this.shape_406,p:{x:470.6,y:199.5}},{t:this.shape_29,p:{x:474.7,y:198}},{t:this.shape_23,p:{x:478.7,y:199.3}},{t:this.shape_145,p:{x:482.6,y:199.3}},{t:this.shape_405,p:{x:486.7,y:199.2}},{t:this.shape_39,p:{x:494,y:202.1}},{t:this.shape_139,p:{x:497.8,y:199.2}},{t:this.shape_74,p:{x:503.6,y:199.2}},{t:this.shape_404,p:{x:509.5,y:199.3}},{t:this.shape_100,p:{x:518,y:199.2}},{t:this.shape_123,p:{x:523.2,y:198.3}},{t:this.shape_127,p:{x:526.9,y:199.3}},{t:this.shape_403,p:{x:530.5,y:199.5}},{t:this.shape_402,p:{x:538.4,y:198.3}},{t:this.shape_115,p:{x:544.3,y:199.3}},{t:this.shape_81,p:{x:553.6,y:199.2}},{t:this.shape_27,p:{x:557.8,y:198}},{t:this.shape_88,p:{x:562,y:199.2}},{t:this.shape_96,p:{x:566.2,y:199.3}},{t:this.shape_58,p:{x:569.7,y:198.3}},{t:this.shape_61,p:{x:575,y:199.3}},{t:this.shape_77,p:{x:580.8,y:199.2}},{t:this.shape_35,p:{x:589.5,y:199.3}},{t:this.shape_85,p:{x:593.4,y:199.3}},{t:this.shape_71,p:{x:597.7,y:199.2}},{t:this.shape_25,p:{x:604.7,y:198}},{t:this.shape_114,p:{x:608.2,y:199.3}},{t:this.shape_401,p:{x:614.5,y:200.3}},{t:this.shape_266,p:{x:618.1,y:199.5}},{t:this.shape_79,p:{x:622.2,y:199.3}},{t:this.shape_400,p:{x:626.5,y:199.3}},{t:this.shape_15,p:{x:632.3,y:199.2}},{t:this.shape_33,p:{x:451.7,y:214.5}},{t:this.shape_399,p:{x:455.9,y:213.4}},{t:this.shape_2,p:{x:461.6,y:212.4}},{t:this.shape_99,p:{x:468,y:212.5}},{t:this.shape_113,p:{x:474.4,y:212.4}},{t:this.shape_398},{t:this.shape_247,p:{x:487.7,y:212.4}},{t:this.shape_20,p:{x:493,y:212.4}},{t:this.shape_69,p:{x:501.4,y:212.4}},{t:this.shape_24,p:{x:505.6,y:211.2}},{t:this.shape_17,p:{x:508.7,y:212.4}},{t:this.shape_18,p:{x:512.1,y:211.2}},{t:this.shape_67,p:{x:516.8,y:212.5}},{t:this.shape_397},{t:this.shape_3,p:{x:531.3,y:211.4}},{t:this.shape_64,p:{x:534.9,y:212.4}},{t:this.shape_90,p:{x:538.4,y:212.4}},{t:this.shape_6,p:{x:543.8,y:212.4}},{t:this.shape_41,p:{x:550.8,y:212.4}},{t:this.shape_72,p:{x:554.7,y:212.4}},{t:this.shape_396,p:{x:561.6,y:215.2}},{t:this.shape_38,p:{x:564.2,y:212.4}},{t:this.shape_8,p:{x:568.3,y:212.4}},{t:this.shape_19,p:{x:573.7,y:211.4}},{t:this.shape_13,p:{x:577.3,y:212.4}},{t:this.shape_259,p:{x:580.9,y:212.7}},{t:this.shape_47,p:{x:586,y:211.4}},{t:this.shape_43,p:{x:594.3,y:212.4}},{t:this.shape_21,p:{x:600.2,y:212.4}},{t:this.shape_7,p:{x:604.9,y:212.4}},{t:this.shape,p:{x:609.1,y:212.4}},{t:this.shape_395,p:{x:615.8,y:213.4}},{t:this.shape_313,p:{x:619.9,y:212.4}},{t:this.shape_394,p:{x:625.1,y:212.4}},{t:this.shape_393,p:{x:629.7,y:212.4}},{t:this.shape_4,p:{x:634.1,y:212.4}}]},1).to({state:[{t:this.shape_546},{t:this.instance_4},{t:this.instance,p:{x:467.8}},{t:this.shape_545},{t:this.shape_544,p:{x:433.2,y:72.2}},{t:this.shape_287,p:{x:436.8,y:72.2}},{t:this.shape_391,p:{x:440.8,y:71}},{t:this.shape_543,p:{x:444.8,y:72.2}},{t:this.shape_16,p:{x:452.5,y:71.2}},{t:this.shape_542},{t:this.shape_228,p:{x:464.9,y:72.2}},{t:this.shape_461,p:{x:469.4,y:72.2}},{t:this.shape_186,p:{x:474.8,y:72.2}},{t:this.shape_225,p:{x:480.4,y:72.2}},{t:this.shape_381,p:{x:486.2,y:72.2}},{t:this.shape_223,p:{x:495.1,y:72.2}},{t:this.shape_469,p:{x:501.8,y:72.3}},{t:this.shape_373,p:{x:426.1,y:85.6}},{t:this.shape_541},{t:this.shape_375,p:{x:438,y:85.7}},{t:this.shape_430,p:{x:441.9,y:84.4}},{t:this.shape_105,p:{x:445.5,y:85.6}},{t:this.shape_384,p:{x:449.5,y:85.7}},{t:this.shape_540,p:{x:453.7,y:85.7}},{t:this.shape_352,p:{x:462.4,y:85.6}},{t:this.shape_539,p:{x:467.7,y:85.6}},{t:this.shape_219,p:{x:471.7,y:84.4}},{t:this.shape_374,p:{x:475.8,y:86.7}},{t:this.shape_369,p:{x:481.3,y:85.7}},{t:this.shape_202,p:{x:488.5,y:85.7}},{t:this.shape_210,p:{x:491.6,y:86.7}},{t:this.shape_209,p:{x:495.9,y:85.6}},{t:this.shape_208,p:{x:500.6,y:85.7}},{t:this.shape_538,p:{x:505.1,y:85.7}},{t:this.shape_206,p:{x:432.4,y:98.1}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_366,p:{x:448.8,y:98.1}},{t:this.shape_462,p:{x:456.4,y:99.1}},{t:this.shape_535},{t:this.shape_169,p:{x:467.3,y:99.1}},{t:this.shape_199,p:{x:471.4,y:98}},{t:this.shape_534},{t:this.shape_197,p:{x:479.2,y:98}},{t:this.shape_196,p:{x:486.5,y:99.1}},{t:this.shape_533},{t:this.shape_532},{t:this.shape_191,p:{x:433.8,y:111.6}},{t:this.shape_531},{t:this.shape_190,p:{x:446.5,y:112.6}},{t:this.shape_189,p:{x:450.9,y:112.5}},{t:this.shape_188,p:{x:455.3,y:111.4}},{t:this.shape_187,p:{x:459.6,y:113.6}},{t:this.shape_165,p:{x:464.9,y:112.5}},{t:this.shape_530,p:{x:470.7,y:112.6}},{t:this.shape_455,p:{x:478.7,y:112.5}},{t:this.shape_529},{t:this.shape_182,p:{x:490.3,y:112.6}},{t:this.shape_181,p:{x:496.4,y:112.5}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_178,p:{x:440.1,y:125.1}},{t:this.shape_177,p:{x:449.9,y:124.9}},{t:this.shape_452,p:{x:454.4,y:126}},{t:this.shape_175,p:{x:459.5,y:125}},{t:this.shape_174,p:{x:463.4,y:124.9}},{t:this.shape_526,p:{x:467,y:126}},{t:this.shape_172,p:{x:471.7,y:125}},{t:this.shape_171,p:{x:480.2,y:126}},{t:this.shape_170,p:{x:484.6,y:124.9}},{t:this.shape_450,p:{x:489,y:126}},{t:this.shape_168,p:{x:494.9,y:126}},{t:this.shape_167,p:{x:501.5,y:126}},{t:this.shape_166,p:{x:550.4,y:139.5}},{t:this.shape_184,p:{x:554.5,y:139.4}},{t:this.shape_164,p:{x:558.7,y:138.3}},{t:this.shape_525},{t:this.shape_162,p:{x:568.1,y:140.5}},{t:this.shape_524,p:{x:574}},{t:this.shape_523,p:{x:360.7,y:152.6}},{t:this.shape_522,p:{x:365.8,y:152.6}},{t:this.shape_377,p:{x:369,y:152.6}},{t:this.shape_331,p:{x:373.1,y:152.6}},{t:this.shape_521},{t:this.shape_285,p:{x:385,y:152.6}},{t:this.shape_349,p:{x:393.5,y:152.6}},{t:this.shape_520,p:{x:398.8,y:152.6}},{t:this.shape_519},{t:this.shape_518,p:{x:410.2,y:152.6}},{t:this.shape_517},{t:this.shape_345,p:{x:422.3,y:152.6}},{t:this.shape_516,p:{x:428.1,y:152.6}},{t:this.shape_327,p:{x:434.2,y:152.6}},{t:this.shape_515,p:{x:442,y:152.6}},{t:this.shape_473,p:{x:448.3,y:152.7}},{t:this.shape_325,p:{x:454.7,y:152.6}},{t:this.shape_418,p:{x:459.7,y:152.6}},{t:this.shape_412,p:{x:467.8,y:152.6}},{t:this.shape_213,p:{x:472,y:151.4}},{t:this.shape_372,p:{x:474.8,y:152.6}},{t:this.shape_514},{t:this.shape_435,p:{x:486.7,y:152.7}},{t:this.shape_513,p:{x:493.1,y:152.6}},{t:this.shape_512,p:{x:500.4,y:155.4}},{t:this.shape_329,p:{x:504.8,y:152.6}},{t:this.shape_429,p:{x:510.3,y:152.6}},{t:this.shape_511,p:{x:514.5,y:152.6}},{t:this.shape_376,p:{x:517.7,y:152.6}},{t:this.shape_323,p:{x:521.9,y:152.6}},{t:this.shape_371,p:{x:528.9,y:152.6}},{t:this.shape_73,p:{x:532.5,y:152.6}},{t:this.shape_347,p:{x:536.5,y:152.6}},{t:this.shape_319,p:{x:540.7,y:152.6}},{t:this.shape_132,p:{x:548.6,y:151.6}},{t:this.shape_421,p:{x:554.5,y:152.7}},{t:this.shape_300,p:{x:563.8,y:152.6}},{t:this.shape_154,p:{x:568,y:151.4}},{t:this.shape_133,p:{x:570.4,y:151.4}},{t:this.shape_306,p:{x:574.7,y:152.6}},{t:this.shape_294,p:{x:378.5,y:165.7}},{t:this.shape_510},{t:this.shape_304,p:{x:390.2,y:165.8}},{t:this.shape_126,p:{x:393.7,y:164.5}},{t:this.shape_70,p:{x:397.2,y:164.8}},{t:this.shape_278,p:{x:402.6,y:165.7}},{t:this.shape_395,p:{x:409.6,y:166.8}},{t:this.shape_220,p:{x:413.7,y:165.7}},{t:this.shape_370,p:{x:418.9,y:165.8}},{t:this.shape_277,p:{x:423.4,y:165.7}},{t:this.shape_509},{t:this.shape_425,p:{x:434.2,y:165.8}},{t:this.shape_302,p:{x:439.8,y:165.7}},{t:this.shape_311,p:{x:445.7,y:165.8}},{t:this.shape_150,p:{x:454.2,y:165.7}},{t:this.shape_334,p:{x:458.4,y:165.8}},{t:this.shape_117,p:{x:460.9,y:164.5}},{t:this.shape_508,p:{x:466.3,y:167.9}},{t:this.shape_264,p:{x:469.9,y:164.8}},{t:this.shape_221,p:{x:475.4,y:165.7}},{t:this.shape_330,p:{x:479.6,y:165.8}},{t:this.shape_305,p:{x:483.7,y:165.8}},{t:this.shape_148,p:{x:489.2,y:165.7}},{t:this.shape_212,p:{x:497.7,y:165.7}},{t:this.shape_109,p:{x:501.9,y:164.5}},{t:this.shape_286,p:{x:506.1,y:165.7}},{t:this.shape_328,p:{x:513.1,y:165.8}},{t:this.shape_139,p:{x:516.7,y:165.7}},{t:this.shape_321,p:{x:520.7,y:165.8}},{t:this.shape_507,p:{x:524.9,y:165.8}},{t:this.shape_506,p:{x:531.9,y:168.6}},{t:this.shape_293,p:{x:535.4,y:165.8}},{t:this.shape_217,p:{x:540.1,y:165.8}},{t:this.shape_313,p:{x:545.7,y:165.7}},{t:this.shape_310,p:{x:553,y:167.9}},{t:this.shape_118,p:{x:557.4,y:165.7}},{t:this.shape_91,p:{x:561.6,y:164.5}},{t:this.shape_114,p:{x:565.1,y:165.8}},{t:this.shape_505,p:{x:569.8,y:165.7}},{t:this.shape_322,p:{x:575.1,y:165.8}},{t:this.shape_119,p:{x:374.5,y:181}},{t:this.shape_504},{t:this.shape_87,p:{x:383.6,y:177.7}},{t:this.shape_143,p:{x:387.5,y:178.9}},{t:this.shape_279,p:{x:396,y:178.9}},{t:this.shape_503},{t:this.shape_229,p:{x:408.2,y:178.9}},{t:this.shape_120,p:{x:413.6,y:178.9}},{t:this.shape_502},{t:this.shape_111,p:{x:428.1,y:178.9}},{t:this.shape_44,p:{x:433.5,y:178.9}},{t:this.shape_309,p:{x:437.9,y:178.9}},{t:this.shape_318,p:{x:441.5,y:179.2}},{t:this.shape_301,p:{x:448.4,y:178.9}},{t:this.shape_53,p:{x:451.9,y:178.9}},{t:this.shape_299,p:{x:455.9,y:178.9}},{t:this.shape_501,p:{x:460.2,y:178.9}},{t:this.shape_160,p:{x:468.8,y:178.9}},{t:this.shape_82,p:{x:474.7,y:178.9}},{t:this.shape_500},{t:this.shape_78,p:{x:485,y:179.2}},{t:this.shape_499},{t:this.shape_498,p:{x:500,y:178.9}},{t:this.shape_147,p:{x:508.6,y:178.9}},{t:this.shape_288,p:{x:514.5,y:178.9}},{t:this.shape_497,p:{x:519.4,y:178.9}},{t:this.shape_257,p:{x:524.9,y:178.9}},{t:this.shape_281,p:{x:532.2,y:181.7}},{t:this.shape_26,p:{x:535.9,y:178.9}},{t:this.shape_138,p:{x:541.5,y:178.9}},{t:this.shape_496},{t:this.shape_135,p:{x:552.9,y:178.9}},{t:this.shape_495},{t:this.shape_76,p:{x:566.4,y:177.7}},{t:this.shape_98,p:{x:570.3,y:178.9}},{t:this.shape_134,p:{x:575.2,y:177.9}},{t:this.shape_494},{t:this.shape_215,p:{x:363.9,y:192.1}},{t:this.shape_80,p:{x:367.3,y:191.1}},{t:this.shape_493,p:{x:371.8,y:192.1}},{t:this.shape_492,p:{x:376.4,y:192}},{t:this.shape_130,p:{x:382.6,y:192}},{t:this.shape_268,p:{x:390.6,y:191.1}},{t:this.shape_108,p:{x:394.9,y:192}},{t:this.shape_240,p:{x:399.2,y:191.1}},{t:this.shape_83,p:{x:403.5,y:192}},{t:this.shape_491},{t:this.shape_490,p:{x:417.4,y:192.1}},{t:this.shape_158,p:{x:422.1,y:192.1}},{t:this.shape_236,p:{x:424.6,y:190.8}},{t:this.shape_156,p:{x:428.8,y:192}},{t:this.shape_129,p:{x:434.8,y:192}},{t:this.shape_489,p:{x:443.3,y:191.1}},{t:this.shape_180,p:{x:448.6,y:191.1}},{t:this.shape_58,p:{x:456.7,y:191.1}},{t:this.shape_218,p:{x:462.6,y:192.1}},{t:this.shape_100,p:{x:471.9,y:192}},{t:this.shape_235,p:{x:476.1,y:190.8}},{t:this.shape_445,p:{x:478.9,y:192}},{t:this.shape_152,p:{x:482.1,y:192.1}},{t:this.shape_101,p:{x:485.6,y:191.1}},{t:this.shape_153,p:{x:490.9,y:192.1}},{t:this.shape_116,p:{x:496.5,y:192.1}},{t:this.shape_81,p:{x:505,y:192}},{t:this.shape_233,p:{x:509.2,y:190.8}},{t:this.shape_144,p:{x:513.5,y:192}},{t:this.shape_84,p:{x:518,y:192}},{t:this.shape_145,p:{x:521.2,y:192.1}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_231,p:{x:538.9,y:190.8}},{t:this.shape_94,p:{x:542.9,y:192}},{t:this.shape_122,p:{x:548.6,y:192}},{t:this.shape_95,p:{x:557.4,y:192}},{t:this.shape_486,p:{x:563.3,y:192.1}},{t:this.shape_50,p:{x:569.6,y:192.1}},{t:this.shape_75,p:{x:575,y:192}},{t:this.shape_485,p:{x:379.7,y:208}},{t:this.shape_69,p:{x:384.1,y:205.2}},{t:this.shape_155,p:{x:390.6,y:205.3}},{t:this.shape_97,p:{x:399.2,y:205.2}},{t:this.shape_66,p:{x:403.8,y:205.2}},{t:this.shape_484,p:{x:410.1,y:208}},{t:this.shape_102,p:{x:414.6,y:205.2}},{t:this.shape_483,p:{x:420.4,y:205.2}},{t:this.shape_127,p:{x:424.8,y:205.2}},{t:this.shape_137,p:{x:428.9,y:205.2}},{t:this.shape_230,p:{x:435.8,y:204}},{t:this.shape_482},{t:this.shape_96,p:{x:443.7,y:205.2}},{t:this.shape_30,p:{x:446.2,y:204}},{t:this.shape_396,p:{x:451.6,y:208}},{t:this.shape_93,p:{x:456,y:205.2}},{t:this.shape_481},{t:this.shape_90,p:{x:467.7,y:205.2}},{t:this.shape_89,p:{x:473.1,y:205.2}},{t:this.shape_32,p:{x:480.6,y:201.9}},{t:this.shape_258,p:{x:484.7,y:206.2}},{t:this.shape_29,p:{x:488.7,y:204}},{t:this.shape_63,p:{x:492.8,y:205.2}},{t:this.shape_34,p:{x:497.3,y:205.2}},{t:this.shape_22,p:{x:501,y:201.9}},{t:this.shape_149,p:{x:506.3,y:205.3}},{t:this.shape_88,p:{x:515.6,y:205.2}},{t:this.shape_47,p:{x:520.8,y:204.2}},{t:this.shape_45,p:{x:525.1,y:205.2}},{t:this.shape_8,p:{x:530.1,y:205.2}},{t:this.shape_85,p:{x:537.2,y:205.2}},{t:this.shape_10,p:{x:540.8,y:205.2}},{t:this.shape_79,p:{x:544.8,y:205.2}},{t:this.shape_62,p:{x:549,y:205.2}},{t:this.shape_59,p:{x:556.1,y:207.3}},{t:this.shape_27,p:{x:558.7,y:204}},{t:this.shape_480,p:{x:561.5,y:205.2}},{t:this.shape_25,p:{x:564.7,y:204}},{t:this.shape_42,p:{x:568.8,y:205.2}},{t:this.shape_77,p:{x:574.7,y:205.2}},{t:this.shape_33,p:{x:422.4,y:220.5}},{t:this.shape_123,p:{x:426,y:217.4}},{t:this.shape_64,p:{x:429.7,y:218.4}},{t:this.shape_48,p:{x:433.4,y:218.4}},{t:this.shape_17,p:{x:437.9,y:218.3}},{t:this.shape_20,p:{x:445.3,y:218.4}},{t:this.shape_41,p:{x:449.1,y:218.4}},{t:this.shape_37,p:{x:453.2,y:218.4}},{t:this.shape_43,p:{x:461.9,y:218.3}},{t:this.shape_24,p:{x:466.1,y:217.1}},{t:this.shape_479,p:{x:470.3,y:218.4}},{t:this.shape_18,p:{x:474.2,y:217.1}},{t:this.shape_72,p:{x:478.2,y:218.3}},{t:this.shape_74,p:{x:483.9,y:218.3}},{t:this.shape_478,p:{x:489.7,y:218.3}},{t:this.shape_38,p:{x:496.9,y:218.4}},{t:this.shape_3,p:{x:500.3,y:217.4}},{t:this.shape_115,p:{x:506.2,y:218.4}},{t:this.shape_71,p:{x:515.5,y:218.3}},{t:this.shape_2,p:{x:521.5,y:218.3}},{t:this.shape_23,p:{x:527.3,y:218.4}},{t:this.shape_99,p:{x:533.4,y:218.4}},{t:this.shape_269,p:{x:539.8,y:218.3}},{t:this.shape_15,p:{x:545.9,y:218.3}},{t:this.shape_13,p:{x:550.1,y:218.4}},{t:this.shape_251,p:{x:557.1,y:218.4}},{t:this.shape_7,p:{x:561,y:218.4}},{t:this.shape_6,p:{x:565.3,y:218.3}},{t:this.shape_67,p:{x:571.7,y:218.4}},{t:this.shape_4,p:{x:576.4,y:218.4}}]},1).to({state:[{t:this.shape_622},{t:this.instance_5},{t:this.instance,p:{x:525.8}},{t:this.shape_621},{t:this.shape_620,p:{x:481.2,y:72.2}},{t:this.shape_619,p:{x:483.7,y:72.2}},{t:this.shape_618},{t:this.shape_294,p:{x:493.9,y:72.2}},{t:this.shape_617,p:{x:502.7,y:72.2}},{t:this.shape_616},{t:this.shape_332,p:{x:514,y:72.2}},{t:this.shape_286,p:{x:519.7,y:72.2}},{t:this.shape_615},{t:this.shape_228,p:{x:532.9,y:72.2}},{t:this.shape_201,p:{x:537.4,y:72.2}},{t:this.shape_184,p:{x:542.8,y:72.2}},{t:this.shape_382,p:{x:548.4,y:72.2}},{t:this.shape_381,p:{x:554.2,y:72.2}},{t:this.shape_614},{t:this.shape_380,p:{x:569.8,y:72.3}},{t:this.shape_508,p:{x:454.2,y:87.8}},{t:this.shape_278,p:{x:458.6,y:85.6}},{t:this.shape_613,p:{x:462.6,y:88.8}},{t:this.shape_612},{t:this.shape_611,p:{x:468.4,y:89.2}},{t:this.shape_308,p:{x:470.2,y:85.6}},{t:this.shape_610},{t:this.shape_609,p:{x:474.1,y:85.7}},{t:this.shape_375,p:{x:478.2,y:85.7}},{t:this.shape_465,p:{x:485,y:84.4}},{t:this.shape_608,p:{x:489.7,y:85.7}},{t:this.shape_607},{t:this.shape_374,p:{x:496,y:86.7}},{t:this.shape_28,p:{x:501.7,y:85.7}},{t:this.shape_606},{t:this.shape_605,p:{x:511.9,y:85.7}},{t:this.shape_221,p:{x:518.9,y:85.6}},{t:this.shape_303,p:{x:524.6,y:85.6}},{t:this.shape_604},{t:this.shape_603,p:{x:528.5,y:85.7}},{t:this.shape_369,p:{x:532.7,y:85.7}},{t:this.shape_447,p:{x:539.4,y:84.4}},{t:this.shape_273,p:{x:543.5,y:85.6}},{t:this.shape_602,p:{x:547.9,y:85.7}},{t:this.shape_108,p:{x:551,y:85.6}},{t:this.shape_601,p:{x:554.3,y:85.7}},{t:this.shape_600},{t:this.shape_202,p:{x:564.8,y:85.7}},{t:this.shape_223,p:{x:569.6,y:85.6}},{t:this.shape_599,p:{x:574,y:84.5}},{t:this.shape_195,p:{x:577.2,y:85.6}},{t:this.shape_209,p:{x:582.2,y:85.6}},{t:this.shape_208,p:{x:586.9,y:85.7}},{t:this.shape_538,p:{x:591.3,y:85.7}},{t:this.shape_206,p:{x:490.4,y:98.1}},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_462,p:{x:514.4,y:99.1}},{t:this.shape_595},{t:this.shape_169,p:{x:525.3,y:99.1}},{t:this.shape_199,p:{x:529.4,y:98}},{t:this.shape_594},{t:this.shape_197,p:{x:537.2,y:98}},{t:this.shape_196,p:{x:544.5,y:99.1}},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_193,p:{x:497.5,y:111.6}},{t:this.shape_190,p:{x:504.5,y:112.6}},{t:this.shape_189,p:{x:508.9,y:112.5}},{t:this.shape_188,p:{x:513.3,y:111.4}},{t:this.shape_187,p:{x:517.6,y:113.6}},{t:this.shape_590,p:{x:522.9,y:112.5}},{t:this.shape_454,p:{x:528.7,y:112.6}},{t:this.shape_186,p:{x:536.7,y:112.5}},{t:this.shape_589},{t:this.shape_182,p:{x:548.3,y:112.6}},{t:this.shape_181,p:{x:554.4,y:112.5}},{t:this.shape_180,p:{x:486.5,y:125}},{t:this.shape_588},{t:this.shape_178,p:{x:498.1,y:125.1}},{t:this.shape_177,p:{x:507.9,y:124.9}},{t:this.shape_452,p:{x:512.4,y:126}},{t:this.shape_175,p:{x:517.5,y:125}},{t:this.shape_174,p:{x:521.4,y:124.9}},{t:this.shape_587},{t:this.shape_172,p:{x:529.7,y:125}},{t:this.shape_171,p:{x:538.2,y:126}},{t:this.shape_170,p:{x:542.6,y:124.9}},{t:this.shape_450,p:{x:547,y:126}},{t:this.shape_168,p:{x:552.9,y:126}},{t:this.shape_167,p:{x:559.5,y:126}},{t:this.shape_166,p:{x:602.8,y:139.5}},{t:this.shape_455,p:{x:606.9,y:139.4}},{t:this.shape_164,p:{x:611.1,y:138.3}},{t:this.shape_586},{t:this.shape_162,p:{x:620.5,y:140.5}},{t:this.shape_524,p:{x:626.4}},{t:this.shape_298,p:{x:419.7,y:152.6}},{t:this.shape_107,p:{x:424.6,y:151.6}},{t:this.shape_585,p:{x:430.5,y:152.7}},{t:this.shape_151,p:{x:436.2,y:151.6}},{t:this.shape_131,p:{x:443.8,y:152.9}},{t:this.shape_443,p:{x:447.9,y:151.4}},{t:this.shape_83,p:{x:451,y:152.6}},{t:this.shape_212,p:{x:456.2,y:152.6}},{t:this.shape_584,p:{x:463.3,y:155.4}},{t:this.shape_416,p:{x:466,y:153.6}},{t:this.shape_518,p:{x:470,y:152.6}},{t:this.shape_439,p:{x:473.9,y:151.4}},{t:this.shape_113,p:{x:478,y:152.6}},{t:this.shape_192,p:{x:486.7,y:151.7}},{t:this.shape_339,p:{x:491.9,y:151.6}},{t:this.shape_413,p:{x:499,y:153.6}},{t:this.shape_295,p:{x:503,y:152.6}},{t:this.shape_279,p:{x:511.5,y:152.6}},{t:this.shape_437,p:{x:515.7,y:151.4}},{t:this.shape_70,p:{x:519.1,y:151.6}},{t:this.shape_583},{t:this.shape_444,p:{x:529.2,y:152.6}},{t:this.shape_582,p:{x:533.6,y:152.6}},{t:this.shape_411,p:{x:538.8,y:153.6}},{t:this.shape_581,p:{x:541.3,y:152.6}},{t:this.shape_331,p:{x:545.4,y:152.6}},{t:this.shape_66,p:{x:550,y:152.6}},{t:this.shape_425,p:{x:557.5,y:152.6}},{t:this.shape_436,p:{x:561.3,y:151.4}},{t:this.shape_580},{t:this.shape_47,p:{x:570.7,y:151.6}},{t:this.shape_579},{t:this.shape_512,p:{x:583.8,y:155.4}},{t:this.shape_432,p:{x:586.4,y:151.4}},{t:this.shape_478,p:{x:590.5,y:152.6}},{t:this.shape_45,p:{x:595.5,y:152.6}},{t:this.shape_327,p:{x:600.6,y:152.6}},{t:this.shape_430,p:{x:604.5,y:151.4}},{t:this.shape_578,p:{x:609.8,y:152.6}},{t:this.shape_577},{t:this.shape_219,p:{x:618.1,y:151.4}},{t:this.shape_325,p:{x:622.2,y:152.6}},{t:this.shape_232,p:{x:627.3,y:152.6}},{t:this.shape_544,p:{x:425,y:165.8}},{t:this.shape_576,p:{x:428.4,y:164.8}},{t:this.shape_401,p:{x:434.9,y:166.8}},{t:this.shape_213,p:{x:437.3,y:164.5}},{t:this.shape_311,p:{x:441.5,y:165.8}},{t:this.shape_575,p:{x:447.7,y:165.8}},{t:this.shape_506,p:{x:455.3,y:168.6}},{t:this.shape_160,p:{x:459.8,y:165.7}},{t:this.shape_154,p:{x:464,y:164.5}},{t:this.shape_574},{t:this.shape_292,p:{x:473.2,y:165.7}},{t:this.shape_147,p:{x:478.9,y:165.7}},{t:this.shape_384,p:{x:483.1,y:165.8}},{t:this.shape_310,p:{x:488.5,y:167.9}},{t:this.shape_377,p:{x:491.1,y:165.8}},{t:this.shape_573,p:{x:495.3,y:165.8}},{t:this.shape_376,p:{x:500,y:165.8}},{t:this.shape_305,p:{x:504.2,y:165.8}},{t:this.shape_422,p:{x:512.7,y:165.7}},{t:this.shape_133,p:{x:516.9,y:164.5}},{t:this.shape_248,p:{x:521,y:165.7}},{t:this.shape_572},{t:this.shape_571,p:{x:532.9,y:165.8}},{t:this.shape_570},{t:this.shape_371,p:{x:546.4,y:165.8}},{t:this.shape_126,p:{x:548.8,y:164.5}},{t:this.shape_117,p:{x:551.3,y:164.5}},{t:this.shape_156,p:{x:555.5,y:165.7}},{t:this.shape_569,p:{x:562,y:165.8}},{t:this.shape_568,p:{x:571.7,y:165.8}},{t:this.shape_109,p:{x:576.4,y:164.5}},{t:this.shape_17,p:{x:579.5,y:165.7}},{t:this.shape_10,p:{x:584,y:165.7}},{t:this.shape_567},{t:this.shape_217,p:{x:601.3,y:165.8}},{t:this.shape_347,p:{x:605.2,y:165.8}},{t:this.shape_135,p:{x:609.5,y:165.7}},{t:this.shape_334,p:{x:616.5,y:165.8}},{t:this.shape_290,p:{x:620.4,y:165.7}},{t:this.shape_566,p:{x:626.6,y:165.8}},{t:this.shape_415,p:{x:435.3,y:181.7}},{t:this.shape_417,p:{x:439.8,y:178.9}},{t:this.shape_330,p:{x:444,y:178.9}},{t:this.shape_565,p:{x:448.1,y:178.9}},{t:this.shape_564},{t:this.shape_229,p:{x:460.1,y:178.9}},{t:this.shape_281,p:{x:466.9,y:181.7}},{t:this.shape_322,p:{x:470.9,y:178.9}},{t:this.shape_144,p:{x:476.5,y:178.9}},{t:this.shape_498,p:{x:482.4,y:178.9}},{t:this.shape_414,p:{x:490.9,y:178.9}},{t:this.shape_328,p:{x:495.1,y:178.9}},{t:this.shape_91,p:{x:497.6,y:177.7}},{t:this.shape_563,p:{x:502.3,y:179}},{t:this.shape_111,p:{x:511.1,y:178.9}},{t:this.shape_318,p:{x:516,y:179.2}},{t:this.shape_119,p:{x:523.1,y:181}},{t:this.shape_130,p:{x:527.5,y:178.9}},{t:this.shape_293,p:{x:532.5,y:178.9}},{t:this.shape_129,p:{x:537.3,y:178.9}},{t:this.shape_412,p:{x:546.1,y:178.9}},{t:this.shape_321,p:{x:550.3,y:178.9}},{t:this.shape_562,p:{x:554.4,y:178.9}},{t:this.shape_78,p:{x:559.9,y:179.2}},{t:this.shape_473,p:{x:566.3,y:179}},{t:this.shape_122,p:{x:572.8,y:178.9}},{t:this.shape_561,p:{x:578.6,y:178.9}},{t:this.shape_560,p:{x:586.9,y:178.9}},{t:this.shape_62,p:{x:592.7,y:178.9}},{t:this.shape_138,p:{x:598.3,y:178.9}},{t:this.shape_87,p:{x:602.2,y:177.7}},{t:this.shape_102,p:{x:606.4,y:178.9}},{t:this.shape_58,p:{x:611.6,y:177.9}},{t:this.shape_559,p:{x:619.2,y:179.9}},{t:this.shape_76,p:{x:623.2,y:177.7}},{t:this.shape_288,p:{x:627.3,y:178.9}},{t:this.shape_59,p:{x:427.1,y:194.2}},{t:this.shape_558,p:{x:430.8,y:192}},{t:this.shape_309,p:{x:434.8,y:192.1}},{t:this.shape_266,p:{x:438.4,y:192.3}},{t:this.shape_236,p:{x:442.5,y:190.8}},{t:this.shape_435,p:{x:447.2,y:192.1}},{t:this.shape_285,p:{x:453.4,y:192}},{t:this.shape_301,p:{x:460.1,y:192.1}},{t:this.shape_125,p:{x:464.4,y:192.1}},{t:this.shape_235,p:{x:468.4,y:190.8}},{t:this.shape_35,p:{x:472.6,y:192.1}},{t:this.shape_270,p:{x:477.6,y:192}},{t:this.shape_421,p:{x:483.9,y:192.1}},{t:this.shape_395,p:{x:491.4,y:193.1}},{t:this.shape_557,p:{x:495.5,y:192}},{t:this.shape_556},{t:this.shape_277,p:{x:505.1,y:192}},{t:this.shape_150,p:{x:513.6,y:192}},{t:this.shape_233,p:{x:517.8,y:190.8}},{t:this.shape_136,p:{x:521.9,y:192}},{t:this.shape_218,p:{x:528.5,y:192.1}},{t:this.shape_93,p:{x:535,y:192}},{t:this.shape_282,p:{x:540.9,y:192}},{t:this.shape_89,p:{x:549.8,y:192}},{t:this.shape_287,p:{x:555.1,y:192}},{t:this.shape_493,p:{x:559.9,y:192.1}},{t:this.shape_299,p:{x:562.9,y:192.1}},{t:this.shape_159,p:{x:567,y:192}},{t:this.shape_555,p:{x:578.7,y:192.1}},{t:this.shape_214,p:{x:584.5,y:192}},{t:this.shape_148,p:{x:590,y:192}},{t:this.shape_95,p:{x:595.7,y:192}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_264,p:{x:616.2,y:191.1}},{t:this.shape_116,p:{x:621.4,y:192.1}},{t:this.shape_215,p:{x:625.3,y:192.1}},{t:this.shape_552,p:{x:628.1,y:192}},{t:this.shape_88,p:{x:430.9,y:205.2}},{t:this.shape_231,p:{x:435.1,y:204}},{t:this.shape_123,p:{x:438.5,y:204.2}},{t:this.shape_259,p:{x:443.3,y:205.5}},{t:this.shape_143,p:{x:451.7,y:205.2}},{t:this.shape_158,p:{x:455.6,y:205.2}},{t:this.shape_21,p:{x:459.8,y:205.2}},{t:this.shape_304,p:{x:465.6,y:205.2}},{t:this.shape_155,p:{x:471.4,y:205.3}},{t:this.shape_77,p:{x:480.7,y:205.2}},{t:this.shape_263,p:{x:486.6,y:205.2}},{t:this.shape_152,p:{x:490.5,y:205.2}},{t:this.shape_105,p:{x:494.1,y:205.2}},{t:this.shape_145,p:{x:498.1,y:205.2}},{t:this.shape_71,p:{x:505.1,y:205.2}},{t:this.shape_551},{t:this.shape_127,p:{x:515.8,y:205.2}},{t:this.shape_12,p:{x:519.9,y:205.2}},{t:this.shape_550,p:{x:528.3,y:206.2}},{t:this.shape_96,p:{x:532.2,y:205.2}},{t:this.shape_48,p:{x:535.9,y:205.2}},{t:this.shape_120,p:{x:541.2,y:205.2}},{t:this.shape_3,p:{x:546.1,y:204.2}},{t:this.shape_85,p:{x:549.8,y:205.2}},{t:this.shape_118,p:{x:556.8,y:205.2}},{t:this.shape_230,p:{x:561,y:204}},{t:this.shape_549,p:{x:564.6,y:205.2}},{t:this.shape_15,p:{x:570.4,y:205.2}},{t:this.shape_132,p:{x:575.6,y:204.2}},{t:this.shape_319,p:{x:583.8,y:205.2}},{t:this.shape_30,p:{x:587.9,y:204}},{t:this.shape_101,p:{x:591.3,y:204.2}},{t:this.shape_74,p:{x:596.8,y:205.2}},{t:this.shape_428,p:{x:602.6,y:205.2}},{t:this.shape_79,p:{x:609.8,y:205.2}},{t:this.shape_507,p:{x:614,y:205.2}},{t:this.shape_29,p:{x:618.1,y:204}},{t:this.shape,p:{x:622.2,y:205.2}},{t:this.shape_26,p:{x:627.3,y:205.2}},{t:this.shape_64,p:{x:442,y:218.4}},{t:this.shape_44,p:{x:446.1,y:218.3}},{t:this.shape_149,p:{x:452.7,y:218.4}},{t:this.shape_505,p:{x:461.3,y:218.3}},{t:this.shape_115,p:{x:467.6,y:218.4}},{t:this.shape_479,p:{x:474,y:218.4}},{t:this.shape_396,p:{x:478.1,y:221.2}},{t:this.shape_100,p:{x:482.5,y:218.3}},{t:this.shape_20,p:{x:488,y:218.4}},{t:this.shape_251,p:{x:493.5,y:218.4}},{t:this.shape_268,p:{x:501.3,y:217.4}},{t:this.shape_114,p:{x:506,y:218.4}},{t:this.shape_99,p:{x:511.8,y:218.4}},{t:this.shape_98,p:{x:520.8,y:218.3}},{t:this.shape_41,p:{x:524.7,y:218.4}},{t:this.shape_255,p:{x:528.9,y:218.4}},{t:this.shape_90,p:{x:534.6,y:218.4}},{t:this.shape_81,p:{x:542.8,y:218.3}},{t:this.shape_27,p:{x:547,y:217.1}},{t:this.shape_480,p:{x:549.8,y:218.3}},{t:this.shape_50,p:{x:554.5,y:218.4}},{t:this.shape_94,p:{x:559.9,y:218.3}},{t:this.shape_38,p:{x:563.8,y:218.4}},{t:this.shape_32,p:{x:569.6,y:215.1}},{t:this.shape_548},{t:this.shape_13,p:{x:579.1,y:218.4}},{t:this.shape_7,p:{x:581.5,y:218.4}},{t:this.shape_257,p:{x:585.6,y:218.3}},{t:this.shape_6,p:{x:591.8,y:218.3}},{t:this.shape_256,p:{x:600.5,y:218.4}},{t:this.shape_139,p:{x:606.3,y:218.3}},{t:this.shape_75,p:{x:611.8,y:218.3}},{t:this.shape_2,p:{x:617.5,y:218.3}},{t:this.shape_5,p:{x:623.4,y:218.3}},{t:this.shape_22,p:{x:628.3,y:215.1}},{t:this.shape_33,p:{x:559.6,y:233.6}},{t:this.shape_547,p:{x:563.9,y:231.5}},{t:this.shape_4,p:{x:568.6,y:231.5}},{t:this.shape_513,p:{x:572.7,y:231.5}},{t:this.shape_25,p:{x:577.1,y:230.3}},{t:this.shape_261,p:{x:582.5,y:234.3}},{t:this.shape_69,p:{x:586.9,y:231.5}},{t:this.shape_24,p:{x:591.1,y:230.3}},{t:this.shape_522,p:{x:593.9,y:231.5}},{t:this.shape_23,p:{x:598.7,y:231.5}},{t:this.shape_72,p:{x:604.1,y:231.5}},{t:this.shape_43,p:{x:612.6,y:231.5}},{t:this.shape_67,p:{x:619,y:231.6}},{t:this.shape_267,p:{x:624.8,y:231.5}},{t:this.shape_18,p:{x:628.8,y:230.3}}]},1).to({state:[{t:this.shape_688},{t:this.instance_6},{t:this.instance,p:{x:473.8}},{t:this.shape_413,p:{x:444.1,y:75.8}},{t:this.shape_582,p:{x:446.5,y:74.8}},{t:this.shape_44,p:{x:450.6,y:74.8}},{t:this.shape_230,p:{x:455,y:73.6}},{t:this.shape_687},{t:this.shape_581,p:{x:462.9,y:74.8}},{t:this.shape_543,p:{x:466.9,y:74.8}},{t:this.shape_228,p:{x:473.8,y:74.8}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_382,p:{x:489.3,y:74.8}},{t:this.shape_684,p:{x:495.1,y:74.8}},{t:this.shape_223,p:{x:504.1,y:74.8}},{t:this.shape_683},{t:this.shape_578,p:{x:444.8,y:88.3}},{t:this.shape_682,p:{x:448.6,y:88.3}},{t:this.shape_544,p:{x:452.4,y:88.3}},{t:this.shape_473,p:{x:457.1,y:88.3}},{t:this.shape_439,p:{x:464.6,y:87}},{t:this.shape_435,p:{x:469.3,y:88.3}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_462,p:{x:494.2,y:88.3}},{t:this.shape_210,p:{x:497.3,y:89.3}},{t:this.shape_209,p:{x:501.6,y:88.2}},{t:this.shape_208,p:{x:506.3,y:88.3}},{t:this.shape_207,p:{x:510.8,y:88.3}},{t:this.shape_180,p:{x:445.2,y:100.7}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_193,p:{x:462.2,y:100.8}},{t:this.shape_202,p:{x:469.5,y:101.7}},{t:this.shape_676,p:{x:474.3,y:101.7}},{t:this.shape_450,p:{x:480.4,y:101.7}},{t:this.shape_199,p:{x:484.5,y:100.6}},{t:this.shape_675},{t:this.shape_197,p:{x:492.3,y:100.6}},{t:this.shape_168,p:{x:499.6,y:101.7}},{t:this.shape_195,p:{x:505.1,y:101.7}},{t:this.shape_674},{t:this.shape_673},{t:this.shape_192,p:{x:449.8,y:114.2}},{t:this.shape_672},{t:this.shape_190,p:{x:462.4,y:115.2}},{t:this.shape_189,p:{x:466.8,y:115.1}},{t:this.shape_164,p:{x:471.2,y:114}},{t:this.shape_162,p:{x:475.5,y:116.2}},{t:this.shape_226,p:{x:480.8,y:115.1}},{t:this.shape_671},{t:this.shape_165,p:{x:494.6,y:115.1}},{t:this.shape_530,p:{x:500.4,y:115.2}},{t:this.shape_670,p:{x:506.2,y:115.2}},{t:this.shape_181,p:{x:512.3,y:115.1}},{t:this.shape_463,p:{x:444.6,y:127.6}},{t:this.shape_178,p:{x:450.4,y:127.7}},{t:this.shape_177,p:{x:460.3,y:127.5}},{t:this.shape_669,p:{x:464.7,y:128.6}},{t:this.shape_175,p:{x:469.8,y:127.6}},{t:this.shape_174,p:{x:473.8,y:127.5}},{t:this.shape_526,p:{x:477.3,y:128.6}},{t:this.shape_172,p:{x:482.1,y:127.6}},{t:this.shape_171,p:{x:490.5,y:128.6}},{t:this.shape_170,p:{x:494.9,y:127.5}},{t:this.shape_668,p:{x:499.4,y:128.6}},{t:this.shape_667,p:{x:505.2,y:128.6}},{t:this.shape_167,p:{x:511.8,y:128.6}},{t:this.shape_166,p:{x:557.3,y:142.1}},{t:this.shape_186,p:{x:561.4,y:142}},{t:this.shape_666,p:{x:565.6,y:140.9}},{t:this.shape_665,p:{x:569.3,y:142.1}},{t:this.shape_664,p:{x:575,y:143.1}},{t:this.shape_663,p:{x:580.9,y:142.1}},{t:this.shape_440,p:{x:381.1,y:155.2}},{t:this.shape_662,p:{x:387,y:155.2}},{t:this.shape_661,p:{x:390.7,y:151.9}},{t:this.shape_611,p:{x:392.6,y:158.7}},{t:this.shape_660,p:{x:393.8,y:155.2}},{t:this.shape_659},{t:this.shape_501,p:{x:399.4,y:155.2}},{t:this.shape_658},{t:this.shape_657,p:{x:405.1,y:156.2}},{t:this.shape_421,p:{x:414,y:155.3}},{t:this.shape_613,p:{x:418.5,y:158.4}},{t:this.shape_656,p:{x:420.4,y:155.2}},{t:this.shape_433,p:{x:429,y:155.2}},{t:this.shape_218,p:{x:435.4,y:155.3}},{t:this.shape_341,p:{x:441.6,y:155.2}},{t:this.shape_655},{t:this.shape_654,p:{x:455.1,y:154.2}},{t:this.shape_411,p:{x:462.2,y:156.2}},{t:this.shape_336,p:{x:466.2,y:155.2}},{t:this.shape_653,p:{x:474.2,y:155.2}},{t:this.shape_652},{t:this.shape_437,p:{x:482.6,y:154}},{t:this.shape_332,p:{x:486.6,y:155.2}},{t:this.shape_651},{t:this.shape_650,p:{x:501,y:155.2}},{t:this.shape_649,p:{x:506.5,y:156.2}},{t:this.shape_648,p:{x:512,y:155.2}},{t:this.shape_647,p:{x:518.1,y:155.2}},{t:this.shape_646,p:{y:155.2}},{t:this.shape_160,p:{x:533.4,y:155.2}},{t:this.shape_645,p:{x:538.7,y:155.2}},{t:this.shape_438,p:{x:544,y:155.2}},{t:this.shape_137,p:{x:549.4,y:155.2}},{t:this.shape_147,p:{x:555.3,y:155.2}},{t:this.shape_644,p:{x:564.1,y:155.2}},{t:this.shape_643,p:{x:569.8,y:154.2}},{t:this.shape_436,p:{x:573.4,y:154}},{t:this.shape_128,p:{x:576.9,y:154.2}},{t:this.shape_642,p:{x:581.7,y:155.5}},{t:this.shape_384,p:{x:376.7,y:168.4}},{t:this.shape_432,p:{x:379.2,y:167.1}},{t:this.shape_430,p:{x:381.6,y:167.1}},{t:this.shape_279,p:{x:385.9,y:168.3}},{t:this.shape_431,p:{x:394.7,y:168.3}},{t:this.shape_377,p:{x:398.9,y:168.4}},{t:this.shape_101,p:{x:402.3,y:167.4}},{t:this.shape_156,p:{x:407.8,y:168.3}},{t:this.shape_523,p:{x:416.5,y:168.4}},{t:this.shape_331,p:{x:422.9,y:168.4}},{t:this.shape_424,p:{x:431.5,y:168.3}},{t:this.shape_219,p:{x:435.7,y:167.1}},{t:this.shape_155,p:{x:440.4,y:168.4}},{t:this.shape_337,p:{x:445.7,y:168.3}},{t:this.shape_135,p:{x:450.9,y:168.3}},{t:this.shape_123,p:{x:456.1,y:167.4}},{t:this.shape_376,p:{x:462.5,y:168.4}},{t:this.shape_419,p:{x:466,y:168.4}},{t:this.shape_26,p:{x:470.7,y:168.3}},{t:this.shape_429,p:{x:476,y:168.4}},{t:this.shape_308,p:{x:481.3,y:168.3}},{t:this.shape_371,p:{x:488,y:168.4}},{t:this.shape_213,p:{x:490.4,y:167.1}},{t:this.shape_641},{t:this.shape_347,p:{x:499.3,y:168.4}},{t:this.shape_327,p:{x:503.5,y:168.4}},{t:this.shape_640,p:{x:509.1,y:169.4}},{t:this.shape_639},{t:this.shape_518,p:{x:520.9,y:168.4}},{t:this.shape_92,p:{x:525.9,y:168.3}},{t:this.shape_130,p:{x:531.7,y:168.3}},{t:this.shape_549,p:{x:539.8,y:168.3}},{t:this.shape_144,p:{x:545.6,y:168.3}},{t:this.shape_325,p:{x:551.5,y:168.4}},{t:this.shape_638},{t:this.shape_303,p:{x:566.2,y:168.3}},{t:this.shape_637},{t:this.shape_334,p:{x:575.6,y:168.4}},{t:this.shape_131,p:{x:579.2,y:168.6}},{t:this.shape_330,p:{x:583.3,y:168.4}},{t:this.shape_401,p:{x:380.7,y:182.5}},{t:this.shape_328,p:{x:383.2,y:181.5}},{t:this.shape_636},{t:this.shape_154,p:{x:391.6,y:180.3}},{t:this.shape_368,p:{x:395.7,y:182.5}},{t:this.shape_321,p:{x:399.6,y:181.5}},{t:this.shape_229,p:{x:403.6,y:181.5}},{t:this.shape_635},{t:this.shape_422,p:{x:418.2,y:181.5}},{t:this.shape_133,p:{x:422.4,y:180.3}},{t:this.shape_272,p:{x:425.2,y:181.5}},{t:this.shape_513,p:{x:430.1,y:181.5}},{t:this.shape_293,p:{x:435.2,y:181.5}},{t:this.shape_129,p:{x:440,y:181.5}},{t:this.shape_142,p:{x:448,y:180.5}},{t:this.shape_418,p:{x:452.7,y:181.5}},{t:this.shape_298,p:{x:457.8,y:181.5}},{t:this.shape_151,p:{x:465.5,y:180.5}},{t:this.shape_309,p:{x:469.1,y:181.5}},{t:this.shape_425,p:{x:472.9,y:181.5}},{t:this.shape_108,p:{x:477.3,y:181.5}},{t:this.shape_122,p:{x:482.5,y:181.5}},{t:this.shape_417,p:{x:491.3,y:181.5}},{t:this.shape_126,p:{x:495.5,y:180.3}},{t:this.shape_34,p:{x:498.3,y:181.5}},{t:this.shape_301,p:{x:501.5,y:181.5}},{t:this.shape_634,p:{x:505.6,y:181.5}},{t:this.shape_117,p:{x:509.9,y:180.3}},{t:this.shape_374,p:{x:514,y:182.5}},{t:this.shape_299,p:{x:517.9,y:181.5}},{t:this.shape_138,p:{x:521.9,y:181.5}},{t:this.shape_102,p:{x:527.6,y:181.5}},{t:this.shape_395,p:{x:534.6,y:182.5}},{t:this.shape_633},{t:this.shape_217,p:{x:544.7,y:181.5}},{t:this.shape_8,p:{x:550.3,y:181.5}},{t:this.shape_19,p:{x:555.7,y:180.5}},{t:this.shape_124,p:{x:563.2,y:182.5}},{t:this.shape_215,p:{x:567.2,y:181.5}},{t:this.shape_116,p:{x:571.2,y:181.5}},{t:this.shape_93,p:{x:576.9,y:181.5}},{t:this.shape_107,p:{x:582.1,y:180.5}},{t:this.shape_119,p:{x:377.7,y:196.8}},{t:this.shape_414,p:{x:382.1,y:194.6}},{t:this.shape_109,p:{x:386.3,y:193.4}},{t:this.shape_295,p:{x:390.3,y:194.6}},{t:this.shape_91,p:{x:394.2,y:193.4}},{t:this.shape_158,p:{x:396.6,y:194.7}},{t:this.shape_565,p:{x:400.8,y:194.7}},{t:this.shape_292,p:{x:406.2,y:194.6}},{t:this.shape_412,p:{x:414.7,y:194.6}},{t:this.shape_83,p:{x:419.6,y:194.6}},{t:this.shape_152,p:{x:422.9,y:194.7}},{t:this.shape_150,p:{x:430,y:194.6}},{t:this.shape_87,p:{x:434.2,y:193.4}},{t:this.shape_149,p:{x:438.9,y:194.7}},{t:this.shape_322,p:{x:444.9,y:194.7}},{t:this.shape_95,p:{x:450.5,y:194.6}},{t:this.shape_118,p:{x:459.3,y:194.6}},{t:this.shape_76,p:{x:463.5,y:193.4}},{t:this.shape_247,p:{x:467,y:194.6}},{t:this.shape_290,p:{x:472.5,y:194.6}},{t:this.shape_74,p:{x:478.2,y:194.6}},{t:this.shape_285,p:{x:483.9,y:194.6}},{t:this.shape_115,p:{x:492.9,y:194.7}},{t:this.shape_66,p:{x:498.2,y:194.6}},{t:this.shape_145,p:{x:501.6,y:194.7}},{t:this.shape_50,p:{x:505.6,y:194.7}},{t:this.shape_498,p:{x:514,y:194.7}},{t:this.shape_127,p:{x:517.9,y:194.7}},{t:this.shape_89,p:{x:522.2,y:194.6}},{t:this.shape_96,p:{x:529.2,y:194.7}},{t:this.shape_304,p:{x:532.7,y:194.7}},{t:this.shape_97,p:{x:537.3,y:194.6}},{t:this.shape_111,p:{x:542.6,y:194.7}},{t:this.shape_277,p:{x:547.9,y:194.6}},{t:this.shape_59,p:{x:554.8,y:196.8}},{t:this.shape_505,p:{x:558.5,y:194.6}},{t:this.shape_62,p:{x:564.3,y:194.7}},{t:this.shape_63,p:{x:570,y:194.7}},{t:this.shape_288,p:{x:575.8,y:194.7}},{t:this.shape_562,p:{x:581.4,y:194.6}},{t:this.shape_276,p:{x:375.9,y:207.8}},{t:this.shape_85,p:{x:380.6,y:207.8}},{t:this.shape_148,p:{x:384.6,y:207.8}},{t:this.shape_10,p:{x:389.6,y:207.8}},{t:this.shape_632,p:{x:395.2,y:208.8}},{t:this.shape_143,p:{x:400.6,y:207.8}},{t:this.shape_100,p:{x:409.1,y:207.8}},{t:this.shape_2,p:{x:415.1,y:207.8}},{t:this.shape_110,p:{x:420.3,y:206.8}},{t:this.shape_631},{t:this.shape_39,p:{x:430.4,y:210.6}},{t:this.shape_81,p:{x:434.9,y:207.8}},{t:this.shape_30,p:{x:439.1,y:206.6}},{t:this.shape_120,p:{x:443,y:207.8}},{t:this.shape_287,p:{x:448,y:207.8}},{t:this.shape_630,p:{x:456.6,y:207.8}},{t:this.shape_79,p:{x:461.3,y:207.8}},{t:this.shape_216,p:{x:465.4,y:207.8}},{t:this.shape_64,p:{x:469.7,y:207.8}},{t:this.shape_629},{t:this.shape_113,p:{x:479.3,y:207.8}},{t:this.shape_98,p:{x:485.2,y:207.8}},{t:this.shape_267,p:{x:493,y:207.8}},{t:this.shape_628},{t:this.shape_94,p:{x:504,y:207.8}},{t:this.shape_5,p:{x:509.5,y:207.8}},{t:this.shape_99,p:{x:518.9,y:207.9}},{t:this.shape_61,p:{x:525.3,y:207.8}},{t:this.shape_88,p:{x:533.9,y:207.8}},{t:this.shape_139,p:{x:539.2,y:207.8}},{t:this.shape_48,p:{x:544.5,y:207.8}},{t:this.shape_42,p:{x:549.9,y:207.8}},{t:this.shape_77,p:{x:555.8,y:207.8}},{t:this.shape_258,p:{x:563.9,y:208.8}},{t:this.shape_146,p:{x:569,y:207.8}},{t:this.shape_41,p:{x:573,y:207.8}},{t:this.shape_35,p:{x:577.2,y:207.8}},{t:this.shape_70,p:{x:582.1,y:206.8}},{t:this.shape_33,p:{x:380,y:223.1}},{t:this.shape_69,p:{x:384.4,y:220.9}},{t:this.shape_29,p:{x:388.6,y:219.7}},{t:this.shape_627,p:{x:391.4,y:220.9}},{t:this.shape_38,p:{x:394.6,y:221}},{t:this.shape_557,p:{x:398.7,y:220.9}},{t:this.shape_27,p:{x:403.1,y:219.7}},{t:this.shape_626},{t:this.shape_13,p:{x:411,y:221}},{t:this.shape_23,p:{x:415,y:221}},{t:this.shape_71,p:{x:420.7,y:220.9}},{t:this.shape_625,p:{x:429.5,y:221}},{t:this.shape_45,p:{x:434.8,y:220.9}},{t:this.shape_25,p:{x:438.2,y:219.7}},{t:this.shape_338,p:{x:441.6,y:220}},{t:this.shape_75,p:{x:446.8,y:220.9}},{t:this.shape_11,p:{x:455,y:221.9}},{t:this.shape_1,p:{x:460.9,y:221}},{t:this.shape_624,p:{x:467.3,y:221}},{t:this.shape_67,p:{x:474.3,y:221}},{t:this.shape_15,p:{x:480.8,y:220.9}},{t:this.shape_58,p:{x:486,y:220}},{t:this.shape_24,p:{x:495.2,y:219.7}},{t:this.shape_20,p:{x:499,y:221}},{t:this.shape_114,p:{x:503.8,y:221}},{t:this.shape_43,p:{x:512,y:220.9}},{t:this.shape_18,p:{x:516.2,y:219.7}},{t:this.shape_17,p:{x:519.3,y:220.9}},{t:this.shape_623},{t:this.shape_72,p:{x:530.6,y:220.9}},{t:this.shape_21,p:{x:539,y:221}},{t:this.shape_7,p:{x:543.7,y:221}},{t:this.shape_90,p:{x:547.2,y:221}},{t:this.shape_493,p:{x:551.6,y:221}},{t:this.shape_3,p:{x:555.6,y:220}},{t:this.shape_6,p:{x:563.8,y:220.9}},{t:this.shape_37,p:{x:569.7,y:221}},{t:this.shape_522,p:{x:574.1,y:220.9}},{t:this.shape_313,p:{x:579,y:220.9}},{t:this.shape_4,p:{x:583.3,y:221}}]},1).to({state:[{t:this.shape_798},{t:this.instance_7},{t:this.instance,p:{x:520.8}},{t:this.shape_342,p:{x:485.2,y:47.6}},{t:this.shape_797,p:{x:488.9,y:47.4}},{t:this.shape_796,p:{x:492.9,y:48.6}},{t:this.shape_795},{t:this.shape_228,p:{x:505.6,y:48.6}},{t:this.shape_794},{t:this.shape_590,p:{x:515.6,y:48.6}},{t:this.shape_382,p:{x:521.1,y:48.6}},{t:this.shape_793,p:{x:526.9,y:48.6}},{t:this.shape_189,p:{x:535.9,y:48.6}},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790,p:{x:480,y:63.1}},{t:this.shape_789},{t:this.shape_788,p:{x:489.5,y:62.1}},{t:this.shape_620,p:{x:492,y:62.1}},{t:this.shape_787},{t:this.shape_278,p:{x:498.7,y:62}},{t:this.shape_786},{t:this.shape_785},{t:this.shape_619,p:{x:515.1,y:62.1}},{t:this.shape_62,p:{x:519.3,y:62.1}},{t:this.shape_784},{t:this.shape_221,p:{x:527.6,y:62}},{t:this.shape_462,p:{x:535.1,y:62.1}},{t:this.shape_210,p:{x:538.1,y:63.1}},{t:this.shape_209,p:{x:542.5,y:62}},{t:this.shape_208,p:{x:547.2,y:62.1}},{t:this.shape_783},{t:this.shape_489,p:{x:481.5,y:74.5}},{t:this.shape_782},{t:this.shape_180,p:{x:492.3,y:74.5}},{t:this.shape_781,p:{x:498.1,y:74.5}},{t:this.shape_202,p:{x:505.5,y:75.5}},{t:this.shape_676,p:{x:510.3,y:75.5}},{t:this.shape_780,p:{x:516.4,y:75.5}},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_667,p:{x:535.6,y:75.5}},{t:this.shape_195,p:{x:541.1,y:75.5}},{t:this.shape_776,p:{x:546.7,y:75.6}},{t:this.shape_775},{t:this.shape_463,p:{x:488.4,y:88}},{t:this.shape_190,p:{x:495.6,y:89}},{t:this.shape_774,p:{x:500,y:88.9}},{t:this.shape_773,p:{x:504.4,y:87.8}},{t:this.shape_772,p:{x:508.7,y:90}},{t:this.shape_771,p:{x:514,y:88.9}},{t:this.shape_770,p:{x:519.8,y:89}},{t:this.shape_186,p:{x:527.8,y:88.9}},{t:this.shape_769},{t:this.shape_768,p:{x:539.4,y:89}},{t:this.shape_181,p:{x:545.5,y:88.9}},{t:this.shape_767,p:{x:477.6,y:101.4}},{t:this.shape_193,p:{x:483.5,y:101.5}},{t:this.shape_178,p:{x:489.2,y:101.5}},{t:this.shape_766,p:{x:499,y:101.3}},{t:this.shape_669,p:{x:503.5,y:102.4}},{t:this.shape_175,p:{x:508.6,y:101.4}},{t:this.shape_765,p:{x:512.5,y:101.3}},{t:this.shape_764},{t:this.shape_172,p:{x:520.8,y:101.4}},{t:this.shape_171,p:{x:529.3,y:102.4}},{t:this.shape_599,p:{x:533.7,y:101.3}},{t:this.shape_668,p:{x:538.1,y:102.4}},{t:this.shape_763,p:{x:544,y:102.4}},{t:this.shape_167,p:{x:550.6,y:102.4}},{t:this.shape_166,p:{x:604.6,y:115.9}},{t:this.shape_455,p:{x:608.7,y:115.8}},{t:this.shape_666,p:{x:612.9,y:114.7}},{t:this.shape_363,p:{x:616.6,y:115.9}},{t:this.shape_664,p:{x:622.3,y:116.9}},{t:this.shape_762},{t:this.shape_310,p:{x:398.8,y:131.1}},{t:this.shape_609,p:{x:401.4,y:129}},{t:this.shape_761,p:{x:403.9,y:127.8}},{t:this.shape_760},{t:this.shape_605,p:{x:411.8,y:129}},{t:this.shape_501,p:{x:416.1,y:129}},{t:this.shape_148,p:{x:421.6,y:129}},{t:this.shape_759,p:{x:430.1,y:129}},{t:this.shape_603,p:{x:434.3,y:129}},{t:this.shape_602,p:{x:436.8,y:129}},{t:this.shape_134,p:{x:440.2,y:128}},{t:this.shape_758},{t:this.shape_757,p:{x:455.4,y:129}},{t:this.shape_84,p:{x:460,y:129}},{t:this.shape_601,p:{x:463.2,y:129}},{t:this.shape_756},{t:this.shape_755},{t:this.shape_143,p:{x:478.7,y:129}},{t:this.shape_582,p:{x:485.4,y:129}},{t:this.shape_754,p:{x:487.8,y:127.8}},{t:this.shape_214,p:{x:491.4,y:129}},{t:this.shape_581,p:{x:495.4,y:129}},{t:this.shape_753,p:{x:499.6,y:129}},{t:this.shape_433,p:{x:508.4,y:129}},{t:this.shape_752,p:{x:513.8,y:129.3}},{t:this.shape_751,p:{x:520.7,y:127.8}},{t:this.shape_333,p:{x:524.9,y:129}},{t:this.shape_608,p:{x:531.4,y:129.1}},{t:this.shape_192,p:{x:540.4,y:128.1}},{t:this.shape_654,p:{x:545.6,y:128}},{t:this.shape_413,p:{x:552.8,y:130}},{t:this.shape_120,p:{x:556.7,y:129}},{t:this.shape_335,p:{x:564.5,y:129}},{t:this.shape_750,p:{x:569.7,y:129.3}},{t:this.shape_627,p:{x:574.1,y:129}},{t:this.shape_261,p:{x:580.3,y:131.8}},{t:this.shape_749,p:{x:582.9,y:127.8}},{t:this.shape_748,p:{x:585.1,y:125.7}},{t:this.shape_747},{t:this.shape_746,p:{x:592.1,y:127.8}},{t:this.shape_272,p:{x:594.9,y:129}},{t:this.shape_745,p:{x:598.1,y:127.8}},{t:this.shape_585,p:{x:602.8,y:129.1}},{t:this.shape_744,p:{x:610.3,y:127.8}},{t:this.shape_5,p:{x:614.4,y:129}},{t:this.shape_578,p:{x:618.7,y:129}},{t:this.shape_743,p:{x:622,y:129}},{t:this.shape_742,p:{x:625,y:127.8}},{t:this.shape_741,p:{x:629.1,y:129}},{t:this.shape_740},{t:this.shape_739,p:{x:435.9,y:143.2}},{t:this.shape_139,p:{x:440.6,y:142.1}},{t:this.shape_738},{t:this.shape_212,p:{x:452.1,y:142.1}},{t:this.shape_549,p:{x:460.2,y:142.1}},{t:this.shape_544,p:{x:464.2,y:142.2}},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_431,p:{x:485.6,y:142.1}},{t:this.shape_734},{t:this.shape_575,p:{x:494.5,y:142.2}},{t:this.shape_733},{t:this.shape_384,p:{x:503.8,y:142.2}},{t:this.shape_543,p:{x:507.8,y:142.2}},{t:this.shape_732},{t:this.shape_642,p:{x:522.1,y:142.4}},{t:this.shape_731},{t:this.shape_377,p:{x:530.9,y:142.2}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_376,p:{x:545.6,y:142.2}},{t:this.shape_727,p:{x:549.7,y:142.1}},{t:this.shape_726},{t:this.shape_424,p:{x:563.7,y:142.1}},{t:this.shape_468,p:{x:567.9,y:140.9}},{t:this.shape_105,p:{x:571.5,y:142.1}},{t:this.shape_725,p:{x:576.3,y:142.2}},{t:this.shape_465,p:{x:579.3,y:140.9}},{t:this.shape_447,p:{x:581.7,y:140.9}},{t:this.shape_315,p:{x:586,y:142.1}},{t:this.shape_724},{t:this.shape_682,p:{x:597.1,y:142.2}},{t:this.shape_306,p:{x:602.7,y:142.1}},{t:this.shape_723},{t:this.shape_160,p:{x:617.1,y:142.1}},{t:this.shape_275,p:{x:622.3,y:141.2}},{t:this.shape_443,p:{x:626,y:140.9}},{t:this.shape_722},{t:this.shape_422,p:{x:420.4,y:155.3}},{t:this.shape_302,p:{x:426.4,y:155.3}},{t:this.shape_371,p:{x:430.6,y:155.3}},{t:this.shape_557,p:{x:434.7,y:155.3}},{t:this.shape_721},{t:this.shape_141,p:{x:447.7,y:155.6}},{t:this.shape_417,p:{x:456.4,y:155.3}},{t:this.shape_439,p:{x:460.6,y:154.1}},{t:this.shape_125,p:{x:464.8,y:155.3}},{t:this.shape_240,p:{x:469.9,y:154.3}},{t:this.shape_720},{t:this.shape_571,p:{x:482.2,y:155.4}},{t:this.shape_648,p:{x:488.6,y:155.3}},{t:this.shape_512,p:{x:495.9,y:158.1}},{t:this.shape_719,p:{x:500.1,y:156.3}},{t:this.shape_331,p:{x:505.9,y:155.3}},{t:this.shape_147,p:{x:511.6,y:155.3}},{t:this.shape_347,p:{x:518.6,y:155.3}},{t:this.shape_327,p:{x:522.8,y:155.3}},{t:this.shape_414,p:{x:531.3,y:155.3}},{t:this.shape_437,p:{x:535.5,y:154.1}},{t:this.shape_436,p:{x:538,y:154.1}},{t:this.shape_718},{t:this.shape_717},{t:this.shape_334,p:{x:547.8,y:155.3}},{t:this.shape_325,p:{x:551.9,y:155.3}},{t:this.shape_135,p:{x:557.7,y:155.3}},{t:this.shape_716},{t:this.shape_287,p:{x:570.9,y:155.3}},{t:this.shape_653,p:{x:576.2,y:155.3}},{t:this.shape_130,p:{x:584.6,y:155.3}},{t:this.shape_137,p:{x:590.4,y:155.3}},{t:this.shape_432,p:{x:594.5,y:154.1}},{t:this.shape_715},{t:this.shape_441,p:{x:601.6,y:155.3}},{t:this.shape_430,p:{x:607.9,y:154.1}},{t:this.shape_650,p:{x:611.7,y:155.3}},{t:this.shape_219,p:{x:615.5,y:154.1}},{t:this.shape_142,p:{x:621.7,y:154.3}},{t:this.shape_131,p:{x:626.5,y:155.6}},{t:this.shape_330,p:{x:630.6,y:155.3}},{t:this.shape_213,p:{x:405.8,y:167.2}},{t:this.shape_714,p:{x:408,y:165.2}},{t:this.shape_713},{t:this.shape_154,p:{x:415,y:167.2}},{t:this.shape_344,p:{x:417.8,y:168.4}},{t:this.shape_133,p:{x:421,y:167.2}},{t:this.shape_569,p:{x:425.7,y:168.5}},{t:this.shape_107,p:{x:434.2,y:167.5}},{t:this.shape_568,p:{x:440.1,y:168.5}},{t:this.shape_328,p:{x:447.6,y:168.5}},{t:this.shape_712,p:{x:450.4,y:168.4}},{t:this.shape_370,p:{x:454.4,y:168.5}},{t:this.shape_321,p:{x:457.4,y:168.5}},{t:this.shape_311,p:{x:461.5,y:168.5}},{t:this.shape_420,p:{x:469.4,y:169.4}},{t:this.shape_309,p:{x:473.4,y:168.5}},{t:this.shape_711},{t:this.shape_58,p:{x:483.3,y:167.5}},{t:this.shape_16,p:{x:490.7,y:167.5}},{t:this.shape_301,p:{x:494.4,y:168.5}},{t:this.shape_286,p:{x:498.6,y:168.4}},{t:this.shape_293,p:{x:503.6,y:168.5}},{t:this.shape_576,p:{x:507.6,y:167.5}},{t:this.shape_129,p:{x:515.9,y:168.4}},{t:this.shape_63,p:{x:521.7,y:168.5}},{t:this.shape_445,p:{x:526.2,y:168.4}},{t:this.shape_444,p:{x:531,y:168.4}},{t:this.shape_438,p:{x:539.5,y:168.5}},{t:this.shape_279,p:{x:545.1,y:168.4}},{t:this.shape_305,p:{x:551,y:168.5}},{t:this.shape_70,p:{x:558.7,y:167.5}},{t:this.shape_126,p:{x:562.4,y:167.2}},{t:this.shape_518,p:{x:566.4,y:168.5}},{t:this.shape_710},{t:this.shape_119,p:{x:579.1,y:170.6}},{t:this.shape_412,p:{x:583.5,y:168.4}},{t:this.shape_429,p:{x:589,y:168.5}},{t:this.shape_217,p:{x:594.5,y:168.5}},{t:this.shape_122,p:{x:600.3,y:168.4}},{t:this.shape_117,p:{x:607.3,y:167.2}},{t:this.shape_552,p:{x:610.1,y:168.4}},{t:this.shape_98,p:{x:614.8,y:168.4}},{t:this.shape_80,p:{x:622.5,y:167.5}},{t:this.shape_566,p:{x:628.4,y:168.5}},{t:this.shape_102,p:{x:428.9,y:181.6}},{t:this.shape_26,p:{x:434.2,y:181.6}},{t:this.shape_109,p:{x:438.2,y:180.4}},{t:this.shape_229,p:{x:442.2,y:181.6}},{t:this.shape_156,p:{x:447.9,y:181.6}},{t:this.shape_91,p:{x:454.9,y:180.4}},{t:this.shape_425,p:{x:458.7,y:181.6}},{t:this.shape_87,p:{x:462.5,y:180.4}},{t:this.shape_3,p:{x:468.7,y:180.6}},{t:this.shape_78,p:{x:473.5,y:181.9}},{t:this.shape_299,p:{x:480.4,y:181.6}},{t:this.shape_138,p:{x:484.4,y:181.6}},{t:this.shape_215,p:{x:488.3,y:181.6}},{t:this.shape_83,p:{x:491.4,y:181.6}},{t:this.shape_709},{t:this.shape_42,p:{x:503.9,y:181.6}},{t:this.shape_708,p:{x:508.3,y:181.6}},{t:this.shape_423,p:{x:512.6,y:181.6}},{t:this.shape_480,p:{x:516.5,y:181.6}},{t:this.shape_565,p:{x:524.2,y:181.6}},{t:this.shape_158,p:{x:528.1,y:181.6}},{t:this.shape_93,p:{x:532.4,y:181.6}},{t:this.shape_411,p:{x:539.4,y:182.6}},{t:this.shape_419,p:{x:542.9,y:181.6}},{t:this.shape_707},{t:this.shape_132,p:{x:554.9,y:180.6}},{t:this.shape_563,p:{x:560.8,y:181.7}},{t:this.shape_418,p:{x:566.5,y:181.6}},{t:this.shape_249,p:{x:570.4,y:181.6}},{t:this.shape_559,p:{x:577.5,y:182.6}},{t:this.shape_498,p:{x:583.2,y:181.6}},{t:this.shape_281,p:{x:590.1,y:184.4}},{t:this.shape_401,p:{x:592.8,y:182.6}},{t:this.shape_473,p:{x:597.5,y:181.7}},{t:this.shape_76,p:{x:602.2,y:180.4}},{t:this.shape_288,p:{x:609.1,y:181.6}},{t:this.shape_152,p:{x:613.1,y:181.6}},{t:this.shape_89,p:{x:617.3,y:181.6}},{t:this.shape_435,p:{x:623.8,y:181.7}},{t:this.shape_304,p:{x:629.5,y:181.6}},{t:this.shape_144,p:{x:414.8,y:194.7}},{t:this.shape_146,p:{x:420.1,y:194.7}},{t:this.shape_114,p:{x:425.1,y:194.8}},{t:this.shape_145,p:{x:428.7,y:194.8}},{t:this.shape_317,p:{x:432.8,y:194.7}},{t:this.shape_421,p:{x:442.2,y:194.8}},{t:this.shape_706,p:{x:446.9,y:193.5}},{t:this.shape_66,p:{x:450,y:194.7}},{t:this.shape_297,p:{x:454.4,y:194.7}},{t:this.shape_393,p:{x:460.1,y:194.7}},{t:this.shape_705,p:{x:467.2,y:193.5}},{t:this.shape_661,p:{x:469.4,y:191.5}},{t:this.shape_704},{t:this.shape_703,p:{x:476.4,y:193.5}},{t:this.shape_522,p:{x:479.2,y:194.7}},{t:this.shape_702,p:{x:482.4,y:193.5}},{t:this.shape_218,p:{x:487.1,y:194.8}},{t:this.shape_59,p:{x:494.8,y:196.9}},{t:this.shape_127,p:{x:497.4,y:194.8}},{t:this.shape_268,p:{x:500.8,y:193.8}},{t:this.shape_155,p:{x:506.7,y:194.8}},{t:this.shape_322,p:{x:515.5,y:194.8}},{t:this.shape_701,p:{x:519.3,y:193.5}},{t:this.shape_88,p:{x:523.6,y:194.7}},{t:this.shape_47,p:{x:531.6,y:193.8}},{t:this.shape_259,p:{x:536.4,y:195}},{t:this.shape_540,p:{x:545.1,y:194.8}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_149,p:{x:562.5,y:194.8}},{t:this.shape_698,p:{x:568.8,y:194.7}},{t:this.shape_96,p:{x:573.2,y:194.8}},{t:this.shape_39,p:{x:578.6,y:197.6}},{t:this.shape_85,p:{x:581.2,y:194.8}},{t:this.shape_697},{t:this.shape_115,p:{x:590.6,y:194.8}},{t:this.shape_111,p:{x:599.4,y:194.8}},{t:this.shape_391,p:{x:603.2,y:193.5}},{t:this.shape_77,p:{x:607.4,y:194.7}},{t:this.shape_696,p:{x:615.5,y:195.7}},{t:this.shape_79,p:{x:619.5,y:194.8}},{t:this.shape_555,p:{x:623.7,y:194.8}},{t:this.shape_695},{t:this.shape_485,p:{x:407.9,y:210.7}},{t:this.shape_395,p:{x:410.6,y:208.9}},{t:this.shape_64,p:{x:413,y:207.9}},{t:this.shape_394,p:{x:416.3,y:207.9}},{t:this.shape_516,p:{x:420.9,y:207.9}},{t:this.shape_41,p:{x:428.1,y:207.9}},{t:this.shape_44,p:{x:432.2,y:207.9}},{t:this.shape_90,p:{x:437.6,y:207.9}},{t:this.shape_150,p:{x:445.7,y:207.9}},{t:this.shape_236,p:{x:449.9,y:206.7}},{t:this.shape_10,p:{x:453.5,y:207.9}},{t:this.shape_95,p:{x:459.3,y:207.9}},{t:this.shape_263,p:{x:465.2,y:207.9}},{t:this.shape_118,p:{x:473.7,y:207.9}},{t:this.shape_48,p:{x:479.2,y:207.9}},{t:this.shape_12,p:{x:484.7,y:207.9}},{t:this.shape_235,p:{x:491.5,y:206.7}},{t:this.shape_60,p:{x:494.3,y:207.9}},{t:this.shape_94,p:{x:499,y:207.9}},{t:this.shape_100,p:{x:507.5,y:207.9}},{t:this.shape_233,p:{x:511.7,y:206.7}},{t:this.shape_116,p:{x:515.7,y:207.9}},{t:this.shape_97,p:{x:520.7,y:207.9}},{t:this.shape_38,p:{x:524.7,y:207.9}},{t:this.shape_319,p:{x:528.9,y:207.9}},{t:this.shape_99,p:{x:535.2,y:208}},{t:this.shape_81,p:{x:544.5,y:207.9}},{t:this.shape_231,p:{x:548.7,y:206.7}},{t:this.shape_53,p:{x:552.3,y:207.9}},{t:this.shape_74,p:{x:558.1,y:207.9}},{t:this.shape,p:{x:564,y:207.9}},{t:this.shape_69,p:{x:572.5,y:207.9}},{t:this.shape_230,p:{x:576.7,y:206.7}},{t:this.shape_264,p:{x:580.2,y:206.9}},{t:this.shape_30,p:{x:583.8,y:206.7}},{t:this.shape_50,p:{x:587.8,y:207.9}},{t:this.shape_694},{t:this.shape_75,p:{x:599.1,y:207.9}},{t:this.shape_43,p:{x:607.6,y:207.9}},{t:this.shape_2,p:{x:613.6,y:207.9}},{t:this.shape_101,p:{x:618.8,y:206.9}},{t:this.shape_71,p:{x:624.2,y:207.9}},{t:this.shape_693,p:{x:629.4,y:206.9}},{t:this.shape_33,p:{x:476.5,y:223.2}},{t:this.shape_15,p:{x:480.9,y:221}},{t:this.shape_267,p:{x:486.2,y:221}},{t:this.shape_254,p:{x:491,y:221.1}},{t:this.shape_692,p:{x:495.2,y:221.3}},{t:this.shape_691,p:{x:500.3,y:220.1}},{t:this.shape_484,p:{x:506.9,y:223.9}},{t:this.shape_29,p:{x:509.5,y:219.8}},{t:this.shape_45,p:{x:512.6,y:221}},{t:this.shape_27,p:{x:516,y:219.8}},{t:this.shape_513,p:{x:520.1,y:221}},{t:this.shape_396,p:{x:527.4,y:223.9}},{t:this.shape_13,p:{x:530,y:221.1}},{t:this.shape_291,p:{x:533.5,y:220.1}},{t:this.shape_67,p:{x:539.4,y:221.1}},{t:this.shape_123,p:{x:547.9,y:220.1}},{t:this.shape_25,p:{x:551.5,y:219.8}},{t:this.shape_23,p:{x:555.5,y:221.1}},{t:this.shape_400,p:{x:561.2,y:221.1}},{t:this.shape_6,p:{x:567.1,y:221}},{t:this.shape_690},{t:this.shape_251,p:{x:582.2,y:221.1}},{t:this.shape_37,p:{x:590.6,y:221.1}},{t:this.shape_24,p:{x:594.7,y:219.8}},{t:this.shape_18,p:{x:597.2,y:219.8}},{t:this.shape_17,p:{x:600.3,y:221}},{t:this.shape_159,p:{x:605.3,y:221}},{t:this.shape_7,p:{x:612.4,y:221.1}},{t:this.shape_20,p:{x:616.2,y:221.1}},{t:this.shape_4,p:{x:620,y:221.1}},{t:this.shape_689,p:{x:623.6,y:221.3}},{t:this.shape_72,p:{x:629.2,y:221}}]},1).to({state:[{t:this.shape_898},{t:this.instance_8},{t:this.instance,p:{x:485.8}},{t:this.shape_603,p:{x:435.3,y:49.9}},{t:this.shape_447,p:{x:437.8,y:48.7}},{t:this.shape_8,p:{x:441.9,y:49.9}},{t:this.shape_602,p:{x:449,y:49.9}},{t:this.shape_443,p:{x:451.5,y:48.7}},{t:this.shape_897},{t:this.shape_601,p:{x:462.7,y:49.9}},{t:this.shape_439,p:{x:465.2,y:48.7}},{t:this.shape_896,p:{x:469.3,y:50.9}},{t:this.shape_582,p:{x:473.1,y:49.9}},{t:this.shape_104,p:{x:477.4,y:49.9}},{t:this.shape_228,p:{x:484.4,y:49.9}},{t:this.shape_895},{t:this.shape_186,p:{x:494.4,y:49.9}},{t:this.shape_225,p:{x:499.9,y:49.9}},{t:this.shape_894},{t:this.shape_223,p:{x:514.7,y:49.9}},{t:this.shape_893},{t:this.shape_892},{t:this.shape_425,p:{x:453.1,y:63.4}},{t:this.shape_891},{t:this.shape_571,p:{x:461.6,y:63.4}},{t:this.shape_581,p:{x:466.3,y:63.4}},{t:this.shape_890},{t:this.shape_578,p:{x:474,y:63.4}},{t:this.shape_889,p:{x:478.1,y:64.4}},{t:this.shape_888},{t:this.shape_887},{t:this.shape_539,p:{x:487.9,y:63.3}},{t:this.shape_211,p:{x:495.2,y:63.4}},{t:this.shape_210,p:{x:498.2,y:64.4}},{t:this.shape_209,p:{x:502.6,y:63.3}},{t:this.shape_208,p:{x:507.3,y:63.4}},{t:this.shape_668,p:{x:511.7,y:63.4}},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884,p:{x:457.6,y:75.9}},{t:this.shape_883},{t:this.shape_166,p:{x:470.4,y:76.8}},{t:this.shape_461,p:{x:475.2,y:76.8}},{t:this.shape_882,p:{x:481.3,y:76.8}},{t:this.shape_881,p:{x:485.4,y:75.7}},{t:this.shape_880},{t:this.shape_879,p:{x:493.3,y:75.7}},{t:this.shape_663,p:{x:500.6,y:76.8}},{t:this.shape_459,p:{x:506,y:76.8}},{t:this.shape_878,p:{x:511.7,y:76.9}},{t:this.shape_360,p:{x:448,y:89.4}},{t:this.shape_463,p:{x:453.4,y:89.3}},{t:this.shape_190,p:{x:460.5,y:90.3}},{t:this.shape_189,p:{x:465,y:90.2}},{t:this.shape_765,p:{x:469.4,y:89.1}},{t:this.shape_877},{t:this.shape_184,p:{x:478.9,y:90.2}},{t:this.shape_183,p:{x:484.7,y:90.3}},{t:this.shape_455,p:{x:492.7,y:90.2}},{t:this.shape_876},{t:this.shape_875,p:{x:504.4,y:90.3}},{t:this.shape_181,p:{x:510.4,y:90.2}},{t:this.shape_874},{t:this.shape_178,p:{x:451.4,y:102.8}},{t:this.shape_873,p:{x:461.2,y:102.6}},{t:this.shape_872,p:{x:465.7,y:103.7}},{t:this.shape_175,p:{x:470.8,y:102.7}},{t:this.shape_773,p:{x:474.7,y:102.6}},{t:this.shape_871},{t:this.shape_172,p:{x:483,y:102.7}},{t:this.shape_171,p:{x:491.5,y:103.7}},{t:this.shape_666,p:{x:495.9,y:102.6}},{t:this.shape_870,p:{x:500.3,y:103.7}},{t:this.shape_869,p:{x:506.2,y:103.7}},{t:this.shape_167,p:{x:512.8,y:103.7}},{t:this.shape_202,p:{x:570.1,y:117.2}},{t:this.shape_165,p:{x:574.2,y:117.1}},{t:this.shape_599,p:{x:578.4,y:116}},{t:this.shape_868},{t:this.shape_867,p:{x:587.8,y:118.2}},{t:this.shape_866,p:{x:593.7,y:117.2}},{t:this.shape_415,p:{x:369.5,y:133.1}},{t:this.shape_865},{t:this.shape_143,p:{x:380.1,y:130.3}},{t:this.shape_864},{t:this.shape_544,p:{x:390,y:130.3}},{t:this.shape_863},{t:this.shape_478,p:{x:399.7,y:130.3}},{t:this.shape_862},{t:this.shape_437,p:{x:412.5,y:129.1}},{t:this.shape_861},{t:this.shape_384,p:{x:423.8,y:130.3}},{t:this.shape_120,p:{x:427.7,y:130.3}},{t:this.shape_247,p:{x:435.5,y:130.3}},{t:this.shape_318,p:{x:440.7,y:130.6}},{t:this.shape_372,p:{x:445.1,y:130.3}},{t:this.shape_860},{t:this.shape_281,p:{x:457.3,y:133.1}},{t:this.shape_390,p:{x:461.7,y:130.3}},{t:this.shape_562,p:{x:467.6,y:130.3}},{t:this.shape_859},{t:this.shape_436,p:{x:477.6,y:129.1}},{t:this.shape_377,p:{x:480,y:130.3}},{t:this.shape_858},{t:this.shape_857},{t:this.shape_150,p:{x:498.4,y:130.3}},{t:this.shape_78,p:{x:503.7,y:130.6}},{t:this.shape_388,p:{x:512.4,y:130.3}},{t:this.shape_856},{t:this.shape_569,p:{x:525.3,y:130.4}},{t:this.shape_432,p:{x:530,y:129.1}},{t:this.shape_855},{t:this.shape_796,p:{x:538,y:130.3}},{t:this.shape_693,p:{x:542.9,y:129.3}},{t:this.shape_386,p:{x:551.2,y:130.3}},{t:this.shape_283,p:{x:557.1,y:130.3}},{t:this.shape_543,p:{x:563.4,y:130.3}},{t:this.shape_430,p:{x:567.3,y:129.1}},{t:this.shape_497,p:{x:570.7,y:130.3}},{t:this.shape_376,p:{x:577.3,y:130.3}},{t:this.shape_854},{t:this.shape_219,p:{x:583.8,y:129.1}},{t:this.shape_853,p:{x:586,y:127}},{t:this.shape_852},{t:this.shape_851},{t:this.shape_124,p:{x:396.7,y:144.4}},{t:this.shape_691,p:{x:401.7,y:142.5}},{t:this.shape_379,p:{x:407.2,y:143.4}},{t:this.shape_378,p:{x:416,y:143.4}},{t:this.shape_407,p:{x:421.8,y:143.4}},{t:this.shape_850},{t:this.shape_849},{t:this.shape_371,p:{x:434.3,y:143.5}},{t:this.shape_848},{t:this.shape_847},{t:this.shape_520,p:{x:451.9,y:143.4}},{t:this.shape_568,p:{x:458.2,y:143.5}},{t:this.shape_404,p:{x:464.6,y:143.5}},{t:this.shape_423,p:{x:469.6,y:143.5}},{t:this.shape_373,p:{x:477.7,y:143.4}},{t:this.shape_486,p:{x:483.7,y:143.5}},{t:this.shape_566,p:{x:490.6,y:143.5}},{t:this.shape_846},{t:this.shape_845},{t:this.shape_518,p:{x:503.3,y:143.5}},{t:this.shape_403,p:{x:511.2,y:143.7}},{t:this.shape_844},{t:this.shape_843},{t:this.shape_61,p:{x:527.8,y:143.5}},{t:this.shape_98,p:{x:533.2,y:143.4}},{t:this.shape_94,p:{x:541.4,y:143.4}},{t:this.shape_515,p:{x:546.4,y:143.4}},{t:this.shape_352,p:{x:552.2,y:143.4}},{t:this.shape_349,p:{x:561,y:143.4}},{t:this.shape_267,p:{x:566.3,y:143.4}},{t:this.shape_266,p:{x:571.5,y:143.7}},{t:this.shape_842},{t:this.shape_643,p:{x:581.4,y:142.5}},{t:this.shape_841},{t:this.shape_35,p:{x:594.6,y:143.5}},{t:this.shape_840},{t:this.shape_706,p:{x:368.7,y:155.4}},{t:this.shape_345,p:{x:372.9,y:156.6}},{t:this.shape_563,p:{x:379.4,y:156.7}},{t:this.shape_705,p:{x:386.9,y:155.4}},{t:this.shape_549,p:{x:390.4,y:156.6}},{t:this.shape_302,p:{x:396.2,y:156.6}},{t:this.shape_839,p:{x:402.1,y:156.6}},{t:this.shape_624,p:{x:410.6,y:156.6}},{t:this.shape_229,p:{x:416.9,y:156.6}},{t:this.shape_264,p:{x:421.8,y:155.6}},{t:this.shape_259,p:{x:426.6,y:156.9}},{t:this.shape_838},{t:this.shape_159,p:{x:438.8,y:156.6}},{t:this.shape_263,p:{x:447.6,y:156.6}},{t:this.shape_703,p:{x:451.6,y:155.4}},{t:this.shape_329,p:{x:455.8,y:156.6}},{t:this.shape_396,p:{x:463,y:159.4}},{t:this.shape_347,p:{x:465.6,y:156.6}},{t:this.shape_837,p:{x:469.1,y:155.6}},{t:this.shape_323,p:{x:477.3,y:156.6}},{t:this.shape_836},{t:this.shape_419,p:{x:489,y:156.6}},{t:this.shape_702,p:{x:492.6,y:155.4}},{t:this.shape_286,p:{x:496.8,y:156.6}},{t:this.shape_334,p:{x:503.8,y:156.6}},{t:this.shape_346,p:{x:506.9,y:156.6}},{t:this.shape_714,p:{x:510,y:153.3}},{t:this.shape_835},{t:this.shape_701,p:{x:517,y:155.4}},{t:this.shape_12,p:{x:521.1,y:156.6}},{t:this.shape_330,p:{x:525.1,y:156.6}},{t:this.shape_300,p:{x:532.1,y:156.6}},{t:this.shape_391,p:{x:536.3,y:155.4}},{t:this.shape_260,p:{x:540.5,y:156.6}},{t:this.shape_473,p:{x:547.5,y:156.7}},{t:this.shape_118,p:{x:556.8,y:156.6}},{t:this.shape_294,p:{x:562.8,y:156.6}},{t:this.shape_128,p:{x:568,y:155.6}},{t:this.shape,p:{x:576.1,y:156.6}},{t:this.shape_236,p:{x:580.1,y:155.4}},{t:this.shape_75,p:{x:584,y:156.6}},{t:this.shape_278,p:{x:589.7,y:156.6}},{t:this.shape_834},{t:this.shape_100,p:{x:385.2,y:169.7}},{t:this.shape_235,p:{x:389.4,y:168.5}},{t:this.shape_139,p:{x:392.9,y:169.7}},{t:this.shape_833,p:{x:397.7,y:169.8}},{t:this.shape_328,p:{x:400.7,y:169.8}},{t:this.shape_832},{t:this.shape_81,p:{x:413.8,y:169.7}},{t:this.shape_233,p:{x:418,y:168.5}},{t:this.shape_435,p:{x:422.7,y:169.8}},{t:this.shape_689,p:{x:428.5,y:170}},{t:this.shape_84,p:{x:433,y:169.7}},{t:this.shape_69,p:{x:440.8,y:169.7}},{t:this.shape_231,p:{x:445,y:168.5}},{t:this.shape_92,p:{x:448.5,y:169.7}},{t:this.shape_72,p:{x:454,y:169.7}},{t:this.shape_322,p:{x:459.2,y:169.8}},{t:this.shape_221,p:{x:464.8,y:169.7}},{t:this.shape_119,p:{x:472,y:171.9}},{t:this.shape_212,p:{x:476.4,y:169.7}},{t:this.shape_138,p:{x:482.2,y:169.8}},{t:this.shape_321,p:{x:486.1,y:169.8}},{t:this.shape_337,p:{x:489.2,y:169.7}},{t:this.shape_291,p:{x:493.5,y:168.8}},{t:this.shape_63,p:{x:501.6,y:169.8}},{t:this.shape_708,p:{x:506.1,y:169.7}},{t:this.shape_418,p:{x:510.3,y:169.8}},{t:this.shape_480,p:{x:514.2,y:169.7}},{t:this.shape_342,p:{x:521.2,y:168.8}},{t:this.shape_309,p:{x:524.9,y:169.8}},{t:this.shape_831},{t:this.shape_279,p:{x:535.6,y:169.7}},{t:this.shape_830,p:{x:543.6,y:168.8}},{t:this.shape_421,p:{x:549.5,y:169.8}},{t:this.shape_395,p:{x:557,y:170.8}},{t:this.shape_301,p:{x:559.4,y:169.8}},{t:this.shape_230,p:{x:561.9,y:168.5}},{t:this.shape_254,p:{x:565.1,y:169.8}},{t:this.shape_30,p:{x:568.1,y:168.5}},{t:this.shape_156,p:{x:572.4,y:169.7}},{t:this.shape_160,p:{x:581.2,y:169.7}},{t:this.shape_251,p:{x:587.1,y:169.8}},{t:this.shape_299,p:{x:591,y:169.8}},{t:this.shape_73,p:{x:594.6,y:169.7}},{t:this.shape_261,p:{x:394.5,y:185.7}},{t:this.shape_147,p:{x:398.9,y:182.9}},{t:this.shape_829},{t:this.shape_215,p:{x:407.8,y:182.9}},{t:this.shape_828},{t:this.shape_144,p:{x:418.5,y:182.9}},{t:this.shape_158,p:{x:425.5,y:182.9}},{t:this.shape_827,p:{x:429.6,y:182.9}},{t:this.shape_304,p:{x:435,y:182.9}},{t:this.shape_108,p:{x:442,y:182.9}},{t:this.shape_135,p:{x:447.1,y:182.9}},{t:this.shape_552,p:{x:451.7,y:182.9}},{t:this.shape_826},{t:this.shape_130,p:{x:463.1,y:182.9}},{t:this.shape_123,p:{x:468.3,y:181.9}},{t:this.shape_129,p:{x:476.6,y:182.9}},{t:this.shape_3,p:{x:481.8,y:181.9}},{t:this.shape_29,p:{x:485.4,y:181.7}},{t:this.shape_95,p:{x:489.7,y:182.9}},{t:this.shape_825},{t:this.shape_634,p:{x:502,y:182.9}},{t:this.shape_242,p:{x:510.8,y:182.9}},{t:this.shape_27,p:{x:514.8,y:181.7}},{t:this.shape_122,p:{x:519,y:182.9}},{t:this.shape_824},{t:this.shape_10,p:{x:533.6,y:182.9}},{t:this.shape_74,p:{x:539.4,y:182.9}},{t:this.shape_313,p:{x:545.2,y:182.9}},{t:this.shape_16,p:{x:550.6,y:181.9}},{t:this.shape_53,p:{x:558.1,y:182.9}},{t:this.shape_218,p:{x:564.4,y:183}},{t:this.shape_239,p:{x:570.8,y:182.9}},{t:this.shape_114,p:{x:575.8,y:182.9}},{t:this.shape_97,p:{x:583.2,y:182.9}},{t:this.shape_823},{t:this.shape_152,p:{x:593.7,y:182.9}},{t:this.shape_25,p:{x:596.1,y:181.7}},{t:this.shape_822,p:{x:380.6,y:196}},{t:this.shape_821},{t:this.shape_820},{t:this.shape_24,p:{x:396.4,y:194.8}},{t:this.shape_145,p:{x:398.9,y:196.1}},{t:this.shape_819},{t:this.shape_818,p:{x:408.7,y:196.1}},{t:this.shape_287,p:{x:416.5,y:196}},{t:this.shape_155,p:{x:422.8,y:196.1}},{t:this.shape_741,p:{x:429.2,y:196.1}},{t:this.shape_90,p:{x:434.2,y:196.1}},{t:this.shape_59,p:{x:440.7,y:198.2}},{t:this.shape_43,p:{x:445.1,y:196}},{t:this.shape_18,p:{x:449.3,y:194.8}},{t:this.shape_83,p:{x:452.4,y:196}},{t:this.shape_111,p:{x:457.1,y:196.1}},{t:this.shape_817},{t:this.shape_759,p:{x:470.1,y:196}},{t:this.shape_743,p:{x:475.1,y:196.1}},{t:this.shape_816,p:{x:479.3,y:196.3}},{t:this.shape_757,p:{x:488,y:196}},{t:this.shape_815,p:{x:493.8,y:197.1}},{t:this.shape_127,p:{x:497.7,y:196.1}},{t:this.shape_149,p:{x:502.4,y:196.1}},{t:this.shape_814},{t:this.shape_753,p:{x:518.1,y:196}},{t:this.shape_275,p:{x:523.3,y:195.1}},{t:this.shape_813},{t:this.shape_2,p:{x:538,y:196}},{t:this.shape_812},{t:this.shape_116,p:{x:550.2,y:196.1}},{t:this.shape_811},{t:this.shape_393,p:{x:562.2,y:196}},{t:this.shape_115,p:{x:568.8,y:196.1}},{t:this.shape_268,p:{x:577.3,y:195.1}},{t:this.shape_99,p:{x:583.2,y:196.1}},{t:this.shape_113,p:{x:589.6,y:196}},{t:this.shape_576,p:{x:594.9,y:195.1}},{t:this.shape_420,p:{x:392.4,y:210.2}},{t:this.shape_96,p:{x:396.4,y:209.2}},{t:this.shape_50,p:{x:400.4,y:209.2}},{t:this.shape_102,p:{x:406.1,y:209.2}},{t:this.shape_132,p:{x:411.3,y:208.2}},{t:this.shape_647,p:{x:419.5,y:209.2}},{t:this.shape_110,p:{x:425.2,y:208.2}},{t:this.shape_66,p:{x:429.5,y:209.2}},{t:this.shape_85,p:{x:432.9,y:209.2}},{t:this.shape_42,p:{x:437,y:209.2}},{t:this.shape_810,p:{x:442.7,y:209.2}},{t:this.shape_809,p:{x:451.6,y:209.2}},{t:this.shape_213,p:{x:455.5,y:208}},{t:this.shape_93,p:{x:459.8,y:209.2}},{t:this.shape_67,p:{x:466.2,y:209.3}},{t:this.shape_89,p:{x:475.5,y:209.2}},{t:this.shape_134,p:{x:480.7,y:208.2}},{t:this.shape_45,p:{x:485,y:209.2}},{t:this.shape_282,p:{x:490,y:209.2}},{t:this.shape_808,p:{x:498.9,y:209.2}},{t:this.shape_154,p:{x:502.8,y:208}},{t:this.shape_88,p:{x:507.1,y:209.2}},{t:this.shape_807},{t:this.shape_644,p:{x:518.6,y:209.2}},{t:this.shape_660,p:{x:524.3,y:209.2}},{t:this.shape_19,p:{x:529.1,y:208.2}},{t:this.shape_23,p:{x:534.3,y:209.2}},{t:this.shape_806},{t:this.shape_133,p:{x:547,y:208}},{t:this.shape_48,p:{x:550.8,y:209.2}},{t:this.shape_126,p:{x:554.6,y:208}},{t:this.shape_80,p:{x:560.8,y:208.2}},{t:this.shape_642,p:{x:565.6,y:209.5}},{t:this.shape_805},{t:this.shape_649,p:{x:579.8,y:210.2}},{t:this.shape_804},{t:this.shape_79,p:{x:590.1,y:209.2}},{t:this.shape_803,p:{x:594.2,y:209.2}},{t:this.shape_33,p:{x:445.2,y:224.5}},{t:this.shape_64,p:{x:447.8,y:222.4}},{t:this.shape_802},{t:this.shape_41,p:{x:456.7,y:222.4}},{t:this.shape_327,p:{x:460.9,y:222.4}},{t:this.shape_338,p:{x:468.6,y:221.4}},{t:this.shape_117,p:{x:472.3,y:221.1}},{t:this.shape_801},{t:this.shape_77,p:{x:481.3,y:222.3}},{t:this.shape_58,p:{x:486.5,y:221.4}},{t:this.shape_38,p:{x:490.2,y:222.4}},{t:this.shape_584,p:{x:495.6,y:225.2}},{t:this.shape_13,p:{x:498.2,y:222.4}},{t:this.shape_17,p:{x:501.3,y:222.3}},{t:this.shape_109,p:{x:504.7,y:221.1}},{t:this.shape_661,p:{x:506.9,y:219.1}},{t:this.shape_800},{t:this.shape_91,p:{x:513.8,y:221.1}},{t:this.shape_325,p:{x:518,y:222.4}},{t:this.shape_7,p:{x:524.7,y:222.4}},{t:this.shape_87,p:{x:527.2,y:221.1}},{t:this.shape_799},{t:this.shape_512,p:{x:538.6,y:225.2}},{t:this.shape_71,p:{x:543,y:222.3}},{t:this.shape_317,p:{x:548.9,y:222.3}},{t:this.shape_4,p:{x:553.2,y:222.4}},{t:this.shape_37,p:{x:557.3,y:222.4}},{t:this.shape_640,p:{x:563.1,y:223.4}},{t:this.shape_15,p:{x:568.7,y:222.3}},{t:this.shape_6,p:{x:577.5,y:222.3}},{t:this.shape_20,p:{x:583,y:222.4}},{t:this.shape_47,p:{x:587.8,y:221.4}},{t:this.shape_76,p:{x:591.5,y:221.1}},{t:this.shape_101,p:{x:594.9,y:221.4}}]},1).to({state:[{t:this.shape_931},{t:this.instance_9},{t:this.instance,p:{x:485.8}},{t:this.shape_321,p:{x:455.3,y:92.5}},{t:this.shape_930,p:{x:459.6,y:92.5}},{t:this.shape_309,p:{x:463.6,y:92.5}},{t:this.shape_139,p:{x:467.2,y:92.5}},{t:this.shape_288,p:{x:472.9,y:92.5}},{t:this.shape_344,p:{x:477.2,y:92.5}},{t:this.shape_228,p:{x:483.4,y:92.5}},{t:this.shape_201,p:{x:487.9,y:92.5}},{t:this.shape_184,p:{x:493.3,y:92.5}},{t:this.shape_382,p:{x:498.9,y:92.5}},{t:this.shape_875,p:{x:504.7,y:92.5}},{t:this.shape_223,p:{x:513.6,y:92.5}},{t:this.shape_929},{t:this.shape_301,p:{x:447.8,y:106}},{t:this.shape_501,p:{x:452.1,y:106}},{t:this.shape_299,p:{x:456.1,y:106}},{t:this.shape_513,p:{x:460.2,y:105.9}},{t:this.shape_236,p:{x:464.6,y:104.7}},{t:this.shape_421,p:{x:469.3,y:106}},{t:this.shape_235,p:{x:474,y:104.7}},{t:this.shape_928},{t:this.shape_233,p:{x:484.7,y:104.7}},{t:this.shape_218,p:{x:489.4,y:106}},{t:this.shape_387,p:{x:495.8,y:106}},{t:this.shape_42,p:{x:501.4,y:106}},{t:this.shape_562,p:{x:507.2,y:105.9}},{t:this.shape_166,p:{x:514.8,y:106}},{t:this.shape_210,p:{x:517.8,y:107}},{t:this.shape_209,p:{x:522.2,y:105.9}},{t:this.shape_208,p:{x:526.9,y:106}},{t:this.shape_870,p:{x:531.3,y:106}},{t:this.shape_767,p:{x:455.6,y:118.4}},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_211,p:{x:479.9,y:119.4}},{t:this.shape_461,p:{x:484.7,y:119.4}},{t:this.shape_538,p:{x:490.8,y:119.4}},{t:this.shape_765,p:{x:494.9,y:118.3}},{t:this.shape_924},{t:this.shape_599,p:{x:502.7,y:118.3}},{t:this.shape_866,p:{x:510,y:119.4}},{t:this.shape_362,p:{x:515.5,y:119.4}},{t:this.shape_878,p:{x:521.1,y:119.5}},{t:this.shape_192,p:{x:454.7,y:131.9}},{t:this.shape_206,p:{x:460.1,y:131.9}},{t:this.shape_204,p:{x:465.8,y:131.9}},{t:this.shape_190,p:{x:472.8,y:132.9}},{t:this.shape_189,p:{x:477.2,y:132.8}},{t:this.shape_174,p:{x:481.6,y:131.7}},{t:this.shape_923},{t:this.shape_455,p:{x:491.2,y:132.8}},{t:this.shape_922},{t:this.shape_771,p:{x:505,y:132.8}},{t:this.shape_357,p:{x:510.8,y:132.9}},{t:this.shape_684,p:{x:516.6,y:132.9}},{t:this.shape_181,p:{x:522.7,y:132.8}},{t:this.shape_339,p:{x:452,y:145.3}},{t:this.shape_921},{t:this.shape_178,p:{x:463.6,y:145.4}},{t:this.shape_920},{t:this.shape_919},{t:this.shape_175,p:{x:483,y:145.3}},{t:this.shape_188,p:{x:486.9,y:145.2}},{t:this.shape_451,p:{x:490.5,y:146.3}},{t:this.shape_172,p:{x:495.2,y:145.3}},{t:this.shape_171,p:{x:503.7,y:146.3}},{t:this.shape_164,p:{x:508.1,y:145.2}},{t:this.shape_207,p:{x:512.5,y:146.3}},{t:this.shape_918},{t:this.shape_167,p:{x:525,y:146.3}},{t:this.shape_202,p:{x:571,y:159.8}},{t:this.shape_165,p:{x:575.1,y:159.7}},{t:this.shape_170,p:{x:579.3,y:158.6}},{t:this.shape_917},{t:this.shape_916},{t:this.shape_168,p:{x:594.6,y:159.8}},{t:this.shape_129,p:{x:382.9,y:172.9}},{t:this.shape_915,p:{x:388,y:172.9}},{t:this.shape_215,p:{x:391.9,y:172.9}},{t:this.shape_350,p:{x:395.4,y:172.9}},{t:this.shape_155,p:{x:401.7,y:173}},{t:this.shape_92,p:{x:410.3,y:172.9}},{t:this.shape_337,p:{x:414.9,y:172.9}},{t:this.shape_98,p:{x:419.8,y:172.9}},{t:this.shape_914},{t:this.shape_913,p:{x:431.8,y:172.9}},{t:this.shape_122,p:{x:440.7,y:172.9}},{t:this.shape_661,p:{x:444.7,y:169.6}},{t:this.shape_108,p:{x:447.5,y:172.9}},{t:this.shape_249,p:{x:451.2,y:172.9}},{t:this.shape_231,p:{x:454.4,y:171.7}},{t:this.shape_272,p:{x:457.2,y:172.9}},{t:this.shape_396,p:{x:463.3,y:175.7}},{t:this.shape_158,p:{x:466,y:172.9}},{t:this.shape_125,p:{x:470.2,y:172.9}},{t:this.shape_152,p:{x:474.3,y:172.9}},{t:this.shape_297,p:{x:477.8,y:172.9}},{t:this.shape_912,p:{x:483.5,y:172.9}},{t:this.shape_511,p:{x:487.8,y:172.9}},{t:this.shape_230,p:{x:493.8,y:171.7}},{t:this.shape_911},{t:this.shape_910,p:{x:503.5,y:172.9}},{t:this.shape_478,p:{x:509.1,y:172.9}},{t:this.shape_145,p:{x:513.4,y:172.9}},{t:this.shape_833,p:{x:516.7,y:172.9}},{t:this.shape_127,p:{x:519.7,y:172.9}},{t:this.shape_479,p:{x:523.8,y:172.9}},{t:this.shape_909},{t:this.shape_251,p:{x:538.7,y:172.9}},{t:this.shape_102,p:{x:547.3,y:172.9}},{t:this.shape_83,p:{x:552.1,y:172.9}},{t:this.shape_30,p:{x:555.5,y:171.7}},{t:this.shape_908},{t:this.shape_428,p:{x:564.4,y:172.9}},{t:this.shape_93,p:{x:573.3,y:172.9}},{t:this.shape_247,p:{x:578.6,y:172.9}},{t:this.shape_20,p:{x:583.9,y:172.9}},{t:this.shape_37,p:{x:589.4,y:172.9}},{t:this.shape_89,p:{x:595.3,y:172.9}},{t:this.shape_66,p:{x:425,y:186}},{t:this.shape_29,p:{x:428.4,y:184.8}},{t:this.shape_88,p:{x:432.6,y:186}},{t:this.shape_427,p:{x:437.2,y:186}},{t:this.shape_5,p:{x:442,y:186}},{t:this.shape_240,p:{x:447.4,y:185.1}},{t:this.shape_907},{t:this.shape_96,p:{x:458.9,y:186.1}},{t:this.shape_50,p:{x:462.9,y:186.1}},{t:this.shape_77,p:{x:468.6,y:186}},{t:this.shape_268,p:{x:473.8,y:185.1}},{t:this.shape_43,p:{x:482.1,y:186}},{t:this.shape_85,p:{x:486.3,y:186.1}},{t:this.shape_27,p:{x:488.7,y:184.8}},{t:this.shape_71,p:{x:493,y:186}},{t:this.shape_242,p:{x:501.7,y:186.1}},{t:this.shape_79,p:{x:505.6,y:186.1}},{t:this.shape_94,p:{x:509.6,y:186}},{t:this.shape_75,p:{x:515,y:186}},{t:this.shape_906},{t:this.shape_239,p:{x:529,y:186.1}},{t:this.shape_64,p:{x:533,y:186.1}},{t:this.shape_149,p:{x:537.7,y:186.1}},{t:this.shape_41,p:{x:542.4,y:186.1}},{t:this.shape_15,p:{x:549.4,y:186}},{t:this.shape_10,p:{x:554.7,y:186}},{t:this.shape_418,p:{x:559.8,y:186.1}},{t:this.shape_6,p:{x:565.1,y:186}},{t:this.shape_72,p:{x:570.8,y:186}},{t:this.shape_905},{t:this.shape_38,p:{x:584,y:186.1}},{t:this.shape_304,p:{x:587.5,y:186.1}},{t:this.shape_254,p:{x:591.8,y:186.1}},{t:this.shape_101,p:{x:595.8,y:185.1}},{t:this.shape_33,p:{x:429.3,y:201.3}},{t:this.shape_115,p:{x:434.2,y:199.3}},{t:this.shape_25,p:{x:438.9,y:198}},{t:this.shape_99,p:{x:443.6,y:199.3}},{t:this.shape_904},{t:this.shape_743,p:{x:457.4,y:199.2}},{t:this.shape_2,p:{x:462.2,y:199.2}},{t:this.shape_24,p:{x:469.2,y:198}},{t:this.shape_114,p:{x:472.7,y:199.2}},{t:this.shape_903},{t:this.shape_902},{t:this.shape_748,p:{x:490.8,y:195.9}},{t:this.shape_45,p:{x:493.6,y:199.2}},{t:this.shape_34,p:{x:497.3,y:199.2}},{t:this.shape_18,p:{x:500.5,y:198}},{t:this.shape_60,p:{x:503.3,y:199.2}},{t:this.shape_123,p:{x:507.5,y:198.2}},{t:this.shape_13,p:{x:511.1,y:199.2}},{t:this.shape_901},{t:this.shape_822,p:{x:521.5,y:199.2}},{t:this.shape_17,p:{x:526.4,y:199.2}},{t:this.shape_741,p:{x:531.4,y:199.2}},{t:this.shape_900},{t:this.shape_7,p:{x:540.9,y:199.2}},{t:this.shape_759,p:{x:545.1,y:199.2}},{t:this.shape_757,p:{x:551.1,y:199.2}},{t:this.shape_899},{t:this.shape_4,p:{x:561.5,y:199.2}},{t:this.shape_402,p:{x:564.9,y:198.2}},{t:this.shape_67,p:{x:570.8,y:199.3}},{t:this.shape_287,p:{x:579.4,y:199.2}},{t:this.shape_23,p:{x:585,y:199.2}},{t:this.shape_90,p:{x:589.9,y:199.2}},{t:this.shape_753,p:{x:595.3,y:199.2}}]},1).to({state:[{t:this.shape_993},{t:this.instance_10},{t:this.instance,p:{x:482.8}},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_121,p:{x:453.1,y:65.2}},{t:this.shape_412,p:{x:462,y:65.2}},{t:this.shape_47,p:{x:467.2,y:64.2}},{t:this.shape_989},{t:this.shape_988,p:{x:474.5,y:65.5}},{t:this.shape_228,p:{x:481.6,y:65.2}},{t:this.shape_201,p:{x:486.1,y:65.2}},{t:this.shape_383,p:{x:491.5,y:65.2}},{t:this.shape_382,p:{x:497.1,y:65.2}},{t:this.shape_670,p:{x:502.9,y:65.2}},{t:this.shape_223,p:{x:511.8,y:65.2}},{t:this.shape_987},{t:this.shape_323,p:{x:445.3,y:78.6}},{t:this.shape_986,p:{x:450.6,y:78.6}},{t:this.shape_300,p:{x:456.4,y:78.6}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_61,p:{x:467.2,y:78.7}},{t:this.shape_983,p:{x:472.8}},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_335,p:{x:493.4,y:78.6}},{t:this.shape_211,p:{x:500.7,y:78.7}},{t:this.shape_210,p:{x:503.7,y:79.7}},{t:this.shape_209,p:{x:508.1,y:78.6}},{t:this.shape_208,p:{x:512.8,y:78.7}},{t:this.shape_668,p:{x:517.2,y:78.7}},{t:this.shape_978},{t:this.shape_977},{t:this.shape_654,p:{x:457.5,y:91.1}},{t:this.shape_976,p:{x:463.3}},{t:this.shape_166,p:{x:470.7,y:92.1}},{t:this.shape_975},{t:this.shape_882,p:{x:481.6,y:92.1}},{t:this.shape_881,p:{x:485.7,y:91}},{t:this.shape_974},{t:this.shape_879,p:{x:493.5,y:91}},{t:this.shape_973,p:{x:500.8}},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970,p:{x:448.1}},{t:this.shape_781,p:{x:453.6,y:104.6}},{t:this.shape_190,p:{x:460.8,y:105.6}},{t:this.shape_189,p:{x:465.2,y:105.5}},{t:this.shape_765,p:{x:469.6,y:104.4}},{t:this.shape_867,p:{x:473.9,y:106.6}},{t:this.shape_186,p:{x:479.2,y:105.5}},{t:this.shape_969},{t:this.shape_184,p:{x:493,y:105.5}},{t:this.shape_359,p:{x:498.8,y:105.6}},{t:this.shape_968,p:{x:504.6}},{t:this.shape_181,p:{x:510.7,y:105.5}},{t:this.shape_967,p:{x:442.8}},{t:this.shape_966,p:{x:448.6}},{t:this.shape_178,p:{x:454.4,y:118.1}},{t:this.shape_873,p:{x:464.2,y:117.9}},{t:this.shape_872,p:{x:468.7,y:119}},{t:this.shape_175,p:{x:473.8,y:118}},{t:this.shape_773,p:{x:477.7,y:117.9}},{t:this.shape_965},{t:this.shape_172,p:{x:486,y:118}},{t:this.shape_171,p:{x:494.5,y:119}},{t:this.shape_666,p:{x:498.9,y:117.9}},{t:this.shape_870,p:{x:503.3,y:119}},{t:this.shape_964,p:{x:509.2}},{t:this.shape_167,p:{x:515.8,y:119}},{t:this.shape_202,p:{x:561.5,y:132.5}},{t:this.shape_455,p:{x:565.6,y:132.4}},{t:this.shape_599,p:{x:569.8,y:131.3}},{t:this.shape_963,p:{x:573.5,y:132.5}},{t:this.shape_962,p:{x:579.2}},{t:this.shape_866,p:{x:585.1,y:132.5}},{t:this.shape_294,p:{x:377.1,y:145.6}},{t:this.shape_961},{t:this.shape_133,p:{x:387.2,y:144.4}},{t:this.shape_515,p:{x:390.7,y:145.6}},{t:this.shape_498,p:{x:396.4,y:145.6}},{t:this.shape_126,p:{x:403.2,y:144.4}},{t:this.shape_960},{t:this.shape_788,p:{x:411.1,y:145.6}},{t:this.shape_117,p:{x:413.6,y:144.4}},{t:this.shape_620,p:{x:416,y:145.6}},{t:this.shape_560,p:{x:419.6,y:145.6}},{t:this.shape_288,p:{x:425.3,y:145.6}},{t:this.shape_278,p:{x:431,y:145.6}},{t:this.shape_508,p:{x:438.2,y:147.7}},{t:this.shape_959},{t:this.shape_958},{t:this.shape_463,p:{x:453.3,y:144.6}},{t:this.shape_957},{t:this.shape_956},{t:this.shape_511,p:{x:472.6,y:145.6}},{t:this.shape_575,p:{x:478.1,y:145.7}},{t:this.shape_308,p:{x:484.3,y:145.6}},{t:this.shape_281,p:{x:491.1,y:148.4}},{t:this.shape_429,p:{x:495.1,y:145.6}},{t:this.shape_109,p:{x:498.9,y:144.4}},{t:this.shape_955},{t:this.shape_318,p:{x:508.9,y:145.9}},{t:this.shape_303,p:{x:514.5,y:145.6}},{t:this.shape_954},{t:this.shape_571,p:{x:529.9,y:145.7}},{t:this.shape_286,p:{x:536.4,y:145.6}},{t:this.shape_247,p:{x:541.7,y:145.6}},{t:this.shape_953},{t:this.shape_513,p:{x:553.8,y:145.6}},{t:this.shape_221,p:{x:562.8,y:145.6}},{t:this.shape_128,p:{x:568,y:144.6}},{t:this.shape_91,p:{x:571.6,y:144.4}},{t:this.shape_830,p:{x:575.1,y:144.6}},{t:this.shape_78,p:{x:579.9,y:145.9}},{t:this.shape_212,p:{x:585.8,y:145.6}},{t:this.shape_576,p:{x:383.9,y:157.8}},{t:this.shape_797,p:{x:387.5,y:157.5}},{t:this.shape_298,p:{x:391.5,y:158.7}},{t:this.shape_569,p:{x:397.6,y:158.8}},{t:this.shape_295,p:{x:403.8,y:158.7}},{t:this.shape_310,p:{x:410.7,y:160.9}},{t:this.shape_26,p:{x:414.4,y:158.7}},{t:this.shape_518,p:{x:420,y:158.8}},{t:this.shape_63,p:{x:425.5,y:158.8}},{t:this.shape_486,p:{x:434.2,y:158.8}},{t:this.shape_761,p:{x:438.9,y:157.5}},{t:this.shape_292,p:{x:442.8,y:158.7}},{t:this.shape_290,p:{x:448.2,y:158.7}},{t:this.shape_619,p:{x:454.9,y:158.8}},{t:this.shape_285,p:{x:458.9,y:158.7}},{t:this.shape_150,p:{x:467.4,y:158.7}},{t:this.shape_754,p:{x:471.6,y:157.5}},{t:this.shape_107,p:{x:475,y:157.8}},{t:this.shape_275,p:{x:479.7,y:157.8}},{t:this.shape_259,p:{x:484.5,y:159}},{t:this.shape_630,p:{x:490.3,y:158.8}},{t:this.shape_317,p:{x:496.7,y:158.7}},{t:this.shape_568,p:{x:503.3,y:158.8}},{t:this.shape_401,p:{x:510.8,y:159.8}},{t:this.shape_428,p:{x:514.9,y:158.7}},{t:this.shape_708,p:{x:519.6,y:158.7}},{t:this.shape_646,p:{y:158.7}},{t:this.shape_566,p:{x:531,y:158.8}},{t:this.shape_609,p:{x:535.7,y:158.8}},{t:this.shape_952},{t:this.shape_605,p:{x:546.1,y:158.8}},{t:this.shape_827,p:{x:550.2,y:158.7}},{t:this.shape_34,p:{x:554.9,y:158.7}},{t:this.shape_425,p:{x:562.2,y:158.8}},{t:this.shape_110,p:{x:567,y:157.8}},{t:this.shape_751,p:{x:570.6,y:157.5}},{t:this.shape_35,p:{x:577.6,y:158.8}},{t:this.shape_603,p:{x:581.5,y:158.8}},{t:this.shape_160,p:{x:585.8,y:158.7}},{t:this.shape_951},{t:this.shape_839,p:{x:387.8,y:171.9}},{t:this.shape_147,p:{x:396.4,y:171.9}},{t:this.shape_950},{t:this.shape_277,p:{x:406.7,y:171.9}},{t:this.shape_113,p:{x:412.3,y:171.9}},{t:this.shape_263,p:{x:421.1,y:171.9}},{t:this.shape_602,p:{x:425.1,y:171.9}},{t:this.shape_135,p:{x:429.3,y:171.9}},{t:this.shape_396,p:{x:436.5,y:174.7}},{t:this.shape_118,p:{x:440.9,y:171.9}},{t:this.shape_601,p:{x:445.1,y:171.9}},{t:this.shape_749,p:{x:447.6,y:170.7}},{t:this.shape_291,p:{x:453.8,y:170.9}},{t:this.shape_304,p:{x:458.5,y:171.9}},{t:this.shape_130,p:{x:466.7,y:171.9}},{t:this.shape_582,p:{x:470.9,y:171.9}},{t:this.shape_581,p:{x:473.3,y:171.9}},{t:this.shape_279,p:{x:477.6,y:171.9}},{t:this.shape_746,p:{x:484.6,y:170.7}},{t:this.shape_399,p:{x:488.7,y:172.9}},{t:this.shape_578,p:{x:492.5,y:171.9}},{t:this.shape_745,p:{x:495,y:170.7}},{t:this.shape_544,p:{x:497.4,y:171.9}},{t:this.shape_73,p:{x:501,y:171.9}},{t:this.shape_12,p:{x:506.7,y:171.9}},{t:this.shape_129,p:{x:512.4,y:171.9}},{t:this.shape_563,p:{x:518.9,y:172}},{t:this.shape_744,p:{x:526.4,y:170.7}},{t:this.shape_473,p:{x:531.1,y:172}},{t:this.shape_384,p:{x:535.8,y:171.9}},{t:this.shape_262,p:{x:539.9,y:172.9}},{t:this.shape_122,p:{x:545.5,y:171.9}},{t:this.shape_949},{t:this.shape,p:{x:560.7,y:171.9}},{t:this.shape_45,p:{x:568.1,y:171.9}},{t:this.shape_742,p:{x:571.4,y:170.7}},{t:this.shape_229,p:{x:575.4,y:171.9}},{t:this.shape_102,p:{x:581.1,y:171.9}},{t:this.shape_268,p:{x:586.3,y:170.9}},{t:this.shape_93,p:{x:378.9,y:185}},{t:this.shape_65,p:{x:384.7,y:185}},{t:this.shape_706,p:{x:389.1,y:183.8}},{t:this.shape_89,p:{x:393.3,y:185}},{t:this.shape_705,p:{x:397.5,y:183.8}},{t:this.shape_948},{t:this.shape_377,p:{x:405.5,y:185.1}},{t:this.shape_703,p:{x:407.9,y:183.8}},{t:this.shape_376,p:{x:410.4,y:185.1}},{t:this.shape_297,p:{x:413.9,y:185}},{t:this.shape_371,p:{x:417.9,y:185.1}},{t:this.shape_947},{t:this.shape_256,p:{x:430.4,y:185.1}},{t:this.shape_912,p:{x:436.8,y:185.1}},{t:this.shape_435,p:{x:445.8,y:185.1}},{t:this.shape_17,p:{x:451.2,y:185}},{t:this.shape_347,p:{x:454.5,y:185.1}},{t:this.shape_138,p:{x:458.5,y:185.1}},{t:this.shape_910,p:{x:466.9,y:185.1}},{t:this.shape_334,p:{x:470.9,y:185.1}},{t:this.shape_88,p:{x:475.1,y:185}},{t:this.shape_322,p:{x:483.4,y:185.1}},{t:this.shape_156,p:{x:489,y:185}},{t:this.shape_479,p:{x:494.9,y:185.1}},{t:this.shape_100,p:{x:503.5,y:185}},{t:this.shape_330,p:{x:507.7,y:185.1}},{t:this.shape_702,p:{x:510.1,y:183.8}},{t:this.shape_119,p:{x:515.6,y:187.2}},{t:this.shape_328,p:{x:518.2,y:185.1}},{t:this.shape_251,p:{x:522.3,y:185.1}},{t:this.shape_111,p:{x:527.6,y:185.1}},{t:this.shape_701,p:{x:531.4,y:183.8}},{t:this.shape_321,p:{x:533.8,y:185.1}},{t:this.shape_391,p:{x:539.1,y:183.8}},{t:this.shape_474,p:{x:543.2,y:186.1}},{t:this.shape_144,p:{x:548.8,y:185}},{t:this.shape_421,p:{x:555.3,y:185.1}},{t:this.shape_698,p:{x:561.6,y:185}},{t:this.shape_148,p:{x:567.5,y:185}},{t:this.shape_309,p:{x:574.2,y:185.1}},{t:this.shape_84,p:{x:577,y:185}},{t:this.shape_8,p:{x:581.8,y:185}},{t:this.shape_254,p:{x:587,y:185.1}},{t:this.shape_59,p:{x:454.1,y:200.3}},{t:this.shape_558,p:{x:457.8,y:198.2}},{t:this.shape_116,p:{x:463.4,y:198.2}},{t:this.shape_42,p:{x:468.9,y:198.2}},{t:this.shape_77,p:{x:474.8,y:198.2}},{t:this.shape_946},{t:this.shape_236,p:{x:488.3,y:197}},{t:this.shape_143,p:{x:492.2,y:198.2}},{t:this.shape_120,p:{x:497.6,y:198.2}},{t:this.shape_945},{t:this.shape_235,p:{x:510.8,y:197}},{t:this.shape_270,p:{x:514.3,y:198.2}},{t:this.shape_132,p:{x:519.3,y:197.2}},{t:this.shape_301,p:{x:523,y:198.2}},{t:this.shape_50,p:{x:527,y:198.2}},{t:this.shape_299,p:{x:530.9,y:198.2}},{t:this.shape_23,p:{x:534.9,y:198.2}},{t:this.shape_233,p:{x:541.6,y:197}},{t:this.shape_114,p:{x:545.1,y:198.2}},{t:this.shape_71,p:{x:550.4,y:198.2}},{t:this.shape_15,p:{x:559.2,y:198.2}},{t:this.shape_48,p:{x:564.7,y:198.2}},{t:this.shape_70,p:{x:569.5,y:197.2}},{t:this.shape_231,p:{x:573.2,y:197}},{t:this.shape_6,p:{x:577.4,y:198.2}},{t:this.shape_944},{t:this.shape_943,p:{x:372.7,y:208.1}},{t:this.shape_125,p:{x:377.5,y:211.4}},{t:this.shape_37,p:{x:383.2,y:211.4}},{t:this.shape_818,p:{x:389,y:211.4}},{t:this.shape_98,p:{x:394.5,y:211.3}},{t:this.shape_395,p:{x:401.2,y:212.4}},{t:this.shape_230,p:{x:403.6,y:210.1}},{t:this.shape_30,p:{x:406.1,y:210.1}},{t:this.shape_53,p:{x:409.6,y:211.3}},{t:this.shape_94,p:{x:415.1,y:211.3}},{t:this.shape_942,p:{x:419.6,y:208.1}},{t:this.shape_81,p:{x:427.2,y:211.3}},{t:this.shape_218,p:{x:433.6,y:211.4}},{t:this.shape_75,p:{x:439.8,y:211.3}},{t:this.shape_822,p:{x:448.3,y:211.3}},{t:this.shape_60,p:{x:452.9,y:211.3}},{t:this.shape_90,p:{x:457.1,y:211.4}},{t:this.shape_215,p:{x:460.7,y:211.4}},{t:this.shape_941},{t:this.shape_29,p:{x:472.4,y:210.1}},{t:this.shape_896,p:{x:476.5,y:212.4}},{t:this.shape_158,p:{x:480.3,y:211.4}},{t:this.shape_27,p:{x:482.8,y:210.1}},{t:this.shape_152,p:{x:485.2,y:211.4}},{t:this.shape_139,p:{x:488.8,y:211.3}},{t:this.shape_741,p:{x:494.5,y:211.4}},{t:this.shape_759,p:{x:500.2,y:211.3}},{t:this.shape_58,p:{x:505.4,y:210.4}},{t:this.shape_940},{t:this.shape_95,p:{x:520.1,y:211.3}},{t:this.shape_837,p:{x:525.3,y:210.4}},{t:this.shape_145,p:{x:529,y:211.4}},{t:this.shape_155,p:{x:533.7,y:211.4}},{t:this.shape_757,p:{x:543,y:211.3}},{t:this.shape_939,p:{x:548.8,y:211.3}},{t:this.shape_25,p:{x:553.2,y:210.1}},{t:this.shape_753,p:{x:557.4,y:211.3}},{t:this.shape_24,p:{x:561.6,y:210.1}},{t:this.shape_938},{t:this.shape_127,p:{x:569.6,y:211.4}},{t:this.shape_18,p:{x:572,y:210.1}},{t:this.shape_96,p:{x:574.5,y:211.4}},{t:this.shape_146,p:{x:578,y:211.3}},{t:this.shape_85,p:{x:582,y:211.4}},{t:this.shape_937},{t:this.shape_33,p:{x:388.4,y:226.6}},{t:this.shape_32,p:{x:391.5,y:221.2}},{t:this.shape_739,p:{x:395.5,y:225.5}},{t:this.shape_936},{t:this.shape_79,p:{x:404.8,y:224.5}},{t:this.shape_313,p:{x:408.9,y:224.5}},{t:this.shape_69,p:{x:417.8,y:224.5}},{t:this.shape_101,p:{x:423,y:223.5}},{t:this.shape_64,p:{x:426.7,y:224.5}},{t:this.shape_642,p:{x:430.3,y:224.8}},{t:this.shape_22,p:{x:434.9,y:221.2}},{t:this.shape_43,p:{x:442.5,y:224.5}},{t:this.shape_149,p:{x:449,y:224.6}},{t:this.shape_72,p:{x:455.2,y:224.5}},{t:this.shape_935},{t:this.shape_41,p:{x:468.3,y:224.5}},{t:this.shape_662,p:{x:472.5,y:224.5}},{t:this.shape_87,p:{x:476.4,y:223.3}},{t:this.shape_934},{t:this.shape_727,p:{x:485.3,y:224.5}},{t:this.shape_76,p:{x:492.5,y:223.3}},{t:this.shape_38,p:{x:494.9,y:224.5}},{t:this.shape_282,p:{x:499,y:224.5}},{t:this.shape_20,p:{x:504.7,y:224.5}},{t:this.shape_933,p:{y:225.5}},{t:this.shape_74,p:{x:518.6,y:224.5}},{t:this.shape_115,p:{x:525,y:224.6}},{t:this.shape_561,p:{x:531.4,y:224.5}},{t:this.shape_123,p:{x:536.7,y:223.5}},{t:this.shape_13,p:{x:543.2,y:224.5}},{t:this.shape_932},{t:this.shape_7,p:{x:552.1,y:224.5}},{t:this.shape_656,p:{x:556.2,y:224.5}},{t:this.shape_2,p:{x:564.8,y:224.5}},{t:this.shape_3,p:{x:570,y:223.5}},{t:this.shape_4,p:{x:573.6,y:224.5}},{t:this.shape_99,p:{x:578.3,y:224.6}},{t:this.shape_67,p:{x:585.3,y:224.6}}]},1).to({state:[{t:this.shape_1029},{t:this.instance_11},{t:this.instance,p:{x:424.8}},{t:this.shape_118,p:{x:378.4,y:65.2}},{t:this.shape_213,p:{x:382.6,y:64}},{t:this.shape_156,p:{x:386.8,y:65.2}},{t:this.shape_558,p:{x:392.1,y:65.2}},{t:this.shape_656,p:{x:397.8,y:65.2}},{t:this.shape_492,p:{x:403.4,y:65.2}},{t:this.shape_471,p:{x:410.6,y:66.2}},{t:this.shape_603,p:{x:413,y:65.2}},{t:this.shape_429,p:{x:416.8,y:65.2}},{t:this.shape_642,p:{x:421.7,y:65.5}},{t:this.shape_602,p:{x:425.8,y:65.2}},{t:this.shape_516,p:{x:429.9,y:65.2}},{t:this.shape_228,p:{x:437.3,y:65.2}},{t:this.shape_1028},{t:this.shape_226,p:{x:447.2,y:65.2}},{t:this.shape_225,p:{x:452.8,y:65.2}},{t:this.shape_670,p:{x:458.6,y:65.2}},{t:this.shape_223,p:{x:467.5,y:65.2}},{t:this.shape_776,p:{x:474.2,y:65.3}},{t:this.shape_742,p:{x:392.8,y:77.4}},{t:this.shape_92,p:{x:396.3,y:78.6}},{t:this.shape_601,p:{x:400.3,y:78.7}},{t:this.shape_62,p:{x:404.6,y:78.7}},{t:this.shape_221,p:{x:410.4,y:78.6}},{t:this.shape_582,p:{x:417.4,y:78.7}},{t:this.shape_983,p:{x:421.5}},{t:this.shape_42,p:{x:427,y:78.7}},{t:this.shape_706,p:{x:431.1,y:77.4}},{t:this.shape_285,p:{x:435.1,y:78.6}},{t:this.shape_211,p:{x:442.2,y:78.7}},{t:this.shape_210,p:{x:445.3,y:79.7}},{t:this.shape_209,p:{x:449.6,y:78.6}},{t:this.shape_208,p:{x:454.3,y:78.7}},{t:this.shape_668,p:{x:458.8,y:78.7}},{t:this.shape_976,p:{x:393.5}},{t:this.shape_884,p:{x:399.1,y:91.2}},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_166,p:{x:417.5,y:92.1}},{t:this.shape_1025},{t:this.shape_882,p:{x:428.4,y:92.1}},{t:this.shape_881,p:{x:432.5,y:91}},{t:this.shape_665,p:{x:436.2,y:92.1}},{t:this.shape_879,p:{x:440.3,y:91}},{t:this.shape_973,p:{x:447.6}},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_970,p:{x:394.9}},{t:this.shape_1022},{t:this.shape_190,p:{x:407.6,y:105.6}},{t:this.shape_189,p:{x:412,y:105.5}},{t:this.shape_765,p:{x:416.4,y:104.4}},{t:this.shape_867,p:{x:420.7,y:106.6}},{t:this.shape_186,p:{x:426,y:105.5}},{t:this.shape_185,p:{x:431.8,y:105.6}},{t:this.shape_184,p:{x:439.8,y:105.5}},{t:this.shape_183,p:{x:445.6,y:105.6}},{t:this.shape_968,p:{x:451.4}},{t:this.shape_181,p:{x:457.5,y:105.5}},{t:this.shape_967,p:{x:389.6}},{t:this.shape_966,p:{x:395.4}},{t:this.shape_178,p:{x:401.2,y:118.1}},{t:this.shape_873,p:{x:411,y:117.9}},{t:this.shape_872,p:{x:415.5,y:119}},{t:this.shape_175,p:{x:420.6,y:118}},{t:this.shape_773,p:{x:424.5,y:117.9}},{t:this.shape_1021},{t:this.shape_172,p:{x:432.8,y:118}},{t:this.shape_171,p:{x:441.3,y:119}},{t:this.shape_666,p:{x:445.7,y:117.9}},{t:this.shape_870,p:{x:450.1,y:119}},{t:this.shape_964,p:{x:456}},{t:this.shape_167,p:{x:462.6,y:119}},{t:this.shape_202,p:{x:505.6,y:132.5}},{t:this.shape_455,p:{x:509.7,y:132.4}},{t:this.shape_599,p:{x:513.9,y:131.3}},{t:this.shape_1020},{t:this.shape_962,p:{x:523.3}},{t:this.shape_866,p:{x:529.2,y:132.5}},{t:this.shape_415,p:{x:331.5,y:148.4}},{t:this.shape_100,p:{x:336,y:145.6}},{t:this.shape_212,p:{x:342,y:145.6}},{t:this.shape_154,p:{x:346.2,y:144.4}},{t:this.shape_427,p:{x:349,y:145.6}},{t:this.shape_133,p:{x:352.2,y:144.4}},{t:this.shape_317,p:{x:356.3,y:145.6}},{t:this.shape_3,p:{x:361.6,y:144.6}},{t:this.shape_81,p:{x:369.9,y:145.6}},{t:this.shape_126,p:{x:374.1,y:144.4}},{t:this.shape_277,p:{x:378,y:145.6}},{t:this.shape_581,p:{x:381.9,y:145.6}},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_578,p:{x:399.5,y:145.6}},{t:this.shape_1017,p:{x:402.3,y:145.6}},{t:this.shape_148,p:{x:407,y:145.6}},{t:this.shape_544,p:{x:410.9,y:145.6}},{t:this.shape_117,p:{x:416.1,y:144.4}},{t:this.shape_1016,p:{x:418.9,y:145.6}},{t:this.shape_143,p:{x:423.6,y:145.6}},{t:this.shape_264,p:{x:428.5,y:144.6}},{t:this.shape_109,p:{x:435,y:144.4}},{t:this.shape_1015},{t:this.shape_385,p:{x:445,y:145.6}},{t:this.shape_1014},{t:this.shape_384,p:{x:454.5,y:145.6}},{t:this.shape_91,p:{x:456.9,y:144.4}},{t:this.shape_416,p:{x:462.2,y:146.6}},{t:this.shape_377,p:{x:464.6,y:145.6}},{t:this.shape_304,p:{x:468.1,y:145.6}},{t:this.shape_87,p:{x:471.7,y:144.4}},{t:this.shape_1013},{t:this.shape_281,p:{x:483.5,y:148.4}},{t:this.shape_413,p:{x:486.2,y:146.6}},{t:this.shape_498,p:{x:490.3,y:145.6}},{t:this.shape_247,p:{x:495.4,y:145.6}},{t:this.shape_376,p:{x:499.4,y:145.6}},{t:this.shape_288,p:{x:503.5,y:145.6}},{t:this.shape_411,p:{x:510.3,y:146.6}},{t:this.shape_371,p:{x:512.7,y:145.6}},{t:this.shape_114,p:{x:516.2,y:145.6}},{t:this.shape_76,p:{x:519.8,y:144.4}},{t:this.shape_1012},{t:this.shape_120,p:{x:530.2,y:145.6}},{t:this.shape_1011},{t:this.shape_347,p:{x:332.3,y:158.8}},{t:this.shape_1010},{t:this.shape_693,p:{x:341.8,y:157.8}},{t:this.shape_1009},{t:this.shape_691,p:{x:351.7,y:157.8}},{t:this.shape_1008},{t:this.shape_334,p:{x:363.4,y:158.8}},{t:this.shape_563,p:{x:368.1,y:158.8}},{t:this.shape_1007},{t:this.shape_473,p:{x:380.3,y:158.8}},{t:this.shape_889,p:{x:389.4,y:159.8}},{t:this.shape_138,p:{x:394.8,y:158.8}},{t:this.shape_37,p:{x:400.4,y:158.8}},{t:this.shape_803,p:{x:406.1,y:158.7}},{t:this.shape_160,p:{x:412.3,y:158.7}},{t:this.shape_330,p:{x:419.3,y:158.8}},{t:this.shape_272,p:{x:422.1,y:158.7}},{t:this.shape_705,p:{x:425.3,y:157.5}},{t:this.shape_216,p:{x:429.4,y:158.7}},{t:this.shape_98,p:{x:435.2,y:158.7}},{t:this.shape_425,p:{x:443.2,y:158.8}},{t:this.shape_144,p:{x:448.8,y:158.7}},{t:this.shape_328,p:{x:453,y:158.8}},{t:this.shape_703,p:{x:455.5,y:157.5}},{t:this.shape_483,p:{x:459.6,y:158.7}},{t:this.shape_95,p:{x:468.5,y:158.7}},{t:this.shape_321,p:{x:472.7,y:158.8}},{t:this.shape_270,p:{x:476.3,y:158.7}},{t:this.shape_702,p:{x:480.3,y:157.5}},{t:this.shape_35,p:{x:484.4,y:158.8}},{t:this.shape_401,p:{x:491.2,y:159.8}},{t:this.shape_309,p:{x:493.6,y:158.8}},{t:this.shape_322,p:{x:497.4,y:158.8}},{t:this.shape_406,p:{x:502.3,y:159}},{t:this.shape_301,p:{x:506.4,y:158.8}},{t:this.shape_269,p:{x:510.5,y:158.7}},{t:this.shape_69,p:{x:519.5,y:158.7}},{t:this.shape_701,p:{x:523.7,y:157.5}},{t:this.shape_391,p:{x:526.1,y:157.5}},{t:this.shape_632,p:{x:530.2,y:159.8}},{t:this.shape_147,p:{x:327.5,y:171.9}},{t:this.shape_335,p:{x:332.8,y:171.9}},{t:this.shape_403,p:{x:337.9,y:172.2}},{t:this.shape_712,p:{x:342.4,y:171.9}},{t:this.shape_12,p:{x:350.1,y:171.9}},{t:this.shape_236,p:{x:354,y:170.7}},{t:this.shape_135,p:{x:358.3,y:171.9}},{t:this.shape_130,p:{x:367.1,y:171.9}},{t:this.shape_262,p:{x:372.9,y:172.9}},{t:this.shape_299,p:{x:376.8,y:171.9}},{t:this.shape_235,p:{x:379.2,y:170.7}},{t:this.shape_748,p:{x:381.4,y:168.6}},{t:this.shape_17,p:{x:384.2,y:171.9}},{t:this.shape_215,p:{x:387.6,y:171.9}},{t:this.shape_116,p:{x:391.6,y:171.9}},{t:this.shape_233,p:{x:398.3,y:170.7}},{t:this.shape_129,p:{x:402.5,y:171.9}},{t:this.shape_158,p:{x:406.7,y:171.9}},{t:this.shape_10,p:{x:410.3,y:171.9}},{t:this.shape,p:{x:416,y:171.9}},{t:this.shape_122,p:{x:421.7,y:171.9}},{t:this.shape_119,p:{x:428.9,y:174}},{t:this.shape_21,p:{x:433.3,y:171.9}},{t:this.shape_152,p:{x:438,y:171.9}},{t:this.shape_393,p:{x:442.1,y:171.9}},{t:this.shape_513,p:{x:448.1,y:171.9}},{t:this.shape_266,p:{x:453.6,y:172.2}},{t:this.shape_145,p:{x:457.7,y:171.9}},{t:this.shape_435,p:{x:462.4,y:172}},{t:this.shape_405,p:{x:468.7,y:171.9}},{t:this.shape_102,p:{x:474.9,y:171.9}},{t:this.shape_127,p:{x:479.1,y:171.9}},{t:this.shape_260,p:{x:486.1,y:171.9}},{t:this.shape_96,p:{x:490.8,y:171.9}},{t:this.shape_146,p:{x:494.3,y:171.9}},{t:this.shape_231,p:{x:498.3,y:170.7}},{t:this.shape_259,p:{x:501.9,y:172.2}},{t:this.shape_265,p:{x:507,y:171.9}},{t:this.shape_93,p:{x:512.6,y:171.9}},{t:this.shape_395,p:{x:519.6,y:172.9}},{t:this.shape_74,p:{x:523.9,y:171.9}},{t:this.shape_89,p:{x:529.9,y:171.9}},{t:this.shape_43,p:{x:326.3,y:185}},{t:this.shape_85,p:{x:330.5,y:185.1}},{t:this.shape_421,p:{x:335.2,y:185.1}},{t:this.shape_282,p:{x:341.5,y:185}},{t:this.shape_230,p:{x:348.7,y:183.8}},{t:this.shape_291,p:{x:352.1,y:184.1}},{t:this.shape_79,p:{x:355.8,y:185.1}},{t:this.shape_912,p:{x:359.9,y:185.1}},{t:this.shape_59,p:{x:366.9,y:187.2}},{t:this.shape_111,p:{x:370.8,y:185.1}},{t:this.shape_2,p:{x:376.4,y:185}},{t:this.shape_64,p:{x:380.6,y:185.1}},{t:this.shape_30,p:{x:383,y:183.8}},{t:this.shape_478,p:{x:387.1,y:185}},{t:this.shape_94,p:{x:393,y:185}},{t:this.shape_1006},{t:this.shape_113,p:{x:407.8,y:185}},{t:this.shape_913,p:{x:413.8,y:185}},{t:this.shape_1005},{t:this.shape_41,p:{x:423.4,y:185.1}},{t:this.shape_218,p:{x:428.1,y:185.1}},{t:this.shape_44,p:{x:434.4,y:185}},{t:this.shape_38,p:{x:441.6,y:185.1}},{t:this.shape_910,p:{x:445.7,y:185.1}},{t:this.shape_88,p:{x:454.3,y:185}},{t:this.shape_53,p:{x:459.6,y:185}},{t:this.shape_29,p:{x:463.6,y:183.8}},{t:this.shape_155,p:{x:468.3,y:185.1}},{t:this.shape_1004},{t:this.shape_479,p:{x:482.7,y:185.1}},{t:this.shape_123,p:{x:487.7,y:184.1}},{t:this.shape_1003},{t:this.shape_251,p:{x:500.9,y:185.1}},{t:this.shape_396,p:{x:507.8,y:187.9}},{t:this.shape_77,p:{x:512.3,y:185}},{t:this.shape_139,p:{x:517.6,y:185}},{t:this.shape_27,p:{x:521.6,y:183.8}},{t:this.shape_752,p:{x:525.2,y:185.3}},{t:this.shape_915,p:{x:530.2,y:185.1}},{t:this.shape_1002},{t:this.shape_16,p:{x:351.2,y:197.2}},{t:this.shape_13,p:{x:354.9,y:198.2}},{t:this.shape_943,p:{x:360.7,y:194.9}},{t:this.shape_750,p:{x:364.8,y:198.5}},{t:this.shape_149,p:{x:371.2,y:198.3}},{t:this.shape_692,p:{x:377,y:198.5}},{t:this.shape_115,p:{x:383.4,y:198.3}},{t:this.shape_557,p:{x:389.7,y:198.2}},{t:this.shape_71,p:{x:395.9,y:198.2}},{t:this.shape_942,p:{x:400.6,y:194.9}},{t:this.shape_48,p:{x:407.7,y:198.2}},{t:this.shape_25,p:{x:411.5,y:197}},{t:this.shape_1001},{t:this.shape_50,p:{x:421,y:198.2}},{t:this.shape_547,p:{x:426.7,y:198.2}},{t:this.shape_75,p:{x:432.9,y:198.2}},{t:this.shape_15,p:{x:441.4,y:198.2}},{t:this.shape_810,p:{x:447.2,y:198.2}},{t:this.shape_1000},{t:this.shape_689,p:{x:457.5,y:198.5}},{t:this.shape_999},{t:this.shape_244,p:{x:472.6,y:198.2}},{t:this.shape_617,p:{x:481.1,y:198.2}},{t:this.shape_242,p:{x:487.5,y:198.2}},{t:this.shape_998},{t:this.shape_7,p:{x:496.2,y:198.2}},{t:this.shape_121,p:{x:500.3,y:198.2}},{t:this.shape_239,p:{x:509.2,y:198.2}},{t:this.shape_24,p:{x:513.1,y:197}},{t:this.shape_6,p:{x:517.4,y:198.2}},{t:this.shape_997},{t:this.shape_90,p:{x:530.5,y:198.2}},{t:this.shape_33,p:{x:445.9,y:213.5}},{t:this.shape_32,p:{x:449.1,y:208.1}},{t:this.shape_996},{t:this.shape_995,p:{x:459.7,y:211.6}},{t:this.shape_99,p:{x:466,y:211.4}},{t:this.shape_816,p:{x:471.9,y:211.6}},{t:this.shape_4,p:{x:476,y:211.4}},{t:this.shape_67,p:{x:480.7,y:211.4}},{t:this.shape_5,p:{x:487,y:211.3}},{t:this.shape_753,p:{x:493.2,y:211.3}},{t:this.shape_22,p:{x:497.9,y:208.1}},{t:this.shape_20,p:{x:505,y:211.4}},{t:this.shape_18,p:{x:508.8,y:210.1}},{t:this.shape_933,p:{y:212.4}},{t:this.shape_23,p:{x:518.3,y:211.4}},{t:this.shape_994},{t:this.shape_72,p:{x:530.2,y:211.3}}]},1).to({state:[{t:this.shape_1066},{t:this.instance_12},{t:this.instance,p:{x:496.8}},{t:this.shape_1065},{t:this.shape_578,p:{x:451.6,y:61.2}},{t:this.shape_333,p:{x:455.8,y:61.2}},{t:this.shape_563,p:{x:462.3,y:61.3}},{t:this.shape_403,p:{x:470.9,y:61.5}},{t:this.shape_236,p:{x:475,y:60}},{t:this.shape_47,p:{x:478.5,y:60.2}},{t:this.shape_550,p:{x:483.8,y:62.2}},{t:this.shape_228,p:{x:490.6,y:61.2}},{t:this.shape_1064},{t:this.shape_226,p:{x:500.6,y:61.2}},{t:this.shape_225,p:{x:506.1,y:61.2}},{t:this.shape_793,p:{x:511.9,y:61.2}},{t:this.shape_189,p:{x:520.9,y:61.2}},{t:this.shape_1063},{t:this.shape_437,p:{x:451.6,y:73.4}},{t:this.shape_815,p:{x:455.7,y:75.7}},{t:this.shape_809,p:{x:461.2,y:74.7}},{t:this.shape_725,p:{x:466,y:74.7}},{t:this.shape_1017,p:{x:469.3,y:74.6}},{t:this.shape_808,p:{x:474.2,y:74.7}},{t:this.shape_657,p:{x:479.8,y:75.7}},{t:this.shape_416,p:{x:486.5,y:75.7}},{t:this.shape_425,p:{x:490.2,y:74.7}},{t:this.shape_436,p:{x:494,y:73.4}},{t:this.shape_473,p:{x:498.7,y:74.7}},{t:this.shape_462,p:{x:506.7,y:74.7}},{t:this.shape_210,p:{x:509.7,y:75.7}},{t:this.shape_209,p:{x:514.1,y:74.6}},{t:this.shape_208,p:{x:518.8,y:74.7}},{t:this.shape_1062},{t:this.shape_489,p:{x:455.1,y:87.1}},{t:this.shape_1061},{t:this.shape_180,p:{x:465.9,y:87.1}},{t:this.shape_781,p:{x:471.7,y:87.1}},{t:this.shape_202,p:{x:479.1,y:88.1}},{t:this.shape_1060},{t:this.shape_780,p:{x:490,y:88.1}},{t:this.shape_174,p:{x:494.1,y:87}},{t:this.shape_963,p:{x:497.8,y:88.1}},{t:this.shape_170,p:{x:501.9,y:87}},{t:this.shape_667,p:{x:509.2,y:88.1}},{t:this.shape_362,p:{x:514.7,y:88.1}},{t:this.shape_1059},{t:this.shape_654,p:{x:456.3,y:100.6}},{t:this.shape_1058},{t:this.shape_190,p:{x:469.2,y:101.6}},{t:this.shape_774,p:{x:473.6,y:101.5}},{t:this.shape_773,p:{x:478,y:100.4}},{t:this.shape_772,p:{x:482.3,y:102.6}},{t:this.shape_455,p:{x:487.6,y:101.5}},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_770,p:{x:507.2,y:101.6}},{t:this.shape_768,p:{x:513,y:101.6}},{t:this.shape_181,p:{x:519.1,y:101.5}},{t:this.shape_767,p:{x:451.2,y:114}},{t:this.shape_463,p:{x:456.9,y:114}},{t:this.shape_178,p:{x:462.8,y:114.1}},{t:this.shape_766,p:{x:472.6,y:113.9}},{t:this.shape_669,p:{x:477.1,y:115}},{t:this.shape_175,p:{x:482.2,y:114}},{t:this.shape_765,p:{x:486.1,y:113.9}},{t:this.shape_355,p:{x:489.7,y:115}},{t:this.shape_172,p:{x:494.4,y:114}},{t:this.shape_171,p:{x:502.9,y:115}},{t:this.shape_599,p:{x:507.3,y:113.9}},{t:this.shape_668,p:{x:511.7,y:115}},{t:this.shape_763,p:{x:517.6,y:115}},{t:this.shape_167,p:{x:524.2,y:115}},{t:this.shape_166,p:{x:570.8,y:128.5}},{t:this.shape_186,p:{x:574.9,y:128.4}},{t:this.shape_666,p:{x:579.1,y:127.3}},{t:this.shape_198,p:{x:582.8,y:128.5}},{t:this.shape_664,p:{x:588.5,y:129.5}},{t:this.shape_869,p:{x:594.4,y:128.5}},{t:this.shape_150,p:{x:381.4,y:141.6}},{t:this.shape_435,p:{x:387.9,y:141.7}},{t:this.shape_332,p:{x:394.1,y:141.6}},{t:this.shape_118,p:{x:402.6,y:141.6}},{t:this.shape_235,p:{x:406.8,y:140.4}},{t:this.shape_1055},{t:this.shape_419,p:{x:415.4,y:141.6}},{t:this.shape_544,p:{x:418.9,y:141.6}},{t:this.shape_1054},{t:this.shape_759,p:{x:429.2,y:141.6}},{t:this.shape_1053},{t:this.shape_511,p:{x:442,y:141.6}},{t:this.shape_995,p:{x:446.4,y:141.9}},{t:this.shape_233,p:{x:453.3,y:140.4}},{t:this.shape_1052},{t:this.shape_231,p:{x:460.4,y:140.4}},{t:this.shape_229,p:{x:464.4,y:141.6}},{t:this.shape_501,p:{x:470.1,y:141.6}},{t:this.shape_308,p:{x:475.6,y:141.6}},{t:this.shape_384,p:{x:482.3,y:141.6}},{t:this.shape_8,p:{x:486.4,y:141.6}},{t:this.shape_315,p:{x:492.6,y:141.6}},{t:this.shape_1051},{t:this.shape_100,p:{x:506,y:141.6}},{t:this.shape_322,p:{x:511.5,y:141.6}},{t:this.shape_741,p:{x:517,y:141.6}},{t:this.shape_757,p:{x:522.8,y:141.6}},{t:this.shape_230,p:{x:529.8,y:140.4}},{t:this.shape_427,p:{x:532.6,y:141.6}},{t:this.shape_303,p:{x:537.3,y:141.6}},{t:this.shape_261,p:{x:544.1,y:144.4}},{t:this.shape_790,p:{x:548.4,y:142.6}},{t:this.shape_377,p:{x:552.3,y:141.6}},{t:this.shape_306,p:{x:556.5,y:141.6}},{t:this.shape_267,p:{x:561.8,y:141.6}},{t:this.shape_753,p:{x:567.6,y:141.6}},{t:this.shape_111,p:{x:575.9,y:141.6}},{t:this.shape_30,p:{x:579.7,y:140.4}},{t:this.shape_1050},{t:this.shape_816,p:{x:589.8,y:141.9}},{t:this.shape_298,p:{x:595.4,y:141.6}},{t:this.shape_345,p:{x:408.7,y:154.7}},{t:this.shape_693,p:{x:413.9,y:153.8}},{t:this.shape_432,p:{x:417.5,y:153.5}},{t:this.shape_16,p:{x:421,y:153.8}},{t:this.shape_988,p:{x:425.8,y:155}},{t:this.shape_329,p:{x:431.7,y:154.7}},{t:this.shape_310,p:{x:438.9,y:156.9}},{t:this.shape_323,p:{x:443.3,y:154.7}},{t:this.shape_472,p:{x:449.1,y:154.7}},{t:this.shape_430,p:{x:453.5,y:153.5}},{t:this.shape_302,p:{x:457.7,y:154.7}},{t:this.shape_691,p:{x:462.9,y:153.8}},{t:this.shape_300,p:{x:468.4,y:154.7}},{t:this.shape_696,p:{x:476.5,y:155.7}},{t:this.shape_643,p:{x:481.5,y:153.8}},{t:this.shape_294,p:{x:486.9,y:154.7}},{t:this.shape_444,p:{x:492.8,y:154.7}},{t:this.shape_295,p:{x:498.6,y:154.7}},{t:this.shape_376,p:{x:505.3,y:154.8}},{t:this.shape_153,p:{x:509.4,y:154.8}},{t:this.shape_292,p:{x:515,y:154.7}},{t:this.shape_371,p:{x:518.9,y:154.8}},{t:this.shape_278,p:{x:523.2,y:154.7}},{t:this.shape_400,p:{x:532,y:154.8}},{t:this.shape_642,p:{x:537.2,y:155}},{t:this.shape_1049},{t:this.shape_418,p:{x:548.3,y:154.8}},{t:this.shape_347,p:{x:551.9,y:154.8}},{t:this.shape_853,p:{x:556.9,y:151.5}},{t:this.shape_221,p:{x:560.8,y:154.7}},{t:this.shape_656,p:{x:566.7,y:154.8}},{t:this.shape_1048},{t:this.shape_507,p:{x:577.6,y:154.8}},{t:this.shape_137,p:{x:583.3,y:154.8}},{t:this.shape_346,p:{x:588,y:154.7}},{t:this.shape_212,p:{x:593.2,y:154.7}},{t:this.shape_714,p:{x:597.1,y:151.5}},{t:this.shape_413,p:{x:399.8,y:168.9}},{t:this.shape_334,p:{x:402.2,y:167.9}},{t:this.shape_337,p:{x:405.3,y:167.9}},{t:this.shape_307,p:{x:409.8,y:167.9}},{t:this.shape_327,p:{x:415.5,y:167.9}},{t:this.shape_290,p:{x:420.9,y:167.9}},{t:this.shape_1047},{t:this.shape_645,p:{x:435.2,y:167.9}},{t:this.shape_421,p:{x:441.4,y:168}},{t:this.shape_159,p:{x:447.8,y:167.9}},{t:this.shape_330,p:{x:452.1,y:167.9}},{t:this.shape_411,p:{x:457.4,y:168.9}},{t:this.shape_138,p:{x:461.4,y:167.9}},{t:this.shape_219,p:{x:465.3,y:166.7}},{t:this.shape_285,p:{x:469.2,y:167.9}},{t:this.shape_213,p:{x:475.9,y:166.7}},{t:this.shape_286,p:{x:480.2,y:167.9}},{t:this.shape_97,p:{x:488.3,y:167.9}},{t:this.shape_218,p:{x:494.5,y:168}},{t:this.shape_325,p:{x:500.9,y:167.9}},{t:this.shape_549,p:{x:508.8,y:167.9}},{t:this.shape_131,p:{x:513.9,y:168.2}},{t:this.shape_1016,p:{x:518.4,y:167.9}},{t:this.shape_512,p:{x:524.5,y:170.7}},{t:this.shape_328,p:{x:527.2,y:167.9}},{t:this.shape_986,p:{x:530.7,y:167.9}},{t:this.shape_930,p:{x:536.5,y:167.9}},{t:this.shape_34,p:{x:540.9,y:167.9}},{t:this.shape_287,p:{x:545.2,y:167.9}},{t:this.shape_277,p:{x:553.5,y:167.9}},{t:this.shape_154,p:{x:557.4,y:166.7}},{t:this.shape_148,p:{x:561.4,y:167.9}},{t:this.shape_63,p:{x:566.9,y:167.9}},{t:this.shape_1046},{t:this.shape_143,p:{x:581.8,y:167.9}},{t:this.shape_120,p:{x:587.2,y:167.9}},{t:this.shape_321,p:{x:591.1,y:167.9}},{t:this.shape_42,p:{x:595.2,y:167.9}},{t:this.shape_133,p:{x:390.2,y:179.8}},{t:this.shape_60,p:{x:393,y:181}},{t:this.shape_116,p:{x:397.8,y:181.1}},{t:this.shape_478,p:{x:403.3,y:181}},{t:this.shape_81,p:{x:412.3,y:181}},{t:this.shape_126,p:{x:416.5,y:179.8}},{t:this.shape_98,p:{x:420.4,y:181}},{t:this.shape_155,p:{x:426.6,y:181.1}},{t:this.shape_309,p:{x:431.3,y:181.1}},{t:this.shape_573,p:{x:435.5,y:181.1}},{t:this.shape_160,p:{x:442,y:181}},{t:this.shape_128,p:{x:450,y:180.1}},{t:this.shape_78,p:{x:454.8,y:181.3}},{t:this.shape_401,p:{x:461.7,y:182.1}},{t:this.shape_108,p:{x:464.8,y:181}},{t:this.shape_147,p:{x:469.9,y:181}},{t:this.shape_31,p:{x:475.1,y:180.1}},{t:this.shape_305,p:{x:483.3,y:181.1}},{t:this.shape_117,p:{x:487.2,y:179.8}},{t:this.shape_135,p:{x:491.5,y:181}},{t:this.shape_301,p:{x:498.5,y:181.1}},{t:this.shape_1045},{t:this.shape_26,p:{x:508.5,y:181}},{t:this.shape_104,p:{x:514.3,y:181.1}},{t:this.shape_803,p:{x:520,y:181}},{t:this.shape_149,p:{x:526.6,y:181.1}},{t:this.shape_506,p:{x:534.2,y:183.9}},{t:this.shape_109,p:{x:536.9,y:179.8}},{t:this.shape_279,p:{x:541.1,y:181}},{t:this.shape_73,p:{x:546.4,y:181}},{t:this.shape_293,p:{x:551.2,y:181.1}},{t:this.shape_217,p:{x:555.9,y:181.1}},{t:this.shape_130,p:{x:561.7,y:181}},{t:this.shape_395,p:{x:568.7,y:182.1}},{t:this.shape_299,p:{x:571.1,y:181.1}},{t:this.shape_156,p:{x:575.4,y:181}},{t:this.shape_125,p:{x:581.4,y:181.1}},{t:this.shape_91,p:{x:585.4,y:179.8}},{t:this.shape_94,p:{x:589.4,y:181}},{t:this.shape_129,p:{x:595.1,y:181}},{t:this.shape_119,p:{x:534.7,y:196.3}},{t:this.shape_122,p:{x:539.1,y:194.2}},{t:this.shape_288,p:{x:545,y:194.2}},{t:this.shape_53,p:{x:550,y:194.2}},{t:this.shape_1044},{t:this.shape_37,p:{x:561.5,y:194.2}},{t:this.shape_83,p:{x:566.3,y:194.2}},{t:this.shape_102,p:{x:571.4,y:194.2}},{t:this.shape_87,p:{x:578.4,y:193}},{t:this.shape_132,p:{x:581.9,y:193.2}},{t:this.shape_76,p:{x:585.5,y:193}},{t:this.shape_50,p:{x:589.5,y:194.2}},{t:this.shape_241,p:{x:595.2,y:194.2}},{t:this.shape_59,p:{x:433.8,y:209.5}},{t:this.shape_215,p:{x:436.4,y:207.4}},{t:this.shape_661,p:{x:438.6,y:204.1}},{t:this.shape_66,p:{x:441.4,y:207.3}},{t:this.shape_84,p:{x:445.1,y:207.3}},{t:this.shape_61,p:{x:450,y:207.4}},{t:this.shape_35,p:{x:458.5,y:207.4}},{t:this.shape_46,p:{x:462.4,y:206.1}},{t:this.shape_93,p:{x:466.7,y:207.3}},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_3,p:{x:485.8,y:206.4}},{t:this.shape_110,p:{x:490.5,y:206.4}},{t:this.shape_158,p:{x:494.1,y:207.4}},{t:this.shape_1040},{t:this.shape_220,p:{x:503.7,y:207.3}},{t:this.shape_89,p:{x:509.9,y:207.3}},{t:this.shape_88,p:{x:518.7,y:207.3}},{t:this.shape_560,p:{x:524,y:207.3}},{t:this.shape_274,p:{x:529.1,y:207.6}},{t:this.shape_1039},{t:this.shape_77,p:{x:538.6,y:207.3}},{t:this.shape_1038},{t:this.shape_39,p:{x:547.6,y:210.2}},{t:this.shape_1037},{t:this.shape_152,p:{x:556.7,y:207.4}},{t:this.shape_145,p:{x:559.2,y:207.4}},{t:this.shape_1036},{t:this.shape_58,p:{x:567.4,y:206.4}},{t:this.shape_127,p:{x:573.9,y:207.4}},{t:this.shape_490,p:{x:578.1,y:207.4}},{t:this.shape_335,p:{x:583.9,y:207.3}},{t:this.shape_75,p:{x:589.4,y:207.3}},{t:this.shape_144,p:{x:595.1,y:207.3}},{t:this.shape_146,p:{x:395.3,y:220.5}},{t:this.shape_297,p:{x:400.4,y:220.5}},{t:this.shape_95,p:{x:406.2,y:220.5}},{t:this.shape_115,p:{x:412.7,y:220.6}},{t:this.shape_291,p:{x:418.4,y:219.5}},{t:this.shape_96,p:{x:424.8,y:220.5}},{t:this.shape_123,p:{x:428.3,y:219.5}},{t:this.shape_304,p:{x:433,y:220.5}},{t:this.shape_85,p:{x:436.5,y:220.5}},{t:this.shape_29,p:{x:439,y:219.3}},{t:this.shape_99,p:{x:443.7,y:220.6}},{t:this.shape_624,p:{x:452.9,y:220.5}},{t:this.shape_552,p:{x:458,y:220.5}},{t:this.shape_727,p:{x:462.8,y:220.5}},{t:this.shape_1035},{t:this.shape_19,p:{x:471.5,y:219.5}},{t:this.shape_266,p:{x:476.3,y:220.8}},{t:this.shape_48,p:{x:484.5,y:220.5}},{t:this.shape_74,p:{x:490.1,y:220.5}},{t:this.shape_27,p:{x:494.3,y:219.3}},{t:this.shape_72,p:{x:498.3,y:220.5}},{t:this.shape_69,p:{x:506.8,y:220.5}},{t:this.shape_25,p:{x:511,y:219.3}},{t:this.shape_939,p:{x:515.1,y:220.5}},{t:this.shape_2,p:{x:521.2,y:220.5}},{t:this.shape_79,p:{x:525.4,y:220.5}},{t:this.shape_264,p:{x:528.9,y:219.5}},{t:this.shape_64,p:{x:535.3,y:220.5}},{t:this.shape_748,p:{x:537.5,y:217.2}},{t:this.shape_45,p:{x:540.3,y:220.5}},{t:this.shape_272,p:{x:544,y:220.5}},{t:this.shape,p:{x:548.9,y:220.5}},{t:this.shape_41,p:{x:552.9,y:220.5}},{t:this.shape_38,p:{x:558.1,y:220.5}},{t:this.shape_558,p:{x:561.7,y:220.5}},{t:this.shape_1034},{t:this.shape_522,p:{x:571.9,y:220.5}},{t:this.shape_270,p:{x:576.2,y:220.5}},{t:this.shape_625,p:{x:584.7,y:220.5}},{t:this.shape_259,p:{x:590.6,y:220.8}},{t:this.shape_114,p:{x:595.7,y:220.5}},{t:this.shape_33,p:{x:451,y:235.8}},{t:this.shape_13,p:{x:453.6,y:233.7}},{t:this.shape_255,p:{x:457.8,y:233.7}},{t:this.shape_7,p:{x:462.5,y:233.7}},{t:this.shape_910,p:{x:466.6,y:233.7}},{t:this.shape_20,p:{x:474.7,y:233.7}},{t:this.shape_1033},{t:this.shape_23,p:{x:485.5,y:233.7}},{t:this.shape_67,p:{x:491.7,y:233.7}},{t:this.shape_24,p:{x:499.2,y:232.4}},{t:this.shape_139,p:{x:502.7,y:233.6}},{t:this.shape_254,p:{x:507.5,y:233.7}},{t:this.shape_90,p:{x:511.6,y:233.7}},{t:this.shape_479,p:{x:516.8,y:233.7}},{t:this.shape_71,p:{x:522.6,y:233.6}},{t:this.shape_719,p:{x:531.1,y:234.6}},{t:this.shape_18,p:{x:535.2,y:232.4}},{t:this.shape_17,p:{x:538.3,y:233.6}},{t:this.shape_1032},{t:this.shape_15,p:{x:547,y:233.6}},{t:this.shape_1031},{t:this.shape_43,p:{x:561.8,y:233.6}},{t:this.shape_101,p:{x:567,y:232.7}},{t:this.shape_4,p:{x:570.7,y:233.7}},{t:this.shape_689,p:{x:574.3,y:233.9}},{t:this.shape_6,p:{x:580.2,y:233.6}},{t:this.shape_1030},{t:this.shape_251,p:{x:595.3,y:233.7}}]},1).to({state:[]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.interactive_Anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		stage.enableMouseOver(24); //מפעיל את האפשרות של מעבר עכבר
		self.popup.Xbtn.addEventListener("click", popDown); //לחיצה על כפתור איקס חלון עם המידע על אנימה
		
		
		var stopHover = "off";
		var TVhover = "on";
		var genersClick = "on";
		
		var ShounenClick = "on";
		var ScifiClick = "on";
		var SchoolClick = "on";
		var HorrorClick = "on";
		var AdventureClick = "on";
		var ShoujoClick = "on";
		
		
		self.back1.addEventListener("click", backToTheStart);
		self.back2.addEventListener("click", backToShounen);
		self.back3.addEventListener("click", backToscifi);
		self.back4.addEventListener("click", backToSchool);
		self.back5.addEventListener("click", backToHorror);
		self.back6.addEventListener("click", backToAdventure);
		self.back7.addEventListener("click", backToShoujo);
		
		
		
		//פןנקציות יציאה וחזור
		
		function popDown() {
		
			self.popup.visible = false;
		};
		
		function backToTheStart() {
		
			genersClick = "on";
		
			//ShounenClick = "on";
			stopHover = "off";
			TVhover = "on";
			//ScifiClick = "on";
			self.info_txt.gotoAndStop(0);
			self.Gshade1.gotoAndStop(0);
			self.Gshade2.gotoAndStop(0);
			self.Gshade3.gotoAndStop(0);
			self.Gshade4.gotoAndStop(0);
			self.Gshade5.gotoAndStop(0);
			self.Gshade6.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.geners_txt.gotoAndStop(0);
		
			self.txt_shounen.y = 91;
			self.shounen_shade1.gotoAndStop(0);
			self.shounen_shade2.gotoAndStop(0);
			self.txt_scifi.y = 91;
			self.scifi_shade1.gotoAndStop(0);
			self.scifi_shade2.gotoAndStop(0);
			self.txt_adventure.y = 91;
			self.adventure_shade1.gotoAndStop(0);
			self.adventure_shade2.gotoAndStop(0);
			self.txt_horror.y = 91;
			self.horror_shade1.gotoAndStop(0);
			self.horror_shade2.gotoAndStop(0);
			self.txt_highschool.y = 91;
			self.school_shade1.gotoAndStop(0);
			self.school_shade2.gotoAndStop(0);
			self.txt_shoujo.y = 91;
			self.shoujo_shade1.gotoAndStop(0);
			self.shoujo_shade2.gotoAndStop(0);
		
		
		}
		
		
		//שונן
		self.Gshade1.addEventListener("mouseover", shounenShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.shounen_shade1.addEventListener("mouseover", shounenShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.shounen_shade2.addEventListener("mouseover", shounenShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.shounen_shade1.addEventListener("mouseout", shounenShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.shounen_shade2.addEventListener("mouseout", shounenShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G1.addEventListener("mouseout", shounenShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G1.addEventListener("click", shounenClick); //לחיצה על הז'אנר שונן
		self.shounen_shade2.addEventListener("click", shounenClick);
		self.shounen_shade1.addEventListener("click", shounenClick);
		
		
		
		
		
		function backToShounen() {
		
			self.Gshade1.gotoAndStop(1);
			self.txt_shounen.y = 38.15;
			self.shounen_shade1.gotoAndStop(2);
			self.shounen_shade2.gotoAndStop(2);
			self.scifi_shade1.gotoAndStop(0);
			self.scifi_shade2.gotoAndStop(0);
			self.info_txt.gotoAndStop(1);
			self.coverAll.gotoAndStop(0);
			self.bigG.gotoAndStop(0);
			self.back1.gotoAndStop(1);
			self.back2.gotoAndStop(0);
			self.geners_txt.gotoAndStop(1);
			stopHover = "on";
			TVhover = "off"
			genersClick = "off";
			//ShounenClick = "on";
		
		}
		
		
		function shounenShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade1.gotoAndStop(1);
		        self.txt_shounen.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.shounen_shade1.gotoAndStop(1);
		        self.shounen_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		
		}
		
		function shounenShadeDown() {
		    if (genersClick == "on") {
		        self.Gshade1.gotoAndStop(0);
		        self.txt_shounen.y = 91;
		    }
		        if (stopHover == "off") {
		        self.shounen_shade1.gotoAndStop(0);
		        self.shounen_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		    }
		}
		
		function shounenClick() {
		    if (genersClick == "on") {
		        self.Gshade1.gotoAndStop(1);
		        self.txt_shounen.y = 38.15;
		        self.shounen_shade1.gotoAndStop(2);
		        self.shounen_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off"
		        genersClick = "off"
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(1);
		    }
		
		}
		
		
		
		
		
		self.Gshade2.addEventListener("mouseover", ScifiShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.scifi_shade1.addEventListener("mouseover", ScifiShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.scifi_shade2.addEventListener("mouseover", ScifiShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.scifi_shade1.addEventListener("mouseout", ScifiShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.scifi_shade2.addEventListener("mouseout", ScifiShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G2.addEventListener("mouseout", ScifiShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G2.addEventListener("click", scifiClick); //לחיצה על הז'אנר שונן
		self.scifi_shade2.addEventListener("click", scifiClick);
		self.scifi_shade1.addEventListener("click", scifiClick);
		
		stopHover = "off";
		TVhover = "on";
		genersClick = "on";
		
		
		
		function ScifiShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade2.gotoAndStop(1);
		        self.txt_scifi.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.scifi_shade1.gotoAndStop(1);
		        self.scifi_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		}
		
		
		function ScifiShadeDown() {
		
		    if (genersClick == "on") {
		        self.Gshade2.gotoAndStop(0);
		        self.txt_scifi.y = 91;
		    }
		        if (stopHover == "off") {
		        self.scifi_shade1.gotoAndStop(0);
		        self.scifi_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		
		    }
		}
		
		function scifiClick() {
		    if (genersClick == "on") {
		        self.Gshade2.gotoAndStop(1);
		        self.txt_scifi.y = 38.15;
		        self.scifi_shade1.gotoAndStop(2);
		        self.scifi_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off"
		        genersClick = "off";
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(2);
		    }
		
		}
		
		
		function backToscifi() {
		
		    self.Gshade2.gotoAndStop(1);
		    self.txt_scifi.y = 38.15;
		    self.Gshade1.gotoAndStop(0);
		    self.txt_shounen.y = 38.15;
		    self.scifi_shade1.gotoAndStop(2);
		    self.scifi_shade2.gotoAndStop(2);
		    self.shounen_shade1.gotoAndStop(0);
		    self.shounen_shade2.gotoAndStop(0);
		    self.info_txt.gotoAndStop(1);
		    self.coverAll.gotoAndStop(0);
		    self.bigG.gotoAndStop(0);
		    self.back1.gotoAndStop(1);
		    self.back3.gotoAndStop(0);
		    self.geners_txt.gotoAndStop(2);
		    stopHover = "on";
		    TVhover = "off"
		    genersClick = "off";
		
		}
		
		
		
		//highschool
		
		self.Gshade3.addEventListener("mouseover", schoolShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.school_shade1.addEventListener("mouseover", schoolShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.school_shade2.addEventListener("mouseover", schoolShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.school_shade1.addEventListener("mouseout", schoolShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.school_shade2.addEventListener("mouseout", schoolShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G3.addEventListener("mouseout", schoolShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G3.addEventListener("click", schoolClick); //לחיצה על הז'אנר שונן
		self.school_shade2.addEventListener("click", schoolClick); //לחיצה על התמונה של הסדרה הראשונה מז'אנר שונן
		self.school_shade1.addEventListener("click", schoolClick); //לחיצה על התמונה השנייה של הסדרה השנייה מז'אנר שונן
		self.back4.addEventListener("click", backToSchool);
		
		function schoolShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade3.gotoAndStop(1);
		        self.txt_highschool.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.school_shade1.gotoAndStop(1);
		        self.school_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		
		}
		
		function schoolShadeDown() {
		    if (genersClick == "on") {
		        self.Gshade3.gotoAndStop(0);
		        self.txt_highschool.y = 91;
		    }
		        if (stopHover == "off") {
		        self.school_shade1.gotoAndStop(0);
		        self.school_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		    }
		}
		
		function schoolClick() {
		    if (genersClick == "on") {
		        self.Gshade3.gotoAndStop(1);
		        self.txt_highschool.y = 38.15;
		        self.school_shade1.gotoAndStop(2);
		        self.school_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off";
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(3);
		    }
		
		}
		
		function backToSchool() {
		
		    self.Gshade3.gotoAndStop(1);
		    self.txt_highschool.y = 38.15;
		    self.school_shade1.gotoAndStop(2);
		    self.school_shade2.gotoAndStop(2);
		    self.info_txt.gotoAndStop(2);
		    self.coverAll.gotoAndStop(0);
		    self.bigG.gotoAndStop(0);
		    self.back1.gotoAndStop(1);
		    self.back4.gotoAndStop(0);
		    self.geners_txt.gotoAndStop(3);
		    stopHover = "on";
		    TVhover = "off";
		    genersClick = "off";
		
		}
		
		//horror
		
		self.Gshade4.addEventListener("mouseover", horrorShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.horror_shade1.addEventListener("mouseover", horrorShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.horror_shade2.addEventListener("mouseover", horrorShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.horror_shade1.addEventListener("mouseout", horrorShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.horror_shade2.addEventListener("mouseout", horrorShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G4.addEventListener("mouseout", horrorShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G4.addEventListener("click", horrorClick); //לחיצה על הז'אנר שונן
		self.horror_shade2.addEventListener("click", horrorClick); //לחיצה על התמונה של הסדרה הראשונה מז'אנר שונן
		self.horror_shade1.addEventListener("click", horrorClick); //לחיצה על התמונה השנייה של הסדרה השנייה מז'אנר שונן
		self.back5.addEventListener("click", backToHorror);
		
		function horrorShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade4.gotoAndStop(1);
		        self.txt_horror.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.horror_shade1.gotoAndStop(1);
		        self.horror_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		
		}
		
		function horrorShadeDown() {
		    if (genersClick == "on") {
		    self.Gshade4.gotoAndStop(0);
		    self.txt_horror.y = 91;
		}
		        if (stopHover == "off") {
		        self.horror_shade1.gotoAndStop(0);
		        self.horror_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		    }
		}
		
		function horrorClick() {
		    if (genersClick == "on") {
		        self.Gshade4.gotoAndStop(1);
		        self.txt_horror.y = 38.15;
		        self.horror_shade1.gotoAndStop(2);
		        self.horror_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off";
		        genersClick = "off"
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(4);
		    }
		
		}
		
		function backToHorror() {
		
		    self.Gshade4.gotoAndStop(1);
		    self.txt_horror.y = 38.15;
		    self.horror_shade1.gotoAndStop(2);
		    self.horror_shade2.gotoAndStop(2);
		    self.info_txt.gotoAndStop(2);
		    self.coverAll.gotoAndStop(0);
		    self.bigG.gotoAndStop(0);
		    self.back1.gotoAndStop(1);
		    self.back5.gotoAndStop(0);
		    self.geners_txt.gotoAndStop(4);
		    stopHover = "on";
		    TVhover = "off";
		    genersClick = "off";
		
		}
		
		//adventure
		
		self.Gshade5.addEventListener("mouseover", adventureShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.adventure_shade1.addEventListener("mouseover", adventureShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.adventure_shade2.addEventListener("mouseover", adventureShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.adventure_shade1.addEventListener("mouseout", adventureShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.adventure_shade2.addEventListener("mouseout", adventureShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G5.addEventListener("mouseout", adventureShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G5.addEventListener("click", adventureClick); //לחיצה על הז'אנר שונן
		self.adventure_shade2.addEventListener("click", adventureClick); //לחיצה על התמונה של הסדרה הראשונה מז'אנר שונן
		self.adventure_shade1.addEventListener("click", adventureClick); //לחיצה על התמונה השנייה של הסדרה השנייה מז'אנר שונן
		self.back6.addEventListener("click", backToAdventure);
		
		function adventureShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade5.gotoAndStop(1);
		        self.txt_adventure.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.adventure_shade1.gotoAndStop(1);
		        self.adventure_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		
		}
		
		function adventureShadeDown() {
		    if (genersClick == "on") {
		        self.Gshade5.gotoAndStop(0);
		        self.txt_adventure.y = 91;
		    }
		        if (stopHover == "off") {
		        self.adventure_shade1.gotoAndStop(0);
		        self.adventure_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		    }
		}
		
		function adventureClick() {
		    if (genersClick == "on") {
		        self.Gshade5.gotoAndStop(1);
		        self.txt_adventure.y = 38.15;
		        self.adventure_shade1.gotoAndStop(2);
		        self.adventure_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off";
		        genersClick = "off"
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(5);
		    }
		
		}
		
		function backToAdventure() {
		
		    self.Gshade5.gotoAndStop(1);
		    self.txt_adventure.y = 38.15;
		    self.adventure_shade1.gotoAndStop(2);
		    self.adventure_shade2.gotoAndStop(2);
		    self.info_txt.gotoAndStop(2);
		    self.coverAll.gotoAndStop(0);
		    self.bigG.gotoAndStop(0);
		    self.back1.gotoAndStop(1);
		    self.back6.gotoAndStop(0);
		    self.geners_txt.gotoAndStop(5);
		    stopHover = "on";
		    TVhover = "off";
		    genersClick = "off";
		
		}
		
		//shoujo
		
		self.Gshade6.addEventListener("mouseover", shoujoShadeUp); //הובר על הז'ארנר הראשון (שונן)
		self.shoujo_shade1.addEventListener("mouseover", shoujoShadeUp); //הובר על הסדרההראשונה שמתאימה לשונן
		self.shoujo_shade2.addEventListener("mouseover", shoujoShadeUp); //הובר על הסדרה השנייה המתאימה לשונן
		self.shoujo_shade1.addEventListener("mouseout", shoujoShadeDown); //הובר על הסדרההראשונה שמתאימה לשונן
		self.shoujo_shade2.addEventListener("mouseout", shoujoShadeDown); //הובר על הסדרה השנייה המתאימה לשונן
		self.G6.addEventListener("mouseout", shoujoShadeDown); //הובר מחוץ לתמונה של הז'אנר שונן
		self.G6.addEventListener("click", shoujoClick); //לחיצה על הז'אנר שונן
		self.shoujo_shade2.addEventListener("click", shoujoClick); //לחיצה על התמונה של הסדרה הראשונה מז'אנר שונן
		self.shoujo_shade1.addEventListener("click", shoujoClick); //לחיצה על התמונה השנייה של הסדרה השנייה מז'אנר שונן
		
		
		
		
		function shoujoShadeUp() {
		    if (genersClick == "on") {
		        self.Gshade6.gotoAndStop(1);
		        self.txt_shoujo.y = 38.15;
		    }
		    if (TVhover == "on") {
		        self.shoujo_shade1.gotoAndStop(1);
		        self.shoujo_shade2.gotoAndStop(1);
		        self.info_txt.gotoAndStop(1);
		    }
		
		}
		
		function shoujoShadeDown() {
		    if (genersClick == "on") {
		        self.Gshade6.gotoAndStop(0);
		        self.txt_shoujo.y = 91;
		    }
		        if (stopHover == "off") {
		        self.shoujo_shade1.gotoAndStop(0);
		        self.shoujo_shade2.gotoAndStop(0);
		        self.info_txt.gotoAndStop(0);
		    }
		}
		
		function shoujoClick() {
		    if (genersClick == "on") {
		        self.Gshade6.gotoAndStop(1);
		        self.txt_shoujo.y = 38.15;
		        self.shoujo_shade1.gotoAndStop(2);
		        self.shoujo_shade2.gotoAndStop(2);
		        self.info_txt.gotoAndStop(2);
		        self.popup.visible = false;
		        stopHover = "on";
		        TVhover = "off";
		        genersClick = "off"
		        self.back1.gotoAndStop(1);
		        self.geners_txt.gotoAndStop(6);
		    }
		
		}
		
		function backToShoujo() {
		
		    self.Gshade6.gotoAndStop(1);
		    self.txt_shoujo.y = 38.15;
		    self.shoujo_shade1.gotoAndStop(2);
		    self.shoujo_shade2.gotoAndStop(2);
		    self.info_txt.gotoAndStop(2);
		    self.coverAll.gotoAndStop(0);
		    self.bigG.gotoAndStop(0);
		    self.back1.gotoAndStop(1);
		    self.back7.gotoAndStop(0);
		    self.geners_txt.gotoAndStop(6);
		    stopHover = "on";
		    TVhover = "off";
		    genersClick = "off";
		
		}
		
		
		
		//screeens
		
		
		function showBigScreen0() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(1);
			self.info_txt.gotoAndStop(3);
			self.back2.gotoAndStop(1);
		
		
		}
		function showBigScreen1() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(2);
			self.info_txt.gotoAndStop(3);
			self.back4.gotoAndStop(1);
		
		
		}
		
		function showBigScreen2() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(3);
			self.info_txt.gotoAndStop(3);
			self.back6.gotoAndStop(1);
		
		}
		
		function showBigScreen3() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(4);
			self.info_txt.gotoAndStop(3);
			self.back7.gotoAndStop(1);
		
		}
		
		function showBigScreen4() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(5);
			self.info_txt.gotoAndStop(3);
			self.back5.gotoAndStop(1);
		
		
		}
		
		function showBigScreen5() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(6);
			self.info_txt.gotoAndStop(3);
			self.back6.gotoAndStop(1);
		
		
		}
		
		function showBigScreen6() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(7);
			self.info_txt.gotoAndStop(3);
			self.back5.gotoAndStop(1);
		
		
		}
		
		function showBigScreen7() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(8);
			self.info_txt.gotoAndStop(3);
			self.back7.gotoAndStop(1);
		
		
		}
		
		
		function showBigScreen8() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(9);
			self.info_txt.gotoAndStop(3);
			self.back2.gotoAndStop(1);
		
		
		}
		
		
		function showBigScreen9() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(10);
			self.info_txt.gotoAndStop(3);
			self.back3.gotoAndStop(1);
		
		
		
		}
		
		function showBigScreen10() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(11);
			self.info_txt.gotoAndStop(3);
			self.back4.gotoAndStop(1);
		
		}
		
		function showBigScreen11() {
		
			self.coverAll.gotoAndStop(1);
			self.geners_txt.gotoAndStop(0);
			self.back1.gotoAndStop(0);
			self.bigG.gotoAndStop(12);
			self.info_txt.gotoAndStop(3);
			self.back3.gotoAndStop(1);
		
		
		}
		
		
		self.pic0.addEventListener("click", showBigScreen0);
		self.pic1.addEventListener("click", showBigScreen1);
		self.pic2.addEventListener("click", showBigScreen2);
		self.pic3.addEventListener("click", showBigScreen3);
		self.pic4.addEventListener("click", showBigScreen4);
		self.pic5.addEventListener("click", showBigScreen5);
		self.pic6.addEventListener("click", showBigScreen6);
		self.pic7.addEventListener("click", showBigScreen7);
		self.pic8.addEventListener("click", showBigScreen8);
		self.pic9.addEventListener("click", showBigScreen9);
		self.pic10.addEventListener("click", showBigScreen10);
		self.pic11.addEventListener("click", showBigScreen11);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.back7 = new lib.go_back_mc();
	this.back7.name = "back7";
	this.back7.parent = this;
	this.back7.setTransform(853,250.4);

	this.back6 = new lib.go_back_mc();
	this.back6.name = "back6";
	this.back6.parent = this;
	this.back6.setTransform(853,250.4);

	this.back5 = new lib.go_back_mc();
	this.back5.name = "back5";
	this.back5.parent = this;
	this.back5.setTransform(853,250.4);

	this.back4 = new lib.go_back_mc();
	this.back4.name = "back4";
	this.back4.parent = this;
	this.back4.setTransform(853,250.4);

	this.back3 = new lib.go_back_mc();
	this.back3.name = "back3";
	this.back3.parent = this;
	this.back3.setTransform(853,250.4);

	this.back2 = new lib.go_back_mc();
	this.back2.name = "back2";
	this.back2.parent = this;
	this.back2.setTransform(853,250.4);

	this.bigG = new lib.bigScreen();
	this.bigG.name = "bigG";
	this.bigG.parent = this;
	this.bigG.setTransform(92.9,173.9,1.199,1.199,0,0,0,-3.8,-11.3);

	this.geners_txt = new lib.geners_text();
	this.geners_txt.name = "geners_txt";
	this.geners_txt.parent = this;
	this.geners_txt.setTransform(729.7,269.1,1,1,0,0,0,-2.3,-34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.geners_txt},{t:this.bigG},{t:this.back2},{t:this.back3},{t:this.back4},{t:this.back5},{t:this.back6},{t:this.back7}]}).wait(1));

	// deteils
	this.coverAll = new lib.background_cover();
	this.coverAll.name = "coverAll";
	this.coverAll.parent = this;
	this.coverAll.setTransform(478,404.3,1.614,1.352,0,0,0,10.1,-119);

	this.back1 = new lib.go_back_mc();
	this.back1.name = "back1";
	this.back1.parent = this;
	this.back1.setTransform(916.3,231.8,0.509,0.509,0,0,0,26.7,-4.3);

	this.info_txt = new lib.info_mc();
	this.info_txt.name = "info_txt";
	this.info_txt.parent = this;
	this.info_txt.setTransform(480.2,173,1,1,0,0,0,0,-39.6);

	this.scifi_txt2 = new cjs.Text("קליע שחור", "11px 'Arial'", "#FFFFFF");
	this.scifi_txt2.name = "scifi_txt2";
	this.scifi_txt2.textAlign = "center";
	this.scifi_txt2.lineHeight = 14;
	this.scifi_txt2.lineWidth = 83;
	this.scifi_txt2.parent = this;
	this.scifi_txt2.setTransform(116.4,482.9);

	this.scifi_shade2 = new lib.series_shade();
	this.scifi_shade2.name = "scifi_shade2";
	this.scifi_shade2.parent = this;
	this.scifi_shade2.setTransform(108.5,462.3);

	this.school_txt2 = new cjs.Text("מועדון מאחרים", "11px 'Arial'", "#FFFFFF");
	this.school_txt2.name = "school_txt2";
	this.school_txt2.textAlign = "center";
	this.school_txt2.lineHeight = 14;
	this.school_txt2.lineWidth = 83;
	this.school_txt2.parent = this;
	this.school_txt2.setTransform(230.2,481.3);

	this.school_shade2 = new lib.series_shade();
	this.school_shade2.name = "school_shade2";
	this.school_shade2.parent = this;
	this.school_shade2.setTransform(223.3,460);

	this.scifi_txt1 = new cjs.Text("עולם מואץ", "11px 'Arial'", "#FFFFFF");
	this.scifi_txt1.name = "scifi_txt1";
	this.scifi_txt1.textAlign = "center";
	this.scifi_txt1.lineHeight = 14;
	this.scifi_txt1.lineWidth = 83;
	this.scifi_txt1.parent = this;
	this.scifi_txt1.setTransform(345,481.3);

	this.scifi_shade1 = new lib.series_shade();
	this.scifi_shade1.name = "scifi_shade1";
	this.scifi_shade1.parent = this;
	this.scifi_shade1.setTransform(335.6,460);

	this.shounen_txt2 = new cjs.Text("מארוטו", "11px 'Arial'", "#FFFFFF");
	this.shounen_txt2.name = "shounen_txt2";
	this.shounen_txt2.textAlign = "center";
	this.shounen_txt2.lineHeight = 14;
	this.shounen_txt2.lineWidth = 83;
	this.shounen_txt2.parent = this;
	this.shounen_txt2.setTransform(457.2,482.9);

	this.shounen_shade2 = new lib.series_shade();
	this.shounen_shade2.name = "shounen_shade2";
	this.shounen_shade2.parent = this;
	this.shounen_shade2.setTransform(446.8,459.1);

	this.shoujo_txt2 = new cjs.Text("טוקיו מיו מיו", "11px 'Arial'", "#FFFFFF");
	this.shoujo_txt2.name = "shoujo_txt2";
	this.shoujo_txt2.textAlign = "center";
	this.shoujo_txt2.lineHeight = 14;
	this.shoujo_txt2.lineWidth = 83;
	this.shoujo_txt2.parent = this;
	this.shoujo_txt2.setTransform(116.2,398.1);

	this.shoujo_shade2 = new lib.series_shade();
	this.shoujo_shade2.name = "shoujo_shade2";
	this.shoujo_shade2.parent = this;
	this.shoujo_shade2.setTransform(108.5,376.6);

	this.horror_txt2 = new cjs.Text("טפיל", "11px 'Arial'", "#FFFFFF");
	this.horror_txt2.name = "horror_txt2";
	this.horror_txt2.textAlign = "center";
	this.horror_txt2.lineHeight = 14;
	this.horror_txt2.lineWidth = 83;
	this.horror_txt2.parent = this;
	this.horror_txt2.setTransform(231.5,398.1);

	this.horror_shade2 = new lib.series_shade();
	this.horror_shade2.name = "horror_shade2";
	this.horror_shade2.parent = this;
	this.horror_shade2.setTransform(222.4,375.2);

	this.adventure_txt2 = new cjs.Text("פוקימון", "11px 'Arial'", "#FFFFFF");
	this.adventure_txt2.name = "adventure_txt2";
	this.adventure_txt2.textAlign = "center";
	this.adventure_txt2.lineHeight = 14;
	this.adventure_txt2.lineWidth = 83;
	this.adventure_txt2.parent = this;
	this.adventure_txt2.setTransform(343.5,398.1);

	this.adventure_shade2 = new lib.series_shade();
	this.adventure_shade2.name = "adventure_shade2";
	this.adventure_shade2.parent = this;
	this.adventure_shade2.setTransform(333.5,377.5);

	this.horror_txt1 = new cjs.Text("מחברת המוות", "11px 'Arial'", "#FFFFFF");
	this.horror_txt1.name = "horror_txt1";
	this.horror_txt1.textAlign = "center";
	this.horror_txt1.lineHeight = 14;
	this.horror_txt1.lineWidth = 83;
	this.horror_txt1.parent = this;
	this.horror_txt1.setTransform(457.2,398.1);

	this.horror_shade1 = new lib.series_shade();
	this.horror_shade1.name = "horror_shade1";
	this.horror_shade1.parent = this;
	this.horror_shade1.setTransform(446.8,374.3);

	this.shoujo_txt1 = new cjs.Text("סל פירות", "11px 'Arial'", "#FFFFFF");
	this.shoujo_txt1.name = "shoujo_txt1";
	this.shoujo_txt1.textAlign = "center";
	this.shoujo_txt1.lineHeight = 14;
	this.shoujo_txt1.lineWidth = 83;
	this.shoujo_txt1.parent = this;
	this.shoujo_txt1.setTransform(116.2,311.4);

	this.shoujo_shade1 = new lib.series_shade();
	this.shoujo_shade1.name = "shoujo_shade1";
	this.shoujo_shade1.parent = this;
	this.shoujo_shade1.setTransform(105.8,290.5);

	this.adventure_txt1 = new cjs.Text("אין משחק אין חיים", "11px 'Arial'", "#FFFFFF");
	this.adventure_txt1.name = "adventure_txt1";
	this.adventure_txt1.textAlign = "center";
	this.adventure_txt1.lineHeight = 14;
	this.adventure_txt1.lineWidth = 83;
	this.adventure_txt1.parent = this;
	this.adventure_txt1.setTransform(230.2,311.4);

	this.adventure_shade1 = new lib.series_shade();
	this.adventure_shade1.name = "adventure_shade1";
	this.adventure_shade1.parent = this;
	this.adventure_shade1.setTransform(222.7,290.5);

	this.school_txt1 = new cjs.Text("סיפור האהבה שלי", "11px 'Arial'", "#FFFFFF");
	this.school_txt1.name = "school_txt1";
	this.school_txt1.textAlign = "center";
	this.school_txt1.lineHeight = 14;
	this.school_txt1.lineWidth = 83;
	this.school_txt1.parent = this;
	this.school_txt1.setTransform(343.5,311.4);

	this.school_shade1 = new lib.series_shade();
	this.school_shade1.name = "school_shade1";
	this.school_shade1.parent = this;
	this.school_shade1.setTransform(334.8,292.8);

	this.shounen_txt1 = new cjs.Text("פייריטייל", "11px 'Arial'", "#FFFFFF");
	this.shounen_txt1.name = "shounen_txt1";
	this.shounen_txt1.textAlign = "center";
	this.shounen_txt1.lineHeight = 14;
	this.shounen_txt1.lineWidth = 83;
	this.shounen_txt1.parent = this;
	this.shounen_txt1.setTransform(457.4,311.4);

	this.popup = new lib.pop_up();
	this.popup.name = "popup";
	this.popup.parent = this;
	this.popup.setTransform(687.1,383.5,1.236,1.236,0,0,0,4.8,-33);

	this.pic11 = new lib.series_photo_click();
	this.pic11.name = "pic11";
	this.pic11.parent = this;
	this.pic11.setTransform(106.1,462.3,1,1,0,0,0,0,0.6);

	this.pic9 = new lib.series_photo_click();
	this.pic9.name = "pic9";
	this.pic9.parent = this;
	this.pic9.setTransform(333.2,460.8,1,1,0,0,0,0,0.6);

	this.pic4 = new lib.series_photo_click();
	this.pic4.name = "pic4";
	this.pic4.parent = this;
	this.pic4.setTransform(446.8,374.4,1,1,0,0,0,0,0.6);

	this.pic6 = new lib.series_photo_click();
	this.pic6.name = "pic6";
	this.pic6.parent = this;
	this.pic6.setTransform(220,376.1,1,1,0,0,0,0,0.6);

	this.pic7 = new lib.series_photo_click();
	this.pic7.name = "pic7";
	this.pic7.parent = this;
	this.pic7.setTransform(106.1,376.7,1,1,0,0,0,0,0.6);

	this.pic3 = new lib.series_photo_click();
	this.pic3.name = "pic3";
	this.pic3.parent = this;
	this.pic3.setTransform(105.8,290.5,1,1,0,0,0,0,0.6);

	this.pic5 = new lib.series_photo_click();
	this.pic5.name = "pic5";
	this.pic5.parent = this;
	this.pic5.setTransform(333.5,374.4,1,1,0,0,0,0,0.6);

	this.pic2 = new lib.series_photo_click();
	this.pic2.name = "pic2";
	this.pic2.parent = this;
	this.pic2.setTransform(220.3,289.7,1,1,0,0,0,0,0.6);

	this.pic10 = new lib.series_photo_click();
	this.pic10.name = "pic10";
	this.pic10.parent = this;
	this.pic10.setTransform(220.1,461.6,1,1,0,0,0,0,0.6);

	this.pic1 = new lib.series_photo_click();
	this.pic1.name = "pic1";
	this.pic1.parent = this;
	this.pic1.setTransform(334.1,289,1,1,0,0,0,0,0.6);

	this.pic8 = new lib.series_photo_click();
	this.pic8.name = "pic8";
	this.pic8.parent = this;
	this.pic8.setTransform(446.8,459.9,1,1,0,0,0,0,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape.setTransform(117.1,489.1,0.713,0.713);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_1.setTransform(117.1,489.1,0.713,0.713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_2.setTransform(230.7,489.1,0.713,0.713);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_3.setTransform(230.7,489.1,0.713,0.713);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_4.setTransform(344.4,489.1,0.713,0.713);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_5.setTransform(344.4,489.1,0.713,0.713);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_6.setTransform(458.1,489.1,0.713,0.713);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_7.setTransform(458.1,489.1,0.713,0.713);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_8.setTransform(117.1,404.3,0.713,0.713);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_9.setTransform(117.1,404.3,0.713,0.713);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_10.setTransform(230.7,404.3,0.713,0.713);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_11.setTransform(230.7,404.3,0.713,0.713);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_12.setTransform(344.4,404.3,0.713,0.713);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_13.setTransform(344.4,404.3,0.713,0.713);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_14.setTransform(458.1,404.3,0.713,0.713);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_15.setTransform(458.1,404.3,0.713,0.713);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_16.setTransform(116.9,318.7,0.713,0.713);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_17.setTransform(116.9,318.7,0.713,0.713);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_18.setTransform(230.6,318.7,0.713,0.713);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_19.setTransform(230.6,318.7,0.713,0.713);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_20.setTransform(344.2,318.7,0.713,0.713);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_21.setTransform(344.2,318.7,0.713,0.713);

	this.shounen_shade1 = new lib.series_shade();
	this.shounen_shade1.name = "shounen_shade1";
	this.shounen_shade1.parent = this;
	this.shounen_shade1.setTransform(446.8,289.6);

	this.pic0 = new lib.series_photo_click();
	this.pic0.name = "pic0";
	this.pic0.parent = this;
	this.pic0.setTransform(447.4,288,1,1,0,0,0,0,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CCCCCC").ss(1.7,1,1).p("ApZiIISzAAIAAERIyzAAg");
	this.shape_22.setTransform(457.9,318.7,0.713,0.713);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4472C4").s().p("ApZCJIAAkRISzAAIAAERg");
	this.shape_23.setTransform(457.9,318.7,0.713,0.713);

	this.txt_shoujo = new cjs.Text("שוג'ו", "20px 'Arial'", "#CCCCCC");
	this.txt_shoujo.name = "txt_shoujo";
	this.txt_shoujo.textAlign = "center";
	this.txt_shoujo.lineHeight = 24;
	this.txt_shoujo.lineWidth = 147;
	this.txt_shoujo.parent = this;
	this.txt_shoujo.setTransform(100.2,93);

	this.txt_adventure = new cjs.Text("הרפתקאות", "20px 'Arial'", "#CCCCCC");
	this.txt_adventure.name = "txt_adventure";
	this.txt_adventure.textAlign = "center";
	this.txt_adventure.lineHeight = 24;
	this.txt_adventure.lineWidth = 147;
	this.txt_adventure.parent = this;
	this.txt_adventure.setTransform(251.6,93);

	this.Gshade5 = new lib.Gadventure_shade();
	this.Gshade5.name = "Gshade5";
	this.Gshade5.parent = this;
	this.Gshade5.setTransform(251.8,106.6,1,1,0,0,0,-4.9,2.8);

	this.G5 = new lib.G5Pic();
	this.G5.name = "G5";
	this.G5.parent = this;
	this.G5.setTransform(252.8,106.2,1,1,0,0,0,-4.9,2.8);

	this.Gshade6 = new lib.Gshoujo_shade();
	this.Gshade6.name = "Gshade6";
	this.Gshade6.parent = this;
	this.Gshade6.setTransform(99.6,106.4,1,1,0,0,0,-4.9,2.8);

	this.G6 = new lib.G6Pic();
	this.G6.name = "G6";
	this.G6.parent = this;
	this.G6.setTransform(100.3,106.6,1,1,0,0,0,-4.9,2.8);

	this.txt_horror = new cjs.Text("אימה", "20px 'Arial'", "#CCCCCC");
	this.txt_horror.name = "txt_horror";
	this.txt_horror.textAlign = "center";
	this.txt_horror.lineHeight = 24;
	this.txt_horror.lineWidth = 147;
	this.txt_horror.parent = this;
	this.txt_horror.setTransform(404.3,93);

	this.Gshade4 = new lib.Ghorror_shade();
	this.Gshade4.name = "Gshade4";
	this.Gshade4.parent = this;
	this.Gshade4.setTransform(403.5,106.3,1,1,0,0,0,-4.9,2.8);

	this.G4 = new lib.G4Pic();
	this.G4.name = "G4";
	this.G4.parent = this;
	this.G4.setTransform(405.1,106.2,1,1,0,0,0,-4.9,2.8);

	this.txt_highschool = new cjs.Text("חיי בית ספר", "20px 'Arial'", "#CCCCCC");
	this.txt_highschool.name = "txt_highschool";
	this.txt_highschool.textAlign = "center";
	this.txt_highschool.lineHeight = 24;
	this.txt_highschool.lineWidth = 147;
	this.txt_highschool.parent = this;
	this.txt_highschool.setTransform(555.3,93);

	this.Gshade3 = new lib.Gschool_shade();
	this.Gshade3.name = "Gshade3";
	this.Gshade3.parent = this;
	this.Gshade3.setTransform(555.8,106.3,1,1,0,0,0,-4.9,2.8);

	this.G3 = new lib.G3Pic();
	this.G3.name = "G3";
	this.G3.parent = this;
	this.G3.setTransform(557,106.2,1,1,0,0,0,-4.9,2.8);

	this.txt_shounen = new cjs.Text("שונן", "20px 'Arial'", "#CCCCCC");
	this.txt_shounen.name = "txt_shounen";
	this.txt_shounen.textAlign = "center";
	this.txt_shounen.lineHeight = 24;
	this.txt_shounen.lineWidth = 147;
	this.txt_shounen.parent = this;
	this.txt_shounen.setTransform(859.6,93);

	this.txt_scifi = new cjs.Text("מדע בדיוני", "20px 'Arial'", "#CCCCCC");
	this.txt_scifi.name = "txt_scifi";
	this.txt_scifi.textAlign = "center";
	this.txt_scifi.lineHeight = 24;
	this.txt_scifi.lineWidth = 147;
	this.txt_scifi.parent = this;
	this.txt_scifi.setTransform(708.6,93);

	this.Gshade1 = new lib.Gshounen_shade();
	this.Gshade1.name = "Gshade1";
	this.Gshade1.parent = this;
	this.Gshade1.setTransform(859.8,105.8,1,1,0,0,0,-4.9,2.8);

	this.G1 = new lib.G1Pic();
	this.G1.name = "G1";
	this.G1.parent = this;
	this.G1.setTransform(859.2,106.6,1,1,0,0,0,-4.9,2.8);

	this.Gshade2 = new lib.Gscifi_shade();
	this.Gshade2.name = "Gshade2";
	this.Gshade2.parent = this;
	this.Gshade2.setTransform(708.1,106,1,1,0,0,0,-4.9,2.8);

	this.G2 = new lib.G2Pic();
	this.G2.name = "G2";
	this.G2.parent = this;
	this.G2.setTransform(708.1,106,1,1,0,0,0,-4.9,2.8);

	this.header = new cjs.Text("ז'אנרים וסדרות מומלצות של עולם האנימה", "35px 'Arial'");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 41;
	this.header.lineWidth = 569;
	this.header.parent = this;
	this.header.setTransform(476.2,13);

	this.instance = new lib.geners();
	this.instance.parent = this;
	this.instance.setTransform(23,65,0.494,0.494);

	this.instance_1 = new lib.series();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,254,0.496,0.496);

	this.TV = new lib.fullTV();
	this.TV.name = "TV";
	this.TV.parent = this;
	this.TV.setTransform(276.1,410.4,0.39,0.409,0,0,0,0.4,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CCCCCC").ss(0.1,1,1).p("Alzh7ILnAAIAAD3IrnAAg");
	this.shape_24.setTransform(470.7,319.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4472C4").s().p("AlzB8IAAj3ILnAAIAAD3g");
	this.shape_25.setTransform(470.7,319.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.TV},{t:this.instance_1},{t:this.instance},{t:this.header},{t:this.G2},{t:this.Gshade2},{t:this.G1},{t:this.Gshade1},{t:this.txt_scifi},{t:this.txt_shounen},{t:this.G3},{t:this.Gshade3},{t:this.txt_highschool},{t:this.G4},{t:this.Gshade4},{t:this.txt_horror},{t:this.G6},{t:this.Gshade6},{t:this.G5},{t:this.Gshade5},{t:this.txt_adventure},{t:this.txt_shoujo},{t:this.shape_23},{t:this.shape_22},{t:this.pic0},{t:this.shounen_shade1},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.pic8},{t:this.pic1},{t:this.pic10},{t:this.pic2},{t:this.pic5},{t:this.pic3},{t:this.pic7},{t:this.pic6},{t:this.pic4},{t:this.pic9},{t:this.pic11},{t:this.popup},{t:this.shounen_txt1},{t:this.school_shade1},{t:this.school_txt1},{t:this.adventure_shade1},{t:this.adventure_txt1},{t:this.shoujo_shade1},{t:this.shoujo_txt1},{t:this.horror_shade1},{t:this.horror_txt1},{t:this.adventure_shade2},{t:this.adventure_txt2},{t:this.horror_shade2},{t:this.horror_txt2},{t:this.shoujo_shade2},{t:this.shoujo_txt2},{t:this.shounen_shade2},{t:this.shounen_txt2},{t:this.scifi_shade1},{t:this.scifi_txt1},{t:this.school_shade2},{t:this.school_txt2},{t:this.scifi_shade2},{t:this.scifi_txt2},{t:this.info_txt},{t:this.back1},{t:this.coverAll}]}).wait(1));

	// background
	this.instance_2 = new lib.background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,-39,1.63,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,251,1020.2,676);
// library properties:
lib.properties = {
	id: '74FE58DD9875A7429A9051F4F65A19E0',
	width: 960,
	height: 580,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/interactive_Anime_atlas_.png?1529919393866", id:"interactive_Anime_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['74FE58DD9875A7429A9051F4F65A19E0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;