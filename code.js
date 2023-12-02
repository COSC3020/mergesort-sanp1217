function mergesort(array) {
	let n = array.length;

	let passes, low, high, mid, i;

	//Will always have logn passes
	for (passes = 2; passes <= n; passes = passes * 2) {
		//Merge two elements at a time, then four, and so on..
		for (i = 0; i + passes - 1 < n; i = i + passes) {
			low = i;
			high = i + passes - 1;
			mid = Math.floor((low + high) / 2);

			merge(array, low, mid, high);
		}
	}

	//If list size is not a power of two, leftover elements have to be merged
	if (passes / 2 < n) {
		merge(array, 0, passes / 2 - 1, n - 1);
	}

	return array;
}

function merge(array, low, mid, high) {
	let i = low,
		j = mid + 1,
		k = low;
	let auxArray = [];

	//Compare elements
	while (i <= mid && j <= high) {
		if (array[i] < array[j]) {
			auxArray[k++] = array[i++];
		} else {
			auxArray[k++] = array[j++];
		}
	}

	//copy remaining elements
	for (; i <= mid; i++) {
		auxArray[k++] = array[i];
	}
	for (; j <= high; j++) {
		auxArray[k++] = array[j];
	}

	//transfer elements
	for (let i = low; i <= high; i++) {
		array[i] = auxArray[i];
	}
}
