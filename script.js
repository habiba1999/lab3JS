//------------------------lab3 login---------------------------------------
function login()
{
    var cancel = false;
do{
    var username = prompt("Enter User name ");
    var password = prompt("Enter Password");

    if(username=="admin" && password=="421$$")
    {
        alert("Welcome Login success");
        cancel = false;
    }else if (username=="admin" && password!="421$$")
    {
        alert("uncorrect password");
        cancel= confirm("you want to enter password again? ");
    }else if (username!="admin" && password=="421$$")
    {
        alert("uncorrect username");
        cancel= confirm("you want to enter username again? ");
    }else
    {
        alert("username and password are not correct");
        cancel= confirm("you want to enter your data again? ");
    }
}while(cancel)
}

//-------------------------------lab3 calculator with bonus ----------------------------------------------



var oper = function(operation,numb1,numb2)
    {
        var res;
        switch(operation)
        {
            case 'sum':
                res =numb1+numb2;
                break;
            case 'multi':
                res = numb1*numb2;
                break;
            case 'subtract':
                res = numb1-numb2;
                break;
            case 'division':
                res = numb1/numb2;
                break;
            case 'moduls':
                res = numb1%numb2;
                break;
            default:
                alert("undefined math operation");
                break;
        }
        alert(`The result of equation is ${res}`);
        return res;
    }
function calc()
{
    var numb1 = Number(prompt("Enter First number"));
    var operation = prompt("Enter operation you want sum,multi,subtract,division,moduls");
    var numb2 = Number(prompt("Enter second number"));
    var res;
    res = oper(operation,numb1,numb2);
    
    do{
    var addOperation = confirm("do you want add another operation (ok/cancel)");
    console.log(addOperation);
    if(addOperation==true)
    {
        var numb = Number(prompt("Enter number"));
        operation = prompt("Enter operation you want sum,multi,subtract,division,moduls");
        res= oper(operation,res,numb);



    }else{
        addOperation=false;
    }
   }while(addOperation)
}


//-------------------------------part 2 user avg -----------------------

function userAvg()
{
    var count = Number(prompt("Enter number of numbers you want to add"));
    const userNumb = new Array();
    var num;
    var avg=0,sum=0;
    for(let i=0;i<count;i++)
    {
        num = Number(prompt("Enter number you want to add"));
        userNumb[i]=num;
    }
    for(var n of userNumb)
    {
        sum +=n;
    }
    avg=Number(sum/count);
    alert(`The sum of numbers ${sum} and ${avg} `);
}

//-----------------------------phonebook App-----------------------------

function phoneBook()
{
    var contacts=[];
    var stop = false;
    do{
        var operation = prompt("Enter operation you want to (add-search-stop)");
    
        if(operation =="add")
        {
            var newContent ={};
            newContent.name = prompt("Add name in phoneBook");
            newContent.phone = prompt("Add phone number in phoneBook");
            contacts.push(newContent);

        }else if (operation =="search")
        {
            var searchKeyword = prompt("enter name or phone");
            for(var i =0;i<contacts.length;i++){
                var currentContact = contacts[i];
                if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
                    alert("name : "+currentContact.name +" "+" phone : "+currentContact.phone);
                    break;
                }
            }

        }else if(operation =="stop"){
            stop = true;
            break;
        }
    }while(!stop)
}


//-----------------------------bonus in part2----------------------------

function bonusPart2()
{
    const PI = 3.14;
    var shape = prompt("Enter name of shape(circle-triangle-square-rectangle-Parallelogram-trapezium-Ellipse)");
    switch(shape)
    {
        case 'circle':
            let r =Number(prompt("Enter raduis of circle"));
            alert(`area of Circle is ${PI*r} `);
            break;
        case 'triangle':
            let b =Number(prompt("Enter base"));
            let h =Number(prompt("Enter height"));
            alert(`area of triangle is ${1/2*(b*h)} `);
            break;
        case 'square':
            let a =Number(prompt("Enter lenght of side"));
            alert(`area of square is ${a*a} `);
            break;
        case 'rectangle':
            let l =Number(prompt("Enter lenghth"));
            let w =Number(prompt("Enter width"));
            alert(`area of rectangle is ${l*w} `);
            break;
            
        case 'Parallelogram':
            let base =Number(prompt("Enter base"));
            let height =Number(prompt("Enter vertical height"));
            alert(`area of Parallelogram is ${base*height} `);
            break;
            
        case 'trapezium':
            let aTrap =Number(prompt("Enter lenght of side a"));
            let bTrap = Number(prompt("Enter lenght of side b"));
            let Theight =Number(prompt("Enter height"));
            alert(`area of trapezium is ${1/2*(aTrap*bTrap)*Theight} `);
            break;
        case 'Ellipse':
            let aMinor = Number(prompt("1/2 mainor axis"));
            let bMajor=Number(prompt("1/2 major axis"));
            alert(`area of Ellipse is ${PI*aMinor*bMajor} `);
            break;  
        default:
            alert("unCorrect Operation ");
            break;  
    }
}