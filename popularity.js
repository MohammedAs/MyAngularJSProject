/**
 * Created by asbanu on 6/15/2016.
 */


myApp.filter("popularity",function () {

    var max=0;
    return function (value,total) {
        console.log("in filter");
        total=parseInt(total);

        if(max<total) {
            max = total;
        }

        total= Math.round((5*total)/max);

       
            for(var i=0;i<total;i++)
            {
                value.push(i);
            }
        return value;

    }

})