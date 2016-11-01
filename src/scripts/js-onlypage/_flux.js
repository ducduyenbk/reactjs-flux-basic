
var mFlux;
(function (mFlux) {

    var MAction = (function () {
        function MAction() {
            this._type = 0;
            this._param = null;
        }
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
        return MAction;
    }());
    mFlux.MAction = MAction;

    var MStore = (function () {
        function MStore() {
            this._listView = new Array();
            this.actionType = 0;
            this.actionParam = null;
        }

        MStore.prototype.registerView = function (view) {

            this._listView.push(view);
        };
        MStore.prototype.unRegisterView = function (view) {
            for (var i = this._listView.length - 1; i >= 0; --i) {
                if (this._listView[i] === view) {
                    this._listView.splice(i, 1);
                }
            }
        };
        MStore.prototype.notifyChange = function () {
            var _this = this;
            this._listView.forEach(function (item) {
                item.storeChanged(_this);
            });
        };
        MStore.prototype.onAction = function (action) {
            if (action.getType() === this.actionType) {
                this.actionParam = action.getParam();
                this.notifyChange();
            }
        };
        return MStore;
    }());
    mFlux.MStore = MStore;

    var MDispatcher = (function () {
        function MDispatcher() {
            this._listStore = new Array();
        }
        MDispatcher.prototype.registerStore = function (store) {
            this._listStore.push(store);
        };
        MDispatcher.prototype.dispatchAction = function (action) {
            this._listStore.forEach(function (store) {
                store.onAction(action);
            });
        };
        return MDispatcher;
    }());
    mFlux.MDispatcher = MDispatcher;

})(mFlux || (mFlux = {}));
