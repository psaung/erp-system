(function($){
	$.fn.create_table=function (option){
		var date = new Date();
		if(option=="date"){
			var result = new Date(getDate());
			var pre = getDate().getMonth();
			var num_of_date = $('.selected').parents('.cal_dates_row').index();
			result.setDate(num_of_date);
			return(result.getDate()+"-"+(result.getMonth()+1)+"-"+result.getFullYear());		 
		}
		else{
			var setting = $.extend(
			{
				day: "long",
				size: ""
			}
			,$.fn.create_table.default,option);
			
			if(setting.date){
				date = setting.date;
				date.setMonth(date.getMonth()-1);
			}
			var day_type 	= setting.day;
			var size  		= setting.size;
			var container 	= $(this);	
			var selected 	= new Date().getDate();
			var position 	= 0;
			var w_height 	= $(window).height();
			var buffer 		= null;

			container.css(
			{
				'width' : size,
				'z-index': 9
			});
			function create_header(){
				var cal_header = $("<div>", {class: "cal_header"});
				var cal_header_content = $("<div>",{class:"cal_header_content"});
				var header_content = $("<div>",{class:"header_content"});
				var cal_header_month = $("<div>",{class:"cal_header_month header_content_position"});
				var cal_header_year = $("<div>",{class:"cal_header_year header_content_position"});
				var prev_button = $("<div>",{class:" prev_button button_size fa fa-reply"});
				var next_button = $("<div>",{class:" next_button button_size fa fa-mail-forward"});
			//header...........
			header_content.append(cal_header_month,cal_header_year);
			cal_header_content.append(header_content);
			cal_header.append(prev_button,next_button,cal_header_content);

			return cal_header;
		}

		function create_calendar(){

		}

		function create_calendar_title(){
			var cal_day= $("<div>",{class:"cal_day"});
			var cal_days = $("<div>",{class:"cal_days cal_days_position"});
			$.each(new Array(7),function(){
				cal_day.append(cal_days.clone(false));
			});

			return cal_day;
		}

		function create_calendar_content(){			
			var cal_date = $("<div>",{class:'cal_date'});
			var cal_dates_row = $('<div>',{class:'cal_dates_row'});
			var cal_dates = $("<div>",{class:'cal_dates'});
			var date_content = $("<div>",{class:'date_content'});
			var pos = new Array(7);			

			cal_dates.append(date_content.clone());
			
			$.each(pos,function(){
				cal_dates_row.append(cal_dates.clone());
			});

			$.each(pos,function(index){
				if(index==6){
					return false;
				}
				else{
					cal_date.append(cal_dates_row.clone());
				}
			});

			return cal_date;
		}

		function fill_cal_title(){
			var days;
			if(day_type=="short")
			{
				days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
			}
			else if(day_type=="long"){
				days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			}
			
			$('.cal_days').each(function(index){
				$(this).text(days[index]);
			});
		}

		function initialize(){			
			var cal= $("<div>", {class: "cal"});
			var current_month= $("<div>",{class:"current_month month_width month_position"});
			var cal_content= $("<div>",{class:"cal_content"});

			//create month's div
			cal.append(current_month);

			//create calendar's tilte and content
			cal_content.append(create_calendar_title(),create_calendar_content());	

			//append calendar to calendar's div	
			current_month.append(cal_content);

			//container...............
			container.append(create_header(),cal);

			//fill calendar title (Sunday ,Monday, ...)
			fill_cal_title();

		}

		function create_year(){
			//get header
			var year_container = $('<div>',{class:'year_container'});
			var year_row = $('<div>',{class:'year_row'});
			var years = $('<div>',{class:'years'});

			$.each(new Array(4),function(){
				year_row.append(years.clone());
			});

			$.each(new Array(3),function(){
				year_container.append(year_row.clone());
			});

			return year_container;
		}

		initialize();

		$(document).ready(function(){
			operate_2(getDate());		
			do_click(getDate());
		});

		function clear(){
			container.html('');
		}

		function year_title_content(got_year){

			//check year not to be beyond 2100 yrs
			if(got_year>2089){
				got_year = 2089;
			} 

			// append years to year div
			$('.years').each(function(index){
				$(this).text(got_year+index);
			});

			//append gap year in header
			$('.header_content').html(got_year+" - "+(got_year+11));

			//set current year to operation date
			getDate().setYear(got_year);
		}

		function month_title_content(got_year){

			//append month name to month div
			$('.months').each(function(index){
				$(this).text(GetMonthName(index+1));
			});
			//append current year to header
			$('.header_content').html(got_year);
		}

		function create_month(){
			
			var month_container = $('<div>',{class:'month_container'});
			var month_row = $('<div>',{class:'month_row'});
			var months = $('<div>',{class:'months'});

			//create row with month div
			$.each(new Array(4),function(){
				month_row.append(months.clone());
			});

			//create month container with month row
			$.each(new Array(3),function(){
				month_container.append(month_row.clone());
			});

			return month_container;
		}


		function month_operate(got_year){

			clear();
			
			var month_buffer = got_year;
			var header = create_header();
			var created_month = create_month();
			
			container.append(header,created_month);
			
			month_title_content(month_buffer);	

			$('.prev_button').click(function(){
				var month_buffer = getDate().getFullYear();
				month_buffer = month_buffer-1;
				if(month_buffer<1900){
					month_buffer = 1900;
				}
				month_title_content(month_buffer);
				getDate().setYear(month_buffer);
			});

			$('.next_button').click(function(){
				var month_buffer = getDate().getFullYear();
				month_buffer = month_buffer+1;
				if(month_buffer>2900){
					month_buffer = 2900;
				}
				month_title_content(month_buffer);
				getDate().setYear(month_buffer);
			});

			$('.header_content').click(function(){
				clear();
				var year_to_operate,month_to_operate;
				var header = create_header();
				var created_year = create_year();

				container.append(header,created_year);

				var got_year = getDate().getFullYear();//parseInt($(this).text());
				year_title_content(got_year);	

				$('.prev_button').click(function(){
					var got_year = getDate().getFullYear()-12;//parseInt($('.header_content').text().split(' '))-12;
					if(got_year<1900){
						got_year = 1900;
					}
					year_title_content(got_year);
					getDate().setYear(got_year);
				});

				$('.next_button').click(function(){
					var got_year = getDate().getFullYear()+12;//parseInt($('.header_content').text().split(' '))+12;
					if(got_year>2089){
						got_year = 2089;
					}
					year_title_content(got_year);
					getDate().setYear(got_year);
				});

				$('.years').click(function(){
					year_to_operate = getDate().getFullYear()+$(this).parent('.year_row').index()*4+$(this).index();//parseInt($(this).text());
					month_operate(year_to_operate);
					getDate().setYear(year_to_operate);
				});

			});

			$('.months').click(function(){
				console.log('months');
				var months_buffer = getDate();
				year_to_operate = months_buffer.getFullYear();//parseInt($('.header_content').text());
				month_to_operate = $(this).parent('.month_row').index()*4+$(this).index()+1;
				var m_date = new Date();
				m_date.setDate(1);
				m_date.setMonth(month_to_operate-1);
				m_date.setYear(year_to_operate);
				clear();
				initialize();
				operate_2(m_date);
				do_click(getDate());
			});

			$('.header_content').addClass('cursor');
		}

		function GetMonthName(monthNumber) {
			var months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
			return months[monthNumber-1];
		}

		function parseMonth(month){
			return new Date(Date.parse(month +" 1, 2012")).getMonth();
		}

		function operate_2(operate_date){

			$('.cal_dates').removeClass('today prev_month_container next_month_container selected').find('.tag').remove();
			$('.date_content').removeClass('prev_month_text next_month_text' );
			$('.cal_header_month').text(GetMonthName(operate_date.getMonth()+1));
			$('.cal_header_year').text(operate_date.getFullYear());

			operate_date.setDate(1);
			var buffer= new Date(operate_date);
			var month = buffer.getMonth();
			var year = buffer.getFullYear();
			var day = buffer.getDay();

			var prev_month = new Date(buffer);
			prev_month.setDate(0);
			var prev_month_total = prev_month.getDate();

			var next_month = new Date(buffer);
			next_month.setMonth(next_month.getMonth()+1);
			next_month.setDate(0);
			var current_month_total=next_month.getDate();

			var is_next_month =false;
			var pre_day= prev_month_total - day+1;
			var increament = 1;
			$.each($('.current_month .cal_dates_row .cal_dates'),function(index,p_value){
				if(index>=day){	
					if(increament==(new Date()).getDate() && month==(new Date()).getMonth() && year==(new Date()).getFullYear() && !is_next_month){
						$(this).addClass('today');
						var tag = $('<div>',{class:"tag leave"});
						var tag2= $('<div>',{class:"tag morning_leave"});
						var tag3 = $('<div>',{class:"tag evening_leave"});

						tag.text('Chan Myae San Hlaing');
						tag2.text('Sis Min Maw');
						tag3.text('Aung Thet Win');
				//$(this).append(tag,tag2,tag3);
			}
			if(increament==getSelected() && !is_next_month){
				$(this).addClass('selected');	
			}
			if(is_next_month){
				$(this).find('.date_content').addClass('next_month_text').end().addClass('next_month_container');
			}
			$(this).find('.date_content').text(increament);
			increament= increament+1;
		}
		else{
			$(this).find('.date_content').text(pre_day).addClass('prev_month_text').end().addClass('prev_month_container');
			pre_day = pre_day+1;
		}

		if(increament>current_month_total){
			return (increament=1,is_next_month = true);
		}
	});

			setDate(operate_date);
			scrollPos();
		}

		function scrollPos(){
	/*setTimeout(function(){
		$(window).scrollTop($('.selected').offset().top-120);
	},500);*/
}


function getDate(){
	return date;
}

function setDate(setdate){
	date = setdate;
}

function getPosition(){
	return position;
}

function setPosition(pos){
	position = pos;
}

function getSelected(){
	return selected;
}

function setSelected(value){
	selected = value;
}

function do_click(d_date){
	$('.prev_button').click(function(){
		var prev_buffer = new Date(getDate());
		prev_buffer.setMonth(prev_buffer.getMonth()-1);
		setDate(prev_buffer);
		operate_2(getDate());
	});

	$('.next_button').click(function(){
		var next_buffer = new Date(getDate());
		next_buffer.setMonth(next_buffer.getMonth()+1);
		setDate(next_buffer);
		operate_2(getDate());
	});

	$('.cal_header_year').click(function(){
		clear();
		var year_to_operate,month_to_operate;
		var header = create_header();
		var created_year = create_year();
		var header_buffer = new Date(getDate());
		container.append(header,created_year);

		var got_year = header_buffer.getFullYear();
		year_title_content(got_year);	

		$('.prev_button').click(function(){
			var got_year = parseInt($('.header_content').text().split(' '))-12;
			if(got_year<1900){
				got_year = 1900;
			}
			year_title_content(got_year);
		});

		$('.next_button').click(function(){
			var got_year = parseInt($('.header_content').text().split(' '))+12;
			if(got_year>2089){
				got_year = 2089;
			}
			year_title_content(got_year);
		});

		$('.years').click(function(){  
			year_to_operate = getDate().getFullYear()+$(this).parent('.year_row').index()*4+$(this).index();//parseInt($(this).text());
			month_operate(year_to_operate);
			getDate().setYear(year_to_operate);
		});

	});
	$('.cal_header_month').click(function(){
		var got_year = getDate().getFullYear();
		month_operate(got_year);
		$('.header_content').addClass('cursor');
	});
	$('.cal_dates').click(function(){
		var result = new Date(getDate());
		result.setDate($(this).parent('.cal_dates_row').index()*7+$(this).index()-getDate().getDay()+1);
			//alert(result.getDate()+" - "+(result.getMonth()+1)+" - "+result.getFullYear());
			$('.cal_dates').removeClass('selected');
			$(this).addClass('selected');
			if($(this).hasClass('prev_month_container')){				
				// setSelected($(this).find('.date_content').text());
				// $('.prev_button').trigger('click');
				// scrollPos();	
				return false;
			}
			if($(this).hasClass('next_month_container')){
				// console.log($(this).find('.date_content').text());
				// setSelected($(this).find('.date_content').text());
				// $('.next_button').trigger('click');
				// scrollPos();	
				return false;		
			}
			//window.open("http://localhost:8000/"+result.getDate()+'/'+result.getMonth()+'/'+result.getFullYear());
			//location = "http://localhost:8000/"+result.getDate()+'/'+(result.getMonth()+1)+'/'+result.getFullYear();
		});

	$('.cal_dates').dblclick(function(){
		var obj = $(this);
		$('body').find('.overlay').remove();
		var overlay = $('<div>',{class:"overlay"});
		var close = $('<div>',{class:'close',style:'top:0px;right:0px;position:absolute'});
		var img = $('<img>',{src:'img/close.png',width:'15px',height:'15px'});
		close.append(img);
		overlay.bind('click',function(){
			$(this).remove();
			$('.overlay_content').remove();
			obj.html(buffer).css('background','');
		});
		var overlay_content = $('<div>',{class:"overlay_content"});
		overlay_content.bind('click',function(){
			//do function
		});
		close.bind('click',function(){
			$('.overlay').remove();
			$('.overlay_content').remove();
			obj.html(buffer).css('background','');
		});
		overlay_content.append(close,$(this).html());
		$('body').append(overlay,overlay_content);
		buffer = $(this).html();
		$(this).html('').css('background','#fff');
		show($(this).offset().top,$(this).offset().left);
	});

	function show(top,left){
		var height = $(window).height();
		var box_top = (height-300)/2;
		var box_left = ($(window).width()-350)/2;
		height = w_height>height ? w_height : height;
		var box_width= $('.cal_dates').width();
		var box_height= $('.cal_dates').height();
		overlay_content = $('.overlay_content');
		overlay_content.css({
			'width' : box_width,
			'height' : box_height,
			'position' : 'fixed',
			'top' : top-$(window).scrollTop(),
			'left' : left
		})
		.animate({
			'left' : left+1
		},100)
		.animate({
			'left' : left-1
		},100)
		.animate({
			'left' : left+1
		},100)
		.animate({
			'left' : left-1
		},100)
		.animate({
			'width' : 350,
			'height' : 300,
			'top' : box_top,
			'left' : box_left
		},800);
	}
}


$('input[type=button]').click(function(){
	var result = new Date(getDate());
	result.setDate($('.selected').parent('.cal_dates_row').index()*7+$('.selected').index()-getDate().getDay()+1);
	return (result.getDate()+" - "+(result.getMonth()+1)+" - "+result.getFullYear());
});

$(window).resize(function(){
	if($('body').find('.overlay')){
		$('.overlay_content').animate({
			'top' : ($(window).height()-300)/2,
			'left' : ($(window).width()-350)/2
		},500);
	}

	if(container.width()>700){
		adjustAll_2();
	}
	
});

function adjustAll(){
	$('.cal_dates,.cal_dates_row').css({
		'height' : $('.cal_dates').width()-8
	});
}

function adjustAll_2(){
	$('.cal_dates,.cal_dates_row').animate({
		'height' : $('.cal_dates').width()-8
	});
}

return this;
}
}


})(jQuery);