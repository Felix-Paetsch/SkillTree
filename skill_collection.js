export default class SkillCollection{
    constructor(skills = []){
        this.topic = null;
        this.skills = skills;
    }

    add_skill(sk){
        sk.set_topic(this.topic);
        this.skills.push(sk);
    }

    remove_skill(sk){
        const index = this.skills.indexOf(sk);
        if (index !== -1) {
            this.skills.splice(index, 1);
        }
    }

    set_topic(topic){
        this.topic = topic;
        this.skills.forEach(s => s.set_topic(topic));
    }
}