﻿function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    return [pageWidth, pageHeight, windowWidth, windowHeight];
}

var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments);
        }
    }
}
Object.extend = function (d, s) {
    for (var property in s) {
        d[property] = s[property];
    }
    return d;
}
if (typeof KeyEvent == "undefined") {
    var KeyEvent = {
        DOM_VK_CANCEL: 3,
        DOM_VK_HELP: 6,
        DOM_VK_BACK_SPACE: 8,
        DOM_VK_TAB: 9,
        DOM_VK_CLEAR: 12,
        DOM_VK_RETURN: 13,
        DOM_VK_ENTER: 14,
        DOM_VK_SHIFT: 16,
        DOM_VK_CONTROL: 17,
        DOM_VK_ALT: 18,
        DOM_VK_PAUSE: 19,
        DOM_VK_CAPS_LOCK: 20,
        DOM_VK_ESCAPE: 27,
        DOM_VK_SPACE: 32,
        DOM_VK_PAGE_UP: 33,
        DOM_VK_PAGE_DOWN: 34,
        DOM_VK_END: 35,
        DOM_VK_HOME: 36,
        DOM_VK_LEFT: 37,
        DOM_VK_UP: 38,
        DOM_VK_RIGHT: 39,
        DOM_VK_DOWN: 40,
        DOM_VK_PRINTSCREEN: 44,
        DOM_VK_INSERT: 45,
        DOM_VK_DELETE: 46,
        DOM_VK_0: 48,
        DOM_VK_1: 49,
        DOM_VK_2: 50,
        DOM_VK_3: 51,
        DOM_VK_4: 52,
        DOM_VK_5: 53,
        DOM_VK_6: 54,
        DOM_VK_7: 55,
        DOM_VK_8: 56,
        DOM_VK_9: 57,
        DOM_VK_SEMICOLON: 59,
        DOM_VK_EQUALS: 61,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90,
        DOM_VK_CONTEXT_MENU: 93,
        DOM_VK_NUMPAD0: 96,
        DOM_VK_NUMPAD1: 97,
        DOM_VK_NUMPAD2: 98,
        DOM_VK_NUMPAD3: 99,
        DOM_VK_NUMPAD4: 100,
        DOM_VK_NUMPAD5: 101,
        DOM_VK_NUMPAD6: 102,
        DOM_VK_NUMPAD7: 103,
        DOM_VK_NUMPAD8: 104,
        DOM_VK_NUMPAD9: 105,
        DOM_VK_MULTIPLY: 106,
        DOM_VK_ADD: 107,
        DOM_VK_SEPARATOR: 108,
        DOM_VK_SUBTRACT: 109,
        DOM_VK_DECIMAL: 110,
        DOM_VK_DIVIDE: 111,
        DOM_VK_F1: 112,
        DOM_VK_F2: 113,
        DOM_VK_F3: 114,
        DOM_VK_F4: 115,
        DOM_VK_F5: 116,
        DOM_VK_F6: 117,
        DOM_VK_F7: 118,
        DOM_VK_F8: 119,
        DOM_VK_F9: 120,
        DOM_VK_F10: 121,
        DOM_VK_F11: 122,
        DOM_VK_F12: 123,
        DOM_VK_F13: 124,
        DOM_VK_F14: 125,
        DOM_VK_F15: 126,
        DOM_VK_F16: 127,
        DOM_VK_F17: 128,
        DOM_VK_F18: 129,
        DOM_VK_F19: 130,
        DOM_VK_F20: 131,
        DOM_VK_F21: 132,
        DOM_VK_F22: 133,
        DOM_VK_F23: 134,
        DOM_VK_F24: 135,
        DOM_VK_NUM_LOCK: 144,
        DOM_VK_SCROLL_LOCK: 145,
        DOM_VK_COMMA: 188,
        DOM_VK_PERIOD: 190,
        DOM_VK_SLASH: 191,
        DOM_VK_BACK_QUOTE: 192,
        DOM_VK_OPEN_BRACKET: 219,
        DOM_VK_BACK_SLASH: 220,
        DOM_VK_CLOSE_BRACKET: 221,
        DOM_VK_QUOTE: 222,
        DOM_VK_META: 224
    };
}
var langS = [];
langS['Ru'] = {
    SCORE: "Вы выбили: ",
    StartGame: "Показать отделения",
    Settings: "Настройки",
    TableLider: "Таблица лидеров",
    Exit: "Выход",
    Lang: "Язык",
    GoToMenu: "Вернуться в меню",
    GameName: "Карта отделений РБ",
    StudiosName: "NULAY GAME",
    YourLoose: "Игра окончена",
    YouScore: "Ваш результат ",
    From: " из ",
    Moles: "поцелуев",
    LangName: "Русский",
    On: "вкл.",
    Off: "выкл.",
    Mouse: "Мышь",
    Sound: "Звук",
    Back: "Назад",
    Up: "Вверх",
    Right: "Вправо",
    Down: "Вниз",
    Left: "Влево",
    Keybord: "Клавиатура",
    Joystick: "Джойстик",
    Action: "Действие"
}

