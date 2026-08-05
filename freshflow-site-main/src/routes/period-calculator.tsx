import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import {
  addDays,
  format,
} from "date-fns";
import { motion } from "framer-motion";
import "react-day-picker/dist/style.css";


export const Route = createFileRoute(
  "/period-calculator"
)({
  component: PeriodCalculator,
});



function PeriodCalculator() {


const [lastPeriod,setLastPeriod] =
useState<Date | undefined>();

const [cycleLength,setCycleLength] =
useState(28);

const [periodDuration,setPeriodDuration] =
useState(5);


const [result,setResult] =
useState<any>(null);



const calculateCycle =()=>{


if(!lastPeriod) return;


if(
cycleLength < 21 ||
cycleLength > 45
){
alert("Cycle length should be between 21-45 days");
return;
}


if(
periodDuration < 2 ||
periodDuration > 10
){
alert("Period duration should be between 2-10 days");
return;
}



const nextPeriod =
addDays(
lastPeriod,
cycleLength
);



const periodEnd =
addDays(
lastPeriod,
periodDuration - 1
);



const ovulation =
addDays(
nextPeriod,
-14
);



const fertileStart =
addDays(
ovulation,
-5
);



const fertileEnd =
addDays(
ovulation,
1
);



const periodDays =
Array.from(
{
length:periodDuration
},
(_,i)=>
addDays(lastPeriod,i)
);



const fertileDays =
Array.from(
{
length:7
},
(_,i)=>
addDays(fertileStart,i)
);



setResult({

nextPeriod,
periodEnd,
ovulation,
fertileStart,
fertileEnd,
periodDays,
fertileDays

});


};




return (

<div className="
min-h-screen
bg-gradient-to-br
from-pink-50
via-white
to-blue-50
dark:from-gray-950
dark:via-gray-900
dark:to-black
py-20
px-5
">


{/* HERO */}

<motion.section

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
max-w-4xl
mx-auto
"

>


<h1 className="
text-5xl
font-extrabold
text-[#1e2b8f]
dark:text-white
">

Track Your Cycle

<span className="
text-[#e6007e]
">

 With Confidence 💗

</span>

</h1>


<p className="
mt-5
text-gray-600
dark:text-gray-300
text-lg
">

Predict your next period,
ovulation and fertile days
with Girleen smart cycle tracker.

</p>


</motion.section>





{/* CALCULATOR */}

<div className="
max-w-6xl
mx-auto
mt-14
bg-white
dark:bg-gray-900
rounded-[40px]
shadow-2xl
p-8 md:p-12
">


<div className="
grid
md:grid-cols-2
gap-12
">


{/* FORM */}


<div>


<h2 className="
text-3xl
font-bold
text-[#1e2b8f]
dark:text-white
mb-8
">

Cycle Details 🌸

</h2>



<label className="font-semibold dark:text-white">
Last Period Start Date
</label>


<input

type="date"

onChange={(e)=>
setLastPeriod(
new Date(e.target.value)
)
}

className="
w-full
mt-3
p-4
rounded-xl
border
dark:bg-gray-800
dark:text-white
"

/>




<label className="
block
mt-6
font-semibold
dark:text-white
">

Average Cycle Length
(21-45 Days)

</label>


<input

type="number"

value={cycleLength}

onChange={(e)=>
setCycleLength(
Number(e.target.value)
)
}

className="
w-full
mt-3
p-4
rounded-xl
border
dark:bg-gray-800
dark:text-white
"

/>





<label className="
block
mt-6
font-semibold
dark:text-white
">

Period Duration
(2-10 Days)

</label>


<input

type="number"

value={periodDuration}

onChange={(e)=>
setPeriodDuration(
Number(e.target.value)
)
}

className="
w-full
mt-3
p-4
rounded-xl
border
dark:bg-gray-800
dark:text-white
"

/>





<button

onClick={calculateCycle}

className="
mt-8
w-full
py-4
rounded-xl
bg-gradient-to-r
from-[#e6007e]
to-[#1e2b8f]
text-white
font-bold
text-lg
hover:scale-105
transition
"

>

Calculate My Cycle 💕

</button>


</div>





{/* CALENDAR */}


<div className="
flex
justify-center
items-center
">


<DayPicker

mode="single"


modifiers={{
period:
result?.periodDays,

fertile:
result?.fertileDays,

ovulation:
result?.ovulation
}}


modifiersClassNames={{

period:
"bg-pink-400 text-white rounded-full",

fertile:
"bg-pink-100 text-pink-700 rounded-full",

ovulation:
"bg-purple-500 text-white rounded-full"

}}

/>


</div>


</div>


</div>





{/* RESULTS */}


{
result &&

<div className="
max-w-6xl
mx-auto
mt-12
grid
md:grid-cols-4
gap-6
">


<ResultCard
title="Next Period 📅"
value={result.nextPeriod}
/>


<ResultCard
title="Period Ends 🩸"
value={result.periodEnd}
/>


<ResultCard
title="Ovulation 🥚"
value={result.ovulation}
/>


<ResultCard

title="Fertile Window 💖"

value={
`${format(result.fertileStart,"dd MMM")}
 -
${format(result.fertileEnd,"dd MMM")}`
}

/>


</div>

}




{/* DISCLAIMER */}


<div className="
max-w-5xl
mx-auto
mt-14
bg-pink-50
dark:bg-gray-800
rounded-3xl
p-6
text-center
text-gray-600
dark:text-gray-300
">

⚠️ Period predictions are estimates only.
Your actual cycle may vary due to stress,
hormones, lifestyle and health conditions.

</div>



</div>

);

}






function ResultCard({
title,
value
}:any){


return (

<motion.div

whileHover={{
scale:1.05
}}

className="
bg-white
dark:bg-gray-900
rounded-3xl
shadow-xl
p-7
text-center
"


>


<h3 className="
text-[#e6007e]
font-bold
text-lg
">

{title}

</h3>


<p className="
mt-4
font-semibold
text-gray-700
dark:text-white
">


{
value instanceof Date

?

format(
value,
"dd MMM yyyy"
)

:

value

}


</p>


</motion.div>

)

}