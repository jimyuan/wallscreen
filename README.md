# 大屏多维度数据展示

采用百度 [eCharts](http://echarts.baidu.com/) 作为主要图表制作、展示工具。

## Tips
建议安装使用 _cnpm_ 命令替代 nodejs 默认的包管理工具。
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## Build Setup

``` bash
# install dependencies
# 安装依赖（仅首次运行需执行）
cnpm install

# serve with hot reload at localhost:8080
# 默认在 8080 端口开启热加载 web server
cnpm start

# build for production with minification
# 编译成生成环境所需代码
cnpm run build

# build for production and view the bundle analyzer report
# 生成编译打包分析报告
cnpm run build --report
```
## Mockup
`/trade/other`
```json
{
  "respCode": "respCodemock",
  "memo": "memomock",
  "data": {
    "registerUsersCompanys": {
      "allUsersCount": "allUsersCountmock",
      "allCompanyCount": "allCompanyCountmock",
      "companysRecords": [
        {
          "month": "monthmock",
          "registerUsersCount": "registerUsersCountmock",
          "registerCompanyCount": "registerCompanyCountmock",
          "year": "yearmock"
        }
      ],
      "sourceTypeTotal": [
        {
          "registerSourceTypeCode": "registerSourceTypeCodemock",
          "registerSourceTypeName": "registerSourceTypeNamemock",
          "registerUsersCount": 81,
          "registerCompanyCount": 90
        }
      ],
      "companyTypeTotal": [
        {
          "registerCompanyTypeCode": "registerCompanyTypeCodemock",
          "registerCompanyTypeName": "registerCompanyTypeNamemock",
          "registerUsersCount": "registerUsersCountmock",
          "registerCompanyCount": "registerCompanyCountmock"
        }
      ]
    },
    "quotedAnalysis": {
      "allQuotedAmount": "allQuotedAmountmock",
      "allStatementsAmount": "allStatementsAmountmock",
      "allTradeAmount": "allTradeAmountmock",
      "quotedTradeRecords": [
        {
          "year": "yearmock",
          "month": "monthmock",
          "quotedAmount": 73,
          "tradeAmount": 2
        }
      ]
    },
    "tradeAnalysis": {
      "businessTypeRecords": [
        {
          "businessTypeCode": "businessTypeCodemock",
          "businessTypeName": "businessTypeNamemock",
          "tradeAmount": "tradeAmountmock"
        }
      ],
      "regionRecords": [
        {
          "regionCode": "regionCodemock",
          "regionName": "regionNamemock",
          "tradeAmount": "tradeAmountmock",
          "quotedAmount": "quotedAmountmock"
        }
      ],
      "tradeTypeRecords": [
        {
          "tradeTypeCode": "tradeTypeCodemock",
          "tradeTypeName": "tradeTypeNamemock",
          "tradeAmount": "tradeAmountmock"
        }
      ]
    }
  }
}
```
` /trade/getToday`
```json
{
  "respCode": "respCodemock",
  "memo": "memomock",
  "data": {
    "todayTradeAmount": 18,
    "allTradeAmount": 62,
    "todayTradeMoney": 71,
    "allTradeMoney": 29,
    "tradeRecords": [
      {
        "tradeTime": "tradeTimemock",
        "cityCode": "cityCodemock",
        "ctiyName": "ctiyNamemock",
        "productTypeCode": "productTypeCodemock",
        "productTypeName": "productTypeNamemock",
        "tradeAmount": 66,
        "tradeMoney": 37,
        "id": 36
      }
    ]
  }
}
```
