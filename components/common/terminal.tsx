"use client"

import { useRef, useState } from "react";
import Label from "./label";

export default function Terminal() {
    const [terminalCommand, setTerminalCommand] = useState("");
    const [terminalOutput, setTerminalOutput] = useState("");
    const [height, setHeight] = useState(250);
    const startY = useRef(0);
    const startHeight = useRef(0);

    enum TerminalCommands {
        Show_Commands = '--show-commands',
        Verify_Candidate = '--verify-candidate',
        Clear = '--clear',
        DownloadResume = '--download-resume'
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
        case TerminalCommands.DownloadResume:
            downloadResume();
            setTerminalCommand('');
            setTerminalOutput('\nResume downloaded...\n\n');
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
      return`Commands: \n1. --show-commands\n2. --clear\n3. --verify-candidate\n4. --download-resume`;
    }

    function downloadResume() {
      const link = document.createElement("a");
      link.href = "/resume.docx";
      link.download = "resume.docx";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function handleTerminalCommand(command:string) {
        validateCommand(command)
    }

    function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
      e.preventDefault();
      startY.current = e.clientY;
      startHeight.current = height;

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseMove(e: MouseEvent) {
      const distanceMovedUp = startY.current - e.clientY;

      const newHeight = startHeight.current + distanceMovedUp;

      setHeight(Math.min(700, Math.max(130, newHeight)));
    }

    function handleMouseUp() {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return (
        <div 
          style={{ height, minHeight: '28vh' }} 
          className='fixed bottom-0 left-0 right-0 bg-[#001e26] border-t border-[#184b55] flex flex-col'>
            {/* drag handle */}
            <div
              onMouseDown={handleMouseDown}
              className="h-1 cursor-row-resize bg-[#184b55]"
            />
            <Label value="Terminal" />
            <div className="flex-1 overflow-y-auto p-2">
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