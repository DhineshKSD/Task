mobiscroll.settings = {
    theme: 'ios',
    display: 'bubble'
};

var now = new Date();

mobiscroll.calendar('#demo-calendar-mobile', {
    onInit: function (event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-desktop', {
    touchUi: false,
    onInit: function (event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-header', {
    headerText: '{value}',
    onInit: function (event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-non-form', {
    onInit: function (event, inst) {
        inst.setVal(now, true);
    }
});

var instance = mobiscroll.calendar('#demo-calendar-external', {
    showOnTap: false,
    showOnFocus: false,
    onInit: function (event, inst) {
        inst.setVal(new Date(), true);
    }
});

document
    .getElementById('show-demo-calendar-external')
    .addEventListener('click', function () {
        instance.show();
    }, false);