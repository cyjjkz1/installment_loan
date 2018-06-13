define(function () {　
    // 初始化时间
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDate = now.getDate();
    var isEndDate = false;
    // 数据初始化
    function formatYear(nowYear) {
        var arr = [];
        var currentYear = nowYear - 1;
        if (nowMonth >= 6) {
          currentYear = nowYear;
        }

        for (var i = currentYear; i <= nowYear; i++) {
            if ((i == nowYear) &&
                 isEndDate) {
                arr.push({
                    id: 2099 + '',
                    value: '长期'
                });
            }else {
                arr.push({
                    id: i + '',
                    value: i + '年'
                });
            }
        }
        return arr;
    }

    function formatMonth(year) {
        var arr = [];
        if (year == '2099') {
            arr.push({
                id: '0' + '1',
                value: ''
            });
            return arr;
        }
        var startIdx = 1;
        var endidx = 12;
        if (nowMonth >= 6) {
          // 当前年已经到六月
          startIdx = nowMonth - 5;
          endidx = nowMonth;
        }else {
          // 当前年不足六月
          if (year == nowYear) {
            startIdx = 1;
            endidx = nowMonth;
          }else {
            startIdx = 12 - (5 - nowMonth);
            endidx = 12;
          }
        }
       for (var i = startIdx; i <= endidx; i++) {
         if (i < 10) {
            i = '0' + i;
         }
         arr.push({
            id: i + '',
            value: i + '月'
          });
       }
        return arr;
    }

    function formatDate(count) {

        var arr = [];
        if (count == 0) {
            arr.push({
                id: '0' + 1,
                value: ''
            });
            return arr;
        }
        for (var i = 1; i <= count; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            arr.push({
                id: i + '',
                value: i + '日'
            });
        }
        return arr;
    }
    var endYearData = function (callback) {
        isEndDate = true;
        setTimeout(function() {
            callback(formatYear(nowYear))
        }, 0)
    };
    var yearData = function(callback) {
        isEndDate = false;
        setTimeout(function() {
            callback(formatYear(nowYear))
        }, 0)
    };
    var monthData = function(year, callback) {
        setTimeout(function() {
            callback(formatMonth(year));
        }, 0);
    };
    var dateData = function(year, month, callback) {
        if (month.substr(0, 1) == '0') {
            month = month.substr(1, 1);
        }
        setTimeout(function() {
            if (/^3|5|7|8|10|12$/.test(month)) {
                callback(formatDate(31));
            } else if (/^4|6|9|11$/.test(month)) {
                callback(formatDate(30));
            } else if (/^1$/.test(month) && year != 2099) {
                callback(formatDate(31));
            } else if (/^2$/.test(month)) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    callback(formatDate(29));
                } else {
                    callback(formatDate(28));
                }
            } else {
                callback(formatDate(0));
                // throw new Error('month is illegal');
            }
        }, 0);
        // ajax请求可以这样写
        /*
        $.ajax({
            type: 'get',
            url: '/example',
            success: function(data) {
                callback(data);
            }
        });
        */
    };

    return {
        endYearData: endYearData,
        yearData: yearData,
        monthData: monthData,
        dateData: dateData,
        nowYear: nowYear,
        nowMonth: nowMonth,
        nowDate: nowDate
    };
});
