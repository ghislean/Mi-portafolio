
$(".nav-link").click(function(e){
    let objetivo= $(this).attr('href')
    e.preventdefault()
    $("html.body").animate({
       scrollTop: $(objetivo).offset().top
    },5000)
 })
 //*tooltips
 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })