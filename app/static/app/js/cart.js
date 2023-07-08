var updateBtns = document.getElementsByClassName('update-cart')
for(i=0;i<updateBtns.length;i++)
{
    updateBtns[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('productID',productID,'action',action)
        console.log('user ',user)
        if(user === "AnonymousUser")
        {
           console.log('not login')
        }
        else
        {
            updateUserOrder(productID,action)
        }
    })   
}

function updateUserOrder(productID,action)
{
    console.log('user login')
    var url ='/update_item/'
    fetch(url,{
            method :'POST',
            headers : {
                'Content-Type' : 'application/json',
                'X-CSRFToken' : csrftoken},
            body : JSON.stringify({'productID' : productID, 'action' : action})
        })
    .then((reponse)=> {
       return reponse.json()
    })
    .then((data)=> {
        console.log('data', data)
    })
    location.reload()
}