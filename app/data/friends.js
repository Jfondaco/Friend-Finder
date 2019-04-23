var friendsArr = [
    {
        name: "Joey F",
        photo: "",
        scores:[
        2,
        3,
        3,
        5,
        1,
        2,
        5,
        3,
        4,
        4
        ]
    },
    {
        name: "Alex",
        photo: "",
        scores:[
        2,
        3,
        3,
        5,
        1,
        2,
        5,
        3,
        4,
        4
        ]
    }
]

        // Directions:
        // With that done, compare the difference between current user's scores against-
        // those from other users, question by question. Add up the differences to calculate the totalDifference.

        //looked up compare function on stackoverflow and found something like this
        //need to run calcMatch to compare newArr to every existing object in friendsArr
        
        function calcMatch(friendsArr, newArr){
  
            if(!friendsArr  || !newArr) return
        
            let result;

            for(var j = 0; j<friendsArr.length; j++){
                friendsArr[j].forEach((e1,i)=>newArr.forEach(e2=>{
                
                    if(e1.length > 1 && e2.length){
                        result = calcMatch(e1,e2);
                    }else if(e1 !== e2 ){
                        result = false
                    }else{
                        result = true
                    }
                }))
            }
            //after friend check add newArr to existing friends
            friendsArr.push(newArr)
            console.log(result)
            }

//on click turn survey answers into new arr for comparison
$(document).ready(function(){
    $("#submit").on("click", function(){

        let newArr = []

        $(".chosen-select").each(function(){
        newArr.push($(this).val());
        })
        $("#name").val().trim().push(newArr.name)
        $("#photo").val().trim().push(newArr.photo)

        calcMatch(newArr)
    })
})



module.exports = friendsArr;

