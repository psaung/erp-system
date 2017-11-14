$currentPage = 1;
$pageSize = 3;
$maxPage = 0;
$dummy = {
	"obj1" : {
		"id" : 1,
		"username" : "aung aung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj2" : {
		"id" : 2,
		"username" : "maung maung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj3" : {
		"id" : 3,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj4" : {
		"id" : 4,
		"username" : "maung maung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj5" : {
		"id" : 5,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj6" : {
		"id" : 6,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj7" : {
		"id" : 7,
		"username" : "maung maung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj8" : {
		"id" : 8,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj9" : {
		"id" : 9,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj10" : {
		"id" : 10,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	},
	"obj11" : {
		"id" : 11,
		"username" : "saung saung",
		"salary1" : 3000,
		"salary2" : 3000,
		"salary3" : 3000,
		"action" : "action"
	}
};

var dummyArr = $.map($dummy,function(a){return a;});

$(document).ready(function(){
	$paginatedData = dummyArr.pagination($currentPage, $pageSize);
	$maxPage = $paginatedData.max;
	bindTable($('#table'), $paginatedData);
});

function bindTable($table, $data){
	$pagBar = paginationItem($data);

	$container = $table.find('tbody');
	//clear container
	$container.html('');

	$.each($data.list, function($i, $v){
		bindRow($container, $v).appendTo($container);
	});
	if($table.next('.pagination')){
		$('.pagination').remove();
	}
	$table.after($pagBar);
}

function bindRow($container, $jsonObj){
	$row = $('<tr>');
	$indexColumn = $('<th>');
	$column = $('<td>');

	return $row.append($indexColumn.text($jsonObj.id),
						$column.text($jsonObj.username),
						$column.clone().text($jsonObj.salary1),
						$column.clone().text($jsonObj.salary2),
						$column.clone().text($jsonObj.salary3),
						$column.clone().text($jsonObj.action));
}

function paginationItem($pagObj){
	$pagContainer = $('<nav aria-label="Page navigation example" class="pagination">');
	$pagList = $('<ul class="pagination">');
	$pagItem = $('<li class="page-item">');
	$pagContent = $('<a class="page-link" href="#">');
	$leftArrow = $('<a class="page-link" href="#" aria-label="Previous">'+
		'<span aria-hidden="true">&laquo;</span>'+
		'<span class="sr-only">Previous</span>'+
		'</a>');
	$rightArrow = $('<a class="page-link" href="#" aria-label="Next">'+
		'<span aria-hidden="true">&raquo;</span>'+
		'<span class="sr-only">Next</span>'+
		'</a>');

	$leftArrow.unbind('click');
	$leftArrow.bind('click',{event : 'event'}, leftClick);
	$rightArrow.unbind('click');
	$rightArrow.bind('click', {event : 'event'}, rightClick);
	$pagItem.unbind('click');
	$pagItem.bind('click', {event : 'event'}, numClick);

	$startItem = $pagObj.current<= 2 ? 1 : $pagObj.current-2;
	$pageCount = $pagObj.max >= 5 ? 5 : $pagObj.max;

	$pagContainer.append($pagList);
	$pagList.append($leftArrow);
	$.each(new Array($pageCount),function(i){
		if(i+$startItem <= $pagObj.max){
			if(i + $startItem == $pagObj.current){
				$pagList.append(
					$pagItem.clone(true).addClass('active').append(
						$pagContent.clone().text(i + $startItem)));
			}
			else{
				$pagList.append(
					$pagItem.clone(true).append(
						$pagContent.clone().text(i + $startItem)));
			}
		}
	});

	$pagList.append($rightArrow);
	return $pagContainer;
}

function leftClick(event){
	event.stopPropagation();
	$currentPage = $currentPage > 1 ? parseInt($currentPage) - 1 : $currentPage;
	bindTable($('#table'), dummyArr.pagination($currentPage, $pageSize));
}

function rightClick(event){
	event.stopPropagation();
	$currentPage = $maxPage > $currentPage ? parseInt($currentPage) + 1 : $currentPage;
	console.log($currentPage);
	bindTable($('#table'), dummyArr.pagination($currentPage, $pageSize));
}

function numClick(event){
	event.stopPropagation();
	$currentPage = event.target.text;
	bindTable($('#table'), dummyArr.pagination($currentPage, $pageSize));
}