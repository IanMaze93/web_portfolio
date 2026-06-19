import CodeArray from "../common/codeArray";
import CodeObject from "../common/codeObject";
import Label from "../common/label";

export default function Experience() {
    return (
        <>
            <Label
                value="IanMaze/experience"
            />

            <div className="">
            <CodeArray
                title="positions"
                items={[
                {
                    position: "Software Engineer 2",
                    years: 2,

                },
                {
                    position: "Software Engineer 1",
                    years: 3,
                },
                {
                    position: "IT Support",
                    years: 3,
                }
            ]}
            />
      </div>
      </>
    );
}