function logWrapper(target, name, descriptor) {
  console.log(arguments)
  let originRender = descriptor.value
  descriptor.value = function() {
    console.log('before render')
    originRender.bind(this)()
    console.log('after render')
  }
  console.log(target)
}

class App {
  constructor() {
    this.title = 'oylx'
  }
  // decoratorsBeforeExport: true
  @logWrapper
  render(){
    console.log('渲染页面:' + this.title);
  }
}


new App().render()
