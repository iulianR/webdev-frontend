function firstHideAllVisualStatesThenShowTopSection()
{
  $(".visualstate").hide();
  $("#upabove").fadeIn();
}
function firstHideAllVisualStatesThenShowPageContent()
{
  $(".visualstate").hide();
  $("#inthecenter").fadeIn(2000);
}
function firstHideAllVisualStatesThenShowBottomSection()
{
  $(".visualstate").hide();
  $("#downbelow").fadeIn(2000);
}
function firstHideAllVisualStatesThenShowLinkToPopup()
{
  $(".visualstate").hide();
  $("#linkthatshowspopup").fadeIn(2000);
}
function showAllVisualStates()
{
  $(".visualstate").show();
}
function showAlertPopup()
{
  alert("JavaScript executed successfully");
}
$("#buttonthatdisplaystheupabovediv").click( firstHideAllVisualStatesThenShowTopSection );
$("#buttonthatdisplaysthecentraldiv").click( firstHideAllVisualStatesThenShowPageContent );
$("#buttonthatdisplaysthedownbelowdiv").click( firstHideAllVisualStatesThenShowBottomSection );
$("#buttonthatdisplaysthelinktopopupdiv").click( firstHideAllVisualStatesThenShowLinkToPopup );
$("#buttonthatdisplayseverything").click( showAllVisualStates );
$("#actualhyperlink").click( function(e) { e.preventDefault(); showAlertPopup(); } );
