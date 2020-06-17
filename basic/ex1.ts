
let list: number[] = [1,2,3,4,5,6,7,8,9,10];
//console.log(list);
var fun = [];
for (let i = 0; i<=list.length;i++){
    let y = i*i;
    fun.push(function(){
        document.write(y);
    })
}
fun.forEach(function(func){
    func()
});