langS['En'] = {
    SCORE: "SCORE: ",
    StartGame: "Show ROAD",
    Settings: "Settings",
    TableLider: "Lider Table",
    Exit: "Exit",
    Lang: "Langvich",
    GoToMenu: "Go to menu",
    GameName: "Map Road RB",
    StudiosName: "NULAY GAME",
    YourLoose: "Game OWER!!!",
    YouScore: "You score ",
    From: " from ",
    Moles: "kesses",
    LangName: "English",
    On: "on",
    Off: "off",
    Mouse: "Mouse",
    Sound: "Sound",
    Back: "Back",
    Up: "Up",
    Right: "Right",
    Down: "Down",
    Left: "Left",
    Keybord: "Keybord",
    Joystick: "Joystick",
    Action: "Action"
}

var keyVal = [87, 68, 83, 65];
var joyVal = [2, 3, 1, 0];
var carKeyDown = null;
var carJoyDown = null;

var MenuGame = Class.create();
MenuGame.prototype = {
    size: getPageSize(),
    initialize: function (option) {
        var thisEl = this;
        if (option) {
            this.option = option;
            if (option.lang) {
                this.lang = option.lang;
            } else {
                this.lang = langS.Ru;
            }
        } else {
            this.lang = langS.Ru;
            this.option = {'lang': langS.Ru, 'soundOn': true, 'mouseOn': false};
        }
        this.game = this.createGame(this.option);
        this.poleG = $('#poleGame');
        var butStartGame = $('<span class="classBut">').append(this.lang.StartGame);
        var butSettings = $('<span class="classBut">').append(this.lang.Settings);
        var butLang = $('<span class="classBut">').append(this.lang.Lang);
        var butTableLider = $('<span class="classBut">').append(this.lang.TableLider);
        var butExit = $('<span class="classBut">').append(this.lang.Exit);

        this.menuGame = $('<div style="margin-top:100px;">').append($('<div>').append(butStartGame)).append($('<div>').append(butSettings)).append($('<div>').append(butLang)).append($('<div>').append(butTableLider)).append($('<div>').append(butExit));
        //this.menuPanel={view:menuPanelView,butStartGame:butStartGame,butSettings:butSettings,butTableLider:butTableLider,butExit:butExit};

        this.size[0] = jQuery('#main .content').width();

        this.menuPanel = $('<div style="position:absolute;top:100px;left:0;z-index:40;text-align: center;width:' + this.size[0] + 'px;">').append('<div style="font-size:15pt;font-weight:bold;">' + this.lang.StudiosName + '</div>').append('<div style="font-size:20pt;font-weight:bold;">' + this.lang.GameName + '</div>').append(this.menuGame).append(this.menuLang);
        this.poleG.prepend($('<div>').append(this.menuPanel));
        butStartGame.click(function () {
            thisEl.menuPanel.hide();
            thisEl.game.startGame();
        });
        this.menuLang = $('<div style="margin-top:100px;">');
        for (var key in langS) {
            var butL = $('<span class="classBut">').append(langS[key].LangName);
            this.menuLang.append($('<div>').append(butL));
            butL.click(thisEl.getFL(langS[key]));
        }
        this.menuLang.hide();
        this.menuPanel.append(this.menuLang);
        butLang.click(function () {
            thisEl.menuGame.hide();
            thisEl.menuLang.show();
        })

        this.menuSetting = $('<div style="margin-top:100px;">');
        var soundOn = $('<span class="classBut">' + this.lang.On + '</span>').click(function () {
            thisEl.option.soundOn = true;
            thisEl.onOff(soundOn, soundOff);
        });
        var soundOff = $('<span class="classBut">' + this.lang.Off + '</span>').click(function () {
            thisEl.option.soundOn = false;
            thisEl.onOff(soundOff, soundOn);
        });
        this.menuSetting.append($('<div></div>').append('<span>' + this.lang.Sound + ' : </span>').append(soundOn).append('<span> / </span>').append(soundOff));
        var mouseOn = $('<span class="classBut">' + this.lang.On + '</span>').click(function () {
            thisEl.option.mouseOn = true;
            thisEl.onOff(mouseOn, mouseOff);
        });
        var mouseOff = $('<span class="classBut">' + this.lang.Off + '</span>').click(function () {
            thisEl.option.mouseOn = false;
            thisEl.onOff(mouseOff, mouseOn);
        });
        this.menuSetting.append($('<div></div>').append('<span>' + this.lang.Mouse + ' : </span>').append(mouseOn).append('<span> / </span>').append(mouseOff));
        var backBut = $('<span class="classBut">' + this.lang.Back + '</span>');

        var butKeyUp = $('<span class="classBut keyVal" ind="0">' + this.getNameKey(keyVal[0]) + '</span>');
        var butKeyRight = $('<span class="classBut keyVal" ind="1">' + this.getNameKey(keyVal[1]) + '</span>');
        var butKeyDown = $('<span class="classBut keyVal" ind="2">' + this.getNameKey(keyVal[2]) + '</span>');
        var butKeyLeft = $('<span class="classBut keyVal" ind="3">' + this.getNameKey(keyVal[3]) + '</span>');
        var butJoyUp = $('<span class="classBut joyVal" ind="0">Joy_' + joyVal[0] + '</span>');
        var butJoyRight = $('<span class="classBut joyVal" ind="1">Joy_' + joyVal[1] + '</span>');
        var butJoyDown = $('<span class="classBut joyVal" ind="2">Joy_' + joyVal[2] + '</span>');
        var butJoyLeft = $('<span class="classBut joyVal" ind="3">Joy_' + joyVal[3] + '</span>');

        this.menuSetting.append('<div align="center"><table style="text-align: center;">' +
            '<tr style="text-align: left; color:white;"><td>' + this.lang.Action + '</td><td>' + this.lang.Keybord + '</td><td>' + this.lang.Joystick + '</td></tr>' +
            '<tr><td style="text-align: left;">' + this.lang.Up + '</td><td></td><td></td></tr>' +
            '<tr><td style="text-align: left;">' + this.lang.Right + '</td><td></td><td></td></tr>' +
            '<tr><td style="text-align: left;">' + this.lang.Down + '</td><td></td><td></td></tr>' +
            '<tr><td style="text-align: left;">' + this.lang.Left + '</td><td></td><td></td></tr></table></div>');

        this.menuSetting.find('td:eq(4)').append(butKeyUp);
        this.menuSetting.find('td:eq(5)').append(butJoyUp);
        this.menuSetting.find('td:eq(7)').append(butKeyRight);
        this.menuSetting.find('td:eq(8)').append(butJoyRight);
        this.menuSetting.find('td:eq(10)').append(butKeyDown);
        this.menuSetting.find('td:eq(11)').append(butJoyDown);
        this.menuSetting.find('td:eq(13)').append(butKeyLeft);
        this.menuSetting.find('td:eq(14)').append(butJoyLeft);

        this.menuSetting.append(backBut);

        this.menuSetting.hide();
        this.menuLang.hide();
        this.menuPanel.append(this.menuLang).append(this.menuSetting);
        if (this.option.mouseOn) {
            this.onOff(mouseOn, mouseOff);
        } else {
            this.onOff(mouseOff, mouseOn);
        }
        if (this.option.soundOn) {
            this.onOff(soundOn, soundOff);
        } else {
            this.onOff(soundOff, soundOn);
        }
        butSettings.click(function () {
            thisEl.menuGame.hide();
            thisEl.menuSetting.show();
        })
        backBut.click(function () {
            thisEl.stopEntKey();
            thisEl.menuGame.show();
            thisEl.menuSetting.hide();
        })

        $('.classBut').on('mouseover', function () {
            $(this).addClass('classButOut')
        }).on('mouseout', function () {
            $(this).removeClass('classButOut');
        });

        $('.keyVal').on("click", function (ev) {
            thisEl.changeKey($(ev.target));
        });
        $('.joyVal').on("click", function (ev) {
            thisEl.changeJoy($(ev.target));
        });
    },
    getNameKey: function (kC) {
        for (var key in KeyEvent) {
            if (KeyEvent[key] == kC) {
                return key.substr(7, key.length);
            }
        }
    },
    changeJoy: function (el) {
        this.stopEntKey();
        var thisEl = this;
        el.text("_ _ _");
        var tit = setInterval(function () {
            if (el.hasClass("classBut")) {
                el.removeClass("classBut")
            } else {
                el.addClass("classBut")
            }
        }, 1000);
        this.pad.runF = 1;
        carKeyDown = keyVal[parseInt(el.attr('ind'))];
        var fun = function (ev) {
            var kc = (ev.keyCode) ? ev.keyCode : ev.which;
            if (kc == carKeyDown) {
                if (carJoyDown != null) {
                    joyVal[parseInt(thisEl.curJoy.el.attr('ind'))] = carJoyDown;
                    thisEl.stopEntKey();
                }
            }
        }
        this.curJoy = {'el': el, 'tic': tit, 'fun': fun};
        $(document).on("keydown", thisEl.curJoy.fun);
    },
    changeKey: function (el) {
        this.stopEntKey();
        var thisEl = this;
        el.text("_ _ _");
        var tit = setInterval(function () {
            if (el.hasClass("classBut")) {
                el.removeClass("classBut");
            } else {
                el.addClass("classBut");
            }
        }, 1000);
        var fun = function (ev) {
            if (/[a-zA-Z]/.test(ev.key)) {
                var ind = thisEl.curKey.el.attr('ind');
                keyVal[ind] = (ev.keyCode) ? ev.keyCode : ev.which;
                thisEl.stopEntKey();
                thisEl.game.setAxisAndKey();
            }
        }
        this.curKey = {'el': el, 'tic': tit, 'fun': fun};
        $(document).on("keydown", thisEl.curKey.fun);
    },
    stopEntKey: function () {
        var thisEl = this;
        if (this.curJoy != null) {
            clearInterval(this.curJoy.tic);
            this.curJoy.el.addClass("classBut");
            this.curJoy.el.text("Joy_" + joyVal[parseInt(this.curJoy.el.attr('ind'))]);
            carJoyDown = null;
            carKeyDown = null;
            $(document).off("keydown", thisEl.curJoy.fun);
            this.pad.runF = 0;
        }
        this.curJoy = null;
        if (this.curKey != null) {
            clearInterval(this.curKey.tic);
            this.curKey.el.addClass("classBut");
            this.curKey.el.text(thisEl.getNameKey(keyVal[parseInt(this.curKey.el.attr('ind'))]));
            $(document).off("keydown", thisEl.curKey.fun);
        }
        this.curKey = null;
    },
    onOff: function (elOn, elOff) {
        this.stopEntKey();
        elOn.addClass("classOff");
        elOff.removeClass("classOff");
    },
    getFL: function (lang) {
        var thisEl = this;
        return function () {
            thisEl.poleG.empty();
            thisEl.option.lang = lang;
            var pad = mainMenu.pad;
            mainMenu = new MenuGame(thisEl.option);
            mainMenu.pad = pad;
        }
    },
    menuShow: function () {
        this.menuPanel.show();
    },
    createGame: function (lang) {
        return new D3Game(this.option);
    }
}

