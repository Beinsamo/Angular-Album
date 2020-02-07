import {trigger, state, style, animate, transition} from '@angular/animations';

export function Mouseon(){
  return trigger("Mouseonoff",[
    state("mouseon",style({
      transform:"scale(1.05)"
    })
  ),
    state("mouseoff",style({
      width: "350px",
      height: "300px"
    })),
    transition("mouseon<=>mouseoff",[animate("0.2s")]),
  ]


  )
}
