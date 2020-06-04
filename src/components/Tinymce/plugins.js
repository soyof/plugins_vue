import tinymce from 'tinymce'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/help'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/media'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/table'
import 'tinymce/plugins/template'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/toc'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount'

tinymce.PluginManager.add('lineheight', function(editor, url) {
  const pluginName = '设置行高'
  const global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools')
  const lineheight_val = editor.getParam('lineheight_val', '1 1.5 1.6 1.75 1.8 2 3 4 5')

  editor.on('init', function() {
    editor.formatter.register({
      lineheight: {
        selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table',
        styles: { 'line-height': '%value' }
      }
    })
  })

  const doAct = function(value) {
    editor.formatter.apply('lineheight', { value: value })
    editor.fire('change', {})
  }

  editor.ui.registry.getAll().icons.lineheight || editor.ui.registry.addIcon('lineheight', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>')

  editor.ui.registry.addMenuButton('lineheight', {
    icon: 'lineheight',
    tooltip: pluginName,
    fetch: function(callback) {
      const dom = editor.dom
      const blocks = editor.selection.getSelectedBlocks()
      let lhv = 0
      global$1.each(blocks, function(block) {
        if (lhv === 0) {
          lhv = dom.getStyle(block, 'line-height') ? dom.getStyle(block, 'line-height') : 0
        }
      })

      const items = lineheight_val.split(' ').map(function(item) {
        const text = item
        const value = item
        return {
          type: 'togglemenuitem',
          text: text,
          active: lhv === value,
          onAction: function() {
            doAct(value)
          }
        }
      })
      callback(items)
    }
  })
})
tinymce.IconManager.add('blob', `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.903125,11.521875 C15.428125,10.975 15.75,10.2359375 15.75,9.4234375 L15.75,9.2640625 C15.75,7.5828125 14.3734375,6.21875 12.6765625,6.21875 L8.053125,6.21875 C7.8171875,6.21875 7.625,6.4109375 7.625,6.646875 L7.625,17.2578125 C7.625,17.5125 7.83125,17.71875 8.0859375,17.71875 L13.065625,17.71875 C14.89375,17.71875 16.375,16.246875 16.375,14.4296875 L16.375,14.2578125 C16.375,13.1171875 15.790625,12.1125 14.903125,11.521875 Z M9.125,7.71875 L12.6359375,7.71875 C13.528125,7.71875 14.25,8.4125 14.25,9.2703125 L14.25,9.41875 C14.25,10.275 13.5265625,10.9703125 12.6359375,10.9703125 L9.125,10.9703125 L9.125,7.71875 Z M14.853125,14.428125 C14.853125,15.4109375 14.0453125,16.2078125 13.0484375,16.2078125 L9.125,16.2078125 L9.125,12.4796875 L13.0484375,12.4796875 C14.0453125,12.4796875 14.853125,13.2765625 14.853125,14.259375 L14.853125,14.428125 Z" id="��״" fill="#666666"></path></svg>`)

export default tinymce
