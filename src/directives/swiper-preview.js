import SwiperPreviewComponent from '@/components/plugins/swiper-preview'
import { VueUtil, OtherUtil } from '@/utils'
/* 预览图片指令 */

let $vm

const handImgPreview = (Vue, el) => {
  el.addEventListener('click', (event) => {
    const target = event.target
    // data-preview="false"可以阻止预览
    if (target.nodeName.toLowerCase() !== 'img' || target.getAttribute('data-preview') === 'false') return

    const images = Array.prototype.slice.call(el.querySelectorAll('img'))
    if (images.length === 0) return
    const list = images.map((ele) => {
      const src = ele.src || ele.getAttribute('data-src') // swiper will lazy load
      return { src: OtherUtil.replaceImgSize(src, '') }
    })
    const index = images.findIndex(ele => ele === target)

    if (!$vm) {
      const Popup = Vue.extend(SwiperPreviewComponent)
      $vm = new Popup({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    VueUtil.mergeOptions($vm, {
      images: list,
      index
    })

    $vm.show()
  })
}

export default {
  install(Vue) {
    Vue.directive('photo-preview', {
      bind(el/* , name, value */) {
        handImgPreview(Vue, el)
      }
    })
  }
}
