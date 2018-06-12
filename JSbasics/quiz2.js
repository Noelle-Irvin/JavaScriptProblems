let colors = [
                {
                    colorName : "red",
                    r: 255,
                    b: 0,
                    g: 0
                },
                {  
                    colorName : "pink",
                    r: 255,
                    b: 182,
                    g: 192
                },
                {
                    colorName : "brown",
                    r: 210,
                    b: 105,
                    g: 30
                },
                {  
                    colorName : "cyan",
                    r: 0,
                    b: 255,
                    g: 255
                }
            ]

let newColors = colors.filter(function(element){
    if(element.b > 100 && element.g > 100){
        return element;
    }
})

console.log(newColors);