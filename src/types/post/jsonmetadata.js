import { PostAttachment } from "./attachment";
import { PostReddit } from "./reddit";

class PostJsonMetadata {
    constructor(json) {
        json = Object.assign({  
            title: "",
            sub: "",
            parent_uuid: "",
            parent_poster: "",
            edit: false,
            attachment: null,
            reddit: null

        }, json);

        this.type = json.type;
        //if (this.type == "novusphere-forum") {

            this.title = json.title;
            this.sub = json.sub;
            this.parent_uuid = json.parent_uuid; // post replied to
            this.parent_poster = json.parent_poster; // person this post is a reply to
            this.edit = json.edit ? true : false;

            this.attachment = new PostAttachment(json.attachment);
            this.reddit = new PostReddit(json.reddit);
        //}
    }
}

export { PostJsonMetadata };