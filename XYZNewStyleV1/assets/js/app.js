(function($){var $interval=setInterval(function(e){var $date=new Date("Augest 31, 2020 22:59:59");updateTimer($date);},1000);function updateTimer($date){var targetDate=$date;var remainingSeconds=(targetDate-new Date())/1000;var remainingTime={"days":remainingSeconds/(60*60*24),"hours":(remainingSeconds%(60*60*24))/(60*60),"minutes":(remainingSeconds%(60*60))/60,"seconds":remainingSeconds%60};if(targetDate<new Date()){stopInterval();for(var key in remainingTime){remainingTime[key]='00';}}
$('.days .number').text(addZeroIfNotDouble(Math.floor(remainingTime.days)));$('.hourst .number').text(addZeroIfNotDouble(Math.floor(remainingTime.hours)));$('.minutes .number').text(addZeroIfNotDouble(Math.floor(remainingTime.seconds)));$('.seconds .number').text(addZeroIfNotDouble(Math.floor(remainingTime.seconds)));}
function addZeroIfNotDouble(number){return(number<10)?'0'+number:number;}
function stopInterval(){clearInterval($interval);}
$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){var href=$(e.target).attr('href');var $curr=$(".process-model  a[href='"+href+"']").parent();$('.process-model li').removeClass();$curr.addClass("active");$curr.prevAll().addClass("visited");});$(window).scroll(function(){if($(this).scrollTop()>50){$('#top-header').addClass("smaller ");}
else{$('#top-header').removeClass("smaller ");}});$(document).ready(function(){$('.counterup').counterUp({delay:10,time:1000});$('#Testimonials').slick({dots:true,arrows:false,infinite:true,speed:500,fade:true,cssEase:'linear'});$('#Testimonials-ar').slick({dots:true,rtl:true,arrows:false,infinite:true,speed:500,fade:true,cssEase:'linear'});$('.menu-ico').click(function(){$('.menu-mobile').toggleClass("active");});$('#insideFalak').click(function(){$('#FalakNav').toggleClass("active");});$('#FalakTracks').click(function(){$('#AcceleratorNav').toggleClass("active");});$('.menu-popup .close').click(function(){$(this).parent().removeClass("active");});$('.mentor-card article').click(function(){$(this).parent().addClass("active");});$('.closePopup').click(function(){$('.mentor-card').removeClass("active");});$('.open-job').click(function(){$(this).parent().parent().toggleClass("active");});$(".open-job-modal").click(function(){var id=$(this).data('id');$("#ApplyForJob-"+id).addClass('active');});$('#chooseFile').bind('change',function(){var filename=$("#chooseFile").val();if(/^\s*$/.test(filename)){$(".file-upload").removeClass('active');$("#noFile").text("No file chosen...");}
else{$(".file-upload").addClass('active');$("#noFile").text(filename.replace("C:\\fakepath\\",""));}});});$('.submit-job').click(function(e){e.preventDefault();var ajaxurl=my_ajax_object.ajaxurl;var $form=$(this);var data=new FormData($form[0]);data.append('action','ApplyToJob')
jQuery.ajax({url:ajaxurl,type:'POST',dataType:'json',contentType:false,processData:false,data,success:function(data,textStatus,xhr){console.log(data);},error:function(xhr,textStatus,errorThrown){}});return false;});})(jQuery);(function($){$.fn.nodoubletapzoom=function(){$(this).bind('touchstart',function preventZoom(e){var t2=e.timeStamp,t1=$(this).data('lastTouch')||t2,dt=t2-t1,fingers=e.originalEvent.touches.length;$(this).data('lastTouch',t2);if(!dt||dt>500||fingers>1)return;e.preventDefault();$(this).trigger('click').trigger('click');});};})(jQuery);