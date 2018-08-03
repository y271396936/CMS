// dom的相关操作

function hasAttribute(ele, name, value) {
  let reg = new RegExp('(^|\\s)' + value + '(\\s|$)')
  return reg.test(ele.getAttribute(name))
}

/**
 * dom属性的添加、获取
 * @param ele dom元素
 * @param name 属性名
 * @param value 要添加的属性值
 * @returns {*}
 */
export function domAttribute(ele, name, value) {
  let tempStr, newAttr
  if (hasAttribute(ele, name, value)) return
  tempStr = ele.getAttribute(name) // 该ele元素不存在name属性时就返回null
  if (!tempStr && value) {
    ele.setAttribute(name, value)
    return
  }
  newAttr = tempStr.split(/\s+/g)
  if (value) {
    newAttr.push(value)
    ele.setAttribute(name, newAttr.join(' '))
  } else {
    return newAttr
  }
}

let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    moz: 'mozTransform',
    o: 'oTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

/**
 * js自动判断需要添加的前缀
 * @param style
 * @returns {*}
 */
export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

/**
 * 获取已滚动的那部分距离
 * @returns {{top: number, left: number}}
 */
export function scrollToEle() {
  return {
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  }
}

/**
 * 获取ele元素里面的第一个元素节点
 * @param ele
 * @returns {Element | (() => Node) | Node | SVGElementInstance | ActiveX.IXMLDOMNode}
 */
export function getFirstNode(ele) {
  return ele.firstElementChild || ele.firstChild
}

/**
 * 获取ele元素里面的最后一个元素节点
 * @param ele
 * @returns {Element | ActiveX.IXMLDOMNode | Node | SVGElementInstance | (() => Node)}
 */
export function getLastNode(ele) {
  return ele.lastElementChild || ele.lastChild
}

/**
 * 获取ele元素的下一个元素兄弟节点
 * @param ele
 * @returns {Element | null}
 */
export function getNextNode(ele) {
  return ele.nextElementSibling || ele.nextSibling
}

/**
 * 获取ele元素的上一个元素兄弟节点
 * @param ele
 * @returns {Element | null | Node | SVGElementInstance | (() => Node) | ActiveX.IXMLDOMNode}
 */
export function getPreviousNode(ele) {
  return ele.previousElementSibling || ele.previousSibling
}

/**
 * 给定元素和索引值查找 指定索引值的兄弟元素节点
 * @param ele
 * @param index
 * @returns {*|Node}
 */
export function getEleOfIndex(ele, index) {
  return ele.parentNode.children[index] || ele.parentNode.childNodes[index]
}

/**
 * 根据ele元素查找它的所有兄弟元素节点
 * @param ele
 * @returns {Array}
 */
export function getAllSiblings(ele) {
  var newArr = []
  var arr = ele.parentNode.children || ele.parentNode.childNodes
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== ele) {
      newArr[newArr.length] = arr[i]
      // newArr.push(arr[i])
    }
  }
  return newArr
}

/**
 * 兼容方式获取元素的行内、内嵌、外联的样式
 * @param ele
 * @param attr
 * @returns {*}
 */
export function getStyle(ele, attr) {
  if (window.getComputedStyle) {
    // W3C的标准浏览器
    return window.getComputedStyle(ele, null)[attr]
  }
  return ele.currentStyle[attr] // IE、Opera的
}
