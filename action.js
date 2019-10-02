function leavingSite(link) {
    if(confirm('You are going to be leaving this site, is that ok?')) {
        window.location.href = link;
    }
}