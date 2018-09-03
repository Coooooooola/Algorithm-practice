function quickSort(arr, start = 0, end = arr.length - 1) {
	if (start >= end) {
		return
	}
	const mid = parseInt((end + 1 - start) / 2) + start
	const pivot = arr[mid]
	arr[mid] = arr[end]
	arr[end] = pivot
	let stay = start
	for (let i = start; i < end; i++) {
		if (arr[i] < pivot) {
			if (arr[stay] > arr[i]) {
				const tp = arr[i]
				arr[i] = arr[stay]
				arr[stay] = tp
			}
			stay += 1
		}
	}
	arr[end] = arr[stay]
	arr[stay] = pivot
	quickSort(arr, start, stay - 1)
	quickSort(arr, stay + 1, end)
}

var arr = [5,7,3,49,6]
var arr = [4,6,2,1,6,8,4,3,6,8,65,3,13,56,56,2,3,65,23,67,2]
// var arr = new Array(100).fill(0).map((_, i) => -i)
quickSort(arr)