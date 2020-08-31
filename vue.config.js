module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        /* 定制主题 */
                        "primary-color": "#1DA57A",
                        "link-color": "#1DA57A",
                        "border-radius-base": "2px",
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}
