export default function bs_list(haystack: number[], needle: number): boolean {
    let firstIndex = 0;
    let Lastindex = haystack.length;

    while (firstIndex <= Lastindex) {
        let middleIndex = Math.floor((firstIndex + Lastindex) / 2);
        let v = haystack[middleIndex];

        if (needle == v) {
            return true;
        } else if (needle < v) {
            Lastindex = middleIndex - 1;
        } else {
            firstIndex = middleIndex + 1;
        }
    }

    return false;
}
