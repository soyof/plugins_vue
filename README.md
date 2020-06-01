# TinyMce使用

```shell
npm install @tinymce/tinymce-vue -S
npm install tinymce -S
```

在node_modules中找到tinymce, 将skin目录拷贝到项目public目录下(此方法用于配置主题等, 解决从服务)

> 初始化 `tinymce` 文本编辑器，确保 `selector` 唯一性
> 当 `selector` 选中同一个 `dom id` 时，`tinymce` 只 `init` 一次，
> 所以每次都动态改变 `selector` 所选中 `dom id` 即可