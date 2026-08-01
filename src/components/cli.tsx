import { useState , useRef} from "react";
import { getCommandResults } from "../datas/commandandActionmap";

const CLI = () => {
    interface Items {
    name : string,
    results : string[]
    }
    const [commandHistory, setCommandHistory] = useState<Items[]>([]);
    const [currentInput, setCurrentInput] = useState<string >('')
    const inputRef = useRef<HTMLInputElement>(null);


    const handleChange = (e : any) => {
        e.preventDefault()
        setCurrentInput(e.target.value)
    }

    const handleClick = () => {
        inputRef.current?.focus()
    }

    const handleKeyDown = (e : any) => {
            switch (e.key) {
                case 'Enter':
                    if(currentInput.toLocaleLowerCase().trim() === 'clear'){
                        setCommandHistory([])
                        setCurrentInput('')
                        return
                    }
                    const response = getCommandResults(currentInput)
                    setCommandHistory((prev) => [
                        ...prev, {name : currentInput, results :typeof response === 'string' ? [response] : [...response]}
                    ])
                    setCurrentInput('')
                
                    break;
            
                default:
                    break;
            }
    }


    

    


    
    return (
        <div className="w-full h-200 bg-gray-700 mx-10 py-10">
            {
                commandHistory.length > 0 && (
                    commandHistory.map((each, idx) => (
                        <div className="px-5"> 
                        <p key={idx}>{`$  ${each.name}`}</p>
                        {
                            each.results.length > 0 && (
                                <div>
                                <span>{`$ `}</span> 
                                
                                {each.results.map((e) => (
                                
                                    <span className="pr-4">{`${e}`}</span>
                               
                                ))}
                                </div>
                            )
                        }
                        </div>
                       
                    ))
                )
            }
            <div className="flex flex-row border-t border-b border-gray-600 gap-0" >
                <p className="text-center pt-2 pl-5 pr-1">{`$ `}</p>
                <input type="text"  className="
                w-full py-2  bg-transparent outline-none border-none focus:outline-none
                focus:ring-0 focus:border-transparent shadow-none focus:shadow-none
                " 
                onChange={handleChange} value={currentInput} ref={inputRef} onClick={handleClick} autoFocus 
                onKeyDown={handleKeyDown}
                />
                

            </div>

            

        </div>
    )
}

export default CLI;