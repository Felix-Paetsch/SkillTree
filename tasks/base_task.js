export default class Task{
    constructor(name = null, descr = null){
        this.topic = null;
        this.name  = name;
        this.descr = descr;
    }

    set_topic(){
        this.topic = topic;
    }

    mark_completed(){
        this.topic.emit("task_completed", this);
    }

    copy(){
        return this;
    }
}