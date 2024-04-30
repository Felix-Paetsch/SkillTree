export default class Tracker{
    constructor(name, initial_value = 0){
        this.name = name;
        this.value = initial_value;
        this.topic = null;
    }

    get_value(){
        return this.value;
    }

    set_value(value){
        this.value = value;
    }

    set_topic(topic){
        this.topic = topic;
    }
}