class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    private arr;
    private size;
    private capacity
    constructor(capacity: number) {
        this.size = 0;
        this.capacity = capacity
        this.arr = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
       return this.arr[i]
    } 

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
       if(this.getSize() === this.getCapacity()) {
        this.resize();
       }
       this.arr[this.getSize()] = n;
       this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if(this.getSize() > 0) {
            this.size--;
        }

        return this.arr[this.getSize()]
    }

    /**
     * @returns {void}
     */
    resize(): void {
       this.capacity *= 2;

        const newArr = new Array(this.getCapacity())
        for(let i = 0; i<= this.getSize(); i++) {
            newArr[i] = this.arr[i]
        }

        this.arr = newArr 
    }

    /**
     * @returns {number}
     */
    getSize(): number {
       return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
