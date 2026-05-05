const grandparent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing
child.addEventListener('click',(event)=>{
    console.log('child clicked');
    
    // ye event.stopPropagation(); ye ab apne se aage walo ke liye nhi jaayega

    // event.stopPropagation();
    // console.log(event.target);
},false)

parent.addEventListener('click',(event)=>{
    console.log('Parent clicked');

    // ab isme event.stopPropagation(); lga hai toh iss parent wale se aage mera event propagate(bubble,capture) nhi hoga

    // event.stopPropagation();
    // console.log(event.target); 
},false)

grandparent.addEventListener('click',(event)=>{
    console.log('grandparent clicked');
    // console.log(event.target);
},false)
// addEventListener has 3 properties:  addEventListener(first_event(click,mouseover etc.) , call back function , capture)
// by default hmara event bubbling hi chalta hai aur agar event capturing wala chalana hai to capture ki place pr true de dunga

// ab iska benefit hai event delegation