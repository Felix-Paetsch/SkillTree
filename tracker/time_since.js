import Tracker from "./base_tracker";

export default class TimeSinceTracker extends Tracker{
    constructor(name){
        super(name, Date.now());
        this.record = {
            ms_difference: 0,
            days: 0,
            hours: 0,
            minutes: 0
        };
    }

    time_since(){
        return getTimeDifference(this.value, Date.now())
    }

    get_record(){
        return this.evaluate_current_record();
    }

    get_start_date(){
        return new Date(this.value);
    }

    evaluate_current_record(){
        if (this.record.ms_difference < Date.now() - this.value){
            this.record = getTimeDifference(this.value, Date.now())
        }
        return this.record;
    }

    reset(){
        this.compute_current_record();
        this.value = Date.now();
        return 0;
    }
}

function getTimeDifference(startTimestamp, endTimestamp) {
    const difference = endTimestamp - startTimestamp;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerMinute = 60 * 1000;

    const days = Math.floor(difference / millisecondsPerDay);
    const hours = Math.floor((difference % millisecondsPerDay) / millisecondsPerHour);
    const minutes = Math.floor((difference % millisecondsPerHour) / millisecondsPerMinute);

    return {
        ms_difference: difference,
        days,
        hours,
        minutes
    };
}