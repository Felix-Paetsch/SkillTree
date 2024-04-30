import SkillCollection from "../skill_collection";

export default class Skill extends SkillCollection{
    // SkillCollection is for the follow up skills
    constructor(name = null, descr = null){
        this.name = name;
        this.descr = descr;
        this.topic = null;
        this.achieved = false;
    }

    set_topic(topic){
        this.topic = topic;
    }

    mark_achieved(){
        this.achieved = true;
        this.topic.emit("skill_achieved", this);
    }
}