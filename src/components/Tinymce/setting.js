export const plugins = ['autosave help textpattern lineheight']

export const toolbar = 'fontselect styleselect fontsizeselect restoredraft undo redo | bold italic underline strikethrough subscript superscript removeformat forecolor backcolor lineheight align outdent indent help'

export const tinymcePatterns = [ // 快速排版
  { start: '*', end: '*', format: 'italic' },
  { start: '**', end: '**', format: 'bold' },
  { start: '#', format: 'h1' },
  { start: '##', format: 'h2' },
  { start: '###', format: 'h3' },
  { start: '####', format: 'h4' },
  { start: '#####', format: 'h5' },
  { start: '######', format: 'h6' },
  { start: '1. ', cmd: 'InsertOrderedList' },
  { start: '* ', cmd: 'InsertUnorderedList' },
  { start: '- ', cmd: 'InsertUnorderedList' }
]

export const tinymceFontSize = '12px 14px 16px 18px 20px 22px 24px 26px 36px 48px 56px'

export const tinymceFont = "微软雅黑='微软雅黑'; 宋体='宋体'; 黑体='黑体'; 仿宋='仿宋'; 楷体='楷体'; 隶书='隶书'; 幼圆='幼圆'; 方正舒体='方正舒体'; 方正姚体='方正姚体'; 等线='等线'; 华文彩云='华文彩云'; 华文仿宋='华文仿宋'; 华文行楷='华文行楷'; 华文楷体='华文楷体'; 华文隶书='华文隶书'; Andale Mono=andale mono,times; Arial=arial; Arial Black=arial black;avant garde; Book Antiqua=book antiqua;palatino; Comic Sans MS=comic sans ms; Courier New=courier new;courier; Georgia=georgia; Helvetica=helvetica; Impact=impact;chicago; Symbol=symbol; Tahoma=tahoma;arial; sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms; Verdana=verdana;geneva; Webdings=webdings; Wingdings=wingdings"
