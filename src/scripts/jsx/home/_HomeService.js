
//get data list address
function getDataListAddress() {
    let deferred = $.Deferred();
    $.ajax({
        url: "http://localhost:3110/AddressList/GetDataListAddress",
        type: "POST",
        dataType: "json",
        success: function (result) {
            deferred.resolve(result)
        },
        error: function (error) {
            deferred.reject(error)
        }
    });
    return deferred.promise();
}


module.exports = {
    getDataListAddress
}