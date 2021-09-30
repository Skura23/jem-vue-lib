// 导入组件，组件必须声明 name
import CarNumber from './src'

// 为组件提供 install 安装方法，供按需引入
CarNumber.install = function (Vue) {
  Vue.component(CarNumber.name, CarNumber)
}

// 导出组件
export default CarNumber