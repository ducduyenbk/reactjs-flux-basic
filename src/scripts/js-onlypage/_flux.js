// StoreCommon = window
// List Actions
// List Views
// Dispatcher = list (Action, View)
var mFlux;
(function (mFlux) {

    var MAction = (function () {
        function MAction() {
            this._type = 0;
            this._param = null;
            this._listView = new Array();
        }

        function MAction(type) {
            this._type = type;
            this._param = null;
            this._listView = new Array();
        }

        //Info action
        MAction.prototype.getType = function () {
            return this._type;
        };
        MAction.prototype.setType = function (value) {
            this._type = value;
        };
        MAction.prototype.getParam = function () {
            return this._param;
        };
        MAction.prototype.setParam = function (value) {
            this._param = value;
        };
        MAction.prototype.setAction = function (type, param) {
            this._type = type;
            this._param = param;
        };

        //Info list views
        MAction.prototype.registerView = function (view) {

            this._listView.push(view);
        };
        MAction.prototype.unRegisterView = function (view) {
            for (var i = this._listView.length - 1; i >= 0; --i) {
                if (this._listView[i] === view) {
                    this._listView.splice(i, 1);
                }
            }
        };

        //Notify to list views
        MAction.prototype.NotifyToListViews = function (action) {
            var _this = this;
            if (_this._type === action.getType()) {
                _this._param = action.getParam();
                //Notify changed list views
                _this._listView.forEach(function (item) {
                    item.actionChanged(_this);
                });
            }
        };
        return MAction;
    }());
    mFlux.MAction = MAction;

    var MDispatcher = (function () {
        function MDispatcher() {
            this._listAction = new Array();
        }
        MDispatcher.prototype.registerAction = function (action) {
            this._listAction.push(action);
        };
        MDispatcher.prototype.dispatchAction = function (action) {
            this._listAction.forEach(function (item) {
                item.NotifyToListViews(action);
            });
        };
        return MDispatcher;
    }());
    mFlux.MDispatcher = MDispatcher;

})(mFlux || (mFlux = {}));
