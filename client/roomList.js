Template.roomList.onCreated(function(){
    var self = this;
    self.roomListSub = self.subscribe("roomList");
});

Template.roomList.helpers({
    list : function(){
        return Rooms.find();
    }
});
