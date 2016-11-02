var homePage = (function () {

    return {
        run: function () {

            // define actions
            window.Action_AddToCat = new mFlux.MAction(__ActionType.Home.AddToCart);
            
            // register list actions
            var dispatcherPage = new mFlux.MDispatcher();
            dispatcherPage.registerAction(window.Action_AddToCat);
            window.DispatcherPage = dispatcherPage;
        }
    }
})();