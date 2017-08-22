// 前端适配

export default function () {
    return (function (refreshRem) {
        let tid = null
        window.addEventListener('resize', function () {
            clearTimeout(tid)
            tid = setTimeout(refreshRem, 300)
        }, false)
        refreshRem() // 初始化
    })(function () {
        const docEl = document.documentElement
        const BASE_WIDTH = 750
        const ROOT_FONT_SIZE = 100
        const width = docEl.getBoundingClientRect().width
        const rem = (width * 2 * ROOT_FONT_SIZE) / BASE_WIDTH
        docEl.style.fontSize = rem + 'px'
        window.REM = rem
    })
}
