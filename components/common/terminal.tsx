"use client"

import { useState } from "react";
import Label from "./label";

export default function Terminal() {
    const [terminalCommand, setTerminalCommand] = useState("");
    const [terminalOutput, setTerminalOutput] = useState("");

    enum TerminalCommands {
        Show_Commands = '--show-commands',
        Verify_Candidate = '--verify-candidate',
        Clear = '--clear'
    }

    function delay(miliSeconds: number) {
        return new Promise((resolve) =>
            setTimeout(resolve, miliSeconds)
        );
    }

    function getPreviousTerminalCommand(command:string) {
        return `IanMaze-PC/Code/web_portfolio:~$ ${command}`;
    }

    function validateCommand(command:string) {
        switch (command) {
        case TerminalCommands.Show_Commands:
            setTerminalOutput(`${getPreviousTerminalCommand(command)}\n${getShowCommandResponse()}\n`);
            setTerminalCommand('');
            break; 
        case TerminalCommands.Verify_Candidate:
            verifyCandidate();
            setTerminalCommand('');
            break;
        case TerminalCommands.Clear:
            setTerminalOutput('');
            setTerminalCommand('');
            break;
        default:
            setTerminalOutput(`${getPreviousTerminalCommand(command)}\n\nFailed: not valid command\n\n`);
            setTerminalCommand('');
        }
    }

    async function verifyCandidate() {
        const messages = [
            `validating starting...`,
            `\nchecking availability......`,
            `\nverifying skills...`,
            `\nCOMPLETE`,
            `\nResult: Valid for employment with your team!\n`
        ];

        let messageCache = '';

        for (const message of messages) {
            messageCache += message;

            setTerminalOutput(messageCache);

            await delay(1000);
        }
    }

    function getShowCommandResponse() {
    return`Commands: \n1. --show-commands\n2. --clear\n3. --verify-candidate`;
    }

    function handleTerminalCommand(command:string) {
        validateCommand(command)
    }

    return (
        <div className='bg-[#001e26] border-r border-l border-b border-[#184b55] rounded-lg whitespace-pre-wrap'>
            <Label value="Terminal" />
            <div className="p-2 h-50 overflow-y-auto resize-y">
                <pre>IanMaze-PC/Code/web_portfolio:~$ <span className="text-green-500">--show-commands</span></pre>
                <pre className="">{terminalOutput}</pre>
                <pre>IanMaze-PC/Code/web_portfolio:~$ <input
                        maxLength={20} 
                        value={terminalCommand}
                        onChange={(e) => setTerminalCommand(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleTerminalCommand(terminalCommand)
                            }
                        }}
                    />
                </pre>
            </div>
        </div>
    );
}