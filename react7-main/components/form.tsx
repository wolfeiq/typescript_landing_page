interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
    onBackLeads: any;
  }
  
  const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length < props.characterLimit;
    const updatePromptValue = (text: string) => {
      if (text.length <= props.characterLimit) {
        props.setPrompt(text);
      }
    };
  
    let statusColor = "text-slate-500";
    let statusText = null;
    if (!isPromptValid) {
      statusColor = "text-red-400";
      statusText = `Input must be less than ${props.characterLimit} characters.`;
    }
  
    return (
      <>
        <div className="mb-6 text-slate-400">
          <p>
          Please enter your company&apos;s website. 
          </p>
        </div>
        <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="purepitchai.com"
          value={props.prompt}
          onChange={(e) => updatePromptValue(e.currentTarget.value)}
        ></input>
        <div className={statusColor + " flex justify-between my-2 mb-6 text-sm"}>
          <div>{statusText}</div>
          <div>
            {props.prompt.length}/{props.characterLimit}
          </div>
        </div>
        <button
          className="bg-black disabled:opacity-50 w-full p-2 rounded-md text-lg"
          onClick={props.onSubmit}
          disabled={props.isLoading || !isPromptValid}
        >
          Next
        </button>
        &nbsp;
        <button
          className="bg-black opacity-80 w-full p-2 rounded-md text-lg"
          onClick={props.onBackLeads}
        >
          Back
        </button>
      </>
    );
  };
  
  export default Form;