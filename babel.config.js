module.exports = {
    presets: [["@vue/cli-plugin-babel/preset", { useBuiltIns: "entry", modules: "commonjs" }]],
    plugins: [["import", { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }]],
}
