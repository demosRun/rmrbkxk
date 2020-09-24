setTimeout(() => {
  getScale({
    // 设计宽度
    deviseW: 1920,
    // 设计高度
    deviseH: 1080,
    // 缩放中心 目前只支持 middle 和 top
    center: 'middle',
    // 是否是Y轴滚动模式
    scroll: false,
    // 可选 scale, scalePC, roll, rotate
    type: 'rotate',
    box: '.rotate-box'
  })
  getScale({
    // 设计宽度
    deviseW: 1920,
    // 设计高度
    deviseH: 1080,
    // 缩放中心 目前只支持 middle 和 top
    center: 'middle',
    // 是否是Y轴滚动模式
    scroll: false,
    // 可选 scale, scalePC, roll, rotate
    type: 'scale',
    box: '.scale-box'
  })
}, 100);