function MigratePost(p) {
    p.depth = 0;
    p.children = [];

    var attachment = p.data.json_metadata.attachment;

    // transform ipfs --> url
    if (attachment && attachment.value && attachment.type == 'ipfs') {
        attachment.type = 'url';
        attachment.value = 'https://gateway.ipfs.io/ipfs/' + attachment.value;
    }

    // migration no longer required, this is mandatory as of 7/15
    /*if (p.createdAt < 1531434299) { // EOS Canada redeployed contract 7/12
        p.data.json_metadata.title = p.data.title; 
        p.data.poster = p.data.account;
        p.data.reply_to_poster = p.data.reply_to_account;
    }*/
}

export { MigratePost };