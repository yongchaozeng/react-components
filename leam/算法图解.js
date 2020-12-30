
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

/*
这篇文章是自己学习《算法图解》的一些读书笔记，能力一般，水平有限，有写得不好的地方，欢迎指出

如何在朋友圈通过联系最少的人找到芒果商人，图的广度搜索
我们的思路肯定是先从自己认识的人开始找，那么首先应该找到自己的朋友，自己的朋友没有，再去朋友的朋友里面找

这个地方就可以使用队列来帮助查找，首先把自己的朋友放进队列中，查找之后没有，在把朋友的朋友添加进队列

class Search {
    constructor() {
        this.map = {}
    }
    addNode() {

    }
    bfs() {

    }
}

let graph = new Search()
创建一个类，存储一个map对象，用来描述朋友关系，使用addNode添加朋友，bfs找出最短路径

addNode实现
   addNode(start, end) {
        if (!this.map[start]) {
            this.map[start] = []
        }
        this.map[start].push(end)
    }
    graph.addNode('start', 'bob')
    graph.addNode('start', 'alice')
    graph.addNode('start', 'claire')
    graph.addNode('bob', 'anuj')
    graph.addNode('bob', 'peggy')
    graph.addNode('alice', 'peggym')
    graph.addNode('claire', 'tho')
    graph.addNode('claire', 'jonny')


     map = {
        start: ["alice", "bob", "claire"],
        bob: ["anuj", "peggy"],
        alice: ["peggym"],
        claire: ["tho", "jonny"],
    }

    bfs实现
     let queue = this.map.start;

        while (queue.length) {
            let item = queue[0];
            if (isSearchOf(item)) {
                this.value = item
                return item
            } else {
                queue.shift()

                if (this.map[item] && this.map[item].length) {
                    queue = queue.concat(this.map[item])
                }
            }
        }
        return false
        function isSearchOf(name) {
            return !!(name[name.length - 1] === 'f')
        }

*/


// 图广度优先搜索
let data = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggym"],
    claire: ["tho", "jonny"],   
    anuj: ['yasd'],
    peggym: ['test'],
    thom: ['boolj'],
    jonny: ['we'],
}
let o1 = {
    value:start,
    children:[
        
    ]
}

function dfs(obj) {
    let array = obj.you

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

// 迪克斯特拉算法 权图 //https://juejin.cn/post/6844904151596400648
// let data2 = {
//     start: ["a", "b",],
//     a: 6,
//     b: 2,
// }
// console.log(data2.start);
// console.log(data2[data2.start[0]]);
// console.log(data2[data2.start[1]]);

// let array1 = [0, 60, 10, null, 50, null]

class Node {
    constructor(start, end, weight) {
        this.start = start
        this.end = end
        this.weight = weight
    }
}
class Graph {
    constructor() {
        this.array = [0]
        this.o = {

        }

    }
    addEdge(start, end, weight) {
        let node = new Node(start, end, weight)
        if (!this.o[start]) {
            this.o[start] = []
        }
        this.o[start].push(node)
    }
    log() {
        let array = this.o[1]
        while (array.length) {
            let item = array[0]
            if (item.start === 1) {
                this.array[item.end - 1] = item.weight
            } else {
                let value = item.weight + this.array[item.start - 1]
                if (!this.array[item.end - 1] || value < this.array[item.end - 1]) {
                    this.array[item.end - 1] = value
                }
            }
            let val = array.shift()
            if (val && val.end && this.o[val.end]) {
                array = array.concat(this.o[val.end])
            }
        }

        console.log(this.array);

    }
}
// let graph = new Graph()

// graph.addEdge(1, 2, 60);
// graph.addEdge(1, 3, 10);
// graph.addEdge(1, 5, 50);
// graph.addEdge(2, 4, 35);
// graph.addEdge(3, 4, 30);
// graph.addEdge(3, 5, 25);
// graph.addEdge(4, 6, 15);
// graph.addEdge(5, 2, 30);
// graph.addEdge(5, 6, 105);
// graph.log()

// 贪婪算法 广播台 //https://blog.csdn.net/qq_42739440/article/details/97009253
let set = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']
let stations = {
    kone: ["id", "nv", "ut"],
    ktwo: ["wa", "id", "mt"],
    kthree: ["or", "nv", "ca"],
    kfour: ["nv", "ut"],
    kfive: ["ca", "az"],
    haha: ['az', "or", "nv", "ca"]
}
let finaly_stations = [] // 最终
function bin(a, b) {
    return a.filter(function (v) { return b.indexOf(v) > -1 })
}
console.log(9,
    jiao([1, 2, 3], [2, 3]));

function jiao(a, b) {
    return a.filter(function (v) { return b.indexOf(v) > -1 })
}
function cha(a, b) {
    return a.filter(function (v) { return b.indexOf(v) == -1 })
}
function tanlan() {
    let i = 10;
    while (set && set.length) {
        let best_station = []
        let best_states_covered = []
        Object.keys(stations).forEach((item) => {
            coverd = jiao(stations[item], set)
            debugger
            if (coverd.length > best_states_covered.length) {
                best_station = item
                best_states_covered = coverd
                set = cha(set, coverd)

                finaly_stations.push(best_station)
            }
        })
    }
    console.log(finaly_stations);

}
tanlan()











