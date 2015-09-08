/* 미티어 구동시 한번 호출되는 함수*/
Meteor.startup(function(){
    /* Rooms 컬렉션을 이용하여 방이 없을경우 */
    if(!Rooms.findOne({_id:"MeteorSchool"})) {

        var usr1 = Accounts.createUser({username:"와글이",email:"waggle@gmail.com",password:"12345678"});

        var usr2 = Accounts.createUser({username:"수다쟁이",email:"ppillip@gmail.com",password:"dnflemf"});

        Rooms.insert({
            _id : "MeteorSchool",
            name: "MeteorSchool",
            owner: usr1,
            userList : [usr1,usr2],
            createdAt : (new Date()).getTime()
        });

    }
});
