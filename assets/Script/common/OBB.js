import Vector from "./Vector";

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

export default class OBB {

    //实现方法1

    // init(centerX, centerY, halfWidth, halfHeight, rotation) {
    //     // this.x = centerX - halfWidth;
    //     // this.y = centerY - halfHeight;
    //     // this.width = halfWidth * 2;
    //     // this.height = halfHeight * 2;

    //     this.x = centerX;
    //     this.y = centerY;
    //     this.width = halfWidth;
    //     this.height = halfHeight;
    //     this.rotation = rotation;

    //     this.vectors = new Array();
    //     for(let k = 0 ; k < 2 ; k++) {
    //         this.vectors[k] = new Array() ;
    //         for(let p = 0 ; p < 2 ; p++) {
    //             this.vectors[k][p] = 0;
    //         }
    //     }


    //     this.resetVector() ;
    // }

    // refreshOBB(centerX, centerY, rotation) {
    //     this.x = centerX;
    //     this.y = centerY;
    //     this.rotation = rotation;
    //     this.resetVector() ;
    // }

    // resetVector() {
    //     this.vectors[0][0] = Math.cos(this.rotation) ;
    //     this.vectors[0][1] = Math.sin(this.rotation) ;
    //     this.vectors[1][0] = -this.vectors[0][1] ;
    //     this.vectors[1][1] = this.vectors[0][0] ;
    // }

    // isCollision(otherOBB) {
    //     let distanceVector = [otherOBB.x - this.x, otherOBB.y - this.y] ;

    //     for(let i = 0 ; i < 2 ; i++) {
    //         if(this.getProjectionRadius(this.vectors[i]) + otherOBB.getProjectionRadius(this.vectors[i]) <= this.dot(distanceVector, this.vectors[i])) {
    //             return false ;
    //         }

    //         if(this.getProjectionRadius(otherOBB.vectors[i]) + otherOBB.getProjectionRadius(otherOBB.vectors[i]) <= this.dot(distanceVector, otherOBB.vectors[i])) {
    //             return false ;
    //         }

    //         return true ;
    //     }
    // }

    // dot(a, b) {
    //     return Math.abs(a[0] * b[0] + a[1] * b[1]) ;
    // }

    // getProjectionRadius(vector) {
    //     return (this.width * this.dot(this.vectors[0], vector) / 2 + this.height * this.dot(this.vectors[1], vector) / 2);
    // }


    //实现方法二

    // init(centerX, centerY, halfWidth, halfHeight, rotation){
    //     this.halfWidth = halfWidth;
    //     this.halfHeight = halfHeight;
    //     this.rotation = rotation;

    //     this.centerPoint = [centerX, centerY] ;

    //     this.axisX = new Array() ;
    //     this.axisY = new Array() ;
    // }

    // setRotation(rotation) {
    //     this.rotation = rotation ;
    //     this.axisX[0] = Math.cos(rotation) ;
    //     this.axisX[1] = Math.sin(rotation) ;

    //     this.axisY[0] = -Math.sin(rotation) ;
    //     this.axisY[1] = Math.cos(rotation) ;
    // }

    // setCenter(x, y) {
    //     this.centerPoint = [x, y] ;
    // }

    // dot(axisA, axisB) {
    //     return Math.abs(axisA[0] * axisB[0] + axisA[1] * axisB[1]) ;
    // }

    // getProjectionRadius(axis) {
    //     let projectionAxisX = this.dot(axis, this.axisX);
    //     let projectionAxisY = this.dot(axis, this.axisY);
    //     return this.halfWidth * projectionAxisX + this.halfHeight * projectionAxisY ;
    // }

    // isCollision(otherOBB) {
    //     let centerDistanceVector = [
    //         this.centerPoint[0] - otherOBB.centerPoint[0],
    //         this.centerPoint[1] - otherOBB.centerPoint[1]
    //     ];

    //     let axes = [
    //         this.axisX,
    //         this.axisY,
    //         otherOBB.axisX,
    //         otherOBB.axisY
    //     ];

    //     for(let i = 0 ; i < axes.length ; i++) {
    //         if(this.getProjectionRadius(axes[i]) + otherOBB.getProjectionRadius(axes[i]) <= this.dot(centerDistanceVector, axes[i])) {
    //             return false ;
    //         }
    //     }

    //     return true ;
    // }

    //实现方法三

    init(centerX, centerY, halfWidth, halfHeight, rotation) {
        this.centerX = centerX;
        this.centerY = centerY;

        this.extents = [halfWidth, halfHeight];
        this.width = halfWidth * 2;
        this.height = halfHeight * 2;
        this.rotation = rotation;


        //this.axes = [new Vector(Math.cos(rotation), Math.sin(rotation)), new Vector(Math.sin(rotation) * -1, Math.cos(rotation),)];
        this.axes = [[Math.cos(rotation), Math.sin(rotation)], [Math.sin(rotation) * -1, Math.cos(rotation)]];
    }

    refreshOBB(centerX, centerY, rotation, halfWidth, halfHeight) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.rotation = rotation;
        this.extents = [halfWidth, halfHeight];

        this.axes = [[Math.cos(rotation), Math.sin(rotation)], [Math.sin(rotation) * -1, Math.cos(rotation)]];
    }

    getProjectionRadius(axis){
        return this.extents[0] * Math.abs(this.dot(axis, this.axes[0])) + this.extents[1] * Math.abs(this.dot(axis, this.axes[1])) ;
        //return this.extents[0] * Math.abs(axis.dot(this.axes[0])) + this.extents[1] * Math.abs(axis.dot(this.axes[1])) ;
    }

    dot(axisA, axisB) {
        return Math.abs(axisA[0] * axisB[0] + axisA[1] * axisB[1]) ;
    }

    isCollision(otherOBB) {
        let nv = [this.centerX - otherOBB.centerX, this.centerY - otherOBB.centerY] ;
        let axisA1 = this.axes[0] ;
        if(this.getProjectionRadius(axisA1) + otherOBB.getProjectionRadius(axisA1) <= Math.abs(this.dot(nv, axisA1))) {
            return false ;
        }
        let axisA2 = this.axes[1] ;
        if(this.getProjectionRadius(axisA2) + otherOBB.getProjectionRadius(axisA2) <= Math.abs(this.dot(nv, axisA2))) {
            return false ;
        }
        let axisB1 = otherOBB.axes[0] ;
        if(this.getProjectionRadius(axisB1) + otherOBB.getProjectionRadius(axisB1) <= Math.abs(this.dot(nv, axisB1))) {
            return false ;
        }
        let axisB2 = otherOBB.axes[1] ;
        if(this.getProjectionRadius(axisB2) + otherOBB.getProjectionRadius(axisB2) <= Math.abs(this.dot(nv, axisB2))) {
            return false ;
        }
        return true ;
    }
}