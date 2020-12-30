
class Search {
    constructor() {
        this.map = {}
        this.searched = {} //记录搜索过的值 
        /*
        使用对象来存储朋友关系
        类似这样
         map = {
            start: ["alice", "bob", "claire"],
            bob: ["anuj", "peggy"],
            alice: ["peggym"],
            claire: ["tho", "jonny"],   
            anuj: ['yasd'],
            peggym: ['test'],
            thom: ['boolj'],
            jonny: ['we'],
        }
        */
    }
    addNode(start, end) {
        // 把对象按照上面来构造，先赋值数组，在添加进去
        if (!this.map[start]) {
            this.map[start] = []
        }
        this.map[start].push(end)
    }
    bfs() {

        // 把map中start的数组进队
        let queue = this.map.start;

        // 遍历队列
        while (queue.length ) {

            // 队列中的第一个是否就是要找的人
            let node = queue[0];

            if (isSearchOf(node)) {
                // 找到了退出并返回值
                return node
            }

            if (!isSearchOf(node)) {


                // 出队的那位朋友还有其他朋友的，就添加进队
                if (this.map[node] && this.map[node].length) {
                    // 防止重复搜索  a-b-c-a
                    if (!this.searched[node]) {
                        queue = queue.concat(this.map[node])
                    }
                }
                // 没有找到，把刚才搜索的出队，并记录下来
                let val = queue.shift()
                this.searched[val] = true
            }


        }
        
        return false

        // 找出芒果商人
        function isSearchOf(name) {
            return !!(name[name.length - 1] === 'm')
        }

    }
}

let graph = new Search()
graph.addNode('start', 'alice')
graph.addNode('start', 'bob')
graph.addNode('start', 'claire')
graph.addNode('bob', 'anuj')
graph.addNode('bob', 'peggy')
graph.addNode('alice', 'peggy')
graph.addNode('claire', 'thom')
graph.addNode('claire', 'jonny')
console.log(graph.bfs())

