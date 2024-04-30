import Tracker from "./base_tracker";

export default class CounterTracker extends Tracker{
    constructor(name){
        super(name, 0);
        this.record = 0;
    }

    amt(){
        return this.value;
    }

    get_record(){
        return this.record;
    }

    reset(){
        this.value = 0;
        return 0;
    }

    decrement(){
        this.value --;
        return this.value;
    }

    increment(){
        this.value ++;
        this.record = Math.max(this.record, this.value);
        return this.value;
    }
}