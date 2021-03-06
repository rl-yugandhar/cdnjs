(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/vi', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.vi = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Xóa'
      },
      datepicker: {
        now: 'Hiện tại',
        today: 'Hôm nay',
        cancel: 'Hủy',
        clear: 'Xóa',
        confirm: 'OK',
        selectDate: 'Chọn ngày',
        selectTime: 'Chọn giờ',
        startDate: 'Ngày bắt đầu',
        startTime: 'Thời gian bắt đầu',
        endDate: 'Ngày kết thúc',
        endTime: 'Thời gian kết thúc',
        year: 'Năm',
        month1: 'Tháng 1',
        month2: 'Tháng 2',
        month3: 'Tháng 3',
        month4: 'Tháng 4',
        month5: 'Tháng 5',
        month6: 'Tháng 6',
        month7: 'Tháng 7',
        month8: 'Tháng 8',
        month9: 'Tháng 9',
        month10: 'Tháng 10',
        month11: 'Tháng 11',
        month12: 'Tháng 12',
        // week: 'week',
        weeks: {
          sun: 'CN',
          mon: 'T2',
          tue: 'T3',
          wed: 'T4',
          thu: 'T5',
          fri: 'T6',
          sat: 'T7'
        },
        months: {
          jan: 'Th.1',
          feb: 'Th.2',
          mar: 'Th.3',
          apr: 'Th.4',
          may: 'Th.5',
          jun: 'Th.6',
          jul: 'Th.7',
          aug: 'Th.8',
          sep: 'Th.9',
          oct: 'Th.10',
          nov: 'Th.11',
          dec: 'Th.12'
        }
      },
      select: {
        loading: 'Loading',
        noMatch: 'Dữ liệu không phù hợp',
        noData: 'Không tìm thấy dữ liệu',
        placeholder: 'Chọn'
      },
      cascader: {
        noMatch: 'Dữ liệu không phù hợp',
        loading: 'Loading',
        placeholder: 'Chọn'
      },
      pagination: {
        goto: 'Nhảy tới',
        pagesize: '/trang',
        total: 'Tổng {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Thông báo',
        confirm: 'OK',
        cancel: 'Hủy',
        error: 'Dữ liệu không hợp lệ'
      },
      upload: {
        delete: 'Xóa',
        preview: 'Xem trước',
        continue: 'Tiếp tục'
      },
      table: {
        emptyText: 'Không có dữ liệu',
        confirmFilter: 'Xác nhận',
        resetFilter: 'Làm mới',
        clearFilter: 'Xóa hết',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: 'Không có dữ liệu'
      },
      transfer: {
        noMatch: 'Dữ liệu không phù hợp',
        noData: 'Không tìm thấy dữ liệu',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});