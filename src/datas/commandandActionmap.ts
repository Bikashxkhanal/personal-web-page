export const CommandAndActions: Array<{
    commandName : string,
    response : string[]
}> = [
    {
        commandName : 'whoami',
        response : ['guest']
    },
    {
        commandName : 'show education',
        response : [
            'BCIST at Apollo Int. College'
        ]
    },
    {
        commandName : 'show projects',
        response : [
            'Chat Application', 
            "Inventory Management System", 
            "Video Streaming Backend",
            "Chat SDK(package)"
        ]
    },
    {
        commandName : 'help',
        response : [
            'whoami',
            'show education',
            'show projects'
        ]
    }
]


export function getCommandResults(command: string) : Array<string> | string {
  return CommandAndActions.find((each) => each.commandName.toLowerCase() === command.toLowerCase().trim())?.response ?? '' 
} 