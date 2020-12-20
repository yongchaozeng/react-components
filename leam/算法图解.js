
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
console.log(search(myList, 11));
// console.log(myList[search(myList, 5)]);
// log2 10 5

 // 内存可以理解为抽屉
 // 链表 增删快，访问慢  数组访问快 增删慢
 // 选择排序