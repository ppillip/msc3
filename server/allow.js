Rooms.allow({
    insert: function (userId, doc) {
        return (userId && doc.owner === userId);
    }
});
