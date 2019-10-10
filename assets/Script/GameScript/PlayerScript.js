import Tools from "../common/Tools";
import OBB from "../common/OBB";
import EatBlockScript from "./EatBlockScript";
import BlockScript from "./BlockScript";

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
export default class PlayerController extends cc.Component {
    @property(cc.Node)
    player = null ;

    @property(cc.Node)
    upLayer = null ;

    @property(cc.Node)
    downLayer = null ;

    @property(cc.ParticleSystem)
    particleWhite = null ;

    @property
    distance = 5;

    @property
    speed = 3.5;

    @property
    jumpHeight = 280;

    @property
    jumpTime = 0.75;

    onLoad(){
        this.State = cc.Enum({
            STATE_MOVE_AT_UP: 1,
            STATE_MOVE_AT_DOWN : -1,
        }) ;

        this.player.zIndex = 99999;
        this.isDead = false ;
        
        this.playerOBB = new OBB() ;
        this.playerOBB.init(this.player.position.x, this.player.position.y, this.player.width / 2, this.player.height / 2, 0) ;

        this.player.opacity = 255 ;
        this.isDead = false ;
        this.currentState = this.State.STATE_MOVE_AT_UP ;
    }

    playerActionStart() {
        this.startAtUpLayer();
    }

    setUnitWinCallback(callback) {
        this.unitWinCallback = callback ;
    }

    setLayerChangeCallback(callback) {
        this.layerChangeCallback = callback ;
    }

    setDeadCallback(callback) {
        this.deadCallback = callback ;
    }

    setEatCallback(callback) {
        this.eatCallback = callback ;
    }

    setSpeed(speed) {
        this.speed = speed ;
    }

    setJumpHeight(jumpHeight) {
        this.jumpHeight = jumpHeight;
    }

    resetPlayer() {
        this.player.stopAllActions();
        if(this.currentState === this.State.STATE_MOVE_AT_UP) {
            this.startAtUpLayer() ;
        }else {
            this.startAtDownLayer() ;
        }
        this.player.opacity = 255 ;
        this.isDead = false ;
    }

    startAtUpLayer() {
        
        this.currentState = this.State.STATE_MOVE_AT_UP ;
        this.isJump = false ;

        this.player.color = cc.color(0, 0, 0) ;
        this.player.rotation = 0 ;

        let nodeWidth = this.player.width ;
        this.player.setPositionX(-Tools.getScreenWidth() / 2 - nodeWidth / 2);

        let nodeHeight = this.player.height ;
        let startHeight = this.upLayer.position.y + nodeHeight / 2 ;
        this.player.setPositionY(startHeight);

        let moveDistance = Tools.getScreenWidth() + nodeWidth;
        let moveAction = cc.moveBy( this.distance / this.speed, moveDistance, 0 ) ;
        let callback = cc.callFunc(this.moveCallback.bind(this)) ;
        let seq = cc.sequence(moveAction, callback) ;
        this.player.runAction(seq) ;

        //obb碰撞检测废弃，启用box2d
        //this.playerOBB.refreshOBB(this.player.position.x, this.player.position.y, this.player.rotation, this.player.width / 2, this.player.height / 2) ;
    }

    moveCallback(){
        this.player.stopAllActions();
        if(this.currentState === this.State.STATE_MOVE_AT_UP) {
            this.startAtDownLayer() ;
            if(this.layerChangeCallback) {
                this.layerChangeCallback() ;
            }
        }else {
            if(this.unitWinCallback) {
                this.unitWinCallback() ;
            }
            //this.startAtUpLayer() ;
        }
    }

    startAtDownLayer() {

        this.currentState = this.State.STATE_MOVE_AT_DOWN ;
        this.isJump = false ;

        this.player.color = cc.color(255, 255, 255) ;
        this.player.rotation = 0 ;

        let nodeWidth = this.player.width ;
        this.player.setPositionX(Tools.getScreenWidth() / 2 + nodeWidth / 2);

        let nodeHeight = this.player.height ;
        let startHeight = this.downLayer.position.y - this.downLayer.height + nodeHeight / 2 ;
        this.player.setPositionY(startHeight);

        let moveDistance = Tools.getScreenWidth() + nodeWidth;
        let moveAction = cc.moveBy( this.distance / this.speed, -moveDistance, 0 ) ;
        let callback = cc.callFunc(this.moveCallback.bind(this)) ;
        let seq = cc.sequence(moveAction, callback) ;
        this.player.runAction(seq) ;

        //obb碰撞检测废弃，启用box2d
       // this.playerOBB.refreshOBB(this.player.position.x, this.player.position.y, this.player.rotation, this.player.width / 2, this.player.height / 2) ;
    }

    jump() {

        if(this.isJump || this.isDead) {
            return ;
        }
        this.isJump = true ;
        let rotate = 0;

        if(this.currentState === this.State.STATE_MOVE_AT_UP) {
            rotate = 180;
        }else {
            rotate = -180;
        }

        this.jumpTime = 0.75 * (this.jumpHeight / 280);

        let rotateAction = cc.rotateBy(this.jumpTime, rotate) ;
        let jumpAction = cc.jumpBy(this.jumpTime, cc.p(0, 0), this.jumpHeight, 1) ;
        let spa = cc.spawn(rotateAction, jumpAction) ;
        let callback = cc.callFunc(() => {
            this.isJump = false ;
            this.player.rotation = 0 ;
            //this.playerOBB.refreshOBB(this.player.position.x, this.player.position.y, this.player.rotation, this.player.width / 2, this.player.height / 2) ;
        }) ;
        let seq = cc.sequence(spa, callback) ;
        this.player.runAction(seq) ;
    }

    update(delta) {
        //this.playerOBB.refreshOBB(this.player.position.x, this.player.position.y, this.player.rotation, this.player.width / 2, this.player.height / 2) ;
    }

    getOBB() {
        return this.playerOBB ;
    }

    checkDead() {
        return this.isDead ;
    }

    dead() {
        this.isDead = true ;
        this.player.stopAllActions();
        this.player.opacity = 0 ;
        if(this.currentState === this.State.STATE_MOVE_AT_UP) {
            this.particleWhite.resetSystem() ;
            this.particleWhite.startColor = cc.color(0, 0, 0) ;
        }else {
            this.particleWhite.resetSystem() ;
            this.particleWhite.startColor = cc.color(255, 255, 255) ;
        }

        if(this.deadCallback) {
            this.deadCallback() ;
        }
        this.scheduleOnce(()=>{
            this.resetPlayer() ;
        }, 1.0);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if(this.isDead) {
            return ;
        }
        
        if(otherCollider.tag === 1) {
            if(otherCollider.getComponent(BlockScript).canBeCollided()) {
                this.dead() ;
            }
        }else if(otherCollider.tag === 2) {
            if(this.eatCallback) {
                this.eatCallback(otherCollider.getComponent(EatBlockScript)) ;
            }
        }
    }
}