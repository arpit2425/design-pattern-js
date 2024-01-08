class BubbleSort {
  sort(elements) {
    console.log('sorting elements using bubble sort');
  }
}
class QuickSort {
  sort(elements) {
    console.log('sorting elements using quick sort');
  }
}
class Sorting{
    sort(elements){
        let sortingAlgo;
        if(elements.length<=5){
            sortingAlgo=new BubbleSort();
        }
        else{
            sortingAlgo=new QuickSort();
        }
        sortingAlgo.sort(elements);
    }
}
let elements=[1,2,4,67,8];
let elements2=[1,2,4,67,8,1,2,4,67,8];
const sorting=new Sorting();
sorting.sort(elements);
sorting.sort(elements2);