var D3Game = Class.create();
D3Game.prototype = {
    runF: 0,
    camera: null,
    scene: null,
    renderer: null,
    geometry: null,
    material: null,
    mesh: null,
    imgFolder: 'http://imix.by/sites/default/files/',
    colors: [0xffaa00, 0xaaff00, 0x67aa00, 0x789200, 0x543675, 0xe45698],
    size: [jQuery('#main .content').width(), 600],
    initialize: function (option) {
        var thisEl = this;

        this.camera = new THREE.PerspectiveCamera(45, this.size[0] / window.innerHeight, 0.1, 9000);
        this.camera.position.z = 10;
        this.camera.position.y = 10;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.size[0], this.size[1]);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        this.renderer.shadowCameraNear = 3;
        this.renderer.shadowCameraFar = this.camera.far;
        this.renderer.shadowCameraFov = 50;

        this.renderer.shadowMapBias = 0.0039;
        this.renderer.shadowMapDarkness = 0.5;
        this.renderer.shadowMapWidth = 1024;
        this.renderer.shadowMapHeight = 1024;
        $('#for3DCanvas')[0].appendChild(this.renderer.domElement);


        var controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

        this.scene = new THREE.Scene();

        var ambient = new THREE.AmbientLight(0x444444);
        this.scene.add(ambient);


//        this.geometry = new THREE.BoxGeometry(200, 200, 200);
//        this.material = new THREE.MeshBasicMaterial({
//            color: 0xff0000
//        });
        this.texture2 = new THREE.Texture();

        var light = new THREE.DirectionalLight(0xcccfff);
        light.position.set(0, 10, 5);
        light.target.position.set(0, 0, 0);
//        light.castShadow = true;
//        light.shadowDarkness = 5;
//        light.shadowCameraVisible = true; // only for debugging
// these six values define the boundaries of the yellow box seen above
//        light.shadowCameraNear = 2;
//        light.shadowCameraFar = 5;
//        light.shadowCameraLeft = -0.5;
//        light.shadowCameraRight = 0.5;
//        light.shadowCameraTop = 0.5;
//        light.shadowCameraBottom = -0.5;
        this.scene.add(light);

// spotlight #2 -- red, light shadow
        var spotlight2 = new THREE.SpotLight(0xffcd00);
        spotlight2.position.set(0, 100, 5);
        spotlight2.rotation.x = 90 * Math.PI / 180;
        this.scene.add(spotlight2);
//        spotlight2.shadowCameraVisible = true;
        spotlight2.shadowDarkness = 0.2;
        spotlight2.intensity = 0.5;
        spotlight2.castShadow = true;
// spotlight #3
        var spotlight3 = new THREE.SpotLight(0x0000ff);
        spotlight3.position.set(150, 80, -100);
//        spotlight3.shadowCameraVisible = true;
        spotlight3.shadowDarkness = 0.95;
        spotlight3.intensity = 2;
        spotlight3.castShadow = true;
//        this.scene.add(spotlight3);
// change the direction this spotlight is facing
        var lightTarget = new THREE.Object3D();
        lightTarget.position.set(150, 10, -100);
//        this.scene.add(lightTarget);
        spotlight3.target = lightTarget;


        this.loaderJSON = new THREE.JSONLoader();

        this.loadObj('mapRB.js', 'mapRB', 0x345400, false);

//        this.loadObj('dep1.js','nod1',0x345400);
//        this.loadObj('dep2.js','nod2',0x345400);
//        this.loadObj('dep3.js','nod3',0x345400);
//        this.loadObj('dep4.js','nod4',0x345400);
//        this.loadObj('dep5.js','nod5',0x345400);
//        this.loadObj('dep6.js','nod6',0x345400);


// SKYBOX/FOG
        var skyBoxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
        var skyBoxMaterial = new THREE.MeshBasicMaterial({color: 0x9999ff, side: THREE.BackSide});
        var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
        skyBox.castShadow = true;
        skyBox.receiveShadow = true;
//        this.scene.add(skyBox);
        this.scene.fog = new THREE.FogExp2(0x9999ff, 0.00025);
//
//        var mesh = new THREE.Mesh( new THREE.BoxGeometry( 1500, 220, 150 ), new THREE.MeshPhongMaterial({color:0xffdd99}));
//        mesh.position.z = 20;
//        mesh.castShadow = true;
//        mesh.receiveShadow = true;
//        this.scene.add( mesh );


//        loader.load( jsonUrl, function( geometry ) {
//            placeholder.add( new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ map : texture }) ) );
//        });

//        this.mesh = new THREE.Mesh(this.geometry, this.material);
//        this.scene.add(this.mesh);
        // add 3D text

        this.textMaterial = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({color: 0x333dff, shading: THREE.FlatShading}), // front
            new THREE.MeshPhongMaterial({color: 0x333dff, shading: THREE.SmoothShading}) // side
        ]);

        this.mirrorMaterial = new THREE.MeshBasicMaterial({color: 0x111111, envMap: this.camera.renderTarget});

        animateObj.addFunc(function () {
            thisEl.animate();
        });
        this.funcsd = [];

        this.scene.add(this.makeSkybox([
            this.imgFolder + 'px.jpg', // right
            this.imgFolder + 'nx.jpg', // left
            this.imgFolder + 'py.jpg', // top
            this.imgFolder + 'ny.jpg', // bottom
            this.imgFolder + 'pz.jpg', // back
            this.imgFolder + 'nz.jpg'  // front
        ], 8000));
