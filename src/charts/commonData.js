// 不同分辨率缩放比例
function view (data) {
  const rw = {
    sm: 640,
    md: 960,
    lg: 1280
  }
  // 正式环境 cur = rw.lg
  const cur = rw.lg
  return data * cur / rw.lg
}

function gradient (len, oddColor, evenColor) {
  let colorArr = []
  for (let i = 1; i < len; i++) {
    colorArr.push({
      offset: i / len,
      color: i % 2 === 0 ? oddColor : evenColor
    }, {
      offset: i / len,
      color: i % 2 === 0 ? evenColor : oddColor
    })
  }
  return colorArr
}

export default {
  // 二维图表线框主色
  lineColor: '#00b6ca',
  // 定义斑马纹背景
  gradient,
  // 二维图标背景渐变色-1
  oddColor: '#172b3a',
  // 二维图表背景渐变色-2
  evenColor: '#1c2e3b',
  // 挂牌量分析图表渐变色-1
  oddColor2: '#2f2f2e',
  // 挂牌量分析图表渐变色-2
  evenColor2: '#363636',
  // 饼图颜色序
  colorArr: ['#e4713d', '#0990b8', '#f2c914', '#a36929', '#079044', '#8aba27'],
  // 环装图色序
  // ringColor: ['#8dbd1b', '#0096c1', '#f8b226', '#e74127'],
  ringColor: ['#e4713d', '#0990b8', '#f2c914', '#a36929'],
  // 全局文字样式
  textStyle: {
    fontFamily: 'Microsoft YaHei',
    color: '#fff',
    fontSize: view(16)
  },
  // legend之间间隔
  item28: view(28),
  item16: view(16),
  item10: view(10),
  // 折线图圆点大小
  symbol8: view(8),
  // 字体尺寸
  font13: view(13),
  // 折线图渐变背景
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0
  },
  // 大数类座标（万x）单文
  cashLabel: {
    formatter (value) {
      return (value / 10000).toFixed(2)
    }
  },
  // 月份类座标格式
  monthLabel: {
    formatter: '{value}月'
  }
}
