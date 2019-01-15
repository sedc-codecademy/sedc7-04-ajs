$(function () {

    var tableBody = $('#github tbody');

    function createRow(data) {
        for (i = 0; i < data.length; i++) {
            let row = `<tr>
           <td><button class="cnBtn" id="${data[i].name}">${data[i].name}</button></td>
           <td>${data[i].alpha2Code}</td>
           <td>${data[i].region}</td>
           </tr>`
            tableBody.append(row);

        }
        $('.cnBtn').on('click', (e) => {
            console.log(e.target.id);

            getCountryDetails(e.target.id);
        });
    }
    function getCountryDetails(name) {

    }
    initData();
    function initData() {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/region/Europe',
            type: 'GET',
            crossDomain: 'true',
            success: function (data) {
                //   what to happen when success
                console.log("uspesno imame data", data);
                createRow(data);
            },
            error: function (e) {
                //   called when there is an error
                console.log("problemi");
            }
        });
    }
});