//        this.scene.add(this.makeSkybox( [
//                    this.imgFolder+'cube/gomeldvorec1/px.jpg', // right
//                    this.imgFolder+'cube/gomeldvorec1/nx.jpg', // left
//                    this.imgFolder+'cube/gomeldvorec1/py.jpg', // top
//                    this.imgFolder+'cube/gomeldvorec1/ny.jpg', // bottom
//                    this.imgFolder+'cube/gomeldvorec1/pz.jpg', // back
//                    this.imgFolder+'cube/gomeldvorec1/nz.jpg'  // front
//        ], 8000 ));


    },
    makeSkybox: function (urls, size) {
        var skyboxCubemap = THREE.ImageUtils.loadTextureCube(urls);
        skyboxCubemap.format = THREE.RGBFormat;

        var skyboxShader = THREE.ShaderLib['cube'];
        skyboxShader.uniforms['tCube'].value = skyboxCubemap;

        return new THREE.Mesh(
            new THREE.BoxGeometry(size, size, size),
            new THREE.ShaderMaterial({
                fragmentShader: skyboxShader.fragmentShader, vertexShader: skyboxShader.vertexShader,
                uniforms: skyboxShader.uniforms, depthWrite: false, side: THREE.BackSide
            })
        );
    },
    startGame: function () {
        var thisEl = this;
        poleG = $('#for3DCanvas');
        var divT = $('<div style="font-size:12px; position:absolute;top:20px;left:20px;z-index:40;width:' + this.size[0] + 'px;text-align: left;margin: 0 0 0 80px;">')
        poleG.append(divT);
        thisEl.coords = [[-1, 0.5, -1.5], [-3.3, 0.5, 0], [-5, 0.5, 1.5], [3, 0.5, 2.5], [2, 0.5, -0.5], [0.5, 0.5, -4]];
        var tiik = function (ind) {
            return function () {
                $(this).text("Скрыть НОД-" + (ind));
                thisEl.loadObj("dep" + ind + ".js", 'nod' + ind, thisEl.colors[ind - 1], false);

                $(this).unbind('click');
                $(this).click(tiik2(ind));
                thisEl.addText(ind, thisEl.coords[ind - 1], 0, true);
            }
        };
        var tiik2 = function (ind) {
            return function () {
                animateObj.removeFunc(thisEl.funcsd[ind]);
                $(this).text("Показать НОД-" + (ind));
                var selectedObject = thisEl.scene.getObjectByName("nod" + ind);
                thisEl.scene.remove(selectedObject);
                delete selectedObject;
                var selectedObject2 = thisEl.scene.getObjectByName("text" + ind);
                thisEl.scene.remove(selectedObject2);
                delete selectedObject2;

                $(this).unbind('click');
                $(this).click(tiik(ind));
            }
        };
        for (var i = 0; i < 6; i++) {
            var butStartGame = $('<span class="classBut">').text("Показать НОД-" + (i + 1));
            divT.append($('<div>').append(butStartGame));
            butStartGame.click(tiik(i + 1));
        }
        $('.classBut').on('mouseover', function () {
            $(this).addClass('classButOut')
        }).on('mouseout', function () {
            $(this).removeClass('classButOut');
        });

    },
    addText: function (ind, coord, pr, keyA) {
        var thisEl = this;

        var textGeom = new THREE.TextGeometry(pr + "%",
            {
                size: 1, height: 1, curveSegments: 3,
                font: "optimer", weight: "bold", style: "normal",
                bevelThickness: 0.2, bevelSize: 0.1, bevelEnabled: true, bevelSegments: 6,
                material: 0, extrudeMaterial: 1
            });

        textGeom.computeBoundingBox();
        textGeom.computeVertexNormals();

        var textMesh = new THREE.Mesh(textGeom, this.textMaterial);

        textGeom.computeBoundingBox();
        var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;

        textMesh.position.set(coord[0], coord[1], coord[2]);
//        textMesh.scale.set(1);
        textMesh.rotation.x = -Math.PI / 4;
        textMesh.name = 'text' + ind;
        textMesh.indEl = ind;
        textMesh.pr = pr;
        textMesh.castShadow = true;
        this.scene.add(textMesh);
        if (keyA) {
            func = function () {
                var ik = ind;
                var tm = thisEl.scene.getObjectByName('text' + ik);
                var pr = tm.pr + 1;
                if (pr < 100) {
                    thisEl.scene.remove(tm);
                    delete tm;
                    thisEl.addText(ik, coord, pr, false)
                }
            }
            this.funcsd[ind] = animateObj.addFunc(func)
        }
    },
    loadObj: function (nameF, name, colorD, shadow) {
        var thisEl = this;
        var material = new THREE.MeshLambertMaterial({color: colorD});
        this.loaderJSON.load(this.imgFolder + nameF, function (geometry, materials) {
            // Tell the material that it has bone weights
            var originalMaterial = material;// (materials)?materials[ 0 ]:material;
//            originalMaterial.skinning = true;

            // Create a new SkinnedMesh (important! Not a animatedMesh!)
            var skinnedMesh = new THREE.SkinnedMesh(geometry, originalMaterial);
            skinnedMesh.castShadow = shadow;
            skinnedMesh.receiveShadow = !shadow;
            skinnedMesh.name = name;
            skinnedMesh.position.x = -10;
//
//            // Instantiate the animation
//            var animation = new THREE.Animation(
//                    animatedMesh,
//                    geometry.animation
//            );

            // Start playing the animation
//            animation.play();

            thisEl.scene.add(skinnedMesh);
        });
    },
    animate: function () {
//        this.mesh.rotation.x += 0.01;
//        this.mesh.rotation.y += 0.02;
//        if( this.mapRB){
//            this.mapRB.rotation.y += 0.01;
//        }
        this.renderer.render(this.scene, this.camera);
    }
}

