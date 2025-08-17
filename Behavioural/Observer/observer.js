var Channel = /** @class */ (function () {
    function Channel(title) {
        this.title = title;
        this.subsribers = [];
        this.latestVideo_title = '';
    }
    Channel.prototype.subsribe = function (subsriber) {
        // if(!this.subsribers.includes(subsriber)){
        this.subsribers.push(subsriber);
        // }
    };
    Channel.prototype.unsubscribe = function (subscriber) {
        this.subsribers = this.subsribers.filter(function (sub) { return sub !== subscriber; });
    };
    Channel.prototype.notifySubscribers = function () {
        for (var _i = 0, _a = this.subsribers; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.update();
        }
        console.log();
    };
    Channel.prototype.uploadVideo = function (title) {
        this.latestVideo_title = title;
        this.notifySubscribers();
    };
    Channel.prototype.getVideoData = function () {
        return "Checkout our latest video ".concat(this.latestVideo_title);
    };
    return Channel;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber(name, channel) {
        this.name = name;
        this.channel = channel;
    }
    Subscriber.prototype.update = function () {
        console.log("Hey ".concat(this.name, ", ").concat(this.channel.getVideoData()));
    };
    return Subscriber;
}());
var coding_channel = new Channel('coding');
var subscriber1 = new Subscriber('haseeb', coding_channel);
var subscriber2 = new Subscriber('ajmal', coding_channel);
var subscriber3 = new Subscriber('asghar', coding_channel);
coding_channel.subsribe(subscriber1);
coding_channel.subsribe(subscriber2);
coding_channel.subsribe(subscriber3);
coding_channel.uploadVideo('mern');
coding_channel.unsubscribe(subscriber2);
coding_channel.uploadVideo('jam');
