var homePage = (function () {

    return {
        run: function () {
            // init dispatcher page
            var dispatcherPage = new mFlux.MDispatcher();

            // store menu top
            var storeMenuTop = new mFlux.MStore();
            storeMenuTop.actionType = __ActionType.Home.Add;
            window.Store_MenuTop = storeMenuTop;
            
            // register store
            dispatcherPage.registerStore(storeMenuTop);
            window.DispatcherPage = dispatcherPage;
        }
    }
})();