var Animation = Class.create();
Animation.prototype = {
    listFunc: [],
    initialize: function (option) {
        var thisEl = this;
        window.requestAnimationFrame(function () {
            thisEl.animate();
        });
    },
    animate: function () {
        var thisEl = this;
        for (var i = 0; i < this.listFunc.length; i++) {
            this.listFunc[i]();
        }
        window.requestAnimationFrame(function () {
            thisEl.animate();
        });
    },
    addFunc: function (func) {
        var i = this.listFunc.length;
        this.listFunc[i] = func;
        return i;
    },
    removeFunc: function (ind) {
        this.listFunc.splice(ind, 1);
    }
}


//runF=0 выполняем иметацию нажатия клавиш
//runF=0 выполняем установку клавиш для меню
var Pad = Class.create();
Pad.prototype = {
    runF: 0,
    initialize: function (option) {
        var thisEl = this;
        if (navigator.getGamepads === undefined) {
            animateObj.addFunc(function () {
                thisEl.runAnimation();
            });
        } else {
        }
    },
    simulateKeyPress: function (kCode) {
        jQuery.event.trigger({type: 'keydown', which: kCode, keyCode: kCode});
    },
    // --------------------------------------
// Animation loop
// --------------------------------------
    runAnimation: function () {
        var gamepads = navigator.getGamepads();
        for (var i = 0; i < gamepads.length; i++) {
            var pad = gamepads[i];
            if (pad != undefined) {

//            if (g_fButtonPressedOnAnyGamepadEver === false) {
//                krot.joyH.text('hello');
//                setTimeout(function(){krot.joyH.text('');},500);
//                g_fButtonPressedOnAnyGamepadEver = true;
//            }
//            var fStandarMapping = (pad.mapping != undefined && pad.mapping === "standard");

                for (var i = 0; i < pad.buttons.length; i++) {
                    if (pad.buttons[i].pressed) {
                        if (this.runF == 0) {
                            for (var y = 0; y < joyVal.length; y++) {
                                if (joyVal[y] == i) {
                                    this.simulateKeyPress(keyVal[y]);
                                }
                            }
                        }
                        if (this.runF == 1) {
                            carJoyDown = i;
                            this.simulateKeyPress(carKeyDown);
                        }
                    }
                }
            } else {

            }
        }
//            var thisEl=this;
//            window.requestAnimationFrame(function(){thisEl.runAnimation();});
    }
}

var animateObj;
$(function () {
    animateObj = new Animation();
    mainMenu = new MenuGame();
    mainMenu.pad = new Pad();
});

