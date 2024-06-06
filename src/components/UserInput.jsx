export default function UserInput({input,setInput}) {

    return (

        <form id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" 
                    value={input.initialInvestment}
                    required 
                    onChange={(event)=> setInput('initialInvestment',event.target.value)}
                     />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" 
                    value={input.annualInvestment}
                    required 
                    onChange={(event)=> setInput('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" 
                    value={input.expectedReturn}
                    required 
                    onChange={(event)=> setInput('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" 
                    value={input.duration}
                    required 
                    onChange={(event)=> setInput('duration',event.target.value)} />
                </p>
            </div>
        </form>
    );
}