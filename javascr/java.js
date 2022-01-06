
$(document).ready(function () {
    $("#all").click(function () {
        $(".sh").hide();
    })
    $("#boy").click(function () {
        $("#man").hide();
    })
    $("#child").click(function () {
        $(".child").hide();
    })
    $("#girl").click(function () {
      $(".woman").hide();
  })
    $("#show").click(function () {
        $(".sh").show();
    })

    $(".h1").click(function () {
        $(this).hide();
    })
})
