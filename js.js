$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://rawgit.com/billy1816/prova1/master/json/json.json",
        dataType: "xml",
        success: function (result) {
            $(result).find("stateid").each(function () {
                $("#presidents").append($("<option />").text($(this).attr("statename")));
            });
        }
    });
});

