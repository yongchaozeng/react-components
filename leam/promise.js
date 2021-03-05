import { response } from "express"

/**
 * promise 三状态
 * pending
 * Fulfilled
 * Rejected
 *  
*/

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then(() => {

})

function MyPromise(executor) {
    let self = this
    this.status = 'pending'
    this.data = undefined
    self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    self.onRejectedCallback = []

    function resolve(value) {
        if (this.status === 'pending') {
            this.status = 'resolve'
            for (let index = 0; index < this.onResolvedCallback.length; index++) {
                this.onResolvedCallback[index](value)
            }
        }
    }
    function reject(value) {
        if (this.status === 'pending') {
            this.status = 'reject'
            for (let index = 0; index < this.onRejectedCallback.length; index++) {
                this.onRejectedCallback[index](value)
            }
        }
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }

}

MyPromise.prototype.then = function (onResolve, onReject) {
    if (this.status === 'resolved') {
        return new MyPromise(function (resolve, reject) {
            try {
                let x = onResolve(this.data)
                if (x instanceof MyPromise) {
                    x.then(resolve, reject)
                }
                resolve(x)
            } catch (e) {
                reject(e)
            }
        })
    }

}