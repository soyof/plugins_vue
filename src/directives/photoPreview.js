/* global $ */
import { LoadUtil, OtherUtil } from '@/utils'
import { STATIC_PATH } from '@/config'
import '@/../static/libs/fancybox/jquery.fancybox.min.css'

/* 预览图片指令 */

const handImgPreview = (el) => {
  el.addEventListener('click', (event) => {
    const target = event.target
    // data-preview="false"可以阻止预览
    if (target.nodeName.toLowerCase() !== 'img' || target.getAttribute('data-preview') === 'false') return

    const images = Array.prototype.slice.call(el.querySelectorAll('img'))
    const urls = images.map((ele) => {
      const src = ele.src || ele.getAttribute('data-src') // swiper will lazy load
      return { src: OtherUtil.replaceImgSize(src, '') }
    })
    const index = images.findIndex(ele => ele === target)

    // let hash = window.location.hash
    // window.location.hash = hash + (hash.indexOf('?') > -1 ? '&' : '?') + '_phoneview=1'

    $.fancybox.open(
      urls,
      {
        buttons: [
          'zoom',
          // "share",
          // 'slideShow',
          // "fullScreen",
          'download',
          'thumbs',
          'close'
        ],
        // arrows: false,
        // hash: '_phoneview', 暂时解决华为浏览器闪屏问题
        loop: false
      },
      index,
    )
  })
}

// 加载fancybox
const loadFancybox = () => new Promise((resolve) => {
  LoadUtil.loadJquery().then(() => {
    if ($.fancybox) {
      resolve()
    } else {
      LoadUtil.loadScript(`${STATIC_PATH}/libs/fancybox/jquery.fancybox.min.js`).then(() => {
        resolve()
      })
    }
  })
})

export default {
  install(Vue) {
    Vue.directive('photo-preview', {
      bind(el/* , name, value */) {
        loadFancybox().then(() => {
          handImgPreview(el)
        })
      }
    })
  }
}
