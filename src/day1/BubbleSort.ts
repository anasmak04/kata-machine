export default function bubble_sort(arr: number[]): void {
        
   let swapped;
   do{
    swapped = false
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[ i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[ i + 1] = temp;
            swapped = true;
        }
    }
   }while(swapped);

}