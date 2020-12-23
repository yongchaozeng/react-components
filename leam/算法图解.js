
// 二分查找 递归版
let myList = [1, 3, 5, 7, 9, 12]
// let search = (list, number) => {
//     const left = 0
//     let right = list.length - 1
//     let mid = Math.floor(right / 2)
//     let midVal = list[mid]
//     if (number > midVal) {
//         return search(list.slice(mid + 1, right + 1), number) ? (search(list.slice(mid + 1, right + 1), number) + mid + 1) : null
//     } else if (number < midVal) {
//         return search(list.slice(left, mid), number)
//     } else if (number = midVal) {
//         return mid
//     } else {
//         return
//     }
// }

// 二分查找 遍历
let search = (list, number) => {
    const left = 0
    let index = 0
    let length = 0

    while (index < 10) {
        index += 1
        let right = list.length - 1
        let mid = Math.floor(right / 2)
        let midVal = list[mid]
        if (number > midVal) {
            list = list.slice(mid + 1, right + 1)
            length += mid + 1
        } else if (number < midVal) {
            list = list.slice(left, mid)
        } else if (number = midVal) {
            return mid + length
        } else {
            return null
        }
    }
}
// console.log(search(myList, 11));

// 内存可以理解为抽屉
// 链表 增删快，访问慢  数组访问快 增删慢
// 选择排序 定义基准为最小或最大 然后双重循环对比 oN
// 递归尾回调优化
// 字典:查找速度快，防重复    但是会冲突，两个键位置相同  填充因子 良好的散列分配
// 图  广度优先搜索   有a到b的路径吗，那条路最短  队列和字典的运用  完成最短路径的搜索


let arr = [3, 1, 9, 57, 15, 24, 12, 7, 41, 23, 5]
function sort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let max = array[0]
        let index = 0
        for (let j = 0; j < array.length - i; j++) {
            if (max < array[j]) {
                max = array[j]
                index = j
            }
            if (j === array.length - i - 1) {
                array[index] = array[j]
                array[j] = max
            }
        }
    }
}
// sort(arr)
function kuaisu(array) {
    let len = array.length
    if (len === 0) return
    if (len === 1) return array

    let mid = Math.floor(len / 2)
    let left = []
    let right = []

    array.forEach(item => {
        if (item < array[mid]) {
            left.push(item)
        } else if (item > array[mid]) {
            right.push(item)
        }
    });
    if (left.length === 0) {
        return [array[mid]].concat(kuaisu(right))
    }
    if (right.length === 0) {
        return kuaisu(left).concat([array[mid]])
    }
    if (left.length !== 0 && right.length !== 0) {
        return kuaisu(left).concat([array[mid]].concat(kuaisu(right)))
    }


}
// console.log(kuaisu(arr));

function maoPao(array) {
    let temp = null;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[j - 1]) {
                temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
        }
    }
    console.log(array);
}

// maoPao(arr)

// 图广度优先搜索
let data = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggym"],
    claire: ["tho", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
}


function dfs(obj) {
    let array = obj.you
    let sum = []
    while (array.length) {
        let item = array[0]
        if (isOk(item)) {
            return item
        } else {
            array.shift()
            if (obj[item] && obj[item].length) {
                array = array.concat(obj[item])
            }
        }
    }
    return false
    function isOk(name) {
        return !!(name[name.length - 1] === 'o')
    }
}
// console.log(dfs(data));

// 迪克斯特拉算法 权图
// let data2 = {
//     start: ["a", "b",],
//     a: 6,
//     b: 2,
// }
// console.log(data2.start);
// console.log(data2[data2.start[0]]);
// console.log(data2[data2.start[1]]);

let array1 = [0, 60, 10, null, 50, null]
let edge = {
    s: 2,
    e:2,
    weight:0
}
//https://juejin.cn/post/6844904151596400648














