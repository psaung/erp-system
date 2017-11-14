
if(!Array.prototype.pagination) {
	Array.prototype.pagination = function pagination(idx,cnt) {

		//prepare array to return list , current  and max
		var arr = new Array(),current_index,max_index;

		//cnt must be zero based
		idx = idx-1;
		current_index = idx+1;
		max_index = Math.ceil(this.length/cnt);
		
		if(current_index > max_index){
			current_index = current_index-1;
			idx = idx-1;
		}
		var init_number = idx * cnt;
		var end_number = init_number + cnt;
		
		for(var i=0; i< this.length ; i++){
			if(i >= init_number && i < end_number) {
				arr.push(this[i]);
			}
		}

		var return_array = {
							"list" : arr,
							"max" : max_index,
							"current" : current_index,
							"next" : max_index > current_index ? (current_index+1) : 0,
							"previous" : current_index === 1 ? 0 : (current_index-1)
				};

		return return_array;
	}
}