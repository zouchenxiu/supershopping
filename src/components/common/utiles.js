export function debounce(func,delay){
    let timer = null;
    // 这里的...表示可以传多个参数
    return function(...args){
      if(timer) clearTimeout(() => {
        func.apply(this,args)
      },delay)
    }
    }

    export function formatDate(date){
      // console.log(date, date)
      let time = new Date(date)
      let y = time.getFullYear();
      let m = time.getMonth() + 1
      let d = time.getDate()
      let h = time.getHours()
      let mm = time.getMinutes()
      let s = time.getSeconds()
      console.log(y+'-'+m+'-'+d+''+h+':'+mm+':'+s, "y+'-'+m+'-'+d+''+h+':'+mm+':'+s")
      return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s
    }