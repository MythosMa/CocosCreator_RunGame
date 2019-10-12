import OBB from "../common/OBB";

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

const {ccclass, property} = cc._decorator ;

@ccclass
export default class EatBlockScript extends cc.Component {
    
    
    @property(cc.Node)
    blockSprite = null ;

    setBlockInfo(blockInfo){

        this.relativeIndex = blockInfo.relativeIndex ;
        this.scaleY = blockInfo.scaleY ;
        this.blockSprite.setPosition(cc.p(blockInfo.positionX, blockInfo.positionY));
        

        //obb碰撞检测废弃， 使用box2d碰撞检测
        // this.blockOBB = new OBB();
        // this.blockOBB.init(this.blockSprite.position.x, this.blockSprite.position.y, this.blockSprite.width / 2, this.blockSprite.height / 2, 0) ;

        let rotationAction = null;
        if(blockInfo.isUp) {
            let rotateBy = cc.rotateBy(2.0, -360) ;
            rotationAction = cc.repeatForever(rotateBy) ;
            this.blockSprite.color = cc.color(0, 0, 0) ;
        }else {
            let rotateBy = cc.rotateBy(2.0, 360) ;
            rotationAction = cc.repeatForever(rotateBy) ;
            this.blockSprite.color = cc.color(255, 255, 255) ;  
        }
        this.blockSprite.runAction(rotationAction) ;
    }

    update(delta) {
        //this.blockOBB.refreshOBB(this.blockSprite.position.x, this.blockSprite.position.y, this.blockSprite.rotation, this.blockSprite.width / 2, this.blockSprite.height / 2);
    }


    getOBB() {
        return this.blockOBB;
    }

    getRelativeInfo() {
        return {relativeIndex : this.relativeIndex, scaleY : this.scaleY} ;
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        
    }
}
