// User Dropdown
$(function() {
	$("#userdd").on('click', function(event){
		$(this).toggleClass('open');
		event.stopPropagation();
	});
	$(document).click(function(event) {
		$('#userdd').removeClass('open');
	});
});

//Date Picker
$( function() {
    $(".datepicker").datepicker({
	  showOn:"button",
	  buttonImageOnly:false,
	  buttonImage:"ui/styles/images/svg/regular/calendar-alt.svg",
	  buttonText:"Calendar",
	  showAnim:"fade",
	});
	$(".datepickerdisabled").datepicker();
});

//Custom Select Dropdown
$(function(){
	$(".multiSelect").multipleSelect({
		placeholder:"Select Category",
		filter:true,
	});
	$(".cstmSlct").multipleSelect({
		single:true
	});
});
