module.exports = function ProfileModel (user) {
    user = user || {};
    this.login = user.login;
    this.id = user.id;
    this.avatar_url = user.avatar_url;
    this.html_url = user.html_url;
    this.company = user.company;
    this.location = user.location;
    this.blog = user.blog;
    this.name = user.name;
    this.skills = user.skills;
};
