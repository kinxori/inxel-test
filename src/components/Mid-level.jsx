import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function MidLevel() {
  const snippet1 = `  
  export default function ParentComponent(){
    return (
        <article>
        <div>
            <form>
            <input></input>
            <input></input>
            <select>
                <option>Personal</option>
                <option>Company</option>
            </select>
            <button> Add </button>
            </form>
        </div>
        <div>
            <div>
            <button> Personal </button>
            <button> Company </button>
            <button> A-Z </button>
            </div>
            <div> <CardComponent...> </div>
        </div>
        </article>
      );
    }

    function Card(props) {
        return (
          <div>
            <div>
              <h3> {props.name} </h3>
              <h3> +{props.number} </h3>
              <button onClick={null}>
                Remove
              </button>
            </div>
          </div>
        );
      }
  `;

  return (
    <>
      <div id="step-1" className="flex flex-col gap-2 ">
        <h3 className="text-[24px] underline leading-[24px] font-bold my-5  ">Step #1:</h3>
        <p>
          The first step is to create all the JSX/HTML structure. For both parent and child
          component.
        </p>
        <p>It should look similar to this:</p>
        <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
          <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
            <i className="text-black  ">Snippet 1</i>
          </div>
          <hr className="border-white border-[2px]"></hr>
          <SyntaxHighlighter
            language="text"
            customStyle={{ background: "black", color: "white" }}
            showLineNumbers
          >
            {snippet1}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
