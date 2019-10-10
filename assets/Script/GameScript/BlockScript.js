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
export default class BlockScript extends cc.Component {
    @property(cc.Node)
    blockSprite = null ;

    // @property(cc.Node)
    // boxLayer = null ;

    setBlockInfo(info) {
        let blockInfo = info.blockInfo ;
        this.blockSprite.width = blockInfo.width ;
        this.blockSprite.height = blockInfo.height ;
        this.oriScaleX = blockInfo.oriScaleX ;
        this.oriScaleY = blockInfo.oriScaleY ;
        this.canChange = blockInfo.canChange ;
        this.index = blockInfo.index ;
        this.scaleX = blockInfo.scaleX ;
        this.scaleY = blockInfo.scaleY ;
        this.isUp = info.isUp ;
        this.blockSprite.setPosition(cc.p(blockInfo.positionX, blockInfo.positionY));

        if(this.oriScaleX === 0 || this.oriScaleY === 0) {
            this.blockSprite.active = false ;
        }
        this.blockSprite.setScale(this.oriScaleX === 0 ? 1 : this.oriScaleX, this.oriScaleY === 0 ? 1 : this.oriScaleY) ;

        //box2d的碰撞检测
        this.boxCollider = this.getComponent(cc.PhysicsBoxCollider);
        this.boxCollider.size.width = this.blockSprite.width ;
        this.boxCollider.size.height = this.blockSprite.height ;
        this.boxCollider.offset.y = this.boxCollider.size.height / 2 ;
        
        // this.boxLayer.width = this.boxCollider.size.width ;
        // this.boxLayer.height = this.boxCollider.size.height ;


        //obb碰撞检测废弃，更换box2d做碰撞检测
        // this.blockOBB = new  OBB();
        // this.blockOBB.init(this.blockSprite.position.x, this.blockSprite.position.y + this.blockSprite.height / 2, this.blockSprite.width / 2, this.blockSprite.height / 2, 0) ;

        if(info.isUp) {
            this.blockSprite.color = cc.color(0, 0, 0) ;
        }else {
            this.blockSprite.color = cc.color(255, 255, 255) ;
        }

        
    }

    changeStart() {
        if(!this.canChange) {
            return ;
        }

        let scaleTo_1 = cc.scaleTo(0.25, this.scaleX, this.scaleY) ;
        let scaleTo_2 = cc.scaleTo(0.25, 1.0, 1.0) ;
        let seq = cc.sequence(scaleTo_1, scaleTo_2) ;
        let repeat = cc.repeatForever(seq) ;
        this.blockSprite.runAction(repeat) ;
        this.schedule(this.changeUpdate.bind(this), 0);
        
    }

    checkIsUp() {
        return this.isUp ;
    }

    changeUpdate(delta) {
        //box2d的碰撞检测
        // this.boxCollider.size.width = this.blockSprite.width * this.oriScaleX * this.blockSprite.scaleX ;
        // this.boxCollider.size.height = this.blockSprite.height * this.oriScaleY * this.blockSprite.scaleY ;
        // this.boxCollider.offset.y = this.boxCollider.size.height / 2 ;

        //obb碰撞检测废弃，更换box2d做碰撞检测
        // console.log("width : " + this.blockSprite.width * this.blockSprite.scaleX + "|height" + this.blockSprite.height * this.blockSprite.scaleY );
        // this.blockOBB.refreshOBB(this.blockSprite.position.x, 
        //     this.blockSprite.position.y + this.blockSprite.height * this.blockSprite.scaleY * this.oriScaleY / 2, 
        //     0, 
        //     this.blockSprite.width  * this.blockSprite.scaleX * this.oriScaleX / 2, 
        //     this.blockSprite.height * this.blockSprite.scaleY * this.oriScaleY / 2);

        // console.log("box collider width : " + this.boxCollider.size.width) ;
        // console.log("box collider height : " + this.boxCollider.size.height) ;
    }

    changeEnd(){
        if(!this.canChange) {
            return ;
        }
        this.blockSprite.stopAllActions() ;
        this.unschedule(this.changeUpdate) ;
    }

    getOBB() {
        return this.blockOBB ;
    }

    getBlockInfo() {
        return {positionX : this.blockSprite.position.x, positionY : this.blockSprite.position.y, width : this.blockSprite.width, height : this.blockSprite.height} ;
    }

    setEatChangeScaleY(scaleY) {
        if(this.oriScaleX === 0 || this.oriScaleY === 0) {
            if(scaleY !== 0) {
                this.blockSprite.active = true ;
            }
        }

        if(scaleY === 0) {
            this.blockSprite.active = false ;
        }

        this.blockSprite.setScale(this.blockSprite.scaleX, scaleY) ;

        //box2d的碰撞检测
        // if(scaleY === 0) {
        //     this.boxCollider.size.width = this.blockSprite.width * this.blockSprite.scaleX ;
        //     this.boxCollider.size.height = this.blockSprite.height * this.blockSprite.scaleY ;
        //     this.boxCollider.offset.y = this.boxCollider.size.height / 2 ;
        // }

        //obb碰撞检测废弃，更换box2d做碰撞检测
        // this.blockOBB.refreshOBB(this.blockSprite.position.x, 
        //     this.blockSprite.position.y + this.blockSprite.height * this.blockSprite.scaleY * this.oriScaleY / 2, 
        //     0, 
        //     this.blockSprite.width  * this.blockSprite.scaleX * this.oriScaleX / 2, 
        //     this.blockSprite.height * this.blockSprite.scaleY * this.oriScaleY / 2);
    }

    getIndex() {
        return this.index ;
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        console.log("normal block bobobobo index : " + this.index) ;
    }

    canBeCollided() {
        return this.blockSprite.scaleX !== 0 && this.blockSprite.scaleY !== 0;
    }

    showCollideInfo() {
        console.log("block info width : " +  this.blockSprite.width * this.oriScaleX * this.blockSprite.scaleX  + "|height : " + this.blockSprite.height * this.oriScaleY * this.blockSprite.scaleY) ;
        console.log("box collider width : " + this.boxCollider.size.width) ;
        console.log("box collider height : " + this.boxCollider.size.height) ;
        console.log("box collider offset y : " + this.boxCollider.offset.y) ;
    }
}
