import CodeObject from "../common/codeObject";
import Label from "../common/label";
import Logo from "../common/logo";

export default function Summary() {
    return (
        <>
            <Label
                value="IanMaze/home"
            />

            <Logo/>

            <CodeObject
            title="details"
            items={[
                {
                    name: "role",
                    value: "Software Engineer",
                },
                {
                    name: "objective",
                    value: 
                    `Results-driven software engineer with expertise in backend development using SST, TypeScript, and AWS. 
                Skilled in creating scalable, serverless solutions, event-driven architectures, and robust APIs. 
                    
                Seeking to contribute technical expertise and problem-solving abilities to a dynamic team focused 
                on innovation and growth.`,
                },
            ]}
            />
      </>
    );
}