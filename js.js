$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://mysafeinfo.com/api/data?list=englishmonarchs&format=xml",
        dataType: "xml",
        success: function (result) {
            $(result).find("e").each(function () {
                $("#presidents").append($("<option />").val($(this).attr("cty")).text($(this).attr("nm")));
            });
        }
    });
});
