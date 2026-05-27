import { toast } from "react-toastify";
import { useState, useEffect } from "react";

function FocusMode() {

  const [seconds, setSeconds] = useState(1500);

  const [isRunning, setIsRunning] =
  useState(false);

  const [sessions, setSessions] =
  useState(

    JSON.parse(
      localStorage.getItem(
        "sessions"
      )
    ) || 0

  );


  useEffect(()=>{

    let timer = null;

    if(isRunning){

      timer = setInterval(()=>{

        setSeconds(prev=>{

          if(prev <= 1){

            clearInterval(timer);

            setIsRunning(false);

            toast.success(
"🎯 Focus Session Completed +50 XP"
);

            setSessions(
prevSessions =>
prevSessions + 1
);

const currentXP = JSON.parse(
localStorage.getItem("xp")
) || 0;

localStorage.setItem(
"xp",
JSON.stringify(
currentXP + 50
)
);

            return 1500;
          }

          return prev - 1;

        });

      },1000);

    }

    return ()=>{

      clearInterval(timer);

    };

  },[isRunning]);


  useEffect(()=>{

    localStorage.setItem(

      "sessions",

      JSON.stringify(
        sessions
      )

    );

  },[sessions]);


  const minutes =
  Math.floor(
    seconds/60
  );

  const remainingSeconds =
  seconds%60;


  return(

<div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">

<h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">

Focus Mode

</h1>


<div className="bg-gray-800 p-6 md:p-10 rounded-2xl text-center w-full max-w-md">

<p className="text-5xl md:text-7xl mb-8">

{minutes}:

{remainingSeconds
.toString()
.padStart(2,"0")}

</p>


<div className="flex flex-col md:flex-row gap-4 justify-center">

<button
onClick={()=>
setIsRunning(true)
}
className="bg-green-600 px-6 py-3 rounded-lg"
>

Start

</button>


<button
onClick={()=>
setIsRunning(false)
}
className="bg-yellow-600 px-6 py-3 rounded-lg"
>

Pause

</button>


<button

onClick={()=>{

setSeconds(
1500
);

setIsRunning(
false
);

}}

className="bg-red-600 px-6 py-3 rounded-lg"
>

Reset

</button>

</div>


<p className="mt-8 text-lg md:text-xl">
    
Completed Sessions:
{sessions}

</p>

</div>

</div>

);

}

export default FocusMode;