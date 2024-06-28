
const STRICKTMODE = true
import ANIMATED_3D_404_NOT_FOUND_PAGE_ERROR_V1 from "../assets/StatusCodeGifs/animated-3D-404-not-found-page-error.gif"
import MARIO_GAME_ANIMATION_404_ERROR_PAGE_V3 from "../assets/StatusCodeGifs/mario-game-animation-404--error-page.gif"
const VITE_API_KEY = String(import.meta.env.VITE_API_KEY)

import python from "@/assets/code/python.png"
import c from "@/assets/code/c.png"
import cpp from "@/assets/code/cpp.png"
import csh from "@/assets/code/csh.png"
import java from "@/assets/code/java.png"

const PAGE_LIST = new Array(
  'DekodoSuru',
  'Kodotesuta',
  'IPKogeki',
  "Mitsukeyou",
  "GyakkoSuru",
  "Complition"
)

const TASK_ENUM= Object.freeze(
  {
    LOGIN:'Login', 
    TASK_1:'DekodoSuru_1',
    TASK_2:'Kodotesuta_2',
    TASK_3:"IPKogeki_3",
    TASK_4:"Mitsukeyou_4",
    TASK_5:"GyakkoSuru_5",
    END:"End"
  }
)
const TASKS= 
  [
    'Login', 
    'DekodoSuru_1',
    'Kodotesuta_2',
    "IPKogeki_3",
    "Mitsukeyou_4",
    "GyakkoSuru_5",
    "End"
  ]
const DEKODOSURU_PASSWORD = 'python'
const MITSUKEYOU_PASSWORD = 'boy'
const GYAKKO_PASSWORD = 'stackoverflow'
const CODOTESUTA_PASSWORD='triangle'
const FINALPASSWORD='lsf98sd_11011_striver_ninja_musicandcode'
const QUIZZURL='https://quizizz.com/pro/join'
const POINTS_FOR_TASKS=5
const FUSION_AUTH_STORE = new Map([
  ["CodeWarriors", "aB1@xaB1@x"],
  ["ByteMasters", "zY3#mzY3#m"],
  ["HackSquad", "pQ4*epQ4*e"],
  ["DevNinjas", "vT6!svT6!s"],
  ["ScriptKiddies", "jW7^ojW7^o"],
  ["AlgoRiders", "rU9!frU9!f"],
  ["BinaryBrainiacs", "qK2@cqK2@c"],
  ["CodeCrushers", "uL5#puL5#p"],
  ["DebuggingDucks", "nM8*enM8*e"],
  ["CompileKings", "oH1!toH1!t"],
  ["SyntaxSamurais", "dF3@zdF3@z"],
  ["LogicLions", "gV6#mgV6#m"],
  ["ArrayAvengers", "kN9^bkN9^b"],
  ["VariableVikings", "wR2!gwR2!g"],
  ["FunctionFighters", "xJ5#lxJ5#l"],
  ["CodeDynos", "bQ8*obQ8*o"],
  ["BitManipulators", "mD1@tmD1@t"],
  ["CodeConquerors", "iC3#viC3#v"],
  ["BugHunters", "yP6*myP6*m"],
  ["DataDynamos", "lX9!qlX9!q"]
]);
const STORE_STATE_ENUM = Object.freeze(
  {
    INITIALIZE: 'task_initialize_payload',
    TASKS: 'task_complition_no_',
    WRAP_UP_TASK: 'all_task_complition'
  }
)

export {
  PAGE_LIST,
  TASKS,
  GYAKKO_PASSWORD,
  CODOTESUTA_PASSWORD,
  MITSUKEYOU_PASSWORD,
  STORE_STATE_ENUM,
  DEKODOSURU_PASSWORD,
  TASK_ENUM,
  VITE_API_KEY,
  FUSION_AUTH_STORE,
  ANIMATED_3D_404_NOT_FOUND_PAGE_ERROR_V1,
  MARIO_GAME_ANIMATION_404_ERROR_PAGE_V3,
  STRICKTMODE,
  python,
  c,
  cpp,
  csh,
  java,
  FINALPASSWORD,
  QUIZZURL,
  POINTS_FOR_TASKS
} 

