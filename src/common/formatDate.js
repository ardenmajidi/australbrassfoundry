


export default function formatDate(date) {
  const converToString=(d)=>
  {

    if(+d<10)
    d='0'+d
    return d
  }
  let yyyy=date.getFullYear() ;
  let mm=converToString(date.getMonth() + 1)
  let dd=converToString(date.getDate() )

  return (
    yyyy+'-'+mm+'-'+dd
  )
}
