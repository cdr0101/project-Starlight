class Experiment {
  // Candidate Details
	static rollNos = '102117161,102117150'
	static names = 'The Visioners(Chelsi, Kashish)'
  

  canvasSel = '#myCanvas'
  fillControls
  styleControls

  constructor() {
    const Cls = this.constructor
    this.fillControls
      = new Controls('#fill-controls', {
	submitSel: '#fill-submit'
      })

    this.styleControls
      = new Controls('#stroke-controls', {
	submitSel: '#stroke-submit'
      })

  }

// UFO
  static createGeometry () {
    const Cls = this
    return Cls.saucerGeometry()
  }

  static saucerGeometry () {
    const path = new Path2D()
    path.moveTo(89.152133, 182.962350);
    path.bezierCurveTo(105.382270, 182.846350, 125.611930, 182.228950, 119.507240, 182.415690);
    path.bezierCurveTo(118.246460, 193.820920, 92.970951, 199.016620, 89.152133, 182.962350);
    path.moveTo(150.696310, 144.827740);
    path.bezierCurveTo(109.194580, 166.663960, 61.825010, 143.990500, 58.476035, 144.827740);
    path.bezierCurveTo(40.252454, 150.656560, 30.185665, 157.655640, 28.085264, 166.415670);
    path.bezierCurveTo(30.736888, 190.861470, 184.702530, 188.098620, 180.039120, 160.966290);
    path.bezierCurveTo(179.226020, 154.771520, 169.950610, 149.346040, 150.696310, 144.827740);
    path.moveTo(39.403207, 175.952090);
    path.bezierCurveTo(48.866539, 178.691590, 58.545042, 180.807420, 68.169644, 181.715850);
    path.bezierCurveTo(64.039803, 194.808900, 38.983927, 190.210050, 39.403207, 175.952090);
    path.moveTo(140.849350, 180.126980);
    path.bezierCurveTo(150.599200, 179.075580, 162.101610, 176.100720, 171.228340, 172.279030);
    path.bezierCurveTo(172.273060, 186.408950, 146.344900, 192.827790, 140.849350, 180.126980);
    path.moveTo(59.104812, 145.142130);
    path.bezierCurveTo(99.603153, 158.079400, 129.723660, 157.667280, 150.696300, 145.142130);
    path.bezierCurveTo(155.215360, 114.645010, 120.035390, 100.147160, 103.747810, 101.861480);
    path.bezierCurveTo(75.939907, 101.871480, 54.138069, 123.943560, 59.104812, 145.142130);
    path.moveTo(83.193107, 134.685160);
    path.bezierCurveTo(80.182772, 135.149260, 77.734226, 133.374130, 77.006235, 131.129890);
    path.bezierCurveTo(76.442736, 127.108610, 78.683997, 126.154950, 79.096389, 126.081390);
    path.bezierCurveTo(80.060468, 126.052690, 82.336930, 125.996990, 84.447206, 130.063300);
    path.bezierCurveTo(84.749874, 131.680550, 85.323179, 133.326550, 83.193107, 134.685160);
    path.moveTo(105.424540, 154.154570);
    path.bezierCurveTo(106.765470, 146.365130, 115.582600, 137.221780, 115.904110, 136.024900);
    path.bezierCurveTo(105.749160, 129.171850, 110.224740, 117.494650, 115.275340, 113.808200);
    path.bezierCurveTo(115.065750, 113.579750, 114.856160, 112.551350, 114.646570, 111.502690);
    path.bezierCurveTo(108.858210, 109.635150, 117.942660, 106.176390, 115.484930, 110.873920);
    path.lineTo(116.532890, 113.389020);
    path.bezierCurveTo(116.532890, 113.389020, 123.541640, 112.276750, 129.422770, 116.113710);
    path.bezierCurveTo(131.611950, 117.541970, 129.151260, 116.091810, 129.422770, 116.323300);
    path.lineTo(131.309090, 114.227380);
    path.bezierCurveTo(131.281590, 108.909330, 137.728230, 115.114680, 132.147460, 114.960950);
    path.lineTo(130.365930, 116.952070);
    path.bezierCurveTo(134.497320, 121.258380, 132.928180, 136.128950, 122.296660, 136.863270);
    path.bezierCurveTo(122.205160, 144.717160, 126.027220, 146.663860, 125.545320, 153.001820);
    path.bezierCurveTo(124.871580, 153.553420, 112.200870, 154.985460, 105.424540, 154.154570);
    path.moveTo(123.871720, 128.610080);
    path.bezierCurveTo(122.018460, 126.630640, 122.877530, 124.248680, 124.492670, 122.438240);
    path.bezierCurveTo(127.742830, 119.746010, 129.543950, 120.801960, 129.806570, 121.067490);
    path.bezierCurveTo(130.299880, 121.769820, 131.962780, 123.835840, 128.891880, 127.635910);
    path.bezierCurveTo(127.621310, 128.775270, 126.085120, 129.428470, 123.871720, 128.610080);
    path.moveTo(88.299811, 133.545860);
    path.bezierCurveTo(86.734281, 131.478440, 87.459975, 128.990610, 88.824355, 127.099700);
    path.bezierCurveTo(91.569908, 124.287800, 93.091393, 125.390690, 93.313240, 125.668020);
    path.bezierCurveTo(93.729961, 126.329960, 95.801602, 128.464150, 93.207477, 132.454290);
    path.bezierCurveTo(92.134171, 133.644300, 90.169567, 134.400630, 88.299811, 133.545860);
  //   path.closePath();
  //   path.fill();
    
  // // #path5
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(0, 66, 0, 0.7)';
  //   path.lineWidth = 0.070004;
    path.moveTo(122.401450, 139.587960);
    path.bezierCurveTo(128.835640, 143.123510, 133.971740, 149.284260, 133.689800, 151.442600);
    path.lineTo(136.596470, 150.647640);
    path.bezierCurveTo(132.321250, 143.882570, 127.750530, 138.422610, 122.296660, 136.863270);
    path.bezierCurveTo(122.261860, 137.736660, 122.296480, 138.644710, 122.401450, 139.587960);
  //   path.closePath();
  //   path.fill();
    
  // // #path6
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(0, 66, 0, 0.7)';
  //   path.lineWidth = 0.070004;
    path.moveTo(115.222940, 135.448530);
    path.bezierCurveTo(109.550660, 137.580220, 104.067590, 140.483280, 100.184750, 149.910340);
    path.bezierCurveTo(98.713762, 150.867890, 97.603653, 152.114140, 96.831286, 153.630590);
    path.bezierCurveTo(98.721416, 153.789030, 100.164640, 153.988090, 102.542660, 154.102170);
    path.lineTo(102.699850, 153.578190);
    path.bezierCurveTo(102.833540, 153.416740, 103.058830, 153.459050, 103.436600, 154.176270);
    path.lineTo(104.425250, 154.240870);
    path.bezierCurveTo(103.783650, 152.458260, 103.358850, 151.308990, 102.437860, 150.643940);
    path.bezierCurveTo(105.477280, 145.072940, 109.067680, 140.627170, 114.057090, 138.677570);
    path.bezierCurveTo(114.057110, 138.677570, 115.581030, 137.071820, 115.869340, 136.224680);
    path.bezierCurveTo(115.950240, 135.987000, 116.049710, 136.142980, 115.222940, 135.448560);
  //   path.closePath();
  //   path.fill();
    
  // // #path7
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(18, 18, 18, 0.69)';
  //   path.lineWidth = 0.070004;
    path.moveTo(118.562870, 127.306890);
    path.bezierCurveTo(115.894760, 127.790540, 113.724570, 125.940610, 113.079340, 123.601800);
    path.bezierCurveTo(112.579900, 119.411070, 114.566370, 118.417220, 114.931880, 118.340570);
    path.bezierCurveTo(115.789490, 118.306970, 118.146960, 117.849380, 119.674400, 122.490270);
    path.bezierCurveTo(119.942660, 124.175660, 120.450790, 125.891030, 118.562870, 127.306890);
  //   path.closePath();
  //   path.fill();
    
  // // #path8
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(200, 55, 55, 0.69)';
  //   path.lineWidth = 0.070004;
    path.moveTo(118.000030, 133.195420);
    path.bezierCurveTo(118.315140, 133.764000, 118.625850, 133.953370, 119.276110, 134.378320);
    path.bezierCurveTo(120.230920, 134.424920, 120.496370, 134.189680, 120.829520, 133.614600);
    path.bezierCurveTo(119.783880, 134.260540, 118.903660, 133.638200, 118.000030, 133.195420);
  //   path.closePath();
  //   path.fill();
    
  // // #path8-3
  //   path.beginPath();
  //   path.fillStyle = 'rgba(255, 10, 10, 0.937759)';
  //   path.lineWidth = 0.070004;
    path.moveTo(84.912484, 139.765030);
    path.bezierCurveTo(85.227594, 140.333610, 85.538304, 140.689710, 86.299717, 140.892350);
    path.bezierCurveTo(87.087798, 140.753700, 87.260620, 140.388780, 87.593770, 139.813700);
    path.bezierCurveTo(86.548130, 140.459640, 85.816114, 140.207810, 84.912484, 139.765000);
  //   path.closePath();
  //   path.fill();
    
  // // #path9
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(0, 66, 0, 0.7)';
  //   path.lineWidth = 0.070004;
    path.moveTo(81.882484, 151.093560);
    path.bezierCurveTo(82.777287, 148.654910, 83.124989, 146.257750, 83.364519, 143.312870);
    path.bezierCurveTo(75.287229, 141.469050, 71.388478, 130.725560, 77.139968, 122.638470);
    path.bezierCurveTo(76.435500, 121.994860, 75.907119, 121.116480, 75.343001, 120.285740);
    path.bezierCurveTo(71.031665, 119.178830, 76.540624, 115.222790, 76.473054, 119.600300);
    path.bezierCurveTo(76.886848, 120.387610, 77.283184, 121.180160, 78.177394, 121.823350);
    path.bezierCurveTo(80.183259, 120.000740, 85.936009, 118.644280, 91.071106, 120.415420);
    path.bezierCurveTo(91.309482, 119.635190, 91.739845, 118.902960, 92.256736, 118.192360);
    path.bezierCurveTo(90.701884, 114.001630, 97.802639, 116.647780, 93.294162, 118.859280);
    path.bezierCurveTo(93.036818, 119.772060, 92.651282, 120.364360, 92.256736, 120.934130);
    path.bezierCurveTo(96.701283, 121.899210, 101.303440, 138.286180, 90.404190, 142.645960);
    path.bezierCurveTo(91.992101, 146.365160, 93.764044, 150.023010, 96.184131, 153.464820);
    path.bezierCurveTo(91.307951, 153.055780, 86.561522, 152.192600, 81.882484, 151.093560);
  //   path.closePath();
  //   path.fill();
    
  // // #path10
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(0, 66, 0, 0.7)';
  //   path.lineWidth = 0.070004;
    path.moveTo(83.107797, 147.144460);
    path.bezierCurveTo(70.636142, 142.704570, 71.042976, 139.605970, 66.913921, 136.050900);
    path.bezierCurveTo(63.725821, 135.822740, 61.572668, 130.916060, 61.949102, 129.900450);
    path.bezierCurveTo(62.598615, 129.417010, 63.372823, 131.182430, 64.424383, 132.642210);
    path.bezierCurveTo(64.152275, 131.260260, 63.080552, 129.300810, 63.928145, 128.727530);
    path.bezierCurveTo(64.676797, 128.567100, 65.736513, 132.023200, 65.736513, 132.023200);
    path.bezierCurveTo(65.529833, 131.389390, 64.885077, 123.658660, 67.210328, 131.901200);
    path.lineTo(67.210328, 131.901200);
    path.bezierCurveTo(67.307378, 130.607500, 67.011542, 128.247390, 67.545648, 128.139990);
    path.bezierCurveTo(68.231116, 127.745530, 68.508150, 130.890830, 68.988772, 132.271700);
    path.bezierCurveTo(69.977643, 130.030950, 70.231676, 130.288650, 70.544909, 130.345060);
    path.bezierCurveTo(71.124644, 130.694220, 69.696446, 133.289910, 69.473067, 135.353280);
    path.bezierCurveTo(70.977484, 136.985160, 75.115124, 142.408740, 83.290420, 144.424400);
  //   path.closePath();
  //   path.fill();
    
  // // #path10-8
  //   path.beginPath();
  //   path.fillStyle = 'rgba(0, 66, 0, 0.7)';
  //   path.lineWidth = 0.070004;
    path.moveTo(92.268519, 147.102480);
    path.bezierCurveTo(104.340640, 141.669380, 103.981180, 137.428150, 105.882830, 135.477730);
    path.bezierCurveTo(108.465410, 134.704380, 110.554490, 129.920640, 110.260350, 129.020320);
    path.bezierCurveTo(109.573900, 128.590940, 108.944860, 130.413150, 108.014700, 131.953120);
    path.bezierCurveTo(108.174250, 130.553700, 109.084140, 128.514060, 108.193000, 128.011140);
    path.bezierCurveTo(107.433830, 127.911740, 106.656840, 131.442160, 106.656840, 131.442160);
    path.bezierCurveTo(106.811590, 130.793720, 106.829620, 123.036170, 105.177990, 131.439160);
    path.lineTo(105.177990, 131.439160);
    path.bezierCurveTo(104.976760, 130.157530, 105.080890, 127.781240, 104.539860, 127.717340);
    path.bezierCurveTo(103.824750, 127.379560, 103.802780, 130.536970, 103.435290, 131.952160);
    path.bezierCurveTo(102.268600, 129.798640, 102.036230, 130.076020, 101.728580, 130.157560);
    path.bezierCurveTo(101.178950, 130.552420, 102.812210, 133.024220, 103.201590, 135.062790);
    path.bezierCurveTo(101.833950, 136.810890, 99.259594, 142.106460, 91.273897, 144.776100);
  //   path.closePath();
  //   path.fill();
    
  // // #path11
  //   path.beginPath();
  //   path.globalAlpha = 1.0;
  //   path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.070004;
    path.moveTo(48.625236, 178.257590);
    path.bezierCurveTo(53.739396, 169.942700, 57.976086, 162.317250, 70.632346, 148.076420);
    path.lineTo(71.261120, 148.390800);
    path.bezierCurveTo(63.720341, 156.856220, 56.342919, 166.383440, 49.358806, 178.467190);
  //   path.closePath();
  //   path.fill();
    
  // // #path11-3
  //   path.beginPath();
  //   path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.061602;
    path.moveTo(100.995610, 183.351890);
    path.bezierCurveTo(100.693580, 175.763240, 100.040670, 169.024570, 102.754550, 154.129980);
    path.lineTo(103.447610, 154.016670);
    path.bezierCurveTo(101.820000, 162.879130, 100.907840, 172.313150, 101.718310, 183.123300);
  //   path.closePath();
  //   path.fill();
    
  // // #path11-3-1
  //   path.beginPath();
  //   path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.061271;
    path.moveTo(102.776000, 183.167080);
    path.bezierCurveTo(102.473970, 175.659760, 101.821060, 168.993310, 104.534940, 154.258350);
    path.lineTo(105.228000, 154.146250);
    path.bezierCurveTo(103.600390, 162.913730, 102.688230, 172.246650, 103.498700, 182.940940);
  //   path.closePath();
  //   path.fill();
    
  // // #path11-8
  //   path.beginPath();
  //   path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.070145;
    path.moveTo(46.412068, 177.890470);
    path.bezierCurveTo(51.509486, 169.514760, 55.732307, 161.833520, 68.347135, 147.488520);
    path.lineTo(68.973851, 147.805210);
    path.bezierCurveTo(61.457757, 156.332540, 54.104486, 165.929450, 47.143237, 178.101600);
  //   path.closePath();
  //   path.fill();
    
  // // #path11-6
  //   path.beginPath();
    // path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.059603;
    path.moveTo(156.104180, 177.407900);
    path.bezierCurveTo(152.031800, 169.838480, 148.658140, 162.896690, 138.580000, 149.932630);
    path.lineTo(138.079310, 150.218820);
    path.bezierCurveTo(144.084010, 157.925270, 149.958610, 166.598330, 155.520040, 177.598710);
  //   path.closePath();
    // path.fill();
    
  // // #path11-6-2
  //   path.beginPath();
  //   path.fillStyle = 'rgba(0, 0, 128, 0.547718)';
  //   path.lineWidth = 0.059603;
    path.moveTo(158.137200, 176.772990);
    path.bezierCurveTo(154.064820, 169.203570, 150.691160, 162.261780, 140.613020, 149.297720);
    path.lineTo(140.112330, 149.583910);
    path.bezierCurveTo(146.117030, 157.290360, 151.991630, 165.963420, 157.553060, 176.963800);

    return path
  }

  static getBaseTransform () {
    const transform = new DOMMatrix([
      2,0.2,0.2,2,800,-200
      ])
    return transform
  }

  
  static getBaseStyles () {
    // Stroke with single color
    const stroke = {c: '#008080', w: 5}

    // Fill with evenodd rule and flat color
    const c = '#baf7da'
    const canvasSel = '#myCanvas'
    const canvas=document.querySelector(canvasSel)
    const ctx=canvas.getContext('2d')
    // Fill with evenodd rule and linear gradient
    // const [x0,y0]=[100,250], [x1,y1]=[325,475]
    // const c = ctx.createLinearGradient(x0, y0, x1, y1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and conic gradient
    // const {width:W,height:H}=canvas
    // const [x,y]=[W/2,H/2], startAngle=-0.54
    // const c = ctx.createConicGradient(startAngle, x, y)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and radial gradient
    // const [x0,y0,r0]=[240,387,170], [x1,y1,r1]=[100,358,35]
    // const c = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and a pattern
    // const img = document.querySelector('#pattern')
    // const c = ctx.createPattern(img, 'repeat')
    // c.setTransform(new DOMMatrix([
    //   0.2,0,0,0.2,0,0
    //   // 4,0,0,4,-100,-100
    // ]))

    const fill = {c, r: 'evenodd'}

    const styles = {stroke, fill}
    return styles
  }
  
  // man
  static createMan(){
    const Cls = this
    return Cls.manGeometry()
  }

  static manGeometry(){
  const path = new Path2D()
  path.moveTo(235.828340, 106.816370);
	path.bezierCurveTo(242.704290, 122.774850, 243.357900, 133.673310, 242.209580, 144.271460);
	path.lineTo(241.654690, 111.810380);
	path.bezierCurveTo(236.026310, 152.079470, 234.202610, 161.869090, 231.944110, 171.461080);
	path.bezierCurveTo(225.536070, 174.852640, 229.654280, 177.978830, 232.791790, 180.616770);
	path.bezierCurveTo(242.045670, 188.397210, 239.901010, 180.914900, 236.938120, 175.622750);
	path.bezierCurveTo(237.757360, 170.635710, 235.993920, 169.315110, 244.429140, 152.872260);
	path.bezierCurveTo(245.947040, 151.985630, 247.161590, 150.795660, 248.313370, 149.542910);
	path.bezierCurveTo(248.867450, 148.063200, 249.348810, 146.583500, 250.255490, 145.103790);
	path.bezierCurveTo(250.458590, 146.935290, 250.539290, 148.889180, 251.087820, 150.375250);
	path.bezierCurveTo(247.853160, 156.989600, 245.509470, 165.720210, 244.012980, 177.981040);
	path.bezierCurveTo(236.167730, 183.587230, 259.932990, 194.503810, 250.116760, 181.171650);
	path.bezierCurveTo(254.653310, 162.158500, 258.264320, 151.384270, 262.463070, 136.086820);
	path.bezierCurveTo(263.108870, 124.934810, 261.212830, 122.191160, 262.740520, 115.972060);
	path.lineTo(263.572850, 114.862280);
	path.bezierCurveTo(259.473710, 106.170690, 258.408970, 101.277220, 253.723560, 94.192614);
	path.bezierCurveTo(250.577150, 89.305455, 247.934590, 84.982533, 242.209580, 81.568862);
	path.bezierCurveTo(241.410300, 80.488124, 240.645350, 79.379928, 241.654690, 76.852295);
	path.bezierCurveTo(242.783560, 75.683410, 242.744490, 73.458424, 240.822360, 72.690619);
	path.bezierCurveTo(237.614080, 71.819515, 233.555190, 70.036247, 232.221560, 70.748503);
	path.lineTo(231.666670, 69.638723);
	path.bezierCurveTo(229.269680, 70.846635, 227.589970, 72.592511, 226.672650, 74.910180);
	path.bezierCurveTo(225.040550, 80.225262, 226.235840, 81.299260, 226.672650, 83.510978);
	path.bezierCurveTo(227.945400, 84.689959, 227.741830, 86.079843, 233.886230, 86.562874);
	path.lineTo(233.886230, 87.672655);
	path.bezierCurveTo(232.406520, 88.068167, 230.926820, 89.127137, 229.447110, 91.001996);
	path.lineTo(228.892220, 105.706590);
	path.lineTo(223.343310, 124.850300);
	path.lineTo(222.788420, 130.676650);
	path.bezierCurveTo(225.100580, 135.098150, 230.288390, 135.811860, 226.395210, 130.121760);
	path.lineTo(227.227550, 126.237530);
	path.lineTo(228.614770, 127.069860);
	path.bezierCurveTo(230.257520, 119.556920, 232.706150, 112.849870, 235.828340, 106.816370);
  return path
  }
  
  static getManTransform () {
    const transform = new DOMMatrix([
      1.1,0,0,1.1,100,300
      ])
    return transform
  }

  static getBaseStylesMan () {
    const stroke = {c: '#ffffff', w: 1}
    const c = 'rgba(0,0,0,100)'
    const canvasSel = '#myCanvas'
    const canvas=document.querySelector(canvasSel)
    const ctx=canvas.getContext('2d')
    const fill = {c, r: 'evenodd'}
    const styles = {stroke, fill}
    return styles
  }
  static createHouse(){
    const Cls = this
    return Cls.manGeometry()
  }
  static HouseGeometry(){
    const path = new Path2D()
  //   path.beginPath();
	// path.globalAlpha = 0.8;
	// path.fillStyle = 'rgb(0, 0, 128)';
	// path.lineWidth = 0.070004;
	path.moveTo(74.404992, 115.904110);
	path.lineTo(74.090606, 111.397900);
	path.lineTo(74.090606, 111.546100);
	path.lineTo(69.615081, 109.332680);
	path.bezierCurveTo(68.633957, 108.390380, 68.910878, 106.944860, 68.850816, 105.634130);
	path.lineTo(68.850816, 105.634130);
	path.bezierCurveTo(74.638635, 103.392690, 77.372026, 99.139242, 78.024171, 93.342332);
	path.lineTo(81.426308, 92.953844);
	path.lineTo(80.884349, 86.919096);
	path.lineTo(79.120803, 85.932528);
	path.lineTo(83.103042, 76.081725);
	path.lineTo(97.879243, 78.911211);
	path.bezierCurveTo(98.748714, 78.451353, 99.395962, 77.658163, 99.870365, 76.605703);
	path.lineTo(99.870365, 72.413872);
	path.lineTo(98.508020, 72.413872);
	path.lineTo(101.547100, 64.658985);
	path.lineTo(104.481380, 72.413872);
	path.lineTo(103.223830, 72.413872);
	path.lineTo(103.223830, 72.413872);
	path.bezierCurveTo(103.386210, 74.207203, 103.616190, 75.983635, 103.014240, 77.968048);
	path.bezierCurveTo(102.610440, 78.802243, 102.147760, 79.518681, 101.547100, 79.959167);
	path.lineTo(104.271780, 80.273556);
	path.lineTo(104.271780, 80.273556);
	path.lineTo(111.188310, 91.067518);
	path.lineTo(109.616370, 91.067518);
	path.lineTo(108.358820, 96.726490);
	path.lineTo(111.083510, 97.040879);
	path.bezierCurveTo(111.070110, 101.233210, 111.508160, 105.408810, 116.742480, 109.406780);
	path.bezierCurveTo(116.197860, 110.520010, 115.580090, 111.486940, 114.838180, 112.205570);
	path.bezierCurveTo(113.866080, 112.978620, 112.893980, 112.966790, 111.921880, 112.969830);
	path.lineTo(111.607490, 121.772680);
	path.lineTo(119.152780, 117.580850);
	path.lineTo(126.907670, 130.156340);
	path.lineTo(129.003580, 128.060420);
	path.lineTo(129.003580, 128.060420);
	path.lineTo(128.898790, 123.763800);
	path.lineTo(127.641240, 123.868590);
	path.lineTo(130.575520, 117.476050);
	path.lineTo(133.300210, 123.973390);
	path.lineTo(132.042660, 123.973390);
	path.lineTo(131.937870, 129.527570);
	path.lineTo(130.051540, 131.937870);
	path.lineTo(128.270010, 132.881030);
	path.lineTo(133.509800, 141.264690);
	path.lineTo(128.165220, 141.055100);
	path.lineTo(125.859710, 152.687430);
	path.lineTo(133.195420, 152.582630);
	path.lineTo(138.016020, 162.643030);
	path.lineTo(135.081740, 162.852620);
	path.lineTo(135.500920, 175.847290);
	path.lineTo(136.548880, 175.847290);
	path.lineTo(136.339290, 177.628820);
	path.lineTo(135.081740, 177.524020);
	path.lineTo(135.186530, 180.143920);
	path.lineTo(133.719400, 180.563100);
	path.lineTo(133.719400, 180.563100);
	path.lineTo(133.614600, 177.628820);
	path.lineTo(131.623480, 177.419230);
	path.lineTo(131.623480, 180.982280);
	path.lineTo(130.575520, 180.982280);
	path.lineTo(130.470730, 177.628820);
	path.lineTo(128.898790, 177.628820);
	path.lineTo(128.898790, 181.087080);
	path.lineTo(127.850830, 181.087080);
	path.lineTo(127.850830, 181.087080);
	path.lineTo(128.270010, 177.314430);
	path.lineTo(126.383690, 177.628820);
	path.lineTo(125.859710, 181.401470);
	path.lineTo(56.904101, 179.410350);
	path.lineTo(53.131452, 163.062210);
	path.lineTo(49.568396, 162.538230);
	path.lineTo(56.799305, 153.316200);
	path.lineTo(52.921860, 141.159890);
	path.lineTo(49.673192, 141.159890);
	path.lineTo(64.763781, 113.493810);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-79
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.139966;
	path.moveTo(61.243030, 155.591840);
	path.lineTo(73.399963, 155.684140);
	path.lineTo(73.563253, 142.905890);
	path.bezierCurveTo(71.690053, 134.871500, 62.552455, 134.917600, 61.104603, 142.905890);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-1
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(102.877460, 155.828250);
	path.lineTo(109.105200, 155.895050);
	path.lineTo(109.188800, 146.644940);
	path.bezierCurveTo(108.229190, 140.828890, 103.548200, 140.862260, 102.806490, 146.644940);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-16
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(87.252429, 175.846190);
	path.lineTo(93.480169, 175.912990);
	path.lineTo(93.563769, 166.662880);
	path.bezierCurveTo(92.604159, 160.846830, 87.923169, 160.880200, 87.181459, 166.662880);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-7
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(75.459788, 175.909840);
	path.lineTo(81.687528, 175.976640);
	path.lineTo(81.771128, 166.726530);
	path.bezierCurveTo(80.811518, 160.910480, 76.130528, 160.943850, 75.388818, 166.726530);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-12
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(63.603501, 175.909840);
	path.lineTo(69.831241, 175.976640);
	path.lineTo(69.914841, 166.726530);
	path.bezierCurveTo(68.955231, 160.910480, 64.274241, 160.943850, 63.532531, 166.726530);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6-10
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(114.659640, 155.902350);
	path.lineTo(120.887380, 155.969150);
	path.lineTo(120.970980, 146.719040);
	path.bezierCurveTo(120.011370, 140.902990, 115.330380, 140.936360, 114.588670, 146.719040);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-3-3
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.052399;
	path.moveTo(114.595130, 172.740820);
	path.lineTo(119.286650, 172.620160);
	path.lineTo(119.133660, 167.914410);
	path.bezierCurveTo(118.283750, 164.857700, 115.397220, 164.797350, 114.544140, 167.914410);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-3
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.052399;
	path.moveTo(107.094550, 172.905470);
	path.lineTo(111.786070, 172.784810);
	path.lineTo(111.633080, 168.079060);
	path.bezierCurveTo(110.783170, 165.022350, 107.896640, 164.962000, 107.043560, 168.079060);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-6
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.085234;
	path.moveTo(91.108482, 155.862060);
	path.lineTo(97.336222, 155.928860);
	path.lineTo(97.419872, 146.678750);
	path.bezierCurveTo(96.460271, 140.862700, 91.779273, 140.896070, 91.037569, 146.678750);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-1
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.052106;
	path.moveTo(95.033890, 121.281120);
	path.lineTo(99.727000, 122.195390);
	path.lineTo(99.430587, 116.354550);
	path.bezierCurveTo(99.125950, 113.234410, 95.810914, 113.172810, 94.984493, 116.354550);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9-2
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.056577;
	path.moveTo(82.909877, 118.317050);
	path.lineTo(90.093765, 119.781290);
	path.lineTo(89.933601, 115.531640);
	path.bezierCurveTo(88.706277, 111.944680, 84.212181, 111.750540, 83.054104, 115.457540);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-1
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.043591;
	path.moveTo(102.242650, 96.382154);
	path.lineTo(105.907890, 96.275269);
	path.lineTo(105.788380, 92.106620);
	path.bezierCurveTo(105.124380, 89.398782, 102.869280, 89.345332, 102.202810, 92.106620);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.042388;
	path.moveTo(95.839579, 95.068312);
	path.lineTo(99.431521, 94.965182);
	path.lineTo(99.314396, 90.943014);
	path.bezierCurveTo(98.663681, 88.330326, 96.453678, 88.278755, 95.800536, 90.943014);
// 	path.closePath();
// 	path.fill();
	
// // #path8
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.070004;
	path.moveTo(82.994012, 93.516467);
	path.lineTo(89.811378, 93.368265);
	path.lineTo(89.589074, 87.588324);
	path.bezierCurveTo(88.354043, 83.833836, 84.159547, 83.759728, 82.919910, 87.588324);
// 	path.closePath();
// 	path.fill();
	
// // #path8-2-9
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 0)';
// 	path.lineWidth = 0.057580;
	path.moveTo(103.504460, 122.479970);
	path.lineTo(108.195980, 122.334270);
	path.lineTo(108.042990, 116.651980);
	path.bezierCurveTo(107.193080, 112.960940, 104.306550, 112.888070, 103.453470, 116.651980);
// 	path.closePath();
// 	path.fill();
	
// // #path9
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(0, 0, 128)';
// 	path.lineWidth = 0.070004;
	path.moveTo(127.306890, 145.017210);
	path.bezierCurveTo(129.585230, 145.530440, 129.484780, 143.268410, 129.455840, 141.089820);
	path.lineTo(130.419160, 141.089820);
	path.lineTo(130.419160, 144.646700);
	path.bezierCurveTo(129.724720, 146.376460, 128.343200, 146.273970, 127.084580, 146.499250);
// 	path.closePath();
// 	path.fill();
	
// // #path10
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgb(21, 21, 21)';
// 	path.lineWidth = 0.070004;
	path.moveTo(126.343560, 175.917660);
	path.lineTo(133.531440, 175.917660);
	path.lineTo(133.679640, 162.727540);
	path.lineTo(131.308380, 162.653440);
	path.lineTo(131.308380, 163.172150);
	path.lineTo(132.790420, 164.580090);
	path.lineTo(132.790420, 164.950600);
	path.lineTo(132.494010, 164.950600);
	path.lineTo(132.271700, 168.211080);
	path.lineTo(132.568110, 168.803890);
	path.lineTo(132.197600, 169.174400);
	path.lineTo(129.974550, 169.100300);
	path.lineTo(129.678140, 168.803890);
	path.lineTo(129.826350, 168.285180);
	path.lineTo(129.678140, 165.024700);
	path.lineTo(129.159430, 164.950600);
	path.lineTo(129.159430, 164.654190);
	path.lineTo(130.641470, 163.246260);
	path.lineTo(130.641470, 162.653440);
	path.lineTo(128.196110, 162.653440);
// 	path.closePath();
// 	path.fill();
	
// // #path11
// 	path.beginPath();
// 	path.globalAlpha = 0.8;
// 	path.fillStyle = 'rgba(251, 255, 52, 0.742739)';
// 	path.lineWidth = 0.070004;
	path.moveTo(130.196860, 165.024700);
	path.lineTo(131.901200, 165.024700);
	path.lineTo(132.123500, 168.136980);
	path.lineTo(131.530690, 168.285180);
	path.lineTo(131.530690, 167.618260);
	path.lineTo(131.234280, 167.618260);
	path.lineTo(131.308380, 166.432630);
	path.lineTo(130.641470, 166.432630);
	path.lineTo(130.715570, 167.544160);
	path.lineTo(130.641470, 168.211080);
	path.lineTo(130.122750, 168.211080);
	// path.closePath();
	// path.fill();    
    return path
  }
  static getHouseTransform(){
    const transform = new DOMMatrix([
      1.04, 0, 0, 0.78, 185, 184
      ])
    return transform
  }
  static getBaseStylesHouse(){
    
    const stroke = {c: '#ffffff', w: 1}
    const c = 'rgba(0,0,0,100)'
    const canvasSel = '#myCanvas'
    const canvas=document.querySelector(canvasSel)
    const ctx=canvas.getContext('2d')
    const fill = {c, r: 'evenodd'}
    const styles = {stroke, fill}
    return styles
  }
}