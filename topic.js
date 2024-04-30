
import EventEmitter from 'events';
import SkillTree from "./skilltree.js";

export default class Topic extends EventEmitter{
    constructor(name){
        super();

        this.name = name;
        this.skill_trees = [];
    }

    rename(name){
        this.name = name;
    }

    skilltree(name){
        const sk = new SkillTree(name);
        return this.add_skilltree(sk);
    }

    add_skilltree(sk){
        sk.set_topic(this);
        this.skill_trees.push(sk);
        return sk;
    }

    remove_skilltree(sk){
        const index = this.skill_trees.indexOf(sk);
        if (index !== -1) {
            this.skill_trees.splice(index, 1);
        }
    }
}