<script setup lang="ts">
    const info = withDefaults(defineProps<{
        left?:string, top?:string,  // CSS Position
        x?:number, y?:number,       // Relative Position in vw
        z?:number,                  // Circle Radius
        crop?:boolean,              // Crop if outside parent?
        fill?:string,
        damp?:number,               // Damping (between 0 and 1)
        lag?:number,                // Lagging from scrolling (between 0 and 1)
        inline?:boolean,
        speed?:number,              // Animation speedup (relative to 1)
        back?:boolean,              // Display back
    }>(), {
        left: '', top: '',
        x: 0, y: 0,
        z: 100,
        crop: false,
        fill: 'red',
        damp:0.1,
        lag:0.1,
        inline:false,
        speed:2,
        back:false,
    });
    let drag = ref<number[]>([-1,0,0,0,0,0,0,0]); // StartDragXY, StartScrollXY, PositionXY, VelocityXY
    let mouse:globalThis.Ref<number[]> = inject('mouse', ref([-1,-1,-1,-1,0,0])); // MouseXY, DraggedXY, ScrollXY
    function mousedown(event:MouseEvent) {
        drag.value[0] = event.clientX;
        drag.value[1] = event.clientY;
        drag.value[2] = mouse.value[4];
        drag.value[3] = mouse.value[5];
    }
    onMounted(animate);
    let time:number|null = null; // For animation
    function animate() {
        // Time Delta
        let tmp:number = Number(new Date());
        let dt:number = time == null ? 0 : info.speed*(tmp-time)/1000;
        time = tmp;
        if (dt > 1) {
            requestAnimationFrame(animate);
            return;
        }
        // Dragging
        if (drag.value[0] != -1) {
            drag.value[4] = mouse.value[0]-drag.value[0]+mouse.value[4]-drag.value[2];
            drag.value[5] = mouse.value[1]-drag.value[1]+mouse.value[5]-drag.value[3];
            drag.value[6] = 0;
            drag.value[7] = 0;
        }
        // Dropped off
        if (drag.value[0] != -1 && mouse.value[2] == -1) drag.value[0] = -1;
        // Scroll lagging
        if (drag.value[0] == -1) {
            drag.value[4] += (drag.value[2]-mouse.value[4])*info.lag;
            drag.value[5] += (drag.value[3]-mouse.value[5])*info.lag;
            drag.value[2] = mouse.value[4];
            drag.value[3] = mouse.value[5];
        }
        // Spring velocity
        if (drag.value[0] == -1) {
            let a = Math.atan2(drag.value[5], drag.value[4]); // Angle
            let m = Math.hypot(drag.value[4], drag.value[5]); // Magnitude
            let d = Math.pow(info.damp, dt);                  // Damping
            drag.value[6] = (drag.value[6]-m*Math.cos(a))*d;
            drag.value[7] = (drag.value[7]-m*Math.sin(a))*d;
        }
        // Momentum
        if (drag.value[6] != 0 || drag.value[7] != 0) {
            drag.value[4] += drag.value[6]*dt;
            drag.value[5] += drag.value[7]*dt;
        }
        requestAnimationFrame(animate);
    }
</script>
<template>
    <div v-if="!inline" class="absolute left-0 top-0 w-full h-full pointer-events-none -z-1"
        :style="`overflow:${crop ? 'hidden' : 'visible'}`
        ">
        <div class="absolute inline-block rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-auto bg-cover bg-center bg-no-repeat"
            @mousedown="mousedown"
            :style="`
                ${{ 'red':'background-color:#EA4335',
                    'yellow':'background-color:#FBBC04',
                    'green':'background-color:#34A853',
                    'blue':'background-color:#4285F4'
                }[fill] || `background-image:url(${fill})`};
                width:${z}px;
                height:${z}px;
                ${left ? `left:calc(${left});` : ''}
                ${top ? `top:calc(${top});` : ''}
                transform: translate(
                    calc(-50% + ${drag[4]}px + ${info.x}vw),
                    calc(-50% + ${drag[5]}px + ${info.y}vw)
                );
                box-shadow: 0 0 10px #18181baa;
                ${drag[0] != -1 ? 'z-index:9999;' : ''}
            `"/>
    </div>
    <div v-if="inline" class="absolute inline-block rounded-full shadow -translate-x-1/2 -translate-y-1/2 pointer-events-auto -z-1 bg-cover bg-center bg-no-repeat"
        @mousedown="mousedown"
        :style="`
            ${{ 'red':'background-color:#EA4335',
                'yellow':'background-color:#FBBC04',
                'green':'background-color:#34A853',
                'blue':'background-color:#4285F4'
            }[fill] || `background-image:url(${fill})`};
            width:${z}px;
            height:${z}px;
            ${left ? `left:calc(${left});` : ''}
            ${top ? `top:calc(${top});` : ''}
            transform: translate(
                calc(-50% + ${drag[4]}px + ${info.x}vw),
                calc(-50% + ${drag[5]}px + ${info.y}vw)
            );
            box-shadow: 0 0 10px #18181baa;
            ${drag[0] != -1 ? 'z-index:9999;' : ''}
        `"/>
</template>