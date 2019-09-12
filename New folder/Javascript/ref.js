mobiscroll.settings = {
    theme: 'ios'
};

var now = new Date(),
    oneWay = false,
    range,
    departureDate,
    returnDate;

range = mobiscroll.range('.md-leaving-date', {
    endInput: '.md-return-date',
    min: now,
    defaultValue: null,
    showSelector: false,
    onSetDate: function (event, inst) {
        if (oneWay && event.control == 'calendar' && event.active == 'start') {
            inst._isVisible = false;
            inst.setActiveDate('start');
            inst._isVisible = true;
        }
        if (inst._markup) {
            inst._isValid = true;
            inst._markup.find('.mbsc-fr-btn-s .mbsc-fr-btn').removeClass('mbsc-fr-btn-d' + (oneWay ? ' mbsc-disabled' : ''));
        }
    },
    onBeforeClose: function () {
        if (oneWay) {
            return true;
        }
    },
    onSet: function (event, inst) {
        var values = inst.getVal();
        departureDate = values[0];
        if (!oneWay) {
            returnDate = values[1];
        }
    }
});

mobiscroll.select('.md-place-select', {
    multiline: 2,
    height: 50,
    data: {
        url: 'https://trial.mobiscroll.com/airports/',
        remoteFilter: true,
        dataType: 'jsonp',
        processResponse: function (data) {
            var i,
                item,
                ret = [];

            if (data) {
                for (i = 0; i < data.length; i++) {
                    item = data[i];
                    ret.push({
                        value: item.code,
                        text: item.name,
                        html: '<div style="font-size:16px;line-height:18px;">' + item.name + '</div><div style="font-size:10px;line-height:12px;">' + item.location + ', ' + item.code + '</div>'
                    });
                }
            }

            return ret;
        }
    },
    filter: true,
    placeholder: 'Please select a city'
});

document.querySelectorAll('.md-flight-type').forEach(function (elm) {
    elm.addEventListener('change', function () {
        oneWay = this.value == 'oneway';

        document.querySelector('.md-return-date').disabled = oneWay;
        if (oneWay) {
            range.setVal([departureDate, null], true);
            range.option({ defaultValue: [departureDate] });
        } else {
            returnDate = new Date(departureDate.getFullYear(), departureDate.getMonth(), departureDate.getDate() + 4);
            range.setVal([departureDate, returnDate], true);
        }
    });
});

departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
range.setVal([departureDate, returnDate], true);