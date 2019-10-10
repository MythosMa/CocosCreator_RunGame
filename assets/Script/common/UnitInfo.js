// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // foo: {
//         //     // ATTRIBUTES:
//         //     default: null,        // The default value will be used only when the component attaching
//         //                           // to a node for the first time
//         //     type: cc.SpriteFrame, // optional, default is typeof default
//         //     serializable: true,   // optional, default is true
//         // },
//         // bar: {
//         //     get () {
//         //         return this._bar;
//         //     },
//         //     set (value) {
//         //         this._bar = value;
//         //     }
//         // },
//     },

//     // LIFE-CYCLE CALLBACKS:

//     // onLoad () {},

//     start () {

//     },

//     // update (dt) {},
// });

class UnitInfo {

    unitInfo = [
        //每个关卡的障碍物数据
        //上下两层的高度分别是460
        //第一关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : 0, positionY : 0, width : 100, height : 100, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
            ],
            //关卡中下层的障碍物数据
            [
                {index : 2, positionX : 300, positionY : 0, width : 100, height : 100, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 3, positionX : -300, positionY : 0, width : 100, height : 100, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                
            ]
        ],

        //第二关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : 0, positionY : 0, width : 140, height : 180, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},

            ],
            //关卡中下层的障碍物数据
            [
                {index : 2, positionX : 300, positionY : 0, width : 100, height : 100, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 3, positionX : -300, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                
            ]
        ],

        //第三关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -300, positionY : 0, width : 140, height : 180, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 2, positionX : 300, positionY : 0, width : 140, height : 180, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},

            ],
            //关卡中下层的障碍物数据
            [
                {index : 3, positionX : 390, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 4, positionX : -150, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 5, positionX : -710, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
            ]
        ],

        //第四关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : 400, positionY : 0, width : 100, height : 240, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 2, positionX : 400, positionY : 400, width : 100, height : 60, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},               
            ],
            //关卡中下层的障碍物数据
            [
                {index : 3, positionX : 0, positionY : 0, width : 100, height : 240, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},

                {index : 4, positionX : -600, positionY : 0, width : 120, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ]
        ],
        
        //第五关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -510, positionY : 100, width : 300, height : 50, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 2, positionX : -100, positionY : 0, width : 200, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 3, positionX : 450, positionY : 100, width : 300, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},              
            ],
            //关卡中下层的障碍物数据
            [
                {index : 4, positionX : 450, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 5, positionX : 150, positionY : 100, width : 120, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 6, positionX : -220, positionY : 0, width : 120, height : 180, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 7, positionX : -670, positionY : 100, width : 180, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ]
        ],

        //第六关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -300, positionY : 0, width : 150, height : 120, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 250, positionY : 0, width : 100, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : true, scaleX : 1.0, scaleY : 1.5},
            
            ],
            //关卡中下层的障碍物数据
            [
                {index : 3, positionX : 550, positionY : 100, width : 400, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 4, positionX : 80, positionY : 0, width : 100, height : 116, oriScaleX : 1.0, oriScaleY : 1.0, canChange : true , scaleX : 1.0, scaleY : 1.8},
                {index : 5, positionX : -650, positionY : 0, width : 220, height : 200, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
            ]
        ],

        //第七关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -400, positionY : 0, width : 100, height : 50, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : -300, positionY : 0, width : 100, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 3, positionX : -200, positionY : 0, width : 100, height : 110, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 4, positionX : -100, positionY : 0, width : 100, height : 140, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 

                {index : 5, positionX : 700, positionY : 0, width : 100, height : 50, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 6, positionX : 600, positionY : 0, width : 100, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 7, positionX : 500, positionY : 0, width : 100, height : 110, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 8, positionX : 400, positionY : 0, width : 100, height : 140, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中下层的障碍物数据
            [
                {index : 9, positionX : 300, positionY : 0, width : 180, height : 140, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 10, positionX : 120, positionY : 0, width : 180, height : 70, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},


                {index : 11, positionX : -400, positionY : 0, width : 180, height : 70, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 12, positionX : -580, positionY : 0, width : 180, height : 140, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                
            ]
        ],

        //第八关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : 500, positionY : 0, width : 100, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  

            ],
            //关卡中下层的障碍物数据
            [
                {index : 10, positionX : -300, positionY : 0, width : 100, height : 200, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 11, positionX : -400, positionY : 0, width : 100, height : 200, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 12, positionX : -500, positionY : 0, width : 100, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 13, positionX : -600, positionY : 0, width : 100, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中机关
            [
                {relativeIndex : 1, scaleY : 0.5, isUp : true, positionX : -200, positionY : 200},

                {relativeIndex : 10, scaleY : 0, isUp : false, positionX : 200, positionY : 100},
                {relativeIndex : 12, scaleY : 0, isUp : false, positionX : 100, positionY : 100},
                {relativeIndex : 11, scaleY : 0, isUp : false, positionX : 0, positionY : 200},
                {relativeIndex : 13, scaleY : 0, isUp : false, positionX : -100, positionY : 200},
            ]
        ],

        //第九关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -320, positionY : 0, width : 120, height : 170, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 20, positionY : 220, width : 120, height : 240, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 

                {index : 3, positionX : 400, positionY : 0, width : 120, height : 400, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 4, positionX : 400, positionY : 400, width : 120, height : 60, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 

            ],
            //关卡中下层的障碍物数据
            [
                {index : 10, positionX : 0, positionY : 0, width : 100, height : 250, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中机关
            [
                {relativeIndex : 3, scaleY : 0.6, isUp : true, positionX : 20, positionY : 150},

                {relativeIndex : 10, scaleY : 1.0, isUp : false, positionX : 0, positionY : 100},
            ]
        ],

        //第十关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -400, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0},  

                {index : 2, positionX : 350, positionY : 0, width : 120, height : 350, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 

            ],
            //关卡中下层的障碍物数据
            [
                //{index : 10, positionX : 800, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 11, positionX : 500, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                //{index : 12, positionX : 200, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 13, positionX : -100, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                //{index : 14, positionX : -400, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 15, positionX : -700, positionY : 0, width : 120, height : 50, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0}, 
                
            ],
            //关卡中机关
            [
                {relativeIndex : 1, scaleY : 1.0, isUp : true, positionX : -400, positionY : 100},
                {relativeIndex : 2, scaleY : 0.0, isUp : true, positionX : 220, positionY : 320},
                {relativeIndex : 5, scaleY : 1.0, isUp : true, positionX : 220, positionY : 100},


                {relativeIndex : 10, scaleY : 1.0, isUp : false, positionX : 800, positionY : 100},
                {relativeIndex : 11, scaleY : 1.0, isUp : false, positionX : 500, positionY : 100},
                {relativeIndex : 12, scaleY : 1.0, isUp : false, positionX : 200, positionY : 100},
                {relativeIndex : 13, scaleY : 1.0, isUp : false, positionX : -100, positionY : 100},
                {relativeIndex : 14, scaleY : 1.0, isUp : false, positionX : -400, positionY : 100},
                {relativeIndex : 15, scaleY : 1.0, isUp : false, positionX : -700, positionY : 100},

            ]
        ],

        //第十一关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -200, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 600, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中下层的障碍物数据
            [
                {index : 11, positionX : 400, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 12, positionX : -150, positionY : 100, width : 350, height : 120, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 11, positionX : -750, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
            ],
        ],


        //第十二关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -400, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 350, positionY : 0, width : 150, height : 240, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 3, positionX : 600, positionY : 0, width : 180, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中下层的障碍物数据
            [
                {index : 11, positionX : 360, positionY : 0, width : 180, height : 100, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 12, positionX : -120, positionY : 100, width : 450, height : 150, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 13, positionX : -750, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  

            ],
        ],

        //第十三关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -340, positionY : 0, width : 180, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 0, positionY : 100, width : 180, height : 60, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 3, positionX : 370, positionY : 0, width : 150, height : 160, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 4, positionX : 530, positionY : 100, width : 450, height : 60, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 

            ],
            //关卡中下层的障碍物数据
            [
                {index : 11, positionX : 400, positionY : 0, width : 560, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 12, positionX : -550, positionY : 0, width : 120, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 13, positionX : -800, positionY : 100, width : 120, height : 300, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
        ],


        //第十四关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -600, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 130, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 3, positionX : 860, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
            ],
            //关卡中下层的障碍物数据
            [
                {index : 11, positionX : 600, positionY : 0, width : 150, height : 120, oriScaleX : 1.0, oriScaleY : 0.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 12, positionX : -200, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 13, positionX : -770, positionY : 0, width : 120, height : 250, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],

            //关卡中机关
            [

                {relativeIndex : 11, scaleY : 1.0, isUp : false, positionX : 600, positionY : 100},
                {relativeIndex : 13, scaleY : 0.5, isUp : false, positionX : 0, positionY : 200},

            ]
        ],

        //第十五关
        [
            //关卡中上层的障碍物数据
            [
                {index : 1, positionX : -500, positionY : 0, width : 120, height : 310, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 2, positionX : 600, positionY : 0, width : 150, height : 120, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 3, positionX : 900, positionY : 200, width : 300, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
            //关卡中下层的障碍物数据
            [
                {index : 11, positionX : 380, positionY : 0, width : 150, height : 120, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},  
                {index : 12, positionX : 95, positionY : 100, width : 150, height : 140, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0},
                {index : 13, positionX : -450, positionY : 0, width : 120, height : 280, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
                {index : 13, positionX : -720, positionY : 0, width : 120, height : 80, oriScaleX : 1.0, oriScaleY : 1.0, canChange : false, scaleX : 0, scaleY : 0}, 
            ],
        ],

    ];

    gameInfo = [
        //关卡中的其他数据
        //第一关
        {speed : 2, jumpHeight : 280},

        //第二关
        {speed : 2, jumpHeight : 280},

        //第三关
        {speed : 2, jumpHeight : 280},

        //第四关
        {speed : 2, jumpHeight : 280},

        //第五关
        {speed : 2, jumpHeight : 280},

        //第六关
        {speed : 2, jumpHeight : 280},

        //第七关
        {speed : 2, jumpHeight : 280},

        //第八关
        {speed : 2, jumpHeight : 280},

        //第九关
        {speed : 2, jumpHeight : 280},

        //第十关
        {speed : 2, jumpHeight : 280},

        //第十一关
        {speed : 2, jumpHeight : 340},

        //第十二关
        {speed : 2, jumpHeight : 340},

        //第十三关
        {speed : 2, jumpHeight : 340},

        //第十四关
        {speed : 2, jumpHeight : 340},

        //第十五关
        {speed : 2, jumpHeight : 340},

    ]

    getUnitCount() {
        return this.unitInfo.length ;
    }

    getUnitInfo(unitIndex) {
        let unitInfo = this.deepCopy(this.unitInfo) ;
        let gameInfo = this.deepCopy(this.gameInfo) ;
        return {unitInfo : unitInfo[unitIndex], gameInfo : gameInfo[unitIndex]} ;
    }

    deepCopy(source) {
        let sourceCopy = source instanceof Array ? [] : {};
        for(let item in source) {
            sourceCopy[item] = typeof source[item] === "object" ? this.deepCopy(source[item]) : source[item];
        }

        return sourceCopy ;
    }

}

export default new UnitInfo() ;