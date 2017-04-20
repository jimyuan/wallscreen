export default {
  // 不同分辨率缩放比例
  view (data) {
    const rw = {
      sm: 640,
      md: 960,
      lg: 1280
    }
    // 正式环境 cur = rw.lg
    const cur = rw.md
    return data * cur / rw.lg
  },
  // 二维图表线框主色
  lineColor: '#00b6ca',
  // 二维图标背景渐变色-1
  oddColor: '#172b3a',
  // 二维图表背景渐变色-2
  evenColor: '#1c2e3b',
  // 挂牌量分析图表渐变色-1
  oddColor2: '#2f2f2e',
  // 挂牌量分析图表渐变色-2
  evenColor2: '#363636',
  // 饼图颜色序列
  colorArr: ['#0097c2', '#f7b52c', '#ca7c27', '#009844', '#8dc21f']
}
