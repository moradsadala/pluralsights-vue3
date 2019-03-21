var app = new Vue({
    el:'#app',
    data:{
        
        name:'morad',
        newMemberName:'',
        newMemberAge:0,
        deletedItem:{
            name:'',
            age:0
        },
        currentUser:{
            name:'morad',
            age:24,
            jobTitle:'engineer',
            maritalStatus:'single',
        },
        pages : [
            { number:1 , url: '?pages=1'},
            { number:2 , url: '?pages=2'},
            { number:3 , url: '?pages=3'}
        ],
        users:[
            {
                name:'morad',
                age:24
            },
            {
                name:'mostafa',
                age:35
            },
            {
                name:'mego',
                age:9
            },
            {
                name:'body',
                age:3
            },
        ],
        // newUser:{
        //     name:this.newMemberName,
        //     age:this.newMemberAge

        // }
    
    },

    methods:{
        sortArray:function(){
            this.users.sort(function(a,b){
                return b.age - a.age;
            });
        },
        reverseArray:function(){
            this.users.reverse();
        },
        
        addMember(e){
            e.preventDefault();
            this.users.push({name:this.newMemberName,age:this.newMemberAge});
        },
        popMember(){
            this.deletedItem = this.users.pop();
        },
        insert(i){
            this.users.splice(i,0,{name:this.newMemberName,age:this.newMemberAge});
        },
        updateItem(k){
            Vue.set(this.users,k,{name:this.newMemberName,age:this.newMemberAge})
        }
    }
});