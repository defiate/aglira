export class Utils {
    static loaders = {
        hideFullLoader: () => {
            const elem = document.getElementById('fullLoader');
            if (elem) {
                elem.remove();
            }
        },
    }

    static sortByKey(array: Array<any>, key: string, reverse: Boolean) {
        let newArray = [];
        newArray = array.sort((a, b) => {
            const x = a[key];
            const y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        if (reverse) {
            return newArray.reverse();
        } else {
            return newArray;
        }
    }
}