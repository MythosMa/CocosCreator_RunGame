import GameUIScript from '../common/GameUIScript';
import OBB from '../common/OBB';
import UnitInfo from '../common/UnitInfo';
import BlockScript from './BlockScript';
import PlayerScript from './PlayerScript';
import EatBlockScript from './EatBlockScript'


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

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameController extends cc.Component {
    @property(cc.Node)
    player = null;

    @property(cc.Node)
    upLayer = null;

    @property(cc.Node)
    downLayer = null;

    @property(cc.Node)
    gameLayer = null;

    @property(cc.Prefab)
    blockPrefab = null;

    @property(cc.Prefab)
    eatBlockPrefab = null;

    @property(cc.Node)
    uiLayer = null;

    @property
    maxUnit = 0;

    onLoad(){
        cc.director.getPhysicsManager().enabled = true;
        this.maxUnit = UnitInfo.getUnitCount();
        this.currentUnitIndex = 7;
        this.blocks = [];
        this.blockPool = new cc.NodePool();
        this.eatBlocks = [];
        this.eatBlockPool = new cc.NodePool();
        this.player.getComponent(PlayerScript).setUnitWinCallback(this.unitWinCallback.bind(this));
        this.player.getComponent(PlayerScript).setLayerChangeCallback(this.layerChangeCallback.bind(this));
        this.player.getComponent(PlayerScript).setDeadCallback(this.dead.bind(this));
        this.player.getComponent(PlayerScript).setEatCallback(this.eatBlock.bind(this));
        this.refreshGameInfo();
    }

    start(){
        this.makeUnit();
    }

    refreshGameInfo() {
        this.life = 0;
        this.uiLayer.getComponent(GameUIScript).refreshLife(this.life);
    }

    makeUnit(){
        let unitStr = this.currentUnitIndex + 1 + ":" + this.maxUnit;
        this.uiLayer.getComponent(GameUIScript).refreshUnit(unitStr);
        
        let currentUnitInfo = UnitInfo.getUnitInfo(this.currentUnitIndex);
        this.currentUnitBlockInfo = currentUnitInfo.unitInfo;
        this.gameInfo = currentUnitInfo.gameInfo;
        this.player.getComponent(PlayerScript).setSpeed(this.gameInfo.speed);
        this.player.getComponent(PlayerScript).setJumpHeight(this.gameInfo.jumpHeight);
        this.uplayerBlockInfo = this.currentUnitBlockInfo[0];
        this.downLayerBlockInfo = this.currentUnitBlockInfo[1];
        this.eatBlockInfo = this.currentUnitBlockInfo.length > 2 ? this.currentUnitBlockInfo[2] : [];

        this.uplayerBlockInfo.forEach((item, index) => {
            let info = {
                isUp: true,
                blockInfo: item
            }
            this.createBlocks(info);
        });

        this.downLayerBlockInfo.forEach((item, index) => {
            item.positionY = item.positionY - this.downLayer.height;
            let info = {
                isUp: false,
                blockInfo: item
            }
            this.createBlocks(info);
        });

        this.eatBlockInfo.forEach((item, index) => {
            item.isUp || (item.positionY = item.positionY - this.downLayer.height);
            this.createEatBlocks(item);
        });

        this.player.getComponent(PlayerScript).playerActionStart();
    }

    createBlocks(info) {
        let block = this.blockPool.size > 0 ? this.blockPool.get() : cc.instantiate(this.blockPrefab);
        block.getComponent(BlockScript).setBlockInfo(info);
        info.isUp && block.getComponent(BlockScript).changeStart();
        this.blocks.push(block);
        this.gameLayer.addChild(block, 100);
    }

    createEatBlocks(info) {
        let block = (this.eatBlockPool.size > 0 ? this.eatBlockPool.get() : cc.instantiate(this.eatBlockPrefab));
        block.getComponent(EatBlockScript).setBlockInfo(info);
        this.eatBlocks.push(block);
        this.gameLayer.addChild(block, 100);
    }

    update() {

    }
    
    checkCollide() {
        let playerOBB = this.player.getComponent(PlayerScript).getOBB();
        this.blocks.forEach((item, index) => {
            let blockOBB = item.getComponent(BlockScript).getOBB();
            if(playerOBB.isCollision(blockOBB) ){
                return void this.dead();
            }
        });
    }

    checkEatCollide() {
        let playerOBB = this.player.getComponent(PlayerScript).getOBB();
        this.eatBlocks.forEach((item, index) => {
            let blockOBB = item.getComponent(EatBlockScript).getOBB();
            if(playerOBB.isCollision(blockOBB)){
                return void this.eatBlock(item.getComponent(EatBlockScript).getRelativeInfo());
            }
        });
    }

    dead() {
        this.life++;
        this.uiLayer.getComponent(GameUIScript).refreshLife(this.life);
    }

    eatBlock(eatBlockInfo) {
        let relativeIndex = eatBlockInfo.relativeIndex;
        let scaleY = eatBlockInfo.scaleY;
        for(let index in this.blocks) {
            let item = this.blocks[index];
            if(item.getComponent(BlockScript).getIndex() === relativeIndex) {
                item.getComponent(BlockScript).setEatChangeScaleY(scaleY);
            }
        }

        for(let index in this.eatBlocks) {
            let item = this.eatBlocks[index];
            if(eatBlockInfo.node === item) {
                eatBlockInfo.node.removeFromParent(true);
                this.eatBlocks.splice(index, 1);
            }
        }
    }

    layerChangeCallback() {
        this.blocks.forEach((item, index) => {
            item.getComponent(BlockScript).checkIsUp() ? item.getComponent(BlockScript).changeEnd() : item.getComponent(BlockScript).changeStart();
        });
    }

    unitWinCallback() {
        this.currentUnitIndex++;
        this.currentUnitIndex >= this.maxUnit && (this.currentUnitIndex = 0, this.refreshGameInfo());
        this.clearBlocks();
        this.makeUnit();
    }

    clearBlocks() {
        this.blocks.forEach((item, index) => {
            item.destroy();
        });
        this.blocks = [];
        this.eatBlocks.forEach((item, index) => {
            item.destroy();
        });
        this.eatBlocks = [];
    }

}


