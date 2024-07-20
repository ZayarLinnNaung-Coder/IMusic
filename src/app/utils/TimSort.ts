export class TimSort {

    private sorter: string = ''

    getComparableValue(obj: any): string {
        if(this.sorter == 'name'){
            return obj.name
        } else if(this.sorter == 'title'){
            return obj.title
        }else {
            return obj.name
        }
    }

    insertionSort(array: any[], left: number, right: number) {
        for (let i = left + 1; i <= right; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= left && this.getComparableValue(array[j]) > this.getComparableValue(key)) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    merge(array: any[], left: number, mid: number, right: number) {
        let len1 = mid - left + 1;
        let len2 = right - mid;
        let leftArr = new Array(len1);
        let rightArr = new Array(len2);

        for (let i = 0; i < len1; i++) {
            leftArr[i] = array[left + i];
        }
        for (let i = 0; i < len2; i++) {
            rightArr[i] = array[mid + 1 + i];
        }

        let i = 0, j = 0, k = left;

        while (i < len1 && j < len2) {
            if (this.getComparableValue(leftArr[i]) <= this.getComparableValue(rightArr[j])) {
                array[k] = leftArr[i];
                i++;
            } else {
                array[k] = rightArr[j];
                j++;
            }
            k++;
        }

        while (i < len1) {
            array[k] = leftArr[i];
            i++;
            k++;
        }

        while (j < len2) {
            array[k] = rightArr[j];
            j++;
            k++;
        }
    }

    timsort(array: any[], sorter: string) {
        let minRun = 32;
        let n = array.length;

        // Sort individual subarrays of size minRun
        for (let i = 0; i < n; i += minRun) {
            this.insertionSort(array, i, Math.min((i + minRun - 1), (n - 1)));
        }

        // Start merging from size minRun (or 32). It will merge to form size 64, 128, 256 and so on...
        for (let size = minRun; size < n; size = 2 * size) {
            for (let left = 0; left < n; left += 2 * size) {
                let mid = left + size - 1;
                let right = Math.min((left + 2 * size - 1), (n - 1));

                // Merge subarray array[left.....mid] & array[mid+1....right]
                if (mid < right) {
                    this.merge(array, left, mid, right);
                }
            }
        }
    }
}
