// 组合模式
// 层层嵌套的树状结构，整体由复合物-叶子两类元素组成。
// 复合物和叶子有相同的接口，不同的实现
class Container {
    constructor(id) {
        this.children = []
        this.element = document.createElement('div')
        this.element.id = id
        this.element.style.border = '1px solid black'
        this.element.style.margin = '10px'
        this.element.classList.add('container')
    }

    add(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
    }


    hide() {
        this.children.forEach(node => node.hide())
        this.element.style.display = 'none'
    }

    show() {
        this.children.forEach(node => node.show())
        this.element.style.display = ''
    }

    getElement() {
        return this.element
    }

}

class Text {
    constructor(text) {
        this.element = document.createElement('p')
        this.element.innerText = text
    }

    add() {}

    hide() {
        this.element.style.display = 'none'
    }

    show() {
        this.element.style.display = ''
    }

    getElement() {
        return this.element
    }
}

let header = new Container('header')
header.add(new Text('标题'))
header.add(new Text('logo'))

let main = new Container('main')
main.add(new Text('这是内容1'))
main.add(new Text('这是内容2'))

let page = new Container('page')
page.add(header)
page.add(main)
page.show()

header.hide()
main.hide()
document.body.appendChild(page.getElement())