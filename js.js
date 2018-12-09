$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://cdn.jsdelivr.net/gh/billy1816/Examen-2018@master/xml/preguntas.xml",
        dataType: "xml",
        success: function (result) {
            $(result).find("question").each(function () {
                $("#presidents").append($("<option />").val($(this).attr("id")).text($(this).attr("title")));
            });
        }
    });
});
